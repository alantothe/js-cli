/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ JAVASCRIPT MAP                                                                │
 │                                                                               │
 │ ES6 introduced the Map object, which allows you to store key-value pairs      │
 │ where keys can be of any type (including objects). Unlike plain objects,      │
 │ Maps preserve insertion order and have a built-in size property.              │
 └─────────────────────────────────────────────────────────────────────────────┘*/




/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ CREATING AND INITIALIZING A MAP                                               │
 └─────────────────────────────────────────────────────────────────────────────┘*/

// 1. Create an empty Map
const map1 = new Map();
console.log('Empty map:', map1);
// Output: Map(0) {}

// 2. Create a Map from an array of [key, value] pairs
const initialData = [
  ['apple', 2],
  ['banana', 5],
  ['cherry', 7]
];
const map2 = new Map(initialData);
console.log('Map from array:', map2);
// Output: Map(3) { 'apple' => 2, 'banana' => 5, 'cherry' => 7 }




/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ BASIC OPERATIONS                                                              │
 └─────────────────────────────────────────────────────────────────────────────┘*/

// 3. set(key, value): Add or update a key-value pair
map1.set('x', 10);
map1.set('y', 20);
console.log('After set:', map1);
// Output: Map(2) { 'x' => 10, 'y' => 20 }

// 4. get(key): Retrieve the value for a given key
console.log("map1.get('x'):", map1.get('x')); // 10
console.log("map1.get('z'):", map1.get('z')); // undefined (no such key)

// 5. has(key): Check if the Map contains a key
console.log("map1.has('y'):", map1.has('y')); // true
console.log("map1.has('z'):", map1.has('z')); // false

// 6. delete(key): Remove a key-value pair; returns true if removed
console.log("map1.delete('y'):", map1.delete('y')); // true
console.log('After delete:', map1);
// Output: Map(1) { 'x' => 10 }

// 7. size property: Number of key-value pairs
console.log('map1.size:', map1.size); // 1

// 8. clear(): Remove all key-value pairs
map1.clear();
console.log('After clear, size:', map1.size); // 0




/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ USING NON-STRING KEYS                                                         │
 └─────────────────────────────────────────────────────────────────────────────┘*/

// 9. Keys can be objects, functions, or any value (unlike plain objects).
const objKey = { id: 1 };
const funcKey = () => {};
const map3 = new Map();

// Use an object as a key
map3.set(objKey, 'Object Value');
console.log('map3.get(objKey):', map3.get(objKey)); // 'Object Value'

// Use a function as a key
map3.set(funcKey, 'Function Value');
console.log('map3.get(funcKey):', map3.get(funcKey)); // 'Function Value'




/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ ITERATING OVER A MAP                                                          │
 └─────────────────────────────────────────────────────────────────────────────┘*/

// 10. keys(), values(), entries() methods return iterators

const map4 = new Map([
  ['a', 1],
  ['b', 2],
  ['c', 3]
]);

// Iterate over keys
console.log('Keys:');
for (const key of map4.keys()) {
  console.log(key);
}
// Output: a, b, c

// Iterate over values
console.log('Values:');
for (const value of map4.values()) {
  console.log(value);
}
// Output: 1, 2, 3

// Iterate over entries ([key, value] pairs)
console.log('Entries:');
for (const [key, value] of map4.entries()) {
  console.log(`${key} => ${value}`);
}
// Output: a => 1, b => 2, c => 3

// 11. Default iteration over a Map is the same as entries()
console.log('Default iteration:');
for (const entry of map4) {
  console.log(entry);
}
// Output: [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ]

// 12. forEach(callback): Iterates over each entry
map4.forEach((value, key) => {
  console.log(`Key: ${key}, Value: ${value}`);
});
// Output: Key: a, Value: 1 (etc.)




/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ CONVERTING BETWEEN MAP AND ARRAY                                              │
 └─────────────────────────────────────────────────────────────────────────────┘*/

// 13. Convert a Map to an array of [key, value] pairs
const arrayFromMap = Array.from(map4);
console.log('Array from Map:', arrayFromMap);
// Output: [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]

