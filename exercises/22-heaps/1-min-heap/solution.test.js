const { MinHeap } = require('./solution.js');

describe('Min Heap', () => {
  let heap;

  beforeEach(() => {
    heap = new MinHeap();
  });

  describe('insert and peek', () => {
    it('should insert values and maintain min at top', () => {
      heap.insert(5);
      heap.insert(3);
      heap.insert(8);
      heap.insert(1);
      expect(heap.peek()).toBe(1);
    });

    it('should handle single insert', () => {
      heap.insert(42);
      expect(heap.peek()).toBe(42);
    });
  });

  describe('extractMin', () => {
    it('should extract values in ascending order', () => {
      [5, 3, 8, 1, 4, 2].forEach(v => heap.insert(v));
      expect(heap.extractMin()).toBe(1);
      expect(heap.extractMin()).toBe(2);
      expect(heap.extractMin()).toBe(3);
      expect(heap.extractMin()).toBe(4);
      expect(heap.extractMin()).toBe(5);
      expect(heap.extractMin()).toBe(8);
    });

    it('should return undefined for empty heap', () => {
      expect(heap.extractMin()).toBeUndefined();
    });
  });

  describe('size', () => {
    it('should track size correctly', () => {
      expect(heap.size()).toBe(0);
      heap.insert(1);
      heap.insert(2);
      expect(heap.size()).toBe(2);
      heap.extractMin();
      expect(heap.size()).toBe(1);
    });
  });

  describe('edge cases', () => {
    it('should handle duplicates', () => {
      heap.insert(3);
      heap.insert(3);
      heap.insert(3);
      expect(heap.extractMin()).toBe(3);
      expect(heap.extractMin()).toBe(3);
      expect(heap.size()).toBe(1);
    });

    it('should handle negative numbers', () => {
      heap.insert(-1);
      heap.insert(-5);
      heap.insert(0);
      expect(heap.peek()).toBe(-5);
    });
  });
});
