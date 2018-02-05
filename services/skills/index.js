import models from '../../db/models'

module.exports = {
  getAll: () => {
    return models.Skill
      .findAll()
  },

  get: (id) => {
    return models.Skill
      .findById(id)
  }
}
