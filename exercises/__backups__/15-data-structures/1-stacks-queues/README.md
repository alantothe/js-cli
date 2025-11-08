# Stacks and Queues

## Overview
Stacks and queues are fundamental data structures with specific ordering rules for adding and removing elements. Understanding them is crucial for solving many algorithmic problems.

## Stack (LIFO)

### Concept
Last In, First Out - like a stack of plates where you add and remove from the top.

### Operations
- `push(value)`: Add element to top - O(1)
- `pop()`: Remove and return from top - O(1)
- `peek()`: View top without removing - O(1)
- `isEmpty()`: Check if empty - O(1)

### Real-World Examples
- Browser back button (history)
- Undo/Redo functionality
- Function call stack
- Expression evaluation (parenthesis matching)

### Implementation
Can use array with `push()` and `pop()` or a custom class.

## Queue (FIFO)

### Concept
First In, First Out - like a line at a store where you add to back and remove from front.

### Operations
- `enqueue(value)`: Add to back - O(1)
- `dequeue()`: Remove and return from front - O(1)
- `peek()`: View front without removing - O(1)
- `isEmpty()`: Check if empty - O(1)

### Real-World Examples
- Print queue
- Task scheduling
- BFS (Breadth-First Search)
- Customer service lines

### Implementation
Can use array with `push()` and `shift()` or a custom class.

## Key Differences
| Aspect | Stack | Queue |
|--------|-------|-------|
| Order | LIFO | FIFO |
| Add | Top (push) | Back (enqueue) |
| Remove | Top (pop) | Front (dequeue) |

## Tips
- Stack is useful for recursive problems and depth-first approaches
- Queue is useful for level-by-level traversal and breadth-first approaches
- Both should support all operations in O(1) time
