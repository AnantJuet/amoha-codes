import React from 'react';

const BSTInsert: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Insert in Binary Search Tree
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Inserting a new value into a BST maintains the BST property. The new node is always inserted
      as a leaf node at the appropriate position determined by comparing values along the path from
      root to the insertion point.
    </p>

    <h2 className="text-2xl font-bold mt-6">How Insert Works</h2>
    <div className="bg-gray-50 p-4 rounded-lg mt-4">
      <pre className="text-center">{`Insert 5 into BST:

Before:         After:
    8              8
   / \\            / \\
  3   10         3   10
 / \\    \\       / \\    \\
1   6    14    1   6    14
                  /
                 5

Steps:
1. Start at root (8): 5 < 8, go left
2. At node 3: 5 > 3, go right
3. At node 6: 5 < 6, go left
4. Left is null: Insert 5 as left child of 6`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Algorithm Steps</h2>
    <div className="bg-blue-50 p-4 rounded-lg mt-4">
      <ol className="list-decimal list-inside space-y-2">
        <li>If tree is empty, create a new node as root</li>
        <li>Starting from root, compare value with current node</li>
        <li>If value is less, move to left child; if greater, move to right</li>
        <li>When a null position is found, insert the new node there</li>
      </ol>
    </div>

    <h2 className="text-2xl font-bold mt-6">Recursive Implementation</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// Recursive insert - returns the root of modified tree
function insertIntoBST(root, val) {
    // Base case: found insertion point
    if (root === null) {
        return new TreeNode(val);
    }

    // Recursively insert in appropriate subtree
    if (val < root.val) {
        root.left = insertIntoBST(root.left, val);
    } else {
        root.right = insertIntoBST(root.right, val);
    }

    return root;
}

// Usage
let root = null;
root = insertIntoBST(root, 8);
root = insertIntoBST(root, 3);
root = insertIntoBST(root, 10);
root = insertIntoBST(root, 1);
root = insertIntoBST(root, 6);
root = insertIntoBST(root, 5);

// Resulting tree:
//       8
//      / \\
//     3   10
//    / \\
//   1   6
//      /
//     5`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Iterative Implementation</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Iterative insert - more space efficient
function insertIntoBSTIterative(root, val) {
    const newNode = new TreeNode(val);

    // If tree is empty, new node becomes root
    if (root === null) {
        return newNode;
    }

    let current = root;
    let parent = null;

    // Find the insertion position
    while (current !== null) {
        parent = current;
        if (val < current.val) {
            current = current.left;
        } else {
            current = current.right;
        }
    }

    // Insert the new node
    if (val < parent.val) {
        parent.left = newNode;
    } else {
        parent.right = newNode;
    }

    return root;
}

// Alternative using single pointer
function insertIterativeAlt(root, val) {
    if (root === null) return new TreeNode(val);

    let current = root;

    while (true) {
        if (val < current.val) {
            if (current.left === null) {
                current.left = new TreeNode(val);
                break;
            }
            current = current.left;
        } else {
            if (current.right === null) {
                current.right = new TreeNode(val);
                break;
            }
            current = current.right;
        }
    }

    return root;
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Handling Duplicates</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Option 1: Ignore duplicates
function insertNoDuplicates(root, val) {
    if (root === null) return new TreeNode(val);

    if (val < root.val) {
        root.left = insertNoDuplicates(root.left, val);
    } else if (val > root.val) {
        root.right = insertNoDuplicates(root.right, val);
    }
    // If val === root.val, do nothing (ignore duplicate)

    return root;
}

// Option 2: Insert duplicates on right
function insertWithDuplicatesRight(root, val) {
    if (root === null) return new TreeNode(val);

    if (val < root.val) {
        root.left = insertWithDuplicatesRight(root.left, val);
    } else { // val >= root.val
        root.right = insertWithDuplicatesRight(root.right, val);
    }

    return root;
}

// Option 3: Keep count at each node
class TreeNodeWithCount {
    constructor(val) {
        this.val = val;
        this.count = 1;
        this.left = null;
        this.right = null;
    }
}

function insertWithCount(root, val) {
    if (root === null) return new TreeNodeWithCount(val);

    if (val < root.val) {
        root.left = insertWithCount(root.left, val);
    } else if (val > root.val) {
        root.right = insertWithCount(root.right, val);
    } else {
        root.count++; // Increment count for duplicate
    }

    return root;
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Building BST from Array</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Build BST by inserting elements one by one
function buildBST(arr) {
    let root = null;

    for (const val of arr) {
        root = insertIntoBST(root, val);
    }

    return root;
}

// Example
const arr = [8, 3, 10, 1, 6, 14, 4, 7];
const root = buildBST(arr);

// Build balanced BST from sorted array
function sortedArrayToBST(nums) {
    function build(left, right) {
        if (left > right) return null;

        const mid = Math.floor((left + right) / 2);
        const node = new TreeNode(nums[mid]);

        node.left = build(left, mid - 1);
        node.right = build(mid + 1, right);

        return node;
    }

    return build(0, nums.length - 1);
}

// Example: [1, 3, 4, 6, 7, 8, 10, 14]
// Creates balanced BST:
//         6
//        / \\
//       3   10
//      / \\  / \\
//     1  4 7  14`}</pre>
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
          <tr>
            <td className="p-3 border">Build from n elements</td>
            <td className="p-3 border">O(n log n)</td>
            <td className="p-3 border">O(n^2)</td>
            <td className="p-3 border">O(h)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Insertion Order Matters</h2>
    <div className="bg-gray-50 p-4 rounded-lg mt-4">
      <pre className="text-center">{`Same elements, different order:

Insert: [1, 2, 3, 4, 5]     Insert: [3, 1, 4, 2, 5]
Creates skewed tree:         Creates balanced tree:

    1                            3
     \\                          / \\
      2                        1   4
       \\                        \\   \\
        3                        2   5
         \\
          4
           \\
            5

Height: 4                    Height: 2
Search: O(n)                 Search: O(log n)`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">BST Class Implementation</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`class BST {
    constructor() {
        this.root = null;
    }

    insert(val) {
        this.root = this._insertRecursive(this.root, val);
    }

    _insertRecursive(node, val) {
        if (node === null) {
            return new TreeNode(val);
        }

        if (val < node.val) {
            node.left = this._insertRecursive(node.left, val);
        } else if (val > node.val) {
            node.right = this._insertRecursive(node.right, val);
        }

        return node;
    }

    insertAll(arr) {
        for (const val of arr) {
            this.insert(val);
        }
    }

    contains(val) {
        return this._search(this.root, val) !== null;
    }

    _search(node, val) {
        if (node === null || node.val === val) {
            return node;
        }
        return val < node.val
            ? this._search(node.left, val)
            : this._search(node.right, val);
    }
}

// Usage
const bst = new BST();
bst.insertAll([8, 3, 10, 1, 6, 14]);
console.log(bst.contains(6));  // true
console.log(bst.contains(5));  // false`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Key Points to Remember</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>New nodes are always inserted as leaf nodes</li>
      <li>Follow BST property: left &lt; root &lt; right</li>
      <li>Insertion order affects tree shape and balance</li>
      <li>Iterative approach saves stack space</li>
      <li>Worst case (sorted input) creates skewed tree</li>
      <li>Use self-balancing trees to maintain O(log n) operations</li>
    </ul>
  </div>
);

export default BSTInsert;
