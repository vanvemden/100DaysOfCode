/**
 * Day 1 of 100DaysOfCode / September 3, 2020
 *
 * Coding challenge:
 * Write a function that returns the Nth
 * Fibonacci (fib) number.
 *
 * Solution by Marco van Vemden
 * - Time complexity : O(n)
 * - Space complexity: O(1)
 */
function getNthFib(n) {
  // init array with first two fib numbers
  let fibs = [0, 1];
  // if Nth is 1st or 2nd, return Nth array value
  if (n < 3) return fibs[n - 1];
  // start iteration at 3rd number
  for (let i = 2; i < n; i++) {
    // next fib num is sum of array values
    let fib = fibs[0] + fibs[1];
    // remove N-2, move N-1, and add N value
    [fibs[0], fibs[1]] = [fibs[1], fib];
  }
  // return Nth fib number
  return fibs[1];
}
