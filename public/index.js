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
      console.log("==== postHTML", recipeHTML);
};

//insert recipeHTML into the dom
var recipeContainer = document.getElementById("recipe-container");
recipeContainer.insertAdjacentHTML('beforeend', recipeHTML);

//get an event listener on the button
var getRecipesButton = document.getElementById("generate-recipes");
getRecipesButton.addEventListener("click", generateRecipes());

//checks all the checkboxes to see which ones are clicked. returns recipes containing checked checkboxes
function generateRecipes() {
    
}