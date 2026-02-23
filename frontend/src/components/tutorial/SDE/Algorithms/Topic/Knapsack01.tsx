import React from 'react';

const Knapsack01: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      0/1 Knapsack Problem
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The 0/1 Knapsack problem is a classic optimization problem. Given items with weights and values,
      and a knapsack with limited capacity, find the maximum value that can be achieved by selecting
      items without exceeding the capacity. Each item can be taken at most once (0 or 1).
    </p>

    <h2 className="text-2xl font-bold mt-6">Problem Statement</h2>
    <div className="bg-gray-100 p-4 rounded-lg">
      <p><strong>Given:</strong></p>
      <ul className="list-disc list-inside mt-2">
        <li>n items, each with weight w[i] and value v[i]</li>
        <li>Knapsack with capacity W</li>
      </ul>
      <p className="mt-2"><strong>Find:</strong> Maximum value achievable without exceeding capacity W</p>
      <p className="mt-4"><strong>Example:</strong></p>
      <p className="font-mono">weights = [1, 2, 3, 4]</p>
      <p className="font-mono">values  = [10, 20, 30, 40]</p>
      <p className="font-mono">capacity = 5</p>
      <p className="mt-2"><strong>Answer:</strong> 50 (items with weights 2 and 3, values 20 + 30)</p>
    </div>

    <h2 className="text-2xl font-bold mt-6">Why "0/1"?</h2>
    <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
      <p>The name comes from the binary decision for each item:</p>
      <ul className="list-disc list-inside mt-2">
        <li><strong>0:</strong> Don't include the item</li>
        <li><strong>1:</strong> Include the item</li>
      </ul>
      <p className="mt-2">Unlike fractional knapsack, you cannot take a fraction of an item.</p>
    </div>

    <h2 className="text-2xl font-bold mt-6">Recurrence Relation</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// dp[i][w] = max value using first i items with capacity w

If w[i-1] > w:  // Item too heavy
    dp[i][w] = dp[i-1][w]

Else:  // Can include or exclude
    dp[i][w] = max(
        dp[i-1][w],                    // Exclude item i
        dp[i-1][w-w[i-1]] + v[i-1]     // Include item i
    )

Base Case: dp[0][w] = 0 for all w (no items)
           dp[i][0] = 0 for all i (no capacity)`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Approach 1: Recursive (Naive)</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function knapsackRecursive(weights, values, n, W) {
    // Base case
    if (n === 0 || W === 0) return 0;

    // If item is too heavy, skip it
    if (weights[n - 1] > W) {
        return knapsackRecursive(weights, values, n - 1, W);
    }

    // Return max of including or excluding the item
    return Math.max(
        // Exclude
        knapsackRecursive(weights, values, n - 1, W),
        // Include
        values[n - 1] + knapsackRecursive(weights, values, n - 1, W - weights[n - 1])
    );
}

// Time: O(2^n) - Exponential
// Space: O(n) - Recursion stack`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Approach 2: Memoization (Top-Down)</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function knapsackMemo(weights, values, W) {
    const n = weights.length;
    const memo = Array(n + 1).fill(null)
        .map(() => Array(W + 1).fill(-1));

    function solve(i, w) {
        if (i === 0 || w === 0) return 0;

        if (memo[i][w] !== -1) return memo[i][w];

        if (weights[i - 1] > w) {
            memo[i][w] = solve(i - 1, w);
        } else {
            memo[i][w] = Math.max(
                solve(i - 1, w),
                values[i - 1] + solve(i - 1, w - weights[i - 1])
            );
        }

        return memo[i][w];
    }

    return solve(n, W);
}

// Time: O(n * W)
// Space: O(n * W)`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Approach 3: Tabulation (Bottom-Up)</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function knapsackTab(weights, values, W) {
    const n = weights.length;

    // Create DP table
    const dp = Array(n + 1).fill(null)
        .map(() => Array(W + 1).fill(0));

    // Fill the table
    for (let i = 1; i <= n; i++) {
        for (let w = 1; w <= W; w++) {
            if (weights[i - 1] > w) {
                // Item too heavy
                dp[i][w] = dp[i - 1][w];
            } else {
                // Max of excluding or including
                dp[i][w] = Math.max(
                    dp[i - 1][w],
                    dp[i - 1][w - weights[i - 1]] + values[i - 1]
                );
            }
        }
    }

    return dp[n][W];
}

// Example
const weights = [1, 2, 3, 4];
const values = [10, 20, 30, 40];
console.log(knapsackTab(weights, values, 5)); // Output: 50

