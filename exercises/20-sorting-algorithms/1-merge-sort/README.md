# Merge Sort

## Overview
Merge Sort is a divide-and-conquer algorithm that splits the array in half, recursively sorts each half, and merges the sorted halves. It guarantees O(n log n) time and is stable.

## Learning Objectives
- Implement the merge helper that combines two sorted arrays
- Implement recursive merge sort
- Understand divide-and-conquer strategy

## Concepts
1. **Divide**: Split array into two halves
2. **Conquer**: Recursively sort each half
3. **Combine**: Merge sorted halves using two-pointer technique

## Run Tests
```bash
npm test -- "exercises/20-sorting-algorithms/1-merge-sort/solution.test.js"
```

## Difficulty: Medium
