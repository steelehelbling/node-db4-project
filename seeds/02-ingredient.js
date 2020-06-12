exports.seed = function (knex) {

  return knex('ingredients').truncate()
    .then(function () {
     
      return knex('ingredients').insert([
        { Ingredient_Name: "milk", Amount: 10, Recipe_Id: "1" },
        { Ingredient_Name: "eggs", Amount: 10, Recipe_Id: "1" },
        { Ingredient_Name: "sour cream", Amount: 10, Recipe_Id: "1" },
        { Ingredient_Name: "suger", Amount: 10, Recipe_Id: "1" },
        { Ingredient_Name: "strawbarry", Amount: 10, Recipe_Id: "1" },
        { Ingredient_Name: "wipped cream", Amount: 10, Recipe_Id: "1" },

        { Ingredient_Name: "milk", Amount: 10, Recipe_Id: "2" },
        { Ingredient_Name: "eggs", Amount: 10, Recipe_Id: "2" },

        { Ingredient_Name: "strawbarry", Amount: 10, Recipe_Id: "3" },
        { Ingredient_Name: "milk", Amount: 10, Recipe_Id: "3" },
        { Ingredient_Name: "ice cream", Amount: 10, Recipe_Id: "3" },

      ]);
    });
};
