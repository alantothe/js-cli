const { binarySearch } = require('./solution.js');

describe('Binary Search', () => {
  const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15];

  it('should find element in middle', () => {
    expect(binarySearch(sortedArray, 7)).toBe(3);
  });

  it('should find element at start', () => {
    expect(binarySearch(sortedArray, 1)).toBe(0);
  });

  it('should find element at end', () => {
    expect(binarySearch(sortedArray, 15)).toBe(7);
  });

  it('should return -1 if element not found', () => {
    expect(binarySearch(sortedArray, 6)).toBe(-1);
  });
});
