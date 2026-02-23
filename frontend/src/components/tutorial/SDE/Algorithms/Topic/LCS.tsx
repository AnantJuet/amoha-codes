import React from 'react';

const LCS: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Longest Common Subsequence (LCS)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The Longest Common Subsequence problem finds the longest subsequence common to two sequences.
      A subsequence is a sequence that appears in the same relative order but not necessarily contiguous.
    </p>

    <h2 className="text-2xl font-bold mt-6">Understanding Subsequence vs Substring</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-bold text-blue-800">Subsequence</h4>
        <p className="mt-2 text-sm">Elements in relative order, not necessarily contiguous</p>
        <p className="font-mono mt-2">"ACE" is a subsequence of "ABCDE"</p>
      </div>
      <div className="bg-green-50 p-4 rounded-lg">
        <h4 className="font-bold text-green-800">Substring</h4>
        <p className="mt-2 text-sm">Elements must be contiguous</p>
        <p className="font-mono mt-2">"BCD" is a substring of "ABCDE"</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Problem Statement</h2>
    <div className="bg-gray-100 p-4 rounded-lg">
      <p>Given two strings X and Y, find the length of their longest common subsequence.</p>
      <p className="mt-2"><strong>Example:</strong></p>
      <p className="font-mono">X = "ABCDGH"</p>
      <p className="font-mono">Y = "AEDFHR"</p>
      <p className="mt-2"><strong>LCS:</strong> "ADH" (length = 3)</p>
    </div>

    <h2 className="text-2xl font-bold mt-6">Recurrence Relation</h2>
    <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
      <pre className="text-sm">{`If X[i-1] == Y[j-1]:
    LCS(i, j) = 1 + LCS(i-1, j-1)

Else:
    LCS(i, j) = max(LCS(i-1, j), LCS(i, j-1))

Base Case: LCS(i, 0) = LCS(0, j) = 0`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Approach 1: Recursive (Naive)</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function lcsRecursive(X, Y, m, n) {
    // Base case
    if (m === 0 || n === 0) return 0;

    // If last characters match
    if (X[m - 1] === Y[n - 1]) {
        return 1 + lcsRecursive(X, Y, m - 1, n - 1);
    }

    // If not matching, try both possibilities
    return Math.max(
        lcsRecursive(X, Y, m - 1, n),
        lcsRecursive(X, Y, m, n - 1)
    );
}

// Usage
const X = "ABCDGH";
const Y = "AEDFHR";
console.log(lcsRecursive(X, Y, X.length, Y.length)); // Output: 3

// Time: O(2^(m+n)) - Exponential
// Space: O(m+n) - Recursion stack`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Approach 2: Memoization (Top-Down)</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function lcsMemo(X, Y) {
    const m = X.length;
    const n = Y.length;
    const memo = Array(m + 1).fill(null)
        .map(() => Array(n + 1).fill(-1));

    function solve(i, j) {
        // Base case
        if (i === 0 || j === 0) return 0;

        // Return memoized result
        if (memo[i][j] !== -1) return memo[i][j];

        if (X[i - 1] === Y[j - 1]) {
            memo[i][j] = 1 + solve(i - 1, j - 1);
        } else {
            memo[i][j] = Math.max(solve(i - 1, j), solve(i, j - 1));
        }

        return memo[i][j];
    }

    return solve(m, n);
}

// Time: O(m * n)
// Space: O(m * n)`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Approach 3: Tabulation (Bottom-Up)</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function lcsTab(X, Y) {
    const m = X.length;
    const n = Y.length;

    // Create DP table
    const dp = Array(m + 1).fill(null)
        .map(() => Array(n + 1).fill(0));

    // Fill the table
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (X[i - 1] === Y[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    return dp[m][n];
}

// Time: O(m * n)
// Space: O(m * n)`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">DP Table Visualization</h2>
    <div className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
      <p className="mb-2">X = "ABCD", Y = "AEBD"</p>
      <pre className="text-sm font-mono">{`      ""  A  E  B  D
  ""   0  0  0  0  0
  A    0  1  1  1  1
  B    0  1  1  2  2
  C    0  1  1  2  2
  D    0  1  1  2  3

LCS length = 3 (ABD)`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Printing the LCS</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function printLCS(X, Y) {
    const m = X.length;
    const n = Y.length;

    // Build DP table
    const dp = Array(m + 1).fill(null)
        .map(() => Array(n + 1).fill(0));

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (X[i - 1] === Y[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    // Backtrack to find the LCS string
    let i = m, j = n;
    let lcs = "";

    while (i > 0 && j > 0) {
        if (X[i - 1] === Y[j - 1]) {
            lcs = X[i - 1] + lcs;
            i--;
            j--;
        } else if (dp[i - 1][j] > dp[i][j - 1]) {
            i--;
        } else {
            j--;
        }
    }

    return lcs;
}

console.log(printLCS("ABCDGH", "AEDFHR")); // Output: "ADH"`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Space-Optimized Solution</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function lcsOptimized(X, Y) {
    const m = X.length;
    const n = Y.length;

    // Only keep two rows
    let prev = Array(n + 1).fill(0);
    let curr = Array(n + 1).fill(0);

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (X[i - 1] === Y[j - 1]) {
                curr[j] = 1 + prev[j - 1];
            } else {
                curr[j] = Math.max(prev[j], curr[j - 1]);
            }
        }
        // Swap rows
        [prev, curr] = [curr, prev];
    }

    return prev[n];
}

// Time: O(m * n)
// Space: O(n)`}</pre>
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
            <td className="p-3 border">O(2^(m+n))</td>
            <td className="p-3 border">O(m+n)</td>
          </tr>
          <tr>
            <td className="p-3 border">Memoization</td>
            <td className="p-3 border">O(m*n)</td>
            <td className="p-3 border">O(m*n)</td>
          </tr>
          <tr>
            <td className="p-3 border">Tabulation</td>
            <td className="p-3 border">O(m*n)</td>
            <td className="p-3 border">O(m*n)</td>
          </tr>
          <tr>
            <td className="p-3 border">Space-Optimized</td>
            <td className="p-3 border">O(m*n)</td>
            <td className="p-3 border">O(min(m,n))</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Applications</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Diff Tools:</strong> Finding differences between file versions</li>
      <li><strong>DNA Sequence Alignment:</strong> Comparing genetic sequences</li>
      <li><strong>Version Control:</strong> Git merge conflict resolution</li>
      <li><strong>Plagiarism Detection:</strong> Finding similar text passages</li>
      <li><strong>Data Comparison:</strong> Comparing data streams</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Related Problems</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Shortest Common Supersequence:</strong> m + n - LCS(X, Y)</li>
      <li><strong>Longest Palindromic Subsequence:</strong> LCS(X, reverse(X))</li>
      <li><strong>Edit Distance:</strong> Minimum operations to transform X to Y</li>
      <li><strong>Print All LCS:</strong> Find all longest common subsequences</li>
    </ul>

    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
      <p className="text-blue-700">
        <strong>Key Insight:</strong> LCS is a fundamental 2D DP problem. Understanding the
        recurrence relation and backtracking technique here applies to many similar string problems.
      </p>
    </div>
  </div>
);

export default LCS;
