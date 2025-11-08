const { minWindow, groupAnagrams, multiply } = require('./solution.js');

describe('LeetCode String Problems', () => {
  describe('Minimum Window Substring', () => {
    it('should find minimum window containing all characters', () => {
      expect(minWindow('ADOBECODEBANC', 'ABC')).toBe('BANC');
    });

    it('should return empty string if impossible', () => {
      expect(minWindow('a', 'aa')).toBe('');
    });

    it('should work with single character', () => {
      expect(minWindow('a', 'a')).toBe('a');
    });

    it('should handle multiple occurrences', () => {
      const result = minWindow('ab', 'b');
      expect(result).toBe('b');
    });
  });

  describe('Group Anagrams', () => {
    it('should group anagrams together', () => {
      const input = ['eat', 'tea', 'ate', 'nat', 'tan', 'bat'];
      const result = groupAnagrams(input);
      expect(result.length).toBe(3);
      expect(result).toContainEqual(['eat', 'tea', 'ate']);
      expect(result).toContainEqual(['nat', 'tan']);
      expect(result).toContainEqual(['bat']);
    });

    it('should handle empty array', () => {
      expect(groupAnagrams([])).toEqual([]);
    });

    it('should handle single string', () => {
      const result = groupAnagrams(['a']);
      expect(result).toEqual([['a']]);
    });

    it('should handle non-anagrams', () => {
      const result = groupAnagrams(['ab', 'cd', 'ef']);
      expect(result.length).toBe(3);
    });
  });

  describe('Multiply Strings', () => {
    it('should multiply two number strings', () => {
      expect(multiply('123', '456')).toBe('56088');
    });

    it('should handle zero', () => {
      expect(multiply('0', '123')).toBe('0');
      expect(multiply('123', '0')).toBe('0');
    });

    it('should handle single digit multiplication', () => {
      expect(multiply('2', '3')).toBe('6');
    });

    it('should handle large numbers', () => {
      expect(multiply('999', '999')).toBe('998001');
    });
  });
});
