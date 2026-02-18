const { MinStack, TimeMap, LRUCache } = require('./solution.js');

describe('LRU, MinStack, TimeMap', () => {
  test('MinStack supports constant min', () => {
    const s = new MinStack();
    s.push(-2); s.push(0); s.push(-3);
    expect(s.getMin()).toBe(-3);
    s.pop();
    expect(s.top()).toBe(0);
    expect(s.getMin()).toBe(-2);
  });

  test('TimeMap gets most recent value at or before timestamp', () => {
    const tm = new TimeMap();
    tm.set('foo', 'bar', 1);
    expect(tm.get('foo', 1)).toBe('bar');
    expect(tm.get('foo', 3)).toBe('bar');
    tm.set('foo', 'bar2', 4);
    expect(tm.get('foo', 4)).toBe('bar2');
    expect(tm.get('foo', 5)).toBe('bar2');
  });

  test('LRUCache evicts least recently used key', () => {
    const c = new LRUCache(2);
    c.put(1, 1); c.put(2, 2);
    expect(c.get(1)).toBe(1);
    c.put(3, 3);
    expect(c.get(2)).toBe(-1);
    c.put(4, 4);
    expect(c.get(1)).toBe(-1);
    expect(c.get(3)).toBe(3);
    expect(c.get(4)).toBe(4);
  });
});
