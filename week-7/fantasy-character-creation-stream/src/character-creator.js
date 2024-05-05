/*
  Name: Kylie Struhs
  Date: May 5 2024
  file name: character-creator.js

    Instructions: In your package.json file, add a test script. Remember to install Jest as a dev
    dependency.
    1. In the character-creator.js file create a CharacterCreator class that extends the
      Duplex stream class from Node.js’s built-in stream module. The class should
      process character creation data and output a formatted description.
    2. The CharacterCreator class should take data about the character’s class (Warrior,
      Mage, Rogue), gender (Male, Female, Other), and a fun fact about the character.
    3. Write three-unit tests for your CharacterCreator class in the charactercreator.
      spec.js file. Each test should cover a diKerent aspect about the class’s
      functionality:
        a. Test 1: The CharacterCreator processes data correctly when written to.
        b. Test 2: The CharacterCreator emits an “error” event when an empty string is
          written to it.
        c. Test 3: The CharacterCreator transforms the data correctly when written to.
    4. Follow TDD principles: write a failing test, make it pass, then refactor. Repeat this
      process for each unit test.
    Hints:
    • Use the push method in your Duplex stream to output data.
    • Remember to call callback in your _write method.
    • Use the done function in your Jest tests to handle asynchronous code.
    • Refer to the MoviesStream provided in this chapter for guidance.
*/

"use strict";
const { Duplex } = require("stream");

class CharacterCreator extends Duplex {
  constructor(options) {
    super(options);
    this.queue = [];
  }

  _write(chunk, encoding, callback) {
    const trait = chunk.toString().trim();
    if (!trait) {
      callback(new Error("Invalid data"));
      return;
    }
    this.queue.push(`Your character is a ${trait}.`);
    callback();
  }

  _read(size) {
    if (this.queue.length) {
      this.push(this.queue.shift());
    } else {
      this.push(null);
    }
  }
}

module.exports = CharacterCreator;
