# Insertion Sort

## Overview
Insertion Sort builds a sorted portion one element at a time by inserting each element into its correct position. It's efficient for small arrays and nearly-sorted data (O(n) best case).

## Learning Objectives
- Implement insertion sort in-place
- Understand when insertion sort outperforms other algorithms
- Recognize the "shifting" pattern

## Concepts
1. **Sorted Portion**: Elements before current index are sorted
2. **Insertion**: Shift larger elements right, place current element
3. **Best Case**: Already sorted data requires only N-1 comparisons

## Run Tests
```bash
npm test -- "exercises/20-sorting-algorithms/3-insertion-sort/solution.test.js"
```

## Difficulty: Easy
