# Classic Dynamic Programming

## Overview
Dynamic Programming solves problems by breaking them into overlapping subproblems and storing results to avoid redundant computation. These four problems are the most commonly asked DP questions.

## Learning Objectives
- Identify DP substructure (how current state depends on previous states)
- Implement bottom-up tabulation
- Apply Kadane's algorithm for maximum subarray

## Concepts
1. **Climbing Stairs**: Fibonacci-like recurrence
2. **Coin Change**: Unbounded knapsack variant, minimize coins
3. **House Robber**: Include/exclude decision at each step
4. **Kadane's Algorithm**: Extend or restart subarray at each element

## Run Tests
```bash
npm test -- "exercises/23-dynamic-programming/1-classic-dp/solution.test.js"
```

## Difficulty: Medium
