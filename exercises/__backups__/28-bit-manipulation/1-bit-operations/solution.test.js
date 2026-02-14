const { singleNumber, isPowerOfTwo, hammingWeight, hammingDistance, reverseBits } = require('./solution.js');

describe('Bit Manipulation', () => {
  describe('singleNumber', () => {
    it('should find the single number', () => {
      expect(singleNumber([2, 2, 1])).toBe(1);
    });

    it('should work with larger array', () => {
      expect(singleNumber([4, 1, 2, 1, 2])).toBe(4);
    });

    it('should handle single element', () => {
      expect(singleNumber([1])).toBe(1);
    });

    it('should handle negative numbers', () => {
      expect(singleNumber([-1, -1, -2])).toBe(-2);
    });
  });

  describe('isPowerOfTwo', () => {
    it('should return true for powers of two', () => {
      expect(isPowerOfTwo(1)).toBe(true);
      expect(isPowerOfTwo(2)).toBe(true);
      expect(isPowerOfTwo(4)).toBe(true);
      expect(isPowerOfTwo(16)).toBe(true);
      expect(isPowerOfTwo(1024)).toBe(true);
    });

    it('should return false for non-powers', () => {
      expect(isPowerOfTwo(0)).toBe(false);
      expect(isPowerOfTwo(3)).toBe(false);
      expect(isPowerOfTwo(6)).toBe(false);
      expect(isPowerOfTwo(-2)).toBe(false);
    });
  });

  describe('hammingWeight', () => {
    it('should count set bits', () => {
      expect(hammingWeight(11)).toBe(3);  // 1011
      expect(hammingWeight(128)).toBe(1); // 10000000
      expect(hammingWeight(255)).toBe(8); // 11111111
    });

    it('should return 0 for zero', () => {
      expect(hammingWeight(0)).toBe(0);
    });
  });

  describe('hammingDistance', () => {
    it('should find hamming distance', () => {
      expect(hammingDistance(1, 4)).toBe(2); // 001 vs 100
    });

    it('should return 0 for same numbers', () => {
      expect(hammingDistance(3, 3)).toBe(0);
    });

    it('should handle zero', () => {
      expect(hammingDistance(0, 7)).toBe(3); // 000 vs 111
    });
  });

  describe('reverseBits', () => {
    it('should reverse bits', () => {
      // 00000000000000000000000000001011 -> 11010000000000000000000000000000
      expect(reverseBits(11)).toBe(3489660928);
    });

    it('should handle zero', () => {
      expect(reverseBits(0)).toBe(0);
    });

    it('should handle all ones', () => {
      expect(reverseBits(4294967295)).toBe(4294967295); // all 32 bits set
    });
  });
});
