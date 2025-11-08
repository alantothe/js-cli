/**
 * JavaScript Set Worksheet
 *
 * ES6 introduced the Set object, which lets you store unique values
 * of any type (primitives or object references). Sets automatically
 * eliminate duplicates and preserve insertion order when iterating.
 *
 * ---------------------------------------------------------------------
 * CREATING AND INITIALIZING A SET
 */

// 1. Create an empty Set
const set1 = new Set();
console.log('Empty set:', set1);
// Output: Set(0) {}

// 2. Create a Set from an array (duplicates are removed)
const arr = [1, 2, 3, 2, 1];
const set2 = new Set(arr);
console.log('Set from array [1,2,3,2,1]:', set2);
// Output: Set(3) { 1, 2, 3 }

/* ---------------------------------------------------------------------
 * BASIC OPERATIONS
 */

// 3. add(value): Add a value to the Set
set1.add('apple');
set1.add('banana');
set1.add('cherry');
console.log('After adds:', set1);
// Output: Set(3) { 'apple', 'banana', 'cherry' }

// 4. has(value): Check if a value exists in the Set
console.log("set1.has('banana'):", set1.has('banana')); // true
console.log("set1.has('date'):", set1.has('date'));     // false

// 5. delete(value): Remove a value; returns true if present
console.log("set1.delete('banana'):", set1.delete('banana')); // true
console.log('After delete:', set1);
// Output: Set(2) { 'apple', 'cherry' }

// 6. size property: Number of unique values
console.log('set1.size:', set1.size); // 2

// 7. clear(): Remove all values
set1.clear();
console.log('After clear, size:', set1.size); // 0

/* ---------------------------------------------------------------------
 * ITERATING OVER A SET
 */

// 8. values() (also keys()—identical for Sets) returns an iterator of values
const set3 = new Set(['a', 'b', 'c']);

// Iterate with for...of
console.log('Iterate with for...of:');
for (const value of set3.values()) {
  console.log(value);
}
// Output:
// a
// b
// c

// 9. entries() returns an iterator of [value, value] pairs (for compatibility)
console.log('Iterate with entries():');
for (const [v1, v2] of set3.entries()) {
  console.log(v1, v2);
}
// Output:
// a a
// b b
// c c

// 10. forEach(callback): Similar to Map’s forEach but only value and value
console.log('Iterate with forEach():');
set3.forEach((value) => {
  console.log('Value:', value);
});
// Output:
// Value: a
// Value: b
// Value: c

/* ---------------------------------------------------------------------
 * CONVERTING BETWEEN SET AND ARRAY
 */

// 11. Convert a Set to an array (removes duplicates)
const arrayFromSet = Array.from(set3);
console.log('Array from Set:', arrayFromSet);
// Output: [ 'a', 'b', 'c' ]

// 12. Remove duplicates from an array using Set
const dupArr = [1, 2, 2, 3, 3, 3];
const uniqueArr = Array.from(new Set(dupArr));
console.log('Unique array from [1,2,2,3,3,3]:', uniqueArr);
// Output: [ 1, 2, 3 ]

/* ---------------------------------------------------------------------
 * COMMON SET USE CASES
 */

/* 13. Union of two Sets */
const setA = new Set([1, 2, 3]);
const setB = new Set([3, 4, 5]);
const union = new Set([...setA, ...setB]);
console.log('Union (A ∪ B):', union);
// Output: Set(5) { 1, 2, 3, 4, 5 }

/* 14. Intersection of two Sets */
const intersection = new Set([...setA].filter((x) => setB.has(x)));
console.log('Intersection (A ∩ B):', intersection);
// Output: Set(1) { 3 }

/* 15. Difference of two Sets (elements in A not in B) */
const difference = new Set([...setA].filter((x) => !setB.has(x)));
console.log('Difference (A \\ B):', difference);
// Output: Set(2) { 1, 2 }

/* 16. Checking if Set A is a superset of Set B */
function isSuperset(sup, sub) {
  for (const elem of sub) {
    if (!sup.has(elem)) {
      return false;
    }
  }
  return true;
}
console.log('Is A superset of B?', isSuperset(setA, new Set([1, 2]))); // true
console.log('Is A superset of B?', isSuperset(setA, setB));           // false

/* ---------------------------------------------------------------------
 * YOUR TURN: EXERCISES
 *
 * For each exercise below, write code using Set and its methods.
 * Do not reveal your answers here—just write and test in your own environment.
 */

/*
1. Create a Set "colors" and add 'red', 'green', 'blue'.
   - Check if 'green' exists.
   - Delete 'red'.
   - Print the size of the Set.
*/

/*
2. Given an array of numbers [1, 2, 2, 3, 4, 4, 5], create a Set to
   remove duplicates, then convert back to an array "uniqueNumbers".
   Print "uniqueNumbers".
*/

/*
3. Given two Sets:
     const s1 = new Set([10, 20, 30]);
     const s2 = new Set([20, 40, 50]);
   - Compute their union, intersection, and difference (s1 \\ s2).
   - Print each resulting Set.
*/

/*
4. Given a Set "fruits" = new Set(['apple', 'banana', 'cherry']), iterate
   over it with for...of and build an object "fruitCount" that stores each
   fruit as a key with value 1 (i.e., { apple: 1, banana: 1, cherry: 1 }).
*/

/*
5. Advanced: Given a string "sentence" = 'this is a test this is only a test',
   use a Set to find all unique words (split by spaces). Print the Set of
   unique words.
*/

/* ---------------------------------------------------------------------
 * NOTES/TIPS
 *
 * • Sets store unique values—adding a duplicate does nothing.
 * • Values in a Set can be of any type, including objects, but two objects
 *   with identical contents are treated as different keys unless they reference
 *   the same object.
 * • Iteration order is insertion order.
 * • Useful for:
 *    – Removing duplicates
 *    – Fast membership tests (has())
 *    – Set operations (union, intersection, difference)
 *
 * • Use spread ([...set]) or Array.from(set) to convert to an array.
 * • Methods:
 *    – add(value)
 *    – delete(value)
 *    – has(value)
 *    – clear()
 *    – size property
 *    – forEach(callback)
 *    – keys(), values(), entries() (values() and keys() are the same)
 *
 * Practice each exercise in your environment by writing and verifying
 * the code in your browser console or Node.js.
 * ---------------------------------------------------------------------
 */
