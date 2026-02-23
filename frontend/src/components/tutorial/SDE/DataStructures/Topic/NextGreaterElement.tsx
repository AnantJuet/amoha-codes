import React from 'react';

const NextGreaterElement: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Next Greater Element Problem
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The Next Greater Element (NGE) problem is a classic stack-based algorithm problem. For each element
      in an array, we need to find the first element that is greater than it and appears to its right.
      If no such element exists, the answer is -1.
    </p>

    <h2 className="text-2xl font-bold mt-6">Problem Statement</h2>
    <div className="bg-gray-50 p-4 rounded-lg">
      <p className="font-bold">Given:</p>
      <p>An array of integers</p>
      <p className="font-bold mt-2">Find:</p>
      <p>For each element, the first greater element to its right. Return -1 if none exists.</p>
    </div>

    <h2 className="text-2xl font-bold mt-6">Examples</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`
Example 1:
Input:  [4, 5, 2, 25]
Output: [5, 25, 25, -1]

Explanation:
- 4  -> Next greater is 5
- 5  -> Next greater is 25
- 2  -> Next greater is 25
- 25 -> No greater element, so -1

Example 2:
Input:  [13, 7, 6, 12]
Output: [-1, 12, 12, -1]

Explanation:
- 13 -> No greater element to the right
- 7  -> Next greater is 12
- 6  -> Next greater is 12
- 12 -> No greater element, so -1

Example 3:
Input:  [1, 3, 2, 4]
Output: [3, 4, 4, -1]
`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Brute Force Approach</h2>
    <div className="bg-gray-50 p-4 rounded-lg mt-4">
      <p className="font-bold mb-2">Algorithm:</p>
      <ol className="list-decimal list-inside space-y-1">
        <li>For each element, scan all elements to its right</li>
        <li>Find the first element greater than current element</li>
        <li>If found, that's the NGE; otherwise, -1</li>
      </ol>
      <p className="mt-2 text-gray-600">Time Complexity: O(n^2)</p>
    </div>

    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Brute Force - O(n^2)
function nextGreaterBruteForce(arr) {
    const n = arr.length;
    const result = new Array(n).fill(-1);

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (arr[j] > arr[i]) {
                result[i] = arr[j];
                break;
            }
        }
    }
    return result;
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Optimized Stack Approach</h2>
    <div className="bg-gray-50 p-4 rounded-lg mt-4">
      <p className="font-bold mb-2">Key Insight:</p>
      <p>Traverse from right to left. Use a stack to keep track of potential NGE candidates.
         Pop elements smaller than current (they can't be NGE for any element to the left).</p>
      <p className="font-bold mt-4 mb-2">Algorithm:</p>
      <ol className="list-decimal list-inside space-y-1">
        <li>Initialize an empty stack and result array</li>
        <li>Traverse the array from right to left:</li>
        <ul className="list-disc list-inside ml-6">
          <li>Pop elements from stack that are smaller or equal to current element</li>
          <li>If stack is empty, NGE is -1; otherwise, stack top is the NGE</li>
          <li>Push current element to stack</li>
        </ul>
      </ol>
      <p className="mt-2 text-green-600 font-bold">Time Complexity: O(n)</p>
    </div>

    <h2 className="text-2xl font-bold mt-6">Visual Walkthrough</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`
Array: [4, 5, 2, 25]
Processing from right to left:

Index 3 (25):
  Stack: []
  Pop smaller: none
  NGE: -1 (stack empty)
  Push 25
  Stack: [25]
  Result: [_, _, _, -1]

Index 2 (2):
  Stack: [25]
  Pop smaller: none (25 > 2)
  NGE: 25 (stack top)
  Push 2
  Stack: [25, 2]
  Result: [_, _, 25, -1]

Index 1 (5):
  Stack: [25, 2]
  Pop smaller: pop 2 (2 < 5)
  Stack: [25]
  NGE: 25 (stack top)
  Push 5
  Stack: [25, 5]
  Result: [_, 25, 25, -1]

Index 0 (4):
  Stack: [25, 5]
  Pop smaller: none (5 > 4)
  NGE: 5 (stack top)
  Push 4
  Stack: [25, 5, 4]
  Result: [5, 25, 25, -1]

Final Result: [5, 25, 25, -1]
`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Implementation in JavaScript</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function nextGreaterElement(arr) {
    const n = arr.length;
    const result = new Array(n);
    const stack = [];

    // Traverse from right to left
    for (let i = n - 1; i >= 0; i--) {
        // Pop elements smaller than or equal to current
        while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
            stack.pop();
        }

        // If stack is empty, no greater element exists
        result[i] = stack.length === 0 ? -1 : stack[stack.length - 1];

        // Push current element for future comparisons
        stack.push(arr[i]);
    }

    return result;
}

