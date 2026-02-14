const { insertionSort } = require('./solution.js');

describe('Insertion Sort', () => {
  it('should sort an unsorted array', () => {
    const arr = [12, 11, 13, 5, 6];
    insertionSort(arr);
    expect(arr).toEqual([5, 6, 11, 12, 13]);
  });

  it('should handle already sorted array', () => {
    const arr = [1, 2, 3, 4, 5];
    insertionSort(arr);
    expect(arr).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle reverse sorted array', () => {
    const arr = [5, 4, 3, 2, 1];
    insertionSort(arr);
    expect(arr).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle array with duplicates', () => {
    const arr = [3, 1, 4, 1, 5];
    insertionSort(arr);
    expect(arr).toEqual([1, 1, 3, 4, 5]);
  });

  it('should handle empty array', () => {
    const arr = [];
    insertionSort(arr);
    expect(arr).toEqual([]);
  });

  it('should handle single element', () => {
    const arr = [1];
    insertionSort(arr);
    expect(arr).toEqual([1]);
  });

  it('should handle negative numbers', () => {
    const arr = [-3, 5, -1, 0, 2];
    insertionSort(arr);
    expect(arr).toEqual([-3, -1, 0, 2, 5]);
  });
});
