/**
 * ╔══════════════════════════════════════════╗
 * ║     Monotonic Stack Problems             ║
 * ╚══════════════════════════════════════════╝
 *
 * A monotonic stack maintains elements in increasing or decreasing order.
 * Useful for "next greater/smaller element" problems.
 */

// Next Greater Element: For each element, find the next element that is greater
// Return -1 if no greater element exists to the right
function nextGreaterElement(nums) {
  // TODO: Use a decreasing monotonic stack
}

// Daily Temperatures: How many days until a warmer temperature?
// Return 0 if no warmer day ahead
function dailyTemperatures(temperatures) {
  // TODO: Stack stores indices, pop when current temp > stack top
}

// Valid Parentheses: Check if string of (){}[] is valid
function isValid(s) {
  // TODO: Use stack to match opening and closing brackets
}

module.exports = { nextGreaterElement, dailyTemperatures, isValid };
