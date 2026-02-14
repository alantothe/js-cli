# Matrix / 2D Array Problems

## Overview
Matrix problems are common in interviews and test your ability to work with 2D arrays, manage boundaries, and apply techniques like binary search to grids.

## Learning Objectives
- Rotate a matrix 90 degrees in-place
- Traverse a matrix in spiral order
- Apply binary search to a sorted matrix
- Mark rows and columns using constant extra space

## Concepts
1. **Rotate**: Transpose (swap rows/columns) + reverse each row
2. **Spiral**: Track four boundaries, shrink after each pass
3. **Search**: Map 2D index to 1D index for binary search
4. **Set Zeroes**: Use first row/column as in-place markers

## Run Tests
```bash
npm test -- "exercises/27-matrix-problems/1-matrix-operations/solution.test.js"
```

## Difficulty: Medium
