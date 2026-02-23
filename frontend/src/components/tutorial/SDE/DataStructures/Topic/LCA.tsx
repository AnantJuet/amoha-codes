import React from 'react';

const LCA: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Lowest Common Ancestor (LCA)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The Lowest Common Ancestor (LCA) of two nodes p and q in a binary tree is defined as the lowest
      node that has both p and q as descendants. A node can be a descendant of itself. LCA is a
      fundamental concept used in many tree-based algorithms.
    </p>

    <h2 className="text-2xl font-bold mt-6">Understanding LCA</h2>
    <div className="bg-gray-50 p-4 rounded-lg mt-4">
      <pre className="text-center">{`        3
       / \\
      5   1
     / \\ / \\
    6  2 0  8
      / \\
     7   4

LCA(5, 1) = 3  (root is LCA when nodes are on different sides)
LCA(5, 4) = 5  (5 is ancestor of 4, so 5 is LCA)
LCA(6, 4) = 5  (5 is the lowest node that's ancestor of both)
LCA(7, 8) = 3  (they're on opposite branches from root)`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">LCA in Binary Tree</h2>
    <p className="leading-relaxed">
      For a general binary tree (not BST), we use recursive DFS. The idea is to find which subtree
      contains the target nodes.
    </p>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// LCA for Binary Tree - Recursive approach
function lowestCommonAncestor(root, p, q) {
    // Base case: if root is null or matches p or q
    if (root === null || root === p || root === q) {
        return root;
    }

    // Search in left and right subtrees
    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);

    // If both left and right are non-null,
    // current node is the LCA
    if (left !== null && right !== null) {
        return root;
    }

    // Otherwise, return the non-null child
    return left !== null ? left : right;
}

// Example trace for LCA(5, 1):
//        3
//       / \\
//      5   1
//
// At node 3:
//   left = LCA(5, p=5, q=1) returns 5 (found p)
//   right = LCA(1, p=5, q=1) returns 1 (found q)
//   Both non-null, so return 3 as LCA`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">LCA in Binary Search Tree</h2>
    <p className="leading-relaxed">
      For a BST, we can leverage the BST property: left subtree has smaller values, right has larger.
      This allows for a more efficient solution.
    </p>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// LCA for BST - Recursive
function lcaBST(root, p, q) {
    if (root === null) return null;

    // Both nodes are in left subtree
    if (p.val < root.val && q.val < root.val) {
        return lcaBST(root.left, p, q);
    }

    // Both nodes are in right subtree
    if (p.val > root.val && q.val > root.val) {
        return lcaBST(root.right, p, q);
    }

    // Nodes are on different sides, or one equals root
    // Current node is the LCA
    return root;
}

// LCA for BST - Iterative (more efficient)
function lcaBSTIterative(root, p, q) {
    while (root !== null) {
        if (p.val < root.val && q.val < root.val) {
            root = root.left;
        } else if (p.val > root.val && q.val > root.val) {
            root = root.right;
        } else {
            return root;
        }
    }
    return null;
}

// Example for BST:
//        6
//       / \\
//      2   8
//     / \\ / \\
//    0  4 7  9
//
// LCA(2, 8) = 6 (different sides of root)
// LCA(2, 4) = 2 (4 is in subtree of 2)
// LCA(0, 4) = 2 (both in left subtree of 6)`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">LCA with Parent Pointers</h2>
    <p className="leading-relaxed">
      If nodes have parent pointers, we can find LCA by finding the intersection of paths to root.
    </p>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// LCA when nodes have parent pointers
function lcaWithParent(p, q) {
    // Find ancestors of p
    const ancestors = new Set();
    let current = p;

    while (current !== null) {
        ancestors.add(current);
        current = current.parent;
    }

    // Find first common ancestor of q
    current = q;
    while (current !== null) {
        if (ancestors.has(current)) {
            return current;
        }
        current = current.parent;
    }

    return null;
}

// Alternative: Two pointer technique
function lcaTwoPointers(p, q) {
    let a = p, b = q;

    while (a !== b) {
        // When reaching root (null), switch to other node
        a = (a === null) ? q : a.parent;
        b = (b === null) ? p : b.parent;
    }

    return a;
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">LCA with Path Finding</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Find path from root to a target node
function findPath(root, target, path = []) {
    if (root === null) return false;

    path.push(root);

    if (root === target) return true;

    if (findPath(root.left, target, path) ||
        findPath(root.right, target, path)) {
        return true;
    }

    path.pop(); // Backtrack
    return false;
}

// LCA by comparing paths
function lcaByPath(root, p, q) {
    const pathP = [];
    const pathQ = [];

    if (!findPath(root, p, pathP) || !findPath(root, q, pathQ)) {
        return null; // One or both nodes not found
    }

    // Find last common node in paths
    let lca = null;
    for (let i = 0; i < Math.min(pathP.length, pathQ.length); i++) {
        if (pathP[i] === pathQ[i]) {
            lca = pathP[i];
        } else {
            break;
        }
    }

    return lca;
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
            <td className="p-3 border">Binary Tree (Recursive)</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(h)</td>
          </tr>
          <tr>
            <td className="p-3 border">BST (Recursive)</td>
            <td className="p-3 border">O(h)</td>
            <td className="p-3 border">O(h)</td>
          </tr>
          <tr>
            <td className="p-3 border">BST (Iterative)</td>
            <td className="p-3 border">O(h)</td>
            <td className="p-3 border">O(1)</td>
          </tr>
          <tr>
            <td className="p-3 border">With Parent Pointers</td>
            <td className="p-3 border">O(h)</td>
            <td className="p-3 border">O(h) or O(1)</td>
          </tr>
          <tr>
            <td className="p-3 border">Path Finding</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(n)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Applications of LCA</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Finding distance between two nodes in a tree</li>
      <li>Computing paths between nodes</li>
      <li>Range queries on trees</li>
      <li>Computational biology (evolutionary trees)</li>
      <li>Network routing protocols</li>
      <li>Solving range minimum query (RMQ) problems</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Related Problems</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Distance between two nodes
function distanceBetweenNodes(root, p, q) {
    const lca = lowestCommonAncestor(root, p, q);

    function distanceFromNode(node, target, distance = 0) {
        if (node === null) return -1;
        if (node === target) return distance;

        const left = distanceFromNode(node.left, target, distance + 1);
        if (left !== -1) return left;

        return distanceFromNode(node.right, target, distance + 1);
    }

    return distanceFromNode(lca, p) + distanceFromNode(lca, q);
}

// LCA of multiple nodes
function lcaMultiple(root, nodes) {
    if (nodes.length === 0) return null;
    if (nodes.length === 1) return nodes[0];

    let lca = nodes[0];
    for (let i = 1; i < nodes.length; i++) {
        lca = lowestCommonAncestor(root, lca, nodes[i]);
    }
    return lca;
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Key Points to Remember</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>A node can be its own ancestor</li>
      <li>For general binary tree: check both subtrees recursively</li>
      <li>For BST: use BST property to decide which subtree to search</li>
      <li>BST solution can be O(h) time and O(1) space iteratively</li>
      <li>LCA is the split point where paths to two nodes diverge</li>
      <li>Understanding LCA is crucial for many tree-based algorithms</li>
    </ul>
  </div>
);

export default LCA;
