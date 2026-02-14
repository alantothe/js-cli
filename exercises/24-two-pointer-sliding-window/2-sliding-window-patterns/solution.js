/**
 * ╔══════════════════════════════════════════╗
 * ║    Sliding Window Pattern Problems       ║
 * ╚══════════════════════════════════════════╝
 *
 * Variable-size and fixed-size sliding window problems.
 */

// Longest Substring Without Repeating Characters
function lengthOfLongestSubstring(s) {
  // TODO: Expand window right, shrink from left when duplicate found
}

// Minimum Size Subarray Sum: shortest subarray with sum >= target
function minSubArrayLen(target, nums) {
  // TODO: Variable-size window, shrink when sum >= target
}

// Find All Anagrams: return start indices of anagrams of p in s
function findAnagrams(s, p) {
  // TODO: Fixed-size window with frequency counting
}

module.exports = { lengthOfLongestSubstring, minSubArrayLen, findAnagrams };
