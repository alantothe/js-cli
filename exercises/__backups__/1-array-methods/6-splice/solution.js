/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ ARRAY METHOD: splice()                                                        │
 │                                                                               │
 │ The splice() method changes the contents of an array by removing and/or       │
 │ replacing existing elements.                                                  │
 │                                                                               │
 │ Key points:                                                                   │
 │ • MUTATES the original array                                                  │
 │ • Returns an array of deleted elements                                        │
 │ • Takes start index, delete count, and optional items to insert               │
 └─────────────────────────────────────────────────────────────────────────────┘*/




/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ PROBLEM 1                                                                     │
 │ REMOVE ELEMENTS                                                               │
 └─────────────────────────────────────────────────────────────────────────────┘*/

/**
 * Given an array, remove count elements starting at index.
 *
 * @param {Array} array - Array to modify
 * @param {number} index - Index to start
 * @param {number} count - Number of elements to remove
 * @returns {Array} Array of removed elements
 *
 * Example: [1, 2, 3, 4, 5], 1, 2 => removes [2, 3], array becomes [1, 4, 5]
 * Example: [1, 2, 3], 0, 0 => removes [], array stays [1, 2, 3]
 */
function removeElements(array, index, count) {
  // TODO: Use splice() to remove count elements starting at index
}




/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ PROBLEM 2                                                                     │
 │ INSERT ELEMENTS                                                               │
 └─────────────────────────────────────────────────────────────────────────────┘*/

/**
 * Given an array, insert elements at a specific index.
 *
 * @param {Array} array - Array to modify
 * @param {number} index - Index to insert at
 * @param {...*} items - Items to insert
 * @returns {Array} Array of removed elements (empty if no removal)
 *
 * Example: [1, 2, 5], 2, 3, 4 => array becomes [1, 2, 3, 4, 5]
 * Example: [1], 0, 0 => array becomes [0, 1]
 */
function insertElements(array, index, ...items) {
  // TODO: Use splice() to insert items at index (with count = 0)
}




/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ PROBLEM 3                                                                     │
 │ REPLACE ELEMENTS                                                              │
 └─────────────────────────────────────────────────────────────────────────────┘*/

/**
 * Given an array, replace count elements with new elements at index.
 *
 * @param {Array} array - Array to modify
 * @param {number} index - Index to start
 * @param {number} count - Number of elements to replace
 * @param {...*} items - New items to insert
 * @returns {Array} Array of replaced elements
 *
 * Example: [1, 2, 3, 4], 1, 2, 'a', 'b' => [1, 'a', 'b', 4], returns [2, 3]
 * Example: [1, 2, 3], 1, 1, 'x' => [1, 'x', 3], returns [2]
 */
function replaceElements(array, index, count, ...items) {
  // TODO: Use splice() to replace count elements with items
}




/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ PROBLEM 4                                                                     │
 │ REMOVE ONE ELEMENT                                                            │
 └─────────────────────────────────────────────────────────────────────────────┘*/

/**
 * Given an array and index, remove the element at that index.
 *
 * @param {Array} array - Array to modify
 * @param {number} index - Index of element to remove
 * @returns {*} The removed element
 *
 * Example: [1, 2, 3], 1 => returns 2, array becomes [1, 3]
 * Example: ['a', 'b'], 0 => returns 'a', array becomes ['b']
 */
function removeAt(array, index) {
  // TODO: Use splice() to remove element at index
}




/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ PROBLEM 5                                                                     │
 │ CLEAR AND RESET                                                               │
 └─────────────────────────────────────────────────────────────────────────────┘*/

/**
 * Given an array, remove all elements and replace with new ones.
 *
 * @param {Array} array - Array to clear
 * @param {...*} items - New items to insert
 * @returns {Array} Array of removed elements
 *
 * Example: [1, 2, 3], 'a', 'b' => removes all, array becomes ['a', 'b']
 * Example: [1], 'x' => array becomes ['x'], returns [1]
 */
function clearAndReset(array, ...items) {
  // TODO: Use splice() to clear array and insert items
}

module.exports = {
  removeElements,
  insertElements,
  replaceElements,
  removeAt,
  clearAndReset,
};
