const { capitalize, reverse, truncate, repeat } = require('./solution.js');

describe('String Helper Functions', () => {
  describe('capitalize', () => {
    it('should capitalize first letter', () => {
      expect(capitalize('hello')).toBe('Hello');
    });

    it('should handle already capitalized strings', () => {
      expect(capitalize('WORLD')).toBe('World');
    });
  });

  describe('reverse', () => {
    it('should reverse a string', () => {
      expect(reverse('hello')).toBe('olleh');
    });

    it('should work with numbers', () => {
      expect(reverse('123')).toBe('321');
    });
  });

  describe('truncate', () => {
    it('should truncate string and add ellipsis', () => {
      expect(truncate('hello world', 5)).toBe('he...');
    });

    it('should not truncate if within length', () => {
      expect(truncate('hi', 5)).toBe('hi');
    });
  });

  describe('repeat', () => {
    it('should repeat string multiple times', () => {
      expect(repeat('ab', 3)).toBe('ababab');
    });

    it('should handle repeat count of 1', () => {
      expect(repeat('x', 1)).toBe('x');
    });
  });
});
