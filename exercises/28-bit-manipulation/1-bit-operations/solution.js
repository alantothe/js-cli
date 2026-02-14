/**
 * ╔══════════════════════════════════════════╗
 * ║         Bit Manipulation                 ║
 * ╚══════════════════════════════════════════╝
 *
 * Bitwise operations for efficient problem solving.
 * Key operators: & (AND), | (OR), ^ (XOR), ~ (NOT), << (left shift), >> (right shift)
 */

// Single Number: Every element appears twice except one. Find the single one.
// XOR of a number with itself is 0, XOR with 0 is the number itself.
function singleNumber(nums) {
  // TODO: XOR all numbers together
}

// Check if a number is a power of two
function isPowerOfTwo(n) {
  // TODO: Powers of two have exactly one bit set: n & (n-1) === 0
}

// Count the number of 1 bits (Hamming weight)
function hammingWeight(n) {
  // TODO: Count set bits using n & (n-1) trick
}

// Find the number of bit positions where two numbers differ (Hamming distance)
function hammingDistance(x, y) {
  // TODO: XOR then count bits
}

// Reverse bits of a 32-bit unsigned integer
function reverseBits(n) {
  // TODO: Build result bit by bit
}

module.exports = { singleNumber, isPowerOfTwo, hammingWeight, hammingDistance, reverseBits };
