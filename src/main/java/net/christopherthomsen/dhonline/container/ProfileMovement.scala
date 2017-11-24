package net.christopherthomsen.dhonline.container

class ProfileMovement extends Container {
  var half: Double = _
  var full: Double = _
  var charge: Double = _
  var run: Double = _

  override def indexed: Set[String] = Set()

  def getHalf: Double = half

  def setHalf(half: Double): ProfileMovement = { this.half = half ; this }

  def getFull: Double = full

  def setFull(full: Double): ProfileMovement = { this.full = full ; this }

  def getCharge: Double = charge

  def setCharge(charge: Double): ProfileMovement = { this.charge = charge ; this }

  def getRun: Double = run

  def setRun(run: Double): ProfileMovement = { this.run = run ; this }
}
