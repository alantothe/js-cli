const { twoSum } = require('./solution.js');

describe('Two Pointer Technique', () => {
  it('should find two numbers that sum to target', () => {
    expect(twoSum([1, 2, 3, 4, 5], 7)).toEqual([2, 5]);
  });

  it('should return null if no pair exists', () => {
    expect(twoSum([1, 2, 3], 10)).toBeNull();
  });

  it('should work with negative numbers', () => {
    expect(twoSum([-5, -2, 0, 3, 5], 0)).toEqual([-5, 5]);
  });
});
