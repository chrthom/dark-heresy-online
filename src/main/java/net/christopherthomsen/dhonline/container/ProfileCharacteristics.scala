package net.christopherthomsen.dhonline.container

class ProfileCharacteristics extends Container {
  var kg: Int = _
  var bf: Int = _
  var st: Int = _
  var wi: Int = _
  var ge: Int = _
  var in: Int = _
  var wa: Int = _
  var wk: Int = _
  var ch: Int = _

  override def indexed: Set[String] = Set()

  def getKg: Int = kg

  def setKg(kg: Int): ProfileCharacteristics = { this.kg = kg ; this }

  def getBf: Int = bf

  def setBf(bf: Int): ProfileCharacteristics = { this.bf = bf ; this }

  def getSt: Int = st

  def setSt(st: Int): ProfileCharacteristics = { this.st = st ; this }

  def getWi: Int = wi

  def setWi(wi: Int): ProfileCharacteristics = { this.wi = wi ; this }

  def getGe: Int = ge

  def setGe(ge: Int): ProfileCharacteristics = { this.ge = ge ; this }

  def getIn: Int = in

  def setIn(in: Int): ProfileCharacteristics = { this.in = in ; this }

  def getWa: Int = wa

  def setWa(wa: Int): ProfileCharacteristics = { this.wa = wa ; this }

  def getWk: Int = wk

  def setWk(wk: Int): ProfileCharacteristics = { this.wk = wk ; this }

  def getCh: Int = ch

  def setCh(ch: Int): ProfileCharacteristics = { this.ch = ch ; this }
}
