/**
 * Tree Interview Patterns
 */

function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

function lowestCommonAncestor(root, p, q) {
  // TODO: Return LCA node for p and q in binary tree
}

function isValidBST(root) {
  // TODO: Return true if tree satisfies BST constraints
}

function maxPathSum(root) {
  // TODO: Return maximum path sum in binary tree
}

module.exports = { TreeNode, lowestCommonAncestor, isValidBST, maxPathSum };
