import React from 'react';

const BSTIntro: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Introduction to Binary Search Tree (BST)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A Binary Search Tree (BST) is a special type of binary tree that maintains a specific ordering
      property: for every node, all values in its left subtree are smaller, and all values in its
      right subtree are larger. This property enables efficient searching, insertion, and deletion
      operations.
    </p>

    <h2 className="text-2xl font-bold mt-6">BST Property</h2>
    <div className="bg-blue-50 p-4 rounded-lg mt-4">
      <p>For every node N in a BST:</p>
      <ul className="list-disc list-inside mt-2">
        <li>All nodes in the left subtree have values <strong>less than</strong> N.value</li>
        <li>All nodes in the right subtree have values <strong>greater than</strong> N.value</li>
        <li>Both left and right subtrees are also BSTs</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold mt-6">Example BST</h2>
    <div className="bg-gray-50 p-4 rounded-lg mt-4">
      <pre className="text-center">{`        8
       / \\
      3   10
     / \\    \\
    1   6    14
       / \\   /
      4   7 13

Inorder traversal gives sorted order: 1, 3, 4, 6, 7, 8, 10, 13, 14`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Node Structure</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    // Basic operations
    insert(val) { /* ... */ }
    search(val) { /* ... */ }
    delete(val) { /* ... */ }
    findMin() { /* ... */ }
    findMax() { /* ... */ }
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Basic Operations Overview</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Operation</th>
            <th className="p-3 border">Average Case</th>
            <th className="p-3 border">Worst Case</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Search</td>
            <td className="p-3 border">O(log n)</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">Find a node with given value</td>
          </tr>
          <tr>
            <td className="p-3 border">Insert</td>
            <td className="p-3 border">O(log n)</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">Add a new node</td>
          </tr>
          <tr>
            <td className="p-3 border">Delete</td>
            <td className="p-3 border">O(log n)</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">Remove a node</td>
          </tr>
          <tr>
            <td className="p-3 border">Find Min/Max</td>
            <td className="p-3 border">O(log n)</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">Find minimum/maximum value</td>
          </tr>
          <tr>
            <td className="p-3 border">Inorder Successor</td>
            <td className="p-3 border">O(log n)</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">Next larger element</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Finding Minimum and Maximum</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Minimum is the leftmost node
function findMin(root) {
    if (root === null) return null;

    while (root.left !== null) {
        root = root.left;
    }
    return root;
}

// Maximum is the rightmost node
function findMax(root) {
    if (root === null) return null;

    while (root.right !== null) {
        root = root.right;
    }
    return root;
}

// Recursive versions
function findMinRecursive(root) {
    if (root === null) return null;
    if (root.left === null) return root;
    return findMinRecursive(root.left);
}

function findMaxRecursive(root) {
    if (root === null) return null;
    if (root.right === null) return root;
    return findMaxRecursive(root.right);
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">BST vs Other Data Structures</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Operation</th>
            <th className="p-3 border">BST (Balanced)</th>
            <th className="p-3 border">Array (Sorted)</th>
            <th className="p-3 border">Linked List</th>
            <th className="p-3 border">Hash Table</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Search</td>
            <td className="p-3 border">O(log n)</td>
            <td className="p-3 border">O(log n)</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(1)</td>
          </tr>
          <tr>
            <td className="p-3 border">Insert</td>
            <td className="p-3 border">O(log n)</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">O(1)</td>
          </tr>
          <tr>
            <td className="p-3 border">Delete</td>
            <td className="p-3 border">O(log n)</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">O(1)</td>
          </tr>
          <tr>
            <td className="p-3 border">Find Min/Max</td>
            <td className="p-3 border">O(log n)</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(n)</td>
          </tr>
          <tr>
            <td className="p-3 border">Ordered Traversal</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(n log n)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Key Property: Inorder Traversal</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Inorder traversal of BST gives sorted output
function inorderTraversal(root) {
    const result = [];

    function inorder(node) {
        if (node === null) return;

        inorder(node.left);
        result.push(node.val);
        inorder(node.right);
    }

    inorder(root);
    return result; // Always sorted in ascending order!
}

// Example: For the BST above
// inorderTraversal(root) = [1, 3, 4, 6, 7, 8, 10, 13, 14]`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Advantages of BST</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Efficient search, insert, and delete operations - O(log n) when balanced</li>
      <li>Maintains sorted order - inorder traversal gives sorted elements</li>
      <li>Dynamic size - can grow or shrink as needed</li>
      <li>Easy to find min, max, predecessor, successor</li>
      <li>Range queries are efficient</li>
      <li>Foundation for more advanced structures (AVL, Red-Black trees)</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Disadvantages of BST</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Can become unbalanced (skewed) leading to O(n) operations</li>
      <li>No random access like arrays</li>
      <li>Extra memory for pointers</li>
      <li>Not cache-friendly</li>
      <li>Duplicate handling needs special consideration</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Handling Duplicates</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Option 1: Don't allow duplicates
// Simply don't insert if value exists

// Option 2: Allow duplicates on one side
// Convention: duplicates go to right (or left)
function insertWithDuplicates(root, val) {
    if (root === null) return new TreeNode(val);

    if (val < root.val) {
        root.left = insertWithDuplicates(root.left, val);
    } else { // val >= root.val, duplicates go right
        root.right = insertWithDuplicates(root.right, val);
    }

    return root;
}

// Option 3: Keep count at each node
class NodeWithCount {
    constructor(val) {
        this.val = val;
        this.count = 1;
        this.left = null;
        this.right = null;
    }
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Common BST Problems</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Validate if tree is a valid BST</li>
      <li>Find kth smallest/largest element</li>
      <li>Lowest Common Ancestor in BST</li>
      <li>Convert sorted array to balanced BST</li>
      <li>Find inorder successor/predecessor</li>
      <li>Range sum queries</li>
      <li>Floor and ceiling of a value</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Key Points to Remember</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>BST property: left &lt; root &lt; right for all nodes</li>
      <li>Inorder traversal gives sorted output</li>
      <li>Average time complexity: O(log n), worst case: O(n)</li>
      <li>Minimum is leftmost, maximum is rightmost</li>
      <li>Use self-balancing BSTs (AVL, Red-Black) to guarantee O(log n)</li>
      <li>BST is ideal when you need both fast search and ordered data</li>
    </ul>
  </div>
);

export default BSTIntro;
