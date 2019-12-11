/*
Index.js
Tasks:
when Get Recipes! button is clicked needs to filter available recipes and post them to the DOM.

*/

//get handlebarred recipe. (name= name of recipe, photurl=picture of recipe, ingredients= array of ingredients)
function insertRecipe(name, photoURL, ingredients){
  var recipeHTML = Handlebars.templates.recipe({
      name: name,
      photoURL: photoURL,
      ingredients: ingredients,
      });
  var recipeContainer = document.getElementById("recipe-container");
  recipeContainer.insertAdjacentHTML('beforeend', recipeHTML);

  console.log("==== postHTML", recipeHTML);
};


var recipes;

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    recipes = xhttp.responseText;
    console.log(recipes);
  }
};
xhttp.open("GET", "/recipes", true);
xhttp.send();



// var recipeArray = JSON.parse(string(recipes));

// recipes = string(recipes);
console.log(recipes);


//  checks all the checkboxes to see which ones are clicked. returns recipes containing checked checkboxes
//  preferably in order of how many boxes are checked
function generateRecipes() {

  console.log("clicked")
  // var recipes = require('./../recipeData.json');

  //  all checkboxes
  var boxes = document.getElementsByTagName('input');

  //  string array of checked ingredients
  var checkedIngredients = [];
  var count = 0;


  //  makes array (checkedIngredients) of ingredients checked; subset of boxes
  if(window){
    for(var i = 0; i < boxes.length; i++){
      if(boxes[i].checked){
        console.log(boxes[i].value);
        checkedIngredients[count] = boxes[i].value;
        count++;
      }
    }
  }

  console.log(checkedIngredients);


}


window.addEventListener('DOMContentLoaded', function(){

  var getRecipesButton = document.getElementById("generate-recipes");
  getRecipesButton.addEventListener("click", function(){
    generateRecipes();
  });





});





//
