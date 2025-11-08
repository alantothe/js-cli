/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ WHILE AND DO...WHILE LOOPS                                                    │
 │                                                                               │
 │ while and do...while loops allow you to run a block of code repeatedly        │
 │ as long as a specified condition remains true.                                │
 │                                                                               │
 │ • Use a while loop when you want to check the condition before each           │
 │ iteration.                                                                    │
 │ • Use a do...while loop when you want the loop body to execute at least       │
 │ once before checking the condition.                                           │
 └─────────────────────────────────────────────────────────────────────────────┘*/




/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ EXAMPLE: while loop                                                           │
 └─────────────────────────────────────────────────────────────────────────────┘*/

// Print numbers 0 through 4
let i = 0;
while (i < 5) {
  console.log('i is:', i);
  i++;
}
// Output:
// i is: 0
// i is: 1
// i is: 2
// i is: 3
// i is: 4




/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ EXAMPLE: do...while loop                                                      │
 └─────────────────────────────────────────────────────────────────────────────┘*/

// Prompt until user types "exit" (pseudo-code for illustration)
/*
let input;
do {
  input = prompt('Type "exit" to quit:');
  console.log('User entered:', input);
} while (input !== 'exit');
*/
// In a Node.js or console environment, you might simulate this with a variable
let count = 0;
do {
  console.log('This runs at least once. Count:', count);
  count++;
} while (count < 3);
// Output:
// This runs at least once. Count: 0
// This runs at least once. Count: 1
// This runs at least once. Count: 2




/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ YOUR TURN: EXERCISES                                                          │
 │                                                                               │
 │ For each exercise below, write a while or do...while loop that                │
 │ performs the requested task. Do not reveal your answers here—just             │
 │ write and test the code in your own environment.                              │
 └─────────────────────────────────────────────────────────────────────────────┘*/

/*
1. Sum of array elements using a while loop.
   Given an array "nums", use a while loop to compute the sum of all
   elements and store the result in "total".
*/
const nums = [2, 4, 6, 8, 10];
// Write your code here:
// let total = 0;
// let idx = 0;
// while (/* condition */) {
//   …
// }
// console.log(total); // Expected: 30

/*
2. Count down from 10 to 1 using a while loop, and then print "Blast off!".
   Use a single while loop that decrements a variable from 10 down to 1,
   printing the value each iteration. After the loop ends, print "Blast off!".
*/
// Write your code here:
// let n = 10;
// while (/* condition */) {
//   …
// }
// console.log('Blast off!');

/*
3. Prompt simulation: keep generating a random number between 1 and 10
   until you get a 7. Use a do...while loop. Track how many attempts it
   took in "attempts".
*/
let attempts = 0;
// Write your code here:
// do {
//   …
//   attempts++;
// } while (/* condition */);
// console.log('Number of attempts:', attempts); // Expected: ≥1

/*
4. Build an array of even numbers from 0 to 20 (inclusive) using a while loop.
   Initialize an empty array "evens". Use a variable starting at 0 and
   increment by 1 in each iteration. Inside the loop, if the current number
   is even, push it into "evens". Continue until the variable exceeds 20.
*/
const evens = [];
// Write your code here:
// let num = 0;
// while (/* condition */) {
//   if (/* even check */) {
//     evens.push(/* num */);
//   }
//   num++;
// }
// console.log(evens); // Expected: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

/*
5. Advanced: Fibonacci sequence generator.
   Use a while loop to generate Fibonacci numbers until the next number
   would exceed 1000. Store all generated numbers (excluding 0) in an array
   "fibSeq". Start with first two Fibonacci numbers 1 and 1.
*/
const fibSeq = [];
// Write your code here:
// let a = 1, b = 1;
// while (/* condition */) {
//   fibSeq.push(a);
//   let next = a + b;
//   a = b;
//   b = next;
// }
// console.log(fibSeq);
// Expected: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]

/*
6. Bonus: Reverse a string using a while loop.
   Given a string "str", build a new string "reversed" by iterating
   from the end of "str" to the beginning.
*/
const str = 'JavaScript';
// Write your code here:
// let reversed = '';
// let j = str.length - 1;
// while (/* condition */) {
//   reversed += str[j];
//   j--;
// }
// console.log(reversed); // Expected: 'tpircSavaJ'




/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ NOTES/TIPS                                                                    │
 │                                                                               │
 │ • In a while loop, the condition is evaluated before each iteration.          │
 │ If it's initially false, the body never executes.                             │
 │                                                                               │
 │ • In a do...while loop, the body executes once before the condition           │
 │ is checked. If the condition is false, it stops after that one                │
 │ iteration.                                                                    │
 │                                                                               │
 │ • Be careful to modify variables used in the condition within the loop        │
 │ to avoid infinite loops.                                                      │
 │                                                                               │
 │ • Use while loops when the number of iterations isn't known up front.         │
 │ Use for loops when you know exactly how many times you want to iterate.       │
 │                                                                               │
 │ • Always initialize your loop variables (counters, indices) before            │
 │ entering the loop, and update them inside the loop body.                      │
 │                                                                               │
 │ Practice each exercise by writing code and verifying the output in            │
 │ your browser console or Node.js environment.                                  │
 └─────────────────────────────────────────────────────────────────────────────┘*/
