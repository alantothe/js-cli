const { removeDuplicates, moveZeroes } = require('./solution.js');

describe('LeetCode Easy Problems', () => {
  describe('removeDuplicates', () => {
    it('should remove duplicates and return count', () => {
      const arr = [1, 1, 2];
      const count = removeDuplicates(arr);
      expect(count).toBe(2);
      expect(arr.slice(0, count)).toEqual([1, 2]);
    });

    it('should handle array with all unique elements', () => {
      const arr = [0, 1, 2, 3, 4];
      const count = removeDuplicates(arr);
      expect(count).toBe(5);
    });

    it('should handle array with all duplicates', () => {
      const arr = [1, 1, 1, 1];
      const count = removeDuplicates(arr);
      expect(count).toBe(1);
      expect(arr[0]).toBe(1);
    });
  });

  describe('moveZeroes', () => {
    it('should move all zeroes to end', () => {
      const arr = [0, 1, 0, 3, 12];
      moveZeroes(arr);
      expect(arr).toEqual([1, 3, 12, 0, 0]);
    });

    it('should handle array with no zeroes', () => {
      const arr = [1, 2, 3];
      moveZeroes(arr);
      expect(arr).toEqual([1, 2, 3]);
    });

    it('should handle array with all zeroes', () => {
      const arr = [0, 0, 0];
      moveZeroes(arr);
      expect(arr).toEqual([0, 0, 0]);
    });
  });
});
