const {
  filterEvenNumbers,
  filterByPrice,
  filterNonEmpty,
  filterAdults,
  filterByLength,
} = require('./solution.js');

describe('Array Method: filter()', () => {
  describe('Exercise 1: filterEvenNumbers', () => {
    test('should filter even numbers from array', () => {
      expect(filterEvenNumbers([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
    });

    test('should return empty array if no even numbers', () => {
      expect(filterEvenNumbers([1, 3, 5])).toEqual([]);
    });

    test('should work with negative numbers', () => {
      expect(filterEvenNumbers([-2, -1, 0, 1, 2])).toEqual([-2, 0, 2]);
    });

    test('should work with empty array', () => {
      expect(filterEvenNumbers([])).toEqual([]);
    });
  });

  describe('Exercise 2: filterByPrice', () => {
    test('should filter products by max price', () => {
      const products = [
        { name: 'Item1', price: 50 },
        { name: 'Item2', price: 150 },
        { name: 'Item3', price: 75 },
      ];
      expect(filterByPrice(products, 100)).toEqual([
        { name: 'Item1', price: 50 },
        { name: 'Item3', price: 75 },
      ]);
    });

    test('should return empty array if no products under price', () => {
      const products = [
        { name: 'Item1', price: 200 },
        { name: 'Item2', price: 300 },
      ];
      expect(filterByPrice(products, 100)).toEqual([]);
    });

    test('should work with empty array', () => {
      expect(filterByPrice([], 100)).toEqual([]);
    });
  });

  describe('Exercise 3: filterNonEmpty', () => {
    test('should filter out empty strings', () => {
      expect(filterNonEmpty(['hello', '', 'world', ''])).toEqual(['hello', 'world']);
    });

    test('should work when all strings are non-empty', () => {
      expect(filterNonEmpty(['a', 'b', 'c'])).toEqual(['a', 'b', 'c']);
    });

    test('should return empty array if all are empty', () => {
      expect(filterNonEmpty(['', '', ''])).toEqual([]);
    });

    test('should work with empty array', () => {
      expect(filterNonEmpty([])).toEqual([]);
    });
  });

  describe('Exercise 4: filterAdults', () => {
    test('should filter users who are adults (age >= 18)', () => {
      const users = [
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 17 },
        { name: 'Carol', age: 30 },
      ];
      expect(filterAdults(users)).toEqual([
        { name: 'Alice', age: 25 },
        { name: 'Carol', age: 30 },
      ]);
    });

    test('should include users exactly 18 years old', () => {
      const users = [{ name: 'David', age: 18 }];
      expect(filterAdults(users)).toEqual([{ name: 'David', age: 18 }]);
    });

    test('should work with empty array', () => {
      expect(filterAdults([])).toEqual([]);
    });
  });

  describe('Exercise 5: filterByLength', () => {
    test('should filter strings by minimum length', () => {
      expect(filterByLength(['hi', 'hello', 'hey', 'javascript'], 3)).toEqual([
        'hello',
        'javascript',
      ]);
    });

    test('should include strings exactly at minLength', () => {
      expect(filterByLength(['hi', 'hey', 'hello'], 3)).toEqual(['hey', 'hello']);
    });

    test('should return empty array if no strings meet length', () => {
      expect(filterByLength(['a', 'bb'], 5)).toEqual([]);
    });

    test('should work with empty array', () => {
      expect(filterByLength([], 3)).toEqual([]);
    });
  });
});
