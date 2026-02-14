/**
 * ╔══════════════════════════════════════════╗
 * ║     Common Tree Interview Problems       ║
 * ╚══════════════════════════════════════════╝
 *
 * Classic tree problems frequently asked in interviews.
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Invert a binary tree (mirror it)
function invertTree(root) {
  // TODO: Swap left and right children recursively
}

// Check if two trees are identical
function isSameTree(p, q) {
  // TODO: Compare structure and values
}

// Check if a tree is symmetric (mirror of itself)
function isSymmetric(root) {
  // TODO: Check if left subtree mirrors right subtree
}

// Find the lowest common ancestor of two nodes in a BST
function lowestCommonAncestor(root, p, q) {
  // TODO: Find LCA using BST property
}

// Find the maximum depth of a binary tree
function maxDepth(root) {
  // TODO: Return maximum depth
}

module.exports = { TreeNode, invertTree, isSameTree, isSymmetric, lowestCommonAncestor, maxDepth };
