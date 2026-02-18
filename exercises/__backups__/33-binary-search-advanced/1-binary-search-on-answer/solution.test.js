const { minEatingSpeed, shipWithinDays, splitArrayLargestSum } = require('./solution.js');

describe('Binary Search on Answer', () => {
  test('minEatingSpeed finds minimum valid speed', () => {
    expect(minEatingSpeed([3, 6, 7, 11], 8)).toBe(4);
  });

  test('shipWithinDays finds minimum capacity', () => {
    expect(shipWithinDays([1,2,3,4,5,6,7,8,9,10], 5)).toBe(15);
  });

  test('splitArrayLargestSum minimizes largest partition sum', () => {
    expect(splitArrayLargestSum([7,2,5,10,8], 2)).toBe(18);
  });
});
