package net.christopherthomsen.dhonline.container

import java.lang.{Integer => JavaInt}
import java.util.{List => JavaList}

abstract class ProfileBase[T <: ProfileBase[T]] extends DHRootContainer[T] {
  var appearance: ProfileAppearance = _
  var bionics: JavaList[NumericTuple] = _
  var career: String = _
  var characteristics: ProfileCharacteristics = _
  var divination: String = _
  var gender: String = _
  var homeworld: String = _
  var name: String = _
  var onboardingStep: JavaInt = _
  var progress: ProfileProgress = _
  var psiPowers: JavaList[String] = _
  var rank: String = _
  var sanction: String = _
  var scholastica: NumericTuple = _
  var skills: JavaList[NumericTuple] = _
  var socialClass: String = _
  var traits: JavaList[String] = _

  def getAppearance: ProfileAppearance = appearance

  def setAppearance(appearance: ProfileAppearance): T = { this.appearance = appearance ; this.asInstanceOf[T] }

  def getBionics: JavaList[NumericTuple] = bionics

  def setBionics(bionics: JavaList[NumericTuple]): T = { this.bionics = bionics ; this.asInstanceOf[T] }

  def getCareer: String = career

  def setCareer(career: String): T = { this.career = career ; this.asInstanceOf[T] }

  def getCharacteristics: ProfileCharacteristics = characteristics

  def setCharacteristics(characteristics: ProfileCharacteristics): T = { this.characteristics = characteristics ; this.asInstanceOf[T] }

  def getDivination: String = divination

  def setDivination(divination: String): T = { this.divination = divination ; this.asInstanceOf[T] }

  def getGender: String = gender

  def setGender(gender: String): T = { this.gender = gender ; this.asInstanceOf[T] }

  def getHomeworld: String = homeworld

  def setHomeworld(homeworld: String): T = { this.homeworld = homeworld ; this.asInstanceOf[T] }

  def getName: String = name

  def setName(name: String): T = { this.name = name ; this.asInstanceOf[T] }

  def getOnboardingStep: JavaInt = onboardingStep

  def setOnboardingStep(onboardingStep: JavaInt): T = { this.onboardingStep = onboardingStep ; this.asInstanceOf[T] }

  def getProgress: ProfileProgress = progress

  def setProgress(progress: ProfileProgress): T = { this.progress = progress ; this.asInstanceOf[T] }

  def getPsiPowers: JavaList[String] = psiPowers

  def setPsiPowers(psiPowers: JavaList[String]): T = { this.psiPowers = psiPowers ; this.asInstanceOf[T] }

  def getRank: String = rank

  def setRank(rank: String): T = { this.rank = rank ; this.asInstanceOf[T] }

  def getSanction: String = sanction

  def setSanction(sanction: String): T = { this.sanction = sanction ; this.asInstanceOf[T] }

  def getScholastica: NumericTuple = scholastica

  def setScholastica(scholastica: NumericTuple): T = { this.scholastica = scholastica ; this.asInstanceOf[T] }

  def getSkills: JavaList[NumericTuple] = skills

  def setSkills(skills: JavaList[NumericTuple]): T = { this.skills = skills ; this.asInstanceOf[T] }

  def getSocialClass: String = socialClass

  def setSocialClass(socialClass: String): T = { this.socialClass = socialClass ; this.asInstanceOf[T] }

  def getTraits: JavaList[String] = traits

  def setTraits(traits: JavaList[String]): T = { this.traits = traits ; this.asInstanceOf[T] }
}

class Profile extends ProfileBase[Profile]