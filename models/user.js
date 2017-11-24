'use strict';

let db = require('./database');
require('./profile');
let User = db.Model.extend({
    tableName: 'users',
    hasTimestamps: true,

    profile: function () {
        return this.hasOne('Profile');
    }
});

module.exports = db.model('User', User);