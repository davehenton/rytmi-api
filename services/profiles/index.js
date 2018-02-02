import models from '../../db/models'

module.exports = {
  getActive: () => {
    return models.Profile
      .findAll({where: {active: true}})
  },

  getAll: () => {
    return models.Profile
      .findAll()
  },

  get: (id) => {
    return models.Profile
      .findById(id)
  },

  create: (attrs) => {
    delete attrs.id
    return models.Profile
      .build(attrs)
      .save()
  },

  update: (id, attrs) => {
    attrs.id = id
    delete attrs.userId
    return models.Profile
      .findById(id)
      .then(profile => {
        return profile.update(attrs)
      })
  }
}
