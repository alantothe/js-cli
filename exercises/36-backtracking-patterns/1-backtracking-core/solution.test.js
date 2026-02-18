const { subsets, permute, combinationSum, totalNQueens } = require('./solution.js');

describe('Backtracking Core', () => {
  test('subsets returns power set', () => {
    const result = subsets([1, 2]);
    expect(result).toEqual(expect.arrayContaining([[], [1], [2], [1,2]]));
    expect(result).toHaveLength(4);
  });

  test('permute returns all orderings', () => {
    const result = permute([1,2,3]);
    expect(result).toHaveLength(6);
    expect(result).toEqual(expect.arrayContaining([[1,2,3], [3,2,1]]));
  });

  test('combinationSum finds valid combinations', () => {
    const result = combinationSum([2,3,6,7], 7);
    expect(result).toEqual(expect.arrayContaining([[2,2,3], [7]]));
  });

  test('totalNQueens counts solutions', () => {
    expect(totalNQueens(1)).toBe(1);
    expect(totalNQueens(4)).toBe(2);
  });
});
