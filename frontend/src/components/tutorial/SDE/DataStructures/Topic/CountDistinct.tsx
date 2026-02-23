import React from 'react';

const CountDistinct: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Count Distinct Elements
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Counting distinct elements in a collection is a fundamental problem that appears in many
      applications like database queries, data analysis, and stream processing. Hashing provides
      an efficient O(n) solution for this problem.
    </p>

    <h2 className="text-2xl font-bold mt-6">Problem Statement</h2>
    <div className="bg-blue-50 p-4 rounded-lg">
      <p>Given an array of elements, count the number of distinct (unique) elements.</p>
      <p className="mt-2"><strong>Example:</strong></p>
      <p>Input: [1, 2, 1, 3, 4, 2, 3, 1, 1]</p>
      <p>Output: 4 (distinct elements are 1, 2, 3, 4)</p>
    </div>

    <h2 className="text-2xl font-bold mt-6">Approach 1: Using HashSet</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Most straightforward approach using Set
function countDistinct(arr) {
    const seen = new Set();

    for (const item of arr) {
        seen.add(item);
    }

    return seen.size;
}

// Or more concisely:
function countDistinctOneLiner(arr) {
    return new Set(arr).size;
}

// Example
const arr = [1, 2, 1, 3, 4, 2, 3, 1, 1];
console.log(countDistinct(arr)); // 4

// Time: O(n) - single pass through array
// Space: O(k) where k is number of distinct elements`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Approach 2: Using HashMap (with frequency)</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Count distinct and also get frequencies
function countDistinctWithFrequency(arr) {
    const frequencyMap = new Map();

    for (const item of arr) {
        frequencyMap.set(item, (frequencyMap.get(item) || 0) + 1);
    }

    return {
        distinctCount: frequencyMap.size,
        frequencies: frequencyMap
    };
}

const arr = [1, 2, 1, 3, 4, 2, 3, 1, 1];
const result = countDistinctWithFrequency(arr);

console.log(result.distinctCount); // 4
console.log(result.frequencies);
// Map { 1 => 4, 2 => 2, 3 => 2, 4 => 1 }

// This approach gives us both count and frequency of each element`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Approach 3: Sorting (Without Extra Space)</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// If we cannot use extra space, sort and count consecutive unique
function countDistinctSorting(arr) {
    if (arr.length === 0) return 0;

    // Sort the array
    arr.sort((a, b) => a - b);

    let count = 1; // First element is always unique

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1]) {
            count++;
        }
    }

    return count;
}

// Time: O(n log n) - sorting
// Space: O(1) or O(n) depending on sort implementation

// Note: This modifies the original array`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Count Distinct in Subarrays</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Problem: Count distinct elements in all subarrays of size k

function countDistinctInWindows(arr, k) {
    const result = [];
    const frequencyMap = new Map();

    // Process first window
    for (let i = 0; i < k; i++) {
        frequencyMap.set(arr[i], (frequencyMap.get(arr[i]) || 0) + 1);
    }
    result.push(frequencyMap.size);

    // Slide the window
    for (let i = k; i < arr.length; i++) {
        // Remove element going out of window
        const outgoing = arr[i - k];
        if (frequencyMap.get(outgoing) === 1) {
            frequencyMap.delete(outgoing);
        } else {
            frequencyMap.set(outgoing, frequencyMap.get(outgoing) - 1);
        }

        // Add new element coming into window
        const incoming = arr[i];
        frequencyMap.set(incoming, (frequencyMap.get(incoming) || 0) + 1);

        result.push(frequencyMap.size);
    }

    return result;
}

// Example
const arr = [1, 2, 1, 3, 4, 2, 3];
const k = 4;
console.log(countDistinctInWindows(arr, k));
// Output: [3, 4, 4, 3]
// Window [1,2,1,3] -> 3 distinct (1,2,3)
// Window [2,1,3,4] -> 4 distinct (2,1,3,4)
// Window [1,3,4,2] -> 4 distinct (1,3,4,2)
// Window [3,4,2,3] -> 3 distinct (3,4,2)

