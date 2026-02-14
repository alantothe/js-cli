# Grid-Based Dynamic Programming

## Overview
Many DP problems involve navigating or optimizing over 2D grids. These problems build your intuition for multi-dimensional DP tables.

## Learning Objectives
- Count paths in a grid using DP
- Find minimum cost paths
- Implement Longest Common Subsequence (2D string DP)

## Concepts
1. **Unique Paths**: Each cell = sum of cell above + cell to left
2. **Min Path Sum**: Each cell = current value + min of above/left
3. **LCS**: Match characters diagonally, otherwise take max of skipping either character

## Run Tests
```bash
npm test -- "exercises/23-dynamic-programming/2-grid-dp/solution.test.js"
```

## Difficulty: Medium
