const { canJump, mergeIntervals, maxProfit, maxActivities } = require('./solution.js');

describe('Greedy Algorithm Problems', () => {
  describe('canJump', () => {
    it('should return true when last index is reachable', () => {
      expect(canJump([2, 3, 1, 1, 4])).toBe(true);
    });

    it('should return false when last index is not reachable', () => {
      expect(canJump([3, 2, 1, 0, 4])).toBe(false);
    });

    it('should handle single element', () => {
      expect(canJump([0])).toBe(true);
    });

    it('should handle all zeros except first', () => {
      expect(canJump([5, 0, 0, 0, 0, 0])).toBe(true);
    });
  });

  describe('mergeIntervals', () => {
    it('should merge overlapping intervals', () => {
      expect(mergeIntervals([[1, 3], [2, 6], [8, 10], [15, 18]]))
        .toEqual([[1, 6], [8, 10], [15, 18]]);
    });

    it('should merge touching intervals', () => {
      expect(mergeIntervals([[1, 4], [4, 5]])).toEqual([[1, 5]]);
    });

    it('should handle non-overlapping intervals', () => {
      expect(mergeIntervals([[1, 2], [3, 4]])).toEqual([[1, 2], [3, 4]]);
    });

    it('should handle single interval', () => {
      expect(mergeIntervals([[1, 2]])).toEqual([[1, 2]]);
    });

    it('should handle unsorted intervals', () => {
      expect(mergeIntervals([[3, 4], [1, 2], [2, 3]]))
        .toEqual([[1, 4]]);
    });
  });

  describe('maxProfit', () => {
    it('should find maximum profit', () => {
      expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
    });

    it('should return 0 when no profit possible', () => {
      expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
    });

    it('should handle two prices', () => {
      expect(maxProfit([1, 2])).toBe(1);
    });

    it('should handle single price', () => {
      expect(maxProfit([5])).toBe(0);
    });
  });

  describe('maxActivities', () => {
    it('should select maximum non-overlapping activities', () => {
      expect(maxActivities(
        [1, 3, 0, 5, 8, 5],
        [2, 4, 6, 7, 9, 9]
      )).toBe(4);
    });

    it('should handle all overlapping', () => {
      expect(maxActivities([1, 1, 1], [10, 10, 10])).toBe(1);
    });

    it('should handle no overlapping', () => {
      expect(maxActivities([1, 3, 5], [2, 4, 6])).toBe(3);
    });
  });
});
