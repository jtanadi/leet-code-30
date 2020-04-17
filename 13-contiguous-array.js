/*
Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1.

Example 1:

Input: [0,1]
Output: 2
Explanation: [0, 1] is the longest contiguous subarray with equal number of 0 and 1.

Example 2:

Input: [0,1,0]
Output: 2
Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.

Note: The length of the given binary array will not exceed 50,000. 
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

// [0, 1, 0, 1] => 4
// [0, 1] => 2
// [0, 0, 0, 1, 0, 1, 1, 1, 0, 0] => 8
// [0, 0, 1, 1, 1, 0, 0, 0] => 6 => [0, 0, 1, 1, 1, 0] and [1, 1, 1, 0, 0, 0]

// [0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1] => 14
var findMaxLength = function (nums) {
  let count = 0;
  let max = 0;
  let count_cache = { 0: -1 };

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      count--;
    } else {
      count++;
    }

    if (count_cache[count] !== undefined) {
      max = Math.max(max, i - count_cache[count]);
    } else {
      count_cache[count] = i;
    }
  }

  return max;
};

var findMaxLengthBrute = function (nums) {
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    let num0s = 0;
    let num1s = 0;

    if (nums[i] === 0) {
      num0s++;
    } else {
      num1s++;
    }

    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === 0) {
        num0s++;
      } else {
        num1s++;
      }

      if (num0s === num1s && num0s + num1s > max) {
        max = num0s + num1s;
      }
    }
  }
  return max;
};
