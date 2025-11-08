# Two Pointer Technique

## Overview
The two pointer technique is an efficient approach to solve problems involving sorted arrays or specific sequences. By using two pointers moving at different speeds or directions, you can avoid nested loops and achieve better time complexity.

## Learning Objectives
- Understand when to apply the two pointer technique
- Implement the two pointer approach for array problems
- Recognize patterns where two pointers are beneficial
- Achieve O(n) time complexity instead of O(n²)

## Concepts
1. **Two Pointers Moving Toward Each Other**: Start at opposite ends, move toward center
2. **Two Pointers Moving in Same Direction**: Both start at beginning, move at different speeds
3. **Sliding Window**: A variant where pointers maintain a window of elements

## Example Problem
Given a sorted array, find two numbers that sum to a target value.

```javascript
// Efficient O(n) solution with two pointers
function twoSum(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) {
      return [arr[left], arr[right]];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return null;
}
```

## When to Use
- Finding pairs in sorted arrays
- Validating palindromes
- Removing duplicates from sorted arrays
- Container with most water problems
- Merging sorted arrays

## Key Benefits
- Reduces time complexity from O(n²) to O(n)
- Works on sorted or partially sorted data
- Minimal extra space needed
