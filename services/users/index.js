import User from '../../models/user'
import Profile from '../../models/profile'

module.exports = {
  getAll: () => {
    return User.fetchAll()
  },

  get: (id) => {
    return User.where({id}).fetch()
  },

  create: (attrs) => {
    return User
      .forge(attrs)
      .unset('id')
      .save()
      .then(user => {
        return Profile
          .forge({
            user_id: user.id,
            active: attrs.active
          })
          .save()
          .then(profile => {
            return {user, profile}
          })
      })
  },

  update: (id, attrs) => {
    return User
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
