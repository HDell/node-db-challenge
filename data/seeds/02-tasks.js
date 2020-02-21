
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('tasks').truncate()
        .then(function () {
            // Inserts seed entries
            return knex('tasks').insert([
                {
                    desc: 'create spreadsheet',
                    notes: 'collect, organize, and analyze data',
                    completed: false,
                    project_id: 1
                },
                {
                    desc: 'create slideshow',
                    notes: 'create narrative surrounding the data',
                    completed: false,
                    project_id: 1
                },
                {
                    desc: 'plan event',
                    notes: 'project management, logistics, budget, etc.',
                    completed: false,
                    project_id: 2
                },
                {
                    desc: 'execute plan',
                    notes: 'day of, food deliver, sound, etc.',
                    completed: false,
                    project_id: 2
                },
            ]);
        });
};
