const { buildAdjacencyList, dfs, bfs, hasPath } = require('./solution.js');

describe('Graph Fundamentals', () => {
  describe('buildAdjacencyList', () => {
    it('should build undirected adjacency list', () => {
      const edges = [[0, 1], [0, 2], [1, 3]];
      const adj = buildAdjacencyList(edges);
      expect(adj[0]).toEqual(expect.arrayContaining([1, 2]));
      expect(adj[1]).toEqual(expect.arrayContaining([0, 3]));
      expect(adj[2]).toEqual(expect.arrayContaining([0]));
      expect(adj[3]).toEqual(expect.arrayContaining([1]));
    });

    it('should build directed adjacency list', () => {
      const edges = [[0, 1], [0, 2]];
      const adj = buildAdjacencyList(edges, true);
      expect(adj[0]).toEqual(expect.arrayContaining([1, 2]));
      expect(adj[1] || []).not.toContain(0);
    });
  });

  describe('dfs', () => {
    it('should visit all reachable nodes', () => {
      const adj = { 0: [1, 2], 1: [0, 3], 2: [0], 3: [1] };
      const result = dfs(adj, 0);
      expect(result).toHaveLength(4);
      expect(result[0]).toBe(0);
      expect(result).toEqual(expect.arrayContaining([0, 1, 2, 3]));
    });

    it('should handle disconnected node', () => {
      const adj = { 0: [1], 1: [0], 2: [] };
      const result = dfs(adj, 0);
      expect(result).toEqual(expect.arrayContaining([0, 1]));
      expect(result).not.toContain(2);
    });
  });

  describe('bfs', () => {
    it('should visit nodes level by level', () => {
      const adj = { 0: [1, 2], 1: [0, 3], 2: [0], 3: [1] };
      const result = bfs(adj, 0);
      expect(result).toEqual([0, 1, 2, 3]);
    });

    it('should handle single node', () => {
      const adj = { 0: [] };
      expect(bfs(adj, 0)).toEqual([0]);
    });
  });

  describe('hasPath', () => {
    it('should return true when path exists', () => {
      const adj = { 0: [1], 1: [0, 2], 2: [1, 3], 3: [2] };
      expect(hasPath(adj, 0, 3)).toBe(true);
    });

    it('should return false when no path exists', () => {
      const adj = { 0: [1], 1: [0], 2: [3], 3: [2] };
      expect(hasPath(adj, 0, 3)).toBe(false);
    });

    it('should return true for same source and destination', () => {
      const adj = { 0: [1], 1: [0] };
      expect(hasPath(adj, 0, 0)).toBe(true);
    });
  });
});
