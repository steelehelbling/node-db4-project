exports.seed = function (knex) {

  return knex('recipes').truncate()
    .then(function () {
    
      return knex('recipes').insert([
        {Recipe_Name: "pancakes"},
        {Recipe_Name: "pound cake"},
        {Recipe_Name: "strawbarry shake"},
      ]);
    });
};
