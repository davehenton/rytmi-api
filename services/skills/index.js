import Skill from '../../models/skill'

module.exports = {
  getAll: () => {
    return Skill
      .fetchAll()
  },

  get: (id) => {
    return Skill
      .where({id})
      .fetch()
  }
}
