# Quick Sort

## Overview
Quick Sort picks a pivot element, partitions the array so elements less than the pivot are on the left and greater on the right, then recursively sorts the partitions. Average O(n log n) with low overhead.

## Learning Objectives
- Implement the partition function (Lomuto scheme)
- Implement recursive quick sort
- Understand in-place sorting vs creating new arrays

## Concepts
1. **Pivot Selection**: Choose last element (or random for optimization)
2. **Partition**: Rearrange elements around pivot
3. **Recurse**: Sort left and right partitions independently

## Run Tests
```bash
npm test -- "exercises/20-sorting-algorithms/2-quick-sort/solution.test.js"
```

## Difficulty: Medium
