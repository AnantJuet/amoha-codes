import React from 'react';

const CheckBST: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Check if Tree is BST
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Validating whether a binary tree is a valid Binary Search Tree is a common interview problem.
      A valid BST must satisfy the property that for every node, all values in its left subtree
      are less than the node's value, and all values in its right subtree are greater.
    </p>

    <h2 className="text-2xl font-bold mt-6">Common Mistake</h2>
    <div className="bg-red-50 p-4 rounded-lg mt-4">
      <p className="font-bold">Wrong Approach: Only checking immediate children</p>
      <pre className="text-center mt-4">{`       10
      /  \\
     5    15
    / \\
   1   11   <- 11 > 10, but still in left subtree!

This is NOT a valid BST, but checking only
(left.val < node.val < right.val) would miss it.`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">BST Property</h2>
    <div className="bg-blue-50 p-4 rounded-lg mt-4">
      <p>For a valid BST, every node must satisfy:</p>
      <ul className="list-disc list-inside mt-2">
        <li><strong>All</strong> nodes in left subtree &lt; current node value</li>
        <li><strong>All</strong> nodes in right subtree &gt; current node value</li>
        <li>Both left and right subtrees must also be valid BSTs</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold mt-6">Approach 1: Using Range (Min-Max)</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Pass valid range for each node
function isValidBST(root) {
    return validate(root, -Infinity, Infinity);
}

function validate(node, min, max) {
    // Empty tree is valid
    if (node === null) return true;

    // Check if current node is within valid range
    if (node.val <= min || node.val >= max) {
        return false;
    }

    // For left subtree: max becomes current value
    // For right subtree: min becomes current value
    return validate(node.left, min, node.val) &&
           validate(node.right, node.val, max);
}

// Example trace for valid BST:
//       10
//      /  \\
//     5    15
//    / \\   / \\
//   1   7 12  20
//
// validate(10, -Inf, Inf) -> true, check children
// validate(5, -Inf, 10) -> true
// validate(15, 10, Inf) -> true
// All nodes pass their range check -> Valid BST`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Approach 2: Inorder Traversal</h2>
    <p className="leading-relaxed">
      The inorder traversal of a valid BST produces a strictly increasing sequence.
      If at any point the current value is not greater than the previous, it's not a valid BST.
    </p>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Using inorder traversal - values should be strictly increasing
function isValidBSTInorder(root) {
    let prev = -Infinity;

    function inorder(node) {
        if (node === null) return true;

        // Check left subtree
        if (!inorder(node.left)) return false;

        // Check current node against previous
        if (node.val <= prev) return false;
        prev = node.val;

        // Check right subtree
        return inorder(node.right);
    }

    return inorder(root);
}

// Iterative inorder version
function isValidBSTIterative(root) {
    const stack = [];
    let prev = -Infinity;
    let current = root;

    while (current !== null || stack.length > 0) {
        // Go to leftmost
        while (current !== null) {
            stack.push(current);
            current = current.left;
        }

        current = stack.pop();

        // Check BST property
        if (current.val <= prev) {
            return false;
        }
        prev = current.val;

        current = current.right;
    }

    return true;
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Approach 3: Using Previous Node Reference</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Track previous node instead of value
function isValidBSTWithPrev(root) {
    let prev = null;

    function inorder(node) {
        if (node === null) return true;

        if (!inorder(node.left)) return false;

        if (prev !== null && node.val <= prev.val) {
            return false;
        }
        prev = node;

        return inorder(node.right);
    }

    return inorder(root);
}

// This approach handles edge cases with MIN_VALUE better`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Handling Duplicates</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// If duplicates are allowed on the left
function isValidBSTWithDuplicatesLeft(root) {
    return validate(root, -Infinity, Infinity);
}

function validate(node, min, max) {
    if (node === null) return true;

    // Note: node.val can equal min (duplicate on left allowed)
    if (node.val < min || node.val >= max) {
        return false;
    }

    return validate(node.left, min, node.val) &&
           validate(node.right, node.val, max);
}

// If duplicates are allowed on the right
function isValidBSTWithDuplicatesRight(root) {
    function validate(node, min, max) {
        if (node === null) return true;

        // Note: node.val can equal max (duplicate on right allowed)
        if (node.val <= min || node.val > max) {
            return false;
        }

        return validate(node.left, min, node.val) &&
               validate(node.right, node.val, max);
    }

    return validate(root, -Infinity, Infinity);
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
            <td className="p-3 border">Range (Min-Max)</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(h)</td>
          </tr>
          <tr>
            <td className="p-3 border">Inorder (Recursive)</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(h)</td>
          </tr>
          <tr>
            <td className="p-3 border">Inorder (Iterative)</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(h)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Edge Cases</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Test cases to consider:

// 1. Empty tree -> valid
isValidBST(null); // true

// 2. Single node -> valid
//    5
isValidBST(new TreeNode(5)); // true

// 3. Two nodes
//    2        1
//   /   vs    \\
//  1           2
// Both valid

// 4. Node with Integer.MIN_VALUE or MAX_VALUE
// Use null/prev node approach instead of -Infinity

// 5. All same values
//    5
//   / \\
//  5   5
// NOT valid (left must be strictly less)

// 6. Only left children (valid if descending)
//      5
//     /
//    3
//   /
//  1
// Valid BST`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Related Problems</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Find all BST violations
function findViolations(root) {
    const violations = [];

    function validate(node, min, max) {
        if (node === null) return;

        if (node.val <= min || node.val >= max) {
            violations.push(node.val);
        }

        validate(node.left, min, node.val);
        validate(node.right, node.val, max);
    }

    validate(root, -Infinity, Infinity);
    return violations;
}

// Count nodes that violate BST property
function countViolations(root) {
    let count = 0;

    function validate(node, min, max) {
        if (node === null) return;

        if (node.val <= min || node.val >= max) {
            count++;
        }

        validate(node.left, min, Math.min(max, node.val));
        validate(node.right, Math.max(min, node.val), max);
    }

    validate(root, -Infinity, Infinity);
    return count;
}

// Recover BST (swap two nodes to fix)
function recoverTree(root) {
    let first = null, second = null, prev = null;

    function inorder(node) {
        if (node === null) return;

        inorder(node.left);

        if (prev !== null && prev.val > node.val) {
            if (first === null) first = prev;
            second = node;
        }
        prev = node;

        inorder(node.right);
    }

    inorder(root);

    // Swap values of first and second
    [first.val, second.val] = [second.val, first.val];
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Key Points to Remember</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Check ALL nodes in subtree, not just immediate children</li>
      <li>Use min-max range or inorder traversal approach</li>
      <li>Inorder traversal of valid BST is strictly increasing</li>
      <li>Handle edge cases: empty tree, single node, MIN/MAX values</li>
      <li>Be clear about duplicate handling in requirements</li>
      <li>Both approaches have O(n) time and O(h) space</li>
    </ul>
  </div>
);

export default CheckBST;
