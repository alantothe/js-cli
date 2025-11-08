/**
 * Tests for For...of Loop exercises
 *
 * for...of loops iterate over iterable objects (arrays, strings, etc)
 * and directly access the values (not the indices).
 * Syntax: for (const element of iterable) { ... }
 */

describe('For...of Loop Exercises', () => {
  test('should iterate over array numbers', () => {
    const numbers = [10, 20, 30, 40, 50];
    let sum = 0;
    for (const num of numbers) {
      sum += num;
    }
    expect(sum).toBe(150);
  });

  test('should iterate over string characters', () => {
    const word = 'javascript';
    let charCount = 0;
    for (const char of word) {
      charCount++;
    }
    expect(charCount).toBe(word.length);
  });

  test('should collect vowels from a string', () => {
    const text = 'javascript';
    const vowels = [];
    for (const char of text) {
      if ('aeiou'.includes(char)) {
        vowels.push(char);
      }
    }
    expect(vowels).toEqual(['a', 'a', 'i']);
  });

  test('should transform array elements', () => {
    const numbers = [1, 2, 3, 4];
    const doubled = [];
    for (const num of numbers) {
      doubled.push(num * 2);
    }
    expect(doubled).toEqual([2, 4, 6, 8]);
  });

  test('should work with Map entries', () => {
    const map = new Map([
      ['a', 1],
      ['b', 2],
      ['c', 3]
    ]);
    let sum = 0;
    for (const [key, value] of map) {
      sum += value;
    }
    expect(sum).toBe(6);
  });

  test('should iterate over Set values', () => {
    const set = new Set([1, 2, 3, 4, 5]);
    let sum = 0;
    for (const value of set) {
      sum += value;
    }
    expect(sum).toBe(15);
  });

  test('should break out of for...of loop', () => {
    const numbers = [1, 2, 3, 4, 5];
    let sum = 0;
    for (const num of numbers) {
      if (num === 3) break;
      sum += num;
    }
    expect(sum).toBe(3);
  });
});
