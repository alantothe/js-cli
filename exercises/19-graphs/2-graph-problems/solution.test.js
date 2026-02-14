const { numIslands, hasCycle, cloneGraph, canFinish } = require('./solution.js');

describe('Common Graph Interview Problems', () => {
  describe('numIslands', () => {
    it('should count islands in grid', () => {
      const grid = [
        ['1', '1', '0', '0', '0'],
        ['1', '1', '0', '0', '0'],
        ['0', '0', '1', '0', '0'],
        ['0', '0', '0', '1', '1']
      ];
      expect(numIslands(grid)).toBe(3);
    });

    it('should return 0 for all water', () => {
      const grid = [['0', '0'], ['0', '0']];
      expect(numIslands(grid)).toBe(0);
    });

    it('should return 1 for all land', () => {
      const grid = [['1', '1'], ['1', '1']];
      expect(numIslands(grid)).toBe(1);
    });

    it('should handle empty grid', () => {
      expect(numIslands([])).toBe(0);
    });
  });

  describe('hasCycle', () => {
    it('should detect cycle in directed graph', () => {
      expect(hasCycle(4, [[0, 1], [1, 2], [2, 0]])).toBe(true);
    });

    it('should return false for acyclic graph', () => {
      expect(hasCycle(4, [[0, 1], [1, 2], [2, 3]])).toBe(false);
    });

    it('should return false for empty graph', () => {
      expect(hasCycle(3, [])).toBe(false);
    });
  });

  describe('cloneGraph', () => {
    it('should deep clone a graph', () => {
      const node1 = { val: 1, neighbors: [] };
      const node2 = { val: 2, neighbors: [] };
      const node3 = { val: 3, neighbors: [] };
      node1.neighbors = [node2, node3];
      node2.neighbors = [node1, node3];
      node3.neighbors = [node1, node2];
      const clone = cloneGraph(node1);
      expect(clone).not.toBe(node1);
      expect(clone.val).toBe(1);
      expect(clone.neighbors).toHaveLength(2);
      expect(clone.neighbors[0]).not.toBe(node2);
      expect(clone.neighbors[0].val).toBe(2);
    });

    it('should return null for null input', () => {
      expect(cloneGraph(null)).toBeNull();
    });
  });

  describe('canFinish', () => {
    it('should return true when courses can be finished', () => {
      expect(canFinish(2, [[1, 0]])).toBe(true);
    });

    it('should return false when circular dependency exists', () => {
      expect(canFinish(2, [[1, 0], [0, 1]])).toBe(false);
    });

    it('should return true for no prerequisites', () => {
      expect(canFinish(3, [])).toBe(true);
    });
  });
});
