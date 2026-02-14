const { isPalindrome, maxArea, threeSum, removeDuplicates } = require('./solution.js');

describe('Two Pointer Pattern Problems', () => {
  describe('isPalindrome', () => {
    it('should return true for palindrome with spaces and punctuation', () => {
      expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
    });

    it('should return false for non-palindrome', () => {
      expect(isPalindrome('race a car')).toBe(false);
    });

    it('should return true for empty string', () => {
      expect(isPalindrome('')).toBe(true);
    });

    it('should return true for single character', () => {
      expect(isPalindrome('a')).toBe(true);
    });
  });

  describe('maxArea', () => {
    it('should find maximum water container', () => {
      expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
    });

    it('should handle two elements', () => {
      expect(maxArea([1, 1])).toBe(1);
    });

    it('should handle equal heights', () => {
      expect(maxArea([4, 4, 4, 4])).toBe(12);
    });
  });

  describe('threeSum', () => {
    it('should find all triplets summing to zero', () => {
      const result = threeSum([-1, 0, 1, 2, -1, -4]);
      expect(result).toEqual(expect.arrayContaining([[-1, -1, 2], [-1, 0, 1]]));
      expect(result).toHaveLength(2);
    });

    it('should return empty for no solution', () => {
      expect(threeSum([0, 1, 1])).toEqual([]);
    });

    it('should handle all zeros', () => {
      expect(threeSum([0, 0, 0])).toEqual([[0, 0, 0]]);
    });
  });

  describe('removeDuplicates', () => {
    it('should remove duplicates and return new length', () => {
      const nums = [1, 1, 2];
      const len = removeDuplicates(nums);
      expect(len).toBe(2);
      expect(nums.slice(0, len)).toEqual([1, 2]);
    });

    it('should handle longer array', () => {
      const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
      const len = removeDuplicates(nums);
      expect(len).toBe(5);
      expect(nums.slice(0, len)).toEqual([0, 1, 2, 3, 4]);
    });

    it('should handle no duplicates', () => {
      const nums = [1, 2, 3];
      expect(removeDuplicates(nums)).toBe(3);
    });

    it('should handle single element', () => {
      const nums = [1];
      expect(removeDuplicates(nums)).toBe(1);
    });
  });
});
