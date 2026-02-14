/**
 * ╔══════════════════════════════════════════╗
 * ║     Binary Search Tree Fundamentals      ║
 * ╚══════════════════════════════════════════╝
 *
 * Implement a Binary Search Tree with core operations.
 * BST Property: left child < parent < right child
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Insert a value into the BST and return the root
function insert(root, val) {
  // TODO: Insert val into the BST
}

// Search for a value in the BST, return the node or null
function search(root, val) {
  // TODO: Search for val in BST
}

// Find the minimum value in the BST
function findMin(root) {
  // TODO: Return the minimum value
}

// Find the maximum value in the BST
function findMax(root) {
  // TODO: Return the maximum value
}

// Check if a binary tree is a valid BST
function isValidBST(root, min = -Infinity, max = Infinity) {
  // TODO: Validate BST property for entire tree
}

module.exports = { TreeNode, insert, search, findMin, findMax, isValidBST };
