//Variables to export connection between Knexfile.js Development Configuration and SQLite

const knex = require('knex');
const configuration = require('../../knexfile');
const connection = knex(configuration.development);

module.exports = connection;