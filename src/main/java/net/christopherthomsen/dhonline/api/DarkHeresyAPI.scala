package net.christopherthomsen.dhonline.api

import java.util.{List => JavaList}

import com.google.api.server.spi.config._
import com.google.api.server.spi.response.{ForbiddenException, UnauthorizedException}
import net.christopherthomsen.dhonline.container._
import net.christopherthomsen.dhonline.persistence.{InventoryDAO, PlayerDAO, ProfileDAO, StatsDAO}

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
  @ApiMethod(name = "auth.new",
    path = "auth/admin/create/{admin}",
    httpMethod = ApiMethod.HttpMethod.POST)
  def createPlayer(@Named("admin") adminPassword: String, player: Player): Unit = {
    if (adminPassword != "dh") throw new ForbiddenException("Admin password is incorrect")
    else PlayerDAO set player
  }

  @ApiMethod(name = "auth.login",
    path = "auth",
    httpMethod = ApiMethod.HttpMethod.POST)
  def login(auth: DHRequest[Player]): Player = {
    checkLogin(auth)
    PlayerDAO getByUsername auth.username
  }

  @ApiMethod(name = "profile.list",
    path = "profile",
    httpMethod = ApiMethod.HttpMethod.GET)
  def listProfile: JavaList[Profile] = ProfileDAO.list.asJava

  @ApiMethod(name = "profile.get",
    path = "profile/{username}",
    httpMethod = ApiMethod.HttpMethod.GET)
  def getProfile(@Named("username") username: String): Profile = ProfileDAO getByUsername username

  @ApiMethod(name = "profile.set",
    path = "profile",
    httpMethod = ApiMethod.HttpMethod.POST)
  def setProfile(profile: DHRequest[Profile]): Profile = {
    checkLogin(profile)
    ProfileDAO set profile.container
  }

  @ApiMethod(name = "inventory.list",
    path = "inventory",
    httpMethod = ApiMethod.HttpMethod.GET)
  def listInventory: JavaList[Inventory] = InventoryDAO.list.asJava

  @ApiMethod(name = "inventory.get",
    path = "inventory/{username}",
    httpMethod = ApiMethod.HttpMethod.GET)
  def getInventory(@Named("username") username: String): Inventory = InventoryDAO getByUsername username

  @ApiMethod(name = "inventory.set",
    path = "inventory",
    httpMethod = ApiMethod.HttpMethod.POST)
  def setInventory(inventory: DHRequest[Inventory]): Inventory = {
    checkLogin(inventory)
    InventoryDAO set inventory.container
  }

  @ApiMethod(name = "stats.list",
    path = "stats",
    httpMethod = ApiMethod.HttpMethod.GET)
  def listStats: JavaList[Stats] = StatsDAO.list.asJava

  @ApiMethod(name = "stats.get",
    path = "stats/{username}",
    httpMethod = ApiMethod.HttpMethod.GET)
  def getStats(@Named("username") username: String): Stats = StatsDAO getByUsername username

  @ApiMethod(name = "stats.set",
    path = "stats",
    httpMethod = ApiMethod.HttpMethod.POST)
  def setStats(stats: DHRequest[Stats]): Stats = {
    checkLogin(stats)
    StatsDAO set stats.container
  }

  private def checkLogin(request: DHRequest[_]): Unit = {
    println(s"Username: ${request.username}\nPassword: ${request.password}")
    if (Option(request.username).isEmpty || Option(request.password).isEmpty)
      throw new UnauthorizedException("Username and password must not be empty")
    else if ((PlayerDAO getByUsername request.username).password != request.password)
      throw new ForbiddenException("Password is incorrect")
  }
}
