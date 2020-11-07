
//Function to create table incident in SQLite
exports.up = function(knex) {
  return knex.schema.createTable('incidents', (table) => {
    table.increments();
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.decimal('value').notNullable();
    table.string('ong_id').notNullable();

    table.foreign('ong_id').references('id').inTable('ongs');
  });
};

//Function to drop table incident if exists errors
exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};
