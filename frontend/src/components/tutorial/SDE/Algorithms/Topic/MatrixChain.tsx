import React from 'react';

const MatrixChain: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Matrix Chain Multiplication
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Matrix Chain Multiplication is a classic DP problem that finds the most efficient way to
      multiply a chain of matrices. The order of multiplication matters for computational efficiency,
      though the final result remains the same.
    </p>

    <h2 className="text-2xl font-bold mt-6">Problem Statement</h2>
    <div className="bg-gray-100 p-4 rounded-lg">
      <p>Given a chain of matrices A1, A2, ..., An with dimensions p0 x p1, p1 x p2, ..., p(n-1) x pn,
      find the minimum number of scalar multiplications needed to compute the product A1 * A2 * ... * An.</p>
      <p className="mt-4"><strong>Example:</strong></p>
      <p className="font-mono">Matrices: A (10x30), B (30x5), C (5x60)</p>
      <p className="font-mono">dimensions = [10, 30, 5, 60]</p>
      <p className="mt-2">
        (A*B)*C = (10*30*5) + (10*5*60) = 1500 + 3000 = 4500<br/>
        A*(B*C) = (30*5*60) + (10*30*60) = 9000 + 18000 = 27000
      </p>
      <p className="mt-2"><strong>Optimal:</strong> (A*B)*C with 4500 operations</p>
    </div>

    <h2 className="text-2xl font-bold mt-6">Why Order Matters</h2>
    <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
      <p>Multiplying an (a x b) matrix with a (b x c) matrix:</p>
      <ul className="list-disc list-inside mt-2">
        <li>Results in an (a x c) matrix</li>
        <li>Requires a * b * c scalar multiplications</li>
      </ul>
      <p className="mt-2">Different parenthesization leads to vastly different costs!</p>
    </div>

    <h2 className="text-2xl font-bold mt-6">Recurrence Relation</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// dp[i][j] = minimum cost to multiply matrices from i to j

dp[i][j] = min(dp[i][k] + dp[k+1][j] + p[i-1]*p[k]*p[j])
           for all k from i to j-1

// dp[i][k] = cost to compute A[i...k]
// dp[k+1][j] = cost to compute A[k+1...j]
// p[i-1]*p[k]*p[j] = cost to multiply the two results

Base Case: dp[i][i] = 0 (single matrix, no multiplication needed)`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Approach 1: Recursive (Naive)</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function mcmRecursive(p, i, j) {
    // Base case: single matrix
    if (i === j) return 0;

    let minCost = Infinity;

    // Try all possible split points
    for (let k = i; k < j; k++) {
        const cost = mcmRecursive(p, i, k) +
                     mcmRecursive(p, k + 1, j) +
                     p[i - 1] * p[k] * p[j];

        minCost = Math.min(minCost, cost);
    }

    return minCost;
}

// Usage: p = [10, 30, 5, 60], n = 3 matrices
// mcmRecursive(p, 1, 3)

// Time: O(2^n) - Exponential (Catalan number)
// Space: O(n) - Recursion stack`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Approach 2: Memoization (Top-Down)</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function mcmMemo(p) {
    const n = p.length - 1;  // Number of matrices
    const memo = Array(n + 1).fill(null)
        .map(() => Array(n + 1).fill(-1));

    function solve(i, j) {
        if (i === j) return 0;

        if (memo[i][j] !== -1) return memo[i][j];

        let minCost = Infinity;

        for (let k = i; k < j; k++) {
            const cost = solve(i, k) + solve(k + 1, j) +
                         p[i - 1] * p[k] * p[j];
            minCost = Math.min(minCost, cost);
        }

        memo[i][j] = minCost;
        return minCost;
    }

    return solve(1, n);
}

// Time: O(n^3)
// Space: O(n^2)`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Approach 3: Tabulation (Bottom-Up)</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function mcmTab(p) {
    const n = p.length - 1;  // Number of matrices

    // dp[i][j] = min cost to multiply matrices i to j
    const dp = Array(n + 1).fill(null)
        .map(() => Array(n + 1).fill(0));

    // len is the chain length
    for (let len = 2; len <= n; len++) {
        for (let i = 1; i <= n - len + 1; i++) {
            const j = i + len - 1;
            dp[i][j] = Infinity;

            // Try all split points
            for (let k = i; k < j; k++) {
                const cost = dp[i][k] + dp[k + 1][j] +
                             p[i - 1] * p[k] * p[j];
                dp[i][j] = Math.min(dp[i][j], cost);
            }
        }
    }

    return dp[1][n];
}

