# Greedy Algorithm Problems

## Overview
Greedy algorithms build a solution piece by piece, always choosing the option that seems best at the moment. They work when the locally optimal choice leads to the globally optimal solution.

## Learning Objectives
- Determine reachability with Jump Game
- Merge overlapping intervals
- Find optimal buy/sell points for stock
- Select maximum non-overlapping activities

## Concepts
1. **Jump Game**: Greedily track farthest reachable position
2. **Merge Intervals**: Sort + merge adjacent overlapping ranges
3. **Stock Profit**: Track running minimum, compute max difference
4. **Activity Selection**: Sort by end time, pick earliest-finishing non-overlapping

## Run Tests
```bash
npm test -- "exercises/25-greedy-algorithms/1-greedy-problems/solution.test.js"
```

## Difficulty: Medium
