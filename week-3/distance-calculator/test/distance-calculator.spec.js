/*
File to run test
From Pragmatic NodeJS

Author: Kylie Struhs
Date: April 6 2024
File name: distance-calculator.spec.js
*/

"use strict";

const assert = require("assert");
const calculateDistance = require("../src/distance-calculator");

// Test functions

// testing if subtracting smaller value from bigger value is working
function testSaturnToMercury() {
  try {
    assert.strictEqual(calculateDistance("saturn", "mercury"), 9.15);
    console.log("Passed testSaturnToMercury");
    return true;
  } catch (error) {
    console.error("Failed test of Saturn to Mercury. Expected value was 9.15");
    return false;
  }
}

// testing if subtracting bigger value from smaller value is multiplied by -1 to give correct value
function testMercuryToSaturn() {
  try {
    assert.strictEqual(calculateDistance("mercury", "saturn"), 9.15);
    console.log("Passed testMercuryToSaturn");
    return true;
  } catch (error) {
    console.error("Failed test of Mercury to Saturn. Expected value was 9.15");
    return false;
  }
}

// testing Earth to Jupiter
function testEarthToJupiter() {
  try {
    assert.strictEqual(calculateDistance("earth", "jupiter"), 4.2);
    console.log("Passed testEarthToJupiter");
    return true;
  } catch (error) {
    console.error("Failed test of Earth to Jupiter. Expected value was 4.2");
    return false;
  }
}

// Call your test functions here
testSaturnToMercury();
testMercuryToSaturn();
testEarthToJupiter();
