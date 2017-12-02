package net.christopherthomsen.dhonline.container

import java.lang.{Integer => JavaInt}
import java.util.{List => JavaList}

class ProfileProgress extends DHContainer {
  var fate: JavaInt = _
  var income: JavaInt = _
  var increasedConstitution: JavaInt = _
  var increasedKG: JavaInt = _
  var increasedBF: JavaInt = _
  var increasedST: JavaInt = _
  var increasedWI: JavaInt = _
  var increasedGE: JavaInt = _
  var increasedIN: JavaInt = _
  var increasedWA: JavaInt = _
  var increasedWK: JavaInt = _
  var increasedCH: JavaInt = _
  var level: JavaInt = _
  var previousRanks: JavaList[String] = _
  var wounds: JavaInt = _
  var xp: JavaInt = _
  var xpFree: JavaInt = _

  def getFate: JavaInt = fate

  def setFate(fate: JavaInt): ProfileProgress = { this.fate = fate ; this }

  def getIncome: JavaInt = income

  def setIncome(income: JavaInt): ProfileProgress = { this.income = income ; this }

  def getIncreasedConstitution: JavaInt = increasedConstitution

  def setIncreasedConstitution(increasedConstitution: JavaInt): ProfileProgress = { this.increasedConstitution = increasedConstitution ; this }

  def getIncreasedKG: JavaInt = increasedKG

  def setIncreasedKG(increasedKG: JavaInt): ProfileProgress = { this.increasedKG = increasedKG ; this }

  def getIncreasedBF: JavaInt = increasedBF

  def setIncreasedBF(increasedBF: JavaInt): ProfileProgress = { this.increasedBF = increasedBF ; this }

  def getIncreasedST: JavaInt = increasedST

  def setIncreasedST(increasedST: JavaInt): ProfileProgress = { this.increasedST = increasedST ; this }

  def getIncreasedWI: JavaInt = increasedWI

  def setIncreasedWI(increasedWI: JavaInt): ProfileProgress = { this.increasedWI = increasedWI ; this }

  def getIncreasedGE: JavaInt = increasedGE

  def setIncreasedGE(increasedGE: JavaInt): ProfileProgress = { this.increasedGE = increasedGE ; this }

  def getIncreasedIN: JavaInt = increasedIN

  def setIncreasedIN(increasedIN: JavaInt): ProfileProgress = { this.increasedIN = increasedIN ; this }

  def getIncreasedWA: JavaInt = increasedWA

  def setIncreasedWA(increasedWA: JavaInt): ProfileProgress = { this.increasedWA = increasedWA ; this }

  def getIncreasedWK: JavaInt = increasedWK

  def setIncreasedWK(increasedWK: JavaInt): ProfileProgress = { this.increasedWK = increasedWK ; this }

  def getIncreasedCH: JavaInt = increasedCH

  def setIncreasedCH(increasedCH: JavaInt): ProfileProgress = { this.increasedCH = increasedCH ; this }

  def getLevel: JavaInt = level

  def setLevel(level: JavaInt): ProfileProgress = { this.level = level ; this }

  def getPreviousRanks: JavaList[String] = previousRanks

  def setPreviousRanks(previousRanks: JavaList[String]): ProfileProgress = { this.previousRanks = previousRanks ; this }

  def getWounds: JavaInt = wounds

  def setWounds(wounds: JavaInt): ProfileProgress = { this.wounds = wounds ; this }

  def getXp: JavaInt = xp

  def setXp(xp: JavaInt): ProfileProgress = { this.xp = xp ; this }

  def getXpFree: JavaInt = xpFree

  def setXpFree(xpFree: JavaInt): ProfileProgress = { this.xpFree = xpFree ; this }
}
