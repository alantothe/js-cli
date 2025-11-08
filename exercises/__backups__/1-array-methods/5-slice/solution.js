/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ ARRAY METHOD: slice()                                                         │
 │                                                                               │
 │ The slice() method returns a shallow copy of a portion of an array.           │
 │                                                                               │
 │ Key points:                                                                   │
 │ • Does NOT mutate the original array                                          │
 │ • Takes start index (inclusive) and end index (exclusive)                     │
 │ • Both parameters are optional                                                │
 └─────────────────────────────────────────────────────────────────────────────┘*/




/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ PROBLEM 1                                                                     │
 │ GET A SLICE OF ARRAY                                                          │
 └─────────────────────────────────────────────────────────────────────────────┘*/

/**
 * Given an array, return elements from start to end index.
 *
 * @param {Array} array - Array to slice
 * @param {number} start - Start index
 * @param {number} end - End index (exclusive)
 * @returns {Array} Sliced portion of array
 *
 * Example: ([1, 2, 3, 4, 5], 1, 4) => [2, 3, 4]
 * Example: ([], 0, 0) => []
 */
function getSlice(array, start, end) {
  // TODO: Use slice() to return elements from start to end
}




/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ PROBLEM 2                                                                     │
 │ GET LAST N ELEMENTS                                                           │
 └─────────────────────────────────────────────────────────────────────────────┘*/

/**
 * Given an array and a count, return the last N elements.
 *
 * @param {Array} array - Array to slice
 * @param {number} count - Number of elements to return from end
 * @returns {Array} Last N elements
 *
 * Example: ([1, 2, 3, 4, 5], 2) => [4, 5]
 * Example: ([1, 2], 5) => [1, 2]
 */
function getLastN(array, count) {
  // TODO: Use slice() with negative index to get the last N elements
}




/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ PROBLEM 3                                                                     │
 │ GET FIRST N ELEMENTS                                                          │
 └─────────────────────────────────────────────────────────────────────────────┘*/

/**
 * Given an array and a count, return the first N elements.
 *
 * @param {Array} array - Array to slice
 * @param {number} count - Number of elements to return from start
 * @returns {Array} First N elements
 *
 * Example: ([1, 2, 3, 4, 5], 3) => [1, 2, 3]
 * Example: ([], 3) => []
 */
function getFirstN(array, count) {
  // TODO: Use slice() to get the first N elements
}




/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ PROBLEM 4                                                                     │
 │ COPY ENTIRE ARRAY                                                             │
 └─────────────────────────────────────────────────────────────────────────────┘*/

/**
 * Given an array, return a shallow copy of it.
 *
 * @param {Array} array - Array to copy
 * @returns {Array} Copy of the array
 *
 * Example: ([1, 2, 3]) => [1, 2, 3] (new array)
 * Example: ([]) => []
 */
function copyArray(array) {
  // TODO: Use slice() without parameters to create a copy
}




/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ PROBLEM 5                                                                     │
 │ GET MIDDLE SECTION                                                            │
 └─────────────────────────────────────────────────────────────────────────────┘*/

/**
 * Given an array, return the middle N elements.
 *
 * @param {Array} array - Array to slice
 * @param {number} count - Number of elements to return
 * @returns {Array} Middle N elements
 *
 * Example: ([1, 2, 3, 4, 5, 6, 7], 3) => [3, 4, 5]
 * Example: ([1, 2, 3], 1) => [2]
 */
function getMiddleN(array, count) {
  // TODO: Use slice() to return N elements from the middle
}

module.exports = {
  getSlice,
  getLastN,
  getFirstN,
  copyArray,
  getMiddleN,
};
