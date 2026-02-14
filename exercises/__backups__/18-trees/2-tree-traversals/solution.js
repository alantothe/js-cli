/**
 * ╔══════════════════════════════════════════╗
 * ║          Tree Traversals                 ║
 * ╚══════════════════════════════════════════╝
 *
 * Implement all major tree traversal algorithms.
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Inorder traversal (Left, Root, Right) - returns array of values
function inorder(root) {
  // TODO: Implement inorder traversal
}

// Preorder traversal (Root, Left, Right) - returns array of values
function preorder(root) {
  // TODO: Implement preorder traversal
}

// Postorder traversal (Left, Right, Root) - returns array of values
function postorder(root) {
  // TODO: Implement postorder traversal
}

// Level-order (BFS) traversal - returns array of arrays, each inner array is one level
function levelOrder(root) {
  // TODO: Implement BFS level-order traversal
}

// Find the height of a binary tree
function height(root) {
  // TODO: Return the height of the tree (-1 for null)
}

module.exports = { TreeNode, inorder, preorder, postorder, levelOrder, height };
