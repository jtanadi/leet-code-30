/*
Given an array of strings, group anagrams together.

Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]

Note:

    All inputs will be in lowercase.
    The order of your output does not matter.
*/

function isAnagram(w1, w2) {
  if (w1.length !== w2.length) return false;
  const letters = {};
  const w1arr = w1.split("");
  const w2arr = w2.split("");

  for (const letter of w1arr) {
    if (!letters[letter]) {
      letters[letter] = 1;
    } else {
      letters[letter] += 1;
    }
  }

  for (const letter of w2arr) {
    if (!letters[letter]) {
      return false;
    }
    letters[letter] -= 1;
  }
  return true;
}

var groupAnagrams = function (strs) {
  const finalArr = [];

  while (strs.length) {
    const word = strs.pop();
    let wordArr = [word];

    let i = 0;
    while (i < strs.length) {
      if (isAnagram(word, strs[i])) {
        const newWord = strs.splice(i, 1);
        wordArr = wordArr.concat(newWord);
      } else {
        i++;
      }
    }

    finalArr.push(wordArr);
  }

  return finalArr;
};
