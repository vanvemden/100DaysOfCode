/**
 * Day 3 of 100DaysOfCode / September 5, 2020
 *
 * Coding challenge:
 * Write a function that takes in an array of
 * integers and an integer, and moves all the
 * instances of that integer to the end of the
 * array. The function performs the actions in
 * place and returns the array. The function
 * does not need to maintain the order of the
 * other integers.
 *
 * Solution by Marco van Vemden
 * - Time complexity : O(n)
 * - Space complexity: O(1)
 */
function moveNumbersToEnd(array, toMove) {
  // set index of left character
  let left = 0;
  // set index of far right character
  let right = array.length - 1;
  // loop while indexes are equal
  while (left < right) {
    // check if number needs to move
    if (array[left] === toMove) {
      // swap left number with number to the far right
      [array[left], array[right]] = [array[right], array[left]];
      // move right index 1 position to left
      right--;
    } else {
      // don't move number; increase left index
      left++;
    }
  }
  return array;
}
