let fields = require('bookshelf-schema/lib/fields')
let db = require('./database')
require('./profile')
require('./project')

let ProjectProfile = db.Model.extend({
  tableName: 'projects-profiles',
  hasTimestamps: true,

  profile: () => {
    return this.belongsTo('Profile')
  },
  project: () => {
    return this.belongsTo('Project')
  }
}, {
  schema: [
    fields.StringField('description', { maxlength: 2048 }),
    fields.StringField('experiences', { maxlength: 2048 }),
    fields.DateField('beginning', { required: true }),
    fields.DateField('end')
  ]
})

module.exports = db.model('ProjectProfile', ProjectProfile)
