import React from 'react';

const SubsetSum: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Subset Sum Problem
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The Subset Sum problem asks: given a set of integers, is there a subset whose elements sum
      to a given target value? This is a classic backtracking problem that can also be solved
      with dynamic programming.
    </p>

    <h2 className="text-2xl font-bold mt-6">Problem Variants</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Decision:</strong> Does a subset with target sum exist? (Yes/No)</li>
      <li><strong>Count:</strong> How many subsets sum to target?</li>
      <li><strong>Find One:</strong> Return any subset that sums to target</li>
      <li><strong>Find All:</strong> Return all subsets that sum to target</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Example</h2>
    <div className="bg-gray-100 p-4 rounded-lg">
      <p><strong>Array:</strong> [3, 34, 4, 12, 5, 2]</p>
      <p><strong>Target:</strong> 9</p>
      <p className="mt-2 text-green-600"><strong>Answer:</strong> Yes (subset [4, 5] sums to 9)</p>
    </div>

    <h2 className="text-2xl font-bold mt-6">Backtracking Solution</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Find if any subset sums to target
function hasSubsetSum(nums, target) {
    function backtrack(index, currentSum) {
        // Found target sum
        if (currentSum === target) {
            return true;
        }

        // Exceeded target or no more elements
        if (currentSum > target || index >= nums.length) {
            return false;
        }

        // Include current element OR exclude it
        return backtrack(index + 1, currentSum + nums[index]) ||
               backtrack(index + 1, currentSum);
    }

    return backtrack(0, 0);
}

// Example
const nums = [3, 34, 4, 12, 5, 2];
console.log(hasSubsetSum(nums, 9));   // true
console.log(hasSubsetSum(nums, 30));  // false`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Find All Subsets with Target Sum</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function findAllSubsetSums(nums, target) {
    const results = [];

    function backtrack(index, currentSum, subset) {
        // Found valid subset
        if (currentSum === target) {
            results.push([...subset]);
            return;
        }

        // Exceeded target or no more elements
        if (currentSum > target || index >= nums.length) {
            return;
        }

        // Include current element
        subset.push(nums[index]);
        backtrack(index + 1, currentSum + nums[index], subset);
        subset.pop();  // Backtrack

        // Exclude current element
        backtrack(index + 1, currentSum, subset);
    }

    backtrack(0, 0, []);
    return results;
}

// Example
const nums = [2, 3, 5, 6, 8, 10];
const target = 10;
const subsets = findAllSubsetSums(nums, target);

console.log('Subsets that sum to', target + ':');
subsets.forEach(s => console.log(s));
// [2, 3, 5], [2, 8], [10]`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Count Subsets (with Duplicates Handling)</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function countSubsetSums(nums, target) {
    // Sort to handle duplicates
    nums.sort((a, b) => a - b);

    let count = 0;

    function backtrack(index, currentSum) {
        if (currentSum === target) {
            count++;
            return;
        }

        if (currentSum > target || index >= nums.length) {
            return;
        }

        for (let i = index; i < nums.length; i++) {
            // Skip duplicates
            if (i > index && nums[i] === nums[i - 1]) {
                continue;
            }

            // Pruning: if current number exceeds remaining target
            if (nums[i] > target - currentSum) {
                break;
            }

            backtrack(i + 1, currentSum + nums[i]);
        }
    }

    backtrack(0, 0);
    return count;
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Dynamic Programming Solution</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// DP approach - more efficient for larger inputs
function subsetSumDP(nums, target) {
    const n = nums.length;
    // dp[i][j] = can we make sum j using first i elements?
    const dp = Array(n + 1).fill()
        .map(() => Array(target + 1).fill(false));

    // Base case: sum 0 is always possible (empty subset)
    for (let i = 0; i <= n; i++) {
        dp[i][0] = true;
    }

    // Fill the table
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= target; j++) {
            // Don't include current element
            dp[i][j] = dp[i - 1][j];

            // Include current element (if possible)
            if (j >= nums[i - 1]) {
                dp[i][j] = dp[i][j] || dp[i - 1][j - nums[i - 1]];
            }
        }
    }

    return dp[n][target];
}

// Space optimized version - O(target) space
function subsetSumOptimized(nums, target) {
    const dp = new Array(target + 1).fill(false);
    dp[0] = true;

    for (const num of nums) {
        // Iterate backwards to avoid using same element twice
        for (let j = target; j >= num; j--) {
            dp[j] = dp[j] || dp[j - num];
        }
    }

    return dp[target];
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Complexity Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left text-sm">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Approach</th>
            <th className="p-3 border">Time</th>
            <th className="p-3 border">Space</th>
            <th className="p-3 border">Best For</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Backtracking</td>
            <td className="p-3 border">O(2^n)</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">Finding all subsets</td>
          </tr>
          <tr>
            <td className="p-3 border">DP</td>
            <td className="p-3 border">O(n × target)</td>
            <td className="p-3 border">O(n × target)</td>
            <td className="p-3 border">Decision problem</td>
          </tr>
          <tr>
            <td className="p-3 border">DP Optimized</td>
            <td className="p-3 border">O(n × target)</td>
            <td className="p-3 border">O(target)</td>
            <td className="p-3 border">Space-constrained</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Related Problems</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Partition Equal Subset Sum:</strong> Can array be split into two equal sums?</li>
      <li><strong>Target Sum:</strong> Assign +/- to each number to reach target</li>
      <li><strong>Combination Sum:</strong> Find combinations (with repetition) summing to target</li>
      <li><strong>0/1 Knapsack:</strong> Maximize value within weight constraint</li>
    </ul>

    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
      <p className="text-blue-700">
        <strong>Interview Tip:</strong> Start with backtracking for clarity, then optimize with DP
        if needed. The choice depends on whether you need all subsets (backtracking) or just
        existence/count (DP is more efficient).
      </p>
    </div>
  </div>
);

export default SubsetSum;
