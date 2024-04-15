/**
 * Author: Kylie Struhs
 * Date: April 14 2024
 * File Name: superhero.js
 * Description:
 */

/* Create a SuperheroEmitter class module that extends the EventEmitter class from
Node.js. This class should have the following methods:
a. performAction(action: string): Emits an “action” event with the action as the
actual parameter.
b. encounterDanger(danger: string): Emits a “danger” event with the danger as
the actual parameter.
c. helpSomeone(
  */

//let EventEmitter = require('events');

// TODO: Create a SuperheroEmitter class that extends EventEmitter and implements the following methods: performAction, encounterDanger, and helpSomeone
/*class SuperheroEmitter extends EventEmitter {
  constructor() {
    super();
  }

  performAction(action) {
    this.emit("action", action);
  }

  encounterDanger(danger) {
    this.emit("danger", danger);
  }

  helpSomeone(person) {
    this.emit("help", person);
  }
}
*/

// coffee shop modded
const EventEmitter = require("events");
class superheroEmitter extends EventEmitter {
  constructor() {
    super();
  }
  performAction(action) {
    this.emit("action", action);
  }
  encounterDanger(danger) {
    this.emit("danger", danger);
  }
  helpSomeone(person) {
    this.emit("help", person);
  }
}

module.exports = superheroEmitter;
