/**
 * Author: Kylie Struhs
 * Date: April 21 2024
 * File Name: pie.js
 * Description: file containing bakePie function
 * Instructions: In the pie.js file, you will write a function named bakePie that takes a type of pie and
  an array of ingredients. The function should return a message indicating whether
  the pie was successfully baked or not. If an essential ingredient is missing, the
  function should log a warning message and call process.exit(1).
    a. The essential ingredients are: flour, sugar, and butter.
 */

"use strict";

// readline to get input from user
const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function pieQuestion() {
  rl.question(`What type of pie are you baking today?`, (pieType) => {
    console.log(`Ok, let's start preparing a ${pieType} pie.`);
    rl.close;
    rl.question(
      `What type of ingredients will you use in your pie? Enter those ingredients in a comma separated list. Do not use spaces.`,
      (collectedIngredients) => {
        console.log(`Your ingredients are: ${collectedIngredients}`);
        rl.close;
        let ingredients = [];
        ingredients = collectedIngredients.split(",");
        console.log(ingredients);

        bakePie(pieType, ingredients);
      }
    );
  });
}

// using user inputs, check if ingredients array has all required ingredients. Give user hints as to what they may need.
function bakePie(pieType, ingredients) {
  if (ingredients.includes("flour") === false) {
    console.log("Your pie dough did not come together. Try adding flour.");
  } else if (ingredients.includes("butter") === false) {
    console.log("Your pie dough was not wet enough. Try adding butter.");
  } else if (ingredients.includes("sugar") === false) {
    console.log("Your pie was not sweet enough. Try adding sugar.");
  } else if (
    ingredients.includes("butter") === true ||
    ingredients.includes("sugar") === true ||
    ingredients.includes("flour") === true
  ) {
    console.log("You have successfully baked a " + pieType + " pie!");
  } else {
    console.warn("Warning: You are missing two or more essential ingredients.");
    process.exit(1);
  }
}

pieQuestion();

module.exports = { bakePie };
