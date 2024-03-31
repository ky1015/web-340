/**
 * Author: Kylie Struhs
 * Date: March 30 2024
 * File Name: index.js
 * Description: file containing modules from recipes.js
*/

// Import your module using require, require statement says which functions to get from which file if that file has the module.export object

const {createRecipe, setTimer, quit} = require("./recipes");


// Implement your CLI program here, call all functions
createRecipe();
setTimer();
quit();