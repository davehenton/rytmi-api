'use strict';
let fields = require('bookshelf-schema/lib/fields');

let db = require('./database');
require('./project');
let Client = db.Model.extend({
  tableName: 'clients',
  hasTimestamps: true,

  projects: function () {
    return this.hasMany('Project');
  }
}, {
  schema: [
    fields.StringField('name', { required: true, minlength: 2, maxlength: 64 }),
    fields.StringField('description', { maxlength: 4096 })
  ]
});

module.exports = db.model('Client', Client);
