/**
 * ╔══════════════════════════════════════════╗
 * ║     Linked List Cycle Detection          ║
 * ╚══════════════════════════════════════════╝
 *
 * Floyd's Tortoise and Hare algorithm.
 */

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

// Detect if linked list has a cycle (Floyd's algorithm)
function hasCycle(head) {
  // TODO: Use slow and fast pointers
}

// Find the node where the cycle begins, or null if no cycle
function detectCycleStart(head) {
  // TODO: Use Floyd's algorithm phase 2
}

module.exports = { ListNode, hasCycle, detectCycleStart };
