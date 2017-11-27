package net.christopherthomsen.dhonline.container

import java.lang.{Long => JavaLong}

class ProfileCharacteristics extends Container {
  var kg: JavaLong = _
  var bf: JavaLong = _
  var st: JavaLong = _
  var wi: JavaLong = _
  var ge: JavaLong = _
  var in: JavaLong = _
  var wa: JavaLong = _
  var wk: JavaLong = _
  var ch: JavaLong = _

  override def indexed: Set[String] = Set()

  def getKg: JavaLong = kg

  def setKg(kg: JavaLong): ProfileCharacteristics = { this.kg = kg ; this }

  def getBf: JavaLong = bf

  def setBf(bf: JavaLong): ProfileCharacteristics = { this.bf = bf ; this }

  def getSt: JavaLong = st

  def setSt(st: JavaLong): ProfileCharacteristics = { this.st = st ; this }

  def getWi: JavaLong = wi

  def setWi(wi: JavaLong): ProfileCharacteristics = { this.wi = wi ; this }

  def getGe: JavaLong = ge

  def setGe(ge: JavaLong): ProfileCharacteristics = { this.ge = ge ; this }

  def getIn: JavaLong = in

  def setIn(in: JavaLong): ProfileCharacteristics = { this.in = in ; this }

  def getWa: JavaLong = wa

  def setWa(wa: JavaLong): ProfileCharacteristics = { this.wa = wa ; this }

  def getWk: JavaLong = wk

  def setWk(wk: JavaLong): ProfileCharacteristics = { this.wk = wk ; this }

  def getCh: JavaLong = ch

  def setCh(ch: JavaLong): ProfileCharacteristics = { this.ch = ch ; this }
}
