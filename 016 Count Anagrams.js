/**
 * Day 16 of 100DaysOfCode / September 18, 2020
 *
 * Coding challenge:
 * Write a function that takes in a string, and
 * returns the number of pairs of substrings of
 * the string that are anagrams of each other.
 *
 * Solution by Marco van Vemden
 * - Time complexity : O(n^2)
 * - Space complexity: O(n)
 */
function countAnagrams(str) {
  let count = 0;
  // loop sets anagram length; start with 1
  for (let i = 1; i < str.length; i++) {
    // frequency counter for this loop
    const freq = {};
    // loop over string, calculate in anagram length
    for (let j = 0; j < str.length - i + 1; j++) {
      // at index j store next i chars into array
      let anagram = str.substring(j, j + i).split("");
      // sort array and convert to string
      anagram = anagram.sort().join("");
      // set frequency counter for anagram
      freq[anagram] = ++freq[anagram] || 1;
      // increase counter if more than 1 occurrence
      count += freq[anagram] - 1;
    }
  }
  return count;
}

console.log(countAnagrams("mom"));
console.log(countAnagrams("ifailuhkqq"));
console.log(countAnagrams("kkkk"));
