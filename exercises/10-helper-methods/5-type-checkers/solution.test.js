const { isArray, isObject, isEmpty, isNull } = require('./solution.js');

describe('Type Checker Helper Functions', () => {
  describe('isArray', () => {
    it('should return true for arrays', () => {
      expect(isArray([1, 2, 3])).toBe(true);
    });

    it('should return false for non-arrays', () => {
      expect(isArray('hello')).toBe(false);
      expect(isArray({length: 3})).toBe(false);
    });
  });

  describe('isObject', () => {
    it('should return true for plain objects', () => {
      expect(isObject({a: 1})).toBe(true);
    });

    it('should return false for arrays and null', () => {
      expect(isObject([])).toBe(false);
      expect(isObject(null)).toBe(false);
    });
  });

  describe('isEmpty', () => {
    it('should return true for empty values', () => {
      expect(isEmpty('')).toBe(true);
      expect(isEmpty([])).toBe(true);
      expect(isEmpty({})).toBe(true);
    });

    it('should return false for non-empty values', () => {
      expect(isEmpty('hello')).toBe(false);
      expect(isEmpty([1])).toBe(false);
      expect(isEmpty({a: 1})).toBe(false);
    });
  });

  describe('isNull', () => {
    it('should return true for null and undefined', () => {
      expect(isNull(null)).toBe(true);
      expect(isNull(undefined)).toBe(true);
    });

    it('should return false for other falsy values', () => {
      expect(isNull(0)).toBe(false);
      expect(isNull('')).toBe(false);
    });
  });
});
