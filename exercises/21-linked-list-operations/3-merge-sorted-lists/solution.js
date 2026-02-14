/**
 * ╔══════════════════════════════════════════╗
 * ║     Merge Two Sorted Linked Lists        ║
 * ╚══════════════════════════════════════════╝
 *
 * Combine two sorted linked lists into one sorted list.
 */

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function fromArray(arr) {
  let head = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    head = new ListNode(arr[i], head);
  }
  return head;
}

function toArray(head) {
  const result = [];
  while (head) { result.push(head.val); head = head.next; }
  return result;
}

// Merge two sorted linked lists into one sorted list
function mergeTwoLists(l1, l2) {
  // TODO: Use a dummy head and compare nodes
}

// Remove the Nth node from the end of a linked list
function removeNthFromEnd(head, n) {
  // TODO: Use two pointers with n gap
}

module.exports = { ListNode, fromArray, toArray, mergeTwoLists, removeNthFromEnd };
