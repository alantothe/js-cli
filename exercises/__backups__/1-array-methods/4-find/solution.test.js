const {
  findFirstEven,
  findUserByName,
  findProductById,
  findByPrefix,
  findByProperty,
} = require('./solution.js');

describe('Array Method: find()', () => {
  describe('Exercise 1: findFirstEven', () => {
    test('should find first even number', () => {
      expect(findFirstEven([1, 3, 4, 5])).toBe(4);
    });

    test('should return undefined if no even number', () => {
      expect(findFirstEven([1, 3, 5])).toBeUndefined();
    });

    test('should return first even even if more exist', () => {
      expect(findFirstEven([1, 2, 3, 4])).toBe(2);
    });

    test('should work with empty array', () => {
      expect(findFirstEven([])).toBeUndefined();
    });
  });

  describe('Exercise 2: findUserByName', () => {
    test('should find user by name', () => {
      const users = [
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 30 },
      ];
      expect(findUserByName(users, 'Bob')).toEqual({ name: 'Bob', age: 30 });
    });

    test('should return undefined if user not found', () => {
      const users = [{ name: 'Alice', age: 25 }];
      expect(findUserByName(users, 'Carol')).toBeUndefined();
    });

    test('should return first match if duplicates exist', () => {
      const users = [
        { name: 'Alice', age: 25 },
        { name: 'Alice', age: 30 },
      ];
      expect(findUserByName(users, 'Alice')).toEqual({ name: 'Alice', age: 25 });
    });
  });

  describe('Exercise 3: findProductById', () => {
    test('should find product by id', () => {
      const products = [
        { id: 1, name: 'Item1', price: 100 },
        { id: 2, name: 'Item2', price: 200 },
      ];
      expect(findProductById(products, 2)).toEqual({ id: 2, name: 'Item2', price: 200 });
    });

    test('should return undefined if product not found', () => {
      const products = [{ id: 1, name: 'Item1', price: 100 }];
      expect(findProductById(products, 999)).toBeUndefined();
    });

    test('should work with empty array', () => {
      expect(findProductById([], 1)).toBeUndefined();
    });
  });

  describe('Exercise 4: findByPrefix', () => {
    test('should find string by prefix', () => {
      expect(findByPrefix(['apple', 'apricot', 'banana'], 'ap')).toBe('apple');
    });

    test('should return undefined if no match', () => {
      expect(findByPrefix(['apple', 'banana'], 'or')).toBeUndefined();
    });

    test('should return first match', () => {
      expect(findByPrefix(['apply', 'apple', 'apricot'], 'ap')).toBe('apply');
    });

    test('should work with empty array', () => {
      expect(findByPrefix([], 'ap')).toBeUndefined();
    });
  });

  describe('Exercise 5: findByProperty', () => {
    test('should find object by property value', () => {
      const objects = [
        { status: 'inactive', id: 1 },
        { status: 'active', id: 2 },
      ];
      expect(findByProperty(objects, 'status', 'active')).toEqual({
        status: 'active',
        id: 2,
      });
    });

    test('should return undefined if not found', () => {
      const objects = [{ status: 'inactive' }];
      expect(findByProperty(objects, 'status', 'active')).toBeUndefined();
    });

    test('should work with different property types', () => {
      const objects = [{ count: 0 }, { count: 5 }];
      expect(findByProperty(objects, 'count', 5)).toEqual({ count: 5 });
    });
  });
});
