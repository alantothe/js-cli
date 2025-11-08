# Type Checker Helper Functions

## Overview
Type checker functions validate data types and help you write defensive code. These utilities ensure your functions receive the correct data types before processing.

## Learning Objectives
- Understand JavaScript type checking
- Implement type validation utilities
- Work with typeof, Array.isArray(), and instanceof
- Build robust code with type guards

## Functions to Implement

### isArray(val)
Check if a value is an array.
```
isArray([1, 2, 3]) => true
isArray('hello') => false
isArray({length: 3}) => false
```

### isObject(val)
Check if a value is a plain object (not null, array, or function).
```
isObject({a: 1}) => true
isObject([]) => false
isObject(null) => false
```

### isEmpty(val)
Check if a value is empty (empty string, array, or object).
```
isEmpty('') => true
isEmpty([]) => true
isEmpty({}) => true
isEmpty('hello') => false
```

### isNull(val)
Check if a value is null or undefined.
```
isNull(null) => true
isNull(undefined) => true
isNull(0) => false
```

## Tips
- Use `Array.isArray()` for reliable array checking
- Remember that `typeof null` returns 'object'
- Distinguish between null and undefined
- Use `Object.keys().length` or similar to check if object is empty
