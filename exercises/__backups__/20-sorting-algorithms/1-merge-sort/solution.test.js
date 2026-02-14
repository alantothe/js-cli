const { merge, mergeSort } = require('./solution.js');

describe('Merge Sort', () => {
  describe('merge', () => {
    it('should merge two sorted arrays', () => {
      expect(merge([1, 3, 5], [2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    });

    it('should handle empty arrays', () => {
      expect(merge([], [1, 2])).toEqual([1, 2]);
      expect(merge([1, 2], [])).toEqual([1, 2]);
    });

    it('should handle arrays of different lengths', () => {
      expect(merge([1], [2, 3, 4])).toEqual([1, 2, 3, 4]);
    });
  });

  describe('mergeSort', () => {
    it('should sort an unsorted array', () => {
      expect(mergeSort([38, 27, 43, 3, 9, 82, 10])).toEqual([3, 9, 10, 27, 38, 43, 82]);
    });

    it('should handle already sorted array', () => {
      expect(mergeSort([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
    });

    it('should handle reverse sorted array', () => {
      expect(mergeSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    });

    it('should handle array with duplicates', () => {
      expect(mergeSort([3, 1, 4, 1, 5, 9, 2, 6, 5])).toEqual([1, 1, 2, 3, 4, 5, 5, 6, 9]);
    });

    it('should handle empty array', () => {
      expect(mergeSort([])).toEqual([]);
    });

    it('should handle single element', () => {
      expect(mergeSort([1])).toEqual([1]);
    });

    it('should handle negative numbers', () => {
      expect(mergeSort([-3, 5, -1, 0, 2])).toEqual([-3, -1, 0, 2, 5]);
    });
  });
});
