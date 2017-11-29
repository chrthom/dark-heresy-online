package net.christopherthomsen.dhonline.container

import java.lang.{Integer => JavaInt}

abstract class StatsBase[T <: StatsBase[T]] extends DHRootContainer[T] {
  var corruption: JavaInt = _
  var fate: JavaInt = _
  var fatigue: JavaInt = _
  var madness: JavaInt = _
  var thrones: JavaInt = _
  var wounds: JavaInt = _

  def getCorruption: JavaInt = corruption

  def setCorruption(corruption: JavaInt): T = { this.corruption = corruption ; this.asInstanceOf[T] }

  def getFate: JavaInt = fate

  def setFate(fate: JavaInt): T = { this.fate = fate ; this.asInstanceOf[T] }

  def getFatigue: JavaInt = fatigue

  def setFatigue(fatigue: JavaInt): T = { this.fatigue = fatigue ; this.asInstanceOf[T] }

  def getMadness: JavaInt = madness

  def setMadness(madness: JavaInt): T = { this.madness = madness ; this.asInstanceOf[T] }

  def getThrones: JavaInt = thrones

  def setThrones(thrones: JavaInt): T = { this.thrones = thrones ; this.asInstanceOf[T] }

  def getWounds: JavaInt = wounds

  def setWounds(wounds: JavaInt): T = { this.wounds = wounds ; this.asInstanceOf[T] }
}

class Stats extends StatsBase[Stats]