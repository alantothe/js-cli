const { fib } = require('./solution.js');

describe('Dynamic Programming Technique', () => {
  it('should return 0 for fib(0)', () => {
    expect(fib(0)).toBe(0);
  });

  it('should return correct Fibonacci numbers', () => {
    expect(fib(5)).toBe(5);
    expect(fib(10)).toBe(55);
  });

  it('should handle larger Fibonacci numbers', () => {
    expect(fib(20)).toBe(6765);
  });

  it('should return 1 for fib(1)', () => {
    expect(fib(1)).toBe(1);
  });
});
