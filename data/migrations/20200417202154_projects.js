
exports.up = function(knex) {
    return knex.schema
    .createTable("projects", tbl => {
      tbl.increments();
      tbl.string("name", 180).notNullable();
      tbl.string("description", 250);
      tbl.boolean("completed").defaultTo(false);
    })
    .createTable("resources", tbl => {
      tbl.increments();
      tbl
        .string("name", 180)
        .notNullable()
        .unique();
      tbl.string("description", 250);
    })
    .createTable("tasks", tbl => {
      tbl.increments();
      tbl.integer("project_id").unsigned();
      tbl.foreign("project_id").references("projects.id");
      tbl.string("task_description", 255).notNullable();
      tbl.string("notes", 250);
      tbl.boolean("completed").defaultTo(false);
    })
    .createTable("project_resources", tbl => {
      tbl.primary(["project_id", "resource_id"]);

      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");

      tbl
        .integer("resource_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("resources")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    }); 
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("project_resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects");
};
