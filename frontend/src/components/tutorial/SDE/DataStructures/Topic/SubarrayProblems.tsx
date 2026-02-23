import React from 'react';

const SubarrayProblems: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Common Subarray Problems
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A subarray is a contiguous part of an array. Subarray problems are among the most frequently asked
      questions in coding interviews. They test your understanding of arrays, optimization techniques,
      and algorithmic thinking including sliding window, two pointers, and dynamic programming.
    </p>

    <h2 className="text-2xl font-bold mt-6">Understanding Subarrays</h2>
    <div className="bg-gray-50 p-4 rounded-lg mt-4">
      <h4 className="font-bold">For array [1, 2, 3]:</h4>
      <ul className="list-disc list-inside mt-2 space-y-1">
        <li>Subarrays: [1], [2], [3], [1,2], [2,3], [1,2,3]</li>
        <li>Total subarrays = n*(n+1)/2 = 6</li>
        <li>Note: Unlike subsequences, subarrays must be contiguous</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold mt-6">1. Maximum Subarray Sum (Kadane's Algorithm)</h2>
    <p className="leading-relaxed">
      Find the contiguous subarray with the largest sum. Classic dynamic programming problem.
    </p>
    <div className="bg-gray-50 p-4 rounded-lg mt-4">
      <h4 className="font-bold">Example:</h4>
      <div className="font-mono mt-2">
        <p>Array: [-2, 1, -3, 4, -1, 2, 1, -5, 4]</p>
        <p>Maximum subarray: [4, -1, 2, 1] with sum = 6</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">2. Subarray with Given Sum</h2>
    <p className="leading-relaxed">
      Find a contiguous subarray that adds up to a target sum. Uses prefix sum or sliding window.
    </p>

    <h2 className="text-2xl font-bold mt-6">3. Longest Subarray with Sum K</h2>
    <p className="leading-relaxed">
      Find the length of the longest subarray with sum equal to K. Uses hashmap with prefix sums.
    </p>

    <h2 className="text-2xl font-bold mt-6">4. Count Subarrays with Sum K</h2>
    <p className="leading-relaxed">
      Count how many subarrays have sum equal to K. Efficient solution uses prefix sum with hashmap.
    </p>

    <h2 className="text-2xl font-bold mt-6">5. Maximum Product Subarray</h2>
    <p className="leading-relaxed">
      Find the contiguous subarray with the largest product. Track both max and min due to negatives.
    </p>

    <h2 className="text-2xl font-bold mt-6">JavaScript Implementation</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// 1. Maximum Subarray Sum - Kadane's Algorithm - O(n)
function maxSubarraySum(arr) {
    let maxSoFar = arr[0];
    let maxEndingHere = arr[0];
    let start = 0, end = 0, tempStart = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxEndingHere + arr[i]) {
            maxEndingHere = arr[i];
            tempStart = i;
        } else {
            maxEndingHere += arr[i];
        }

        if (maxEndingHere > maxSoFar) {
            maxSoFar = maxEndingHere;
            start = tempStart;
            end = i;
        }
    }

    return { maxSum: maxSoFar, subarray: arr.slice(start, end + 1) };
}

// 2. Subarray with Given Sum (positive numbers) - O(n)
function subarrayWithSum(arr, target) {
    let start = 0;
    let currentSum = 0;

    for (let end = 0; end < arr.length; end++) {
        currentSum += arr[end];

        while (currentSum > target && start < end) {
            currentSum -= arr[start];
            start++;
        }

        if (currentSum === target) {
            return arr.slice(start, end + 1);
        }
    }
    return null;
}

// 3. Subarray with Given Sum (including negatives) - O(n)
function subarrayWithSumNegatives(arr, target) {
    const prefixSum = new Map();
    prefixSum.set(0, -1);
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

        if (prefixSum.has(sum - target)) {
            const start = prefixSum.get(sum - target) + 1;
            return arr.slice(start, i + 1);
        }

        prefixSum.set(sum, i);
    }
    return null;
}

// 4. Longest Subarray with Sum K - O(n)
function longestSubarrayWithSumK(arr, k) {
    const prefixSum = new Map();
    prefixSum.set(0, -1);
    let sum = 0;
    let maxLen = 0;
    let result = { start: -1, end: -1 };

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

        if (prefixSum.has(sum - k)) {
            const start = prefixSum.get(sum - k) + 1;
            const len = i - start + 1;
            if (len > maxLen) {
                maxLen = len;
                result = { start, end: i };
            }
        }

        // Only store first occurrence to maximize length
        if (!prefixSum.has(sum)) {
            prefixSum.set(sum, i);
        }
    }

    return { length: maxLen, ...result };
}

// 5. Count Subarrays with Sum K - O(n)
function countSubarraysWithSumK(arr, k) {
    const prefixSum = new Map();
    prefixSum.set(0, 1);
    let sum = 0;
    let count = 0;

    for (const num of arr) {
        sum += num;

        if (prefixSum.has(sum - k)) {
            count += prefixSum.get(sum - k);
        }

        prefixSum.set(sum, (prefixSum.get(sum) || 0) + 1);
    }

    return count;
}

