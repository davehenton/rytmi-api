'use strict';
let fields = require('bookshelf-schema/lib/fields');

let db = require('./database');
require('./profile');
let User = db.Model.extend({
  tableName: 'users',
  hasTimestamps: true,

  profile: function () {
    return this.hasOne('Profile');
  }
}, {
  schema: [
    fields.StringField('username', { required: true, minlength: 2, maxlength: 64 }),
    fields.EmailField('email', { required: true }),
    fields.StringField('phone'),
    fields.DateField('birthday'),
    fields.BooleanField('active', { required: true }),
    fields.BooleanField('admin', { required: true }),
    fields.EncryptedStringField('password', { minlength: 8, maxlength: 64 })
  ]
});

module.exports = db.model('User', User);
