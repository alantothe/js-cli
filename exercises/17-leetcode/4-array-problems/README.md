# LeetCode Array Problems

## Overview
Array problems are fundamental to coding interviews. They test understanding of indexing, iteration, in-place modifications, and algorithm design.

## Learning Objectives
- Master array manipulation techniques
- Understand in-place modification patterns
- Learn sliding window and two-pointer approaches
- Optimize for time and space complexity

## Problem: nextPermutation

Modify array in-place to the next lexicographically greater permutation.

**Example:**
```
Input: [1, 2, 3]
Output: [1, 3, 2]

Input: [3, 2, 1]
Output: [1, 2, 3] (wrap around to smallest)
```

**Approach:**
- Find rightmost position where arr[i] < arr[i+1]
- Find rightmost position where arr[j] > arr[i]
- Swap them, then reverse the suffix
- Time: O(n), Space: O(1)

## Problem: rotateArray

Rotate array elements to the right by k steps in-place.

**Example:**
```
Input: [1, 2, 3, 4, 5], k = 2
Output: [4, 5, 1, 2, 3]

Input: [1, 2, 3, 4, 5], k = 7
Output: [4, 5, 1, 2, 3] (k % length)
```

**Approach:**
- Reverse entire array
- Reverse first k elements
- Reverse remaining elements
- Time: O(n), Space: O(1)

## Problem: productOfArrayExceptSelf

Create output array where each element is product of all other elements.

**Example:**
```
Input: [1, 2, 3, 4]
Output: [24, 12, 8, 6]
```

**Constraint:** No division operation allowed

**Approach:**
- Use two passes: left and right products
- Left pass: cumulative product from left
- Right pass: cumulative product from right
- Multiply them together
- Time: O(n), Space: O(n) for output

## Tips
- In-place problems are about clever pointer manipulation
- Always consider modulo operations for rotations
- Test with edge cases: k > n, empty arrays, single elements
- Practice without extra space constraints first
