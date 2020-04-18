
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          id: 1,
          project_id: 1,
          task_description: "Create Knex file by running knex init",
          notes: "Install knex first through npm",
          completed: true
        },
        {
          id: 2,
          project_id: 3,
          task_description: "Finish the last sprint of Node Unit 4",
          notes: "Keep coding",
          completed: false
        },
        {
          id: 3,
          project_id: 1,
          task_description: "Create migration files and design tables",
          notes: "Set up data structure",
          completed: true
        },
        {
          id: 4,
          project_id: 1,
          task_description: "Initialize the package.json file",
          notes: "Run npm init",
          completed: true
        }
      ]);
    });
};
