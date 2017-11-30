'use strict';
require('dotenv').config();

let schema = require('bookshelf-schema');
let client = require("knex");
let knex;

if (process.env.NODE_ENV === 'production') {
    knex = client({
        client: 'mysql',
        connection: {
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
        },
    });
}
else {
    knex = require('knex')({
        client: 'sqlite3',
        connection: {
            filename: "./rytmidev.sqlite"
        },
        useNullAsDefault: true
    });
}

let Bookshelf = require('bookshelf')(knex);
Bookshelf.plugin('registry');
Bookshelf.plugin(schema);
module.exports = Bookshelf;