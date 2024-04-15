/**
 * Author: Kylie Struhs
 * Date: April 14 2024
 * File Name: superhero.spec.js
 * Description:
 */

/*
For the class module, write three (3) different unit tests in superhero-spec.js using
the Node.js assert library. Each test should register an event listener for the emitted
event, call the class method, and print either a pass or fail message to the console.
5. Each test should be wrapped in a function named testFunctionDescription, where
functionDescription is a brief description of what the test does. For example, a test
for the performAction method could be named testPerformAction.
6. Inside each test function, use a try/catch block to run the test and catch any errors.
If the test passes, print a message indicating it passed are return true. If the test
fails, print a message indicating the test failed and return false. Below is an example
to get you started:
function testPerformAction() {
83
try {
// register an event listener for the ‘action’ event
// call the perform action method
console.log(“Passed testPerformAction”);
return true;
} catch(err) {
console.error(`Failed testPerformAction: ${err}`);
return false;
}
}
*/
"use strict";

const assert = require("assert");
const SuperheroEmitter = require("../src/superhero");

const superhero = new SuperheroEmitter();



// TODO: Write tests for the SuperheroEmitter using TDD principles

function testPerformAction () {
  try {
    superhero.on("action", (action) => {
    });
    superhero.emit("action", "fly");
    console.log("Passed test performAction.")
    return true;
} catch(err) {
    console.error(`Your superhero did not take action. Failed testPerformAction: ${err}`);
    return false;
  }
}

function testEncounterDanger() {
  try {
    superhero.on("danger", (danger) => {
    });
    superhero.emit("danger", "fire");
    console.log("Passed testEncounterDanger");
    return true;
    }
   catch(err) {
    console.error(`Your superhero did not see the danger in time. Failed testEncounterDanger: ${err}`);
    return false;
  }
}

function testHelpSomeone () {
  try {
    superhero.on("help", (person) => {
    });
    superhero.emit("help", "Mary Jane");
    console.log("Passed testHelpSomeone");
  } catch(err) {
    console.error(`Your superhero did not save the civilians. Failed testHelpSomeone: ${err}`);
    return false;
  }
}

// call the test functions
testPerformAction();
testEncounterDanger();
testHelpSomeone();