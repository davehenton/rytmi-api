'use strict';
let fields = require('bookshelf-schema/lib/fields');

let db = require('./database');
require('./profile');
require('./skill');
let ProfileSkill = db.Model.extend({
    tableName: 'profiles-skills',
    hasTimestamps: true,

    profile: () => {
        return this.belongsTo('Profile');
    },
    skill: () => {
        return this.belongsTo('Skill');
    }
}, {
        schema: [
            fields.BooleanField('knows'),
            fields.BooleanField('wantsTo'),
            fields.BooleanField('visibleInCV'),
            fields.StringField('description', { maxlength: 1024 })
        ]
    });

module.exports = db.model('ProfileSkill', ProfileSkill);