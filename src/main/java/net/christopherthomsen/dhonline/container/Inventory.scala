package net.christopherthomsen.dhonline.container

import java.util.{List => JavaList}

abstract class InventoryBase[T <: InventoryBase[T]] extends DHRootContainer[T] {
  var weapons: JavaList[InventoryWeapon] = _
  var gears: JavaList[String] = _

  def getWeapons: JavaList[InventoryWeapon] = weapons

  def setWeapons(weapons: JavaList[InventoryWeapon]): T = { this.weapons = weapons ; this.asInstanceOf[T] }

  def getGears: JavaList[String] = gears

  def setGears(gears: JavaList[String]): T = { this.gears = gears ; this.asInstanceOf[T] }
}

class Inventory extends InventoryBase[Inventory]