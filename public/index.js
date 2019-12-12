/*
Index.js
Tasks:
when Get Recipes! button is clicked needs to filter available recipes and post them to the DOM.

*/



var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {

    recipes = JSON.parse(xhttp.responseText);
  }
};
xhttp.open("GET", "/recipes", true);
xhttp.send();




function insertRecipe(name, photoURL, ingredients, count){
  var recipeHTML = Handlebars.templates.recipeTemplate({
    name: name,
    photoURL: photoURL,
    ingredients: ingredients
  });

  var recipeContainer = document.getElementById("recipe-section");

  console.log("==== postHTML", recipeHTML);
  console.log(typeof(recipeHTML));
  recipeContainer.insertAdjacentHTML('beforeend', recipeHTML);

};



//  checks all the checkboxes to see which ones are clicked. returns recipes containing checked checkboxes
//  preferably in order of how many boxes are checked
function generateRecipes() {



  //  all checkboxes
  var boxes = document.getElementsByTagName('input');

  //  string array of checked ingredients
  var checkedIngredients = [];
  var count = 0;


  //  makes array (checkedIngredients) of ingredients checked; subset of boxes
  if(window){
    for(var i = 0; i < boxes.length; i++){
      if(boxes[i].checked){
        checkedIngredients[count] = boxes[i].value;
        count++;
      }
    }
  }

//  alerts user if no boxes are checked
if(checkedIngredients.length == 0){
  alert("Please check a box ");
}



  recipes = recipes["recipes"];



var s = recipes.length;


//  changes ingredients to strings so i can compare them to checkedIngredients
// for(var i = 0; i < recipes.length; i++){
//   for(var j = 0; j < recipes[i].ingredients.length; j++){
//
//     recipes[i].ingredients[j] = JSON.stringify(recipes[i].ingredients[j]);
//     recipes[i].ingredients[j] = recipes[i].ingredients[j].split("\"");
//     recipes[i].ingredients[j] = recipes[i].ingredients[j][3];
//
//   }
// }


//  array of recipes matching 1 or more ingredients
var checkedRecipes = [];


//  checks for instances where boxes checked match ingredients
//  adds matched recipes to checkedRecipes
for(var i = 0; i < recipes.length; i++){
  for(var j = 0; j < recipes[i].ingredients.length; j++){
    for(var k = 0; k < checkedIngredients.length; k++){
      if(checkedIngredients[k] == recipes[i].ingredients[j].ingredient){
          if(recipes[i].count == 0){
            checkedRecipes[checkedRecipes.length] = recipes[i];
          }
        recipes[i].count++;
      }
    }
  }
}



console.log(checkedRecipes);

for(var i = 0; i < checkedRecipes.length; i++){
  // insertRecipe();

  // console.log(checkedRecipes[i].name);
  // console.log(checkedRecipes[i].photoURL);
  // console.log(checkedRecipes[i].ingredients);
}


insertRecipe(recipes[0].name, 'https://i.imgur.com/qbXEeIb.jpg', recipes[0].ingredients, 0);



}








window.addEventListener('DOMContentLoaded', function(){

  if(document.getElementById("generate-recipes")){
    var getRecipesButton = document.getElementById("generate-recipes");
    getRecipesButton.addEventListener("click", function(){
      generateRecipes();
    });
  }





});





//
