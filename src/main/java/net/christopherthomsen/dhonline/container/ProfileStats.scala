package net.christopherthomsen.dhonline.container

import java.lang.{Integer => JavaInt}

class ProfileStats extends Container {
  var corruption: JavaInt = _
  var fate: JavaInt = _
  var fatigue: JavaInt = _
  var madness: JavaInt = _
  var thrones: JavaInt = _
  var wounds: JavaInt = _

  override def indexed: Set[String] = Set()

  def getCorruption: JavaInt = corruption

  def setCorruption(corruption: JavaInt): ProfileStats = { this.corruption = corruption ; this }

  def getFate: JavaInt = fate

  def setFate(fate: JavaInt): ProfileStats = { this.fate = fate ; this }

  def getFatigue: JavaInt = fatigue

  def setFatigue(fatigue: JavaInt): ProfileStats = { this.fatigue = fatigue ; this }

  def getMadness: JavaInt = madness

  def setMadness(madness: JavaInt): ProfileStats = { this.madness = madness ; this }

  def getThrones: JavaInt = thrones

  def setThrones(thrones: JavaInt): ProfileStats = { this.thrones = thrones ; this }

  def getWounds: JavaInt = wounds

  def setWounds(wounds: JavaInt): ProfileStats = { this.wounds = wounds ; this }
}
