const { shortestPathUnweighted, dijkstra, networkDelayTime } = require('./solution.js');

describe('Dijkstra & BFS Paths', () => {
  test('shortestPathUnweighted finds BFS distance', () => {
    expect(shortestPathUnweighted(5, [[0,1],[1,2],[2,3],[3,4]], 0, 4)).toBe(4);
  });

  test('dijkstra computes weighted shortest distances', () => {
    const dist = dijkstra(3, [[0,1,1],[1,2,2],[0,2,5]], 0);
    expect(dist).toEqual([0,1,3]);
  });

  test('networkDelayTime returns max shortest path', () => {
    expect(networkDelayTime([[2,1,1],[2,3,1],[3,4,1]], 4, 2)).toBe(2);
    expect(networkDelayTime([[1,2,1]], 2, 2)).toBe(-1);
  });
});
