/**
 * Author: Kylie Struhs
 * Date: March 30 2024
 * File Name: recipes.js
 * Description: file containing functions to be used in other files
*/

// Define the createRecipe function, take array of ingredients and return a string
function createRecipe(ingredients) {
  let ingredientsArray = ingredients;
  let cooking = "Recipe created with ingredients: " + ingredientsArray.join(", ");
  console.log(cooking);
  return cooking;
}

// Define the setTimer function, take a number of minutes and return a string
function setTimer(minutes) {
  let minutestr = minutes;
  let timer = "Timer set for " + minutestr + " minutes";
  console.log(timer);
  return timer;
}

// Define the quit function, return a string "Program Exited"
function quit() {
  let phrase = "Program exited";
  console.log(phrase);
  return phrase;
}

// Export the functions with module.exports
module.exports = {
  createRecipe: createRecipe,
  setTimer: setTimer,
  quit: quit,
  };