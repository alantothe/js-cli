/**
 * ╔══════════════════════════════════════════╗
 * ║     Classic Dynamic Programming          ║
 * ╚══════════════════════════════════════════╝
 *
 * Essential DP problems every developer should know.
 * DP = breaking problems into overlapping subproblems and caching results.
 */

// Climbing Stairs: How many distinct ways to climb n stairs (1 or 2 steps at a time)?
function climbStairs(n) {
  // TODO: dp[i] = dp[i-1] + dp[i-2]
}

// Coin Change: Minimum number of coins to make amount, or -1 if impossible
// coins = [1, 5, 10], amount = 11 => 3 (5+5+1)
function coinChange(coins, amount) {
  // TODO: dp[i] = min coins to make amount i
}

// House Robber: Max money robbing non-adjacent houses
// nums = [2, 7, 9, 3, 1] => 12 (2+9+1)
function rob(nums) {
  // TODO: dp[i] = max(dp[i-1], dp[i-2] + nums[i])
}

// Maximum Subarray (Kadane's Algorithm): Find contiguous subarray with largest sum
function maxSubArray(nums) {
  // TODO: Track current sum and max sum
}

module.exports = { climbStairs, coinChange, rob, maxSubArray };
