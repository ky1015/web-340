/*
  Name: Kylie Struhs
  Date: May 5 2024
  file name: character-creator.spec.js

    Instructions: In your package.json file, add a test script. Remember to install Jest as a dev
    dependency.
    1. In the character-creator.js file create a CharacterCreator class that extends the
      Duplex stream class from Node.js’s built-in stream module. The class should
      process character creation data and output a formatted description.
    2. The CharacterCreator class should take data about the character’s class (Warrior,
      Mage, Rogue), gender (Male, Female, Other), and a fun fact about the character.
    3. Write three-unit tests for your CharacterCreator class in the charactercreator.
      spec.js file. Each test should cover a different aspect about the class’s
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

const CharacterCreator = require("../src/character-creator");

describe("CharacterCreator", () => {
  let characterCreator;

  beforeEach(() => {
    characterCreator = new CharacterCreator();
  });

  test("should process data correctly when written to", (done) => {
    //
    const traits = ["female", "warrior", "trilingual"];

    traits.forEach((trait) => characterCreator.write(trait));
    characterCreator.on("data", (data) => {
      const trait = traits.shift();
      expect(data.toString().trim()).toBe(`Your character is a ${trait}.`);
      if (traits.length === 0) done();
    });
  });

  test("should emit 'error' when invalid data is written", (done) => {
    // TODO: Write your test here
    characterCreator.on("error", (err) => {
      expect(err.message).toBe("Invalid data");
      done();
    });

    characterCreator.write("");
  });

  test("should transform data correctly when written to", (done) => {
    // TODO: Write your test here
    const trait = "mage";
    const expectedOutput = "Your character is a mage.";
    characterCreator.write(trait, "utf-8", () => {
      characterCreator.on("data", (data) => {
        expect(data.toString().trim()).toBe(expectedOutput);
        done();
        150;
      });
    });
  });
});
