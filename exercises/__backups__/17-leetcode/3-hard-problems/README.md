# LeetCode Hard Problems

## Overview
Hard problems require mastery of advanced algorithms and data structures. These are typical of real coding interviews at top tech companies.

## Learning Objectives
- Solve hard algorithmic problems
- Master complex data structure operations
- Optimize for extreme edge cases
- Develop advanced problem-solving strategies

## Problem: medianOfTwoSortedArrays

Find the median of two sorted arrays of different sizes.

**Example:**
```
Input: nums1 = [1, 3], nums2 = [2]
Output: 2.0

Input: nums1 = [1, 2], nums2 = [3, 4]
Output: 2.5
```

**Approach:**
- Binary search approach (optimal)
- Partition both arrays to find median
- Time: O(log(min(m, n))), Space: O(1)

## Problem: wordLadder

Find the shortest transformation sequence from beginWord to endWord, changing one letter at a time.

**Example:**
```
Input:
  beginWord = "hit"
  endWord = "cog"
  wordList = ["hot", "dot", "dog", "lot", "log", "cog"]
Output: 5 (path: "hit" -> "hot" -> "dot" -> "dog" -> "cog")
```

**Approach:**
- BFS to find shortest path
- Build graph of valid transformations
- Track visited words to avoid cycles
- Time: O(N * L * 26), Space: O(N * L)

## Problem: mergeKSortedLists

Merge k sorted linked lists into one sorted list.

**Example:**
```
Input: [[1, 4, 5], [1, 3, 4], [2, 6]]
Output: [1, 1, 2, 3, 4, 4, 5, 6]
```

**Approach:**
- Min heap approach for efficiency
- Use priority queue (heap) for k lists
- Time: O(N log k) where N is total elements
- Space: O(k) for heap

## Tips
- Hard problems often need mathematical insight
- Consider divide-and-conquer or dynamic programming
- Think about edge cases with empty inputs
- Practice explaining your approach before coding
