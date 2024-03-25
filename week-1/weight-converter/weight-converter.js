/**
 * Author: Kyile Struhs
 * Date: March 23 2024
 * File Name: weight-converter.js
 * Description: Pounds to Kg converter
*/

"use strict";

// TODO: Implement the weight conversion logic here


function main() {
  let poundstr = process.argv[2];
  let pounds = poundstr * 1;
  // testing to see if a value was input
  if (process.argv.length != 3) {
    console.error("Usage: node weight-converter.js <pounds>")
    process.exit(1);
  } else if (isNaN(pounds)) { // testing to see if the value is not a number
    console.error("Input must be a number")
    process.exit(1);
  } else { // run the conversion
    let kg = pounds/2.205;
    console.log(pounds + " pounds is equal to " + (kg).toFixed(2) + " kilograms");
  }
}

main();
/*
let prm1 = process.argv.slice2


let weightConverter = function() {
  let pounds = prm1;
  //test to see if something was input
  if (typeof prm1 != "undefined") {
    return "error";
  } else if (typeof prm1 != "number") { // test if input is a number
    return "Not a number"
  } else { // convert pounds to kg
  prm1/2.2}
}

weightConverter(prm1);
*/