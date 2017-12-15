'use strict';
let fields = require('bookshelf-schema/lib/fields');

let db = require('./database');
require('./client');
require('./project-profile');
require('./project-skill');
require('./projecthour');
let Project = db.Model.extend({
    tableName: 'projects',
    hasTimestamps: true,

    profiles: () => {
        return this.hasMany('ProjectProfile');
    },
    skills: () => {
        return this.hasMany('ProjectSkill');
    },
    client: () => {
        return this.belongsToOne('Client');
    },
    hours: () => {
        return this.hasMany('ProjectHour');
    }
}, {
        schema: [
            fields.StringField('name', { minlength: 5, maxlength: 64 }),
            fields.StringField('description', { maxlength: 4096 }),
            fields.DateField('beginning', { required: true }),
            fields.StringField('location'),
            fields.IntField('neededPeople'),
            fields.DateField('end'),
            fields.BooleanField('internal'),
            fields.StringField('clientContact'),
            fields.StringField('internalContact'),
            fields.StringField('internalTechnicalContact')
        ]
    });

module.exports = db.model('Project', Project);