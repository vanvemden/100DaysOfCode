/**
 * Day 4 of 100DaysOfCode / September 6, 2020
 *
 * Coding challenge:
 * Write a function that takes in a two dimensional
 * array of size n x m, and returns a new one (1)
 * dimensional array containing the array elements
 * in spiral order; from the top-left corner all
 * the way to the right, then all the way down,
 * then all the way to the left, then up to the
 * first row, and to the right again. Repeat until
 * every array element has been visited.
 *
 * Solution by Marco van Vemden
 * - Time complexity : O(n)
 * - Space complexity: O(n)
 */
function spiralUnroll(array) {
  const newArray = [];

  // get size of two-dimensional array
  const rows = array.length;
  const cols = array[0].length;

  // set initial array edge values
  const rect = {
    right: cols - 1,
    bottom: rows - 1,
    left: 0,
    top: 1,
  };

  // hor/vert adjustments for right,
  // down, left and up directions
  const dirs = [
    { h: 1, v: 0 },
    { h: 0, v: 1 },
    { h: -1, v: 0 },
    { h: 0, v: -1 },
  ];

  // start position top-left
  const pos = { x: 0, y: 0 };
  // start direction going right
  let dirsIdx = 0;

  // loop for total count of array elements
  for (let i = 0; i < cols * rows; i++) {
    // add value at x,y position to new array
    newArray.push(array[pos.y][pos.x]);

    switch (true) {
      // direction is right and reaching right edge
      case dirsIdx === 0 && pos.x === rect.right:
        rect.right--;
        dirsIdx = 1;
        break;

      // direction is down and reaching bottom edge
      case dirsIdx === 1 && pos.y === rect.bottom:
        rect.bottom--;
        dirsIdx = 2;
        break;

      // direction is left and reaching left edge
      case dirsIdx === 2 && pos.x === rect.left:
        rect.left++;
        dirsIdx = 3;
        break;

      // direction is up and reaching top edge
      case dirsIdx === 3 && pos.y === rect.top:
        rect.top++;
        dirsIdx = 0;
        break;
    }

    // next x,y position in current direction
    pos.x += dirs[dirsIdx].h;
    pos.y += dirs[dirsIdx].v;
  }

  return newArray;
}
