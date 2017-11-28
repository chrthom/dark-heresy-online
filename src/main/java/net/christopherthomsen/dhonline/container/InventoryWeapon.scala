package net.christopherthomsen.dhonline.container

import java.lang.{Long => JavaLong}

class InventoryWeapon extends Container {
  var name: String = _
  var ammo: JavaLong = _

  override def indexed: Set[String] = Set()

  def getName: String = name

  def setName(name: String): InventoryWeapon = { this.name = name ; this }

  def getAmmo: JavaLong = ammo

  def setAmmo(ammo: JavaLong): InventoryWeapon = { this.ammo = ammo ; this }
}
