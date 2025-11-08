/**
 * Tests for Math & Random exercises
 *
 * The Math object provides mathematical functions and constants.
 * Math.random() generates random numbers between 0 (inclusive) and 1 (exclusive).
 */

describe('Math & Random', () => {
  test('should use Math.abs for absolute value', () => {
    expect(Math.abs(-5)).toBe(5);
    expect(Math.abs(10)).toBe(10);
  });

  test('should use Math.round to round numbers', () => {
    expect(Math.round(4.5)).toBe(4);
    expect(Math.round(4.6)).toBe(5);
  });

  test('should use Math.floor to round down', () => {
    expect(Math.floor(4.9)).toBe(4);
    expect(Math.floor(4.1)).toBe(4);
  });

  test('should use Math.ceil to round up', () => {
    expect(Math.ceil(4.1)).toBe(5);
    expect(Math.ceil(4.9)).toBe(5);
  });

  test('should use Math.max and Math.min', () => {
    expect(Math.max(1, 5, 3)).toBe(5);
    expect(Math.min(1, 5, 3)).toBe(1);
  });

  test('should use Math.pow for exponents', () => {
    expect(Math.pow(2, 3)).toBe(8);
    expect(Math.pow(5, 2)).toBe(25);
  });

  test('should use Math.sqrt for square root', () => {
    expect(Math.sqrt(16)).toBe(4);
    expect(Math.sqrt(25)).toBe(5);
  });

  test('should generate random numbers', () => {
    const random = Math.random();
    expect(random).toBeGreaterThanOrEqual(0);
    expect(random).toBeLessThan(1);
  });

  test('should generate random integers in range', () => {
    const min = 1;
    const max = 10;
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    expect(random).toBeGreaterThanOrEqual(min);
    expect(random).toBeLessThanOrEqual(max);
  });
});
