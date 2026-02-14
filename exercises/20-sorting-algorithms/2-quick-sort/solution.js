/**
 * ╔══════════════════════════════════════════╗
 * ║            Quick Sort                    ║
 * ╚══════════════════════════════════════════╝
 *
 * Partition-based sorting algorithm.
 * Time: O(n log n) avg, O(n²) worst | Space: O(log n) | Stable: No
 */

// Partition array around a pivot, return pivot index
// Elements smaller than pivot go left, larger go right
function partition(arr, low, high) {
  // TODO: Use last element as pivot, partition in-place
}

// Sort array using quick sort (in-place)
function quickSort(arr, low = 0, high = arr.length - 1) {
  // TODO: Recursively partition and sort
}

module.exports = { partition, quickSort };
