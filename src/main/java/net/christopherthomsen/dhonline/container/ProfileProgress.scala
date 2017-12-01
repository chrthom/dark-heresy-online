package net.christopherthomsen.dhonline.container

import java.lang.{Integer => JavaInt}
import java.util.{List => JavaList}

class ProfileProgress extends DHContainer {
  var fate: JavaInt = _
  var income: JavaInt = _
  var increasedConstitution: JavaInt = _
  var increasedKg: JavaInt = _
  var increasedBf: JavaInt = _
  var increasedSt: JavaInt = _
  var increasedWi: JavaInt = _
  var increasedGe: JavaInt = _
  var increasedIn: JavaInt = _
  var increasedWa: JavaInt = _
  var increasedWk: JavaInt = _
  var increasedCh: JavaInt = _
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

  def getIncreasedKg: JavaInt = increasedKg

  def setIncreasedKg(increasedKg: JavaInt): ProfileProgress = { this.increasedKg = increasedKg ; this }

  def getIncreasedBf: JavaInt = increasedBf

  def setIncreasedBf(increasedBf: JavaInt): ProfileProgress = { this.increasedBf = increasedBf ; this }

  def getIncreasedSt: JavaInt = increasedSt

  def setIncreasedSt(increasedSt: JavaInt): ProfileProgress = { this.increasedSt = increasedSt ; this }

  def getIncreasedWi: JavaInt = increasedWi

  def setIncreasedWi(increasedWi: JavaInt): ProfileProgress = { this.increasedWi = increasedWi ; this }

  def getIncreasedGe: JavaInt = increasedGe

  def setIncreasedGe(increasedGe: JavaInt): ProfileProgress = { this.increasedGe = increasedGe ; this }

  def getIncreasedIn: JavaInt = increasedIn

  def setIncreasedIn(increasedIn: JavaInt): ProfileProgress = { this.increasedIn = increasedIn ; this }

  def getIncreasedWa: JavaInt = increasedWa

  def setIncreasedWa(increasedWa: JavaInt): ProfileProgress = { this.increasedWa = increasedWa ; this }

  def getIncreasedWk: JavaInt = increasedWk

  def setIncreasedWk(increasedWk: JavaInt): ProfileProgress = { this.increasedWk = increasedWk ; this }

  def getIncreasedCh: JavaInt = increasedCh

  def setIncreasedCh(increasedCh: JavaInt): ProfileProgress = { this.increasedCh = increasedCh ; this }

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
