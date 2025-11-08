const {
  removeElements,
  insertElements,
  replaceElements,
  removeAt,
  clearAndReset,
} = require('./solution.js');

describe('Array Method: splice()', () => {
  describe('Exercise 1: removeElements', () => {
    test('should remove elements from array', () => {
      const array = [1, 2, 3, 4, 5];
      const removed = removeElements(array, 1, 2);
      expect(removed).toEqual([2, 3]);
      expect(array).toEqual([1, 4, 5]);
    });

    test('should remove from start', () => {
      const array = [1, 2, 3];
      const removed = removeElements(array, 0, 2);
      expect(removed).toEqual([1, 2]);
      expect(array).toEqual([3]);
    });

    test('should return empty if count is 0', () => {
      const array = [1, 2, 3];
      const removed = removeElements(array, 1, 0);
      expect(removed).toEqual([]);
      expect(array).toEqual([1, 2, 3]);
    });
  });

  describe('Exercise 2: insertElements', () => {
    test('should insert elements at index', () => {
      const array = [1, 2, 5];
      const removed = insertElements(array, 2, 3, 4);
      expect(removed).toEqual([]);
      expect(array).toEqual([1, 2, 3, 4, 5]);
    });

    test('should insert at beginning', () => {
      const array = [2, 3];
      const removed = insertElements(array, 0, 1);
      expect(removed).toEqual([]);
      expect(array).toEqual([1, 2, 3]);
    });

    test('should insert at end', () => {
      const array = [1, 2];
      const removed = insertElements(array, 2, 3, 4);
      expect(removed).toEqual([]);
      expect(array).toEqual([1, 2, 3, 4]);
    });
  });

  describe('Exercise 3: replaceElements', () => {
    test('should replace elements', () => {
      const array = [1, 2, 3, 4];
      const removed = replaceElements(array, 1, 2, 'a', 'b');
      expect(removed).toEqual([2, 3]);
      expect(array).toEqual([1, 'a', 'b', 4]);
    });

    test('should replace single element', () => {
      const array = [1, 2, 3];
      const removed = replaceElements(array, 1, 1, 'x');
      expect(removed).toEqual([2]);
      expect(array).toEqual([1, 'x', 3]);
    });

    test('should handle replacing with multiple items', () => {
      const array = [1, 2, 3];
      const removed = replaceElements(array, 1, 1, 'a', 'b', 'c');
      expect(removed).toEqual([2]);
      expect(array).toEqual([1, 'a', 'b', 'c', 3]);
    });
  });

  describe('Exercise 4: removeAt', () => {
    test('should remove element at index', () => {
      const array = [1, 2, 3, 4];
      const removed = removeAt(array, 1);
      expect(removed).toBe(2);
      expect(array).toEqual([1, 3, 4]);
    });

    test('should remove from beginning', () => {
      const array = ['a', 'b', 'c'];
      const removed = removeAt(array, 0);
      expect(removed).toBe('a');
      expect(array).toEqual(['b', 'c']);
    });

    test('should remove from end', () => {
      const array = [1, 2, 3];
      const removed = removeAt(array, 2);
      expect(removed).toBe(3);
      expect(array).toEqual([1, 2]);
    });
  });

  describe('Exercise 5: clearAndReset', () => {
    test('should clear array and insert new items', () => {
      const array = [1, 2, 3];
      const removed = clearAndReset(array, 'a', 'b');
      expect(removed).toEqual([1, 2, 3]);
      expect(array).toEqual(['a', 'b']);
    });

    test('should work with empty array', () => {
      const array = [];
      const removed = clearAndReset(array, 1, 2, 3);
      expect(removed).toEqual([]);
      expect(array).toEqual([1, 2, 3]);
    });

    test('should work with single item', () => {
      const array = [1, 2];
      const removed = clearAndReset(array, 'only');
      expect(removed).toEqual([1, 2]);
      expect(array).toEqual(['only']);
    });
  });
});
