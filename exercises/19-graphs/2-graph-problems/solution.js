/**
 * ╔══════════════════════════════════════════╗
 * ║     Common Graph Interview Problems      ║
 * ╚══════════════════════════════════════════╝
 *
 * Classic graph problems frequently asked in interviews.
 */

// Number of Islands: Given a 2D grid of '1' (land) and '0' (water),
// count the number of islands (connected groups of '1's)
function numIslands(grid) {
  // TODO: Use DFS/BFS to find connected components of '1'
}

// Detect if a directed graph has a cycle
// n = number of nodes, edges = [[from, to], ...]
function hasCycle(n, edges) {
  // TODO: Use DFS with coloring (white/gray/black) to detect back edges
}

// Clone a graph node (deep copy). Each node has a val and neighbors array.
function cloneGraph(node) {
  // TODO: Use BFS or DFS with a hash map to clone
}

// Find if you can finish all courses (no circular dependencies)
// numCourses = number of courses, prerequisites = [[course, prereq], ...]
function canFinish(numCourses, prerequisites) {
  // TODO: Topological sort / cycle detection
}

module.exports = { numIslands, hasCycle, cloneGraph, canFinish };
