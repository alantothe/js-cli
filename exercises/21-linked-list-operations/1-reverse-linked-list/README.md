# Reverse a Linked List

## Overview
Reversing a linked list is the single most asked linked list question in interviews. You must know both iterative and recursive approaches.

## Learning Objectives
- Reverse a linked list iteratively using three pointers
- Reverse a linked list recursively
- Understand pointer manipulation

## Concepts
1. **Iterative**: Track prev, curr, next — reassign curr.next to prev each step
2. **Recursive**: Reverse the rest of the list, then fix pointers

## Run Tests
```bash
npm test -- "exercises/21-linked-list-operations/1-reverse-linked-list/solution.test.js"
```

## Difficulty: Easy
