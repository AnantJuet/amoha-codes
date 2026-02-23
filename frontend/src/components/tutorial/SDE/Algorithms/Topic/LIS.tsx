import React from 'react';

const LIS: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Longest Increasing Subsequence (LIS)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The Longest Increasing Subsequence problem finds the longest subsequence of a given sequence
      in which elements are in strictly increasing order. This is a classic DP problem with multiple
      solution approaches.
    </p>

    <h2 className="text-2xl font-bold mt-6">Problem Statement</h2>
    <div className="bg-gray-100 p-4 rounded-lg">
      <p>Given an array of integers, find the length of the longest strictly increasing subsequence.</p>
      <p className="mt-2"><strong>Example:</strong></p>
      <p className="font-mono">arr = [10, 9, 2, 5, 3, 7, 101, 18]</p>
      <p className="mt-2"><strong>LIS:</strong> [2, 3, 7, 18] or [2, 5, 7, 101] (length = 4)</p>
    </div>

    <h2 className="text-2xl font-bold mt-6">Understanding the Problem</h2>
    <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
      <ul className="list-disc list-inside space-y-2">
        <li>Subsequence: Elements in relative order (not necessarily contiguous)</li>
        <li>Increasing: Each element strictly greater than the previous</li>
        <li>Multiple valid LIS may exist with the same length</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold mt-6">Approach 1: Recursive (Naive)</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function lisRecursive(arr, n, prev) {
    // Base case
    if (n === 0) return 0;

    // Exclude current element
    let exclude = lisRecursive(arr, n - 1, prev);

    // Include current element if valid
    let include = 0;
    if (prev === -1 || arr[n - 1] < arr[prev]) {
        include = 1 + lisRecursive(arr, n - 1, n - 1);
    }

    return Math.max(include, exclude);
}