// Time: O(n) - each element added and removed once
// Space: O(k) - at most k elements in map`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">First Unique Element</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Find first element that appears exactly once
function firstUnique(arr) {
    const frequencyMap = new Map();

    // Count frequencies
    for (const item of arr) {
        frequencyMap.set(item, (frequencyMap.get(item) || 0) + 1);
    }

    // Find first with count 1
    for (const item of arr) {
        if (frequencyMap.get(item) === 1) {
            return item;
        }
    }

    return null; // No unique element
}

console.log(firstUnique([1, 2, 1, 3, 2, 5])); // 3
console.log(firstUnique([1, 1, 1, 1]));       // null

// Time: O(n)
// Space: O(k)`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Count Distinct in Range Queries</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Answer multiple queries: count distinct in range [l, r]
// Using Mo's Algorithm for optimal performance

function countDistinctQueries(arr, queries) {
    const n = arr.length;
    const blockSize = Math.floor(Math.sqrt(n));

    // Sort queries by Mo's algorithm
    const sortedQueries = queries.map((q, i) => [...q, i]);
    sortedQueries.sort((a, b) => {
        const blockA = Math.floor(a[0] / blockSize);
        const blockB = Math.floor(b[0] / blockSize);
        if (blockA !== blockB) return blockA - blockB;
        return a[1] - b[1];
    });

    const frequency = new Map();
    let distinctCount = 0;
    let currentL = 0;
    let currentR = -1;

    const add = (idx) => {
        const val = arr[idx];
        const count = frequency.get(val) || 0;
        if (count === 0) distinctCount++;
        frequency.set(val, count + 1);
    };

    const remove = (idx) => {
        const val = arr[idx];
        const count = frequency.get(val);
        if (count === 1) distinctCount--;
        frequency.set(val, count - 1);
    };

    const results = new Array(queries.length);

    for (const [l, r, queryIdx] of sortedQueries) {
        // Expand/contract window
        while (currentR < r) add(++currentR);
        while (currentR > r) remove(currentR--);
        while (currentL < l) remove(currentL++);
        while (currentL > l) add(--currentL);

        results[queryIdx] = distinctCount;
    }

    return results;
}

// Example
const arr = [1, 2, 1, 3, 4, 2, 3];
const queries = [[0, 3], [1, 4], [2, 6]];
console.log(countDistinctQueries(arr, queries));
// [3, 4, 4]

// Time: O((n + q) * sqrt(n)) with Mo's algorithm
// Much better than O(n * q) naive approach`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Comparison of Approaches</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Approach</th>
            <th className="p-3 border">Time</th>
            <th className="p-3 border">Space</th>
            <th className="p-3 border">Use Case</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">HashSet</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(k)</td>
            <td className="p-3 border">General purpose</td>
          </tr>
          <tr>
            <td className="p-3 border">HashMap</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(k)</td>
            <td className="p-3 border">Need frequencies too</td>
          </tr>
          <tr>
            <td className="p-3 border">Sorting</td>
            <td className="p-3 border">O(n log n)</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">No extra space allowed</td>
          </tr>
          <tr>
            <td className="p-3 border">Sliding Window</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(k)</td>
            <td className="p-3 border">Fixed-size subarrays</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Real-World Applications</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Database:</strong> SELECT COUNT(DISTINCT column) queries</li>
      <li><strong>Analytics:</strong> Counting unique visitors, users, or events</li>
      <li><strong>Data Quality:</strong> Finding unique values in a dataset</li>
      <li><strong>Network:</strong> Counting unique IP addresses</li>
      <li><strong>Text Processing:</strong> Counting unique words in documents</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Key Points</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>HashSet provides O(n) time with O(k) space for counting distinct</li>
      <li>Sliding window technique efficiently handles subarray queries</li>
      <li>Sorting approach works when extra space is not allowed</li>
      <li>HashMap useful when frequencies are also needed</li>
      <li>Mo's algorithm optimizes multiple range queries</li>
    </ul>
  </div>
);

export default CountDistinct;
