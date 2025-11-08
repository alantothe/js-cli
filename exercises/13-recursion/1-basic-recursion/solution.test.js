const { factorial, sumArray } = require('./solution.js');

describe('Basic Recursion', () => {
  describe('factorial', () => {
    it('should return 1 for 0', () => {
      expect(factorial(0)).toBe(1);
    });

    it('should calculate factorial of 5', () => {
      expect(factorial(5)).toBe(120);
    });

    it('should calculate factorial of 3', () => {
      expect(factorial(3)).toBe(6);
    });
  });

  describe('sumArray', () => {
    it('should sum array elements', () => {
      expect(sumArray([1, 2, 3, 4])).toBe(10);
    });

    it('should handle empty array', () => {
      expect(sumArray([])).toBe(0);
    });

    it('should sum single element', () => {
      expect(sumArray([5])).toBe(5);
    });
  });
});
