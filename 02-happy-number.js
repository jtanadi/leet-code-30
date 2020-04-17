/*
Write an algorithm to determine if a number n is "happy".

A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

Return True if n is a happy number, and False if not.

Example: 

Input: 19
Output: true
Explanation: 
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
*/

/**
 * @param {number} n
 * @return {boolean}
 */
const splitToDigits = (n) => {
  const strArr = n.toString().split("");
  return strArr.map((s) => parseInt(s));
};

const squareAndSum = (arr) => {
  return arr.reduce((acc, num) => {
    return acc + num ** 2;
  }, 0);
};

const MAXCOUNT = 1000; // this is a cheat...
var isHappy = function (n) {
  let s = squareAndSum(splitToDigits(n));
  let counter = 0;
  while (counter < MAXCOUNT && s !== 1) {
    s = squareAndSum(splitToDigits(s));
    counter++;
  }

  return counter < MAXCOUNT;
};
