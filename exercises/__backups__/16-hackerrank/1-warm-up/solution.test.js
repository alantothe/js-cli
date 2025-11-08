const { countCharacter, sumToN } = require('./solution.js');

describe('HackerRank Warm-Up', () => {
  describe('countCharacter', () => {
    it('should count character occurrences', () => {
      expect(countCharacter('hello', 'l')).toBe(2);
    });

    it('should return 0 if character not found', () => {
      expect(countCharacter('hello', 'z')).toBe(0);
    });

    it('should be case sensitive', () => {
      expect(countCharacter('Hello', 'h')).toBe(0);
    });
  });

  describe('sumToN', () => {
    it('should sum from 1 to n', () => {
      expect(sumToN(5)).toBe(15);
    });

    it('should handle n=1', () => {
      expect(sumToN(1)).toBe(1);
    });

    it('should handle n=10', () => {
      expect(sumToN(10)).toBe(55);
    });
  });
});
