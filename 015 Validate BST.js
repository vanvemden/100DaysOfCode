/**
 * Day 15 of 100DaysOfCode / September 17, 2020
 *
 * Coding challenge:
 * Write a function that takes in a potentially
 * invalid Binary Search Tree (BST) and returns
 * a boolean representing whether the BST is
 * valid. Each BST node has an integer .value,
 * a .left child node, and a .right child node.
 * A node is set to be a valid BST node if it
 * satisfies the BST property:
 *  - its value is strictly greater than the
 *    values of every node to its left;
 *  - its value is less than or equal to the
 *    values of every node to its right;
 *  - and its children nodes are either valid
 *    BST nodes themselves or None/null
 *
 * Solution by Marco van Vemden
 * - Time complexity : O(n)
 * - Space complexity: O(d) (depth on call stack)
 */
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function validateBst(tree) {
  return validateBstHelper(tree, -Infinity, Infinity);
}

function validateBstHelper(tree, minVal, maxVal) {
  // check for end of branch
  if (tree === null) return true;
  // check if value is within min/max range
  if (tree.value < minVal || tree.value >= maxVal) return false;
  // traverse left (DFS) setting current value as max value
  let leftCheck = validateBstHelper(tree.left, minVal, tree.value);
  // traverse right (DFS) setting current value as mix value
  return leftCheck && validateBstHelper(tree.right, tree.value, maxVal);
}
