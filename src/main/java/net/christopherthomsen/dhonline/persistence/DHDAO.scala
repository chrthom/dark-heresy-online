package net.christopherthomsen.dhonline.persistence

import com.google.api.server.spi.response.NotFoundException
import com.google.appengine.api.datastore.{KeyFactory, Query}
import com.google.appengine.api.datastore.Query.{FilterOperator, FilterPredicate}
import net.christopherthomsen.dhonline.container._

import scala.reflect.ClassTag

abstract class DHDAO[T <: DHRootContainer[T]] extends DAO {
  def list(implicit t: ClassTag[T]): Seq[T] = query[T](new Query(cn(t.runtimeClass.asInstanceOf[Class[T]])))

  def get(id: String)(implicit t: ClassTag[T]): T =
    entity2Container(super.get(KeyFactory stringToKey id), t.runtimeClass.newInstance.asInstanceOf[T])

  def getByUsername(username: String)(implicit t: ClassTag[T]): T = try {
    val filter = new FilterPredicate("username", FilterOperator.EQUAL, username)
    query[T](new Query(cn(t.runtimeClass.asInstanceOf[Class[T]])) setFilter filter, 1).head
  } catch {
    case _: NoSuchElementException => throw new NotFoundException(s"No ${t.toString} for username $username was found")
  }

  def set(container: T)(implicit t: ClassTag[T]): T = try {
    getByUsername(container.username)(t)
    insert(container2Entity(container, KeyFactory.stringToKey(container.getId).getId))
    container
  } catch {
    case _: NotFoundException => container setId KeyFactory.keyToString(insert(container2Entity(container)))
  }
}

object PlayerDAO extends DHDAO[Player]
object InventoryDAO extends DHDAO[Inventory]
object ProfileDAO extends DHDAO[Profile]
object StatsDAO extends DHDAO[Stats]

