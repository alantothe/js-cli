# Binary Search Tree Fundamentals

## Overview
A Binary Search Tree (BST) is a tree where each node's left children are smaller and right children are larger. This property enables efficient O(log n) search, insert, and delete operations.

## Learning Objectives
- Implement BST insert and search operations
- Find min/max values in a BST
- Validate the BST property recursively

## Concepts
1. **BST Property**: left < parent < right for every node
2. **Recursive insertion**: compare and go left or right
3. **Validation**: ensure every node satisfies constraints from ancestors

## Run Tests
```bash
npm test -- "exercises/18-trees/1-bst-fundamentals/solution.test.js"
```

## Difficulty: Medium
