# Min Heap Implementation

## Overview
A Min Heap is a complete binary tree where every parent is smaller than or equal to its children. The minimum element is always at the root. Heaps power priority queues, used in Dijkstra's algorithm, top-K problems, and scheduling.

## Learning Objectives
- Implement a Min Heap using an array
- Implement insert with bubble-up
- Implement extractMin with bubble-down
- Understand parent/child index relationships

## Concepts
1. **Array Representation**: Parent at i, children at 2i+1 and 2i+2, parent at floor((i-1)/2)
2. **Bubble Up**: After insert, swap with parent until heap property restored
3. **Bubble Down**: After extract, swap with smallest child until heap property restored

## Run Tests
```bash
npm test -- "exercises/22-heaps/1-min-heap/solution.test.js"
```

## Difficulty: Medium
