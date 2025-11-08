/**
 * Tests for Linked Lists exercises
 *
 * A linked list is a data structure where each node contains data and a reference to the next node.
 */

describe('Linked Lists', () => {
  // Node class for testing
  class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }

  test('should create a node', () => {
    const node = new Node(5);
    expect(node.data).toBe(5);
    expect(node.next).toBeNull();
  });

  test('should link nodes together', () => {
    const node1 = new Node(1);
    const node2 = new Node(2);
    const node3 = new Node(3);

    node1.next = node2;
    node2.next = node3;

    expect(node1.next.data).toBe(2);
    expect(node1.next.next.data).toBe(3);
  });

  test('should traverse linked list', () => {
    const node1 = new Node(10);
    const node2 = new Node(20);
    const node3 = new Node(30);

    node1.next = node2;
    node2.next = node3;

    const values = [];
    let current = node1;
    while (current !== null) {
      values.push(current.data);
      current = current.next;
    }

    expect(values).toEqual([10, 20, 30]);
  });

  test('should find node in linked list', () => {
    const node1 = new Node(5);
    const node2 = new Node(10);
    const node3 = new Node(15);

    node1.next = node2;
    node2.next = node3;

    let current = node1;
    let found = null;
    while (current !== null) {
      if (current.data === 10) {
        found = current;
        break;
      }
      current = current.next;
    }

    expect(found).not.toBeNull();
    expect(found.data).toBe(10);
  });

  test('should count nodes in linked list', () => {
    const node1 = new Node(1);
    const node2 = new Node(2);
    const node3 = new Node(3);

    node1.next = node2;
    node2.next = node3;

    let count = 0;
    let current = node1;
    while (current !== null) {
      count++;
      current = current.next;
    }

    expect(count).toBe(3);
  });
});
