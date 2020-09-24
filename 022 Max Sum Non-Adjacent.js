/**
 * Day 22 of 100DaysOfCode / September 24, 2020
 *
 * Coding challenge:
 * Write a function that takes in an array of
 * positive integers and returns the maximum
 * sum of non-adjacent elements in the array.
 *
 * Solution by Marco van Vemden
 * - Time complexity : O(n)
 * - Space complexity: O(n)
 */
function maxSumNonAdjacent(array) {
  // helper array; set to first array element or zero
  const maxSums = array.length !== 0 ? [array[0]] : [0];
  // start iteration at second array element
  for (let i = 1; i < array.length; i++) {
    // sum current and any non-adjacent left elements
    let curSum = i > 1 ? maxSums[i - 2] + array[i] : array[i];
    // set helper to greater of current and previous element
    maxSums[i] = Math.max(curSum, maxSums[i - 1]);
  }
  // last helper element has maximum sum
  return maxSums[maxSums.length - 1];
}
