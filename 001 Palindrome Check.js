/**
 * Day 1 of 100DaysOfCode / September 3, 2020
 *
 * Coding challenge:
 * Write a function that takes a non-empty string
 * and returns true/false whether the string is a
 * palindrome.
 *
 * Solution by Marco van Vemden
 * - Time complexity : O(n)
 * - Space complexity: O(1)
 */
function isPalindrome(string) {
  // pointer to calculate left and right character index
  let pointer = 0;
  let length = string.length;
  // iterate while more than 1 character not compared
  while (length - pointer * 2 > 1) {
    // check if characters at left and right index match
    if (string[pointer] !== string[length - 1 - pointer]) return false;
    // move pointer to next characters
    pointer++;
  }
  return true;
}
