const { ListNode, fromArray, toArray, reverseList, reverseListRecursive } = require('./solution.js');

describe('Reverse a Linked List', () => {
  describe('reverseList (iterative)', () => {
    it('should reverse a linked list', () => {
      const head = fromArray([1, 2, 3, 4, 5]);
      expect(toArray(reverseList(head))).toEqual([5, 4, 3, 2, 1]);
    });

    it('should handle single node', () => {
      const head = fromArray([1]);
      expect(toArray(reverseList(head))).toEqual([1]);
    });

    it('should handle empty list', () => {
      expect(reverseList(null)).toBeNull();
    });

    it('should handle two nodes', () => {
      const head = fromArray([1, 2]);
      expect(toArray(reverseList(head))).toEqual([2, 1]);
    });
  });

  describe('reverseListRecursive', () => {
    it('should reverse a linked list recursively', () => {
      const head = fromArray([1, 2, 3, 4, 5]);
      expect(toArray(reverseListRecursive(head))).toEqual([5, 4, 3, 2, 1]);
    });

    it('should handle single node', () => {
      const head = fromArray([1]);
      expect(toArray(reverseListRecursive(head))).toEqual([1]);
    });

    it('should handle empty list', () => {
      expect(reverseListRecursive(null)).toBeNull();
    });
  });
});
