# Top K Problems with Heaps

## Overview
"Find the K largest/smallest/most frequent" is one of the most common interview patterns. These problems are efficiently solved with heaps or sorting.

## Learning Objectives
- Find the Kth largest element
- Find the K most frequent elements using frequency counting
- Apply distance calculations for K closest points

## Concepts
1. **Min-Heap of size K**: Maintain K largest by evicting smallest
2. **Frequency Map + Heap**: Count occurrences, then extract top K
3. **Distance Sorting**: Calculate metric, select top K by metric

## Run Tests
```bash
npm test -- "exercises/22-heaps/2-top-k-problems/solution.test.js"
```

## Difficulty: Medium
