const { bubbleSort } = require('./solution.js');

describe('Bubble Sort', () => {
  it('should sort unsorted array', () => {
    expect(bubbleSort([3, 1, 4, 1, 5])).toEqual([1, 1, 3, 4, 5]);
  });

  it('should handle already sorted array', () => {
    expect(bubbleSort([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
  });

  it('should handle single element', () => {
    expect(bubbleSort([5])).toEqual([5]);
  });

  it('should handle empty array', () => {
    expect(bubbleSort([])).toEqual([]);
  });
});
