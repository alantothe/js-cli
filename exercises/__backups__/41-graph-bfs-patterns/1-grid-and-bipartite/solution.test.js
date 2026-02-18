const { orangesRotting, isBipartite, shortestPathBinaryMatrix } = require('./solution.js');

describe('Grid & Bipartite BFS', () => {
  test('orangesRotting computes minute layers', () => {
    expect(orangesRotting([[2,1,1],[1,1,0],[0,1,1]])).toBe(4);
    expect(orangesRotting([[2,1,1],[0,1,1],[1,0,1]])).toBe(-1);
  });

  test('isBipartite colors graph correctly', () => {
    expect(isBipartite([[1,3],[0,2],[1,3],[0,2]])).toBe(true);
    expect(isBipartite([[1,2,3],[0,2],[0,1,3],[0,2]])).toBe(false);
  });

  test('shortestPathBinaryMatrix finds shortest 8-dir path', () => {
    expect(shortestPathBinaryMatrix([[0,1],[1,0]])).toBe(2);
    expect(shortestPathBinaryMatrix([[1,0],[1,0]])).toBe(-1);
  });
});
