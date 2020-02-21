
exports.up = function(knex) {
    return knex.schema.createTable('tasks', tbl => {
        tbl.increments();
        tbl.text('desc')
            .notNullable();
        tbl.text('notes');
        tbl.boolean('completed')
            .defaultTo(false)
            .notNullable();
        tbl.integer('project_id')
            .notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('tasks');
};