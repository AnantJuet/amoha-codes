import React from 'react';

const LevelOrderTraversal: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Level Order Traversal (BFS)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Level Order Traversal, also known as Breadth-First Search (BFS) for trees, visits nodes level by level
      from left to right. Unlike depth-first traversals (Inorder, Preorder, Postorder), level order traversal
      uses a queue data structure instead of recursion or stack.
    </p>

    <h2 className="text-2xl font-bold mt-6">Example Tree</h2>
    <div className="bg-gray-50 p-4 rounded-lg mt-4">
      <pre className="text-center">{`        1          Level 0
       / \\
      2   3        Level 1
     / \\   \\
    4   5   6      Level 2

Level Order Output: 1, 2, 3, 4, 5, 6`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">How Level Order Traversal Works</h2>
    <div className="space-y-4 mt-4">
      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-bold">Step 1: Initialize</h4>
        <p>Create a queue and add the root node to it.</p>
      </div>
      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-bold">Step 2: Process Queue</h4>
        <p>While the queue is not empty, dequeue a node, process it, and enqueue its children.</p>
      </div>
      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-bold">Step 3: Repeat</h4>
        <p>Continue until the queue becomes empty.</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Basic Implementation</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Basic Level Order Traversal
function levelOrder(root) {
    if (root === null) return [];

    const result = [];
    const queue = [root];

    while (queue.length > 0) {
        const node = queue.shift();
        result.push(node.val);

        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }

    return result;
}

// Example usage:
// Input:     1
//           / \\
//          2   3
//         / \\
//        4   5
// Output: [1, 2, 3, 4, 5]`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Level-by-Level Grouping</h2>
    <p className="leading-relaxed">
      Often we need to return nodes grouped by their levels. This requires tracking the number of nodes
      at each level before processing.
    </p>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Level Order Traversal with Level Grouping
function levelOrderGrouped(root) {
    if (root === null) return [];

    const result = [];
    const queue = [root];

    while (queue.length > 0) {
        const levelSize = queue.length;
        const currentLevel = [];

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            currentLevel.push(node.val);

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        result.push(currentLevel);
    }

    return result;
}

// Example usage:
// Input:     1
//           / \\
//          2   3
//         / \\
//        4   5
// Output: [[1], [2, 3], [4, 5]]`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Variations of Level Order Traversal</h2>

    <h3 className="text-xl font-semibold mt-4">1. Reverse Level Order</h3>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Reverse Level Order (Bottom to Top)
function reverseLevelOrder(root) {
    if (root === null) return [];

    const result = [];
    const queue = [root];

    while (queue.length > 0) {
        const levelSize = queue.length;
        const currentLevel = [];

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            currentLevel.push(node.val);

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        result.unshift(currentLevel); // Add to beginning
    }

    return result;
}
// Output: [[4, 5], [2, 3], [1]]`}</pre>
    </div>

    <h3 className="text-xl font-semibold mt-4">2. Zigzag Level Order</h3>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Zigzag Level Order Traversal
function zigzagLevelOrder(root) {
    if (root === null) return [];

    const result = [];
    const queue = [root];
    let leftToRight = true;

    while (queue.length > 0) {
        const levelSize = queue.length;
        const currentLevel = [];

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();

            if (leftToRight) {
                currentLevel.push(node.val);
            } else {
                currentLevel.unshift(node.val);
            }

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        result.push(currentLevel);
        leftToRight = !leftToRight;
    }

    return result;
}
// Output: [[1], [3, 2], [4, 5]]`}</pre>
    </div>

    <h3 className="text-xl font-semibold mt-4">3. Right Side View</h3>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Binary Tree Right Side View
function rightSideView(root) {
    if (root === null) return [];

    const result = [];
    const queue = [root];

    while (queue.length > 0) {
        const levelSize = queue.length;

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();

            // Last node of each level
            if (i === levelSize - 1) {
                result.push(node.val);
            }

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }

    return result;
}
// Output: [1, 3, 6]`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Time and Space Complexity</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Complexity</th>
            <th className="p-3 border">Value</th>
            <th className="p-3 border">Explanation</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Time</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">Visit each node exactly once</td>
          </tr>
          <tr>
            <td className="p-3 border">Space</td>
            <td className="p-3 border">O(w)</td>
            <td className="p-3 border">w = maximum width of tree (worst case O(n) for complete tree)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">BFS vs DFS for Trees</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">BFS (Level Order)</th>
            <th className="p-3 border">DFS</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Data Structure</td>
            <td className="p-3 border">Queue</td>
            <td className="p-3 border">Stack / Recursion</td>
          </tr>
          <tr>
            <td className="p-3 border">Order</td>
            <td className="p-3 border">Level by level</td>
            <td className="p-3 border">Branch by branch</td>
          </tr>
          <tr>
            <td className="p-3 border">Space (worst)</td>
            <td className="p-3 border">O(n) for wide trees</td>
            <td className="p-3 border">O(n) for deep trees</td>
          </tr>
          <tr>
            <td className="p-3 border">Best for</td>
            <td className="p-3 border">Finding shortest path, level-wise operations</td>
            <td className="p-3 border">Path finding, tree height, backtracking</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Applications</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Finding the shortest path in an unweighted tree</li>
      <li>Level-wise sum or average calculation</li>
      <li>Finding nodes at a specific distance from root</li>
      <li>Serialization and deserialization of trees</li>
      <li>Finding the width of a binary tree</li>
      <li>Checking if a tree is a complete binary tree</li>
      <li>Connecting nodes at the same level</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Key Points to Remember</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>BFS uses a queue (FIFO) data structure</li>
      <li>Time complexity is O(n) as each node is visited once</li>
      <li>Space complexity depends on the maximum width of the tree</li>
      <li>Useful for finding minimum distance from root</li>
      <li>Track level size at the start of each level for grouped output</li>
    </ul>
  </div>
);

export default LevelOrderTraversal;
