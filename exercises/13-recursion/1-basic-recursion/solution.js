/**
 * Basic Recursion
 *
 * Recursion is when a function calls itself to solve a smaller version of the same problem.
 * Every recursive function needs a base case to prevent infinite recursion.
 */

// Calculate factorial of a number (n! = n * (n-1)!)
function factorial(n) {
  // TODO: Implement recursion
  // Base case: when n is 0 or 1, return 1
  // Recursive case: return n * factorial(n - 1)
}

// Sum all numbers in an array
function sumArray(arr) {
  // TODO: Implement recursion
  // Base case: empty array returns 0
  // Recursive case: first element + sumArray of rest
}

module.exports = { factorial, sumArray };
