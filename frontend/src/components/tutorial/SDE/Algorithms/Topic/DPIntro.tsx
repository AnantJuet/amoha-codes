import React from 'react';

const DPIntro: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Introduction to Dynamic Programming
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Dynamic Programming (DP) is an algorithmic technique for solving optimization problems by breaking
      them down into simpler subproblems and storing the results to avoid redundant computations.
    </p>

    <h2 className="text-2xl font-bold mt-6">When to Use Dynamic Programming</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Overlapping Subproblems:</strong> The problem can be broken into subproblems that are reused multiple times</li>
      <li><strong>Optimal Substructure:</strong> The optimal solution can be constructed from optimal solutions of subproblems</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Two Approaches</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-bold text-blue-800">Top-Down (Memoization)</h4>
        <p className="mt-2 text-sm">Start from the main problem, break into subproblems, and cache results.</p>
        <ul className="list-disc list-inside text-sm mt-2">
          <li>Uses recursion</li>
          <li>Store results in a memo table</li>
          <li>Easier to implement</li>
        </ul>
      </div>
      <div className="bg-green-50 p-4 rounded-lg">
        <h4 className="font-bold text-green-800">Bottom-Up (Tabulation)</h4>
        <p className="mt-2 text-sm">Solve smaller subproblems first and build up to the main problem.</p>
        <ul className="list-disc list-inside text-sm mt-2">
          <li>Uses iteration</li>
          <li>Fill up a DP table</li>
          <li>More space efficient</li>
        </ul>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Example: Fibonacci Numbers</h2>
    <p className="leading-relaxed">
      The Fibonacci sequence is a classic example to understand DP. fib(n) = fib(n-1) + fib(n-2).
    </p>

    <h3 className="text-xl font-semibold mt-4">Naive Recursive: O(2ⁿ)</h3>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function fib(n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);  // Overlapping calls!
}`}</pre>
    </div>

    <h3 className="text-xl font-semibold mt-4">Memoization (Top-Down): O(n)</h3>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function fib(n, memo = {}) {
    if (n <= 1) return n;
    if (n in memo) return memo[n];

    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];
}`}</pre>
    </div>

    <h3 className="text-xl font-semibold mt-4">Tabulation (Bottom-Up): O(n)</h3>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function fib(n) {
    if (n <= 1) return n;

    const dp = [0, 1];
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Steps to Solve DP Problems</h2>
    <ol className="list-decimal list-inside space-y-2">
      <li>Identify if it's a DP problem (overlapping subproblems + optimal substructure)</li>
      <li>Define the state (what parameters describe a subproblem)</li>
      <li>Write the recurrence relation</li>
      <li>Identify base cases</li>
      <li>Implement using memoization or tabulation</li>
      <li>Optimize space if possible</li>
    </ol>

    <h2 className="text-2xl font-bold mt-6">Common DP Patterns</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>1D DP:</strong> Fibonacci, Climbing Stairs, House Robber</li>
      <li><strong>2D DP:</strong> LCS, Edit Distance, Grid Problems</li>
      <li><strong>Knapsack:</strong> 0/1 Knapsack, Unbounded Knapsack, Subset Sum</li>
      <li><strong>String DP:</strong> Palindrome problems, Pattern Matching</li>
      <li><strong>Tree DP:</strong> Max path sum, diameter of tree</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Classic DP Problems</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Longest Common Subsequence (LCS)</li>
      <li>Longest Increasing Subsequence (LIS)</li>
      <li>0/1 Knapsack</li>
      <li>Coin Change</li>
      <li>Edit Distance</li>
      <li>Matrix Chain Multiplication</li>
      <li>Maximum Subarray Sum (Kadane's)</li>
    </ul>

    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
      <p className="text-blue-700">
        <strong>Pro Tip:</strong> Practice recognizing the "state" of a problem. The state typically
        includes indices, remaining amounts, or visited flags that define a unique subproblem.
      </p>
    </div>
  </div>
);

export default DPIntro;
