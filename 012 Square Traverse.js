/**
 * Day 12 of 100DaysOfCode / September 14, 2020
 *
 * Coding challenge:
 * Write a function that takes in a SQUARE two
 * dimensional array (n x n), and returns a new
 * one (1) dimensional array containing the array
 * elements in spiral order; starting from the
 * top-left corner, and going all the way right,
 * down, left, and up. Repeat until
 * every array element has been visited.
 *
 * Solution by Marco van Vemden
 * - Time complexity : O(n)
 * - Space complexity: O(n)
 */
function squareTraverse(array) {
  const values = [];

  // set initial traverse parameters
  let top = 0;
  let right = array[0].length - 1;
  let bottom = array.length - 1;
  let left = 0;

  while (top <= bottom && left <= right) {
    // Traverse top row, left to right, by step of 1
    traverse("row", top, left, right, 1, array, values);
    top++;
    traverse("col", right, top, bottom, 1, array, values);
    right--;
    traverse("row", bottom, right, left, -1, array, values);
    bottom--;
    traverse("col", left, bottom, top, -1, array, values);
    left++;
  }

  return values;
}

function traverse(line, number, from, to, step, array, values) {
  while (step > 0 ? from <= to : from >= to) {
    // pick value from index in array row or array column
    let val = line === "row" ? array[number][from] : array[from][number];
    values.push(val);
    // step 1 for right/down, step -1 for left/up
    from += step;
  }
}

let array = [[1]];
console.log(squareTraverse(array));

array = [
  [1, 2],
  [4, 3],
];
console.log(squareTraverse(array));

array = [
  [1, 2, 3],
  [8, 9, 4],
  [7, 6, 5],
];
console.log(squareTraverse(array));

array = [
  [1, 2, 3, 4],
  [12, 13, 14, 5],
  [11, 16, 15, 6],
  [10, 9, 8, 7],
];

console.log(squareTraverse(array));
