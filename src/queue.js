const { ListNode } = require("../extensions/list-node.js");

/**
 * Implementation of a queue using a linked list.
 */
class Queue {
  constructor() {
    this.head = null; // Pointer to the beginning of the queue
    this.tail = null; // Pointer to the end of the queue
  }

  /**
   * Returns the linked list representing the queue.
   */
  getUnderlyingList() {
    return this.head;
  }

  /**
   * Adds an element to the end of the queue.
   * @param {any} value - The value to be added.
   */
  enqueue(value) {
    const newNode = new ListNode(value);

    if (this.tail) {
      this.tail.next = newNode; // Attach the new node to the current tail
    }
    this.tail = newNode; // Move the tail pointer to the new node

    if (!this.head) {
      this.head = newNode; // If the queue was empty, set the head to the new node
    }
  }

  /**
   * Removes an element from the front of the queue and returns its value.
   * @returns {any} - The value of the removed element.
   */
  dequeue() {
    if (!this.head) {
      return null; // If the queue is empty, return null
    }

    const value = this.head.value; // Save the value of the current head
    this.head = this.head.next; // Move the head pointer to the next node

    if (!this.head) {
      this.tail = null; // If the queue is empty after removal, reset the tail pointer
    }

    return value; // Return the value of the removed element
  }
}

module.exports = {
  Queue,
};
