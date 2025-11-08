/**
 * Tests for Functions exercises
 *
 * Functions are reusable blocks of code.
 * Higher-order functions take functions as arguments or return functions.
 */

describe('Functions & Higher-Order Functions', () => {
  test('should declare and call function', () => {
    function add(a, b) {
      return a + b;
    }
    expect(add(2, 3)).toBe(5);
  });

  test('should use function expressions', () => {
    const multiply = function(a, b) {
      return a * b;
    };
    expect(multiply(4, 5)).toBe(20);
  });

  test('should use arrow functions', () => {
    const square = (x) => x * x;
    expect(square(5)).toBe(25);
  });

  test('should use default parameters', () => {
    const greet = (name = 'World') => `Hello, ${name}!`;
    expect(greet('Alice')).toBe('Hello, Alice!');
    expect(greet()).toBe('Hello, World!');
  });

  test('should create higher-order function that returns function', () => {
    const makeMultiplier = (factor) => {
      return (num) => num * factor;
    };
    const double = makeMultiplier(2);
    expect(double(5)).toBe(10);
  });

  test('should use function as callback', () => {
    const processArray = (arr, callback) => {
      return arr.map(callback);
    };
    const result = processArray([1, 2, 3], (x) => x * 2);
    expect(result).toEqual([2, 4, 6]);
  });

  test('should use closure to create private variable', () => {
    const counter = (() => {
      let count = 0;
      return {
        increment: () => ++count,
        get: () => count
      };
    })();
    counter.increment();
    counter.increment();
    expect(counter.get()).toBe(2);
  });

  test('should understand scope', () => {
    let global = 'global';
    const func = () => {
      let local = 'local';
      return global + ' ' + local;
    };
    expect(func()).toBe('global local');
  });
});