// Time: O(n * W)
// Space: O(n * W)`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">DP Table Visualization</h2>
    <div className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
      <pre className="text-sm font-mono">{`weights = [1, 2, 3, 4], values = [10, 20, 30, 40], W = 5

         Capacity (w)
         0   1   2   3   4   5
Item 0   0   0   0   0   0   0
Item 1   0  10  10  10  10  10   (w=1, v=10)
Item 2   0  10  20  30  30  30   (w=2, v=20)
Item 3   0  10  20  30  40  50   (w=3, v=30)
Item 4   0  10  20  30  40  50   (w=4, v=40)

Answer: dp[4][5] = 50`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Space-Optimized Solution</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function knapsackOptimized(weights, values, W) {
    const n = weights.length;

    // Single row DP
    const dp = Array(W + 1).fill(0);

    for (let i = 0; i < n; i++) {
        // Traverse right to left to avoid using updated values
        for (let w = W; w >= weights[i]; w--) {
            dp[w] = Math.max(dp[w], dp[w - weights[i]] + values[i]);
        }
    }

    return dp[W];
}

// Time: O(n * W)
// Space: O(W)`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Finding Selected Items</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function knapsackWithItems(weights, values, W) {
    const n = weights.length;
    const dp = Array(n + 1).fill(null)
        .map(() => Array(W + 1).fill(0));

    // Fill DP table
    for (let i = 1; i <= n; i++) {
        for (let w = 1; w <= W; w++) {
            if (weights[i - 1] > w) {
                dp[i][w] = dp[i - 1][w];
            } else {
                dp[i][w] = Math.max(
                    dp[i - 1][w],
                    dp[i - 1][w - weights[i - 1]] + values[i - 1]
                );
            }
        }
    }

    // Backtrack to find items
    const selected = [];
    let i = n, w = W;

    while (i > 0 && w > 0) {
        if (dp[i][w] !== dp[i - 1][w]) {
            selected.push(i - 1);  // Item i-1 was selected
            w -= weights[i - 1];
        }
        i--;
    }

    return {
        maxValue: dp[n][W],
        selectedItems: selected.reverse()
    };
}

console.log(knapsackWithItems([1, 2, 3, 4], [10, 20, 30, 40], 5));
// { maxValue: 50, selectedItems: [1, 2] } // indices of items`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Complexity Analysis</h2>
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
            <td className="p-3 border">O(2^n)</td>
            <td className="p-3 border">O(n)</td>
          </tr>
          <tr>
            <td className="p-3 border">Memoization</td>
            <td className="p-3 border">O(n * W)</td>
            <td className="p-3 border">O(n * W)</td>
          </tr>
          <tr>
            <td className="p-3 border">Tabulation</td>
            <td className="p-3 border">O(n * W)</td>
            <td className="p-3 border">O(n * W)</td>
          </tr>
          <tr>
            <td className="p-3 border">Space-Optimized</td>
            <td className="p-3 border">O(n * W)</td>
            <td className="p-3 border">O(W)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Knapsack Variants</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-bold text-blue-800">Unbounded Knapsack</h4>
        <p className="mt-2 text-sm">Each item can be selected unlimited times</p>
        <p className="font-mono text-xs mt-2">dp[w] = max(dp[w], dp[w-wt[i]] + v[i])</p>
      </div>
      <div className="bg-green-50 p-4 rounded-lg">
        <h4 className="font-bold text-green-800">Fractional Knapsack</h4>
        <p className="mt-2 text-sm">Can take fractions (Greedy approach)</p>
        <p className="text-xs mt-2">Sort by value/weight ratio, pick greedily</p>
      </div>
      <div className="bg-purple-50 p-4 rounded-lg">
        <h4 className="font-bold text-purple-800">Bounded Knapsack</h4>
        <p className="mt-2 text-sm">Each item has a limited count</p>
        <p className="text-xs mt-2">Count[i] copies of each item available</p>
      </div>
      <div className="bg-orange-50 p-4 rounded-lg">
        <h4 className="font-bold text-orange-800">Multiple Knapsacks</h4>
        <p className="mt-2 text-sm">Multiple knapsacks with different capacities</p>
        <p className="text-xs mt-2">Assign items to different knapsacks</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Applications</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Resource Allocation:</strong> Budget allocation for projects</li>
      <li><strong>Portfolio Optimization:</strong> Investment selection</li>
      <li><strong>Cargo Loading:</strong> Maximizing ship/truck cargo value</li>
      <li><strong>Cutting Stock:</strong> Minimizing waste in cutting materials</li>
      <li><strong>Cryptography:</strong> Merkle-Hellman knapsack cryptosystem</li>
    </ul>

    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
      <p className="text-blue-700">
        <strong>Key Insight:</strong> The 0/1 Knapsack is NP-hard, but DP provides a
        pseudo-polynomial time solution. The key is recognizing the 2D state space
        (item count and capacity) that defines the subproblem structure.
      </p>
    </div>
  </div>
);

export default Knapsack01;
