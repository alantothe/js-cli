/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ JAVASCRIPT SINGLY LINKED LIST                                                 │
 │                                                                               │
 │ A linked list is a linear data structure where each element (node)            │
 │ points to the next element. Unlike arrays, linked lists do not store          │
 │ elements in contiguous memory; instead, each node holds a reference           │
 │ (pointer) to the next node in the list.                                       │
 │                                                                               │
 │ This implementation uses:                                                     │
 │ - A Node class to represent each element.                                     │
 │ - A LinkedList class to manage nodes and provide common operations.           │
 └─────────────────────────────────────────────────────────────────────────────┘*/




/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ NODE CLASS                                                                    │
 │                                                                               │
 │ Each Node has:                                                                │
 │ - data: the value stored in the node.                                         │
 │ - next: a pointer to the next node (or null if none).                         │
 └─────────────────────────────────────────────────────────────────────────────┘*/

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}




/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ LINKEDLIST CLASS                                                              │
 │                                                                               │
 │ Properties:                                                                   │
 │ - head: reference to the first node (null if list is empty).                  │
 │ - count: number of nodes in the list.                                         │
 │                                                                               │
 │ Methods to implement and demonstrate:                                         │
 │ - append(data): Add a node to the end.                                        │
 │ - prepend(data): Add a node to the beginning.                                 │
 │ - appendMany(arr): Add multiple values in order.                              │
 │ - printList(): Log each node's data in sequence.                              │
 │ - remove(data): Remove the first node with matching data.                     │
 │ - contains(data): Return true if data exists in any node.                     │
 │ - getSize(): Return the count of nodes.                                       │
 │ - get(index): Return data at a given index (0-based).                         │
 │ - insertAt(index, data): Insert a node at a specific index.                   │
 │ - removeAt(index): Remove a node at a specific index.                         │
 │ - reverse(): Reverse the list in place.                                       │
 └─────────────────────────────────────────────────────────────────────────────┘*/

class LinkedList {
  constructor() {
    this.head = null;
    this.count = 0;
  }

