package net.christopherthomsen.dhonline.persistence

import java.lang.reflect.ParameterizedType
import java.util.{List => JavaList}

import com.google.appengine.api.datastore._
import net.christopherthomsen.dhonline.container.{Container, RootContainer}

import scala.collection.JavaConverters._

abstract class DAO {
  protected def query[T <: Container](q: Query, c: T, limit: Option[Int] = None) = try { {
    (DatastoreServiceFactory.getDatastoreService prepare q) asList {
      if (limit.isDefined)
        FetchOptions.Builder withLimit limit.get
      else
        FetchOptions.Builder withDefaults
    } asScala
  } map (e => entity2Container(e, c.getClass.newInstance))
  } catch {
    case _: DatastoreNeedIndexException => Nil
  }

  protected def queryOne[T <: Container](q: Query, c: T): T = {
    val entity = (DatastoreServiceFactory.getDatastoreService prepare q asSingleEntity)
    if (Option(entity).isEmpty)
      throw new IllegalArgumentException("No elements found")
    entity2Container(entity, c)
  }

  protected def get(key: Key) = DatastoreServiceFactory.getDatastoreService get key

  protected def bulkGet(keys: JavaList[Key]) = DatastoreServiceFactory.getDatastoreService get keys

  protected def insert(e: Entity) = DatastoreServiceFactory.getDatastoreService put e

  protected def delete(key: Key) = DatastoreServiceFactory.getDatastoreService delete key

  protected def getNumeric(p: PropertyContainer, key: String) = p.getProperty(key) match {
    case null => null
    case x => Long.box(x.toString.toLong)
  }

  protected def getString(p: PropertyContainer, key: String) = p.getProperty(key) match {
    case null => null
    case x => x.toString
  }

  protected def container2Entity(c: Container, keyId: Long = 0L) =
    fillEntity(c,
      if (keyId > 0) new Entity(c.getClass.getSimpleName.toLowerCase, keyId)
      else new Entity(c.getClass.getSimpleName.toLowerCase))

  protected def entity2Container[T <: Container](p: PropertyContainer, c: T): T = {
    p.getProperties.asScala foreach {
      x =>
        c.set(x._1, x._2 match {
          case v: EmbeddedEntity => entity2Container(v, c.fieldType(x._1).newInstance.asInstanceOf[Container])
          case v: JavaList[_] =>
            try {
              val clazz = c.genericFieldType(x._1).asInstanceOf[ParameterizedType].getActualTypeArguments()(0).asInstanceOf[Class[_]]
              v.asScala.map(e => entity2Container(e.asInstanceOf[EmbeddedEntity], clazz.newInstance.asInstanceOf[Container])).asJava
            } catch {
              case e: ClassCastException => v
            }
          case v => v
        })
    }
    if (p.isInstanceOf[Entity] && c.isInstanceOf[RootContainer[_]])
      c.asInstanceOf[RootContainer[Nothing]].id = KeyFactory.keyToString(p.asInstanceOf[Entity].getKey)
    c
  }

  protected def cn(clazz: Class[_ <: Container]) = clazz.getSimpleName.toLowerCase

  private def fillEntity[T <: PropertyContainer](c: Container, p: T): T = {
    c.get foreach {
      x =>
        if (x._1 != "id") {
          val value = x._2 match {
            case v: Container => fillEntity(v, new EmbeddedEntity)
            case v: JavaList[_] =>
              try {
                v.asScala.map(i => fillEntity(i.asInstanceOf[Container], new EmbeddedEntity)).asJava
              } catch {
                case e: ClassCastException => x._2
              }
            case _ => x._2
          }
          if (c.indexed contains x._1)
            p setIndexedProperty(x._1, value)
          else
            p setUnindexedProperty(x._1, value)
        }
    }
    p
  }
}
