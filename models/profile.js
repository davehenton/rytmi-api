'use strict';
let fields = require('bookshelf-schema/lib/fields');

let db = require('./database');
require('./user');
require('./profile-skill');
require('./projecthour');
let Profile = db.Model.extend({
    tableName: 'profiles',
    hasTimestamps: true,

    user: () => {
        return this.belongsTo('User');
    },
    skills: () => {
        return this.hasMany('ProfileSkill');
    },
    hours: () => {
        return this.hasMany('ProjectHour');
    }
}, {
    schema: [
        fields.StringField('title', { minlength: 5, maxlength: 64 }),
        fields.StringField('description', { minlength: 32, maxlength: 2048 }),
        fields.StringField('ext_resume_url', { validurl: true }),
        fields.StringField('photo_path'),
        fields.BooleanField('active', { required: true })
    ]
});

module.exports = db.model('Profile', Profile);