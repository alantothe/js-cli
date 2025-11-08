# Bubble Sort

## Overview
Bubble sort is one of the simplest sorting algorithms. It works by repeatedly stepping through the array, comparing adjacent elements, and swapping them if they're in the wrong order. The largest unsorted element "bubbles" to its correct position with each pass.

## Learning Objectives
- Understand how bubble sort works
- Implement the bubble sort algorithm
- Understand time and space complexity
- Learn when NOT to use bubble sort in production

## How It Works
1. Compare first two elements, swap if first > second
2. Move to next pair and repeat
3. After first pass, largest element is in correct position
4. Repeat for remaining unsorted portion
5. Continue until entire array is sorted

## Algorithm Steps
```
for i = 0 to n-1:
  for j = 0 to n-i-2:
    if arr[j] > arr[j+1]:
      swap arr[j] and arr[j+1]
```

## Complexity Analysis
- **Time Complexity**: O(n²) - worst and average case, O(n) best case
- **Space Complexity**: O(1) - sorts in place
- **Stable**: Yes - equal elements maintain relative order

## Example
Sorting [3, 1, 4, 1, 5]:
- Pass 1: [1, 3, 1, 4, 5] (largest in place)
- Pass 2: [1, 1, 3, 4, 5] (all sorted)

## When to Use
- Educational purposes (learning sorting concepts)
- Very small arrays
- Nearly sorted data (with optimization)

## When NOT to Use
- Production code with large datasets
- When performance matters (use quicksort, mergesort)
- Time-sensitive applications

## Optimization: Early Exit
Stop early if no swaps occur in a pass (array is sorted).
