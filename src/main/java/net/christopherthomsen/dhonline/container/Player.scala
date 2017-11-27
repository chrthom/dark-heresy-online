package net.christopherthomsen.dhonline.container

abstract class PlayerBase[T <: PlayerBase[T]] extends RootContainer[T] {
  var username: String = _
  var password: String = _
  var gender: String = _

  override def indexed: Set[String] = Set("username")

  def getUsername: String = username

  def setUsername(username: String): T = { this.username = username ; this.asInstanceOf[T] }

  def getPassword: String = password

  def setPassword(password: String): T = { this.password = password ; this.asInstanceOf[T] }

  def getGender: String = gender

  def setGender(gender: String): T = { this.gender = gender ; this.asInstanceOf[T] }
}

class Player extends PlayerBase[Player]
