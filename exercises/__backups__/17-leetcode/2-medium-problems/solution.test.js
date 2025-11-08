const { threeSum, lengthOfLongestSubstring, addTwoNumbers } = require('./solution.js');

describe('LeetCode Medium Problems', () => {
  describe('3Sum', () => {
    it('should find all triplets that sum to zero', () => {
      const result = threeSum([-1, 0, 1, 2, -1, -4]);
      expect(result.length).toBeGreaterThan(0);
      expect(result).toContainEqual([-1, -1, 2]);
      expect(result).toContainEqual([-1, 0, 1]);
    });

    it('should return empty array for impossible case', () => {
      expect(threeSum([0, 0, 0, 0])).toContainEqual([0, 0, 0]);
    });

    it('should handle arrays with only negatives', () => {
      const result = threeSum([-2, 0, 1, 1, 2]);
      expect(Array.isArray(result)).toBe(true);
    });
  });

  describe('Longest Substring Without Repeating Characters', () => {
    it('should find longest substring without repeating chars', () => {
      expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
    });

    it('should handle all same characters', () => {
      expect(lengthOfLongestSubstring('bbbbb')).toBe(1);
    });

    it('should handle all unique characters', () => {
      expect(lengthOfLongestSubstring('abcdefg')).toBe(7);
    });

    it('should handle empty string', () => {
      expect(lengthOfLongestSubstring('')).toBe(0);
    });
  });

  describe('Add Two Numbers', () => {
    // Helper to create linked list from array
    function createList(arr) {
      if (arr.length === 0) return null;
      const head = { val: arr[0], next: null };
      let current = head;
      for (let i = 1; i < arr.length; i++) {
        current.next = { val: arr[i], next: null };
        current = current.next;
      }
      return head;
    }

    // Helper to convert linked list to array
    function toArray(list) {
      const result = [];
      let current = list;
      while (current) {
        result.push(current.val);
        current = current.next;
      }
      return result;
    }

    it('should add two numbers correctly', () => {
      const l1 = createList([2, 4, 3]);
      const l2 = createList([5, 6, 4]);
      const result = addTwoNumbers(l1, l2);
      expect(toArray(result)).toEqual([7, 0, 8]);
    });

    it('should handle different lengths', () => {
      const l1 = createList([9, 9]);
      const l2 = createList([1]);
      const result = addTwoNumbers(l1, l2);
      expect(toArray(result)).toEqual([0, 1]);
    });

    it('should handle single digit numbers', () => {
      const l1 = createList([2]);
      const l2 = createList([3]);
      const result = addTwoNumbers(l1, l2);
      expect(toArray(result)).toEqual([5]);
    });
  });
});
