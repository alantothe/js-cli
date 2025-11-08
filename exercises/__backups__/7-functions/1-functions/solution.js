/**
 * JavaScript Functions & Higher-Order Functions Worksheet
 *
 * Covers:
 *   1. Function Declaration, Function Expression, Arrow Function
 *   2. Higher-Order Function Examples (taking and returning functions)
 *
 * ---------------------------------------------------------------------
 */

/* 1. Function Declaration */
function add(a, b) {
  return a + b;
}
console.log('add(2, 3):', add(2, 3)); // 5

/* 2. Function Expression */
const subtract = function(a, b) {
  return a - b;
};
console.log('subtract(5, 2):', subtract(5, 2)); // 3

/* 3. Arrow Function */
const multiply = (a, b) => a * b;
console.log('multiply(4, 6):', multiply(4, 6)); // 24

/* ---------------------------------------------------------------------
 * 4. Higher-Order Function (takes a function as an argument)
 *
 *    Example: doTwice calls the callback function two times.
 */
function doTwice(fn) {
  fn();
  fn();
}

function sayHello() {
  console.log('Hello!');
}

doTwice(sayHello);
// Output:
// Hello!
// Hello!

/* ---------------------------------------------------------------------
 * 5. Higher-Order Function (using array methods)
 *
 *    Example: Using Array.prototype.map, which takes a callback.
 */
const numbers = [1, 2, 3, 4];
const squared = numbers.map((n) => n * n);
console.log('squared array:', squared); // [1, 4, 9, 16]

/* ---------------------------------------------------------------------
 * 6. Higher-Order Function (returns a function)
 *
 *    Example: makeMultiplier returns a new function that multiplies by a fixed factor.
 */
function makeMultiplier(factor) {
  return function (n) {
    return n * factor;
  };
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);
console.log('double(5):', double(5)); // 10
console.log('triple(5):', triple(5)); // 15

/* ---------------------------------------------------------------------
 * EXERCISES
 *
 * 1. Write a function named `filterArray` that takes an array and a callback.
 *    It should return a new array containing only the elements for which
 *    the callback returns true. (Do not use the built-in `filter`.)
 *
 *    // Example structure:
 *    // function filterArray(arr, fn) {
 *    //   const result = [];
 *    //   for (let i = 0; i < arr.length; i++) {
 *    //     if (fn(arr[i])) {
 *    //       result.push(arr[i]);
 *    //     }
 *    //   }
 *    //   return result;
 *    // }
 *
 * 2. Create a function `makeGreeter` that takes a greeting string (e.g., "Hi")
 *    and returns a new function. The returned function should accept a name
 *    and log the greeting plus the name.
 *
 *    // Example usage:
 *    // const greetHi = makeGreeter('Hi');
 *    // greetHi('Alice'); // logs: "Hi, Alice"
 *
 * 3. Use `doTwice` (from above) with an anonymous arrow function that logs
 *    "👍" each time.
 *
 * Practice each exercise by writing and testing your code in the console.
 * --------------------------------------------------------------------- */
