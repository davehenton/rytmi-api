let fields = require('bookshelf-schema/lib/fields')
let db = require('./database')
require('./profile')
require('./skill')

let ProfileSkill = db.Model.extend({
  tableName: 'profiles_skills',
  hasTimestamps: true,

  profile: () => {
    return this.belongsTo('Profile')
  },
  skill: () => {
    return this.belongsTo('Skill')
  }
}, {
  schema: [
    fields.IntField('knows', { greaterThanEqualTo: 0, lessThanEqualto: 5 }),
    fields.IntField('wantsTo', { greaterThanEqualTo: 0, lessThanEqualto: 5 }),
    fields.BooleanField('visibleInCV'),
    fields.StringField('description', { maxlength: 1024 })
  ]
})

module.exports = db.model('ProfileSkill', ProfileSkill)