// Time: O(2^n) - Exponential
// Space: O(n) - Recursion stack`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Approach 2: Dynamic Programming O(n^2)</h2>
    <p className="leading-relaxed">
      Define dp[i] as the length of LIS ending at index i. For each element, look at all previous
      elements that are smaller.
    </p>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function lisDP(arr) {
    const n = arr.length;
    if (n === 0) return 0;

    // dp[i] = length of LIS ending at index i
    const dp = Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            // If arr[j] < arr[i], we can extend LIS ending at j
            if (arr[j] < arr[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    // Return maximum LIS length
    return Math.max(...dp);
}

// Example
const arr = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(lisDP(arr)); // Output: 4

// Time: O(n^2)
// Space: O(n)`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">DP Table Visualization</h2>
    <div className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
      <pre className="text-sm font-mono">{`arr:  [10,  9,  2,  5,  3,  7, 101, 18]
index:  0   1   2   3   4   5    6   7

dp:   [ 1,  1,  1,  2,  2,  3,   4,  4]

Explanation:
- dp[0] = 1: LIS ending at 10 is [10]
- dp[1] = 1: LIS ending at 9 is [9]
- dp[2] = 1: LIS ending at 2 is [2]
- dp[3] = 2: LIS ending at 5 is [2, 5]
- dp[4] = 2: LIS ending at 3 is [2, 3]
- dp[5] = 3: LIS ending at 7 is [2, 3, 7] or [2, 5, 7]
- dp[6] = 4: LIS ending at 101 is [2, 3, 7, 101]
- dp[7] = 4: LIS ending at 18 is [2, 3, 7, 18]`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Approach 3: Binary Search O(n log n)</h2>
    <p className="leading-relaxed">
      Maintain a "tails" array where tails[i] is the smallest ending element of all increasing
      subsequences of length i+1.
    </p>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function lisBinarySearch(arr) {
    const n = arr.length;
    if (n === 0) return 0;

    // tails[i] = smallest tail element for LIS of length i+1
    const tails = [];

    for (const num of arr) {
        // Binary search for position
        let left = 0, right = tails.length;

        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (tails[mid] < num) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        // Replace or extend
        if (left === tails.length) {
            tails.push(num);
        } else {
            tails[left] = num;
        }
    }

    return tails.length;
}

// Time: O(n log n)
// Space: O(n)`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Binary Search Approach Visualization</h2>
    <div className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
      <pre className="text-sm font-mono">{`arr = [10, 9, 2, 5, 3, 7, 101, 18]

Processing each element:
10  -> tails = [10]
9   -> tails = [9]       (replace 10 with 9)
2   -> tails = [2]       (replace 9 with 2)
5   -> tails = [2, 5]    (extend)
3   -> tails = [2, 3]    (replace 5 with 3)
7   -> tails = [2, 3, 7] (extend)
101 -> tails = [2, 3, 7, 101] (extend)
18  -> tails = [2, 3, 7, 18]  (replace 101 with 18)

Final length = 4

Note: tails may not be the actual LIS, but its length is correct!`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Printing the Actual LIS</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function printLIS(arr) {
    const n = arr.length;
    if (n === 0) return [];

    const dp = Array(n).fill(1);
    const parent = Array(n).fill(-1);

    let maxLen = 1;
    let maxIdx = 0;

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[j] < arr[i] && dp[j] + 1 > dp[i]) {
                dp[i] = dp[j] + 1;
                parent[i] = j;
            }
        }
        if (dp[i] > maxLen) {
            maxLen = dp[i];
            maxIdx = i;
        }
    }

    // Reconstruct LIS
    const lis = [];
    let idx = maxIdx;
    while (idx !== -1) {
        lis.unshift(arr[idx]);
        idx = parent[idx];
    }

    return lis;
}

console.log(printLIS([10, 9, 2, 5, 3, 7, 101, 18]));
// Output: [2, 3, 7, 18] or [2, 5, 7, 101]`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Variations</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-bold text-blue-800">Non-Decreasing (LIS with equals)</h4>
        <p className="mt-2 text-sm">Change condition from {"<"} to {"<="}</p>
        <p className="font-mono text-sm mt-1">if (arr[j] {"<="} arr[i])</p>
      </div>
      <div className="bg-green-50 p-4 rounded-lg">
        <h4 className="font-bold text-green-800">Longest Decreasing Subsequence</h4>
        <p className="mt-2 text-sm">Reverse the comparison</p>
        <p className="font-mono text-sm mt-1">if (arr[j] {">"} arr[i])</p>
      </div>
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
            <td className="p-3 border">Recursive</td>
            <td className="p-3 border">O(2^n)</td>
            <td className="p-3 border">O(n)</td>
          </tr>
          <tr>
            <td className="p-3 border">DP (Quadratic)</td>
            <td className="p-3 border">O(n^2)</td>
            <td className="p-3 border">O(n)</td>
          </tr>
          <tr>
            <td className="p-3 border">Binary Search</td>
            <td className="p-3 border">O(n log n)</td>
            <td className="p-3 border">O(n)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Applications</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Stock Trading:</strong> Finding longest increasing price trend</li>
      <li><strong>Box Stacking:</strong> Maximum boxes that can be stacked</li>
      <li><strong>Scheduling:</strong> Finding longest chain of compatible activities</li>
      <li><strong>Patience Sorting:</strong> Card game and sorting algorithm</li>
      <li><strong>Bioinformatics:</strong> Gene sequence analysis</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Related Problems</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Number of LIS:</strong> Count how many LIS exist</li>
      <li><strong>Longest Bitonic Subsequence:</strong> Increase then decrease</li>
      <li><strong>Maximum Sum Increasing Subsequence:</strong> LIS with max sum</li>
      <li><strong>Building Bridges:</strong> Crossing-free connections</li>
      <li><strong>Russian Doll Envelopes:</strong> 2D LIS variant</li>
    </ul>

    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
      <p className="text-blue-700">
        <strong>Key Insight:</strong> The O(n log n) binary search solution is a great example of
        how maintaining the right auxiliary data structure can dramatically improve efficiency.
      </p>
    </div>
  </div>
);

export default LIS;
