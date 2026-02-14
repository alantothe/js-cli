/**
 * ╔══════════════════════════════════════════╗
 * ║         Min Heap Implementation          ║
 * ╚══════════════════════════════════════════╝
 *
 * A Min Heap is a complete binary tree where parent <= children.
 * Stored as an array: parent at i, children at 2i+1 and 2i+2.
 */

class MinHeap {
  constructor() {
    // TODO: Initialize the heap storage
  }

  // Insert a value into the heap
  insert(val) {
    // TODO: Add to end and bubble up
  }

  // Remove and return the minimum value
  extractMin() {
    // TODO: Remove root, move last to root, bubble down
  }

  // Return the minimum value without removing
  peek() {
    // TODO: Return the root value
  }

  // Return the number of elements
  size() {
    // TODO: Return heap size
  }

  // Bubble up element at index to maintain heap property
  _bubbleUp(index) {
    // TODO: Swap with parent while smaller than parent
  }

  // Bubble down element at index to maintain heap property
  _bubbleDown(index) {
    // TODO: Swap with smallest child while larger than child
  }
}

module.exports = { MinHeap };
