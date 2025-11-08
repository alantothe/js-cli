/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ ARRAY METHOD: reduce()                                                        │
 │                                                                               │
 │ The reduce() method executes a reducer function on each element of an         │
 │ array, resulting in a single output value.                                    │
 │                                                                               │
 │ Key points:                                                                   │
 │ • Accumulates a value as it iterates through the array                        │
 │ • The callback receives: accumulator, currentValue, index, array              │
 │ • The initial value for the accumulator is optional                           │
 │ • Returns a single value                                                      │
 └─────────────────────────────────────────────────────────────────────────────┘*/




/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ PROBLEM 1                                                                     │
 │ SUM ALL NUMBERS                                                               │
 └─────────────────────────────────────────────────────────────────────────────┘*/

/**
 * Given an array of numbers, return the sum of all numbers.
 *
 * @param {number[]} numbers - Array of numbers
 * @returns {number} Sum of all numbers
 *
 * Example: [1, 2, 3, 4] => 10
 * Example: [] => 0
 */
function sumNumbers(numbers) {
  // TODO: Use reduce() to sum all numbers
}




/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ PROBLEM 2                                                                     │
 │ MULTIPLY ALL NUMBERS                                                          │
 └─────────────────────────────────────────────────────────────────────────────┘*/

/**
 * Given an array of numbers, return the product (result of multiplying all).
 *
 * @param {number[]} numbers - Array of numbers
 * @returns {number} Product of all numbers
 *
 * Example: [2, 3, 4] => 24
 * Example: [] => 1
 */
function multiplyNumbers(numbers) {
  // TODO: Use reduce() to multiply all numbers
}




/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ PROBLEM 3                                                                     │
 │ FIND MAXIMUM VALUE                                                            │
 └─────────────────────────────────────────────────────────────────────────────┘*/

/**
 * Given an array of numbers, return the maximum value using reduce.
 *
 * @param {number[]} numbers - Array of numbers
 * @returns {number} The maximum value
 *
 * Example: [5, 2, 8, 1] => 8
 * Example: [42] => 42
 */
function findMax(numbers) {
  // TODO: Use reduce() to find the maximum value
}




/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ PROBLEM 4                                                                     │
 │ COUNT OCCURRENCES                                                             │
 └─────────────────────────────────────────────────────────────────────────────┘*/

/**
 * Given an array of strings, return an object counting occurrences of each.
 *
 * @param {string[]} items - Array of strings
 * @returns {Object<string, number>} Object with counts
 *
 * Example: ['apple', 'banana', 'apple'] => {apple: 2, banana: 1}
 * Example: [] => {}
 */
function countOccurrences(items) {
  // TODO: Use reduce() to count how many times each item appears
}




/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ PROBLEM 5                                                                     │
 │ FLATTEN AN ARRAY                                                              │
 └─────────────────────────────────────────────────────────────────────────────┘*/

/**
 * Given an array of arrays, return a single flat array with all values.
 *
 * @param {Array<Array>} arrays - Array of arrays
 * @returns {Array} Flattened array
 *
 * Example: [[1, 2], [3, 4], [5]] => [1, 2, 3, 4, 5]
 * Example: [] => []
 */
function flattenArray(arrays) {
  // TODO: Use reduce() to flatten an array of arrays
}

module.exports = {
  sumNumbers,
  multiplyNumbers,
  findMax,
  countOccurrences,
  flattenArray,
};
