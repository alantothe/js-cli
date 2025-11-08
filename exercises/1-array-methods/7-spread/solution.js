/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ SPREAD OPERATOR: ...                                                          │
 │                                                                               │
 │ The spread operator (...) allows an iterable (like an array or string)        │
 │ to be expanded in places where zero or more elements are expected.            │
 │                                                                               │
 │ Key points:                                                                   │
 │ • Unpacks array elements                                                      │
 │ • Useful for combining arrays                                                 │
 │ • Can be used in function calls, array literals, object literals              │
 └─────────────────────────────────────────────────────────────────────────────┘*/




/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ PROBLEM 1                                                                     │
 │ COMBINE TWO ARRAYS                                                            │
 └─────────────────────────────────────────────────────────────────────────────┘*/

/**
 * Given two arrays, return a single array with all elements.
 *
 * @param {Array} arr1 - First array
 * @param {Array} arr2 - Second array
 * @returns {Array} Combined array
 *
 * Example: [1, 2], [3, 4] => [1, 2, 3, 4]
 * Example: [], [] => []
 */
function combineArrays(arr1, arr2) {
  // TODO: Use spread operator to combine two arrays
}




/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ PROBLEM 2                                                                     │
 │ ADD ELEMENT TO BEGINNING                                                      │
 └─────────────────────────────────────────────────────────────────────────────┘*/

/**
 * Given an array and an element, return array with element at start.
 *
 * @param {*} element - Element to add
 * @param {Array} array - Array to modify
 * @returns {Array} New array with element at beginning
 *
 * Example: 0, [1, 2, 3] => [0, 1, 2, 3]
 * Example: 'x', [] => ['x']
 */
function addToBeginning(element, array) {
  // TODO: Use spread operator to add element to start
}




/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ PROBLEM 3                                                                     │
 │ ADD ELEMENT TO END                                                            │
 └─────────────────────────────────────────────────────────────────────────────┘*/

/**
 * Given an array and an element, return array with element at end.
 *
 * @param {Array} array - Array to modify
 * @param {*} element - Element to add
 * @returns {Array} New array with element at end
 *
 * Example: [1, 2, 3], 4 => [1, 2, 3, 4]
 * Example: [], 'x' => ['x']
 */
function addToEnd(array, element) {
  // TODO: Use spread operator to add element to end
}




/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ PROBLEM 4                                                                     │
 │ COMBINE MULTIPLE ARRAYS                                                       │
 └─────────────────────────────────────────────────────────────────────────────┘*/

/**
 * Given multiple arrays, return a single combined array.
 *
 * @param {...Array} arrays - Multiple arrays to combine
 * @returns {Array} Combined array
 *
 * Example: [1, 2], [3, 4], [5] => [1, 2, 3, 4, 5]
 * Example: [] => []
 */
function combineMultiple(...arrays) {
  // TODO: Use spread operator to combine all arrays passed as arguments
}




/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ PROBLEM 5                                                                     │
 │ COPY ARRAY AND ADD ELEMENTS                                                   │
 └─────────────────────────────────────────────────────────────────────────────┘*/

/**
 * Given an array and elements, return a copy with new elements added.
 *
 * @param {Array} array - Original array
 * @param {...*} elements - Elements to add
 * @returns {Array} Copy with added elements
 *
 * Example: [1, 2, 3], 4, 5 => [1, 2, 3, 4, 5]
 * Example: [], 1 => [1]
 */
function copyAndAdd(array, ...elements) {
  // TODO: Use spread operator to copy array and add elements
}

module.exports = {
  combineArrays,
  addToBeginning,
  addToEnd,
  combineMultiple,
  copyAndAdd,
};
