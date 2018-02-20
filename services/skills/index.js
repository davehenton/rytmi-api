import models from '../../db/models'

module.exports = {
  getAll: () => {
    return models.Skill
      .findAll()
  },

  get: (id) => {
    return models.Skill
      .findById(id)
  },

  create: (attrs) => {
    delete attrs.id
    return models.Skill
      .build(attrs)
      .save()
  },

  update: (id, attrs) => {
    attrs.id = parseInt(id)
    return models.Skill
      .findById(id)
      .then(skill => {
        return skill
          .update(attrs)
      })
  },

  delete: (id) => {
    return models.Skill
      .findById(id)
      .then(skill => {
        return skill
          .destroy()
      })
  }
}
