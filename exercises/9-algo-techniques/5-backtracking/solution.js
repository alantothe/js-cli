/**
 * Backtracking Exercise
 *
 * Problem: Generate all permutations of an array
 *
 * A permutation is an arrangement of all elements where order matters.
 * You need to use the backtracking approach: choose, explore, and unchoose.
 *
 * Example:
 * permute([1, 2, 3]) => [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
 */

function permute(arr, currentPerm = [], result = []) {
  // TODO: Implement the backtracking approach here
  // Remember the three steps: Choose, Explore, Unchoose
  // Base case: when currentPerm has all elements, add it to results
  // Recursive case: try each unused element from arr
}

module.exports = { permute };
