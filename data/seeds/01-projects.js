
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('projects').truncate()
        .then(function () {
            // Inserts seed entries
            return knex('projects').insert([
                {
                    name: 'forecast presentation',
                    description: 'build a budget forecast and present it',
                    completed: false
                },
                {
                    name: 'host gala',
                    description: 'host a dinner for prominent figures',
                    completed: false
                }
            ]);
        });
};
