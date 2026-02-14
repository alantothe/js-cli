/**
 * ╔══════════════════════════════════════════╗
 * ║       Reverse a Linked List              ║
 * ╚══════════════════════════════════════════╝
 *
 * The most commonly asked linked list interview question.
 */

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

// Helper: create linked list from array
function fromArray(arr) {
  let head = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    head = new ListNode(arr[i], head);
  }
  return head;
}

// Helper: convert linked list to array
function toArray(head) {
  const result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}

// Reverse a linked list iteratively
function reverseList(head) {
  // TODO: Use three pointers (prev, curr, next) to reverse
}

// Reverse a linked list recursively
function reverseListRecursive(head) {
  // TODO: Reverse using recursion
}

module.exports = { ListNode, fromArray, toArray, reverseList, reverseListRecursive };
