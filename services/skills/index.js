import Skill from '../../models/skill'

module.exports = {
  getAll: () => {
    return Skill
      .fetchAll()
      .then(skills => {
        return skills
      })
  },

  get: (id) => {
    return Skill
      .where({id})
      .fetch()
      .then(skill => {
        return skill
      })
  }
}
