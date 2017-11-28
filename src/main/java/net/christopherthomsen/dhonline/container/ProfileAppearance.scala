package net.christopherthomsen.dhonline.container

import java.lang.{Long => JavaLong}

class ProfileAppearance extends Container {
  var age: JavaLong = _
  var build: String = _
  var eyes: String = _
  var hair: String = _
  var height: JavaLong = _
  var skin: String = _
  var weight: JavaLong = _

  override def indexed: Set[String] = Set()

  def getAge: JavaLong = age

  def setAge(age: JavaLong): ProfileAppearance = { this.age = age ; this }

  def getBuild: String = build

  def setBuild(build: String): ProfileAppearance = { this.build = build ; this }

  def getEyes: String = eyes

  def setEyes(eyes: String): ProfileAppearance = { this.eyes = eyes ; this }

  def getHair: String = hair

  def setHair(hair: String): ProfileAppearance = { this.hair = hair ; this }

  def getHeight: JavaLong = height

  def setHeight(height: JavaLong): ProfileAppearance = { this.height = height ; this }

  def getSkin: String = skin

  def setSkin(skin: String): ProfileAppearance = { this.skin = skin ; this }

  def getWeight: JavaLong = weight

  def setWeight(weight: JavaLong): ProfileAppearance = { this.weight = weight ; this }
}
