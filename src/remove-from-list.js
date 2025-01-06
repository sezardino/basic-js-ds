const { ListNode } = require("../extensions/list-node.js");

/**
 * Given a singly linked list of integers `l` and an integer `k`,
 * removes all elements from list `l` that have a value equal to `k`.
 *
 * @param {ListNode} l
 * @param {Number} k
 * @return {ListNode}
 */
function removeKFromList(l, k) {
  // Remove all elements from the beginning of the list that have value equal to k
  while (l !== null && l.value === k) {
    l = l.next;
  }

  let current = l;

  // Traverse through the remaining elements and remove the ones with value equal to k
  while (current !== null && current.next !== null) {
    if (current.next.value === k) {
      current.next = current.next.next; // Skip the current node with value k
    } else {
      current = current.next; // Move to the next node if the current one is not k
    }
  }

  return l; // Return the modified list
}

module.exports = {
  removeKFromList,
};
