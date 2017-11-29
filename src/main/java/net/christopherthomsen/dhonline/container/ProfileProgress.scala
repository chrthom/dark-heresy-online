package net.christopherthomsen.dhonline.container

import java.lang.{Integer => JavaInt}

class ProfileProgress extends Container {
  var fate: JavaInt = _
  var income: JavaInt = _
  var level: JavaInt = _
  var wounds: JavaInt = _
  var xp: JavaInt = _
  var xpFree: JavaInt = _

  override def indexed: Set[String] = Set()

  def getFate: JavaInt = fate

  def setFate(fate: JavaInt): ProfileProgress = { this.fate = fate ; this }

  def getIncome: JavaInt = income

  def setIncome(income: JavaInt): ProfileProgress = { this.income = income ; this }

  def getLevel: JavaInt = level

  def setLevel(level: JavaInt): ProfileProgress = { this.level = level ; this }

  def getWounds: JavaInt = wounds

  def setWounds(wounds: JavaInt): ProfileProgress = { this.wounds = wounds ; this }

  def getXp: JavaInt = xp

  def setXp(xp: JavaInt): ProfileProgress = { this.xp = xp ; this }

  def getXpFree: JavaInt = xpFree

  def setXpFree(xpFree: JavaInt): ProfileProgress = { this.xpFree = xpFree ; this }
}
