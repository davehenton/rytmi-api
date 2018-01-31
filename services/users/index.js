import User from '../../models/user'

module.exports = {
  getAll: () => {
    return User
      .fetchAll()
      .then(users => {
        return users
      })
  },

  get: (id) => {
    return User
      .where({id})
      .fetch()
      .then(user => {
        return user
      })
  }
}