// Example
const p = [10, 30, 5, 60];
console.log(mcmTab(p)); // Output: 4500

// Time: O(n^3)
// Space: O(n^2)`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">DP Table Visualization</h2>
    <div className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
      <pre className="text-sm font-mono">{`p = [10, 30, 5, 60]  // 3 matrices: A(10x30), B(30x5), C(5x60)

DP Table (dp[i][j]):
         j=1    j=2    j=3
i=1       0    1500   4500
i=2       -      0    9000
i=3       -      -      0

Calculation:
- dp[1][1] = dp[2][2] = dp[3][3] = 0 (single matrix)
- dp[1][2] = p[0]*p[1]*p[2] = 10*30*5 = 1500
- dp[2][3] = p[1]*p[2]*p[3] = 30*5*60 = 9000
- dp[1][3] = min(
    dp[1][1] + dp[2][3] + p[0]*p[1]*p[3] = 0 + 9000 + 18000 = 27000,
    dp[1][2] + dp[3][3] + p[0]*p[2]*p[3] = 1500 + 0 + 3000 = 4500
  ) = 4500

Answer: 4500`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Printing Optimal Parenthesization</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function mcmWithParenthesis(p) {
    const n = p.length - 1;
    const dp = Array(n + 1).fill(null)
        .map(() => Array(n + 1).fill(0));
    const split = Array(n + 1).fill(null)
        .map(() => Array(n + 1).fill(0));

    for (let len = 2; len <= n; len++) {
        for (let i = 1; i <= n - len + 1; i++) {
            const j = i + len - 1;
            dp[i][j] = Infinity;

            for (let k = i; k < j; k++) {
                const cost = dp[i][k] + dp[k + 1][j] +
                             p[i - 1] * p[k] * p[j];
                if (cost < dp[i][j]) {
                    dp[i][j] = cost;
                    split[i][j] = k;  // Store split point
                }
            }
        }
    }

    function printParens(i, j) {
        if (i === j) return \`A\${i}\`;
        const k = split[i][j];
        return \`(\${printParens(i, k)} x \${printParens(k + 1, j)})\`;
    }

    return {
        minCost: dp[1][n],
        parenthesization: printParens(1, n)
    };
}

console.log(mcmWithParenthesis([10, 30, 5, 60]));
// { minCost: 4500, parenthesization: "((A1 x A2) x A3)" }`}</pre>
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
            <td className="p-3 border">O(n^3)</td>
            <td className="p-3 border">O(n^2)</td>
          </tr>
          <tr>
            <td className="p-3 border">Tabulation</td>
            <td className="p-3 border">O(n^3)</td>
            <td className="p-3 border">O(n^2)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Key Properties</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-bold text-blue-800">Optimal Substructure</h4>
        <p className="mt-2 text-sm">
          The optimal solution contains optimal solutions to subproblems.
          If the optimal split is at k, then both Ai...Ak and Ak+1...Aj
          must be optimally parenthesized.
        </p>
      </div>
      <div className="bg-green-50 p-4 rounded-lg">
        <h4 className="font-bold text-green-800">Overlapping Subproblems</h4>
        <p className="mt-2 text-sm">
          The same subproblems are solved multiple times in the recursive approach.
          For example, M[2,4] might be needed when computing both M[1,4] and M[2,5].
        </p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Related Problems</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Optimal BST:</strong> Construct BST with minimum search cost</li>
      <li><strong>Polygon Triangulation:</strong> Minimum cost to triangulate a polygon</li>
      <li><strong>Burst Balloons:</strong> Maximum coins from bursting balloons</li>
      <li><strong>Boolean Parenthesization:</strong> Count ways to parenthesize expression</li>
      <li><strong>Palindrome Partitioning:</strong> Minimum cuts for palindrome partition</li>
    </ul>

    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
      <p className="text-blue-700">
        <strong>Key Insight:</strong> MCM is a classic "interval DP" problem where we optimize
        over all possible ways to split an interval. This pattern appears in many problems
        involving sequences that need to be divided optimally.
      </p>
    </div>
  </div>
);

export default MatrixChain;
