package net.christopherthomsen.dhonline.container

abstract class DHContainer extends Container {
  override def indexed: Set[String] = Set()
}

abstract class DHRootContainer[T <: DHRootContainer[T]] extends RootContainer[T] {
  var username: String = _

  override def indexed: Set[String] = Set("username")

  def getUsername: String = username

  def setUsername(username: String): T = { this.username = username ; this.asInstanceOf[T] }
}