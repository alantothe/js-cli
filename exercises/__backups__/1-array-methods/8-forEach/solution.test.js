const {
  logEachElement,
  sumWithLogging,
  buildString,
  updateObject,
  createIndexMap,
} = require('./solution.js');

describe('Array Method: forEach()', () => {
  describe('Exercise 1: logEachElement', () => {
    test('should call forEach on array', () => {
      const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
      logEachElement([1, 2, 3]);
      expect(consoleSpy).toHaveBeenCalledTimes(3);
      expect(consoleSpy).toHaveBeenCalledWith(1);
      expect(consoleSpy).toHaveBeenCalledWith(2);
      expect(consoleSpy).toHaveBeenCalledWith(3);
      consoleSpy.mockRestore();
    });

    test('should return undefined', () => {
      expect(logEachElement([])).toBeUndefined();
    });
  });

  describe('Exercise 2: sumWithLogging', () => {
    test('should sum numbers and return total', () => {
      const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
      const result = sumWithLogging([1, 2, 3]);
      expect(result).toBe(6);
      expect(consoleSpy).toHaveBeenCalledTimes(3);
      consoleSpy.mockRestore();
    });

    test('should work with empty array', () => {
      const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
      expect(sumWithLogging([])).toBe(0);
      expect(consoleSpy).not.toHaveBeenCalled();
      consoleSpy.mockRestore();
    });

    test('should work with negative numbers', () => {
      const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
      const result = sumWithLogging([1, -2, 3]);
      expect(result).toBe(2);
      consoleSpy.mockRestore();
    });
  });

  describe('Exercise 3: buildString', () => {
    test('should concatenate words with spaces', () => {
      expect(buildString(['Hello', 'World'])).toBe('Hello World');
    });

    test('should work with single word', () => {
      expect(buildString(['Hello'])).toBe('Hello');
    });

    test('should work with empty array', () => {
      expect(buildString([])).toBe('');
    });

    test('should work with multiple words', () => {
      expect(buildString(['The', 'quick', 'brown', 'fox'])).toBe(
        'The quick brown fox'
      );
    });
  });

  describe('Exercise 4: updateObject', () => {
    test('should update object with changes', () => {
      const obj = { name: 'John' };
      const changes = [
        ['name', 'Jane'],
        ['age', 30],
      ];
      const result = updateObject(obj, changes);
      expect(result).toEqual({ name: 'Jane', age: 30 });
    });

    test('should work with empty changes array', () => {
      const obj = { a: 1 };
      const result = updateObject(obj, []);
      expect(result).toEqual({ a: 1 });
    });

    test('should modify original object', () => {
      const obj = { x: 1 };
      const changes = [['x', 2]];
      updateObject(obj, changes);
      expect(obj).toEqual({ x: 2 });
    });

    test('should add new properties', () => {
      const obj = {};
      const changes = [
        ['a', 1],
        ['b', 2],
      ];
      updateObject(obj, changes);
      expect(obj).toEqual({ a: 1, b: 2 });
    });
  });

  describe('Exercise 5: createIndexMap', () => {
    test('should create map of values to indices', () => {
      expect(createIndexMap(['a', 'b', 'c'])).toEqual({ a: 0, b: 1, c: 2 });
    });

    test('should work with numbers', () => {
      expect(createIndexMap([10, 20, 30])).toEqual({ '10': 0, '20': 1, '30': 2 });
    });

    test('should work with empty array', () => {
      expect(createIndexMap([])).toEqual({});
    });

    test('should overwrite duplicate values with last index', () => {
      expect(createIndexMap(['a', 'b', 'a'])).toEqual({ a: 2, b: 1 });
    });
  });
});
