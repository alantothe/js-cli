const {
  sumNumbers,
  multiplyNumbers,
  findMax,
  countOccurrences,
  flattenArray,
} = require('./solution.js');

describe('Array Method: reduce()', () => {
  describe('Exercise 1: sumNumbers', () => {
    test('should sum all numbers in the array', () => {
      expect(sumNumbers([1, 2, 3, 4])).toBe(10);
    });

    test('should handle negative numbers', () => {
      expect(sumNumbers([-1, -2, 3, 4])).toBe(4);
    });

    test('should return 0 for empty array', () => {
      expect(sumNumbers([])).toBe(0);
    });

    test('should work with single number', () => {
      expect(sumNumbers([5])).toBe(5);
    });
  });

  describe('Exercise 2: multiplyNumbers', () => {
    test('should multiply all numbers', () => {
      expect(multiplyNumbers([2, 3, 4])).toBe(24);
    });

    test('should handle zero', () => {
      expect(multiplyNumbers([2, 0, 4])).toBe(0);
    });

    test('should return 1 for empty array', () => {
      expect(multiplyNumbers([])).toBe(1);
    });

    test('should work with single number', () => {
      expect(multiplyNumbers([5])).toBe(5);
    });
  });

  describe('Exercise 3: findMax', () => {
    test('should find maximum value', () => {
      expect(findMax([5, 2, 8, 1])).toBe(8);
    });

    test('should handle negative numbers', () => {
      expect(findMax([-5, -2, -8])).toBe(-2);
    });

    test('should work with single number', () => {
      expect(findMax([42])).toBe(42);
    });

    test('should work when all numbers are the same', () => {
      expect(findMax([5, 5, 5])).toBe(5);
    });
  });

  describe('Exercise 4: countOccurrences', () => {
    test('should count occurrences of each item', () => {
      expect(countOccurrences(['apple', 'banana', 'apple'])).toEqual({
        apple: 2,
        banana: 1,
      });
    });

    test('should work with single occurrence', () => {
      expect(countOccurrences(['apple'])).toEqual({ apple: 1 });
    });

    test('should return empty object for empty array', () => {
      expect(countOccurrences([])).toEqual({});
    });

    test('should count multiple items', () => {
      expect(countOccurrences(['a', 'b', 'a', 'c', 'b', 'a'])).toEqual({
        a: 3,
        b: 2,
        c: 1,
      });
    });
  });

  describe('Exercise 5: flattenArray', () => {
    test('should flatten array of arrays', () => {
      expect(flattenArray([[1, 2], [3, 4], [5]])).toEqual([1, 2, 3, 4, 5]);
    });

    test('should handle empty arrays inside', () => {
      expect(flattenArray([[], [1], [2, 3], []])).toEqual([1, 2, 3]);
    });

    test('should return empty array if input is empty', () => {
      expect(flattenArray([])).toEqual([]);
    });

    test('should work with strings', () => {
      expect(flattenArray([['a', 'b'], ['c']])).toEqual(['a', 'b', 'c']);
    });
  });
});
