/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

Follow up:

If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
// naive approach
// iterate through array
// for each item, iterate through array, starting at i+1
// sum and keep track
// if new sum is larger than sum, replace sum with new sum

var maxSubArray = function (nums) {
  let sum = nums[0];

  for (let i = 0; i < nums.length; i++) {
    let tempSum = nums[i];
    if (tempSum > sum) {
      sum = tempSum;
    }

    for (let j = i + 1; j < nums.length; j++) {
      tempSum += nums[j];

      if (tempSum > sum) {
        sum = tempSum;
      }
    }
  }

  return sum;
};
