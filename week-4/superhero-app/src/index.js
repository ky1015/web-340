/**
 * Author: Kylie Struhs
 * Date: April 14 2024
 * File Name: index.js
 * Description:
 */

"use strict";

const readline = require("readline");
const SuperheroEmitter = require("./superhero");

const superhero = new SuperheroEmitter();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// TODO: Set up event listeners for the superhero object
rl.on("line", (input) => {
  const [command, ...args] = input.split(" ");


// on command action fly, print "Superhero performs action: fly"
superhero.on("action", (action) => {
  console.log(`Superhero performs action: ${action}`);
});

// on command "danger fire", print "Superhero encounters danger: fire"
superhero.on("danger", (danger) => {
  console.log(`Superhero encounters danger: ${danger}`);
});

// on command "help Mary Jane", print "Superhero helps: Mary Jane"
superhero.on("help", (person) => {
  console.log(`Superhero helps: ${person}`);
});

  // TODO: Handle the commands
  if (input == "action fly") {
  superhero.emit("action", "fly");
  } else if (input == "danger fire") {
  superhero.emit("danger", "fire");
  } else if (input == "help Mary Jane") {
  superhero.emit("help", "Mary Jane");
  } else {
    console.log("Please input a valid command")
  }
});
console.log(`Enter a command: "action", "danger", or "help", followed by a space and the argument`);