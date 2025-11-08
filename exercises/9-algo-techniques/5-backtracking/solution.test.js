const { permute } = require('./solution.js');

describe('Backtracking Technique', () => {
  it('should generate all permutations of an array', () => {
    const result = permute([1, 2, 3]);
    expect(result.length).toBe(6);
    expect(result).toContainEqual([1, 2, 3]);
    expect(result).toContainEqual([3, 2, 1]);
  });

  it('should handle single element array', () => {
    expect(permute([1])).toEqual([[1]]);
  });

  it('should handle two element array', () => {
    const result = permute([1, 2]);
    expect(result.length).toBe(2);
    expect(result).toContainEqual([1, 2]);
    expect(result).toContainEqual([2, 1]);
  });

  it('should work with string elements', () => {
    const result = permute(['a', 'b', 'c']);
    expect(result.length).toBe(6);
    expect(result).toContainEqual(['a', 'b', 'c']);
  });
});
