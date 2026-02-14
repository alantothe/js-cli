const { partition, quickSort } = require('./solution.js');

describe('Quick Sort', () => {
  describe('partition', () => {
    it('should partition array around pivot', () => {
      const arr = [3, 6, 8, 10, 1, 2, 1];
      const pivotIdx = partition(arr, 0, arr.length - 1);
      for (let i = 0; i < pivotIdx; i++) {
        expect(arr[i]).toBeLessThanOrEqual(arr[pivotIdx]);
      }
      for (let i = pivotIdx + 1; i < arr.length; i++) {
        expect(arr[i]).toBeGreaterThanOrEqual(arr[pivotIdx]);
      }
    });
  });

  describe('quickSort', () => {
    it('should sort an unsorted array', () => {
      const arr = [10, 7, 8, 9, 1, 5];
      quickSort(arr);
      expect(arr).toEqual([1, 5, 7, 8, 9, 10]);
    });

    it('should handle already sorted array', () => {
      const arr = [1, 2, 3, 4, 5];
      quickSort(arr);
      expect(arr).toEqual([1, 2, 3, 4, 5]);
    });

    it('should handle reverse sorted array', () => {
      const arr = [5, 4, 3, 2, 1];
      quickSort(arr);
      expect(arr).toEqual([1, 2, 3, 4, 5]);
    });

    it('should handle array with duplicates', () => {
      const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5];
      quickSort(arr);
      expect(arr).toEqual([1, 1, 2, 3, 4, 5, 5, 6, 9]);
    });

    it('should handle empty array', () => {
      const arr = [];
      quickSort(arr);
      expect(arr).toEqual([]);
    });

    it('should handle single element', () => {
      const arr = [1];
      quickSort(arr);
      expect(arr).toEqual([1]);
    });
  });
});
