'use strict';

let knex = require('knex')({ client: 'mysql', connection: process.env.MYSQL_DATABASE_CONNECTION });
let bookshelf = require('bookshelf')(knex);

require('./profile');
let User = Bookshelf.Model.extend({
    tableName: 'users',
    hasTimestamps: true,

    profile: function () {
        return this.hasOne('Profile');
    }
});

module.exports = Bookshelf.model('User', User);