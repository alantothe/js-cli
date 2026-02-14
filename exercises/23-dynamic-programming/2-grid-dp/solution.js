/**
 * ╔══════════════════════════════════════════╗
 * ║     Grid-Based Dynamic Programming       ║
 * ╚══════════════════════════════════════════╝
 *
 * DP on 2D grids — a very common interview pattern.
 */

// Unique Paths: Count paths from top-left to bottom-right (only move right or down)
// m = rows, n = columns
function uniquePaths(m, n) {
  // TODO: dp[i][j] = dp[i-1][j] + dp[i][j-1]
}

// Minimum Path Sum: Find path from top-left to bottom-right with minimum sum
function minPathSum(grid) {
  // TODO: dp[i][j] = grid[i][j] + min(dp[i-1][j], dp[i][j-1])
}

// Longest Common Subsequence: Find length of LCS of two strings
function longestCommonSubsequence(text1, text2) {
  // TODO: 2D DP table comparing characters
}

module.exports = { uniquePaths, minPathSum, longestCommonSubsequence };
