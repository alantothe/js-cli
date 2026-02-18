const { mergeIntervals, insertInterval, canAttendMeetings, minMeetingRooms } = require('./solution.js');

describe('Interval Patterns', () => {
  test('mergeIntervals merges overlaps', () => {
    expect(mergeIntervals([[1,3],[2,6],[8,10],[15,18]])).toEqual([[1,6],[8,10],[15,18]]);
  });

  test('insertInterval inserts and merges correctly', () => {
    expect(insertInterval([[1,3],[6,9]], [2,5])).toEqual([[1,5],[6,9]]);
  });

  test('canAttendMeetings detects conflicts', () => {
    expect(canAttendMeetings([[0,30],[5,10],[15,20]])).toBe(false);
    expect(canAttendMeetings([[7,10],[12,15]])).toBe(true);
  });

  test('minMeetingRooms computes room count', () => {
    expect(minMeetingRooms([[0,30],[5,10],[15,20]])).toBe(2);
    expect(minMeetingRooms([[7,10],[2,4]])).toBe(1);
  });
});
