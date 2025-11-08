/**
 * Dynamic Programming Exercise
 *
 * Problem: Calculate the nth Fibonacci number using dynamic programming
 *
 * The Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, ...
 * Where each number is the sum of the two preceding ones: F(n) = F(n-1) + F(n-2)
 *
 * You need to implement an efficient solution using memoization or tabulation
 * instead of naive recursion.
 *
 * Example:
 * fib(0) => 0
 * fib(5) => 5
 * fib(10) => 55
 */

function fib(n, memo = {}) {
  // TODO: Implement the dynamic programming approach here
  // Use memoization to store already calculated values
  // This should handle the base cases and recursive case efficiently
}

module.exports = { fib };
