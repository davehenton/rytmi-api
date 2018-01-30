let fields = require('bookshelf-schema/lib/fields')
let db = require('./database')
require('./project')
require('./profile')

let ProjectHour = db.Model.extend({
  tableName: 'projecthours',
  hasTimestamps: true,

  profile: () => {
    return this.belongsTo('Profile')
  },
  project: () => {
    return this.belongsTo('Project')
  }
}, {
  schema: [
    fields.DateField('date', { required: true }),
    fields.IntField('minutes', { max: 1440 }),
    fields.StringField('description', { maxlength: 1024 })
  ]
})

module.exports = db.model('ProjectHour', ProjectHour)
