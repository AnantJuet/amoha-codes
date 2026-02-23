import React from 'react';

const HeapIntro: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Introduction to Heap
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A Heap is a specialized tree-based data structure that satisfies the heap property. It is
      commonly used to implement priority queues and is the backbone of the HeapSort algorithm.
      Heaps are particularly efficient for finding the minimum or maximum element quickly.
    </p>

    <h2 className="text-2xl font-bold mt-6">What is a Heap?</h2>
    <p className="leading-relaxed">
      A heap is a complete binary tree where every node satisfies the heap property. In a complete
      binary tree, all levels are completely filled except possibly the last level, which is filled
      from left to right.
    </p>

    <h2 className="text-2xl font-bold mt-6">Types of Heaps</h2>
    <div className="space-y-4 mt-4">
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">1. Max Heap</h4>
        <p>The value of each node is greater than or equal to the values of its children.
        The maximum element is always at the root.</p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">2. Min Heap</h4>
        <p>The value of each node is less than or equal to the values of its children.
        The minimum element is always at the root.</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Heap Properties</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Complete Binary Tree:</strong> All levels are filled except possibly the last</li>
      <li><strong>Heap Order Property:</strong> Parent-child relationship follows max/min heap rule</li>
      <li><strong>Array Representation:</strong> Can be efficiently stored in an array</li>
      <li><strong>Height:</strong> A heap with n elements has height O(log n)</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Array Representation</h2>
    <p className="leading-relaxed mt-2">
      For a node at index i in a 0-indexed array:
    </p>
    <ul className="list-disc list-inside space-y-2 mt-2">
      <li><strong>Parent:</strong> (i - 1) / 2</li>
      <li><strong>Left Child:</strong> 2 * i + 1</li>
      <li><strong>Right Child:</strong> 2 * i + 2</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Basic Operations</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Operation</th>
            <th className="p-3 border">Time Complexity</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Get Min/Max</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">Return root element</td>
          </tr>
          <tr>
            <td className="p-3 border">Insert</td>
            <td className="p-3 border">O(log n)</td>
            <td className="p-3 border">Add element and heapify up</td>
          </tr>
          <tr>
            <td className="p-3 border">Extract Min/Max</td>
            <td className="p-3 border">O(log n)</td>
            <td className="p-3 border">Remove root and heapify down</td>
          </tr>
          <tr>
            <td className="p-3 border">Decrease/Increase Key</td>
            <td className="p-3 border">O(log n)</td>
            <td className="p-3 border">Update key and restore heap</td>
          </tr>
          <tr>
            <td className="p-3 border">Build Heap</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">Create heap from array</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Visual Representation</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`Max Heap Example:
        50
       /  \\
      30   40
     / \\   / \\
    10 20 35 25

Array: [50, 30, 40, 10, 20, 35, 25]
Index:  0   1   2   3   4   5   6`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Applications of Heap</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Priority Queue implementation</li>
      <li>HeapSort algorithm</li>
      <li>Finding K largest/smallest elements</li>
      <li>Dijkstra's shortest path algorithm</li>
      <li>Prim's minimum spanning tree algorithm</li>
      <li>Huffman coding for data compression</li>
      <li>Median finding in a stream</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Advantages</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Efficient O(1) access to min/max element</li>
      <li>O(log n) insertion and deletion</li>
      <li>Space efficient array representation</li>
      <li>Cache-friendly due to array storage</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Disadvantages</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Not suitable for searching arbitrary elements - O(n)</li>
      <li>Only provides efficient access to root element</li>
      <li>Not stable for sorting</li>
    </ul>
  </div>
);

export default HeapIntro;