// 6. Maximum Product Subarray - O(n)
function maxProductSubarray(arr) {
    let maxProduct = arr[0];
    let minProduct = arr[0];
    let result = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < 0) {
            [maxProduct, minProduct] = [minProduct, maxProduct];
        }

        maxProduct = Math.max(arr[i], maxProduct * arr[i]);
        minProduct = Math.min(arr[i], minProduct * arr[i]);

        result = Math.max(result, maxProduct);
    }

    return result;
}

// 7. Smallest Subarray with Sum >= K - O(n)
function smallestSubarrayWithSumK(arr, k) {
    let minLen = Infinity;
    let start = 0;
    let sum = 0;

    for (let end = 0; end < arr.length; end++) {
        sum += arr[end];

        while (sum >= k) {
            minLen = Math.min(minLen, end - start + 1);
            sum -= arr[start];
            start++;
        }
    }

    return minLen === Infinity ? 0 : minLen;
}

// 8. Subarray with Equal 0s and 1s - O(n)
function subarrayWithEqual01(arr) {
    // Replace 0 with -1, then find subarray with sum 0
    const modified = arr.map(x => x === 0 ? -1 : x);

    const prefixSum = new Map();
    prefixSum.set(0, -1);
    let sum = 0;
    let maxLen = 0;

    for (let i = 0; i < modified.length; i++) {
        sum += modified[i];

        if (prefixSum.has(sum)) {
            maxLen = Math.max(maxLen, i - prefixSum.get(sum));
        } else {
            prefixSum.set(sum, i);
        }
    }

    return maxLen;
}

// 9. Find All Subarrays - O(n^2)
function findAllSubarrays(arr) {
    const subarrays = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            subarrays.push(arr.slice(i, j + 1));
        }
    }
    return subarrays;
}

// 10. Maximum Sum Circular Subarray - O(n)
function maxSumCircularSubarray(arr) {
    // Case 1: Maximum subarray is not circular (use Kadane's)
    let maxKadane = kadane(arr);

    // Case 2: Maximum subarray is circular
    // This equals total sum - minimum subarray sum
    let totalSum = arr.reduce((a, b) => a + b, 0);
    let minKadane = kadaneMin(arr);

    // Handle case where all elements are negative
    if (totalSum === minKadane) {
        return maxKadane;
    }

    return Math.max(maxKadane, totalSum - minKadane);
}

function kadane(arr) {
    let maxSoFar = arr[0];
    let maxEndingHere = arr[0];
    for (let i = 1; i < arr.length; i++) {
        maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }
    return maxSoFar;
}

function kadaneMin(arr) {
    let minSoFar = arr[0];
    let minEndingHere = arr[0];
    for (let i = 1; i < arr.length; i++) {
        minEndingHere = Math.min(arr[i], minEndingHere + arr[i]);
        minSoFar = Math.min(minSoFar, minEndingHere);
    }
    return minSoFar;
}

// Usage examples
console.log(maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// { maxSum: 6, subarray: [4, -1, 2, 1] }

console.log(subarrayWithSum([1, 4, 20, 3, 10, 5], 33));
// [20, 3, 10]

console.log(countSubarraysWithSumK([1, 1, 1], 2));
// 2

console.log(maxProductSubarray([2, 3, -2, 4]));
// 6

console.log(smallestSubarrayWithSumK([2, 1, 5, 2, 3, 2], 7));
// 2`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Complexity Analysis</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Problem</th>
            <th className="p-3 border">Time</th>
            <th className="p-3 border">Space</th>
            <th className="p-3 border">Technique</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Maximum Subarray Sum</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">Kadane's Algorithm</td>
          </tr>
          <tr>
            <td className="p-3 border">Subarray with Sum (positive)</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">Sliding Window</td>
          </tr>
          <tr>
            <td className="p-3 border">Subarray with Sum (any)</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">Prefix Sum + HashMap</td>
          </tr>
          <tr>
            <td className="p-3 border">Count Subarrays with Sum K</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">Prefix Sum + HashMap</td>
          </tr>
          <tr>
            <td className="p-3 border">Maximum Product Subarray</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">Track Max & Min</td>
          </tr>
          <tr>
            <td className="p-3 border">Smallest Subarray with Sum &gt;= K</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">Sliding Window</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Key Techniques</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Kadane's Algorithm:</strong> For max/min subarray sum problems</li>
      <li><strong>Sliding Window:</strong> For problems with positive numbers or fixed conditions</li>
      <li><strong>Prefix Sum + HashMap:</strong> For problems involving sum with negative numbers</li>
      <li><strong>Two Pointers:</strong> For problems requiring subarray bounds</li>
      <li><strong>Dynamic Programming:</strong> For problems with overlapping subproblems</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Use Cases and Applications</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Financial Analysis:</strong> Maximum profit periods, stock analysis</li>
      <li><strong>Signal Processing:</strong> Finding patterns in continuous data</li>
      <li><strong>Genomics:</strong> DNA sequence analysis</li>
      <li><strong>Network Traffic:</strong> Detecting anomalies in data streams</li>
      <li><strong>Resource Allocation:</strong> Optimizing continuous resource usage</li>
    </ul>
  </div>
);

export default SubarrayProblems;