// 14. Convert a Map's keys or values to an array
const keysArray = Array.from(map4.keys());
const valuesArray = Array.from(map4.values());
console.log('Keys array:', keysArray);     // [ 'a', 'b', 'c' ]
console.log('Values array:', valuesArray); // [ 1, 2, 3 ]

// 15. Create a Map from an array of pairs (reverse of above)
const pairs = [
  ['x', 100],
  ['y', 200],
  ['z', 300]
];
const mapFromPairs = new Map(pairs);
console.log('Map from pairs:', mapFromPairs);
// Output: Map(3) { 'x' => 100, 'y' => 200, 'z' => 300 }




/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ COMMON USE CASES                                                              │
 └─────────────────────────────────────────────────────────────────────────────┘*/

/* 16. Frequency Counter with Map */
const text = 'hello world';
const freqMap = new Map();

for (const char of text) {
  if (char === ' ') continue;
  const count = freqMap.get(char) || 0;
  freqMap.set(char, count + 1);
}
console.log('Character frequencies (Map):', freqMap);

/* 17. Caching or Memoization with Map */
const fibCacheMap = new Map();

function fibMap(n) {
  if (n <= 1) return n;
  if (fibCacheMap.has(n)) {
    return fibCacheMap.get(n);
  }
  const result = fibMap(n - 1) + fibMap(n - 2);
  fibCacheMap.set(n, result);
  return result;
}

console.log('Fibonacci(10) with Map cache:', fibMap(10)); // 55
console.log('fibCacheMap:', fibCacheMap);




/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ YOUR TURN: EXERCISES                                                          │
 │                                                                               │
 │ For each exercise below, write code using Map and its methods.                │
 │ Do not reveal your answers here—just write and test the code in               │
 │ your own environment.                                                         │
 └─────────────────────────────────────────────────────────────────────────────┘*/

/*
1. Create a Map "studentGrades" where:
   - Keys are student names ('Alice', 'Bob', 'Carol')
   - Values are their grades (85, 92, 78)
   Then:
   - Print Carol's grade.
   - Update Bob's grade to 95.
   - Check if 'Dave' exists in the Map; if not, add 'Dave' with grade 88.
   - Finally, print the size of the Map.

2. Given an array of arrays:
     const data = [
       ['USA', 'Washington, D.C.'],
       ['CAN', 'Ottawa'],
       ['MEX', 'Mexico City']
     ];
   - Create a Map "capitalMap" from this data.
   - Print the capital of 'CAN'.
   - Delete the 'MEX' entry.
   - Convert "capitalMap" to an array of [countryCode, capital] pairs.

3. Given a Map "inventory" that maps product names to stock counts:
     const inventory = new Map([
       ['Pen', 10],
       ['Notebook', 0],
       ['Eraser', 5],
       ['Pencil', 3]
     ]);
   - Use for...of to print all products that are out of stock (value === 0).
   - Use Map's forEach() to decrement the stock of every product by 1 (but do not let it go below 0).
   - Print the updated Map.

4. Advanced: Given a Map "userRoles" where keys are user IDs (numbers)
   and values are objects { name: string, role: string }, write code
   to build a new Map "roleToUsers" that maps each role to an array
   of user IDs having that role.
*/




/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ NOTES/TIPS                                                                    │
 │                                                                               │
 │ • Maps preserve insertion order—iteration happens in the order keys were      │
 │ added.                                                                        │
 │                                                                               │
 │ • Unlike plain objects, Maps do not coerce keys to strings, so using          │
 │ objects, functions, or NaN as keys is safe.                                   │
 │                                                                               │
 │ • Use Map when you need:                                                      │
 │ - Non-string keys                                                             │
 │ - Guaranteed insertion order for iteration                                    │
 │ - A built-in size property                                                    │
 │                                                                               │
 │ • To clear all entries from a Map, just call clear().                         │
 │ • To check for a key without retrieving its value, use has().                 │
 │                                                                               │
 │ Practice the exercises in your environment by writing and verifying           │
 │ the code in your browser console or Node.js.                                  │
 └─────────────────────────────────────────────────────────────────────────────┘*/
