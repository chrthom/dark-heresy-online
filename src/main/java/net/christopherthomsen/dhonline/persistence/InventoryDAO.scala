package net.christopherthomsen.dhonline.persistence

import com.google.api.server.spi.response.NotFoundException
import com.google.appengine.api.datastore.Query.{FilterOperator, FilterPredicate}
import com.google.appengine.api.datastore.{KeyFactory, Query}
import net.christopherthomsen.dhonline.container.Inventory

object InventoryDAO extends DAO {
  def list: Seq[Inventory] = query(new Query(cn(classOf[Inventory])), new Inventory)

  def get(id: String): Inventory =
    entity2Container(super.get(KeyFactory stringToKey id), new Inventory)

  def getByUsername(username: String): Inventory = try {
    val filter = new FilterPredicate("username", FilterOperator.EQUAL, username)
    query(new Query(cn(classOf[Inventory])) setFilter filter, new Inventory).head
  } catch {
    case _: NoSuchElementException => throw new NotFoundException(s"No inventory for username $username was found.")
  }

  def set(inventory: Inventory): Inventory = try {
    val existingInventory = getByUsername(inventory.username)
    insert(container2Entity(inventory, KeyFactory.stringToKey(inventory.getId).getId))
    inventory
  } catch {
    case _: NotFoundException => inventory setId KeyFactory.keyToString(insert(container2Entity(inventory)))
  }
}
