/**
 * Tests for Map (Hash Map) exercises
 *
 * Map is an ES6 data structure for key-value pairs.
 * Keys can be any type (not just strings).
 */

describe('Map Data Structure', () => {
  test('should create and set map entries', () => {
    const map = new Map();
    map.set('name', 'Bob');
    map.set('age', 25);

    expect(map.get('name')).toBe('Bob');
    expect(map.get('age')).toBe(25);
  });

  test('should check if key exists in map', () => {
    const map = new Map([['x', 1], ['y', 2]]);

    expect(map.has('x')).toBe(true);
    expect(map.has('z')).toBe(false);
  });

  test('should delete entries from map', () => {
    const map = new Map([['a', 1], ['b', 2]]);
    map.delete('a');

    expect(map.has('a')).toBe(false);
    expect(map.has('b')).toBe(true);
  });

  test('should get map size', () => {
    const map = new Map([['a', 1], ['b', 2], ['c', 3]]);

    expect(map.size).toBe(3);
  });

  test('should use non-string keys in map', () => {
    const map = new Map();
    const obj = { id: 1 };
    map.set(obj, 'value');

    expect(map.get(obj)).toBe('value');
  });

  test('should iterate over map entries', () => {
    const map = new Map([['a', 1], ['b', 2], ['c', 3]]);
    const entries = [];

    for (const [key, value] of map) {
      entries.push([key, value]);
    }

    expect(entries).toHaveLength(3);
  });
});
