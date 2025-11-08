/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ ARRAY METHOD: map()                                                           │
 │                                                                               │
 │ The map() method creates a new array populated with the results of            │
 │ calling a provided function on every element in the calling array.            │
 │                                                                               │
 │ Key points:                                                                   │
 │ • Returns a new array of the same length as the original                      │
 │ • The original array is NOT mutated                                           │
 │ • Each element is transformed by the callback function                        │
 └─────────────────────────────────────────────────────────────────────────────┘*/

/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ PROBLEM 1                                                                     │
 │ DOUBLE EACH NUMBER                                                            │
 └─────────────────────────────────────────────────────────────────────────────┘*/

/**
 * Given an array of numbers, return a new array with each number doubled.
 *
 * @param {number[]} numbers - Array of numbers
 * @returns {number[]} Array with each number doubled
 *
 * Example: [1, 2, 3] => [2, 4, 6]
 * Example: [] => []
 */
function doubleNumbers(numbers) {
  return numbers.map((num) => num * 2);
}

/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ PROBLEM 2                                                                     │
 │ EXTRACT NAMES FROM OBJECTS                                                    │
 └─────────────────────────────────────────────────────────────────────────────┘*/

/**
 * Given an array of user objects, return an array of just their names.
 *
 * @param {Array<{name: string, age: number}>} users - Array of user objects
 * @returns {string[]} Array of user names
 *
 * Example: [{name: 'Alice', age: 28}, {name: 'Bob', age: 34}] => ['Alice', 'Bob']
 * Example: [] => []
 */
function extractNames(users) {
  return users.map(user => user.name);
}

/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ PROBLEM 3                                                                     │
 │ CONVERT STRINGS TO UPPERCASE                                                  │
 └─────────────────────────────────────────────────────────────────────────────┘*/

/**
 * Given an array of strings, return a new array with all strings in uppercase.
 *
 * @param {string[]} strings - Array of strings
 * @returns {string[]} Array of uppercase strings
 *
 * Example: ['hello', 'world'] => ['HELLO', 'WORLD']
 * Example: [] => []
 */
function toUpperCase(strings) {
  // TODO: Write your solution here
}

/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ PROBLEM 4                                                                     │
 │ GENERATE HTML LIST ITEMS                                                      │
 └─────────────────────────────────────────────────────────────────────────────┘*/

/**
 * Given an array of items, return an array of HTML list item strings.
 *
 * @param {string[]} items - Array of item names
 * @returns {string[]} Array of HTML <li> strings
 *
 * Example: ['Pen', 'Paper'] => ['<li>Pen</li>', '<li>Paper</li>']
 * Example: [] => []
 */
function generateListItems(items) {
  // TODO: Write your solution here
}

/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ PROBLEM 5                                                                     │
 │ TRANSFORM OBJECTS WITH NEW PROPERTIES                                         │
 └─────────────────────────────────────────────────────────────────────────────┘*/

/**
 * Given an array of products, add a 'priceWithTax' property (price * 1.1).
 * Do NOT mutate the original products.
 *
 * @param {Array<{name: string, price: number}>} products - Array of products
 * @returns {Array<{name: string, price: number, priceWithTax: number}>}
 *
 * Example: [{name: 'Item', price: 100}] => [{name: 'Item', price: 100, priceWithTax: 110}]
 * Example: [] => []
 */
function addTaxToProducts(products) {
  // TODO: Write your solution here
}

module.exports = {
  doubleNumbers,
  extractNames,
  toUpperCase,
  generateListItems,
  addTaxToProducts,
};
