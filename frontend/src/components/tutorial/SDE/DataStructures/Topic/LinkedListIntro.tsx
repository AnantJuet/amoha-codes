import React from 'react';

const LinkedListIntro: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Introduction to Linked List
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A linked list is a fundamental data structure in computer science. It mainly allows efficient
      insertion and deletion operations compared to arrays. Like arrays, it is also used to implement
      other data structures like stack, queue and deque.
    </p>

    <h2 className="text-2xl font-bold mt-6">What is a Linked List?</h2>
    <p className="leading-relaxed">
      A linked list is a type of linear data structure where individual items are not necessarily at
      contiguous locations. Each item is called a "node" and contains two things:
    </p>
    <ul className="list-disc list-inside space-y-2 mt-4">
      <li><strong>Data:</strong> The actual value stored in the node</li>
      <li><strong>Next:</strong> A pointer/reference to the next node in the list</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Types of Linked Lists</h2>
    <div className="space-y-4 mt-4">
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">1. Singly Linked List</h4>
        <p>Each node points only to the next node. Traversal is one-way (forward only).</p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">2. Doubly Linked List</h4>
        <p>Each node has pointers to both next and previous nodes. Allows two-way traversal.</p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">3. Circular Linked List</h4>
        <p>Last node points back to the first node, forming a circle.</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Linked List vs Array</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">Linked List</th>
            <th className="p-3 border">Array</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Memory</td>
            <td className="p-3 border">Non-contiguous</td>
            <td className="p-3 border">Contiguous</td>
          </tr>
          <tr>
            <td className="p-3 border">Size</td>
            <td className="p-3 border">Dynamic</td>
            <td className="p-3 border">Fixed (static arrays)</td>
          </tr>
          <tr>
            <td className="p-3 border">Insertion/Deletion</td>
            <td className="p-3 border">O(1) at known position</td>
            <td className="p-3 border">O(n)</td>
          </tr>
          <tr>
            <td className="p-3 border">Access</td>
            <td className="p-3 border">O(n) - Sequential</td>
            <td className="p-3 border">O(1) - Random</td>
          </tr>
          <tr>
            <td className="p-3 border">Memory Overhead</td>
            <td className="p-3 border">Extra for pointers</td>
            <td className="p-3 border">No overhead</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Basic Operations</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Traversal:</strong> Visit each node from head to end</li>
      <li><strong>Insertion:</strong> Add a new node at beginning, end, or specific position</li>
      <li><strong>Deletion:</strong> Remove a node from beginning, end, or specific position</li>
      <li><strong>Search:</strong> Find a node with given value</li>
      <li><strong>Length:</strong> Count the number of nodes</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Node Structure</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`class Node {
    constructor(data) {
        this.data = data;  // Store the data
        this.next = null;  // Pointer to next node
    }
}

class LinkedList {
    constructor() {
        this.head = null;  // First node
    }
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Advantages</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Dynamic size - grows and shrinks as needed</li>
      <li>Efficient insertion and deletion</li>
      <li>No memory wastage</li>
      <li>Easy to implement stacks and queues</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Disadvantages</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Extra memory for storing pointers</li>
      <li>No random access - must traverse from head</li>
      <li>Not cache-friendly due to non-contiguous memory</li>
      <li>Reverse traversal not possible in singly linked list</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Common Problems</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Reverse a linked list</li>
      <li>Detect cycle in a linked list</li>
      <li>Find middle element</li>
      <li>Merge two sorted linked lists</li>
      <li>Remove duplicates</li>
      <li>Nth node from end</li>
    </ul>
  </div>
);

export default LinkedListIntro;
