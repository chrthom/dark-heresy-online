package net.christopherthomsen.dhonline.container

import java.lang.{Integer => JavaInt}

class ProfileAppearance extends DHContainer {
  var age: JavaInt = _
  var build: String = _
  var eyes: String = _
  var hair: String = _
  var height: JavaInt = _
  var skin: String = _
  var weight: JavaInt = _

  def getAge: JavaInt = age

  def setAge(age: JavaInt): ProfileAppearance = { this.age = age ; this }

  def getBuild: String = build

  def setBuild(build: String): ProfileAppearance = { this.build = build ; this }

  def getEyes: String = eyes

  def setEyes(eyes: String): ProfileAppearance = { this.eyes = eyes ; this }

  def getHair: String = hair

  def setHair(hair: String): ProfileAppearance = { this.hair = hair ; this }

  def getHeight: JavaInt = height

  def setHeight(height: JavaInt): ProfileAppearance = { this.height = height ; this }

  def getSkin: String = skin

  def setSkin(skin: String): ProfileAppearance = { this.skin = skin ; this }

  def getWeight: JavaInt = weight

  def setWeight(weight: JavaInt): ProfileAppearance = { this.weight = weight ; this }
}
