/**
 * LeetCode Tree Problems
 *
 * Tree node format: { val: number, left: TreeNode | null, right: TreeNode | null }
 */

/**
 * Problem: Level Order Traversal (BFS)
 * Return array of arrays where each sub-array is a level of the tree
 *
 * @param {TreeNode} root
 * @return {number[][]}
 */
function levelOrder(root) {
  // TODO: Implement level order traversal
  // Hint: Use queue for BFS approach
}

/**
 * Problem: Lowest Common Ancestor in BST
 * Find the lowest common ancestor of two nodes in a binary search tree
 *
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
function lowestCommonAncestor(root, p, q) {
  // TODO: Implement lowest common ancestor
  // Hint: Use BST property to navigate
}

/**
 * Problem: Maximum Path Sum
 * Find maximum sum of a path (can start/end at any node)
 *
 * @param {TreeNode} root
 * @return {number}
 */
function maxPathSum(root) {
  // TODO: Implement maximum path sum
  // Hint: Use DFS with recursive path tracking
}

module.exports = { levelOrder, lowestCommonAncestor, maxPathSum };
