/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ ARRAY METHOD: find()                                                          │
 │                                                                               │
 │ The find() method returns the first element in the array that satisfies       │
 │ the provided testing function. Otherwise, it returns undefined.               │
 │                                                                               │
 │ Key points:                                                                   │
 │ • Returns the element itself (not the index)                                  │
 │ • Stops searching after finding the first match                               │
 │ • Returns undefined if no element matches                                     │
 └─────────────────────────────────────────────────────────────────────────────┘*/




/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ PROBLEM 1                                                                     │
 │ FIND FIRST EVEN NUMBER                                                        │
 └─────────────────────────────────────────────────────────────────────────────┘*/

/**
 * Given an array of numbers, return the first even number found.
 *
 * @param {number[]} numbers - Array of numbers
 * @returns {number|undefined} First even number or undefined
 *
 * Example: [1, 3, 4, 5] => 4
 * Example: [1, 3, 5] => undefined
 */
function findFirstEven(numbers) {
  // TODO: Use find() to return the first even number
}




/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ PROBLEM 2                                                                     │
 │ FIND USER BY NAME                                                             │
 └─────────────────────────────────────────────────────────────────────────────┘*/

/**
 * Given an array of users and a name, return the user object with that name.
 *
 * @param {Array<{name: string, age: number}>} users - Array of user objects
 * @param {string} name - Name to search for
 * @returns {Object|undefined} User object or undefined
 *
 * Example: ([{name: 'Alice', age: 25}, {name: 'Bob', age: 30}], 'Bob') => {name: 'Bob', age: 30}
 * Example: ([], 'Bob') => undefined
 */
function findUserByName(users, name) {
  // TODO: Use find() to return the user object matching the name
}




/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ PROBLEM 3                                                                     │
 │ FIND PRODUCT BY ID                                                            │
 └─────────────────────────────────────────────────────────────────────────────┘*/

/**
 * Given an array of products and an id, return the product with that id.
 *
 * @param {Array<{id: number, name: string, price: number}>} products - Array of products
 * @param {number} id - Product id to search for
 * @returns {Object|undefined} Product object or undefined
 *
 * Example: ([{id: 1, name: 'Item', price: 100}], 1) => {id: 1, name: 'Item', price: 100}
 * Example: ([], 1) => undefined
 */
function findProductById(products, id) {
  // TODO: Use find() to return the product with the given id
}




/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ PROBLEM 4                                                                     │
 │ FIND STRING STARTING WITH PREFIX                                              │
 └─────────────────────────────────────────────────────────────────────────────┘*/

/**
 * Given an array of strings, return the first string starting with a prefix.
 *
 * @param {string[]} strings - Array of strings
 * @param {string} prefix - Prefix to search for
 * @returns {string|undefined} First matching string or undefined
 *
 * Example: (['apple', 'apricot', 'banana'], 'ap') => 'apple'
 * Example: (['banana', 'cherry'], 'ap') => undefined
 */
function findByPrefix(strings, prefix) {
  // TODO: Use find() to return the first string starting with prefix
}




/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ PROBLEM 5                                                                     │
 │ FIND OBJECT WITH PROPERTY VALUE                                               │
 └─────────────────────────────────────────────────────────────────────────────┘*/

/**
 * Given an array of objects and a property/value pair, find the object.
 *
 * @param {Array<Object>} objects - Array of objects
 * @param {string} propertyName - Name of the property to check
 * @param {*} value - Value to match
 * @returns {Object|undefined} Matching object or undefined
 *
 * Example: ([{status: 'active'}, {status: 'inactive'}], 'status', 'active') => {status: 'active'}
 * Example: ([], 'status', 'active') => undefined
 */
function findByProperty(objects, propertyName, value) {
  // TODO: Use find() to return the first object where propertyName === value
}

module.exports = {
  findFirstEven,
  findUserByName,
  findProductById,
  findByPrefix,
  findByProperty,
};
