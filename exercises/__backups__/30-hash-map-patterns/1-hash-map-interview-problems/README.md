# Hash Map Interview Patterns

## Overview
Hash maps (objects/Maps in JS) provide O(1) average lookup and are the backbone of many interview optimizations. These problems demonstrate the most important hash map patterns.

## Learning Objectives
- Solve Two Sum in O(n) with complement lookup
- Find first unique character with frequency counting
- Detect and group anagrams using sorted-key technique
- Count subarrays with prefix sum + hash map

## Concepts
1. **Complement Lookup**: Store seen values, check if complement exists
2. **Frequency Map**: Count occurrences, then query
3. **Canonical Key**: Sort string to create anagram group key
4. **Prefix Sum Map**: Track running sums to find subarrays with target sum

## Run Tests
```bash
npm test -- "exercises/30-hash-map-patterns/1-hash-map-interview-problems/solution.test.js"
```

## Difficulty: Medium
