# String Helper Functions

## Overview
String helper functions are essential utilities for manipulating and transforming text data. These functions handle common string operations you'll encounter frequently in programming.

## Learning Objectives
- Implement common string manipulation functions
- Work with string methods (slice, substring, charAt, etc.)
- Understand string immutability in JavaScript
- Build reusable string utilities

## Functions to Implement

### capitalize(str)
Convert the first character of a string to uppercase and the rest to lowercase.
```
capitalize('hello') => 'Hello'
capitalize('WORLD') => 'World'
```

### reverse(str)
Reverse a string and return it.
```
reverse('hello') => 'olleh'
reverse('123') => '321'
```

### truncate(str, length)
Truncate a string to a specified length and add '...' at the end if truncated.
```
truncate('hello world', 5) => 'he...'
truncate('hi', 5) => 'hi'
```

### repeat(str, count)
Repeat a string a specified number of times.
```
repeat('ab', 3) => 'ababab'
repeat('x', 5) => 'xxxxx'
```

## Tips
- Use string methods: `charAt()`, `slice()`, `substring()`, `toUpperCase()`, `toLowerCase()`
- Remember strings are immutable - use concatenation or array methods
- Consider edge cases like empty strings and zero/negative counts
