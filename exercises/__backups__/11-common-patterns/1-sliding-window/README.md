# Sliding Window Pattern

## Overview
The sliding window pattern is a powerful technique for solving problems involving subarrays or substrings. It maintains a contiguous window that slides across the data, reducing time complexity from O(n²) to O(n).

## Learning Objectives
- Understand the sliding window concept
- Identify problems where sliding window applies
- Implement efficient sliding window solutions
- Work with both fixed and variable window sizes

## Concepts
1. **Fixed Window Size**: Window size never changes
2. **Variable Window Size**: Window size adjusts based on conditions
3. **Two Pointer Variant**: Left and right pointers define the window

## Common Problems
- Maximum sum subarray of size k
- Longest substring without repeating characters
- Minimum window substring
- Average of all subarrays of size k

## Example
Finding maximum sum of a subarray with fixed size k:
- Calculate sum of first k elements
- Slide the window right by removing leftmost and adding next element
- Track the maximum sum seen

## Tips
- Define the window clearly (what are left and right bounds)
- Update the result as you slide
- Consider what to add/remove as window moves
