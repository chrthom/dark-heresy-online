package net.christopherthomsen.dhonline.container

class ProfileAppearance extends Container {
  var age: Int = _
  var build: String = _
  var eyes: String = _
  var hair: String = _
  var height: Int = _
  var skin: String = _
  var weight: Int = _

  override def indexed: Set[String] = Set()

  def getAge: Int = age

  def setAge(age: Int): ProfileAppearance = { this.age = age ; this }

  def getBuild: String = build

  def setBuild(build: String): ProfileAppearance = { this.build = build ; this }

  def getEyes: String = eyes

  def setEyes(eyes: String): ProfileAppearance = { this.eyes = eyes ; this }

  def getHair: String = hair

  def setHair(hair: String): ProfileAppearance = { this.hair = hair ; this }

  def getHeight: Int = height

  def setHeight(height: Int): ProfileAppearance = { this.height = height ; this }

  def getSkin: String = skin

  def setSkin(skin: String): ProfileAppearance = { this.skin = skin ; this }

  def getWeight: Int = weight

  def setWeight(weight: Int): ProfileAppearance = { this.weight = weight ; this }
}
