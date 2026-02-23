import React from 'react';

interface PlaceholderTopicProps {
  title: string;
}

const PlaceholderTopic: React.FC<PlaceholderTopicProps> = ({ title }) => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      {title}
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 20 Jan, 2026</p>

    <h2 className="text-2xl font-bold mt-6">Introduction</h2>
    <p className="text-lg leading-relaxed">
      Algorithms are step-by-step procedures for solving computational problems. Understanding algorithms
      is crucial for writing efficient code and performing well in technical interviews.
    </p>

    <h2 className="text-2xl font-bold mt-6">Why Study Algorithms?</h2>
    <ul className="list-disc ml-6 space-y-2">
      <li><strong>Efficiency:</strong> Good algorithms solve problems faster with less memory</li>
      <li><strong>Scalability:</strong> Efficient algorithms handle large datasets gracefully</li>
      <li><strong>Problem Solving:</strong> Algorithmic thinking helps break down complex problems</li>
      <li><strong>Interviews:</strong> Most technical interviews focus heavily on algorithms</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Key Algorithm Categories</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
        <h3 className="font-semibold text-blue-800">Searching Algorithms</h3>
        <ul className="list-disc ml-4 mt-2 text-sm">
          <li>Linear Search - O(n)</li>
          <li>Binary Search - O(log n)</li>
          <li>Jump Search - O(√n)</li>
          <li>Interpolation Search</li>
        </ul>
      </div>

      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
        <h3 className="font-semibold text-green-800">Sorting Algorithms</h3>
        <ul className="list-disc ml-4 mt-2 text-sm">
          <li>Bubble Sort - O(n²)</li>
          <li>Merge Sort - O(n log n)</li>
          <li>Quick Sort - O(n log n)</li>
          <li>Heap Sort - O(n log n)</li>
        </ul>
      </div>

      <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
        <h3 className="font-semibold text-purple-800">Graph Algorithms</h3>
        <ul className="list-disc ml-4 mt-2 text-sm">
          <li>BFS - Breadth First Search</li>
          <li>DFS - Depth First Search</li>
          <li>Dijkstra's Algorithm</li>
          <li>Bellman-Ford Algorithm</li>
        </ul>
      </div>

      <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
        <h3 className="font-semibold text-orange-800">Dynamic Programming</h3>
        <ul className="list-disc ml-4 mt-2 text-sm">
          <li>Fibonacci Sequence</li>
          <li>Longest Common Subsequence</li>
          <li>Knapsack Problem</li>
          <li>Matrix Chain Multiplication</li>
        </ul>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Time Complexity Overview</h2>
    <table className="min-w-full border border-gray-300 mt-4">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 px-4 py-2">Complexity</th>
          <th className="border border-gray-300 px-4 py-2">Name</th>
          <th className="border border-gray-300 px-4 py-2">Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2">O(1)</td>
          <td className="border border-gray-300 px-4 py-2">Constant</td>
          <td className="border border-gray-300 px-4 py-2">Array access by index</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">O(log n)</td>
          <td className="border border-gray-300 px-4 py-2">Logarithmic</td>
          <td className="border border-gray-300 px-4 py-2">Binary Search</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">O(n)</td>
          <td className="border border-gray-300 px-4 py-2">Linear</td>
          <td className="border border-gray-300 px-4 py-2">Linear Search</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">O(n log n)</td>
          <td className="border border-gray-300 px-4 py-2">Linearithmic</td>
          <td className="border border-gray-300 px-4 py-2">Merge Sort</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">O(n²)</td>
          <td className="border border-gray-300 px-4 py-2">Quadratic</td>
          <td className="border border-gray-300 px-4 py-2">Bubble Sort</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">O(2ⁿ)</td>
          <td className="border border-gray-300 px-4 py-2">Exponential</td>
          <td className="border border-gray-300 px-4 py-2">Recursive Fibonacci</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-6">Example: Binary Search</h2>
    <pre className="bg-gray-100 text-black p-4 rounded-md font-mono mt-3 overflow-x-auto">
{`function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;  // Found!
        } else if (arr[mid] < target) {
            left = mid + 1;  // Search right half
        } else {
            right = mid - 1;  // Search left half
        }
    }

    return -1;  // Not found
}

// Example usage:
const arr = [1, 3, 5, 7, 9, 11, 13];
console.log(binarySearch(arr, 7));  // Output: 3`}
    </pre>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="text-yellow-700">
        <strong>💡 Pro Tip:</strong> When studying algorithms, always analyze both time and space complexity.
        Practice implementing them from scratch without looking at references to build muscle memory.
      </p>
    </div>
  </div>
);

export default PlaceholderTopic;
