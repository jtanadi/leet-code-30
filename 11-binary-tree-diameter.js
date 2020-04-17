/*
Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

Example:
Given a binary tree

          1
         / \
        2   3
       / \     
      4   5    

Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].

Note: The length of path between two nodes is represented by the number of edges between them. 
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// for every node, get height of left child + get height of right child
// and set to max if it's > max

// to get height at node, add 1 to max(height_left_child, height_right_child)
//      3 x
//       / \
//    2 n   y 1
//    /   \
// 1 l   1 r

// to check every node, do BFS

var diameterOfBinaryTree = function (root) {
  let max = 0;

  if (!root) {
    return 0;
  }

  const q = [root];

  while (q.length) {
    const node = q.shift();

    if (node.left) {
      q.push(node.left);
    }

    if (node.right) {
      q.push(node.right);
    }

    const diam = getHeight(node.left) + getHeight(node.right);
    if (diam > max) {
      max = diam;
    }
  }
  return max;
};

const getHeight = (node) => {
  if (!node) return 0;
  else if (!node.left && !node.right) return 1;

  const leftHeight = 1 + getHeight(node.left);
  const rightHeight = 1 + getHeight(node.right);

  return Math.max(leftHeight, rightHeight);
};
