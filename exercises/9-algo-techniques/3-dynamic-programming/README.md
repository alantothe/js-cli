# Dynamic Programming Technique

## Overview
Dynamic Programming is a technique for solving problems that have overlapping subproblems and optimal substructure. It solves each subproblem once and stores the result, avoiding redundant calculations.

## Learning Objectives
- Understand overlapping subproblems and optimal substructure
- Implement memoization (top-down) approach
- Implement tabulation (bottom-up) approach
- Recognize problems suitable for DP
- Optimize recursive solutions with DP

## Concepts
1. **Overlapping Subproblems**: The same subproblem is solved multiple times
2. **Optimal Substructure**: An optimal solution contains optimal solutions to subproblems
3. **Memoization**: Store results of subproblems (top-down approach)
4. **Tabulation**: Build solution iteratively (bottom-up approach)

## Example Problem
Calculate the nth Fibonacci number efficiently.

```javascript
// Inefficient recursive approach - O(2^n)
function fibRecursive(n) {
  if (n <= 1) return n;
  return fibRecursive(n - 1) + fibRecursive(n - 2);
}

// Efficient DP approach with memoization - O(n)
function fibDP(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 1) return n;

  memo[n] = fibDP(n - 1, memo) + fibDP(n - 2, memo);
  return memo[n];
}
```

## When to Use
- Fibonacci sequence
- Coin change problem (minimum coins needed)
- Longest common subsequence
- 0/1 Knapsack problem
- Maximum product subarray
- Edit distance (Levenshtein distance)

## Key Benefits
- Converts exponential time solutions to polynomial time
- Avoids redundant calculations
- Elegant solution to complex optimization problems
