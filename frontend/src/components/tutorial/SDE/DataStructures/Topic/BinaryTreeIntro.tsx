import React from 'react';

const BinaryTreeIntro: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Introduction to Binary Tree
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A binary tree is a hierarchical data structure in which each node has at most two children,
      referred to as the left child and the right child. It is one of the most fundamental data
      structures in computer science and forms the basis for many other tree-based structures.
    </p>

    <h2 className="text-2xl font-bold mt-6">What is a Binary Tree?</h2>
    <p className="leading-relaxed">
      A binary tree consists of nodes where each node contains three components:
    </p>
    <ul className="list-disc list-inside space-y-2 mt-4">
      <li><strong>Data:</strong> The value stored in the node</li>
      <li><strong>Left Pointer:</strong> Reference to the left child node</li>
      <li><strong>Right Pointer:</strong> Reference to the right child node</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Basic Terminology</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Root:</strong> The topmost node of the tree (has no parent)</li>
      <li><strong>Parent:</strong> A node that has one or more children</li>
      <li><strong>Child:</strong> A node that has a parent node</li>
      <li><strong>Leaf:</strong> A node with no children (terminal node)</li>
      <li><strong>Sibling:</strong> Nodes that share the same parent</li>
      <li><strong>Depth:</strong> Number of edges from root to the node</li>
      <li><strong>Height:</strong> Number of edges from node to the deepest leaf</li>
      <li><strong>Level:</strong> Depth of a node + 1 (root is at level 1)</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Types of Binary Trees</h2>
    <div className="space-y-4 mt-4">
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">1. Full Binary Tree</h4>
        <p>Every node has either 0 or 2 children. No node has only one child.</p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">2. Complete Binary Tree</h4>
        <p>All levels are completely filled except possibly the last level, which is filled from left to right.</p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">3. Perfect Binary Tree</h4>
        <p>All internal nodes have exactly two children and all leaf nodes are at the same level.</p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">4. Balanced Binary Tree</h4>
        <p>Height of left and right subtrees of every node differs by at most 1.</p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">5. Skewed Binary Tree</h4>
        <p>All nodes have only one child (either all left or all right).</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Node Structure</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`class TreeNode {
    constructor(val) {
        this.val = val;      // Node value
        this.left = null;    // Left child
        this.right = null;   // Right child
    }
}

// Creating a simple binary tree
//       1
//      / \\
//     2   3
//    / \\
//   4   5

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Properties of Binary Trees</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Property</th>
            <th className="p-3 border">Formula/Value</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Max nodes at level L</td>
            <td className="p-3 border">2^L (L starts from 0)</td>
          </tr>
          <tr>
            <td className="p-3 border">Max nodes in tree of height H</td>
            <td className="p-3 border">2^(H+1) - 1</td>
          </tr>
          <tr>
            <td className="p-3 border">Min height with N nodes</td>
            <td className="p-3 border">floor(log2(N))</td>
          </tr>
          <tr>
            <td className="p-3 border">Leaf nodes in full binary tree</td>
            <td className="p-3 border">(n + 1) / 2 where n is total nodes</td>
          </tr>
          <tr>
            <td className="p-3 border">Internal nodes in full binary tree</td>
            <td className="p-3 border">(n - 1) / 2</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Applications of Binary Trees</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Expression trees in compilers</li>
      <li>Huffman coding for data compression</li>
      <li>Binary Search Trees for efficient searching</li>
      <li>Heaps for priority queues</li>
      <li>Syntax trees in parsers</li>
      <li>File system directory structure</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Advantages</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Efficient searching when balanced (O(log n))</li>
      <li>Natural hierarchical representation</li>
      <li>Efficient insertion and deletion</li>
      <li>Basis for more advanced data structures</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Disadvantages</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Can become unbalanced leading to O(n) operations</li>
      <li>More memory overhead than arrays (pointers)</li>
      <li>Not cache-friendly</li>
      <li>Complex implementation compared to linear structures</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Common Binary Tree Problems</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Tree traversals (Inorder, Preorder, Postorder, Level-order)</li>
      <li>Find height/depth of tree</li>
      <li>Check if tree is balanced</li>
      <li>Find diameter of tree</li>
      <li>Mirror/Invert a binary tree</li>
      <li>Lowest Common Ancestor</li>
      <li>Path sum problems</li>
    </ul>
  </div>
);

export default BinaryTreeIntro;
