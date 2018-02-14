import models from '../../db/models'

module.exports = {
  getAll: () => {
    return models.User
      .findAll()
  },

  get: (id) => {
    return models.User
      .findById(id)
  },

  create: (attrs) => {
    delete attrs.id
    return models.User
      .build(attrs)
      .save()
  },

  update: (id, attrs) => {
    attrs.id = parseInt(id)
    return models.User
      .findById(id)
      .then(user => {
        return user.update(attrs)
      })
  }
}
