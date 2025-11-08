/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ ARRAY METHOD: filter()                                                        │
 │                                                                               │
 │ The filter() method creates a new array with all elements that pass           │
 │ the test implemented by the provided function.                                │
 │                                                                               │
 │ Key points:                                                                   │
 │ • Returns a new array with fewer or equal elements                            │
 │ • The original array is NOT mutated                                           │
 │ • Only elements where the callback returns truthy are included                │
 └─────────────────────────────────────────────────────────────────────────────┘*/




/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ PROBLEM 1                                                                     │
 │ FILTER EVEN NUMBERS                                                           │
 └─────────────────────────────────────────────────────────────────────────────┘*/

/**
 * Given an array of numbers, return only the even numbers.
 *
 * @param {number[]} numbers - Array of numbers
 * @returns {number[]} Array containing only even numbers
 *
 * Example: [1, 2, 3, 4, 5, 6] => [2, 4, 6]
 * Example: [] => []
 */
function filterEvenNumbers(numbers) {
  // TODO: Use filter() to keep only even numbers
}




/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ PROBLEM 2                                                                     │
 │ FILTER BY PRICE                                                               │
 └─────────────────────────────────────────────────────────────────────────────┘*/

/**
 * Given an array of products, return only items cheaper than a max price.
 *
 * @param {Array<{name: string, price: number}>} products - Array of products
 * @param {number} maxPrice - Maximum price threshold
 * @returns {Array<{name: string, price: number}>} Products under maxPrice
 *
 * Example: ([{name: 'Item1', price: 50}, {name: 'Item2', price: 150}], 100) => [{name: 'Item1', price: 50}]
 * Example: ([], 100) => []
 */
function filterByPrice(products, maxPrice) {
  // TODO: Use filter() to return products with price < maxPrice
}




/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ PROBLEM 3                                                                     │
 │ FILTER NON-EMPTY STRINGS                                                      │
 └─────────────────────────────────────────────────────────────────────────────┘*/

/**
 * Given an array of strings, return only non-empty strings.
 *
 * @param {string[]} strings - Array of strings
 * @returns {string[]} Array without empty strings
 *
 * Example: ['hello', '', 'world', ''] => ['hello', 'world']
 * Example: [] => []
 */
function filterNonEmpty(strings) {
  // TODO: Use filter() to remove empty strings
}




/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ PROBLEM 4                                                                     │
 │ FILTER USERS BY AGE                                                           │
 └─────────────────────────────────────────────────────────────────────────────┘*/

/**
 * Given an array of users, return only adults (age >= 18).
 *
 * @param {Array<{name: string, age: number}>} users - Array of user objects
 * @returns {Array<{name: string, age: number}>} Users who are 18 or older
 *
 * Example: ([{name: 'Alice', age: 25}, {name: 'Bob', age: 17}]) => [{name: 'Alice', age: 25}]
 * Example: [] => []
 */
function filterAdults(users) {
  // TODO: Use filter() to return only users with age >= 18
}




/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ PROBLEM 5                                                                     │
 │ FILTER BY STRING LENGTH                                                       │
 └─────────────────────────────────────────────────────────────────────────────┘*/

/**
 * Given an array of strings, return only strings longer than a minimum length.
 *
 * @param {string[]} strings - Array of strings
 * @param {number} minLength - Minimum string length
 * @returns {string[]} Strings with length >= minLength
 *
 * Example: (['hi', 'hello', 'hey'], 3) => ['hello', 'hey']
 * Example: ([], 3) => []
 */
function filterByLength(strings, minLength) {
  // TODO: Use filter() to return strings with length >= minLength
}

module.exports = {
  filterEvenNumbers,
  filterByPrice,
  filterNonEmpty,
  filterAdults,
  filterByLength,
};
