package net.christopherthomsen.dhonline.persistence

import com.google.api.server.spi.response.NotFoundException
import com.google.appengine.api.datastore.Query.{FilterOperator, FilterPredicate}
import com.google.appengine.api.datastore.{KeyFactory, Query}
import net.christopherthomsen.dhonline.container.Profile

object ProfileDAO extends DAO {
  def list: Seq[Profile] = query(new Query(cn(classOf[Profile])), new Profile)

  def get(id: String): Profile =
    entity2Container(super.get(KeyFactory stringToKey id), new Profile)

  def getByUsername(username: String): Profile = try {
    val filter = new FilterPredicate("username", FilterOperator.EQUAL, username)
    query(new Query(cn(classOf[Profile])) setFilter filter, new Profile).head
  } catch {
    case _: NoSuchElementException => throw new NotFoundException(s"No profile for username $username was found.")
  }

  def set(profile: Profile): Profile = try {
    val existingProfile = getByUsername(profile.username)
    insert(container2Entity(profile, KeyFactory.stringToKey(profile.getId).getId))
    profile
  } catch {
    case _: NotFoundException => profile setId KeyFactory.keyToString(insert(container2Entity(profile)))
  }
}
