# Backtracking Technique

## Overview
Backtracking is a recursive problem-solving approach that explores all possible solutions by trying choices and "undoing" them when they don't lead to a valid solution. It's useful for constraint satisfaction problems.

## Learning Objectives
- Understand the backtracking approach and decision trees
- Implement recursive backtracking with proper base cases
- Recognize when backtracking is the right approach
- Learn to prune search spaces for efficiency
- Build combinations, permutations, and more

## Concepts
1. **Recursive Exploration**: Try each possibility and recurse
2. **Base Cases**: When to stop recursing (solution found or no valid path)
3. **Undo/Backtrack**: Remove the choice and try the next option
4. **Pruning**: Skip branches that can't lead to valid solutions

## Example Problem
Generate all permutations of an array.

```javascript
// Backtracking approach to generate permutations
function permute(arr, currentPerm = [], result = []) {
  // Base case: if all elements are used, we have a complete permutation
  if (currentPerm.length === arr.length) {
    result.push([...currentPerm]);
    return result;
  }

  // Try each unused element
  for (let i = 0; i < arr.length; i++) {
    // Skip if already used
    if (!currentPerm.includes(arr[i])) {
      // Choose
      currentPerm.push(arr[i]);
      // Explore
      permute(arr, currentPerm, result);
      // Unchoose (backtrack)
      currentPerm.pop();
    }
  }

  return result;
}
```

## When to Use
- Generating permutations and combinations
- N-Queens problem
- Sudoku solver
- Subset generation
- Word search in grid
- Phone number letter combinations
- Parentheses generation

## Key Benefits
- Explores all possible solutions systematically
- Natural recursive approach for combinatorial problems
- Can be optimized with pruning to avoid invalid branches
