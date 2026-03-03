// first pattern to import things
import sub,{ sum as s } from "./calc1.js"

console.log("7 + 5 =", s(7,5))
console.log("6 - 9 =", sub(6,9))

// second pattern to import things
import * as calc from "./calc2.js"
console.log("7 * 3 =", calc.multiply(7,3))
console.log("20 / 10 =", calc.divideTwo(20,10))

// third pattern to import is by a class
import { Greets } from "./messages.js"
// create an instace for the class
const greet = new Greets()

// now we are able to call its functions
greet.hello()
greet.bye(4)