  /**
   * append(data)
   *  - Creates a new node with the given data.
   *  - If the list is empty, head points to the new node.
   *  - Otherwise, traverse to the end and link the new node.
   *  - Increment the count.
   */
  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      // List is empty
      this.head = newNode;
    } else {
      // Traverse to end
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = newNode;
    }

    this.count++;
  }

  /**
   * prepend(data)
   *  - Creates a new node with the given data.
   *  - Sets its next pointer to the current head.
   *  - Updates head to the new node.
   *  - Increment the count.
   */
  prepend(data) {
    const newNode = new Node(data);

    newNode.next = this.head;
    this.head = newNode;
    this.count++;
  }

  /**
   * appendMany(arr)
   *  - Given an array of values, call append() on each in order.
   */
  appendMany(arr) {
    for (let i = 0; i < arr.length; i++) {
      this.append(arr[i]);
    }
  }

  /**
   * printList()
   *  - Traverse from head to end.
   *  - Collect each node's data in an array or log directly.
   *  - Here, we log an array of data values.
   */
  printList() {
    if (!this.head) {
      console.log('List is empty');
      return;
    }
    const result = [];
    let curr = this.head;
    while (curr) {
      result.push(curr.data);
      curr = curr.next;
    }
    console.log('List contents:', result);
  }

  /**
   * remove(data)
   *  - Remove the first node that has the matching data.
   *  - If head contains the data, update head to head.next.
   *  - Otherwise, keep track of previous and current nodes while traversing.
   *  - Link prev.next to curr.next when curr.data matches.
   *  - Decrement the count if a node is removed.
   */
  remove(data) {
    if (!this.head) return null;

    // If head needs removal
    if (this.head.data === data) {
      this.head = this.head.next;
      this.count--;
      return true;
    }

    let prev = this.head;
    let curr = this.head.next;

    while (curr) {
      if (curr.data === data) {
        prev.next = curr.next;
        this.count--;
        return true;
      }
      prev = curr;
      curr = curr.next;
    }

    // Data not found
    return false;
  }

  /**
   * contains(data)
   *  - Traverse nodes, return true if any node's data matches.
   */
  contains(data) {
    let curr = this.head;
    while (curr) {
      if (curr.data === data) return true;
      curr = curr.next;
    }
    return false;
  }

  /**
   * getSize()
   *  - Return the count of nodes.
   */
  getSize() {
    return this.count;
  }

  /**
   * get(index)
   *  - Return data at the given index (0-based).
   *  - If index < 0 or >= count, return null.
   *  - Otherwise, traverse index steps from head.
   */
  get(index) {
    if (index < 0 || index >= this.count) return null;
    let curr = this.head;
    let i = 0;
    while (i < index) {
      curr = curr.next;
      i++;
    }
    return curr.data;
  }

  /**
   * insertAt(index, data)
   *  - Insert a new node at the specified index (0-based).
   *  - If index is 0, call prepend().
   *  - If index == count, call append().
   *  - If index out of bounds (< 0 or > count), do nothing or return false.
   *  - Otherwise, traverse to (index - 1)th node, link new node in-between.
   *  - Increment the count.
   */
  insertAt(index, data) {
    if (index < 0 || index > this.count) return false;

    if (index === 0) {
      this.prepend(data);
      return true;
    }

    if (index === this.count) {
      this.append(data);
      return true;
    }

    const newNode = new Node(data);
    let prev = this.head;
    let i = 0;
    while (i < index - 1) {
      prev = prev.next;
      i++;
    }
    newNode.next = prev.next;
    prev.next = newNode;
    this.count++;
    return true;
  }

  /**
   * removeAt(index)
   *  - Remove node at the specified index (0-based).
   *  - If index is 0, update head = head.next.
   *  - If index out of bounds (< 0 or >= count), return null.
   *  - Otherwise, traverse to (index - 1)th node, set prev.next = prev.next.next.
   *  - Decrement the count.
   */
  removeAt(index) {
    if (index < 0 || index >= this.count || !this.head) return null;

    if (index === 0) {
      const removedData = this.head.data;
      this.head = this.head.next;
      this.count--;
      return removedData;
    }

    let prev = this.head;
    let i = 0;
    while (i < index - 1) {
      prev = prev.next;
      i++;
    }
    const removedData = prev.next.data;
    prev.next = prev.next.next;
    this.count--;
    return removedData;
  }

  /**
   * reverse()
   *  - Reverse the linked list in place.
   *  - Use three pointers: prev (initially null), curr (initially head), next.
   *  - In each step:
   *      next = curr.next;
   *      curr.next = prev;
   *      prev = curr;
   *      curr = next;
   *  - After loop, set head = prev.
   */
  reverse() {
    let prev = null;
    let curr = this.head;
    let next = null;

    while (curr) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }

    this.head = prev;
  }
}




/*┌─────────────────────────────────────────────────────────────────────────────┐
 │ EXAMPLE USAGE                                                                 │
 └─────────────────────────────────────────────────────────────────────────────┘*/

const list = new LinkedList();

// append and appendMany
list.append(1);
list.append(2);
list.append(3);
console.log('After appending 1, 2, 3:');
list.printList();       // [1, 2, 3]

list.appendMany([4, 5, 6]);
console.log('After appendMany([4,5,6]):');
list.printList();       // [1, 2, 3, 4, 5, 6]

// prepend
list.prepend(0);
console.log('After prepend(0):');
list.printList();       // [0, 1, 2, 3, 4, 5, 6]

// size and contains
console.log('Size of list:', list.getSize());     // 7
console.log('List contains 3?', list.contains(3)); // true
console.log('List contains 10?', list.contains(10)); // false

// get by index
console.log('Element at index 2:', list.get(2));   // 2
console.log('Element at index 10:', list.get(10)); // null

// insertAt
list.insertAt(3, 2.5);
console.log('After insertAt(3, 2.5):');
list.printList();       // [0, 1, 2, 2.5, 3, 4, 5, 6]

// remove
list.remove(2.5);
console.log('After remove(2.5):');
list.printList();       // [0, 1, 2, 3, 4, 5, 6]

// removeAt
console.log('Removed at index 4:', list.removeAt(4)); // 4
console.log('After removeAt(4):');
list.printList();       // [0, 1, 2, 3, 5, 6]

// reverse
list.reverse();
console.log('After reverse():');
list.printList();       // [6, 5, 3, 2, 1, 0]

// final size
console.log('Final size:', list.getSize()); // 6
