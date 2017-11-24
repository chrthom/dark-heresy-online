package net.christopherthomsen.dhonline.container

class ProfileStats extends Container {
  var corruption: Int = _
  var fatigue: Int = _
  var madness: Int = _

  override def indexed: Set[String] = Set()

  def getCorruption: Int = corruption

  def setCorruption(corruption: Int): ProfileStats = { this.corruption = corruption ; this }

  def getFatigue: Int = fatigue

  def setFatigue(fatigue: Int): ProfileStats = { this.fatigue = fatigue ; this }

  def getMadness: Int = madness

  def setMadness(madness: Int): ProfileStats = { this.madness = madness ; this }
}
