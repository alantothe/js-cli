/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ FOR LOOP EXERCISES                                                            │
 │                                                                               │
 │ The for loop is one of the most common ways to iterate in JavaScript.         │
 │ It consists of three parts: initialization, condition, and increment.         │
 │                                                                               │
 │ Syntax: for (initialization; condition; increment) { ... }                    │
 └─────────────────────────────────────────────────────────────────────────────┘*/




/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ EXERCISE 1                                                                    │
 │ PRINT NUMBERS FROM 1 TO 5                                                     │
 └─────────────────────────────────────────────────────────────────────────────┘*/

console.log("\nExercise 1:");

for (let i = 1; i <= 5; i++) {
  console.log(i);
}




/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ EXERCISE 2                                                                    │
 │ PRINT EVEN NUMBERS FROM 0 TO 10                                               │
 └─────────────────────────────────────────────────────────────────────────────┘*/

console.log("\nExercise 2:");

// TODO: Write a for loop to print even numbers from 0 to 10




/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ EXERCISE 3                                                                    │
 │ CALCULATE THE SUM OF NUMBERS FROM 1 TO 10                                     │
 └─────────────────────────────────────────────────────────────────────────────┘*/

console.log("\nExercise 3:");

// TODO: Calculate the sum of numbers from 1 to 10




/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ EXERCISE 4                                                                    │
 │ PRINT THE MULTIPLICATION TABLE OF 5 (UP TO 10)                                │
 └─────────────────────────────────────────────────────────────────────────────┘*/

console.log("\nExercise 4:");

// TODO: Print multiplication table of 5 (5 x 1 through 5 x 10)




/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ EXERCISE 5                                                                    │
 │ REVERSE A STRING USING A FOR LOOP                                             │
 └─────────────────────────────────────────────────────────────────────────────┘*/

console.log("\nExercise 5:");

// TODO: Reverse the string "Hello, World!" using a for loop




/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ EXERCISE 6                                                                    │
 │ FIND THE FACTORIAL OF A NUMBER (e.g., 5! = 5 * 4 * 3 * 2 * 1)                 │
 └─────────────────────────────────────────────────────────────────────────────┘*/

console.log("\nExercise 6:");

// TODO: Calculate factorial of 5




/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ TEST CASES                                                                    │
 └─────────────────────────────────────────────────────────────────────────────┘*/

console.log("\n--- Test Cases ---");

// test case for exercise 1
console.log("Test case 1:");
let output1 = "";
for (let i = 1; i <= 5; i++) {
  output1 += i + " ";
}
console.log(output1.trim() === "1 2 3 4 5" ? "Passed" : "Failed");

// test case for exercise 2
console.log("\nTest case 2:");
// Now we only pass if `output2` exists and exactly equals "0 2 4 6 8 10"
if (typeof output2 !== "undefined" && output2.trim() === "0 2 4 6 8 10") {
  console.log("Passed");
} else {
  console.log("Failed");
}

// test case for exercise 3
console.log("\nTest case 3:");
let expectedSum = 55;
if (typeof sum !== "undefined" && sum === expectedSum) {
  console.log("Passed");
} else {
  console.log("Failed");
}

// test case for exercise 4
console.log("\nTest case 4:");
let output4 = "";
for (let i = 1; i <= 10; i++) {
  output4 += 5 * i + " ";
}
console.log(
  output4.trim() === "5 10 15 20 25 30 35 40 45 50" ? "Passed" : "Failed"
);

// test case for exercise 5
console.log("\nTest case 5:");
if (typeof reversedStr !== "undefined" && reversedStr === "!dlroW ,olleH") {
  console.log("Passed");
} else {
  console.log("Failed");
}

// test case for exercise 6
console.log("\nTest case 6:");
if (typeof factorial !== "undefined" && factorial === 120) {
  console.log("Passed");
} else {
  console.log("Failed");
}
