'use strict';

let db = require('./database');
require('./user');
let Profile = db.Model.extend({
    tableName: 'profiles',
    hasTimestamps: true,

    profile: () => {
        return this.hasOne('User');
    }
});

module.exports = db.model('Profile', Profile);