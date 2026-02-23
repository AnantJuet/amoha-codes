import React from 'react';

const TreeTraversals: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Tree Traversals (Inorder, Preorder, Postorder)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Tree traversal refers to the process of visiting each node in a tree data structure exactly once.
      Unlike linear data structures, trees can be traversed in multiple ways. The three most common
      depth-first traversal methods are Inorder, Preorder, and Postorder.
    </p>

    <h2 className="text-2xl font-bold mt-6">Example Tree</h2>
    <div className="bg-gray-50 p-4 rounded-lg mt-4">
      <pre className="text-center">{`        1
       / \\
      2   3
     / \\   \\
    4   5   6`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">1. Inorder Traversal (Left, Root, Right)</h2>
    <p className="leading-relaxed">
      In inorder traversal, we visit the left subtree first, then the root node, and finally the right subtree.
      For a Binary Search Tree, inorder traversal gives nodes in ascending sorted order.
    </p>
    <div className="bg-blue-50 p-4 rounded-lg mt-4">
      <p><strong>Order:</strong> Left Subtree → Root → Right Subtree</p>
      <p><strong>Example Output:</strong> 4, 2, 5, 1, 3, 6</p>
    </div>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Recursive Inorder Traversal
function inorder(node) {
    if (node === null) return;

    inorder(node.left);     // Visit left subtree
    console.log(node.val);  // Visit root
    inorder(node.right);    // Visit right subtree
}

// Iterative Inorder Traversal using Stack
function inorderIterative(root) {
    const result = [];
    const stack = [];
    let current = root;

    while (current !== null || stack.length > 0) {
        // Reach the leftmost node
        while (current !== null) {
            stack.push(current);
            current = current.left;
        }

        // Current is null, pop from stack
        current = stack.pop();
        result.push(current.val);

        // Visit right subtree
        current = current.right;
    }

    return result;
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">2. Preorder Traversal (Root, Left, Right)</h2>
    <p className="leading-relaxed">
      In preorder traversal, we visit the root node first, then the left subtree, and finally the right subtree.
      Preorder traversal is used to create a copy of the tree or to get prefix expression of an expression tree.
    </p>
    <div className="bg-green-50 p-4 rounded-lg mt-4">
      <p><strong>Order:</strong> Root → Left Subtree → Right Subtree</p>
      <p><strong>Example Output:</strong> 1, 2, 4, 5, 3, 6</p>
    </div>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Recursive Preorder Traversal
function preorder(node) {
    if (node === null) return;

    console.log(node.val);  // Visit root first
    preorder(node.left);    // Visit left subtree
    preorder(node.right);   // Visit right subtree
}

// Iterative Preorder Traversal using Stack
function preorderIterative(root) {
    if (root === null) return [];

    const result = [];
    const stack = [root];

    while (stack.length > 0) {
        const node = stack.pop();
        result.push(node.val);

        // Push right first so left is processed first
        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
    }

    return result;
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">3. Postorder Traversal (Left, Right, Root)</h2>
    <p className="leading-relaxed">
      In postorder traversal, we visit the left subtree first, then the right subtree, and finally the root node.
      Postorder traversal is used to delete the tree or to get postfix expression of an expression tree.
    </p>
    <div className="bg-yellow-50 p-4 rounded-lg mt-4">
      <p><strong>Order:</strong> Left Subtree → Right Subtree → Root</p>
      <p><strong>Example Output:</strong> 4, 5, 2, 6, 3, 1</p>
    </div>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Recursive Postorder Traversal
function postorder(node) {
    if (node === null) return;

    postorder(node.left);   // Visit left subtree
    postorder(node.right);  // Visit right subtree
    console.log(node.val);  // Visit root last
}

// Iterative Postorder Traversal using Two Stacks
function postorderIterative(root) {
    if (root === null) return [];

    const result = [];
    const stack1 = [root];
    const stack2 = [];

    while (stack1.length > 0) {
        const node = stack1.pop();
        stack2.push(node);

        if (node.left) stack1.push(node.left);
        if (node.right) stack1.push(node.right);
    }

    while (stack2.length > 0) {
        result.push(stack2.pop().val);
    }

    return result;
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Comparison of Traversals</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Traversal</th>
            <th className="p-3 border">Order</th>
            <th className="p-3 border">Use Cases</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Inorder</td>
            <td className="p-3 border">Left, Root, Right</td>
            <td className="p-3 border">BST sorted order, Expression evaluation</td>
          </tr>
          <tr>
            <td className="p-3 border">Preorder</td>
            <td className="p-3 border">Root, Left, Right</td>
            <td className="p-3 border">Tree copy, Prefix expression, Serialization</td>
          </tr>
          <tr>
            <td className="p-3 border">Postorder</td>
            <td className="p-3 border">Left, Right, Root</td>
            <td className="p-3 border">Tree deletion, Postfix expression, Height calculation</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Time and Space Complexity</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Approach</th>
            <th className="p-3 border">Time Complexity</th>
            <th className="p-3 border">Space Complexity</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Recursive</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(h) - call stack, h = height</td>
          </tr>
          <tr>
            <td className="p-3 border">Iterative</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(h) - explicit stack</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Morris Traversal (O(1) Space)</h2>
    <p className="leading-relaxed">
      Morris Traversal is an advanced technique that allows tree traversal without using recursion or stack,
      achieving O(1) space complexity by temporarily modifying the tree structure using threaded binary trees.
    </p>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Morris Inorder Traversal - O(1) Space
function morrisInorder(root) {
    const result = [];
    let current = root;

    while (current !== null) {
        if (current.left === null) {
            result.push(current.val);
            current = current.right;
        } else {
            // Find inorder predecessor
            let predecessor = current.left;
            while (predecessor.right !== null &&
                   predecessor.right !== current) {
                predecessor = predecessor.right;
            }

            if (predecessor.right === null) {
                // Create thread
                predecessor.right = current;
                current = current.left;
            } else {
                // Remove thread
                predecessor.right = null;
                result.push(current.val);
                current = current.right;
            }
        }
    }

    return result;
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Applications</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Inorder:</strong> Getting sorted elements from BST, Expression tree evaluation</li>
      <li><strong>Preorder:</strong> Creating copy of tree, Serialization, Prefix notation</li>
      <li><strong>Postorder:</strong> Deleting tree, Computing directory sizes, Postfix notation</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Key Points to Remember</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>All three traversals visit all nodes exactly once - O(n) time</li>
      <li>Recursive solutions are simpler but use call stack space</li>
      <li>Iterative solutions use explicit stack</li>
      <li>Morris traversal achieves O(1) space by modifying tree temporarily</li>
      <li>Inorder of BST always gives sorted output</li>
    </ul>
  </div>
);

export default TreeTraversals;
