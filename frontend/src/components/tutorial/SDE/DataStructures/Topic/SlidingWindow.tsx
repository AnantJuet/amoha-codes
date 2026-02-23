import React from 'react';

const SlidingWindow: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Sliding Window Technique
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Sliding Window Technique is a method used to solve problems that involve subarray or substring.
      Instead of repeatedly iterating over the same elements, the sliding window maintains a range
      (or "window") that moves step-by-step through the data, updating results incrementally.
    </p>

    <h2 className="text-2xl font-bold mt-6">Key Concepts</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Maintains a "window" that slides through the data</li>
      <li>Uses results of previous window to compute next window</li>
      <li>Commonly used for subarray problems with specific constraints</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Types of Sliding Window</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-bold text-blue-800">Fixed Size Window</h4>
        <p className="mt-2 text-sm">Window size is constant throughout the traversal. Used when looking for results in fixed-size subarrays.</p>
      </div>
      <div className="bg-green-50 p-4 rounded-lg">
        <h4 className="font-bold text-green-800">Variable Size Window</h4>
        <p className="mt-2 text-sm">Window size changes based on conditions. Used when looking for optimal subarray satisfying constraints.</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Example: Maximum Sum of K Elements</h2>
    <p className="leading-relaxed">
      Given an array and integer k, find the maximum sum of a subarray of size exactly k.
    </p>

    <div className="bg-gray-100 p-4 rounded-lg mt-4">
      <p className="font-semibold">Input:</p>
      <code>arr[] = [5, 2, -1, 0, 3], k = 3</code>
      <p className="font-semibold mt-2">Output:</p>
      <code>6 (subarray [5, 2, -1])</code>
    </div>

    <h3 className="text-xl font-semibold mt-4">Naive Approach: O(n×k)</h3>
    <p className="leading-relaxed">
      For each starting position, calculate sum of k elements using a nested loop.
    </p>

    <h3 className="text-xl font-semibold mt-4">Sliding Window Approach: O(n)</h3>
    <ol className="list-decimal list-inside space-y-2">
      <li>Compute sum of first k elements (initial window)</li>
      <li>Slide window by subtracting first element and adding next element</li>
      <li>Track maximum sum encountered</li>
    </ol>

    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function maxSum(arr, k) {
    let n = arr.length;

    // Compute sum of first window
    let windowSum = 0;
    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }

    let maxSum = windowSum;

    // Slide window and update max
    for (let i = k; i < n; i++) {
        windowSum = windowSum - arr[i - k] + arr[i];
        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum;
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Variable Size Window Pattern</h2>
    <ol className="list-decimal list-inside space-y-2">
      <li>Expand right pointer to include more elements</li>
      <li>If condition is violated, shrink window by moving left pointer</li>
      <li>Update result when condition is satisfied</li>
      <li>Continue until right pointer reaches end</li>
    </ol>

    <h2 className="text-2xl font-bold mt-6">How to Identify Sliding Window Problems</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Problem involves contiguous subarray or substring</li>
      <li>Looking for maximum/minimum of some property</li>
      <li>Fixed size k or condition-based window</li>
      <li>Keywords: "subarray", "substring", "contiguous", "window"</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Common Sliding Window Problems</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Maximum Sum Subarray of Size K</li>
      <li>Longest Substring Without Repeating Characters</li>
      <li>Minimum Window Substring</li>
      <li>Maximum of All Subarrays of Size K</li>
      <li>Longest Substring with At Most K Distinct Characters</li>
      <li>Find All Anagrams in a String</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Time Complexity</h2>
    <div className="bg-blue-50 p-4 rounded-lg">
      <p><strong>Time:</strong> O(n) - Each element is visited at most twice</p>
      <p><strong>Space:</strong> O(1) for fixed window, O(k) if using additional data structures</p>
    </div>
  </div>
);

export default SlidingWindow;
