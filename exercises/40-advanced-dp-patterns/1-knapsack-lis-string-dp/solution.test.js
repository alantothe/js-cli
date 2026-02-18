const { canPartition, lengthOfLIS, minDistance, coinChange } = require('./solution.js');

describe('Knapsack, LIS, String DP', () => {
  test('canPartition checks equal subset sum', () => {
    expect(canPartition([1,5,11,5])).toBe(true);
    expect(canPartition([1,2,3,5])).toBe(false);
  });

  test('lengthOfLIS computes longest increasing subsequence', () => {
    expect(lengthOfLIS([10,9,2,5,3,7,101,18])).toBe(4);
  });

  test('minDistance computes edit distance', () => {
    expect(minDistance('horse', 'ros')).toBe(3);
  });

  test('coinChange returns minimum coins', () => {
    expect(coinChange([1,2,5], 11)).toBe(3);
    expect(coinChange([2], 3)).toBe(-1);
  });
});
