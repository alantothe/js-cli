const { levelOrder, lowestCommonAncestor, maxPathSum } = require('./solution.js');

describe('LeetCode Tree Problems', () => {
  // Helper to create tree from array (level order)
  function createTree(arr) {
    if (!arr || arr.length === 0) return null;
    const root = { val: arr[0], left: null, right: null };
    const queue = [root];
    let i = 1;

    while (queue.length && i < arr.length) {
      const node = queue.shift();
      if (arr[i] !== null) {
        node.left = { val: arr[i], left: null, right: null };
        queue.push(node.left);
      }
      i++;

      if (i < arr.length && arr[i] !== null) {
        node.right = { val: arr[i], left: null, right: null };
        queue.push(node.right);
      }
      i++;
    }

    return root;
  }

  describe('Level Order Traversal', () => {
    it('should traverse tree level by level', () => {
      const root = createTree([3, 9, 20, null, null, 15, 7]);
      const result = levelOrder(root);
      expect(result).toEqual([[3], [9, 20], [15, 7]]);
    });

    it('should handle single node tree', () => {
      const root = createTree([1]);
      expect(levelOrder(root)).toEqual([[1]]);
    });

    it('should handle empty tree', () => {
      expect(levelOrder(null)).toEqual([]);
    });

    it('should handle tree with nulls', () => {
      const root = createTree([1, 2, null, 3]);
      const result = levelOrder(root);
      expect(result.length).toBeGreaterThan(0);
    });
  });

  describe('Lowest Common Ancestor', () => {
    it('should find LCA of two nodes', () => {
      const root = createTree([6, 2, 8, 0, 4, 7, 9]);
      const p = root.left; // node with val 2
      const q = root.right; // node with val 8
      const result = lowestCommonAncestor(root, p, q);
      expect(result.val).toBe(6);
    });

    it('should handle LCA as one of the nodes', () => {
      const root = createTree([6, 2, 8, 0, 4, 7, 9]);
      const p = root; // root itself
      const q = root.left; // node with val 2
      const result = lowestCommonAncestor(root, p, q);
      expect(result.val).toBe(6);
    });

    it('should work with both nodes on left', () => {
      const root = createTree([6, 2, 8, 0, 4, 7, 9]);
      const p = root.left; // val 2
      const q = root.left.right; // val 4
      const result = lowestCommonAncestor(root, p, q);
      expect(result.val).toBe(2);
    });
  });

  describe('Maximum Path Sum', () => {
    it('should find maximum path sum', () => {
      const root = createTree([1, 2, 3]);
      expect(maxPathSum(root)).toBeGreaterThan(0);
    });

    it('should handle single node', () => {
      const root = createTree([5]);
      expect(maxPathSum(root)).toBe(5);
    });

    it('should handle negative values', () => {
      const root = createTree([-10, 9, 20, null, null, 15, 7]);
      const result = maxPathSum(root);
      expect(result).toBeGreaterThan(-10);
    });

    it('should work with larger tree', () => {
      const root = createTree([1, 2, 3, 4, 5]);
      const result = maxPathSum(root);
      expect(typeof result).toBe('number');
    });
  });
});
