/**
 * ╔══════════════════════════════════════════╗
 * ║     Matrix / 2D Array Problems           ║
 * ╚══════════════════════════════════════════╝
 *
 * Common interview problems involving 2D arrays.
 */

// Rotate a matrix 90 degrees clockwise (in-place)
function rotate(matrix) {
  // TODO: Transpose then reverse each row
}

// Return elements in spiral order
function spiralOrder(matrix) {
  // TODO: Traverse in spiral using boundaries (top, bottom, left, right)
}

// Search a sorted 2D matrix for a target value
// Each row is sorted, first element of each row > last element of previous row
function searchMatrix(matrix, target) {
  // TODO: Treat as 1D sorted array and binary search
}

// Set entire row and column to zero if an element is 0
function setZeroes(matrix) {
  // TODO: Use first row/column as markers
}

module.exports = { rotate, spiralOrder, searchMatrix, setZeroes };
