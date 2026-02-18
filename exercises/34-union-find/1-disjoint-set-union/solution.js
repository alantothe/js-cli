/**
 * Disjoint Set Union
 */

class DSU {
  constructor(n) {
    // TODO: Initialize parent and rank/size arrays
  }

  find(x) {
    // TODO: Find representative with path compression
  }

  union(a, b) {
    // TODO: Union two sets and return true if merged, false if already connected
  }
}

function countComponents(n, edges) {
  // TODO: Return number of connected components in an undirected graph
}

function hasCycle(n, edges) {
  // TODO: Return true if edges contain an undirected cycle
}

module.exports = { DSU, countComponents, hasCycle };
