package net.christopherthomsen.dhonline.container

class ProfileProgress extends Container {
  var fate: Int = _
  var income: Int = _
  var level: Int = _
  var wounds: Int = _
  var xp: Int = _
  var xpFree: Int = _

  override def indexed: Set[String] = Set()

  def getFate: Int = fate

  def setFate(fate: Int): ProfileProgress = { this.fate = fate ; this }

  def getIncome: Int = income

  def setIncome(income: Int): ProfileProgress = { this.income = income ; this }

  def getLevel: Int = level

  def setLevel(level: Int): ProfileProgress = { this.level = level ; this }

  def getWounds: Int = wounds

  def setWounds(wounds: Int): ProfileProgress = { this.wounds = wounds ; this }

  def getXp: Int = xp

  def setXp(xp: Int): ProfileProgress = { this.xp = xp ; this }

  def getXpFree: Int = xpFree

  def setXpFree(xpFree: Int): ProfileProgress = { this.xpFree = xpFree ; this }
}
