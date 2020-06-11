
exports.up = function(knex) {
  return knex.schema.createTable('projects', tbl => {
      tbl.increments();
      tbl.text('name')
          .notNullable();
      tbl.text('description');
      tbl.boolean('completed')
          .defaultTo(false)
          .notNullable();
  });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('projects');
};