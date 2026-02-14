const { lengthOfLongestSubstring, minSubArrayLen, findAnagrams } = require('./solution.js');

describe('Sliding Window Pattern Problems', () => {
  describe('lengthOfLongestSubstring', () => {
    it('should find longest substring without repeats', () => {
      expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
    });

    it('should handle all same characters', () => {
      expect(lengthOfLongestSubstring('bbbbb')).toBe(1);
    });

    it('should handle mixed pattern', () => {
      expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
    });

    it('should handle empty string', () => {
      expect(lengthOfLongestSubstring('')).toBe(0);
    });

    it('should handle all unique characters', () => {
      expect(lengthOfLongestSubstring('abcdef')).toBe(6);
    });
  });

  describe('minSubArrayLen', () => {
    it('should find minimum length subarray', () => {
      expect(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])).toBe(2);
    });

    it('should return 0 when no solution', () => {
      expect(minSubArrayLen(100, [1, 2, 3])).toBe(0);
    });

    it('should handle single element meeting target', () => {
      expect(minSubArrayLen(4, [1, 4, 4])).toBe(1);
    });

    it('should handle entire array needed', () => {
      expect(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])).toBe(11);
    });
  });

  describe('findAnagrams', () => {
    it('should find all anagram start indices', () => {
      expect(findAnagrams('cbaebabacd', 'abc')).toEqual([0, 6]);
    });

    it('should find overlapping anagrams', () => {
      expect(findAnagrams('abab', 'ab')).toEqual([0, 1, 2]);
    });

    it('should return empty for no match', () => {
      expect(findAnagrams('hello', 'xyz')).toEqual([]);
    });

    it('should handle p longer than s', () => {
      expect(findAnagrams('ab', 'abc')).toEqual([]);
    });
  });
});
