# While Loop

## Overview
A `while` loop repeats a block of code while a condition is true. It's useful when you don't know exactly how many iterations you need.

## Syntax
```javascript
while (condition) {
  // code executes while condition is true
}
```

## do...while Syntax
```javascript
do {
  // code executes at least once
} while (condition);
```

## Key Concepts
- Check condition **before** each iteration (while loop)
- Check condition **after** first iteration (do...while loop)
- Useful when number of iterations isn't known in advance
- Risk of infinite loops if condition never becomes false
- Better for event-driven or input-based repetition

## Exercises
Practice using while loops to:
- Count with conditions
- Sum until reaching a target
- Find powers and patterns
- Process until a condition is met

## Run Tests
```bash
npm test -- "solution.test.js"
```

## Difficulty
**Easy**
