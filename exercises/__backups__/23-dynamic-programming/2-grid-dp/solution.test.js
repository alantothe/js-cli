const { uniquePaths, minPathSum, longestCommonSubsequence } = require('./solution.js');

describe('Grid-Based Dynamic Programming', () => {
  describe('uniquePaths', () => {
    it('should count paths in 3x7 grid', () => {
      expect(uniquePaths(3, 7)).toBe(28);
    });

    it('should count paths in 3x2 grid', () => {
      expect(uniquePaths(3, 2)).toBe(3);
    });

    it('should return 1 for 1x1 grid', () => {
      expect(uniquePaths(1, 1)).toBe(1);
    });

    it('should return 1 for single row', () => {
      expect(uniquePaths(1, 5)).toBe(1);
    });

    it('should return 1 for single column', () => {
      expect(uniquePaths(5, 1)).toBe(1);
    });
  });

  describe('minPathSum', () => {
    it('should find minimum path sum', () => {
      expect(minPathSum([
        [1, 3, 1],
        [1, 5, 1],
        [4, 2, 1]
      ])).toBe(7);
    });

    it('should handle single cell', () => {
      expect(minPathSum([[5]])).toBe(5);
    });

    it('should handle single row', () => {
      expect(minPathSum([[1, 2, 3]])).toBe(6);
    });

    it('should handle single column', () => {
      expect(minPathSum([[1], [2], [3]])).toBe(6);
    });
  });

  describe('longestCommonSubsequence', () => {
    it('should find LCS length', () => {
      expect(longestCommonSubsequence('abcde', 'ace')).toBe(3);
    });

    it('should return 0 for no common subsequence', () => {
      expect(longestCommonSubsequence('abc', 'def')).toBe(0);
    });

    it('should handle identical strings', () => {
      expect(longestCommonSubsequence('abc', 'abc')).toBe(3);
    });

    it('should handle empty string', () => {
      expect(longestCommonSubsequence('', 'abc')).toBe(0);
    });

    it('should handle single character match', () => {
      expect(longestCommonSubsequence('a', 'a')).toBe(1);
    });
  });
});
