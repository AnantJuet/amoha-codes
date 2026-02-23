import React from 'react';

const BSTDelete: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Delete in Binary Search Tree
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Deleting a node from a BST is more complex than insertion because we need to maintain the BST
      property after removal. The complexity depends on whether the node to be deleted has zero, one,
      or two children.
    </p>

    <h2 className="text-2xl font-bold mt-6">Three Cases in BST Deletion</h2>
    <div className="space-y-4 mt-4">
      <div className="bg-green-50 p-4 rounded-lg">
        <h4 className="font-bold">Case 1: Node has no children (Leaf node)</h4>
        <p>Simply remove the node by setting parent's reference to null.</p>
      </div>
      <div className="bg-yellow-50 p-4 rounded-lg">
        <h4 className="font-bold">Case 2: Node has one child</h4>
        <p>Replace the node with its only child.</p>
      </div>
      <div className="bg-red-50 p-4 rounded-lg">
        <h4 className="font-bold">Case 3: Node has two children</h4>
        <p>Find inorder successor (or predecessor), copy its value, then delete the successor.</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Visual Examples</h2>
    <div className="bg-gray-50 p-4 rounded-lg mt-4">
      <pre className="text-sm">{`Case 1: Delete 1 (leaf node)
     8              8
    / \\            / \\
   3   10   =>    3   10
  / \\              \\
 1   6              6

Case 2: Delete 10 (one child)
     8              8
    / \\            / \\
   3   10   =>    3   14
  / \\    \\       / \\
 1   6    14    1   6

Case 3: Delete 3 (two children)
     8              8
    / \\            / \\
   3   10   =>    4   10
  / \\    \\       / \\    \\
 1   6    14    1   6    14
    /
   4

Replace 3 with inorder successor (4), then delete 4`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Finding Inorder Successor</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Inorder successor: smallest node in right subtree
// (leftmost node in right subtree)
function findMin(node) {
    while (node.left !== null) {
        node = node.left;
    }
    return node;
}

// Alternative: Inorder predecessor
// Largest node in left subtree (rightmost node in left subtree)
function findMax(node) {
    while (node.right !== null) {
        node = node.right;
    }
    return node;
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Recursive Implementation</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function deleteNode(root, key) {
    if (root === null) {
        return null;
    }

    // Find the node to delete
    if (key < root.val) {
        root.left = deleteNode(root.left, key);
    } else if (key > root.val) {
        root.right = deleteNode(root.right, key);
    } else {
        // Node found - handle deletion

        // Case 1 & 2: Node has 0 or 1 child
        if (root.left === null) {
            return root.right;
        }
        if (root.right === null) {
            return root.left;
        }

        // Case 3: Node has 2 children
        // Find inorder successor (min in right subtree)
        const successor = findMin(root.right);

        // Copy successor's value to current node
        root.val = successor.val;

        // Delete the successor from right subtree
        root.right = deleteNode(root.right, successor.val);
    }

    return root;
}

function findMin(node) {
    while (node.left !== null) {
        node = node.left;
    }
    return node;
}

// Example usage:
// delete 3 from:
//       8
//      / \\
//     3   10
//    / \\
//   1   6
//      /
//     4
//
// Result:
//       8
//      / \\
//     4   10
//    / \\
//   1   6`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Using Predecessor Instead</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Alternative: Use inorder predecessor
function deleteNodeWithPredecessor(root, key) {
    if (root === null) return null;

    if (key < root.val) {
        root.left = deleteNodeWithPredecessor(root.left, key);
    } else if (key > root.val) {
        root.right = deleteNodeWithPredecessor(root.right, key);
    } else {
        if (root.left === null) return root.right;
        if (root.right === null) return root.left;

        // Find inorder predecessor (max in left subtree)
        const predecessor = findMax(root.left);

        // Copy predecessor's value
        root.val = predecessor.val;

        // Delete predecessor from left subtree
        root.left = deleteNodeWithPredecessor(root.left, predecessor.val);
    }

    return root;
}

function findMax(node) {
    while (node.right !== null) {
        node = node.right;
    }
    return node;
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Iterative Implementation</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function deleteNodeIterative(root, key) {
    let parent = null;
    let current = root;

    // Find the node to delete
    while (current !== null && current.val !== key) {
        parent = current;
        if (key < current.val) {
            current = current.left;
        } else {
            current = current.right;
        }
    }

    // Node not found
    if (current === null) return root;

    // Case 1 & 2: Node has at most one child
    if (current.left === null || current.right === null) {
        const child = current.left !== null
            ? current.left
            : current.right;

        if (parent === null) {
            // Deleting root
            return child;
        }

        if (parent.left === current) {
            parent.left = child;
        } else {
            parent.right = child;
        }
    } else {
        // Case 3: Node has two children
        // Find inorder successor and its parent
        let successorParent = current;
        let successor = current.right;

        while (successor.left !== null) {
            successorParent = successor;
            successor = successor.left;
        }

        // Copy successor value
        current.val = successor.val;

        // Delete successor
        if (successorParent.left === successor) {
            successorParent.left = successor.right;
        } else {
            successorParent.right = successor.right;
        }
    }

    return root;
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Time and Space Complexity</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Approach</th>
            <th className="p-3 border">Time (Average)</th>
            <th className="p-3 border">Time (Worst)</th>
            <th className="p-3 border">Space</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Recursive</td>
            <td className="p-3 border">O(log n)</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(h)</td>
          </tr>
          <tr>
            <td className="p-3 border">Iterative</td>
            <td className="p-3 border">O(log n)</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(1)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Special Cases</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Delete minimum node
function deleteMin(root) {
    if (root === null) return null;

    if (root.left === null) {
        return root.right;
    }

    root.left = deleteMin(root.left);
    return root;
}

// Delete maximum node
function deleteMax(root) {
    if (root === null) return null;

    if (root.right === null) {
        return root.left;
    }

    root.right = deleteMax(root.right);
    return root;
}

// Delete all nodes with value in range [low, high]
function deleteRange(root, low, high) {
    if (root === null) return null;

    // First process children
    root.left = deleteRange(root.left, low, high);
    root.right = deleteRange(root.right, low, high);

    // Then check current node
    if (root.val >= low && root.val <= high) {
        return deleteNode(root, root.val);
    }

    return root;
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Deletion Strategies Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Strategy</th>
            <th className="p-3 border">Replacement Node</th>
            <th className="p-3 border">Pros</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Inorder Successor</td>
            <td className="p-3 border">Min of right subtree</td>
            <td className="p-3 border">Maintains BST property</td>
          </tr>
          <tr>
            <td className="p-3 border">Inorder Predecessor</td>
            <td className="p-3 border">Max of left subtree</td>
            <td className="p-3 border">Alternative, equally valid</td>
          </tr>
          <tr>
            <td className="p-3 border">Random choice</td>
            <td className="p-3 border">Either successor or predecessor</td>
            <td className="p-3 border">Helps maintain balance over time</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Common Mistakes to Avoid</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Forgetting to handle the case when node to delete is root</li>
      <li>Not properly connecting parent to child after deletion</li>
      <li>Confusing successor with predecessor</li>
      <li>Not deleting the successor after copying its value</li>
      <li>Memory leaks (in languages without garbage collection)</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Key Points to Remember</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Three cases: no children, one child, two children</li>
      <li>Leaf nodes are simply removed</li>
      <li>Single-child nodes are replaced by their child</li>
      <li>Two-child nodes use successor/predecessor replacement</li>
      <li>Inorder successor is the minimum in right subtree</li>
      <li>Inorder predecessor is the maximum in left subtree</li>
      <li>Always maintain BST property after deletion</li>
    </ul>
  </div>
);

export default BSTDelete;
