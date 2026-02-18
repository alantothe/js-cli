# Binary Search on Answer

## Overview
Some interview problems ask for a minimum/maximum feasible value. If feasibility is monotonic, binary search the answer space.

## Learning Objectives
- Identify monotonic feasibility functions
- Find first true / last true boundary
- Minimize maximum load via binary search
- Solve partition style optimization problems

## Concepts
1. **Search Space**: Binary search over values, not indices
2. **Feasibility Check**: Greedy predicate used inside search
3. **Boundary Conditions**: Track best valid candidate

## Run Tests
```bash
npm test -- "exercises/33-binary-search-advanced/1-binary-search-on-answer/solution.test.js"
```

## Difficulty: Medium
