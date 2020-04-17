/*
Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

Example 1:

Input: S = "ab#c", T = "ad#c"
Output: true
Explanation: Both S and T become "ac".

Example 2:

Input: S = "ab##", T = "c#d#"
Output: true
Explanation: Both S and T become "".

Example 3:

Input: S = "a##c", T = "#a#c"
Output: true
Explanation: Both S and T become "c".

Example 4:

Input: S = "a#c", T = "b"
Output: false
Explanation: S becomes "c" while T becomes "b".

Note:

1 <= S.length <= 200
1 <= T.length <= 200
S and T only contain lowercase letters and '#' characters.
*/

/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function (S, T) {
  const sStack = createStack(S);
  const tStack = createStack(T);

  if (sStack.length !== tStack.length) return false;

  for (let i = 0; i < sStack.length; i++) {
    if (sStack[i] !== tStack[i]) return false;
  }

  return true;
};

const createStack = (str) => {
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    if (stack.length && str[i] === "#") {
      stack.pop();
    } else if (str[i] !== "#") {
      stack.push(str[i]);
    }
  }
  return stack;
};