// Test cases
console.log(nextGreaterElement([4, 5, 2, 25]));   // [5, 25, 25, -1]
console.log(nextGreaterElement([13, 7, 6, 12])); // [-1, 12, 12, -1]
console.log(nextGreaterElement([1, 3, 2, 4]));   // [3, 4, 4, -1]`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Implementation in Python</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`def next_greater_element(arr):
    n = len(arr)
    result = [0] * n
    stack = []

    # Traverse from right to left
    for i in range(n - 1, -1, -1):
        # Pop elements smaller than or equal to current
        while stack and stack[-1] <= arr[i]:
            stack.pop()

        # If stack is empty, no greater element
        result[i] = -1 if not stack else stack[-1]

        # Push current element
        stack.append(arr[i])

    return result

# Test cases
print(next_greater_element([4, 5, 2, 25]))   # [5, 25, 25, -1]
print(next_greater_element([13, 7, 6, 12])) # [-1, 12, 12, -1]
print(next_greater_element([1, 3, 2, 4]))   # [3, 4, 4, -1]`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Implementation in C++</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`#include <iostream>
#include <vector>
#include <stack>
using namespace std;

vector<int> nextGreaterElement(vector<int>& arr) {
    int n = arr.size();
    vector<int> result(n);
    stack<int> s;

    for (int i = n - 1; i >= 0; i--) {
        while (!s.empty() && s.top() <= arr[i]) {
            s.pop();
        }
        result[i] = s.empty() ? -1 : s.top();
        s.push(arr[i]);
    }

    return result;
}

int main() {
    vector<int> arr = {4, 5, 2, 25};
    vector<int> result = nextGreaterElement(arr);

    for (int x : result) cout << x << " ";
    // Output: 5 25 25 -1
    return 0;
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
            <td className="p-3 border">Brute Force</td>
            <td className="p-3 border">O(n^2)</td>
            <td className="p-3 border">O(1)</td>
          </tr>
          <tr>
            <td className="p-3 border">Stack (Optimized)</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(n)</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p className="text-sm text-gray-600 mt-2">
      * Each element is pushed and popped at most once, hence O(n) time.
    </p>

    <h2 className="text-2xl font-bold mt-6">Variations of the Problem</h2>
    <div className="space-y-4 mt-4">
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">1. Next Greater Element to the Left</h4>
        <p>Traverse from left to right with similar logic</p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">2. Next Smaller Element</h4>
        <p>Pop elements greater than current instead</p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">3. Next Greater Element in Circular Array</h4>
        <p>Treat array as circular (wrap around)</p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">4. Stock Span Problem</h4>
        <p>Count consecutive days with price less than or equal to today</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Next Greater in Circular Array</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function nextGreaterCircular(arr) {
    const n = arr.length;
    const result = new Array(n).fill(-1);
    const stack = [];

    // Traverse twice to simulate circular array
    for (let i = 2 * n - 1; i >= 0; i--) {
        const idx = i % n;

        while (stack.length > 0 && stack[stack.length - 1] <= arr[idx]) {
            stack.pop();
        }

        if (i < n) {
            result[idx] = stack.length === 0 ? -1 : stack[stack.length - 1];
        }

        stack.push(arr[idx]);
    }

    return result;
}

// Example: [1, 2, 1] -> [2, -1, 2]
// 1 -> 2, 2 -> -1 (no greater), 1 -> 2 (circular)
console.log(nextGreaterCircular([1, 2, 1]));`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Key Points to Remember</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Stack stores potential NGE candidates in decreasing order</li>
      <li>Elements smaller than current can't be NGE for elements to the left</li>
      <li>Processing from right to left gives O(n) solution</li>
      <li>Each element is pushed and popped at most once</li>
      <li>This pattern applies to many monotonic stack problems</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Applications</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Stock market analysis (stock span)</li>
      <li>Temperature forecasting (days until warmer)</li>
      <li>Building visibility problems</li>
      <li>Histogram problems (largest rectangle)</li>
      <li>Sliding window maximum</li>
    </ul>
  </div>
);

export default NextGreaterElement;
