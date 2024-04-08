/*
From Pragmatic NodeJS
Author: Kylie Struhs
Date: April 6 2024
File Name: distance-calculator.js
*/

"use strict";

// function to subtract the value of planet2 from planet1 and multiply by -1 if a negative result occurs
function calculateDistance(planet1, planet2) {
  // object containing the distances of planets from Sun in astronomical units
  let planetDist = {
    mercury: 0.39,
    venus: 0.72,
    earth: 1,
    mars: 1.52,
    jupiter: 5.2,
    saturn: 9.54,
    uranus: 19.22,
    neptune: 30.06,
  };

  if ((planetDist[planet1] && planetDist[planet2]) != undefined) {
    let distance = (planetDist[planet1] - planetDist[planet2]).toFixed(2);
    if (distance < 0) {
      distance = distance * -1;
    } else {
      distance = distance * 1;
    }
    return distance;
  } else {
    console.error("Please enter a valid planet name in all lowercase letters");
  }
}

module.exports = calculateDistance;
