const { twoSum, firstUniqChar, isAnagram, groupAnagrams, subarraySum } = require('./solution.js');

describe('Hash Map Interview Patterns', () => {
  describe('twoSum', () => {
    it('should find indices of two numbers', () => {
      const result = twoSum([2, 7, 11, 15], 9);
      expect(result.sort()).toEqual([0, 1]);
    });

    it('should handle numbers not at beginning', () => {
      const result = twoSum([3, 2, 4], 6);
      expect(result.sort()).toEqual([1, 2]);
    });

    it('should handle duplicate values', () => {
      const result = twoSum([3, 3], 6);
      expect(result.sort()).toEqual([0, 1]);
    });
  });

  describe('firstUniqChar', () => {
    it('should find first unique character index', () => {
      expect(firstUniqChar('leetcode')).toBe(0);
    });

    it('should find later unique character', () => {
      expect(firstUniqChar('loveleetcode')).toBe(2);
    });

    it('should return -1 when no unique character', () => {
      expect(firstUniqChar('aabb')).toBe(-1);
    });
  });

  describe('isAnagram', () => {
    it('should return true for anagrams', () => {
      expect(isAnagram('anagram', 'nagaram')).toBe(true);
    });

    it('should return false for non-anagrams', () => {
      expect(isAnagram('rat', 'car')).toBe(false);
    });

    it('should handle different lengths', () => {
      expect(isAnagram('ab', 'abc')).toBe(false);
    });
  });

  describe('groupAnagrams', () => {
    it('should group anagrams together', () => {
      const result = groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);
      const sorted = result.map(g => g.sort()).sort((a, b) => a[0].localeCompare(b[0]));
      expect(sorted).toEqual([['ate', 'eat', 'tea'], ['bat'], ['nat', 'tan']]);
    });

    it('should handle single string', () => {
      expect(groupAnagrams(['a'])).toEqual([['a']]);
    });

    it('should handle empty strings', () => {
      expect(groupAnagrams([''])).toEqual([['']]);
    });
  });

  describe('subarraySum', () => {
    it('should count subarrays summing to k', () => {
      expect(subarraySum([1, 1, 1], 2)).toBe(2);
    });

    it('should handle negative numbers', () => {
      expect(subarraySum([1, -1, 0], 0)).toBe(3);
    });

    it('should handle single element equal to k', () => {
      expect(subarraySum([3], 3)).toBe(1);
    });

    it('should return 0 when no subarray matches', () => {
      expect(subarraySum([1, 2, 3], 7)).toBe(0);
    });
  });
});
