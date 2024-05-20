/*
  Author: Kylie Struhs
  Date: May 15 2024
  File Name: game-characters.spec.js

  Instructions:
  a. Test that data is being returned from the game-characters-data script.
  b. Test that it handles an error when the game-characters-data script is not
  found.
  c. Test that it handles an error when the game-characters-data script fails.
*/

const { GameCharacters } = require("../src/game-characters");

describe("GameCharacters", () => {
  let gameCharacters;

  beforeEach(() => {
    gameCharacters = new GameCharacters();
  });

  test("should return game characters data", (done) => {
    gameCharacters.getGameCharacters((data, error) => {
      expect(error).toBeNull();
      expect(data).toEqual([
        { type: "warrior", gender: "female", fact: "generous" },
        { type: "rogue", gender: "male", fact: "trilingual" },
        { type: "mage", gender: "female", fact: "outspoken" },
      ]);
      done();
    });
  });

  test("should handle an error when the game characters data script is not found", (done) => {
    const gameCharacters = new GameCharacters("nonexistent-script.js");
    gameCharacters.getGameCharacters((data, error) => {
      expect(data).toBeNull();
      expect(error).not.toBeNull();
      done();
    });
  });

  test("should handle an error when the game characters data script fails", (done) => {
    const gameCharacters = new GameCharacters("failing-script.js");
    gameCharacters.getGameCharacters((data, error) => {
      expect(data).toBeNull();
      expect(error).not.toBeNull();
      done();
    });
  });
});
