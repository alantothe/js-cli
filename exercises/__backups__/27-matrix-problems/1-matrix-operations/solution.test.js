const { rotate, spiralOrder, searchMatrix, setZeroes } = require('./solution.js');

describe('Matrix / 2D Array Problems', () => {
  describe('rotate', () => {
    it('should rotate 3x3 matrix 90 degrees clockwise', () => {
      const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
      rotate(matrix);
      expect(matrix).toEqual([[7, 4, 1], [8, 5, 2], [9, 6, 3]]);
    });

    it('should rotate 2x2 matrix', () => {
      const matrix = [[1, 2], [3, 4]];
      rotate(matrix);
      expect(matrix).toEqual([[3, 1], [4, 2]]);
    });

    it('should handle 1x1 matrix', () => {
      const matrix = [[1]];
      rotate(matrix);
      expect(matrix).toEqual([[1]]);
    });
  });

  describe('spiralOrder', () => {
    it('should return spiral order for 3x3', () => {
      expect(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
        .toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
    });

    it('should handle single row', () => {
      expect(spiralOrder([[1, 2, 3]])).toEqual([1, 2, 3]);
    });

    it('should handle single column', () => {
      expect(spiralOrder([[1], [2], [3]])).toEqual([1, 2, 3]);
    });

    it('should handle rectangular matrix', () => {
      expect(spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]))
        .toEqual([1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]);
    });
  });

  describe('searchMatrix', () => {
    it('should find target in matrix', () => {
      const matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]];
      expect(searchMatrix(matrix, 3)).toBe(true);
    });

    it('should return false when target not found', () => {
      const matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]];
      expect(searchMatrix(matrix, 13)).toBe(false);
    });

    it('should handle single element found', () => {
      expect(searchMatrix([[1]], 1)).toBe(true);
    });

    it('should handle single element not found', () => {
      expect(searchMatrix([[1]], 2)).toBe(false);
    });
  });

  describe('setZeroes', () => {
    it('should set rows and columns to zero', () => {
      const matrix = [[1, 1, 1], [1, 0, 1], [1, 1, 1]];
      setZeroes(matrix);
      expect(matrix).toEqual([[1, 0, 1], [0, 0, 0], [1, 0, 1]]);
    });

    it('should handle multiple zeros', () => {
      const matrix = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]];
      setZeroes(matrix);
      expect(matrix).toEqual([[0, 0, 0, 0], [0, 4, 5, 0], [0, 3, 1, 0]]);
    });

    it('should handle no zeros', () => {
      const matrix = [[1, 2], [3, 4]];
      setZeroes(matrix);
      expect(matrix).toEqual([[1, 2], [3, 4]]);
    });
  });
});
