/**
 * Tests for While Loop exercises
 *
 * While loops repeat a block of code while a condition is true.
 * Syntax: while (condition) { ... }
 *
 * do...while loops execute the body at least once, then check the condition.
 * Syntax: do { ... } while (condition)
 */

describe('While Loop Exercises', () => {
  test('should count from 0 to 4 using while loop', () => {
    let output = '';
    let i = 0;
    while (i < 5) {
      output += i + ' ';
      i++;
    }
    expect(output.trim()).toBe('0 1 2 3 4');
  });

  test('should sum numbers until reaching target', () => {
    let sum = 0;
    let i = 1;
    while (sum < 50) {
      sum += i;
      i++;
    }
    expect(sum).toBeGreaterThanOrEqual(50);
  });

  test('should execute do...while at least once', () => {
    let count = 0;
    do {
      count++;
    } while (count < 3);
    expect(count).toBe(3);
  });

  test('should execute do...while even when condition is initially false', () => {
    let count = 0;
    do {
      count++;
    } while (false);
    expect(count).toBe(1);
  });

  test('should find the largest power of 2 less than 1000', () => {
    let power = 1;
    while (power * 2 < 1000) {
      power *= 2;
    }
    expect(power).toBe(512);
  });

  test('should repeat string until length exceeds target', () => {
    let result = '';
    while (result.length < 10) {
      result += 'a';
    }
    expect(result.length).toBeGreaterThanOrEqual(10);
  });
});
