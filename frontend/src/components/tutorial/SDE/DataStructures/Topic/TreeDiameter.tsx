import React from 'react';

const TreeDiameter: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Diameter of Binary Tree
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The diameter (or width) of a binary tree is the length of the longest path between any two nodes
      in the tree. This path may or may not pass through the root. The length is measured by the number
      of edges between the nodes.
    </p>

    <h2 className="text-2xl font-bold mt-6">Understanding Diameter</h2>
    <div className="bg-gray-50 p-4 rounded-lg mt-4">
      <pre className="text-center">{`Example 1:
        1
       / \\
      2   3
     / \\
    4   5

Diameter = 3 (path: 4 -> 2 -> 1 -> 3 or 5 -> 2 -> 1 -> 3)

Example 2:
        1
       /
      2
     / \\
    3   4
   /     \\
  5       6

Diameter = 4 (path: 5 -> 3 -> 2 -> 4 -> 6)
Note: Longest path doesn't pass through root!`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Key Insight</h2>
    <p className="leading-relaxed">
      For any node, the longest path that passes through it equals the sum of heights of its left
      and right subtrees plus 2 (for the edges connecting to the node). The diameter of the tree is
      the maximum such value across all nodes.
    </p>
    <div className="bg-blue-50 p-4 rounded-lg mt-4">
      <p><strong>Diameter through a node = leftHeight + rightHeight + 2</strong></p>
      <p className="mt-2">Or if counting nodes instead of edges:</p>
      <p><strong>Diameter through a node = leftHeight + rightHeight + 1</strong></p>
    </div>

    <h2 className="text-2xl font-bold mt-6">Naive Approach - O(n^2)</h2>
    <p className="leading-relaxed">
      For each node, calculate the height of left and right subtrees. This results in repeated
      calculations making it O(n^2).
    </p>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Naive approach - O(n^2) time complexity
function height(node) {
    if (node === null) return 0;
    return 1 + Math.max(height(node.left), height(node.right));
}

function diameterNaive(root) {
    if (root === null) return 0;

    // Option 1: Diameter passes through root
    const throughRoot = height(root.left) + height(root.right);

    // Option 2: Diameter is in left subtree
    const leftDiameter = diameterNaive(root.left);

    // Option 3: Diameter is in right subtree
    const rightDiameter = diameterNaive(root.right);

    return Math.max(throughRoot, leftDiameter, rightDiameter);
}

// Problem: height() is called for every node,
// and each call traverses the subtree - O(n^2)`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Optimized Approach - O(n)</h2>
    <p className="leading-relaxed">
      Calculate height and diameter in a single traversal. While computing the height at each node,
      also track the maximum diameter seen so far.
    </p>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Optimized approach - O(n) time complexity
function diameterOfBinaryTree(root) {
    let maxDiameter = 0;

    function height(node) {
        if (node === null) return 0;

        const leftHeight = height(node.left);
        const rightHeight = height(node.right);

        // Update diameter if path through current node is longer
        maxDiameter = Math.max(maxDiameter, leftHeight + rightHeight);

        // Return height of current node
        return 1 + Math.max(leftHeight, rightHeight);
    }

    height(root);
    return maxDiameter;
}

// Example trace for:
//       1
//      / \\
//     2   3
//    / \\
//   4   5
//
// height(4) = 1, maxDiameter = 0
// height(5) = 1, maxDiameter = 0
// height(2) = 2, leftH=1, rightH=1, maxDiameter = max(0, 1+1) = 2
// height(3) = 1, maxDiameter = max(2, 0+0) = 2
// height(1) = 3, leftH=2, rightH=1, maxDiameter = max(2, 2+1) = 3
// Return: 3`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Alternative: Return Object/Array</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Return both height and diameter from each call
function diameterWithObject(root) {
    function dfs(node) {
        if (node === null) {
            return { height: 0, diameter: 0 };
        }

        const left = dfs(node.left);
        const right = dfs(node.right);

        const height = 1 + Math.max(left.height, right.height);
        const diameterThroughNode = left.height + right.height;
        const diameter = Math.max(
            diameterThroughNode,
            left.diameter,
            right.diameter
        );

        return { height, diameter };
    }

    return dfs(root).diameter;
}

// Using array [height, diameter]
function diameterWithArray(root) {
    function dfs(node) {
        if (node === null) return [0, 0];

        const [lh, ld] = dfs(node.left);
        const [rh, rd] = dfs(node.right);

        const height = 1 + Math.max(lh, rh);
        const diameter = Math.max(lh + rh, ld, rd);

        return [height, diameter];
    }

    return dfs(root)[1];
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
            <td className="p-3 border">Optimized</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(h)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Variations and Related Problems</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Find the actual path (not just length)
function findDiameterPath(root) {
    let maxPath = [];

    function dfs(node) {
        if (node === null) return { height: 0, path: [] };

        const left = dfs(node.left);
        const right = dfs(node.right);

        // Path through current node
        const pathThroughNode = [
            ...left.path.reverse(),
            node.val,
            ...right.path
        ];

        if (pathThroughNode.length > maxPath.length) {
            maxPath = pathThroughNode;
        }

        // Return path going down (for parent to use)
        const height = 1 + Math.max(left.height, right.height);
        const path = left.height > right.height
            ? [...left.path.reverse(), node.val]
            : [...right.path, node.val];

        return { height, path };
    }

    dfs(root);
    return maxPath;
}

// Diameter of N-ary tree
function diameterNary(root) {
    let maxDiameter = 0;

    function height(node) {
        if (!node || !node.children.length) return 0;

        // Get heights of all children
        const heights = node.children.map(child => height(child));
        heights.sort((a, b) => b - a);

        // Diameter through this node = sum of two highest children heights
        if (heights.length >= 2) {
            maxDiameter = Math.max(maxDiameter, heights[0] + heights[1]);
        }

        return 1 + heights[0];
    }

    height(root);
    return maxDiameter;
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Common Mistakes</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Assuming diameter always passes through root</li>
      <li>Confusing edges vs nodes when counting length</li>
      <li>Using the naive O(n^2) approach when O(n) is possible</li>
      <li>Not handling empty trees or single nodes correctly</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Applications</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Network routing - finding longest path in network topology</li>
      <li>Analyzing tree structures in file systems</li>
      <li>Graph algorithms - diameter of tree graphs</li>
      <li>Performance analysis of tree-based data structures</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Key Points to Remember</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Diameter is the longest path between any two nodes</li>
      <li>The path may or may not pass through the root</li>
      <li>Use single DFS traversal for O(n) solution</li>
      <li>At each node: diameter = leftHeight + rightHeight</li>
      <li>Track maximum diameter while computing heights</li>
      <li>Space complexity is O(h) due to recursion stack</li>
    </ul>
  </div>
);

export default TreeDiameter;
