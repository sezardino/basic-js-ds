/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.items = []; // Internal array to store stack elements
  }

  /**
   * Adds an element to the top of the stack.
   * @param {any} element - The element to be added to the stack.
   */
  push(element) {
    this.items.push(element); // Adds the element to the end of the array (top of the stack)
  }

  /**
   * Removes and returns the top element of the stack.
   * @returns {any} - The removed top element.
   */
  pop() {
    return this.items.pop(); // Removes and returns the last element of the array (top of the stack)
  }

  /**
   * Returns the top element of the stack without removing it.
   * @returns {any} - The top element.
   */
  peek() {
    return this.items[this.items.length - 1]; // Returns the last element of the array (top of the stack)
  }
}

module.exports = {
  Stack,
};
