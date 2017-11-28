package net.christopherthomsen.dhonline.container

import java.lang.{Long => JavaLong}

class ProfileProgress extends Container {
  var fate: JavaLong = _
  var income: JavaLong = _
  var level: JavaLong = _
  var wounds: JavaLong = _
  var xp: JavaLong = _
  var xpFree: JavaLong = _

  override def indexed: Set[String] = Set()

  def getFate: JavaLong = fate

  def setFate(fate: JavaLong): ProfileProgress = { this.fate = fate ; this }

  def getIncome: JavaLong = income

  def setIncome(income: JavaLong): ProfileProgress = { this.income = income ; this }

  def getLevel: JavaLong = level

  def setLevel(level: JavaLong): ProfileProgress = { this.level = level ; this }

  def getWounds: JavaLong = wounds

  def setWounds(wounds: JavaLong): ProfileProgress = { this.wounds = wounds ; this }

  def getXp: JavaLong = xp

  def setXp(xp: JavaLong): ProfileProgress = { this.xp = xp ; this }

  def getXpFree: JavaLong = xpFree

  def setXpFree(xpFree: JavaLong): ProfileProgress = { this.xpFree = xpFree ; this }
}
