let fields = require('bookshelf-schema/lib/fields')
let db = require('./database')
require('./profile-skill')

let Skill = db.Model.extend({
  tableName: 'skills',
  hasTimestamps: true,

  profiles: () => {
    return this.hasMany('ProfileSkill')
  }
}, {
  schema: [
    fields.StringField('name', { minlength: 5, maxlength: 64 }),
    fields.StringField('description', { minlength: 32, maxlength: 4096 })
  ]
})

module.exports = db.model('Skill', Skill)
