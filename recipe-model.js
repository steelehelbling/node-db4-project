const knex = require("knex");
const config = require("./knexfile");
const db = knex(config.development);

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
};

function getRecipes() {
  return db("recipes")
 
}

function getShoppingList(id) {
  return db("ingredients")
    .select("Ingredient_Name", "Amount")
    .where({ Recipe_Id: id });
}
function getInstructions(id) {
  return db("steps").select("Recipe_Step").where({ Recipe_Id: id });
}
