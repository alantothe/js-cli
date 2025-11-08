const { contains, countOccurrences, getUnique } = require('./solution.js');

describe('Utility Functions', () => {
  describe('contains', () => {
    it('should return true if value exists', () => {
      expect(contains([1, 2, 3], 2)).toBe(true);
    });

    it('should return false if value does not exist', () => {
      expect(contains([1, 2, 3], 5)).toBe(false);
    });
  });

  describe('countOccurrences', () => {
    it('should count occurrences correctly', () => {
      expect(countOccurrences([1, 2, 2, 3, 2], 2)).toBe(3);
    });

    it('should return 0 if value not found', () => {
      expect(countOccurrences([1, 2, 3], 5)).toBe(0);
    });
  });

  describe('getUnique', () => {
    it('should return unique values', () => {
      expect(getUnique([1, 2, 2, 3, 1])).toEqual(expect.arrayContaining([1, 2, 3]));
    });

    it('should handle empty arrays', () => {
      expect(getUnique([])).toEqual([]);
    });
  });
});
