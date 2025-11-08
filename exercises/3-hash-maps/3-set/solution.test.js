/**
 * Tests for Set exercises
 *
 * Set is an ES6 data structure for storing unique values.
 */

describe('Set Data Structure', () => {
  test('should create and add values to set', () => {
    const set = new Set();
    set.add(1);
    set.add(2);
    set.add(3);

    expect(set.size).toBe(3);
  });

  test('should not store duplicate values', () => {
    const set = new Set([1, 2, 2, 3, 3, 3]);

    expect(set.size).toBe(3);
    expect(set.has(2)).toBe(true);
  });

  test('should check if value exists in set', () => {
    const set = new Set([1, 2, 3]);

    expect(set.has(2)).toBe(true);
    expect(set.has(5)).toBe(false);
  });

  test('should delete values from set', () => {
    const set = new Set([1, 2, 3]);
    set.delete(2);

    expect(set.has(2)).toBe(false);
    expect(set.size).toBe(2);
  });

  test('should remove duplicates from array', () => {
    const arr = [1, 2, 2, 3, 3, 4];
    const unique = [...new Set(arr)];

    expect(unique).toEqual([1, 2, 3, 4]);
  });

  test('should iterate over set values', () => {
    const set = new Set([10, 20, 30]);
    const values = [];

    for (const value of set) {
      values.push(value);
    }

    expect(values).toHaveLength(3);
  });
});
