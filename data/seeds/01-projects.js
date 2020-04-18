
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          id: 1,
          name: "Node DB Sprint Challenge",
          description: "Complete in three hours",
          completed: true
        },
        {
          id: 2,
          name: "Labs Project",
          description: "Complete the project in 16 weeks",
          completed: false
        },
        {
          id: 3,
          name: "Complete Unit 4 Node Sprint",
          description: "Complete the Unit 4 Sprint in 3 hours",
          completed: false
        }
      ]);
    });
};
