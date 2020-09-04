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
  // pointer to calculate left/right char index
  let ptr = 0;
  let len = string.length;
  // loop while more than 1 char to compare
  while (len - ptr * 2 > 1) {
    // if left/right pointer chars don't match; no palindrome
    if (string[ptr] !== string[len - 1 - ptr]) return false;
    // continue; move pointer to next left/right char
    ptr++;
  }
  // all left/right chars match; is palindrome
  return true;
}
