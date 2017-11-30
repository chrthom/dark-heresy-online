package net.christopherthomsen.dhonline.container

import java.util.{List => JavaList}

abstract class InventoryBase[T <: InventoryBase[T]] extends DHRootContainer[T] {
  var meleeWeapons: JavaList[InventoryWeapon] = _
  var missileWeapons: JavaList[InventoryWeapon] = _
  var gears: JavaList[String] = _

  def getMeleeWeapons: JavaList[InventoryWeapon] = meleeWeapons

  def setMeleeWeapons(meleeWeapons: JavaList[InventoryWeapon]): T = { this.meleeWeapons = meleeWeapons ; this.asInstanceOf[T] }

  def getMissileWeapons: JavaList[InventoryWeapon] = missileWeapons

  def setMissileWeapons(missileWeapons: JavaList[InventoryWeapon]): T = { this.missileWeapons = missileWeapons ; this.asInstanceOf[T] }

  def getGears: JavaList[String] = gears

  def setGears(gears: JavaList[String]): T = { this.gears = gears ; this.asInstanceOf[T] }
}

class Inventory extends InventoryBase[Inventory]