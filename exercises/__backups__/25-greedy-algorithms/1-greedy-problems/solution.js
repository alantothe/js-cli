/**
 * ╔══════════════════════════════════════════╗
 * ║        Greedy Algorithm Problems         ║
 * ╚══════════════════════════════════════════╝
 *
 * Greedy algorithms make the locally optimal choice at each step.
 */

// Jump Game: Can you reach the last index? nums[i] = max jump length from position i
function canJump(nums) {
  // TODO: Track the farthest reachable index
}

// Merge Intervals: Merge all overlapping intervals
// intervals = [[1,3],[2,6],[8,10],[15,18]] => [[1,6],[8,10],[15,18]]
function mergeIntervals(intervals) {
  // TODO: Sort by start, merge overlapping
}

// Best Time to Buy and Sell Stock: Max profit from one buy and one sell
function maxProfit(prices) {
  // TODO: Track minimum price and maximum profit
}

// Activity Selection: Given start and end times, find max non-overlapping activities
function maxActivities(start, end) {
  // TODO: Sort by end time, greedily pick non-overlapping
}

module.exports = { canJump, mergeIntervals, maxProfit, maxActivities };
