/**
 * Day 14 of 100DaysOfCode / September 16, 2020
 *
 * Coding challenge:
 * Write a function that takes in an array of
 * integers and returns the length of the longest
 * peak in the array. A peak is adjacent integers
 * in the array that are increasing until they
 * reach a tip (highest value), and then numbers
 * become decreasing. A peak requires at least
 * three integers; increase from first to second,
 * and decrease from second to third number.
 *  *
 * Solution by Marco van Vemden
 * - Time complexity : O(n)
 * - Space complexity: O(1)
 */
function longestPeak(array) {
  let longPeak = 0;
  // iterate from second array index
  for (let i = 1; i < array.length - 1; i++) {
    // set left and right to current index
    let lIdx = i;
    let rIdx = i;
    // count decreasing numbers to left
    while (array[lIdx - 1] < array[lIdx]) {
      lIdx--;
    }
    // count increasing numbers to right
    while (array[rIdx] > array[rIdx + 1]) {
      rIdx++;
    }
    // check if current index is peak
    if (lIdx < i && i < rIdx) {
      // calc peak length and compare to longest
      const currPeak = rIdx - (lIdx - 1);
      longPeak = Math.max(currPeak, longPeak);
    }
  }
  return longPeak;
}
