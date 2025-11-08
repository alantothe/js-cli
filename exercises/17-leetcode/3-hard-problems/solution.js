/**
 * LeetCode Hard Problems
 */

/**
 * Problem: Median of Two Sorted Arrays
 * Find the median of two sorted arrays
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function findMedianSortedArrays(nums1, nums2) {
  // TODO: Implement median of two sorted arrays
  // Hint: Use binary search for optimal solution
}

/**
 * Problem: Word Ladder
 * Find shortest transformation sequence from beginWord to endWord
 *
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
function wordLadder(beginWord, endWord, wordList) {
  // TODO: Implement word ladder solution
  // Hint: Use BFS to find shortest path
}

/**
 * Problem: Merge K Sorted Lists
 * Merge k sorted linked lists into one sorted list
 * Linked list format: { val: number, next: ListNode | null }
 *
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
function mergeKLists(lists) {
  // TODO: Implement merge k sorted lists
  // Hint: Use min heap or priority queue
}

module.exports = { findMedianSortedArrays, wordLadder, mergeKLists };
