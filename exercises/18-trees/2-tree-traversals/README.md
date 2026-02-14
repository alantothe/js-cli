# Tree Traversals

## Overview
Tree traversal means visiting every node in a tree exactly once. The order in which nodes are visited defines the traversal type. Mastering all traversal orders is essential for tree-based interview questions.

## Learning Objectives
- Implement inorder, preorder, and postorder (DFS) traversals
- Implement level-order (BFS) traversal
- Calculate binary tree height

## Concepts
1. **Inorder (L, Root, R)**: Visits BST nodes in sorted order
2. **Preorder (Root, L, R)**: Used to copy/serialize a tree
3. **Postorder (L, R, Root)**: Used to delete a tree
4. **Level-order (BFS)**: Uses a queue, visits level by level

## Run Tests
```bash
npm test -- "exercises/18-trees/2-tree-traversals/solution.test.js"
```

## Difficulty: Medium
