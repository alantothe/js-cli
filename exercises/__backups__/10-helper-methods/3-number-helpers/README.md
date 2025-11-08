# Number Helper Functions

## Overview
Number helper functions provide utilities for common mathematical operations and numeric validations. These are building blocks for mathematical algorithms and data processing.

## Learning Objectives
- Implement mathematical utility functions
- Understand numeric validation and computation
- Work with loops and conditional logic
- Build foundation for algorithm problems

## Functions to Implement

### isEven(num)
Check if a number is even.
```
isEven(4) => true
isEven(7) => false
```

### isPrime(num)
Check if a number is prime (only divisible by 1 and itself).
```
isPrime(7) => true
isPrime(10) => false
```

### factorial(num)
Calculate the factorial of a number (num! = num × (num-1) × ... × 1).
```
factorial(5) => 120
factorial(0) => 1
```

### sum(arr)
Calculate the sum of all numbers in an array.
```
sum([1, 2, 3, 4]) => 10
sum([5]) => 5
```

## Tips
- Use modulo operator (%) to check divisibility
- For isPrime, only check divisors up to sqrt(num) for efficiency
- Handle edge cases like 0, 1, and negative numbers
- Use loops or reduce for sum
