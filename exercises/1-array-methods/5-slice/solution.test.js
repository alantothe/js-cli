const {
  getSlice,
  getLastN,
  getFirstN,
  copyArray,
  getMiddleN,
} = require('./solution.js');

describe('Array Method: slice()', () => {
  describe('Exercise 1: getSlice', () => {
    test('should slice array from start to end', () => {
      expect(getSlice([1, 2, 3, 4, 5], 1, 4)).toEqual([2, 3, 4]);
    });

    test('should work with 0 as start', () => {
      expect(getSlice([1, 2, 3], 0, 2)).toEqual([1, 2]);
    });

    test('should return empty array if start equals end', () => {
      expect(getSlice([1, 2, 3], 2, 2)).toEqual([]);
    });
  });

  describe('Exercise 2: getLastN', () => {
    test('should return last N elements', () => {
      expect(getLastN([1, 2, 3, 4, 5], 2)).toEqual([4, 5]);
    });

    test('should work with count equal to array length', () => {
      expect(getLastN([1, 2, 3], 3)).toEqual([1, 2, 3]);
    });

    test('should return empty array for count 0', () => {
      expect(getLastN([1, 2, 3], 0)).toEqual([]);
    });
  });

  describe('Exercise 3: getFirstN', () => {
    test('should return first N elements', () => {
      expect(getFirstN([1, 2, 3, 4, 5], 3)).toEqual([1, 2, 3]);
    });

    test('should work with count of 1', () => {
      expect(getFirstN([1, 2, 3], 1)).toEqual([1]);
    });

    test('should return empty array for count 0', () => {
      expect(getFirstN([1, 2, 3], 0)).toEqual([]);
    });
  });

  describe('Exercise 4: copyArray', () => {
    test('should create a copy of array', () => {
      const original = [1, 2, 3];
      const copy = copyArray(original);
      expect(copy).toEqual(original);
      expect(copy).not.toBe(original);
    });

    test('should copy empty array', () => {
      const original = [];
      const copy = copyArray(original);
      expect(copy).toEqual([]);
      expect(copy).not.toBe(original);
    });

    test('copy should not affect original', () => {
      const original = [1, 2, 3];
      const copy = copyArray(original);
      copy[0] = 999;
      expect(original[0]).toBe(1);
    });
  });

  describe('Exercise 5: getMiddleN', () => {
    test('should return middle N elements', () => {
      expect(getMiddleN([1, 2, 3, 4, 5, 6, 7], 3)).toEqual([3, 4, 5]);
    });

    test('should work with even-length array', () => {
      expect(getMiddleN([1, 2, 3, 4], 2)).toEqual([2, 3]);
    });

    test('should work with single element', () => {
      expect(getMiddleN([1, 2, 3, 4, 5], 1)).toEqual([3]);
    });
  });
});
