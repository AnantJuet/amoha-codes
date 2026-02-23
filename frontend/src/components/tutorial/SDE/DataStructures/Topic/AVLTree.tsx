import React from 'react';

const AVLTree: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      AVL Tree
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      AVL Tree is a self-balancing Binary Search Tree where the height difference between left and right
      subtrees (balance factor) is at most 1 for every node. Named after inventors Adelson-Velsky and Landis.
    </p>

    <h2 className="text-2xl font-bold mt-6">Balance Factor</h2>
    <div className="bg-gray-100 p-4 rounded-lg">
      <p><strong>Balance Factor = Height(Left Subtree) - Height(Right Subtree)</strong></p>
      <p className="mt-2">For any node in AVL tree: -1 ≤ Balance Factor ≤ 1</p>
      <ul className="list-disc list-inside mt-2">
        <li><strong>-1:</strong> Right-heavy</li>
        <li><strong>0:</strong> Perfectly balanced</li>
        <li><strong>+1:</strong> Left-heavy</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold mt-6">Rotations</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-bold text-blue-800">Left Rotation (LL)</h4>
        <p className="text-sm mt-1">Used when right subtree is heavier</p>
        <pre className="text-xs mt-2 bg-white p-2 rounded">
{`    y                x
   / \\              / \\
  x   C    →       A   y
 / \\                  / \\
A   B                B   C`}
        </pre>
      </div>
      <div className="bg-green-50 p-4 rounded-lg">
        <h4 className="font-bold text-green-800">Right Rotation (RR)</h4>
        <p className="text-sm mt-1">Used when left subtree is heavier</p>
        <pre className="text-xs mt-2 bg-white p-2 rounded">
{`    y                x
   / \\              / \\
  x   C    ←       A   y
 / \\                  / \\
A   B                B   C`}
        </pre>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Implementation</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`class AVLNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}

class AVLTree {
    constructor() {
        this.root = null;
    }

    getHeight(node) {
        return node ? node.height : 0;
    }

    getBalance(node) {
        return node ? this.getHeight(node.left) - this.getHeight(node.right) : 0;
    }

    rightRotate(y) {
        const x = y.left;
        const T2 = x.right;

        x.right = y;
        y.left = T2;

        y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
        x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;

        return x;
    }

    leftRotate(x) {
        const y = x.right;
        const T2 = y.left;

        y.left = x;
        x.right = T2;

        x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;
        y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;

        return y;
    }

    insert(value) {
        this.root = this._insert(this.root, value);
    }

    _insert(node, value) {
        if (!node) return new AVLNode(value);

        if (value < node.value) {
            node.left = this._insert(node.left, value);
        } else if (value > node.value) {
            node.right = this._insert(node.right, value);
        } else {
            return node; // Duplicates not allowed
        }

        node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
        const balance = this.getBalance(node);

        // Left Left Case
        if (balance > 1 && value < node.left.value) {
            return this.rightRotate(node);
        }
        // Right Right Case
        if (balance < -1 && value > node.right.value) {
            return this.leftRotate(node);
        }
        // Left Right Case
        if (balance > 1 && value > node.left.value) {
            node.left = this.leftRotate(node.left);
            return this.rightRotate(node);
        }
        // Right Left Case
        if (balance < -1 && value < node.right.value) {
            node.right = this.rightRotate(node.right);
            return this.leftRotate(node);
        }

        return node;
    }
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Complexity Analysis</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Operation</th>
            <th className="p-3 border">Time Complexity</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Search</td>
            <td className="p-3 border">O(log n)</td>
          </tr>
          <tr>
            <td className="p-3 border">Insert</td>
            <td className="p-3 border">O(log n)</td>
          </tr>
          <tr>
            <td className="p-3 border">Delete</td>
            <td className="p-3 border">O(log n)</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p className="mt-2"><strong>Space Complexity:</strong> O(n) for storing n nodes</p>

    <h2 className="text-2xl font-bold mt-6">AVL vs BST</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left text-sm">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">BST</th>
            <th className="p-3 border">AVL Tree</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Worst Case Search</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(log n)</td>
          </tr>
          <tr>
            <td className="p-3 border">Insert/Delete</td>
            <td className="p-3 border">Simple</td>
            <td className="p-3 border">Requires rotations</td>
          </tr>
          <tr>
            <td className="p-3 border">Balance</td>
            <td className="p-3 border">Not guaranteed</td>
            <td className="p-3 border">Always balanced</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
      <p className="text-blue-700">
        <strong>Use Case:</strong> AVL trees are ideal for lookup-intensive applications
        where insertions and deletions are less frequent, as they maintain strict balance.
      </p>
    </div>
  </div>
);

export default AVLTree;
