# Sliding Window Pattern Problems

## Overview
The sliding window technique maintains a dynamic window over a sequence, expanding and shrinking to find optimal subsequences. It converts brute-force O(n*k) solutions to O(n).

## Learning Objectives
- Implement variable-size sliding window
- Implement fixed-size sliding window with frequency maps
- Recognize when to expand vs shrink the window

## Concepts
1. **Variable Window**: Expand right pointer, shrink left when constraint violated
2. **Fixed Window**: Window size stays constant, slide one position at a time
3. **Hash Map in Window**: Track character frequencies within window

## Run Tests
```bash
npm test -- "exercises/24-two-pointer-sliding-window/2-sliding-window-patterns/solution.test.js"
```

## Difficulty: Medium
