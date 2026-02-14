const { findKthLargest, topKFrequent, kClosestPoints } = require('./solution.js');

describe('Top K Problems', () => {
  describe('findKthLargest', () => {
    it('should find kth largest element', () => {
      expect(findKthLargest([3, 2, 1, 5, 6, 4], 2)).toBe(5);
    });

    it('should handle k=1 (maximum)', () => {
      expect(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 1)).toBe(6);
    });

    it('should handle array with duplicates', () => {
      expect(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)).toBe(4);
    });

    it('should handle single element', () => {
      expect(findKthLargest([1], 1)).toBe(1);
    });
  });

  describe('topKFrequent', () => {
    it('should find k most frequent elements', () => {
      const result = topKFrequent([1, 1, 1, 2, 2, 3], 2);
      expect(result.sort()).toEqual([1, 2]);
    });

    it('should handle k=1', () => {
      expect(topKFrequent([1], 1)).toEqual([1]);
    });

    it('should handle all same frequency', () => {
      const result = topKFrequent([1, 2, 3], 2);
      expect(result).toHaveLength(2);
    });
  });

  describe('kClosestPoints', () => {
    it('should find k closest points to origin', () => {
      const result = kClosestPoints([[1, 3], [-2, 2]], 1);
      expect(result).toEqual([[-2, 2]]);
    });

    it('should find multiple closest points', () => {
      const result = kClosestPoints([[3, 3], [5, -1], [-2, 4]], 2);
      expect(result).toHaveLength(2);
      // [3,3] distance=sqrt(18), [5,-1] distance=sqrt(26), [-2,4] distance=sqrt(20)
      expect(result).toEqual(expect.arrayContaining([[3, 3], [-2, 4]]));
    });
  });
});
