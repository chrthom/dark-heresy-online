package net.christopherthomsen.dhonline.api

import java.util.{List => JavaList}

import com.google.api.server.spi.config._
import com.google.api.server.spi.response.NotFoundException
import com.google.appengine.api.datastore.EntityNotFoundException
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
  def listTech: JavaList[Profile] = ProfileDAO.list.asJava

  @ApiMethod(name = "character.get",
    path = "character/{id}",
    httpMethod = ApiMethod.HttpMethod.GET)
  def getTech(@Named("id") characterId: String): Profile = try {
    ProfileDAO get characterId
  } catch {
    case e: EntityNotFoundException => throw new NotFoundException(e)
  }

  @ApiMethod(name = "character.insert",
    path = "character",
    httpMethod = ApiMethod.HttpMethod.POST)
  def insertTech(character: Profile): Profile = ProfileDAO insert character

  @ApiMethod(name = "character.update",
    path = "character",
    httpMethod = ApiMethod.HttpMethod.PUT)
  def updateTech(character: Profile): Profile = ProfileDAO update character
}
