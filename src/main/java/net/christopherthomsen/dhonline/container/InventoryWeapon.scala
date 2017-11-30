package net.christopherthomsen.dhonline.container

import java.lang.{Integer => JavaInt}

class InventoryWeapon extends DHContainer {
  var name: String = _
  var quality: JavaInt = _
  var ammo: JavaInt = _

  def getName: String = name

  def setName(name: String): InventoryWeapon = { this.name = name ; this }

  def getQuality: JavaInt = quality

  def setQuality(quality: JavaInt): InventoryWeapon = { this.quality = quality ; this }

  def getAmmo: JavaInt = ammo

  def setAmmo(ammo: JavaInt): InventoryWeapon = { this.ammo = ammo ; this }
}
