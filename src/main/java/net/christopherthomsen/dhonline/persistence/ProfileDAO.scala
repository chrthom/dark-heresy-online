package net.christopherthomsen.dhonline.persistence

import com.google.appengine.api.datastore.{KeyFactory, Query}
import net.christopherthomsen.dhonline.container.Profile

object ProfileDAO extends DAO {
  def list: Seq[Profile] = query(new Query(cn(classOf[Profile])), new Profile)

  def get(id: String): Profile =
    entity2Container(super.get(KeyFactory stringToKey id), new Profile)

  def insert(profile: Profile): Profile =
    profile setId KeyFactory.keyToString(super.insert(container2Entity(profile)))

  def update(profile: Profile): Profile = {
    super.insert(container2Entity(profile, KeyFactory.stringToKey(profile.getId).getId))
    profile
  }
}
