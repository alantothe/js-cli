# Linked List Cycle Detection

## Overview
Floyd's Tortoise and Hare algorithm detects cycles in O(n) time with O(1) space using two pointers moving at different speeds.

## Learning Objectives
- Detect if a linked list contains a cycle
- Find the exact node where the cycle starts
- Understand Floyd's two-phase algorithm

## Concepts
1. **Phase 1**: Slow moves 1 step, fast moves 2 steps — they meet inside the cycle
2. **Phase 2**: Reset one pointer to head, both move 1 step — they meet at cycle start

## Run Tests
```bash
npm test -- "exercises/21-linked-list-operations/2-cycle-detection/solution.test.js"
```

## Difficulty: Medium
