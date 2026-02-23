import React from 'react';

const InorderSuccessor: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Inorder Successor in BST
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The inorder successor of a node in a BST is the node with the smallest value greater than the
      given node's value. In other words, it is the next node that would be visited in an inorder
      traversal. Understanding inorder successor is crucial for BST operations like deletion.
    </p>

    <h2 className="text-2xl font-bold mt-6">Understanding Inorder Successor</h2>
    <div className="bg-gray-50 p-4 rounded-lg mt-4">
      <pre className="text-center">{`        20
       /  \\
      8    22
     / \\
    4   12
       /  \\
      10   14

Inorder: 4, 8, 10, 12, 14, 20, 22

Successor of 4 = 8
Successor of 8 = 10
Successor of 10 = 12
Successor of 14 = 20
Successor of 22 = null (no successor)`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Two Cases for Finding Successor</h2>
    <div className="space-y-4 mt-4">
      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-bold">Case 1: Node has a right subtree</h4>
        <p>Successor is the leftmost (minimum) node in the right subtree.</p>
        <p className="text-sm mt-1">Example: Successor of 8 is 10 (leftmost in right subtree of 8)</p>
      </div>
      <div className="bg-green-50 p-4 rounded-lg">
        <h4 className="font-bold">Case 2: Node has no right subtree</h4>
        <p>Successor is the lowest ancestor for which the node is in the left subtree.</p>
        <p className="text-sm mt-1">Example: Successor of 14 is 20 (go up until we come from left)</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Implementation Without Parent Pointer</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Find inorder successor without parent pointer
function inorderSuccessor(root, p) {
    let successor = null;

    while (root !== null) {
        if (p.val < root.val) {
            // Current node could be successor
            successor = root;
            root = root.left;
        } else {
            // p.val >= root.val, go right
            root = root.right;
        }
    }

    return successor;
}

// Alternative: Handle both cases explicitly
function inorderSuccessorExplicit(root, p) {
    // Case 1: Node has right subtree
    if (p.right !== null) {
        let current = p.right;
        while (current.left !== null) {
            current = current.left;
        }
        return current;
    }

    // Case 2: No right subtree
    // Find the deepest ancestor where p is in left subtree
    let successor = null;
    let current = root;

    while (current !== null) {
        if (p.val < current.val) {
            successor = current;
            current = current.left;
        } else if (p.val > current.val) {
            current = current.right;
        } else {
            break; // Found the node
        }
    }

    return successor;
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Implementation With Parent Pointer</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// When nodes have parent pointers
function inorderSuccessorWithParent(node) {
    if (node === null) return null;

    // Case 1: Has right subtree
    if (node.right !== null) {
        let current = node.right;
        while (current.left !== null) {
            current = current.left;
        }
        return current;
    }

    // Case 2: Go up until we come from left child
    let parent = node.parent;
    while (parent !== null && node === parent.right) {
        node = parent;
        parent = parent.parent;
    }

    return parent;
}

// Example trace for successor of 14:
//        20
//       /  \\
//      8    22
//     / \\
//    4   12
//       /  \\
//      10   14
//
// 14 has no right child
// 14 is right child of 12, go up
// 12 is right child of 8, go up
// 8 is left child of 20, return 20`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Inorder Predecessor</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Find inorder predecessor (previous node in inorder)
function inorderPredecessor(root, p) {
    let predecessor = null;

    while (root !== null) {
        if (p.val > root.val) {
            // Current node could be predecessor
            predecessor = root;
            root = root.right;
        } else {
            // p.val <= root.val, go left
            root = root.left;
        }
    }

    return predecessor;
}

// With parent pointer
function inorderPredecessorWithParent(node) {
    if (node === null) return null;

    // Case 1: Has left subtree - find max in left subtree
    if (node.left !== null) {
        let current = node.left;
        while (current.right !== null) {
            current = current.right;
        }
        return current;
    }

    // Case 2: Go up until we come from right child
    let parent = node.parent;
    while (parent !== null && node === parent.left) {
        node = parent;
        parent = parent.parent;
    }

    return parent;
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Finding Successor of a Value</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Find successor of a value (node may not exist)
function successorOfValue(root, val) {
    let successor = null;

    while (root !== null) {
        if (val < root.val) {
            successor = root;
            root = root.left;
        } else {
            root = root.right;
        }
    }

    return successor ? successor.val : null;
}

// Find predecessor of a value
function predecessorOfValue(root, val) {
    let predecessor = null;

    while (root !== null) {
        if (val > root.val) {
            predecessor = root;
            root = root.right;
        } else {
            root = root.left;
        }
    }

    return predecessor ? predecessor.val : null;
}

// Example:
// BST: [4, 8, 10, 12, 14, 20, 22]
// successorOfValue(root, 9) = 10
// predecessorOfValue(root, 15) = 14`}</pre>
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
            <td className="p-3 border">Without parent pointer</td>
            <td className="p-3 border">O(h)</td>
            <td className="p-3 border">O(1)</td>
          </tr>
          <tr>
            <td className="p-3 border">With parent pointer</td>
            <td className="p-3 border">O(h)</td>
            <td className="p-3 border">O(1)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Applications</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>BST deletion (finding replacement node)</li>
      <li>Iterating through BST elements in order</li>
      <li>Finding next larger element efficiently</li>
      <li>Range queries in BST</li>
      <li>Implementing iterators for BST</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">BST Iterator Using Successor</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`class BSTIterator {
    constructor(root) {
        this.stack = [];
        this._pushLeft(root);
    }

    _pushLeft(node) {
        while (node !== null) {
            this.stack.push(node);
            node = node.left;
        }
    }

    hasNext() {
        return this.stack.length > 0;
    }

    next() {
        const node = this.stack.pop();
        this._pushLeft(node.right);
        return node.val;
    }
}

// Usage
const iterator = new BSTIterator(root);
while (iterator.hasNext()) {
    console.log(iterator.next()); // Prints in sorted order
}

// Average: O(1) per next() call
// Space: O(h) for stack`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Related Problems</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Find kth successor of a node
function kthSuccessor(root, p, k) {
    let current = p;

    for (let i = 0; i < k; i++) {
        current = inorderSuccessor(root, current);
        if (current === null) return null;
    }

    return current;
}

// Find all successors of a node (nodes greater than given)
function allSuccessors(root, p) {
    const result = [];
    let successor = inorderSuccessor(root, p);

    while (successor !== null) {
        result.push(successor.val);
        successor = inorderSuccessor(root, successor);
    }

    return result;
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Key Points to Remember</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Successor is the next node in inorder traversal</li>
      <li>If right subtree exists: successor is minimum in right subtree</li>
      <li>If no right subtree: successor is lowest ancestor where node is in left subtree</li>
      <li>Time complexity is O(h) where h is height of tree</li>
      <li>Predecessor is the mirror concept (previous in inorder)</li>
      <li>Used extensively in BST deletion and iteration</li>
    </ul>
  </div>
);

export default InorderSuccessor;
