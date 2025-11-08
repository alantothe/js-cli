const { nextPermutation, rotate, productExceptSelf } = require('./solution.js');

describe('LeetCode Array Problems', () => {
  describe('Next Permutation', () => {
    it('should return next permutation', () => {
      const arr = [1, 2, 3];
      nextPermutation(arr);
      expect(arr).toEqual([1, 3, 2]);
    });

    it('should wrap around to smallest for largest permutation', () => {
      const arr = [3, 2, 1];
      nextPermutation(arr);
      expect(arr).toEqual([1, 2, 3]);
    });

    it('should handle single element', () => {
      const arr = [1];
      nextPermutation(arr);
      expect(arr).toEqual([1]);
    });

    it('should work with duplicates', () => {
      const arr = [1, 1, 5];
      nextPermutation(arr);
      expect(arr).toEqual([1, 5, 1]);
    });
  });

  describe('Rotate Array', () => {
    it('should rotate array to the right by k steps', () => {
      const arr = [1, 2, 3, 4, 5];
      rotate(arr, 2);
      expect(arr).toEqual([4, 5, 1, 2, 3]);
    });

    it('should handle k greater than array length', () => {
      const arr = [1, 2, 3, 4, 5];
      rotate(arr, 7);
      expect(arr).toEqual([4, 5, 1, 2, 3]);
    });

    it('should handle k = 0', () => {
      const arr = [1, 2, 3];
      rotate(arr, 0);
      expect(arr).toEqual([1, 2, 3]);
    });

    it('should work with single element', () => {
      const arr = [1];
      rotate(arr, 5);
      expect(arr).toEqual([1]);
    });
  });

  describe('Product of Array Except Self', () => {
    it('should return product of all other elements', () => {
      expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
    });

    it('should handle array with one zero', () => {
      const result = productExceptSelf([0, 4, 9]);
      expect(result[0]).toBe(36);
      expect(result[1]).toBe(0);
      expect(result[2]).toBe(0);
    });

    it('should work with simple case', () => {
      expect(productExceptSelf([2, 3, 4, 5])).toEqual([60, 40, 30, 24]);
    });

    it('should handle two elements', () => {
      expect(productExceptSelf([1, 2])).toEqual([2, 1]);
    });
  });
});
