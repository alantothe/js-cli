/**
 * ╔══════════════════════════════════════════╗
 * ║    Hash Map Interview Patterns           ║
 * ╚══════════════════════════════════════════╝
 *
 * Hash maps enable O(1) lookup and are key to optimizing many interview problems.
 */

// Two Sum: Return indices of two numbers that add up to target
function twoSum(nums, target) {
  // TODO: Use a hash map to store complements
}

// First Non-Repeating Character: Return index of first unique character, or -1
function firstUniqChar(s) {
  // TODO: Count frequencies, then find first with count 1
}

// Valid Anagram: Check if two strings are anagrams
function isAnagram(s, t) {
  // TODO: Compare character frequency maps
}

// Group Anagrams: Group strings that are anagrams of each other
function groupAnagrams(strs) {
  // TODO: Sort each string as key, group by key
}

// Subarray Sum Equals K: Count subarrays that sum to k
function subarraySum(nums, k) {
  // TODO: Use prefix sum + hash map
}

module.exports = { twoSum, firstUniqChar, isAnagram, groupAnagrams, subarraySum };
