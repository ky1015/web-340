/*
  Author: Kylie Struhs
  Date: May 19 2024
  File Name: game-characters.js
*/
const { spawn } = require("child_process");
const { join } = require("path");
const dataFile = join(__dirname, "game-characters-data.js");

class GameCharacters {
  constructor(scriptPath = dataFile) {
    // TODO: Set the script file path
    this.scriptPath = scriptPath;
  }

  getGameCharacters(callback) {
    // sets up child process running node on game-characters-data.js and sets up error handling when file is not found or when the script fails
    const child = spawn("node", [this.scriptPath]);

    child.stdout.on("data", (data) => {
      const characterData = JSON.parse(data.toString());
      callback(characterData, null);
    });

    child.stderr.on("data", (data) => {
      console.error(`stderr: ${data}`);
      callback(null, new Error(data.toString()));
    });

    child.on("error", (error) => {
      console.error(`spawn error: ${error}`);
      callback(null, error);
    });
  }
}

module.exports = { GameCharacters };
