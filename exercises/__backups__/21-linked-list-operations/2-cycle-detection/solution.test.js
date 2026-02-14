const { ListNode, hasCycle, detectCycleStart } = require('./solution.js');

describe('Linked List Cycle Detection', () => {
  describe('hasCycle', () => {
    it('should detect a cycle', () => {
      const n1 = new ListNode(1);
      const n2 = new ListNode(2);
      const n3 = new ListNode(3);
      const n4 = new ListNode(4);
      n1.next = n2; n2.next = n3; n3.next = n4; n4.next = n2;
      expect(hasCycle(n1)).toBe(true);
    });

    it('should return false for no cycle', () => {
      const n1 = new ListNode(1);
      const n2 = new ListNode(2);
      const n3 = new ListNode(3);
      n1.next = n2; n2.next = n3;
      expect(hasCycle(n1)).toBe(false);
    });

    it('should handle empty list', () => {
      expect(hasCycle(null)).toBe(false);
    });

    it('should handle single node without cycle', () => {
      expect(hasCycle(new ListNode(1))).toBe(false);
    });

    it('should handle single node with self-cycle', () => {
      const n = new ListNode(1);
      n.next = n;
      expect(hasCycle(n)).toBe(true);
    });
  });

  describe('detectCycleStart', () => {
    it('should find the start of cycle', () => {
      const n1 = new ListNode(1);
      const n2 = new ListNode(2);
      const n3 = new ListNode(3);
      const n4 = new ListNode(4);
      n1.next = n2; n2.next = n3; n3.next = n4; n4.next = n2;
      expect(detectCycleStart(n1)).toBe(n2);
    });

    it('should return null for no cycle', () => {
      const n1 = new ListNode(1);
      n1.next = new ListNode(2);
      expect(detectCycleStart(n1)).toBeNull();
    });

    it('should handle cycle at head', () => {
      const n1 = new ListNode(1);
      const n2 = new ListNode(2);
      n1.next = n2; n2.next = n1;
      expect(detectCycleStart(n1)).toBe(n1);
    });
  });
});
