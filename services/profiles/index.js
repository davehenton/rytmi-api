import Profile from '../../models/profile'

module.exports = {
  getActive: () => {
    return Profile
      .where({active: true})
      .fetchAll()
  },

  getAll: () => {
    return Profile
      .fetchAll()
  },

  get: (id) => {
    return Profile
      .where({id})
      .fetch()
  },

  update: (id, attrs) => {
    return Profile
      .forge({id})
      .fetch()
      .then(user => {
        return user
          .set(attrs)
          .set({id})
          .save()
      })
  }
}
