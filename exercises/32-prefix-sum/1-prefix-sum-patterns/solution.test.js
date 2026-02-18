const { buildPrefixSum, rangeSum, subarraySumEqualsK, applyRangeIncrements } = require('./solution.js');

describe('Prefix Sum Patterns', () => {
  test('buildPrefixSum builds cumulative array', () => {
    expect(buildPrefixSum([1, 2, 3, 4])).toEqual([1, 3, 6, 10]);
  });

  test('rangeSum computes inclusive range sum', () => {
    const prefix = [3, 8, 9, 14, 22];
    expect(rangeSum(prefix, 1, 3)).toBe(11);
  });

  test('subarraySumEqualsK counts matching subarrays', () => {
    expect(subarraySumEqualsK([1, 1, 1], 2)).toBe(2);
    expect(subarraySumEqualsK([1, 2, 3], 3)).toBe(2);
  });

  test('applyRangeIncrements applies multiple updates', () => {
    const updates = [[1, 3, 2], [2, 4, 3], [0, 2, -2]];
    expect(applyRangeIncrements(5, updates)).toEqual([-2, 0, 3, 5, 3]);
  });
});
