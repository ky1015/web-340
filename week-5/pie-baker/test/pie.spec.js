/**
 * Author: Kylie Struhs
 * Date: April 21 2024
 * File Name: pie.spec.js
 * Description: file to test pie.js
 */

"use strict";

const { bakePie } = require("../src/pie");

// Your tests here
const exit = jest.spyOn(process, "exit").mockImplementation((code) => code);

describe("bakePie", () => {
  let log;
  beforeEach(() => {
    log = jest.spyOn(console, "log");
  });

  afterEach(() => {
    log.mockRestore();
  });

  test("identifies if butter is present", () => {
    bakePie("apple", "flour,sugar,apple");
    expect(log).toHaveBeenCalledWith(
      "Your pie dough was not wet enough. Try adding butter."
    );
    expect(exit).not.toHaveBeenCalled();
  });

  test("identifies if flour is present", () => {
    bakePie("apple", "butter,sugar,apple");
    expect(log).toHaveBeenCalledWith(
      "Your pie dough did not come together. Try adding flour."
    );
    expect(exit).not.toHaveBeenCalled();
  });

  test("identifies if sugar is present", () => {
    bakePie("apple", "butter,flour,apple");
    expect(log).toHaveBeenCalledWith(
      "Your pie was not sweet enough. Try adding sugar."
    );
    expect(exit).not.toHaveBeenCalled();
  });

  test("checks if you made a yummy pie", () => {
    bakePie("apple", "butter,flour,sugar,apple");
    expect(log).toHaveBeenCalledWith(
      "You have successfully baked a apple pie!"
    );
    expect(exit).not.toHaveBeenCalled();
  });
});
