/**
 * Day 5 of 100DaysOfCode / September 7, 2020
 *
 * Coding challenge:
 * Write a function that takes in an array of
 * integers and a number as the length of a
 * subarray. The function finds the maximum
 * sum of consecutive numbers for the length of
 * the subarray, and returns the maximum sum.
 *
 * Solution by Marco van Vemden
 * - Time complexity : O(n)
 * - Space complexity: O(1)
 */
function maxSubarraySum(arr, subLen) {
  let subSum = 0;
  let maxSum = 0;

  // set initial sum for subarray length
  for (let i = 0; i < subLen; i++) {
    subSum += arr[i];
  }
  // set initial maximum sum to subarray sum
  maxSum = subSum;

  // iterate over remaining numbers in array
  for (let i = subLen; i < arr.length; i++) {
    // subtract first number and add current number
    subSum = subSum - arr[i - subLen] + arr[i];
    // update maximum sum if less than subarray sum
    maxSum = Math.max(maxSum, subSum);
  }

  return maxSum;
}
