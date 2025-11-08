/**
 * Tests for Plain Objects (Hash Maps) exercises
 *
 * Plain JavaScript objects can be used as hash maps/dictionaries.
 * Keys are strings (or Symbols), values can be any type.
 */

describe('Plain Objects as Hash Maps', () => {
  test('should create and access object properties', () => {
    const obj = {};
    obj['name'] = 'Alice';
    obj.age = 30;

    expect(obj.name).toBe('Alice');
    expect(obj['age']).toBe(30);
  });

  test('should check if key exists', () => {
    const obj = { x: 1, y: 2 };

    expect('x' in obj).toBe(true);
    expect('z' in obj).toBe(false);
  });

  test('should delete keys from object', () => {
    const obj = { a: 1, b: 2 };
    delete obj.a;

    expect('a' in obj).toBe(false);
    expect('b' in obj).toBe(true);
  });

  test('should count object properties', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const keys = Object.keys(obj);

    expect(keys.length).toBe(3);
  });

  test('should iterate over object entries', () => {
    const obj = { x: 10, y: 20, z: 30 };
    const values = [];

    for (const key in obj) {
      values.push(obj[key]);
    }

    expect(values).toEqual([10, 20, 30]);
  });
});
