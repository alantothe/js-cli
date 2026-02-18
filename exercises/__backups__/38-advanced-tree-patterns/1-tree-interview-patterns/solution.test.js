const { TreeNode, lowestCommonAncestor, isValidBST, maxPathSum } = require('./solution.js');

describe('Tree Interview Patterns', () => {
  test('lowestCommonAncestor finds correct ancestor', () => {
    const n7 = new TreeNode(7);
    const n4 = new TreeNode(4);
    const n6 = new TreeNode(6, n7, n4);
    const n2 = new TreeNode(2, n6, null);
    const n5 = new TreeNode(5, n2, new TreeNode(8));
    const lca = lowestCommonAncestor(n5, n7, n4);
    expect(lca.val).toBe(6);
  });

  test('isValidBST validates constraints', () => {
    const root = new TreeNode(2, new TreeNode(1), new TreeNode(3));
    expect(isValidBST(root)).toBe(true);
    const bad = new TreeNode(5, new TreeNode(1), new TreeNode(4, new TreeNode(3), new TreeNode(6)));
    expect(isValidBST(bad)).toBe(false);
  });

  test('maxPathSum returns best path', () => {
    const root = new TreeNode(-10, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
    expect(maxPathSum(root)).toBe(42);
  });
});
