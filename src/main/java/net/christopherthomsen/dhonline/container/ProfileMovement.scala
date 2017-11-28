package net.christopherthomsen.dhonline.container

import java.lang.{Double => JavaDouble}

class ProfileMovement extends Container {
  var half: JavaDouble = _
  var full: JavaDouble = _
  var charge: JavaDouble = _
  var run: JavaDouble = _

  override def indexed: Set[String] = Set()

  def getHalf: JavaDouble = half

  def setHalf(half: JavaDouble): ProfileMovement = { this.half = half ; this }

  def getFull: JavaDouble = full

  def setFull(full: JavaDouble): ProfileMovement = { this.full = full ; this }

  def getCharge: JavaDouble = charge

  def setCharge(charge: JavaDouble): ProfileMovement = { this.charge = charge ; this }

  def getRun: JavaDouble = run

  def setRun(run: JavaDouble): ProfileMovement = { this.run = run ; this }
}
