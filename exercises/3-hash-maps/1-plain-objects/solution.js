/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ PLAIN OBJECT AS A SIMPLE HASH MAP                                             │
 │                                                                               │
 │ In JavaScript, plain objects ({}) let you store key-value pairs.              │
 │ They serve as simple hash maps (dictionaries) when your keys are strings.     │
 └─────────────────────────────────────────────────────────────────────────────┘*/




/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ BASIC OPERATIONS                                                              │
 └─────────────────────────────────────────────────────────────────────────────┘*/

/* 1. Creating an empty object */
const map = {};

/* 2. Setting properties (inserting key-value pairs) */
map['apple'] = 2;
map.banana = 5; // dot notation works for valid identifier keys

console.log(map);
// Output: { apple: 2, banana: 5 }

/* 3. Reading properties (looking up values by key) */
console.log(map['apple']);   // 2
console.log(map.banana);     // 5
console.log(map.orange);     // undefined (no such key)

/* 4. Checking for key existence */
console.log('apple' in map);                       // true
console.log(Object.prototype.hasOwnProperty.call(map, 'banana')); // true
console.log(map.hasOwnProperty('cherry'));         // false

/* 5. Deleting a key */
delete map.apple;
console.log(map);
// Output: { banana: 5 }

/* 6. Iterating over all keys */
for (const key of Object.keys(map)) {
  console.log(key, map[key]);
}
// Output:
// banana 5

/* 7. Clearing the map (reset to empty) */
for (const key of Object.keys(map)) {
  delete map[key];
}
console.log(map); // {}




/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ WHEN TO USE PLAIN OBJECTS AS HASH MAPS                                        │
 │                                                                               │
 │ • Use when your keys are simple strings (e.g., names, IDs).                   │
 │ • Lookups, insertions, and deletions are on average O(1).                     │
 │ • All environments support them—no extra imports needed.                      │
 │                                                                               │
 │ • If you need non-string keys (e.g., objects or functions) or guaranteed      │
 │ insertion order, consider using ES6 Map instead.                              │
 └─────────────────────────────────────────────────────────────────────────────┘*/




/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ EXERCISES                                                                     │
 │                                                                               │
 │ 1. Create an object "scores" that tracks game scores:                         │
 │ - Set scores['Alice'] = 10                                                    │
 │ - Set scores['Bob'] = 15                                                      │
 │ - Print Bob's score.                                                          │
 │ - Increase Alice's score by 5.                                                │
 │ - Delete Bob's entry.                                                         │
 │                                                                               │
 │ 2. Given an array of words ["apple", "banana", "apple", "orange"],            │
 │ build a frequency map "freq" so that freq['apple'] === 2, etc.                │
 │                                                                               │
 │ 3. Given an object "settings" with unknown keys, write code to                │
 │ print each key and its value.                                                 │
 │                                                                               │
 │ 4. Given an object "inventory" = { pen: 3, notebook: 7 }, check               │
 │ whether 'pencil' exists; if not, set inventory['pencil'] = 0.                 │
 │                                                                               │
 │ 5. Advanced (optional): Convert an array of objects                           │
 │ [{id: 'x', val: 1}, {id: 'y', val: 2}] into a map by id:                      │
 │ { x: 1, y: 2 }.                                                               │
 │                                                                               │
 │ Practice each exercise in your environment by writing and testing             │
 │ the code.                                                                     │
 └─────────────────────────────────────────────────────────────────────────────┘*/
