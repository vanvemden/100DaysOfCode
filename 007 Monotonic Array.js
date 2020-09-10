/**
 * Day 7 of 100DaysOfCode / September 9, 2020
 *
 * Coding challenge:
 * Write a function that takes in an array of
 * integers and returns a boolean representing
 * whether the array is monotonic. An array is
 * monotonic if, from left to right, the elements
 * are entirely increasing or entirely decreasing.
 *
 * Solution by Marco van Vemden
 * - Time complexity : O(n)
 * - Space complexity: O(1)
 */
function isMonotonic(array) {
  let direction = undefined;
  for (let i = 1; i < array.length; i++) {
    let difference = array[i - 1] - array[i];
    if (difference !== 0) {
      if (direction === undefined) {
        direction = Math.sign(difference);
      } else if (direction !== Math.sign(difference)) {
        return false;
      }
    }
  }
  return true;
}
