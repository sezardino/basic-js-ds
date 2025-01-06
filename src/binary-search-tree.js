const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this._root = null; // Root of the tree
  }

  /**
   * Returns the root node of the tree
   */
  root() {
    return this._root;
  }

  /**
   * Adds a new node with the given data to the tree
   * @param {number} data - The value to add
   */
  add(data) {
    const newNode = new Node(data);

    if (!this._root) {
      // If the tree is empty, set the new node as the root
      this._root = newNode;
      return;
    }

    let current = this._root;

    while (true) {
      if (data < current.data) {
        // Traverse to the left if the value is smaller
        if (!current.left) {
          current.left = newNode; // Add the node as the left child
          return;
        }
        current = current.left;
      } else {
        // Traverse to the right if the value is greater or equal
        if (!current.right) {
          current.right = newNode; // Add the node as the right child
          return;
        }
        current = current.right;
      }
    }
  }

  /**
   * Checks if a node with the given data exists in the tree
   * @param {number} data - The value to check
   * @returns {boolean} - True if the node exists, false otherwise
   */
  has(data) {
    return !!this.find(data);
  }

  /**
   * Finds and returns the node with the given data
   * @param {number} data - The value to search for
   * @returns {Node|null} - The found node or null if not found
   */
  find(data) {
    let current = this._root;

    while (current) {
      if (data === current.data) {
        return current; // Node found
      }
      current = data < current.data ? current.left : current.right; // Traverse left or right
    }

    return null; // Node not found
  }

  /**
   * Removes a node with the given data from the tree
   * @param {number} data - The value to remove
   */
  remove(data) {
    const removeNode = (node, data) => {
      if (!node) {
        return null; // Base case: node not found
      }

      if (data === node.data) {
        // Node to be removed found

        // Case 1: Node with no children
        if (!node.left && !node.right) {
          return null;
        }

        // Case 2: Node with one child
        if (!node.left) {
          return node.right;
        }
        if (!node.right) {
          return node.left;
        }

        // Case 3: Node with two children
        // Find the smallest value in the right subtree
        let minRight = node.right;
        while (minRight.left) {
          minRight = minRight.left;
        }

        // Replace node's data with the smallest value
        node.data = minRight.data;

        // Remove the duplicate node from the right subtree
        node.right = removeNode(node.right, minRight.data);
        return node;
      } else if (data < node.data) {
        // Traverse left subtree
        node.left = removeNode(node.left, data);
        return node;
      } else {
        // Traverse right subtree
        node.right = removeNode(node.right, data);
        return node;
      }
    };

    this._root = removeNode(this._root, data); // Start removing from the root
  }

  /**
   * Returns the smallest value in the tree
   * @returns {number|null} - The minimum value or null if the tree is empty
   */
  min() {
    if (!this._root) {
      return null; // Tree is empty
    }

    let current = this._root;
    while (current.left) {
      current = current.left; // Traverse left to find the smallest value
    }

    return current.data;
  }

  /**
   * Returns the largest value in the tree
   * @returns {number|null} - The maximum value or null if the tree is empty
   */
  max() {
    if (!this._root) {
      return null; // Tree is empty
    }

    let current = this._root;
    while (current.right) {
      current = current.right; // Traverse right to find the largest value
    }

    return current.data;
  }
}

module.exports = {
  BinarySearchTree,
};
