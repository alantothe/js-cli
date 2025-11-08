const {
  doubleNumbers,
  extractNames,
  toUpperCase,
  generateListItems,
  addTaxToProducts,
} = require('./solution.js');

describe('Array Method: map()', () => {
  describe('Exercise 1: doubleNumbers', () => {
    test('should double each number in the array', () => {
      expect(doubleNumbers([1, 2, 3, 4, 5])).toEqual([2, 4, 6, 8, 10]);
    });

    test('should work with empty array', () => {
      expect(doubleNumbers([])).toEqual([]);
    });

    test('should work with negative numbers', () => {
      expect(doubleNumbers([-1, -2, 0, 2, 1])).toEqual([-2, -4, 0, 4, 2]);
    });
  });

  describe('Exercise 2: extractNames', () => {
    test('should extract names from user objects', () => {
      const users = [
        { name: 'Alice', age: 28 },
        { name: 'Bob', age: 34 },
        { name: 'Carol', age: 23 },
      ];
      expect(extractNames(users)).toEqual(['Alice', 'Bob', 'Carol']);
    });

    test('should work with empty array', () => {
      expect(extractNames([])).toEqual([]);
    });

    test('should work with single user', () => {
      const users = [{ name: 'David', age: 30 }];
      expect(extractNames(users)).toEqual(['David']);
    });
  });

  describe('Exercise 3: toUpperCase', () => {
    test('should convert strings to uppercase', () => {
      expect(toUpperCase(['hello', 'world', 'javascript'])).toEqual([
        'HELLO',
        'WORLD',
        'JAVASCRIPT',
      ]);
    });

    test('should work with mixed case', () => {
      expect(toUpperCase(['Hello', 'WoRLD'])).toEqual(['HELLO', 'WORLD']);
    });

    test('should work with empty array', () => {
      expect(toUpperCase([])).toEqual([]);
    });
  });

  describe('Exercise 4: generateListItems', () => {
    test('should generate HTML list items', () => {
      expect(generateListItems(['Pen', 'Paper', 'Pencil'])).toEqual([
        '<li>Pen</li>',
        '<li>Paper</li>',
        '<li>Pencil</li>',
      ]);
    });

    test('should work with empty array', () => {
      expect(generateListItems([])).toEqual([]);
    });

    test('should work with single item', () => {
      expect(generateListItems(['Item'])).toEqual(['<li>Item</li>']);
    });
  });

  describe('Exercise 5: addTaxToProducts', () => {
    test('should add priceWithTax property to products', () => {
      const products = [
        { name: 'Item1', price: 100 },
        { name: 'Item2', price: 50 },
      ];
      const result = addTaxToProducts(products);
      expect(result[0]).toEqual({ name: 'Item1', price: 100, priceWithTax: 110 });
      expect(result[1]).toEqual({ name: 'Item2', price: 50, priceWithTax: 55 });
    });

    test('should not mutate original array', () => {
      const products = [{ name: 'Item', price: 100 }];
      const originalLength = Object.keys(products[0]).length;
      addTaxToProducts(products);
      expect(Object.keys(products[0]).length).toBe(originalLength);
    });

    test('should work with empty array', () => {
      expect(addTaxToProducts([])).toEqual([]);
    });
  });
});
