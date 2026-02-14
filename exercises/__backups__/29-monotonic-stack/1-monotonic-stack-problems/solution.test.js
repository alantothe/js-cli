const { nextGreaterElement, dailyTemperatures, isValid } = require('./solution.js');

describe('Monotonic Stack Problems', () => {
  describe('nextGreaterElement', () => {
    it('should find next greater elements', () => {
      expect(nextGreaterElement([4, 5, 2, 25])).toEqual([5, 25, 25, -1]);
    });

    it('should handle descending array', () => {
      expect(nextGreaterElement([5, 4, 3, 2, 1])).toEqual([-1, -1, -1, -1, -1]);
    });

    it('should handle ascending array', () => {
      expect(nextGreaterElement([1, 2, 3, 4])).toEqual([2, 3, 4, -1]);
    });

    it('should handle single element', () => {
      expect(nextGreaterElement([1])).toEqual([-1]);
    });
  });

  describe('dailyTemperatures', () => {
    it('should find days until warmer', () => {
      expect(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))
        .toEqual([1, 1, 4, 2, 1, 1, 0, 0]);
    });

    it('should handle all same temperatures', () => {
      expect(dailyTemperatures([70, 70, 70])).toEqual([0, 0, 0]);
    });

    it('should handle decreasing temperatures', () => {
      expect(dailyTemperatures([80, 70, 60])).toEqual([0, 0, 0]);
    });
  });

  describe('isValid', () => {
    it('should validate simple parentheses', () => {
      expect(isValid('()')).toBe(true);
      expect(isValid('()[]{}')).toBe(true);
      expect(isValid('{[]}')).toBe(true);
    });

    it('should reject invalid parentheses', () => {
      expect(isValid('(]')).toBe(false);
      expect(isValid('([)]')).toBe(false);
      expect(isValid('(')).toBe(false);
    });

    it('should handle empty string', () => {
      expect(isValid('')).toBe(true);
    });

    it('should reject single closing bracket', () => {
      expect(isValid(')')).toBe(false);
    });
  });
});
