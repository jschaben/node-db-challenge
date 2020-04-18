
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {
          id: 1,
          name: "VS Code",
          description: "code writing tool"
        },
        {
          id: 2,
          name: "SQLite Studio ",
          description: "helps look at and build tables"
        },
        {
          id: 3,
          name: "PC",
          description: "stores information"
        }
      ]);
    });
};
