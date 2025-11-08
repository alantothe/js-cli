const { isEven, isPrime, factorial, sum } = require('./solution.js');

describe('Number Helper Functions', () => {
  describe('isEven', () => {
    it('should return true for even numbers', () => {
      expect(isEven(4)).toBe(true);
    });

    it('should return false for odd numbers', () => {
      expect(isEven(7)).toBe(false);
    });
  });

  describe('isPrime', () => {
    it('should return true for prime numbers', () => {
      expect(isPrime(7)).toBe(true);
      expect(isPrime(2)).toBe(true);
    });

    it('should return false for non-prime numbers', () => {
      expect(isPrime(10)).toBe(false);
      expect(isPrime(1)).toBe(false);
    });
  });

  describe('factorial', () => {
    it('should calculate factorial correctly', () => {
      expect(factorial(5)).toBe(120);
    });

    it('should return 1 for factorial of 0', () => {
      expect(factorial(0)).toBe(1);
    });
  });

  describe('sum', () => {
    it('should sum all numbers in array', () => {
      expect(sum([1, 2, 3, 4])).toBe(10);
    });

    it('should handle single element array', () => {
      expect(sum([5])).toBe(5);
    });
  });
});
