import Profile from '../../models/profile'

module.exports = {
  getActive: () => {
    return Profile
      .where({active: true})
      .fetchAll()
      .then(profiles => {
        return profiles
      })
  },

  getAll: () => {
    return Profile
      .fetchAll()
      .then(profiles => {
        return profiles
      })
  },

  get: (id) => {
    return Profile
      .where({id})
      .fetch()
      .then(profile => {
        return profile
      })
  }
}
