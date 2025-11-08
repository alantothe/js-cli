/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ FOR...OF LOOP                                                                 │
 │                                                                               │
 │ The for...of loop provides a concise way to iterate over iterable             │
 │ objects (arrays, strings, Maps, Sets, etc.), directly accessing each          │
 │ element's value.                                                              │
 │                                                                               │
 │ Syntax:                                                                       │
 │ for (const element of iterable) {                                             │
 │ // use element                                                                │
 │ }                                                                             │
 │                                                                               │
 │ • "iterable" can be any object that implements the @@iterator method,         │
 │ such as Array, String, Map, Set, NodeList, arguments, etc.                    │
 │                                                                               │
 │ • Each iteration binds "element" to the next value yielded by the             │
 │ iterator.                                                                     │
 │                                                                               │
 │ • Unlike for...in, which iterates over keys (object property names),          │
 │ for...of iterates over values.                                                │
 └─────────────────────────────────────────────────────────────────────────────┘*/




/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ EXAMPLES                                                                      │
 └─────────────────────────────────────────────────────────────────────────────┘*/

/* 1. Iterate over an array of numbers */
const numbers = [10, 20, 30, 40, 50];
for (const num of numbers) {
  console.log('Number:', num);
}
// Output:
// Number: 10
// Number: 20
// Number: 30
// Number: 40
// Number: 50

/* 2. Iterate over characters in a string */
const word = 'javascript';
for (const char of word) {
  console.log('Character:', char);
}
// Output:
// Character: j
// Character: a
// Character: v
// Character: a
// Character: s
// Character: c
// Character: r
// Character: i
// Character: p
// Character: t

/* 3. Iterate over values in a Set */
const fruitSet = new Set(['apple', 'banana', 'cherry']);
for (const fruit of fruitSet) {
  console.log('Fruit:', fruit);
}
// Output (order may vary):
// Fruit: apple
// Fruit: banana
// Fruit: cherry

/* 4. Iterate over entries in a Map */
const userMap = new Map([
  ['id', 1],
  ['name', 'Alice'],
  ['active', true]
]);
for (const [key, value] of userMap) {
  console.log(`${key} → ${value}`);
}
// Output:
// id → 1
// name → Alice
// active → true

/* 5. Extract values from an array of objects */
const users = [
  { id: 1, name: 'Bob' },
  { id: 2, name: 'Carol' },
  { id: 3, name: 'Dave' }
];
for (const user of users) {
  console.log(`User ID: ${user.id}, Name: ${user.name}`);
}
// Output:
// User ID: 1, Name: Bob
// User ID: 2, Name: Carol
// User ID: 3, Name: Dave




/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ YOUR TURN: EXERCISES                                                          │
 │                                                                               │
 │ For each exercise below, write a for...of loop that performs the              │
 │ requested task. Do not reveal your answers here—just write and test           │
 │ the code in your own environment.                                             │
 └─────────────────────────────────────────────────────────────────────────────┘*/

/*
1. Given an array of numbers "vals", use for...of to compute the sum of
   all elements and store it in variable "total".
*/
const vals = [3, 7, 2, 9, 5];
// Write your code here:
// let total = 0;
// for (const v of vals) {
//   …
// }
// console.log(total); // Expected: 26

/*
2. Given a string "sentence", use for...of to count how many vowels
   (a, e, i, o, u, case-insensitive) it contains. Store the count in
   variable "vowelCount".
*/
const sentence = 'The quick brown fox jumps over the lazy dog';
// Write your code here:
// let vowelCount = 0;
// for (const ch of sentence) {
//   …
// }
// console.log(vowelCount); // Expected: 11

/*
3. Given a Set "numSet" of integers, use for...of to build a new array
   "squares" containing each integer's square.
*/
const numSet = new Set([1, 2, 3, 4, 5]);
// Write your code here:
// const squares = [];
// for (const n of numSet) {
//   …
// }
// console.log(squares); // Expected: [1, 4, 9, 16, 25] (order corresponds to Set iteration)

/*
4. Given a Map "productMap" where keys are product names and values are
   prices (numbers), use for...of to find the product with the highest
   price. Store its name in "mostExpensive".
*/
const productMap = new Map([
  ['Pen', 2.5],
  ['Notebook', 15],
  ['Backpack', 45],
  ['Calculator', 19.99]
]);
// Write your code here:
// let mostExpensive = '';
// let maxPrice = -Infinity;
// for (const [prod, price] of productMap) {
//   …
// }
// console.log(mostExpensive); // Expected: 'Backpack'

/*
5. Advanced: Given an array of objects "records", each with properties
   "score" (number) and "name" (string), use for...of to build an
   object "scoreBuckets" that groups names by their integer score.
   For example: { 82: ['Alice'], 91: ['Bob', 'Carol'], ... }
*/
const records = [
  { name: 'Alice', score: 82 },
  { name: 'Bob', score: 91 },
  { name: 'Carol', score: 91 },
  { name: 'Dave', score: 78 },
  { name: 'Eve', score: 82 }
];
// Write your code here:
// const scoreBuckets = {};
// for (const rec of records) {
//   …
// }
// console.log(scoreBuckets);
// Expected:
// {
//   '78': ['Dave'],
//   '82': ['Alice', 'Eve'],
//   '91': ['Bob', 'Carol']
// }




/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ NOTES/TIPS                                                                    │
 │                                                                               │
 │ • for...of works on any iterable: arrays, strings, Sets, Maps, typed          │
 │ arrays, argument objects, NodeLists, and more.                                │
 │                                                                               │
 │ • To iterate object properties (keys or values), convert the object           │
 │ into an iterable first: Object.keys(obj), Object.values(obj), or              │
 │ Object.entries(obj), then use for...of on that array.                         │
 │                                                                               │
 │ • You cannot directly use for...of on plain objects ({}), because             │
 │ they are not iterable by default.                                             │
 │                                                                               │
 │ • To break out of a for...of loop early, use the break statement. To          │
 │ skip to the next iteration, use continue.                                     │
 │                                                                               │
 │ • The loop variable (e.g., "for (const x of iterable)") should                │
 │ normally be declared with const, since its value is reassigned                │
 │ automatically each iteration; use let if you need to reassign it.             │
 │                                                                               │
 │ Practice each exercise by writing code and verifying the output in            │
 │ your browser console or Node.js environment.                                  │
 └─────────────────────────────────────────────────────────────────────────────┘*/
