# Object Helper Functions

## Overview
Object helper functions provide utilities for working with JavaScript objects. These utilities help you extract, merge, and manipulate object data efficiently.

## Learning Objectives
- Work with object properties and methods
- Implement object transformation utilities
- Understand object spread and deep copying
- Handle nested data structures

## Functions to Implement

### getKeys(obj)
Return an array of all keys in an object.
```
getKeys({a: 1, b: 2}) => ['a', 'b']
getKeys({name: 'John', age: 30}) => ['name', 'age']
```

### getValues(obj)
Return an array of all values in an object.
```
getValues({a: 1, b: 2}) => [1, 2]
getValues({name: 'John', age: 30}) => ['John', 30]
```

### merge(obj1, obj2)
Merge two objects into a new object (obj2 properties override obj1).
```
merge({a: 1}, {b: 2}) => {a: 1, b: 2}
merge({a: 1, b: 2}, {b: 3}) => {a: 1, b: 3}
```

### isEmpty(obj)
Check if an object is empty (has no properties).
```
isEmpty({}) => true
isEmpty({a: 1}) => false
```

## Tips
- Use `Object.keys()`, `Object.values()` for easy solutions
- Understand the difference between shallow and deep merge
- For merging, you can use spread operator or Object.assign()
- Consider how to count object properties for isEmpty check
