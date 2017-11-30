'use strict';
let fields = require('bookshelf-schema/lib/fields');

let db = require('./database');
require('./profile');
require('./project');
let ProfileProject = db.Model.extend({
    tableName: 'profiles-projects',
    hasTimestamps: true,

    profile: () => {
        return this.belongsTo('Profile');
    },
    project: () => {
        return this.belongsTo('Project');
    }
}, {
        schema: [
            fields.StringField('description', { maxlength: 2048 }),
            fields.StringField('experiences', { maxlength: 2048 }),
            fields.DateField('beginning', { required: true }),
            fields.DateField('end')
        ]
    });

module.exports = db.model('ProfileProject', ProfileProject);