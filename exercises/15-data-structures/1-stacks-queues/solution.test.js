const { Stack, Queue } = require('./solution.js');

describe('Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it('should push and pop values', () => {
    stack.push(1);
    stack.push(2);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
  });

  it('should peek without removing', () => {
    stack.push(5);
    expect(stack.peek()).toBe(5);
    expect(stack.pop()).toBe(5);
  });

  it('should identify empty stack', () => {
    expect(stack.isEmpty()).toBe(true);
    stack.push(1);
    expect(stack.isEmpty()).toBe(false);
  });
});

describe('Queue', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  it('should enqueue and dequeue values', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
  });

  it('should peek without removing', () => {
    queue.enqueue(5);
    expect(queue.peek()).toBe(5);
    expect(queue.dequeue()).toBe(5);
  });

  it('should identify empty queue', () => {
    expect(queue.isEmpty()).toBe(true);
    queue.enqueue(1);
    expect(queue.isEmpty()).toBe(false);
  });
});
