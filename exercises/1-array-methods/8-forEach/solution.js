/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ ARRAY METHOD: forEach()                                                       │
 │                                                                               │
 │ The forEach() method executes a provided function once for each array         │
 │ element. It returns undefined and cannot be chained.                          │
 │                                                                               │
 │ Key points:                                                                   │
 │ • Useful for side effects (logging, updating, etc.)                           │
 │ • Does NOT return a new array                                                 │
 │ • Cannot be broken early like a for loop (use for or find for that)           │
 └─────────────────────────────────────────────────────────────────────────────┘*/




/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ PROBLEM 1                                                                     │
 │ LOG EACH ELEMENT                                                              │
 └─────────────────────────────────────────────────────────────────────────────┘*/

/**
 * Given an array, log each element to the console.
 *
 * @param {Array} array - Array to iterate
 * @returns {undefined}
 *
 * Example: [1, 2, 3] => logs "1", "2", "3"
 * Example: [] => (nothing logged)
 */
function logEachElement(array) {
  // TODO: Use forEach() to log each element
}




/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ PROBLEM 2                                                                     │
 │ SUM ARRAY WITH SIDE EFFECT                                                    │
 └─────────────────────────────────────────────────────────────────────────────┘*/

/**
 * Given an array, log the running sum and return total.
 *
 * @param {number[]} numbers - Array of numbers
 * @returns {number} Total sum
 *
 * Example: [1, 2, 3] => logs "Running sum: 1", "Running sum: 3", "Running sum: 6", returns 6
 * Example: [] => returns 0
 */
function sumWithLogging(numbers) {
  // TODO: Use forEach() to log each number and accumulate sum
}




/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ PROBLEM 3                                                                     │
 │ BUILD STRING FROM ARRAY                                                       │
 └─────────────────────────────────────────────────────────────────────────────┘*/

/**
 * Given an array of words, concatenate them with spaces using forEach.
 *
 * @param {string[]} words - Array of words
 * @returns {string} Concatenated string
 *
 * Example: ['Hello', 'World'] => "Hello World"
 * Example: [] => ""
 */
function buildString(words) {
  // TODO: Use forEach() to concatenate words with spaces
}




/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ PROBLEM 4                                                                     │
 │ UPDATE OBJECT PROPERTIES                                                      │
 └─────────────────────────────────────────────────────────────────────────────┘*/

/**
 * Given an object and an array of changes, apply updates using forEach.
 *
 * @param {Object} obj - Object to update
 * @param {Array<[string, *]>} changes - Array of [key, value] pairs
 * @returns {Object} Updated object
 *
 * Example: ({name: 'John'}, [['name', 'Jane'], ['age', 30]]) => {name: 'Jane', age: 30}
 * Example: ({}, []) => {}
 */
function updateObject(obj, changes) {
  // TODO: Use forEach() to update object properties
}




/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ PROBLEM 5                                                                     │
 │ CREATE A MAP OF INDICES                                                       │
 └─────────────────────────────────────────────────────────────────────────────┘*/

/**
 * Given an array, create an object mapping each value to its index.
 *
 * @param {Array} array - Array to process
 * @returns {Object} Map of value => index
 *
 * Example: ['a', 'b', 'c'] => {a: 0, b: 1, c: 2}
 * Example: [] => {}
 */
function createIndexMap(array) {
  // TODO: Use forEach() to create a map of values to their indices
}

module.exports = {
  logEachElement,
  sumWithLogging,
  buildString,
  updateObject,
  createIndexMap,
};
