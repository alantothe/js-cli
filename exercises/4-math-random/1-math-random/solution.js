/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ MATH.RANDOM() BASICS                                                          │
 │                                                                               │
 │ Math.random() generates a floating-point number in the range [0, 1),          │
 │ meaning from 0 (inclusive) up to but not including 1.                         │
 │                                                                               │
 │ To obtain random integers in different ranges, combine Math.random()          │
 │ with multiplication and Math.floor():                                         │
 │                                                                               │
 │ • Math.random()                      → returns a number 0 ≤ x < 1             │
 │ • Math.random() * N                  → returns a number 0 ≤ x < N             │
 │ • Math.floor(Math.random() * N)      → returns an integer 0 ≤ x ≤ N−1         │
 │ • Math.floor(Math.random() * N) + 1  → returns an integer 1 ≤ x ≤ N           │
 └─────────────────────────────────────────────────────────────────────────────┘*/




/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ EXAMPLES                                                                      │
 └─────────────────────────────────────────────────────────────────────────────┘*/

/* 1. Generate a random floating-point number between 0 (inclusive)
 *    and 1 (exclusive).
 */
const randFloat = Math.random();
console.log('Random float [0, 1):', randFloat);

/* 2. Generate a random floating-point number between 0 (inclusive)
 *    and 10 (exclusive).
 */
const rand0to10 = Math.random() * 10;
console.log('Random float [0, 10):', rand0to10);

/* 3. Generate a random integer between 0 and 9 (inclusive).
 */
const randInt0to9 = Math.floor(Math.random() * 10);
console.log('Random integer [0, 9]:', randInt0to9);

/* 4. Generate a random integer between 1 and 10 (inclusive).
 */
const randInt1to10 = Math.floor(Math.random() * 10) + 1;
console.log('Random integer [1, 10]:', randInt1to10);




/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ YOUR TURN: PRACTICE PROBLEMS                                                  │
 │                                                                               │
 │ 1. Simulate a dice roll: produce a random integer between 1 and 6.            │
 │                                                                               │
 │ // Write your code here:                                                      │
 │                                                                               │
 │                                                                               │
 │ 2. Produce a random integer between 1 and 100.                                │
 │                                                                               │
 │ // Write your code here:                                                      │
 │                                                                               │
 │                                                                               │
 │ 3. Simulate a coin flip: produce either 0 or 1.                               │
 │                                                                               │
 │ // Write your code here:                                                      │
 │                                                                               │
 │                                                                               │
 │ 4. Choose a random index for an array of length 5 (valid indices: 0–4).       │
 │                                                                               │
 │ // Write your code here:                                                      │
 │                                                                               │
 │                                                                               │
 │ 5. Create a function `randomInRange(min, max)` that returns a random          │
 │ integer between min and max (inclusive).                                      │
 │                                                                               │
 │ // Write your code here:                                                      │
 │                                                                               │
 │                                                                               │
 │ Practice each problem by writing code and verifying the output in             │
 │ your browser console or Node.js environment.                                  │
 └─────────────────────────────────────────────────────────────────────────────┘*/
