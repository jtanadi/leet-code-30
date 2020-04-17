/*
Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

Input:
11110
11010
11000
00000

Output: 1

Example 2:

Input:
11000
11000
00100
00011

Output: 3
*/

/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = (grid) => {
  let num = 0;
  for (let i = 0; i < grid.length; i++) {
    const row = grid[i];
    for (let j = 0; j < row.length; j++) {
      num += numIslandsHelper(grid, i, j);
    }
  }
  return num;
};

const numIslandsHelper = (grid, rowIdx, cellIdx) => {
  if (grid[rowIdx][cellIdx] === "1") {
    grid[rowIdx][cellIdx] = "2";

    const rowUp = rowIdx - 1;
    const rowBelow = rowIdx + 1;
    const cellRight = cellIdx + 1;
    const cellLeft = cellIdx - 1;

    // check top
    // if top === 1, go there
    if (grid[rowUp] && grid[rowUp][cellIdx] === "1") {
      numIslandsHelper(grid, rowUp, cellIdx);
    }

    // check right
    if (grid[rowIdx][cellRight] && grid[rowIdx][cellRight] === "1") {
      numIslandsHelper(grid, rowIdx, cellRight);
    }

    // check bottom
    if (grid[rowBelow] && grid[rowBelow][cellIdx] === "1") {
      numIslandsHelper(grid, rowBelow, cellIdx);
    }

    // check left
    if (grid[rowIdx] && grid[rowIdx][cellLeft] === "1") {
      numIslandsHelper(grid, rowIdx, cellLeft);
    }

    // if can't go anywhere, return 1
    if (
      (!grid[rowUp] || !grid[rowUp][cellIdx] !== "1") &&
      grid[rowIdx][cellRight] !== "1" &&
      (!grid[rowBelow] || !grid[rowBelow][cellIdx] !== "1") &&
      grid[rowIdx][cellLeft] !== "1"
    ) {
      return 1;
    }
  }
  return 0;
};

const printGrid = (grid) => {
  for (const row of grid) {
    console.log(row);
  }
  console.log();
};

const g = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];

console.log(numIslands(g));
