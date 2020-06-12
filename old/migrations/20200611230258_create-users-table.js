exports.up = function (knex, Promise) {
  return knex.schema
    .createTable("recipes", (tbl) => {
      tbl.increments();
      tbl.string("Recipe_Name", 30).notNullable().unique();
    })

    .createTable("ingredients", (tbl) => {
      tbl.increments();
      tbl.string("Ingredient_Name", 30).notNullable();
      tbl.integer("Amount", parseFloat(3)).notNullable();
      tbl.integer("Recipe_Id").references("recipes.Id");
    })

    .createTable("steps", (tbl) => {
      tbl.increments();
      tbl.string("Recipe_Step", 128);
      tbl.integer("Recipe_Id").references("recipes.Id");
    });
};

exports.down = function (knex, Promise) {
  return knex.schema
    .dropTableIfExists("steps")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
