
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('resources').truncate()
        .then(function () {
            // Inserts seed entries
            return knex('resources').insert([
                {
                    name: 'computer',
                    description: 'general purpose productivity tool',
                },
                {
                    name: 'conference room',
                    description: 'place for people to have meetings',
                },
                {
                    name: 'microphone',
                    description: 'tool for enhancing speech volume',
                },
                {
                    name: 'delivery van',
                    description: 'gets the payload from point a to point b',
                },
                {
                    name: 'chair',
                    description: 'tool for sitting and resting',
                },
                {
                    name: 'desk',
                    description: 'space to sit resources',
                }
            ]);
        });
};
