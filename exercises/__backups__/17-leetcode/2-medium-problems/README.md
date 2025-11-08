# LeetCode Medium Problems

## Overview
Medium difficulty problems require combining multiple techniques and deeper algorithm understanding. These problems build towards real-world coding interview scenarios.

## Learning Objectives
- Solve medium-difficulty algorithmic problems
- Combine multiple data structures and techniques
- Optimize time and space complexity
- Handle edge cases systematically

## Problem: 3Sum

Find all unique triplets in an array that sum to a target value (0).

**Example:**
```
Input: [-1, 0, 1, 2, -1, -4]
Output: [[-1, -1, 2], [-1, 0, 1]]
```

**Approach:**
- Sort the array first
- Use two-pointer technique for each fixed element
- Skip duplicates to avoid duplicate triplets
- Time: O(n²), Space: O(1) or O(n) depending on sorting

## Problem: longestSubstring

Find the length of the longest substring without repeating characters.

**Example:**
```
Input: "abcabcbb"
Output: 3 (substring "abc")

Input: "bbbbb"
Output: 1 (substring "b")
```

**Approach:**
- Sliding window technique
- Use Set to track characters in current window
- Move left pointer when duplicate found
- Track maximum length seen
- Time: O(n), Space: O(min(m, n)) where m is charset size

## Problem: addTwoNumbers

Add two numbers represented as linked lists in reverse order.

**Example:**
```
Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8 (represents 342 + 465 = 807)
```

**Approach:**
- Iterate through both lists simultaneously
- Handle carry for each digit
- Create new list with results
- Time: O(max(m, n)), Space: O(max(m, n))

## Tips
- Always consider edge cases and duplicates
- Medium problems often require combining 2+ techniques
- Practice optimizing before implementing
- Test with multiple examples before submitting
