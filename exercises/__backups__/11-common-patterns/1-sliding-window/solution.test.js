const { maxSumSubarray } = require('./solution.js');

describe('Sliding Window Pattern', () => {
  it('should find maximum sum of subarray with size k', () => {
    expect(maxSumSubarray([1, 4, 2, 10, 2, 3, 1, 0, 20], 4)).toBe(24);
  });

  it('should handle single element', () => {
    expect(maxSumSubarray([5], 1)).toBe(5);
  });

  it('should work with array equal to window size', () => {
    expect(maxSumSubarray([1, 2, 3], 3)).toBe(6);
  });
});
