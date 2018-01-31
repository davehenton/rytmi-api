import ProfileSkill from '../../models/profile-skill'

module.exports = {
  getByProfileId: (profileId) => {
    return ProfileSkill
      .where({profile_id: profileId})
      .fetchAll()
  },

  get: (id) => {
    return ProfileSkill
      .where({id})
      .fetch()
  },

  create: (profileId, attrs) => {
    return ProfileSkill
      .forge(attrs)
      .set('profile_id', profileId)
      .unset('id')
      .save()
  },

  update: (profileId, profileSkillId, attrs) => {
    return ProfileSkill
      .forge({
        id: profileSkillId,
        profile_id: profileId
      })
      .fetch()
      .then(profileSkill => {
        return profileSkill
          .set(attrs)
          .unset('id', 'profile_id')
          .save()
      })
  },

  delete: (profileId, profileSkillId) => {
    return ProfileSkill
      .forge({
        id: profileSkillId,
        profile_id: profileId
      })
      .fetch()
      .then(profileSkill => {
        return profileSkill
          .destroy()
      })
  }
}
