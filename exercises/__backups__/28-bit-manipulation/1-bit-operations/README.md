# Bit Manipulation

## Overview
Bitwise operations work directly on binary representations of numbers. They provide O(1) solutions to problems that might otherwise require extra space or multiple passes.

## Learning Objectives
- Use XOR to find unique elements
- Test power-of-two with bitwise AND
- Count and compare set bits
- Reverse bits of an integer

## Concepts
1. **XOR Properties**: a ^ a = 0, a ^ 0 = a -- cancels out duplicates
2. **Power of Two**: n & (n-1) clears the lowest set bit
3. **Hamming Weight**: Count bits using n & (n-1) in a loop
4. **Bit Reversal**: Extract LSB, shift into result from left

## Run Tests
```bash
npm test -- "exercises/28-bit-manipulation/1-bit-operations/solution.test.js"
```

## Difficulty: Medium
