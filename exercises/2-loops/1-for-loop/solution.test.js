/**
 * Tests for For Loop exercises
 *
 * For loops allow you to repeat a block of code a specific number of times.
 * Syntax: for (let i = start; i < end; i++) { ... }
 */

describe('For Loop Exercises', () => {
  test('should print numbers from 1 to 5', () => {
    let output = '';
    for (let i = 1; i <= 5; i++) {
      output += i + ' ';
    }
    expect(output.trim()).toBe('1 2 3 4 5');
  });

  test('should print even numbers from 0 to 10', () => {
    let output = '';
    for (let i = 0; i <= 10; i++) {
      if (i % 2 === 0) {
        output += i + ' ';
      }
    }
    expect(output.trim()).toBe('0 2 4 6 8 10');
  });

  test('should calculate sum of numbers from 1 to 10', () => {
    let sum = 0;
    for (let i = 1; i <= 10; i++) {
      sum += i;
    }
    expect(sum).toBe(55);
  });

  test('should print multiplication table of 5 (up to 10)', () => {
    let output = '';
    for (let i = 1; i <= 10; i++) {
      output += (5 * i) + ' ';
    }
    expect(output.trim()).toBe('5 10 15 20 25 30 35 40 45 50');
  });

  test('should reverse a string using a for loop', () => {
    const str = 'Hello, World!';
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    expect(reversed).toBe('!dlroW ,olleH');
  });

  test('should find the factorial of a number', () => {
    const num = 5;
    let factorial = 1;
    for (let i = num; i > 1; i--) {
      factorial *= i;
    }
    expect(factorial).toBe(120);
  });

  test('should work with nested loops', () => {
    let output = '';
    for (let i = 1; i <= 3; i++) {
      for (let j = 1; j <= 3; j++) {
        output += (i * j) + ' ';
      }
    }
    expect(output.trim()).toBe('1 2 3 2 4 6 3 6 9');
  });
});
