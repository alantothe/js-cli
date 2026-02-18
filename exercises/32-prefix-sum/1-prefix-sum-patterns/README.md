# Prefix Sum Patterns

## Overview
Prefix sums transform repeated range computations into O(1) queries after O(n) preprocessing.

## Learning Objectives
- Build and query a prefix sum array
- Count subarrays with target sum using hash maps
- Compute immutable range sums efficiently
- Apply difference array for range updates

## Concepts
1. **Running Total**: prefix[i] stores sum up to i
2. **Complement Lookup**: currentSum - k pattern
3. **Difference Array**: mark range boundaries, then prefix accumulate

## Run Tests
```bash
npm test -- "exercises/32-prefix-sum/1-prefix-sum-patterns/solution.test.js"
```

## Difficulty: Medium
