/**
 * Tests for String Methods exercises
 *
 * Strings have many useful methods for manipulation and analysis.
 */

describe('String Methods', () => {
  test('should get string length', () => {
    expect('hello'.length).toBe(5);
    expect('javascript'.length).toBe(10);
  });

  test('should use charAt to get character at index', () => {
    const str = 'hello';
    expect(str.charAt(0)).toBe('h');
    expect(str.charAt(4)).toBe('o');
  });

  test('should convert to uppercase', () => {
    expect('hello'.toUpperCase()).toBe('HELLO');
    expect('World'.toUpperCase()).toBe('WORLD');
  });

  test('should convert to lowercase', () => {
    expect('HELLO'.toLowerCase()).toBe('hello');
    expect('WoRLd'.toLowerCase()).toBe('world');
  });

  test('should use indexOf to find substring', () => {
    const str = 'hello world';
    expect(str.indexOf('world')).toBe(6);
    expect(str.indexOf('z')).toBe(-1);
  });

  test('should use includes to check for substring', () => {
    const str = 'hello world';
    expect(str.includes('world')).toBe(true);
    expect(str.includes('xyz')).toBe(false);
  });

  test('should use slice to extract substring', () => {
    const str = 'hello world';
    expect(str.slice(0, 5)).toBe('hello');
    expect(str.slice(6)).toBe('world');
  });

  test('should use split to create array', () => {
    const str = 'apple,banana,cherry';
    const arr = str.split(',');
    expect(arr).toEqual(['apple', 'banana', 'cherry']);
  });

  test('should use trim to remove whitespace', () => {
    expect('  hello  '.trim()).toBe('hello');
    expect('  world \n'.trim()).toBe('world');
  });

  test('should use replace to substitute text', () => {
    const str = 'hello world';
    expect(str.replace('world', 'javascript')).toBe('hello javascript');
  });
});
