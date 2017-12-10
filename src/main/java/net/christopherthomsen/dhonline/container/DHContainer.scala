package net.christopherthomsen.dhonline.container

import com.fasterxml.jackson.annotation.JsonTypeInfo

abstract class DHContainer extends Container {
  override def indexed: Set[String] = Set()
}

abstract class DHRootContainer[T <: DHRootContainer[T]] extends RootContainer[T] {
  var username: String = _

  override def indexed: Set[String] = Set("username")

  def getUsername: String = username

  def setUsername(username: String): T = { this.username = username ; this.asInstanceOf[T] }
}

class DHRequest[T] {
  var username: String = _
  var password: String = _
  @JsonTypeInfo(use = JsonTypeInfo.Id.CLASS,
    include = JsonTypeInfo.As.PROPERTY,
    property="@class")
  var container: T = _

  def getUsername: String = username

  def setUsername(username: String): DHRequest[T] = { this.username = username ; this }

  def getPassword: String = password

  def setPassword(password: String): DHRequest[T] = { this.password = password ; this }

  def getContainer: T = container

  def setContainer(container: T): DHRequest[T] = { this.container = container ; this }
}