# Course Schedule Patterns

## Overview
Topological sorting is essential for dependency problems in DAGs. You will practice cycle detection and ordering.

## Learning Objectives
- Build graph indegree representation
- Detect if all courses can be finished
- Produce a valid topological order
- Compare BFS (Kahn) vs DFS cycle checks

## Concepts
1. **Indegree**: Number of prerequisites remaining
2. **Queue of Ready Nodes**: Process zero-indegree nodes first
3. **Cycle Signal**: Not all nodes processed implies cycle

## Run Tests
```bash
npm test -- "exercises/35-topological-sort/1-course-schedule-patterns/solution.test.js"
```

## Difficulty: Medium
