
exports.up = function(knex) {
    return knex.schema.createTable('project_resource', tbl => {
        tbl.increments();
        tbl.integer('project_id')
            .notNullable()
            .references('id')
            .inTable('projects');
        tbl.integer('resource_id')
            .notNullable()
            .references('id')
            .inTable('resources');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('project_resource');
};