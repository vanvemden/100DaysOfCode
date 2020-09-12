/**
 * Day 9 of 100DaysOfCode / September 11, 2020
 *
 * Coding challenge:
 * Write a function that takes in two non-empty
 * arrays of integers. It returns an array with
 * two numbers (one number of each array) whose
 * absolute difference is closest to zero. There
 * will only be one pair of numbers with the
 * smallest difference.
 *
 * Solution by Marco van Vemden
 * - Time complexity : O(n log(n) + m log(m))
 * - Space complexity: O(1)
 */
function smallestDifference(arrOne, arrTwo) {
  // sort arrays for better runtime
  arrOne.sort((a, b) => a - b);
  arrTwo.sort((a, b) => a - b);

  let nums = [];
  let smlDiff = Infinity;
  let idxOne = 0;
  let idxTwo = 0;

  while (idxOne < arrOne.length && idxTwo < arrTwo.length) {
    // calculate absolute difference
    let tmpDiff = Math.abs(arrOne[idxOne] - arrTwo[idxTwo]);
    // if no difference; return array with numbers
    if (tmpDiff === 0) return [arrOne[idxOne], arrTwo[idxTwo]];
    // if less than smallest difference; store numbers
    if (tmpDiff < smlDiff) {
      smlDiff = tmpDiff;
      nums = [arrOne[idxOne], arrTwo[idxTwo]];
    }
    // index of lesser value moves to right
    if (arrOne[idxOne] < arrTwo[idxTwo]) {
      idxOne++;
    } else {
      idxTwo++;
    }
  }
  return nums;
}
