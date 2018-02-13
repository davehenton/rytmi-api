import models from '../../db/models'

module.exports = {
  getAll: () => {
    return models.ProfileSkill
      .findAll()
  },

  getByProfileId: (profileId) => {
    return models.ProfileSkill
      .findAll({where: {profileId: profileId}})
  },

  get: (id) => {
    return models.ProfileSkill
      .findById(id)
  },

  create: (profileId, attrs) => {
    delete attrs.id
    attrs.profileId = parseInt(profileId)
    return models.ProfileSkill
      .build(attrs)
      .save()
  },

  update: (profileId, profileSkillId, attrs) => {
    attrs.id = parseInt(profileId)
    attrs.profileId = parseInt(profileId)
    return models.ProfileSkill
      .findOne({where: {
        id: profileSkillId,
        profileId: profileId
      }})
      .then(profileSkill => {
        return profileSkill
          .update(attrs)
      })
  },

  delete: (profileId, profileSkillId) => {
    return models.ProfileSkill
      .findOne({where: {
        id: profileSkillId,
        profileId: profileId
      }})
      .then(profileSkill => {
        return profileSkill
          .destroy()
      })
  }
}
