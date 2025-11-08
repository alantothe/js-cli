# LeetCode Tree Problems

## Overview
Tree problems test recursive thinking, traversal algorithms, and dynamic programming. Trees are fundamental data structures in computer science.

## Learning Objectives
- Master tree traversal techniques (DFS, BFS)
- Understand recursive approaches to tree problems
- Learn tree properties and validation
- Build confidence with complex nested structures

## Problem: levelOrderTraversal

Traverse tree level by level (breadth-first) and return nodes at each level.

**Example:**
```
Input:     3
          / \
         9  20
           /  \
          15   7

Output: [[3], [9, 20], [15, 7]]
```

**Approach:**
- Use queue for BFS
- Process nodes level by level
- Track level boundaries
- Time: O(n), Space: O(w) where w is max width

## Problem: lowestCommonAncestor

Find the lowest common ancestor of two nodes in a binary search tree.

**Example:**
```
Input: root = [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], p = 2, q = 8
Output: 6 (lowest node that has both 2 and 8 as descendants)
```

**Approach:**
- Use BST property to navigate
- If both p and q less than node, go left
- If both greater, go right
- Otherwise, current node is LCA
- Time: O(h) where h is height

## Problem: maxPathSum

Find maximum path sum in binary tree (path can start/end at any node).

**Example:**
```
Input:    1
         / \
        2   3
Output: 6 (path: 2 -> 1 -> 3)
```

**Approach:**
- Recursive DFS with path tracking
- Return max path from each node
- Track global maximum
- Time: O(n), Space: O(h)

## Tips
- Tree problems often have elegant recursive solutions
- BFS uses queues, DFS uses recursion or stacks
- Remember to handle null/leaf nodes
- Practice tree construction and traversal patterns
