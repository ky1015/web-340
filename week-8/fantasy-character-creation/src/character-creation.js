"use strict";

/*
  Name: Kylie Struhs
  Date: May 12 2024
  filename: character-creation.js

 * If you want to use promises (async/await):
 * 1. Uncomment the 'fs' require statement under the "For promises" comment.
 * 2. Uncomment the 'createCharacter' and 'getCharacters' functions under the "For promises" comment.
 * 3. Uncomment the 'module.exports' line under the "For promises" comment.
 */

// For promises:

//API information
const { writeFile, readFile } = require("fs").promises;
const { join } = require("path");

const CHARACTER_FILE = join(__dirname, "characters.txt");
const READING_FILE = join(__dirname, "reading.txt");

// async function to define character data and write it to a file
async function createCharacter(characterTraits) {
  try {
    const data = characterTraits.join("\n");
    await writeFile(CHARACTER_FILE, data);
  } catch (err) {
    throw err;
  }
}

// async function getting data from read file and returning a list of traits
async function getCharacters() {
  try {
    const data = await readFile(READING_FILE, "utf8");
    const characterTraits = data.split("\n").filter((character) => character);
    return characterTraits;
  } catch (err) {
    throw err;
  }
}

module.exports = { createCharacter, getCharacters }; // For promises
