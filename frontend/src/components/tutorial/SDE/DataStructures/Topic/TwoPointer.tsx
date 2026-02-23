import React from 'react';

const TwoPointer: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Two Pointer Technique
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The Two-Pointers Technique is a simple yet powerful strategy where you use two indices (pointers)
      that traverse a data structure—such as an array, list, or string—either toward each other or in
      the same direction to solve problems more efficiently.
    </p>

    <h2 className="text-2xl font-bold mt-6">When to Use Two Pointers</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Sorted Input:</strong> If the array is sorted, two pointers can efficiently find pairs or ranges</li>
      <li><strong>Pairs or Subarrays:</strong> When the problem asks about two elements, subarrays, or ranges</li>
      <li><strong>Sliding Window Problems:</strong> When you need to maintain a window that grows/shrinks</li>
      <li><strong>Linked Lists:</strong> Detecting cycles, finding the middle node (slow-fast pointers)</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Example: Two Sum in Sorted Array</h2>
    <p className="leading-relaxed">
      Given a sorted array and a target, find if there exists any pair whose sum equals the target.
    </p>

    <div className="bg-gray-100 p-4 rounded-lg mt-4">
      <p className="font-semibold">Input:</p>
      <code>arr[] = [10, 20, 35, 50], target = 70</code>
      <p className="font-semibold mt-2">Output:</p>
      <code>true (pair: 20 + 50 = 70)</code>
    </div>

    <h3 className="text-xl font-semibold mt-4">Naive Approach: O(n²)</h3>
    <p className="leading-relaxed">
      Generate all possible pairs and check if any add up to the target using two nested loops.
    </p>

    <h3 className="text-xl font-semibold mt-4">Two Pointer Approach: O(n)</h3>
    <p className="leading-relaxed">
      Use two pointers starting from both ends of the sorted array:
    </p>
    <ul className="list-disc list-inside space-y-2 mt-4">
      <li>Initialize: left = 0, right = n - 1</li>
      <li>Compute sum = arr[left] + arr[right]</li>
      <li>If sum equals target, found the pair</li>
      <li>If sum is less than target, move left pointer right (to increase sum)</li>
      <li>If sum is greater than target, move right pointer left (to decrease sum)</li>
    </ul>

    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function twoSum(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const sum = arr[left] + arr[right];

        if (sum === target) {
            return true;
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    return false;
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Why This Works</h2>
    <p className="leading-relaxed">
      Since the array is sorted, if the current sum is too small, we need a larger value (move left pointer).
      If the sum is too large, we need a smaller value (move right pointer). This guarantees we either
      find the pair or exhaust all possibilities in O(n) time.
    </p>

    <h2 className="text-2xl font-bold mt-6">Common Two Pointer Problems</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Two Sum in Sorted Array</li>
      <li>Three Sum (3Sum Problem)</li>
      <li>Container With Most Water</li>
      <li>Remove Duplicates from Sorted Array</li>
      <li>Trapping Rain Water</li>
      <li>Valid Palindrome</li>
      <li>Merge Sorted Arrays</li>
      <li>Dutch National Flag (Sort 0s, 1s, 2s)</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Time Complexity</h2>
    <div className="bg-blue-50 p-4 rounded-lg">
      <p><strong>Time:</strong> O(n) - Each pointer moves at most n times</p>
      <p><strong>Space:</strong> O(1) - Only two pointer variables used</p>
    </div>
  </div>
);

export default TwoPointer;
