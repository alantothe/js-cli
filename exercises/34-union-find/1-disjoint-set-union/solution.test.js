const { DSU, countComponents, hasCycle } = require('./solution.js');

describe('Disjoint Set Union', () => {
  test('DSU unions and finds representatives', () => {
    const dsu = new DSU(5);
    expect(dsu.union(0, 1)).toBe(true);
    expect(dsu.union(1, 2)).toBe(true);
    expect(dsu.find(0)).toBe(dsu.find(2));
    expect(dsu.union(0, 2)).toBe(false);
  });

  test('countComponents counts connected groups', () => {
    expect(countComponents(5, [[0,1],[1,2],[3,4]])).toBe(2);
  });

  test('hasCycle detects undirected cycle', () => {
    expect(hasCycle(3, [[0,1],[1,2],[2,0]])).toBe(true);
    expect(hasCycle(4, [[0,1],[1,2],[2,3]])).toBe(false);
  });
});
