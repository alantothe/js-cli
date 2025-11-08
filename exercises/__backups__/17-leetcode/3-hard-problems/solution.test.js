const { findMedianSortedArrays, wordLadder, mergeKLists } = require('./solution.js');

describe('LeetCode Hard Problems', () => {
  describe('Median of Two Sorted Arrays', () => {
    it('should find median of two sorted arrays', () => {
      expect(findMedianSortedArrays([1, 3], [2])).toBe(2.0);
    });

    it('should find median with even total length', () => {
      expect(findMedianSortedArrays([1, 2], [3, 4])).toBe(2.5);
    });

    it('should handle empty array', () => {
      expect(findMedianSortedArrays([0, 0], [])).toBe(0);
    });

    it('should handle single element arrays', () => {
      expect(findMedianSortedArrays([1], [2])).toBe(1.5);
    });
  });

  describe('Word Ladder', () => {
    it('should find shortest transformation sequence', () => {
      const wordList = ['hot', 'dot', 'dog', 'lot', 'log', 'cog'];
      expect(wordLadder('hit', 'cog', wordList)).toBe(5);
    });

    it('should return 0 if transformation is impossible', () => {
      const wordList = ['hot', 'dot', 'dog', 'lot', 'log'];
      expect(wordLadder('hit', 'cog', wordList)).toBe(0);
    });

    it('should handle one step transformation', () => {
      const wordList = ['hot'];
      expect(wordLadder('hit', 'hot', wordList)).toBe(2);
    });
  });

  describe('Merge K Sorted Lists', () => {
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

    it('should merge multiple sorted lists', () => {
      const lists = [createList([1, 4, 5]), createList([1, 3, 4]), createList([2, 6])];
      const result = mergeKLists(lists);
      expect(toArray(result)).toEqual([1, 1, 2, 3, 4, 4, 5, 6]);
    });

    it('should handle empty list array', () => {
      expect(mergeKLists([])).toBeNull();
    });

    it('should handle list with single elements', () => {
      const lists = [createList([1]), createList([2]), createList([3])];
      const result = mergeKLists(lists);
      expect(toArray(result)).toEqual([1, 2, 3]);
    });

    it('should handle single list', () => {
      const lists = [createList([1, 2, 3])];
      const result = mergeKLists(lists);
      expect(toArray(result)).toEqual([1, 2, 3]);
    });
  });
});
