/**
 * Day 6 of 100DaysOfCode / September 8, 2020
 *
 * Coding challenge:
 * Write a function that takes an unsorted array
 * consisting of consecutive integers [1,2,3,...,n]
 * without any duplicates. You are allowed to swap
 * any two elements. Find the minimum number of
 * swaps required to sort the array in ascending
 * order. Return the minimum number of swaps to
 * sort the array.
 *
 * Solution by Marco van Vemden
 * - Time complexity : O(n)
 * - Space complexity: O(1)
 */
function minimumSwaps(arr) {
  let swapCount = 0;
  // check at least once for swaps
  let swapCheck = true;

  while (swapCheck) {
    // assume final swap check
    swapCheck = false;

    // iterate over array elements
    for (let i = 0; i < arr.length; i++) {
      // if element has not expected value
      if (arr[i] !== i + 1) {
        // calculate correct index
        let idx = arr[i] - 1;
        // swap with element at index
        [arr[i], arr[idx]] = [arr[idx], arr[i]];
        // increase swap count
        swapCount++;
        // array was altered; check for swaps
        swapCheck = true;
      }
    }
  }
  return swapCount;
}
