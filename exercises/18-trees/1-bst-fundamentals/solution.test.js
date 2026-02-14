const { TreeNode, insert, search, findMin, findMax, isValidBST } = require('./solution.js');

describe('Binary Search Tree Fundamentals', () => {
  let root;

  beforeEach(() => {
    root = null;
    [10, 5, 15, 3, 7, 12, 20].forEach(val => {
      root = insert(root, val);
    });
  });

  describe('insert', () => {
    it('should create root when tree is empty', () => {
      const newRoot = insert(null, 10);
      expect(newRoot.val).toBe(10);
      expect(newRoot.left).toBeNull();
      expect(newRoot.right).toBeNull();
    });

    it('should insert smaller values to the left', () => {
      expect(root.left.val).toBe(5);
      expect(root.left.left.val).toBe(3);
    });

    it('should insert larger values to the right', () => {
      expect(root.right.val).toBe(15);
      expect(root.right.right.val).toBe(20);
    });
  });

  describe('search', () => {
    it('should find existing values', () => {
      const node = search(root, 7);
      expect(node).not.toBeNull();
      expect(node.val).toBe(7);
    });

    it('should return null for non-existing values', () => {
      expect(search(root, 99)).toBeNull();
    });

    it('should find the root', () => {
      expect(search(root, 10).val).toBe(10);
    });
  });

  describe('findMin', () => {
    it('should find the minimum value', () => {
      expect(findMin(root)).toBe(3);
    });

    it('should return the root value for single node', () => {
      expect(findMin(new TreeNode(42))).toBe(42);
    });
  });

  describe('findMax', () => {
    it('should find the maximum value', () => {
      expect(findMax(root)).toBe(20);
    });

    it('should return the root value for single node', () => {
      expect(findMax(new TreeNode(42))).toBe(42);
    });
  });

  describe('isValidBST', () => {
    it('should return true for a valid BST', () => {
      expect(isValidBST(root)).toBe(true);
    });

    it('should return false for an invalid BST', () => {
      const bad = new TreeNode(10);
      bad.left = new TreeNode(15);
      bad.right = new TreeNode(5);
      expect(isValidBST(bad)).toBe(false);
    });

    it('should return true for null tree', () => {
      expect(isValidBST(null)).toBe(true);
    });

    it('should return true for single node', () => {
      expect(isValidBST(new TreeNode(1))).toBe(true);
    });
  });
});
