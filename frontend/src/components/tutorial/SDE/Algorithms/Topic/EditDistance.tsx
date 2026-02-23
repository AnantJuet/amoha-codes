import React from 'react';

const EditDistance: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Edit Distance (Levenshtein Distance)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Edit Distance is the minimum number of operations required to transform one string into another.
      Also known as Levenshtein Distance, it's a fundamental problem in string processing with
      applications in spell checking, DNA analysis, and natural language processing.
    </p>

    <h2 className="text-2xl font-bold mt-6">Problem Statement</h2>
    <div className="bg-gray-100 p-4 rounded-lg">
      <p>Given two strings word1 and word2, find the minimum number of operations to convert word1 to word2.</p>
      <p className="mt-2"><strong>Allowed Operations:</strong></p>
      <ul className="list-disc list-inside mt-2">
        <li>Insert a character</li>
        <li>Delete a character</li>
        <li>Replace a character</li>
      </ul>
      <p className="mt-4"><strong>Example:</strong></p>
      <p className="font-mono">word1 = "horse"</p>
      <p className="font-mono">word2 = "ros"</p>
      <p className="mt-2"><strong>Answer:</strong> 3</p>
      <p className="text-sm">horse → rorse (replace h with r) → rose (delete r) → ros (delete e)</p>
    </div>

    <h2 className="text-2xl font-bold mt-6">Recurrence Relation</h2>
    <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
      <pre className="text-sm">{`If word1[i-1] == word2[j-1]:
    dp[i][j] = dp[i-1][j-1]  // Characters match, no operation

Else:
    dp[i][j] = 1 + min(
        dp[i-1][j],      // Delete from word1
        dp[i][j-1],      // Insert into word1
        dp[i-1][j-1]     // Replace in word1
    )

Base Cases:
    dp[i][0] = i  // Delete all characters from word1
    dp[0][j] = j  // Insert all characters of word2`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Understanding the Operations</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
      <div className="bg-red-50 p-4 rounded-lg">
        <h4 className="font-bold text-red-800">Delete (dp[i-1][j])</h4>
        <p className="mt-2 text-sm">Remove character from word1</p>
        <p className="font-mono text-xs mt-2">"abc" → "ab"</p>
      </div>
      <div className="bg-green-50 p-4 rounded-lg">
        <h4 className="font-bold text-green-800">Insert (dp[i][j-1])</h4>
        <p className="mt-2 text-sm">Add character to word1</p>
        <p className="font-mono text-xs mt-2">"ab" → "abc"</p>
      </div>
      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-bold text-blue-800">Replace (dp[i-1][j-1])</h4>
        <p className="mt-2 text-sm">Change character in word1</p>
        <p className="font-mono text-xs mt-2">"abc" → "adc"</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Approach 1: Recursive (Naive)</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function editDistanceRecursive(word1, word2, m, n) {
    // Base cases
    if (m === 0) return n;  // Insert all of word2
    if (n === 0) return m;  // Delete all of word1

    // If characters match
    if (word1[m - 1] === word2[n - 1]) {
        return editDistanceRecursive(word1, word2, m - 1, n - 1);
    }

    // Try all three operations
    return 1 + Math.min(
        editDistanceRecursive(word1, word2, m - 1, n),     // Delete
        editDistanceRecursive(word1, word2, m, n - 1),     // Insert
        editDistanceRecursive(word1, word2, m - 1, n - 1)  // Replace
    );
}

// Time: O(3^(m+n)) - Exponential
// Space: O(m+n) - Recursion stack`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Approach 2: Memoization (Top-Down)</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function editDistanceMemo(word1, word2) {
    const m = word1.length;
    const n = word2.length;
    const memo = Array(m + 1).fill(null)
        .map(() => Array(n + 1).fill(-1));

    function solve(i, j) {
        if (i === 0) return j;
        if (j === 0) return i;

        if (memo[i][j] !== -1) return memo[i][j];

        if (word1[i - 1] === word2[j - 1]) {
            memo[i][j] = solve(i - 1, j - 1);
        } else {
            memo[i][j] = 1 + Math.min(
                solve(i - 1, j),      // Delete
                solve(i, j - 1),      // Insert
                solve(i - 1, j - 1)   // Replace
            );
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
      <pre className="text-sm">{`function editDistanceTab(word1, word2) {
    const m = word1.length;
    const n = word2.length;

    // Create DP table
    const dp = Array(m + 1).fill(null)
        .map(() => Array(n + 1).fill(0));

    // Base cases
    for (let i = 0; i <= m; i++) dp[i][0] = i;
    for (let j = 0; j <= n; j++) dp[0][j] = j;

    // Fill the table
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = 1 + Math.min(
                    dp[i - 1][j],      // Delete
                    dp[i][j - 1],      // Insert
                    dp[i - 1][j - 1]   // Replace
                );
            }
        }
    }

    return dp[m][n];
}

// Example
console.log(editDistanceTab("horse", "ros")); // Output: 3

// Time: O(m * n)
// Space: O(m * n)`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">DP Table Visualization</h2>
    <div className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
      <pre className="text-sm font-mono">{`word1 = "horse", word2 = "ros"

        ""  r   o   s
    ""   0   1   2   3
    h    1   1   2   3
    o    2   2   1   2
    r    3   2   2   2
    s    4   3   3   2
    e    5   4   4   3

Answer: dp[5][3] = 3

Trace back:
- dp[5][3]=3: e≠s, min(4,4,2)+1=3 (replace)
- dp[4][2]=2: s≠o, min(3,2,1)+1=2 (insert)
- dp[4][1]=3: s≠r, min(2,3,2)+1=3, but came from dp[3][1]
- Continue tracing...`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Space-Optimized Solution</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function editDistanceOptimized(word1, word2) {
    const m = word1.length;
    const n = word2.length;

    let prev = Array(n + 1).fill(0);
    let curr = Array(n + 1).fill(0);

    // Initialize first row
    for (let j = 0; j <= n; j++) prev[j] = j;

    for (let i = 1; i <= m; i++) {
        curr[0] = i;  // First column

        for (let j = 1; j <= n; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                curr[j] = prev[j - 1];
            } else {
                curr[j] = 1 + Math.min(
                    prev[j],      // Delete
                    curr[j - 1],  // Insert
                    prev[j - 1]   // Replace
                );
            }
        }

        [prev, curr] = [curr, prev];
    }

    return prev[n];
}

// Time: O(m * n)
// Space: O(n)`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Printing the Operations</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function editDistanceWithOps(word1, word2) {
    const m = word1.length;
    const n = word2.length;
    const dp = Array(m + 1).fill(null)
        .map(() => Array(n + 1).fill(0));

    // Fill DP table
    for (let i = 0; i <= m; i++) dp[i][0] = i;
    for (let j = 0; j <= n; j++) dp[0][j] = j;

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = 1 + Math.min(
                    dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]
                );
            }
        }
    }

    // Backtrack to find operations
    const ops = [];
    let i = m, j = n;

    while (i > 0 || j > 0) {
        if (i > 0 && j > 0 && word1[i - 1] === word2[j - 1]) {
            i--; j--;  // No operation
        } else if (i > 0 && j > 0 && dp[i][j] === dp[i - 1][j - 1] + 1) {
            ops.push(\`Replace '\${word1[i - 1]}' with '\${word2[j - 1]}'\`);
            i--; j--;
        } else if (j > 0 && dp[i][j] === dp[i][j - 1] + 1) {
            ops.push(\`Insert '\${word2[j - 1]}'\`);
            j--;
        } else {
            ops.push(\`Delete '\${word1[i - 1]}'\`);
            i--;
        }
    }

    return { distance: dp[m][n], operations: ops.reverse() };
}`}</pre>
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
            <td className="p-3 border">O(3^(m+n))</td>
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
      <li><strong>Spell Checking:</strong> Suggesting corrections for misspelled words</li>
      <li><strong>DNA Sequence Alignment:</strong> Comparing genetic sequences</li>
      <li><strong>Plagiarism Detection:</strong> Finding similar text passages</li>
      <li><strong>Fuzzy String Matching:</strong> Approximate string matching in databases</li>
      <li><strong>Natural Language Processing:</strong> Text similarity measures</li>
      <li><strong>Version Control:</strong> Computing diffs between file versions</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Variants</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Weighted Edit Distance:</strong> Different costs for different operations</li>
      <li><strong>Damerau-Levenshtein:</strong> Also allows transposition (swap adjacent)</li>
      <li><strong>Hamming Distance:</strong> Only replacement, strings must be same length</li>
      <li><strong>Jaro-Winkler:</strong> Gives higher scores to strings with common prefix</li>
    </ul>

    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
      <p className="text-blue-700">
        <strong>Key Insight:</strong> Edit Distance is related to LCS. If the LCS has length L,
        and the strings have lengths m and n, then Edit Distance = (m - L) + (n - L) when
        only insertions and deletions are allowed.
      </p>
    </div>
  </div>
);

export default EditDistance;
