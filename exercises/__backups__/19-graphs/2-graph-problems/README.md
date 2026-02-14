# Common Graph Interview Problems

## Overview
These classic graph problems appear frequently in technical interviews. They test your ability to model problems as graphs and apply DFS/BFS traversals.

## Learning Objectives
- Count connected components (Number of Islands)
- Detect cycles in directed graphs
- Deep clone a graph structure
- Determine if topological ordering exists (Course Schedule)

## Concepts
1. **Connected Components**: DFS/BFS to explore and mark visited cells
2. **Cycle Detection**: DFS with three-color marking (white/gray/black)
3. **Graph Cloning**: Hash map to track original-to-clone mapping
4. **Topological Sort**: Order nodes respecting dependencies

## Run Tests
```bash
npm test -- "exercises/19-graphs/2-graph-problems/solution.test.js"
```

## Difficulty: Hard
