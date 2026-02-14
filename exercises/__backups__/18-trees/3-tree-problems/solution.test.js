const { TreeNode, invertTree, isSameTree, isSymmetric, lowestCommonAncestor, maxDepth } = require('./solution.js');

describe('Common Tree Interview Problems', () => {
  describe('invertTree', () => {
    it('should invert a binary tree', () => {
      const root = new TreeNode(4);
      root.left = new TreeNode(2);
      root.right = new TreeNode(7);
      root.left.left = new TreeNode(1);
      root.left.right = new TreeNode(3);
      const inverted = invertTree(root);
      expect(inverted.left.val).toBe(7);
      expect(inverted.right.val).toBe(2);
      expect(inverted.right.left.val).toBe(3);
      expect(inverted.right.right.val).toBe(1);
    });

    it('should return null for empty tree', () => {
      expect(invertTree(null)).toBeNull();
    });
  });

  describe('isSameTree', () => {
    it('should return true for identical trees', () => {
      const a = new TreeNode(1);
      a.left = new TreeNode(2);
      a.right = new TreeNode(3);
      const b = new TreeNode(1);
      b.left = new TreeNode(2);
      b.right = new TreeNode(3);
      expect(isSameTree(a, b)).toBe(true);
    });

    it('should return false for different trees', () => {
      const a = new TreeNode(1);
      a.left = new TreeNode(2);
      const b = new TreeNode(1);
      b.right = new TreeNode(2);
      expect(isSameTree(a, b)).toBe(false);
    });

    it('should return true for two null trees', () => {
      expect(isSameTree(null, null)).toBe(true);
    });
  });

  describe('isSymmetric', () => {
    it('should return true for symmetric tree', () => {
      const root = new TreeNode(1);
      root.left = new TreeNode(2);
      root.right = new TreeNode(2);
      root.left.left = new TreeNode(3);
      root.left.right = new TreeNode(4);
      root.right.left = new TreeNode(4);
      root.right.right = new TreeNode(3);
      expect(isSymmetric(root)).toBe(true);
    });

    it('should return false for asymmetric tree', () => {
      const root = new TreeNode(1);
      root.left = new TreeNode(2);
      root.right = new TreeNode(2);
      root.left.right = new TreeNode(3);
      root.right.right = new TreeNode(3);
      expect(isSymmetric(root)).toBe(false);
    });
  });

  describe('lowestCommonAncestor', () => {
    it('should find LCA in BST', () => {
      const root = new TreeNode(6);
      root.left = new TreeNode(2);
      root.right = new TreeNode(8);
      root.left.left = new TreeNode(0);
      root.left.right = new TreeNode(4);
      root.right.left = new TreeNode(7);
      root.right.right = new TreeNode(9);
      expect(lowestCommonAncestor(root, 2, 8).val).toBe(6);
      expect(lowestCommonAncestor(root, 2, 4).val).toBe(2);
      expect(lowestCommonAncestor(root, 0, 4).val).toBe(2);
    });
  });

  describe('maxDepth', () => {
    it('should return max depth', () => {
      const root = new TreeNode(3);
      root.left = new TreeNode(9);
      root.right = new TreeNode(20);
      root.right.left = new TreeNode(15);
      root.right.right = new TreeNode(7);
      expect(maxDepth(root)).toBe(2);
    });

    it('should return 0 for single node', () => {
      expect(maxDepth(new TreeNode(1))).toBe(0);
    });

    it('should return -1 for null', () => {
      expect(maxDepth(null)).toBe(-1);
    });
  });
});
