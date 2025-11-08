# Binary Search

## Overview
Binary search is one of the most efficient search algorithms for sorted arrays. It eliminates half of the remaining elements with each comparison, achieving O(log n) time complexity.

## Learning Objectives
- Understand how binary search works
- Implement binary search correctly
- Recognize prerequisites (array must be sorted)
- Compare performance with linear search

## How It Works
1. Start with left pointer at 0, right pointer at array length - 1
2. Find middle index: `mid = Math.floor((left + right) / 2)`
3. Compare middle element with target:
   - If equal: found it, return index
   - If target < middle: search left half
   - If target > middle: search right half
4. Repeat until found or search space is empty

## Key Points
- **Requirement**: Array must be sorted
- **Time Complexity**: O(log n)
- **Space Complexity**: O(1) for iterative, O(log n) for recursive
- **Best Case**: O(1) - element at middle position
- **Worst Case**: O(log n) - element at end or not found

## Example
```javascript
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}
```

## When to Use
- Searching in large sorted datasets
- Finding insertion position in sorted array
- Problems with "monotonic" conditions
