const { getKeys, getValues, merge, isEmpty } = require('./solution.js');

describe('Object Helper Functions', () => {
  describe('getKeys', () => {
    it('should return array of object keys', () => {
      expect(getKeys({a: 1, b: 2})).toEqual(['a', 'b']);
    });

    it('should work with string values', () => {
      expect(getKeys({name: 'John', age: 30})).toEqual(['name', 'age']);
    });
  });

  describe('getValues', () => {
    it('should return array of object values', () => {
      expect(getValues({a: 1, b: 2})).toEqual([1, 2]);
    });

    it('should work with mixed values', () => {
      expect(getValues({name: 'John', age: 30})).toEqual(['John', 30]);
    });
  });

  describe('merge', () => {
    it('should merge two objects', () => {
      expect(merge({a: 1}, {b: 2})).toEqual({a: 1, b: 2});
    });

    it('should override properties from obj1 with obj2', () => {
      expect(merge({a: 1, b: 2}, {b: 3})).toEqual({a: 1, b: 3});
    });
  });

  describe('isEmpty', () => {
    it('should return true for empty object', () => {
      expect(isEmpty({})).toBe(true);
    });

    it('should return false for non-empty object', () => {
      expect(isEmpty({a: 1})).toBe(false);
    });
  });
});
