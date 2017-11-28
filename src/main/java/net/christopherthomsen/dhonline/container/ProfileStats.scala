package net.christopherthomsen.dhonline.container

import java.lang.{Long => JavaLong}

class ProfileStats extends Container {
  var corruption: JavaLong = _
  var fatigue: JavaLong = _
  var madness: JavaLong = _
  var thrones: JavaLong = _

  override def indexed: Set[String] = Set()

  def getCorruption: JavaLong = corruption

  def setCorruption(corruption: JavaLong): ProfileStats = { this.corruption = corruption ; this }

  def getFatigue: JavaLong = fatigue

  def setFatigue(fatigue: JavaLong): ProfileStats = { this.fatigue = fatigue ; this }

  def getMadness: JavaLong = madness

  def setMadness(madness: JavaLong): ProfileStats = { this.madness = madness ; this }

  def getThrones: JavaLong = thrones

  def setThrones(thrones: JavaLong): ProfileStats = { this.thrones = thrones ; this }
}
