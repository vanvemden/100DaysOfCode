/**
 * Day 1 of 100DaysOfCode / September 3, 2020
 *
 * Coding challenge:
 * Write a function that uses Binary Search
 * algorithm to search a target number in a
 * sorted array. The function returns the
 * target number array index, or -1 if target
 * number is not found in the array.
 *
 * Solution by Marco van Vemden
 * - Time complexity : O(log(n))
 * - Space complexity: O(1)
 */
function binarySearch(array, target) {
  // start pointers at outer left and right
  let left = 0;
  let right = array.length - 1;
  // iterate until pointers have overlapped
  while (left <= right) {
    // find center of pointers
    let middle = Math.floor((left + right) / 2);
    // check for target number
    if (target === array[middle]) return middle;
    // if target is less than center number
    if (target < array[middle]) {
      // move right pointer
      right = middle - 1;
    } else {
      // move left pointer
      left = middle + 1;
    }
  }
  // target value was not found
  return -1;
}
