/*
Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:

Input: [2,2,1]
Output: 1

Example 2:

Input: [4,1,2,1,2]
Output: 4
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const memo = {};
  for (const num of nums) {
    if (!memo[num]) {
      memo[num] = 1;
    } else {
      memo[num] += 1;
    }
  }

  return Object.keys(memo).find((key) => memo[key] === 1);
};
