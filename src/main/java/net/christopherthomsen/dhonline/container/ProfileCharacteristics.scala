package net.christopherthomsen.dhonline.container

import java.lang.{Integer => JavaInt}

class ProfileCharacteristics extends DHContainer {
  var kg: JavaInt = _
  var bf: JavaInt = _
  var st: JavaInt = _
  var wi: JavaInt = _
  var ge: JavaInt = _
  var in: JavaInt = _
  var wa: JavaInt = _
  var wk: JavaInt = _
  var ch: JavaInt = _

  def getKg: JavaInt = kg

  def setKg(kg: JavaInt): ProfileCharacteristics = { this.kg = kg ; this }

  def getBf: JavaInt = bf

  def setBf(bf: JavaInt): ProfileCharacteristics = { this.bf = bf ; this }

  def getSt: JavaInt = st

  def setSt(st: JavaInt): ProfileCharacteristics = { this.st = st ; this }

  def getWi: JavaInt = wi

  def setWi(wi: JavaInt): ProfileCharacteristics = { this.wi = wi ; this }

  def getGe: JavaInt = ge

  def setGe(ge: JavaInt): ProfileCharacteristics = { this.ge = ge ; this }

  def getIn: JavaInt = in

  def setIn(in: JavaInt): ProfileCharacteristics = { this.in = in ; this }

  def getWa: JavaInt = wa

  def setWa(wa: JavaInt): ProfileCharacteristics = { this.wa = wa ; this }

  def getWk: JavaInt = wk

  def setWk(wk: JavaInt): ProfileCharacteristics = { this.wk = wk ; this }

  def getCh: JavaInt = ch

  def setCh(ch: JavaInt): ProfileCharacteristics = { this.ch = ch ; this }
}
