/**
 * Tests for Conditionals exercises
 *
 * if/else and switch statements control program flow based on conditions.
 */

describe('Conditionals', () => {
  test('should evaluate if statement', () => {
    const x = 5;
    let result;
    if (x > 3) {
      result = 'greater';
    }
    expect(result).toBe('greater');
  });

  test('should evaluate if-else statement', () => {
    const x = 2;
    let result;
    if (x > 3) {
      result = 'greater';
    } else {
      result = 'not greater';
    }
    expect(result).toBe('not greater');
  });

  test('should evaluate if-else-if chain', () => {
    const x = 5;
    let result;
    if (x < 3) {
      result = 'small';
    } else if (x < 7) {
      result = 'medium';
    } else {
      result = 'large';
    }
    expect(result).toBe('medium');
  });

  test('should use switch statement', () => {
    const day = 2;
    let dayName;
    switch (day) {
      case 1:
        dayName = 'Monday';
        break;
      case 2:
        dayName = 'Tuesday';
        break;
      case 3:
        dayName = 'Wednesday';
        break;
      default:
        dayName = 'Other';
    }
    expect(dayName).toBe('Tuesday');
  });

  test('should use ternary operator', () => {
    const age = 20;
    const status = age >= 18 ? 'adult' : 'minor';
    expect(status).toBe('adult');
  });

  test('should use logical AND operator', () => {
    const x = 5;
    const y = 10;
    expect(x > 3 && y > 8).toBe(true);
    expect(x > 3 && y > 15).toBe(false);
  });

  test('should use logical OR operator', () => {
    const x = 2;
    const y = 15;
    expect(x > 3 || y > 8).toBe(true);
    expect(x > 3 || y < 10).toBe(false);
  });

  test('should use logical NOT operator', () => {
    const x = true;
    expect(!x).toBe(false);
    expect(!(5 > 3)).toBe(false);
  });
});
