/*
  Author: Kylie Struhs
  Date: May 19 2024
  File name: game-characters-data.js

  Assignment Instructions:
  Instructions:
    1. Set up your project structure as described in the Requirements section.
    2. Create the game-characters-data.js file. This script should log a JSON stringified
    array of game characters objects to the console.
    3. Create the failing-script.js file. This script should log an error message to the stderr.
    This will be used to test the error handling in the GameCharacters class.
    4. Write your first test in game-characters.spec.js. This test should test that data is
    being returned from the game-characters-data script.
    5. Write code in the game-characters.js to make the test pass.
    6. Run your test again to confirm that the test now passes.
    7. Repeat steps 4-6 for the remaining two tests.
    8. Make sure to handle errors properly in your code and tests.

*/

"use strict";

const gameCharacters = [
  { type: "warrior", gender: "female", fact: "generous" },
  { type: "rogue", gender: "male", fact: "trilingual" },
  { type: "mage", gender: "female", fact: "outspoken" },
];

console.log(JSON.stringify(gameCharacters));
