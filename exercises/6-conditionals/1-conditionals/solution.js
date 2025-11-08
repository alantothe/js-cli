/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ JAVASCRIPT CONDITIONAL STATEMENTS                                             │
 │                                                                               │
 │ Covers:                                                                       │
 │ 1. if / else if / else                                                        │
 │ 2. Ternary operator                                                           │
 └─────────────────────────────────────────────────────────────────────────────┘*/




/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ 1. IF / ELSE IF / ELSE                                                        │
 └─────────────────────────────────────────────────────────────────────────────┘*/

// Example: Determine letter grade from numeric score
const score = 73;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else if (score >= 60) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}
// Output for score = 73: "Grade: C"

// Example: Check if a number is positive, negative, or zero
const num = -5;

if (num > 0) {
  console.log("Positive");
} else if (num < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}
// Output for num = -5: "Negative"




/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ 2. TERNARY OPERATOR                                                           │
 └─────────────────────────────────────────────────────────────────────────────┘*/

// Example: Even or odd
const value = 8;
const result = (value % 2 === 0) ? "even" : "odd";
console.log(`${value} is ${result}`);
// Output: "8 is even"

// Example: Assign a default name if none provided
let name = "";
const displayName = name ? name : "Guest";
console.log(displayName);
// Output: "Guest" (because name is an empty string)

// Chained ternary (use sparingly)
const age = 16;
const category = (age < 13) ? "Child"
               : (age <= 17) ? "Teen"
               : "Adult";
console.log(category);
// Output for age = 16: "Teen"
