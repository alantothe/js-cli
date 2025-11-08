# For...of Loop

## Overview
A `for...of` loop iterates over iterable objects (arrays, strings, Sets, Maps, etc.) and directly accesses the **values** (not indices).

## Syntax
```javascript
for (const element of array) {
  // element is the value, not the index
}
```

## Key Concepts
- Iterates over **values** (not indices like for...in)
- Cleaner syntax than traditional for loops
- Works with arrays, strings, Sets, Maps, and other iterables
- Can use `break` and `continue`
- Cannot access the index directly (use for loop if you need it)

## Difference from for...in
```javascript
for...in   // iterates over property names (keys)
for...of   // iterates over values
```

## Exercises
Practice using for...of loops to:
- Iterate over arrays
- Process string characters
- Work with Sets and Maps
- Transform and filter data
- Break out of loops early

## Run Tests
```bash
npm test -- "solution.test.js"
```

## Difficulty
**Easy**
