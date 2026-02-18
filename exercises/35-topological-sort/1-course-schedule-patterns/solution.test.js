const { canFinish, findOrder, minimumSemesters } = require('./solution.js');

describe('Course Schedule Patterns', () => {
  test('canFinish returns true when no cycle', () => {
    expect(canFinish(2, [[1,0]])).toBe(true);
  });

  test('canFinish returns false on cycle', () => {
    expect(canFinish(2, [[1,0],[0,1]])).toBe(false);
  });

  test('findOrder returns valid ordering', () => {
    expect(findOrder(2, [[1,0]])).toEqual([0,1]);
  });

  test('minimumSemesters computes layered schedule', () => {
    expect(minimumSemesters(3, [[1,3],[2,3]])).toBe(2);
    expect(minimumSemesters(3, [[1,2],[2,3],[3,1]])).toBe(-1);
  });
});
