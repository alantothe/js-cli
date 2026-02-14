# Monotonic Stack Problems

## Overview
A monotonic stack maintains elements in sorted order (increasing or decreasing). When a new element breaks the order, elements are popped and processed. This pattern solves "next greater/smaller element" problems in O(n).

## Learning Objectives
- Use a decreasing monotonic stack for next greater element
- Apply stack-based approach to daily temperatures
- Validate balanced parentheses with a stack

## Concepts
1. **Decreasing Stack**: Pop smaller elements when larger arrives — assigns next greater
2. **Index Stack**: Store indices instead of values for distance calculations
3. **Bracket Matching**: Push openers, pop and compare for closers

## Run Tests
```bash
npm test -- "exercises/29-monotonic-stack/1-monotonic-stack-problems/solution.test.js"
```

## Difficulty: Medium
