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
  if (root === null) {
    return new TreeNode(val);
  }

  if (val < root.val) {
    root.left = insert(root.left, val);
  } else if (val > root.val) {
    root.right = insert(root.right, val);
  }

  // If val === root.val, we do nothing (no duplicates)
  return root;
}

// Search for a value in the BST, return the node or null
function search(root, val) {
  if (root === null) return null;

  if (val === root.val) return root;

  if (val < root.val) {
    return search(root.left, val);
  } else {
    return search(root.right, val);
  }
}

// Find the minimum value in the BST
function findMin(root) {
  if (root === null) return null;

  while (root.left !== null) {
    root = root.left;
  }

  return root.val;
}

// Find the maximum value in the BST
function findMax(root) {
  if (root === null) return null;

  while (root.right !== null) {
    root = root.right;
  }

  return root.val;
}

// Check if a binary tree is a valid BST
function isValidBST(root, min = -Infinity, max = Infinity) {
  if (root === null) return true;

  if (root.val <= min || root.val >= max) {
    return false;
  }

  return (
    isValidBST(root.left, min, root.val) &&
    isValidBST(root.right, root.val, max)
  );
}

module.exports = { TreeNode, insert, search, findMin, findMax, isValidBST };
