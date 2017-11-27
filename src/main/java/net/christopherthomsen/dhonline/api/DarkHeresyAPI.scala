package net.christopherthomsen.dhonline.api

import java.util.{List => JavaList}

import com.google.api.server.spi.config._
import net.christopherthomsen.dhonline.container.Profile
import net.christopherthomsen.dhonline.persistence.ProfileDAO

import scala.collection.JavaConverters._

@Api(canonicalName = "Dark Heresy",
  description = "Services for retrieving and storing Dark Heresy information",
  name = "dh",
  namespace = new ApiNamespace(
    ownerDomain = "christopher-thomsen.net",
    ownerName = "Christopher Thomsen",
    packagePath = "net/christopherthomsen/dhonline"),
  title = "darkheresy",
  version = "v1")
class DarkHeresyAPI {
  @ApiMethod(name = "character.list",
    path = "character",
    httpMethod = ApiMethod.HttpMethod.GET)
  def listProfile: JavaList[Profile] = ProfileDAO.list.asJava

  @ApiMethod(name = "character.get",
    path = "character/{username}",
    httpMethod = ApiMethod.HttpMethod.GET)
  def getProfile(@Named("username") username: String): Profile =
    ProfileDAO getByUsername username

  @ApiMethod(name = "character.set",
    path = "character",
    httpMethod = ApiMethod.HttpMethod.POST)
  def setProfile(character: Profile): Profile = ProfileDAO set character
}
