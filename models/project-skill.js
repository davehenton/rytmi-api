'use strict';
let fields = require('bookshelf-schema/lib/fields');

let db = require('./database');
require('./project');
require('./skill');
let ProjectSkill = db.Model.extend({
    tableName: 'projects-skills',
    hasTimestamps: true,

    project: () => {
        return this.belongsTo('Project');
    },
    skill: () => {
        return this.belongsTo('Skill');
    }
}, {
        schema: [
            fields.StringField('description', { maxlength: 1024 })
        ]
    });

module.exports = db.model('ProjectSkill', ProjectSkill);