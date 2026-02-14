/**
 * ╔══════════════════════════════════════════╗
 * ║        Graph Fundamentals                ║
 * ╚══════════════════════════════════════════╝
 *
 * Learn to represent and traverse graphs using
 * adjacency lists, DFS, and BFS.
 */

// Build an adjacency list from an edge list
// edges: [[0,1], [0,2], [1,3]] means 0-1, 0-2, 1-3 are connected
// Returns an object where keys are nodes and values are arrays of neighbors
function buildAdjacencyList(edges, directed = false) {
  // TODO: Build and return adjacency list
}

// Depth-First Search - return nodes in DFS order starting from given node
function dfs(adjList, start) {
  // TODO: Implement iterative or recursive DFS
}

// Breadth-First Search - return nodes in BFS order starting from given node
function bfs(adjList, start) {
  // TODO: Implement BFS using a queue
}

// Check if a path exists between two nodes
function hasPath(adjList, src, dest) {
  // TODO: Use DFS or BFS to check connectivity
}

module.exports = { buildAdjacencyList, dfs, bfs, hasPath };
