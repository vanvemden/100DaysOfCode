/**
 * Day 2 of 100DaysOfCode / September 4, 2020
 *
 * Coding challenge:
 * Write a function that takes an unsorted array
 * of at least three integers. Without sorting
 * the input array, it returns a new array with
 * the three largest integers in sorted order.
 *
 * Solution by Marco van Vemden
 * - Time complexity : O(n)
 * - Space complexity: O(1)
 */
function findThreeLargestNumbers(array) {
  // init three array values to negative infinity
  const largest = Array(3).fill(Number.NEGATIVE_INFINITY);
  // iterate over the integer numbers
  for (let number of array) {
    // using switch statement as fall-through
    switch (true) {
      case largest[2] < number:
        // number larger than largest; swap numbers
        [largest[2], number] = [number, largest[2]];
      case largest[1] < number:
        // (swapped) number larger than second largest; swap
        [largest[1], number] = [number, largest[1]];
      case largest[0] < number:
        // (swapped) number is larger than smallest; assign
        largest[0] = number;
        break;
    }
  }
  return largest;
}
