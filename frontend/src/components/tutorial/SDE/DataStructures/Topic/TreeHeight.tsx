import React from 'react';

const TreeHeight: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Height of Binary Tree
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The height of a binary tree is defined as the number of edges on the longest path from the root
      node to a leaf node. An empty tree has a height of -1, and a tree with just one node (root) has
      a height of 0. Understanding tree height is fundamental for analyzing tree performance and balance.
    </p>

    <h2 className="text-2xl font-bold mt-6">Height vs Depth</h2>
    <div className="bg-gray-50 p-4 rounded-lg mt-4">
      <pre className="text-center">{`        1          Depth: 0, Height: 2
       / \\
      2   3        Depth: 1, Height: 1
     / \\
    4   5          Depth: 2, Height: 0`}</pre>
    </div>
    <ul className="list-disc list-inside space-y-2 mt-4">
      <li><strong>Height of a node:</strong> Number of edges on the longest path from the node to a leaf</li>
      <li><strong>Depth of a node:</strong> Number of edges from the root to the node</li>
      <li><strong>Height of tree:</strong> Height of the root node</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Recursive Approach</h2>
    <p className="leading-relaxed">
      The most intuitive approach uses recursion. The height of a node is 1 + maximum of heights of
      left and right subtrees.
    </p>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Recursive approach to find height
function height(root) {
    // Base case: empty tree has height -1
    if (root === null) {
        return -1;
    }

    // Recursively find height of left and right subtrees
    const leftHeight = height(root.left);
    const rightHeight = height(root.right);

    // Height of current node = 1 + max of subtree heights
    return 1 + Math.max(leftHeight, rightHeight);
}

// Alternative: Some define height as number of nodes on longest path
// In that case, empty tree has height 0
function heightByNodes(root) {
    if (root === null) {
        return 0;
    }

    const leftHeight = heightByNodes(root.left);
    const rightHeight = heightByNodes(root.right);

    return 1 + Math.max(leftHeight, rightHeight);
}

// Example:
//       1
//      / \\
//     2   3
//    / \\
//   4   5
// height(root) = 2 (counting edges)
// heightByNodes(root) = 3 (counting nodes)`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Iterative Approach (Using Level Order)</h2>
    <p className="leading-relaxed">
      We can also find the height iteratively using level order traversal (BFS).
      The height equals the number of levels minus 1.
    </p>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Iterative approach using BFS
function heightIterative(root) {
    if (root === null) {
        return -1;
    }

    const queue = [root];
    let height = -1;

    while (queue.length > 0) {
        const levelSize = queue.length;
        height++;

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }

    return height;
}

// Example trace for tree:
//       1
//      / \\
//     2   3
//    / \\
//   4   5
//
// Level 0: [1], height = 0
// Level 1: [2, 3], height = 1
// Level 2: [4, 5], height = 2
// Final height = 2`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Finding Maximum Depth</h2>
    <p className="leading-relaxed">
      Maximum depth and height of tree are essentially the same concept but measured differently.
    </p>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Maximum depth (LeetCode style - counts nodes)
function maxDepth(root) {
    if (root === null) return 0;

    return 1 + Math.max(
        maxDepth(root.left),
        maxDepth(root.right)
    );
}

// Minimum depth - path to nearest leaf
function minDepth(root) {
    if (root === null) return 0;

    // If only one child exists, must go through that child
    if (root.left === null) {
        return 1 + minDepth(root.right);
    }
    if (root.right === null) {
        return 1 + minDepth(root.left);
    }

    // Both children exist
    return 1 + Math.min(
        minDepth(root.left),
        minDepth(root.right)
    );
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
            <td className="p-3 border">Recursive</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(h) - call stack</td>
          </tr>
          <tr>
            <td className="p-3 border">Iterative (BFS)</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(w) - max width</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Height in Different Tree Types</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Tree Type</th>
            <th className="p-3 border">Height (for n nodes)</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Perfect Binary Tree</td>
            <td className="p-3 border">log2(n+1) - 1</td>
          </tr>
          <tr>
            <td className="p-3 border">Complete Binary Tree</td>
            <td className="p-3 border">floor(log2(n))</td>
          </tr>
          <tr>
            <td className="p-3 border">Balanced Binary Tree</td>
            <td className="p-3 border">O(log n)</td>
          </tr>
          <tr>
            <td className="p-3 border">Skewed Binary Tree</td>
            <td className="p-3 border">n - 1</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Related Problems</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Find height of each node (store in map)
function findAllHeights(root, heightMap = new Map()) {
    if (root === null) return -1;

    const leftHeight = findAllHeights(root.left, heightMap);
    const rightHeight = findAllHeights(root.right, heightMap);

    const currentHeight = 1 + Math.max(leftHeight, rightHeight);
    heightMap.set(root, currentHeight);

    return currentHeight;
}

// Find all nodes at a given height/depth
function nodesAtHeight(root, targetHeight) {
    const result = [];

    function dfs(node, currentHeight) {
        if (node === null) return;

        if (currentHeight === targetHeight) {
            result.push(node.val);
            return;
        }

        dfs(node.left, currentHeight + 1);
        dfs(node.right, currentHeight + 1);
    }

    dfs(root, 0);
    return result;
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Applications</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Determining if a tree is balanced</li>
      <li>Analyzing time complexity of tree operations</li>
      <li>Finding the diameter of a tree</li>
      <li>Memory allocation for tree storage</li>
      <li>Determining the longest path in a tree</li>
      <li>AVL tree balancing</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Key Points to Remember</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Height of empty tree is -1 (or 0 by some definitions)</li>
      <li>Height of single node is 0 (counting edges) or 1 (counting nodes)</li>
      <li>Height = 1 + max(left height, right height)</li>
      <li>For balanced tree: height = O(log n)</li>
      <li>For skewed tree: height = O(n)</li>
      <li>Both recursive and iterative solutions have O(n) time complexity</li>
    </ul>
  </div>
);

export default TreeHeight;
