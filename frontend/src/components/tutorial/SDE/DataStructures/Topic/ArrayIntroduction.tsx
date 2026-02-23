import React from 'react';

const ArrayIntroduction: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Introduction to Arrays
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      An array is a collection of items of the same variable type that are stored at contiguous memory
      locations. It's one of the most popular and simple data structures and is often used to implement
      other data structures. Each item in an array is indexed starting with 0.
    </p>

    <h2 className="text-2xl font-bold mt-6">Key Characteristics</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Fixed Size:</strong> Arrays have a fixed size that is determined at the time of creation</li>
      <li><strong>Contiguous Memory:</strong> Elements are stored in contiguous memory locations</li>
      <li><strong>Random Access:</strong> Elements can be accessed directly using their index in O(1) time</li>
      <li><strong>Homogeneous:</strong> All elements must be of the same data type</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Types of Arrays</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>One-dimensional Array:</strong> A linear array with elements accessed using a single index</li>
      <li><strong>Multi-dimensional Array:</strong> Arrays with more than one dimension (2D, 3D, etc.)</li>
      <li><strong>Dynamic Array:</strong> Arrays that can grow or shrink in size (like ArrayList in Java, vector in C++)</li>
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
            <td className="p-3 border">Access</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">Access element at given index</td>
          </tr>
          <tr>
            <td className="p-3 border">Search</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">Linear search for an element</td>
          </tr>
          <tr>
            <td className="p-3 border">Insert at End</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">Add element at the end</td>
          </tr>
          <tr>
            <td className="p-3 border">Insert at Position</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">Insert at specific index</td>
          </tr>
          <tr>
            <td className="p-3 border">Delete</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">Remove element and shift others</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Advantages</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Random access of elements using index</li>
      <li>Cache-friendly due to contiguous memory</li>
      <li>Simple and easy to use</li>
      <li>Less memory overhead compared to linked structures</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Disadvantages</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Fixed size (for static arrays)</li>
      <li>Insertion and deletion are expensive</li>
      <li>Memory wastage if array is not fully utilized</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Common Array Problems</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Find the largest/smallest element</li>
      <li>Reverse an array</li>
      <li>Find duplicates</li>
      <li>Rotate an array</li>
      <li>Find pairs with given sum</li>
      <li>Maximum subarray sum (Kadane's algorithm)</li>
    </ul>
  </div>
);

export default ArrayIntroduction;
