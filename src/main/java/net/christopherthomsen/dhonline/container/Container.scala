package net.christopherthomsen.dhonline.container

import java.lang.reflect.Field
import java.lang.{Long => JavaLong}

abstract class Container {
  def get: Map[String, Any] =
    (Map[String, Any]() /: getFields(this.getClass)) { (m, f) =>
      f setAccessible true
      m + (f.getName -> f.get(this))
    }

  def set(k: String, v: Any): Unit = if (Option(v).isDefined)
    this.getClass.getMethods find (_.getName == k + "_$eq") foreach {
      _.invoke(this, if (v.isInstanceOf[Integer])
        v.asInstanceOf[Integer]
      else if (v.isInstanceOf[JavaLong])
        v.asInstanceOf[JavaLong]
      else
        v.asInstanceOf[AnyRef])
    }

  def fieldType(k: String): Class[_] =
    this.getClass.getMethods.find(_.getName == k + "_$eq").get.getParameterTypes()(0)

  def genericFieldType(k: String): Any =
    this.getClass.getMethods.find(_.getName == k + "_$eq").get.getGenericParameterTypes()(0)

  def indexed: Set[String]

  private def getFields(clazz: Class[_], fields: List[Field] = Nil): List[Field] =
    if (Option(clazz.getSuperclass).isEmpty || clazz.getSuperclass == classOf[Container])
      clazz.getDeclaredFields.toList ::: fields
    else getFields(clazz.getSuperclass, clazz.getDeclaredFields.toList ::: fields)
}

abstract class RootContainer[T <: RootContainer[T]] extends Container {
  var id: String = _
  var timestamp: JavaLong = System.currentTimeMillis

  def getId: String = id

  def setId(id: String): T = {
    this.id = id
    this.asInstanceOf[T]
  }

  def getTimestamp: JavaLong = timestamp

  def setTimestamp(timestamp: Long): T = {
    this.timestamp = timestamp
    this.asInstanceOf[T]
  }
}

class StringTuple extends Container {
  var key: String = _
  var value: String = _

  override def indexed: Set[String] = Set[String]()

  def getKey: String = key

  def setKey(key: String): StringTuple = {
    this.key = key
    this
  }

  def getValue: String = value

  def setValue(value: String): StringTuple = {
    this.value = value
    this
  }
}

class IntTuple extends Container {
  var key: String = _
  var value: Int = _

  override def indexed: Set[String] = Set[String]()

  def getKey: String = key

  def setKey(key: String): IntTuple = {
    this.key = key
    this
  }

  def getValue: Int = value

  def setValue(value: Int): IntTuple = {
    this.value = value
    this
  }
}