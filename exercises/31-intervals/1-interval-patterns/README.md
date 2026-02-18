# Interval Patterns

## Overview
Intervals are a high-frequency interview topic. Most problems reduce to sorting by start time and handling overlap conditions carefully.

## Learning Objectives
- Merge overlapping intervals
- Insert a new interval into a sorted non-overlapping list
- Compute minimum meeting rooms required
- Determine if a person can attend all meetings

## Concepts
1. **Sort First**: Sorting by start time simplifies overlap checks
2. **Greedy Merge**: Extend current interval while overlap continues
3. **Min Heap for Rooms**: Track earliest ending meeting

## Run Tests
```bash
npm test -- "exercises/31-intervals/1-interval-patterns/solution.test.js"
```

## Difficulty: Medium
