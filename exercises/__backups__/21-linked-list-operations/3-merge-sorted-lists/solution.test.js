const { ListNode, fromArray, toArray, mergeTwoLists, removeNthFromEnd } = require('./solution.js');

describe('Merge & Remove Operations', () => {
  describe('mergeTwoLists', () => {
    it('should merge two sorted lists', () => {
      const l1 = fromArray([1, 2, 4]);
      const l2 = fromArray([1, 3, 4]);
      expect(toArray(mergeTwoLists(l1, l2))).toEqual([1, 1, 2, 3, 4, 4]);
    });

    it('should handle one empty list', () => {
      const l1 = fromArray([1, 2, 3]);
      expect(toArray(mergeTwoLists(l1, null))).toEqual([1, 2, 3]);
      expect(toArray(mergeTwoLists(null, l1))).toEqual([1, 2, 3]);
    });

    it('should handle both empty lists', () => {
      expect(mergeTwoLists(null, null)).toBeNull();
    });

    it('should handle lists of different lengths', () => {
      const l1 = fromArray([1]);
      const l2 = fromArray([2, 3, 4, 5]);
      expect(toArray(mergeTwoLists(l1, l2))).toEqual([1, 2, 3, 4, 5]);
    });
  });

  describe('removeNthFromEnd', () => {
    it('should remove nth node from end', () => {
      const head = fromArray([1, 2, 3, 4, 5]);
      expect(toArray(removeNthFromEnd(head, 2))).toEqual([1, 2, 3, 5]);
    });

    it('should remove head when n equals length', () => {
      const head = fromArray([1, 2, 3]);
      expect(toArray(removeNthFromEnd(head, 3))).toEqual([2, 3]);
    });

    it('should remove last node', () => {
      const head = fromArray([1, 2, 3]);
      expect(toArray(removeNthFromEnd(head, 1))).toEqual([1, 2]);
    });

    it('should handle single node', () => {
      const head = fromArray([1]);
      expect(removeNthFromEnd(head, 1)).toBeNull();
    });
  });
});
