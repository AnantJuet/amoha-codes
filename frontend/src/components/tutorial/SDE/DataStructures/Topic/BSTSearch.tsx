import React from 'react';

const BSTSearch: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Search in Binary Search Tree
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Searching in a BST is efficient because of its ordering property. At each node, we can
      eliminate half of the remaining tree by comparing the target value with the current node.
      This gives us O(log n) average time complexity, similar to binary search in a sorted array.
    </p>

    <h2 className="text-2xl font-bold mt-6">How Search Works</h2>
    <div className="bg-gray-50 p-4 rounded-lg mt-4">
      <pre className="text-center">{`        8
       / \\
      3   10
     / \\    \\
    1   6    14

Searching for 6:
1. Start at root (8): 6 < 8, go left
2. At node 3: 6 > 3, go right
3. At node 6: Found!

Searching for 5:
1. Start at root (8): 5 < 8, go left
2. At node 3: 5 > 3, go right
3. At node 6: 5 < 6, go left
4. Left is null: Not found!`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Algorithm Steps</h2>
    <div className="bg-blue-50 p-4 rounded-lg mt-4">
      <ol className="list-decimal list-inside space-y-2">
        <li>If the tree is empty, return null (not found)</li>
        <li>If target equals current node value, return the node</li>
        <li>If target is less than current value, search in left subtree</li>
        <li>If target is greater than current value, search in right subtree</li>
      </ol>
    </div>

    <h2 className="text-2xl font-bold mt-6">Recursive Implementation</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Recursive search - clean and intuitive
function searchBST(root, target) {
    // Base case: empty tree or found
    if (root === null || root.val === target) {
        return root;
    }

    // Search in left or right subtree
    if (target < root.val) {
        return searchBST(root.left, target);
    } else {
        return searchBST(root.right, target);
    }
}

// Usage
const result = searchBST(root, 6);
if (result !== null) {
    console.log("Found:", result.val);
} else {
    console.log("Not found");
}

// One-liner version using ternary
function searchBSTOneLine(root, target) {
    return root === null || root.val === target
        ? root
        : target < root.val
            ? searchBSTOneLine(root.left, target)
            : searchBSTOneLine(root.right, target);
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Iterative Implementation</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Iterative search - more efficient (no call stack)
function searchBSTIterative(root, target) {
    let current = root;

    while (current !== null) {
        if (target === current.val) {
            return current; // Found
        } else if (target < current.val) {
            current = current.left; // Go left
        } else {
            current = current.right; // Go right
        }
    }

    return null; // Not found
}

// Alternative with explicit comparison
function searchBSTIterative2(root, target) {
    while (root !== null && root.val !== target) {
        root = target < root.val ? root.left : root.right;
    }
    return root;
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Search Variations</h2>

    <h3 className="text-xl font-semibold mt-4">1. Check if Value Exists</h3>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Returns boolean instead of node
function contains(root, target) {
    if (root === null) return false;
    if (root.val === target) return true;

    return target < root.val
        ? contains(root.left, target)
        : contains(root.right, target);
}

// Iterative version
function containsIterative(root, target) {
    while (root !== null) {
        if (target === root.val) return true;
        root = target < root.val ? root.left : root.right;
    }
    return false;
}`}</pre>
    </div>

    <h3 className="text-xl font-semibold mt-4">2. Find Floor (Largest value &lt;= target)</h3>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Floor: largest value <= target
function floor(root, target) {
    let floor = null;

    while (root !== null) {
        if (root.val === target) {
            return root.val;
        } else if (root.val < target) {
            floor = root.val; // Potential floor
            root = root.right; // Look for closer value
        } else {
            root = root.left;
        }
    }

    return floor;
}

// Example: floor(root, 5) in BST [1,3,6,8,10]
// Returns 3 (largest value <= 5)`}</pre>
    </div>

    <h3 className="text-xl font-semibold mt-4">3. Find Ceiling (Smallest value &gt;= target)</h3>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Ceiling: smallest value >= target
function ceiling(root, target) {
    let ceiling = null;

    while (root !== null) {
        if (root.val === target) {
            return root.val;
        } else if (root.val > target) {
            ceiling = root.val; // Potential ceiling
            root = root.left; // Look for closer value
        } else {
            root = root.right;
        }
    }

    return ceiling;
}

// Example: ceiling(root, 5) in BST [1,3,6,8,10]
// Returns 6 (smallest value >= 5)`}</pre>
    </div>

    <h3 className="text-xl font-semibold mt-4">4. Find Closest Value</h3>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Find value closest to target
function closestValue(root, target) {
    let closest = root.val;

    while (root !== null) {
        // Update closest if current is nearer
        if (Math.abs(root.val - target) < Math.abs(closest - target)) {
            closest = root.val;
        }

        // Navigate based on target
        root = target < root.val ? root.left : root.right;
    }

    return closest;
}

// Example: closestValue(root, 5.3) in BST [1,3,6,8,10]
// Returns 6`}</pre>
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
            <td className="p-3 border">O(h) - call stack</td>
          </tr>
          <tr>
            <td className="p-3 border">Iterative</td>
            <td className="p-3 border">O(log n)</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(1)</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p className="text-sm mt-2">Note: Worst case O(n) occurs when tree is skewed (like a linked list)</p>

    <h2 className="text-2xl font-bold mt-6">Range Search</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Find all values in range [low, high]
function rangeSearch(root, low, high) {
    const result = [];

    function search(node) {
        if (node === null) return;

        // If current value is in range, check both subtrees
        // If current < low, no need to check left
        // If current > high, no need to check right

        if (node.val > low) {
            search(node.left);
        }

        if (node.val >= low && node.val <= high) {
            result.push(node.val);
        }

        if (node.val < high) {
            search(node.right);
        }
    }

    search(root);
    return result;
}

// Example: rangeSearch(root, 4, 9) in BST [1,3,6,8,10]
// Returns [6, 8]`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Kth Smallest Element</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Find kth smallest element (1-indexed)
function kthSmallest(root, k) {
    let count = 0;
    let result = null;

    function inorder(node) {
        if (node === null || result !== null) return;

        inorder(node.left);

        count++;
        if (count === k) {
            result = node.val;
            return;
        }

        inorder(node.right);
    }

    inorder(root);
    return result;
}

// Iterative version
function kthSmallestIterative(root, k) {
    const stack = [];

    while (true) {
        while (root !== null) {
            stack.push(root);
            root = root.left;
        }

        root = stack.pop();
        k--;

        if (k === 0) return root.val;

        root = root.right;
    }
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Key Points to Remember</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Search exploits BST property: left &lt; root &lt; right</li>
      <li>Each comparison eliminates half the tree (when balanced)</li>
      <li>Iterative approach is more space-efficient (O(1) vs O(h))</li>
      <li>Worst case is O(n) for skewed trees</li>
      <li>Floor, ceiling, and closest value are common variations</li>
      <li>Range queries can be optimized using BST property</li>
    </ul>
  </div>
);

export default BSTSearch;
