const { climbStairs, coinChange, rob, maxSubArray } = require('./solution.js');

describe('Classic Dynamic Programming', () => {
  describe('climbStairs', () => {
    it('should return 1 for 1 step', () => {
      expect(climbStairs(1)).toBe(1);
    });

    it('should return 2 for 2 steps', () => {
      expect(climbStairs(2)).toBe(2);
    });

    it('should return 3 for 3 steps', () => {
      expect(climbStairs(3)).toBe(3);
    });

    it('should return 8 for 5 steps', () => {
      expect(climbStairs(5)).toBe(8);
    });
  });

  describe('coinChange', () => {
    it('should find minimum coins', () => {
      expect(coinChange([1, 5, 10], 11)).toBe(3);
    });

    it('should return -1 when impossible', () => {
      expect(coinChange([2], 3)).toBe(-1);
    });

    it('should return 0 for amount 0', () => {
      expect(coinChange([1], 0)).toBe(0);
    });

    it('should handle single coin type', () => {
      expect(coinChange([1], 5)).toBe(5);
    });

    it('should find optimal solution', () => {
      expect(coinChange([1, 3, 4], 6)).toBe(2);
    });
  });

  describe('rob', () => {
    it('should find max non-adjacent sum', () => {
      expect(rob([2, 7, 9, 3, 1])).toBe(12);
    });

    it('should handle two houses', () => {
      expect(rob([1, 2])).toBe(2);
    });

    it('should handle single house', () => {
      expect(rob([5])).toBe(5);
    });

    it('should handle empty array', () => {
      expect(rob([])).toBe(0);
    });

    it('should handle adjacent equal values', () => {
      expect(rob([2, 1, 1, 2])).toBe(4);
    });
  });

  describe('maxSubArray', () => {
    it('should find max subarray sum', () => {
      expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
    });

    it('should handle all negative numbers', () => {
      expect(maxSubArray([-1, -2, -3])).toBe(-1);
    });

    it('should handle single element', () => {
      expect(maxSubArray([5])).toBe(5);
    });

    it('should handle all positive numbers', () => {
      expect(maxSubArray([1, 2, 3])).toBe(6);
    });
  });
});
