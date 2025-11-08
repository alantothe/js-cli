# LeetCode Easy Problems

## Overview
LeetCode is a popular platform for practicing coding problems, with questions ranging from easy to hard. Easy problems are perfect for building fundamentals and learning common patterns.

## Learning Objectives
- Solve easy algorithmic problems
- Understand in-place array modifications
- Learn two-pointer and other basic techniques
- Build problem-solving confidence

## Problem: removeDuplicates

Remove duplicates from a sorted array **in-place** and return the number of unique elements.

**Constraint:** Must modify array in-place (no extra array for output)

**Example:**
```
Input: [1, 1, 2]
Output: 2 (length)
Array becomes: [1, 2, ...]
```

**Approach:** Two pointer technique
- One pointer tracks where to place unique elements
- Other pointer scans through array

**Complexity:** O(n) time, O(1) space

## Problem: moveZeroes

Move all zeros in an array to the end while maintaining the relative order of non-zero elements. **Modify in-place.**

**Example:**
```
Input: [0, 1, 0, 3, 12]
Output: [1, 3, 12, 0, 0]
```

**Approach:** Snowball technique
- Track position for next non-zero element
- Swap zeros to the end

**Complexity:** O(n) time, O(1) space

## Tips
- "In-place" means limited extra memory (usually O(1))
- Two-pointer technique is common for array problems
- Test edge cases: all same, all unique, empty
- On LeetCode, submit and verify with their system
