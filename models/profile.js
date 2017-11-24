'use strict';

let knex = require('knex')({ client: 'mysql', connection: process.env.MYSQL_DATABASE_CONNECTION });
let bookshelf = require('bookshelf')(knex);

require('./user');
let Profile = Bookshelf.Model.extend({
    tableName: 'profiles',
    hasTimestamps: true,

    profile: () => {
        return this.hasOne('User');
    }
});

module.exports = Bookshelf.model('Profile', Profile);