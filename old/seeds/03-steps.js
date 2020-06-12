
exports.seed = function (knex) {

  return knex('steps').truncate()
    .then(function () {
    
      return knex('steps').insert([
        {Recipe_Step: "crack eggs", Recipe_Id: "1"},
        {Recipe_Step: "pour milk", Recipe_Id: "1"},
        {Recipe_Step: "add suger", Recipe_Id: "1"},
        {Recipe_Step: "mix with mixer", Recipe_Id: "1"},
        {Recipe_Step: "bake 350 for 30mins", Recipe_Id: "1"},
        {Recipe_Step: "cut strawbarrys in slices", Recipe_Id: "1"},
        {Recipe_Step: "add topings and whipped cream", Recipe_Id: "1"},

        {Recipe_Step: "crack eggs", Recipe_Id: "2"},
        {Recipe_Step: "pour milk", Recipe_Id: "2"},
        {Recipe_Step: "add suger", Recipe_Id: "2"},
        {Recipe_Step: "mix with mixer", Recipe_Id: "2"},
        {Recipe_Step: "cook on stove for 3 mins ", Recipe_Id: "2"},

        {Recipe_Step: "pour milk", Recipe_Id: "3"},
        {Recipe_Step: "add ice cream", Recipe_Id: "3"},
        {Recipe_Step: "add suger", Recipe_Id: "3"},
        {Recipe_Step: "add strawbarreries", Recipe_Id: "3"},
        {Recipe_Step: "mix with mixer", Recipe_Id: "3"},
      ]);
    });
};
