package net.christopherthomsen.dhonline.container

abstract class PlayerBase[T <: PlayerBase[T]] extends DHRootContainer[T] {
  var password: String = _
  var gender: String = _

  def getPassword: String = password

  def setPassword(password: String): T = { this.password = password ; this.asInstanceOf[T] }

  def getGender: String = gender

  def setGender(gender: String): T = { this.gender = gender ; this.asInstanceOf[T] }
}

class Player extends PlayerBase[Player]
