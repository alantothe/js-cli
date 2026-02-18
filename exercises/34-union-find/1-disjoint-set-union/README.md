# Disjoint Set Union

## Overview
Union-Find (DSU) is a foundational structure for connectivity and cycle detection in graphs.

## Learning Objectives
- Implement DSU with path compression and union by rank
- Count connected components
- Detect cycles in undirected edges
- Validate whether a graph forms a tree

## Concepts
1. **Parent Pointers**: Each node points to set representative
2. **Path Compression**: Flatten tree during find operation
3. **Union by Rank/Size**: Keep trees shallow for near O(1) operations

## Run Tests
```bash
npm test -- "exercises/34-union-find/1-disjoint-set-union/solution.test.js"
```

## Difficulty: Medium
