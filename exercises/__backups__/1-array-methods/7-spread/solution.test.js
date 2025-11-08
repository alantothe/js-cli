const {
  combineArrays,
  addToBeginning,
  addToEnd,
  combineMultiple,
  copyAndAdd,
} = require('./solution.js');

describe('Spread Operator: ...', () => {
  describe('Exercise 1: combineArrays', () => {
    test('should combine two arrays', () => {
      expect(combineArrays([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
    });

    test('should work with empty arrays', () => {
      expect(combineArrays([], [1, 2])).toEqual([1, 2]);
      expect(combineArrays([1, 2], [])).toEqual([1, 2]);
    });

    test('should work with mixed types', () => {
      expect(combineArrays([1, 'a'], [true, null])).toEqual([1, 'a', true, null]);
    });
  });

  describe('Exercise 2: addToBeginning', () => {
    test('should add element to beginning of array', () => {
      expect(addToBeginning(0, [1, 2, 3])).toEqual([0, 1, 2, 3]);
    });

    test('should work with different types', () => {
      expect(addToBeginning('first', ['a', 'b'])).toEqual(['first', 'a', 'b']);
    });

    test('should not mutate original array', () => {
      const original = [1, 2];
      const result = addToBeginning(0, original);
      expect(original).toEqual([1, 2]);
      expect(result).toEqual([0, 1, 2]);
    });
  });

  describe('Exercise 3: addToEnd', () => {
    test('should add element to end of array', () => {
      expect(addToEnd([1, 2, 3], 4)).toEqual([1, 2, 3, 4]);
    });

    test('should work with empty array', () => {
      expect(addToEnd([], 1)).toEqual([1]);
    });

    test('should not mutate original array', () => {
      const original = [1, 2];
      const result = addToEnd(original, 3);
      expect(original).toEqual([1, 2]);
      expect(result).toEqual([1, 2, 3]);
    });
  });

  describe('Exercise 4: combineMultiple', () => {
    test('should combine multiple arrays', () => {
      expect(combineMultiple([1, 2], [3, 4], [5])).toEqual([1, 2, 3, 4, 5]);
    });

    test('should work with single array', () => {
      expect(combineMultiple([1, 2, 3])).toEqual([1, 2, 3]);
    });

    test('should work with empty arrays mixed in', () => {
      expect(combineMultiple([1], [], [2], [])).toEqual([1, 2]);
    });

    test('should work with no arrays', () => {
      expect(combineMultiple()).toEqual([]);
    });
  });

  describe('Exercise 5: copyAndAdd', () => {
    test('should copy array and add elements', () => {
      expect(copyAndAdd([1, 2, 3], 4, 5)).toEqual([1, 2, 3, 4, 5]);
    });

    test('should work with single element to add', () => {
      expect(copyAndAdd([1, 2], 3)).toEqual([1, 2, 3]);
    });

    test('should work with no elements to add', () => {
      expect(copyAndAdd([1, 2, 3])).toEqual([1, 2, 3]);
    });

    test('should not mutate original array', () => {
      const original = [1, 2];
      const result = copyAndAdd(original, 3, 4);
      expect(original).toEqual([1, 2]);
      expect(result).toEqual([1, 2, 3, 4]);
    });
  });
});
