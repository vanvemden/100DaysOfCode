/**
 * Day 20 of 100DaysOfCode / September 22, 2020
 *
 * Coding challenge:
 * Write three functions that take in a Binary
 * Search Tree (BST) and an empty array. The
 * functions should add the BST node values to
 * the array 1) in-order, 2) pre-order, and
 * 3) post-order, and return the array.
 *
 * Solution by Marco van Vemden
 * - Time complexity : O(n)
 * - Space complexity: O(n)
 */
function inOrderTraverse(tree, array) {
  if (tree !== null) {
    // left node, current node, right node
    inOrderTraverse(tree.left, array);
    array.push(tree.value);
    inOrderTraverse(tree.right, array);
  }
  return array;
}

function preOrderTraverse(tree, array) {
  if (tree !== null) {
    // current node, left node, right node
    array.push(tree.value);
    preOrderTraverse(tree.left, array);
    preOrderTraverse(tree.right, array);
  }
  return array;
}

function postOrderTraverse(tree, array) {
  if (tree !== null) {
    // left node, right node, current node
    postOrderTraverse(tree.left, array);
    postOrderTraverse(tree.right, array);
    array.push(tree.value);
  }
  return array;
}
