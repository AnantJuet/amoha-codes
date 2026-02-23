import React from 'react';

const BalancedTree: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Check if Tree is Balanced
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A height-balanced binary tree is defined as a tree in which the height of the left and right
      subtrees of every node differs by at most one. Balanced trees ensure O(log n) time complexity
      for operations like search, insert, and delete.
    </p>

    <h2 className="text-2xl font-bold mt-6">Understanding Balanced Trees</h2>
    <div className="bg-gray-50 p-4 rounded-lg mt-4">
      <pre className="text-center">{`Balanced:              Not Balanced:
      1                      1
     / \\                    /
    2   3                  2
   / \\                    /
  4   5                  3

Height diff at each node <= 1    Height diff at node 1 = 2`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Definition</h2>
    <div className="bg-blue-50 p-4 rounded-lg mt-4">
      <p>A binary tree is balanced if and only if:</p>
      <ul className="list-disc list-inside mt-2">
        <li>The left subtree is balanced</li>
        <li>The right subtree is balanced</li>
        <li>|height(left) - height(right)| &lt;= 1</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold mt-6">Naive Approach - O(n^2)</h2>
    <p className="leading-relaxed">
      For each node, calculate the heights of left and right subtrees and check the difference.
      This approach recalculates heights multiple times.
    </p>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Naive approach - O(n^2) time complexity
function height(node) {
    if (node === null) return 0;
    return 1 + Math.max(height(node.left), height(node.right));
}

function isBalancedNaive(root) {
    if (root === null) return true;

    // Check height difference at current node
    const leftHeight = height(root.left);
    const rightHeight = height(root.right);

    if (Math.abs(leftHeight - rightHeight) > 1) {
        return false;
    }

    // Recursively check both subtrees
    return isBalancedNaive(root.left) && isBalancedNaive(root.right);
}

// Problem: height() is called for every node,
// and each call traverses the entire subtree
// Time: O(n^2) in worst case (skewed tree)`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Optimized Approach - O(n)</h2>
    <p className="leading-relaxed">
      Check balance while calculating height in a single traversal. Return -1 if any subtree is
      unbalanced to propagate the result upward.
    </p>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Optimized approach - O(n) time complexity
function isBalanced(root) {
    // Returns height if balanced, -1 if not balanced
    function checkHeight(node) {
        if (node === null) return 0;

        // Check left subtree
        const leftHeight = checkHeight(node.left);
        if (leftHeight === -1) return -1; // Left subtree not balanced

        // Check right subtree
        const rightHeight = checkHeight(node.right);
        if (rightHeight === -1) return -1; // Right subtree not balanced

        // Check current node balance
        if (Math.abs(leftHeight - rightHeight) > 1) {
            return -1; // Current node not balanced
        }

        // Return height of current node
        return 1 + Math.max(leftHeight, rightHeight);
    }

    return checkHeight(root) !== -1;
}

// Example trace:
//       1
//      / \\
//     2   3
//    / \\
//   4   5
//
// checkHeight(4) = 1
// checkHeight(5) = 1
// checkHeight(2) = 2 (|1-1| <= 1, balanced)
// checkHeight(3) = 1
// checkHeight(1) = 3 (|2-1| <= 1, balanced)
// Returns true`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Alternative: Return Object</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Using object to return both height and balance status
function isBalancedWithObject(root) {
    function check(node) {
        if (node === null) {
            return { height: 0, balanced: true };
        }

        const left = check(node.left);
        const right = check(node.right);

        const balanced = left.balanced &&
                        right.balanced &&
                        Math.abs(left.height - right.height) <= 1;

        const height = 1 + Math.max(left.height, right.height);

        return { height, balanced };
    }

    return check(root).balanced;
}

// Using array [height, isBalanced]
function isBalancedWithArray(root) {
    function check(node) {
        if (node === null) return [0, true];

        const [lh, lb] = check(node.left);
        const [rh, rb] = check(node.right);

        const height = 1 + Math.max(lh, rh);
        const balanced = lb && rb && Math.abs(lh - rh) <= 1;

        return [height, balanced];
    }

    return check(root)[1];
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Iterative Approach</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Iterative using postorder traversal
function isBalancedIterative(root) {
    if (root === null) return true;

    const stack = [];
    const heights = new Map();
    let node = root;
    let lastVisited = null;

    while (stack.length > 0 || node !== null) {
        if (node !== null) {
            stack.push(node);
            node = node.left;
        } else {
            const peekNode = stack[stack.length - 1];

            if (peekNode.right !== null && peekNode.right !== lastVisited) {
                node = peekNode.right;
            } else {
                // Process the node
                const leftHeight = heights.get(peekNode.left) || 0;
                const rightHeight = heights.get(peekNode.right) || 0;

                if (Math.abs(leftHeight - rightHeight) > 1) {
                    return false;
                }

                heights.set(peekNode, 1 + Math.max(leftHeight, rightHeight));
                lastVisited = stack.pop();
            }
        }
    }

    return true;
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Time and Space Complexity</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Approach</th>
            <th className="p-3 border">Time</th>
            <th className="p-3 border">Space</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Naive</td>
            <td className="p-3 border">O(n^2)</td>
            <td className="p-3 border">O(h)</td>
          </tr>
          <tr>
            <td className="p-3 border">Optimized (Return -1)</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(h)</td>
          </tr>
          <tr>
            <td className="p-3 border">Iterative</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(n)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Types of Balanced Trees</h2>
    <div className="space-y-4 mt-4">
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">1. Height-Balanced (AVL)</h4>
        <p>Height difference between left and right subtrees is at most 1 for every node.</p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">2. Weight-Balanced</h4>
        <p>Number of nodes in left and right subtrees differ by at most a constant factor.</p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">3. Red-Black Tree</h4>
        <p>A relaxed form of balance with color properties ensuring O(log n) height.</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Related Problems</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Convert sorted array to balanced BST
function sortedArrayToBST(nums) {
    function build(left, right) {
        if (left > right) return null;

        const mid = Math.floor((left + right) / 2);
        const node = new TreeNode(nums[mid]);

        node.left = build(left, mid - 1);
        node.right = build(mid + 1, right);

        return node;
    }

    return build(0, nums.length - 1);
}

// Balance an unbalanced BST
function balanceBST(root) {
    // Step 1: Get sorted array via inorder
    const nodes = [];
    function inorder(node) {
        if (node === null) return;
        inorder(node.left);
        nodes.push(node.val);
        inorder(node.right);
    }
    inorder(root);

    // Step 2: Build balanced BST from sorted array
    return sortedArrayToBST(nodes);
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Why Balance Matters</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Operation</th>
            <th className="p-3 border">Balanced Tree</th>
            <th className="p-3 border">Skewed Tree</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Search</td>
            <td className="p-3 border">O(log n)</td>
            <td className="p-3 border">O(n)</td>
          </tr>
          <tr>
            <td className="p-3 border">Insert</td>
            <td className="p-3 border">O(log n)</td>
            <td className="p-3 border">O(n)</td>
          </tr>
          <tr>
            <td className="p-3 border">Delete</td>
            <td className="p-3 border">O(log n)</td>
            <td className="p-3 border">O(n)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Key Points to Remember</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Balance condition: |leftHeight - rightHeight| &lt;= 1 for all nodes</li>
      <li>Naive approach is O(n^2), optimized is O(n)</li>
      <li>Use -1 as sentinel to indicate unbalanced subtree</li>
      <li>Balanced trees guarantee O(log n) operations</li>
      <li>AVL and Red-Black trees maintain balance automatically</li>
      <li>Can convert any BST to balanced BST via inorder + rebuild</li>
    </ul>
  </div>
);

export default BalancedTree;
