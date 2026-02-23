import React from 'react';

const FibonacciDP: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Fibonacci Numbers using Dynamic Programming
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The Fibonacci sequence is a classic example to understand Dynamic Programming. Each number is the
      sum of the two preceding ones: F(n) = F(n-1) + F(n-2), with base cases F(0) = 0 and F(1) = 1.
    </p>

    <h2 className="text-2xl font-bold mt-6">The Fibonacci Sequence</h2>
    <div className="bg-gray-100 p-4 rounded-lg">
      <p className="font-mono">0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...</p>
      <p className="mt-2 text-sm">Position: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, ...</p>
    </div>

    <h2 className="text-2xl font-bold mt-6">Why DP for Fibonacci?</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-red-50 p-4 rounded-lg">
        <h4 className="font-bold text-red-800">Problem with Naive Recursion</h4>
        <ul className="list-disc list-inside text-sm mt-2 space-y-1">
          <li>Same subproblems computed multiple times</li>
          <li>fib(5) calls fib(3) twice, fib(2) three times</li>
          <li>Exponential time complexity O(2^n)</li>
          <li>Extremely slow for large n</li>
        </ul>
      </div>
      <div className="bg-green-50 p-4 rounded-lg">
        <h4 className="font-bold text-green-800">DP Solution Benefits</h4>
        <ul className="list-disc list-inside text-sm mt-2 space-y-1">
          <li>Each subproblem solved only once</li>
          <li>Results stored and reused</li>
          <li>Linear time complexity O(n)</li>
          <li>Can handle large values of n</li>
        </ul>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Approach 1: Naive Recursion (Inefficient)</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function fibNaive(n) {
    // Base cases
    if (n <= 1) return n;

    // Recursive calls - causes redundant computation
    return fibNaive(n - 1) + fibNaive(n - 2);
}

// Time: O(2^n) - Exponential
// Space: O(n) - Call stack depth`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Approach 2: Top-Down DP (Memoization)</h2>
    <p className="leading-relaxed">
      Store computed results in a memo table to avoid redundant calculations.
    </p>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function fibMemo(n, memo = {}) {
    // Base cases
    if (n <= 1) return n;

    // Check if already computed
    if (n in memo) return memo[n];

    // Compute and store result
    memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
    return memo[n];
}

// Time: O(n) - Each subproblem solved once
// Space: O(n) - Memo table + call stack`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Approach 3: Bottom-Up DP (Tabulation)</h2>
    <p className="leading-relaxed">
      Build the solution iteratively from the base cases upward.
    </p>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function fibTab(n) {
    // Handle base cases
    if (n <= 1) return n;

    // Create DP table
    const dp = new Array(n + 1);
    dp[0] = 0;
    dp[1] = 1;

    // Fill table iteratively
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
}

// Time: O(n)
// Space: O(n) - DP table`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Approach 4: Space-Optimized DP</h2>
    <p className="leading-relaxed">
      Since we only need the last two values, we can reduce space to O(1).
    </p>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function fibOptimized(n) {
    if (n <= 1) return n;

    let prev2 = 0;  // F(n-2)
    let prev1 = 1;  // F(n-1)

    for (let i = 2; i <= n; i++) {
        let current = prev1 + prev2;
        prev2 = prev1;
        prev1 = current;
    }

    return prev1;
}

// Time: O(n)
// Space: O(1) - Only two variables`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Visualization of Recursive Calls</h2>
    <div className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
      <pre className="text-sm">{`                    fib(5)
                   /      \\
              fib(4)        fib(3)
             /    \\         /    \\
         fib(3)   fib(2)  fib(2)  fib(1)
         /   \\    /   \\   /   \\
     fib(2) fib(1) fib(1) fib(0) fib(1) fib(0)
     /   \\
fib(1) fib(0)

Notice: fib(3) computed 2 times, fib(2) computed 3 times!`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Complexity Comparison</h2>
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
            <td className="p-3 border">Naive Recursion</td>
            <td className="p-3 border">O(2^n)</td>
            <td className="p-3 border">O(n)</td>
          </tr>
          <tr>
            <td className="p-3 border">Memoization</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(n)</td>
          </tr>
          <tr>
            <td className="p-3 border">Tabulation</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(n)</td>
          </tr>
          <tr>
            <td className="p-3 border">Space-Optimized</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(1)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Approach 5: Matrix Exponentiation (Advanced)</h2>
    <p className="leading-relaxed">
      Using matrix exponentiation, we can compute Fibonacci in O(log n) time.
    </p>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// [F(n+1), F(n)]   =  [1, 1]^n   *  [F(1)]
// [F(n), F(n-1)]      [1, 0]        [F(0)]

function matrixMultiply(A, B) {
    return [
        [A[0][0]*B[0][0] + A[0][1]*B[1][0], A[0][0]*B[0][1] + A[0][1]*B[1][1]],
        [A[1][0]*B[0][0] + A[1][1]*B[1][0], A[1][0]*B[0][1] + A[1][1]*B[1][1]]
    ];
}

function matrixPower(M, n) {
    if (n === 1) return M;

    if (n % 2 === 0) {
        let half = matrixPower(M, n / 2);
        return matrixMultiply(half, half);
    } else {
        return matrixMultiply(M, matrixPower(M, n - 1));
    }
}

function fibMatrix(n) {
    if (n <= 1) return n;

    const M = [[1, 1], [1, 0]];
    const result = matrixPower(M, n);
    return result[0][1];
}

// Time: O(log n)
// Space: O(log n) - recursion depth`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Related Problems</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Climbing Stairs:</strong> Ways to reach n-th step (1 or 2 steps at a time)</li>
      <li><strong>Tribonacci:</strong> T(n) = T(n-1) + T(n-2) + T(n-3)</li>
      <li><strong>House Robber:</strong> Maximum sum of non-adjacent elements</li>
      <li><strong>Decode Ways:</strong> Count ways to decode a digit string</li>
    </ul>

    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
      <p className="text-blue-700">
        <strong>Key Insight:</strong> The Fibonacci problem demonstrates the core DP concept -
        overlapping subproblems. Recognizing this pattern helps solve many similar recurrence-based problems.
      </p>
    </div>
  </div>
);

export default FibonacciDP;
