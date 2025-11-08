# Basic Recursion

## Overview
Recursion is a programming technique where a function calls itself to solve progressively smaller versions of a problem. This is fundamental to many algorithms like tree traversal, divide-and-conquer problems, and dynamic programming.

## Learning Objectives
- Understand base cases and recursive cases
- Implement recursive functions correctly
- Avoid infinite recursion and stack overflow
- Recognize problems where recursion is natural

## Key Components of Recursion

### 1. Base Case
The condition that stops the recursion. Without it, the function calls itself infinitely.

```javascript
// Base case: when n is 0 or 1
if (n === 0 || n === 1) return 1;
```

### 2. Recursive Case
The function calls itself with a simpler or smaller version of the problem.

```javascript
// Recursive case: multiply by smaller factorial
return n * factorial(n - 1);
```

## Example: Factorial

```javascript
function factorial(n) {
  // Base case
  if (n === 0 || n === 1) return 1;

  // Recursive case
  return n * factorial(n - 1);
}

factorial(5) // returns 120
```

## Common Pitfalls
- Forgetting the base case → infinite recursion
- Base case too late → stack overflow
- Not making progress toward base case → infinite recursion

## When to Use Recursion
- Tree or graph traversal
- Problems with natural recursive structure
- Divide-and-conquer algorithms
- Backtracking problems

## Tips
- Always identify the base case first
- Make sure each recursive call moves toward the base case
- Trace through small examples to verify correctness
