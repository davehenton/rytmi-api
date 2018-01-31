import ProfileSkill from '../../models/profile-skill'

module.exports = {
  getByProfileId: (profileId) => {
    return ProfileSkill
      .where({profile_id: profileId})
      .fetchAll()
      .then(profileSkills => {
        return profileSkills
      })
  },

  get: (id) => {
    return ProfileSkill
      .where({id})
      .fetch()
      .then(profileSkill => {
        return profileSkill
      })
  }
}
