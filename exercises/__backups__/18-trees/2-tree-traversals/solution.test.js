const { TreeNode, inorder, preorder, postorder, levelOrder, height } = require('./solution.js');

describe('Tree Traversals', () => {
  let root;

  beforeEach(() => {
    root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(5);
    root.right.left = new TreeNode(6);
    root.right.right = new TreeNode(7);
  });

  describe('inorder', () => {
    it('should traverse left-root-right', () => {
      expect(inorder(root)).toEqual([4, 2, 5, 1, 6, 3, 7]);
    });

    it('should return empty array for null', () => {
      expect(inorder(null)).toEqual([]);
    });

    it('should handle single node', () => {
      expect(inorder(new TreeNode(1))).toEqual([1]);
    });
  });

  describe('preorder', () => {
    it('should traverse root-left-right', () => {
      expect(preorder(root)).toEqual([1, 2, 4, 5, 3, 6, 7]);
    });

    it('should return empty array for null', () => {
      expect(preorder(null)).toEqual([]);
    });
  });

  describe('postorder', () => {
    it('should traverse left-right-root', () => {
      expect(postorder(root)).toEqual([4, 5, 2, 6, 7, 3, 1]);
    });

    it('should return empty array for null', () => {
      expect(postorder(null)).toEqual([]);
    });
  });

  describe('levelOrder', () => {
    it('should return values grouped by level', () => {
      expect(levelOrder(root)).toEqual([[1], [2, 3], [4, 5, 6, 7]]);
    });

    it('should return empty array for null', () => {
      expect(levelOrder(null)).toEqual([]);
    });

    it('should handle single node', () => {
      expect(levelOrder(new TreeNode(1))).toEqual([[1]]);
    });
  });

  describe('height', () => {
    it('should return height of tree', () => {
      expect(height(root)).toBe(2);
    });

    it('should return -1 for null', () => {
      expect(height(null)).toBe(-1);
    });

    it('should return 0 for single node', () => {
      expect(height(new TreeNode(1))).toBe(0);
    });
  });
});
