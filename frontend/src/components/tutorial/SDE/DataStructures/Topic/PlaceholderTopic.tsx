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
      Data structures are specialized formats for organizing, processing, retrieving, and storing data.
      Choosing the right data structure can make the difference between an efficient program and a slow one.
    </p>

    <h2 className="text-2xl font-bold mt-6">Why Learn Data Structures?</h2>
    <ul className="list-disc ml-6 space-y-2">
      <li><strong>Efficiency:</strong> Right data structure = faster operations</li>
      <li><strong>Memory Management:</strong> Optimal use of available memory</li>
      <li><strong>Code Organization:</strong> Better structure leads to cleaner code</li>
      <li><strong>Problem Solving:</strong> Many problems map directly to specific data structures</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Types of Data Structures</h2>

    <h3 className="text-xl font-semibold mt-4">Linear Data Structures</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
        <h4 className="font-semibold text-blue-800">Arrays</h4>
        <ul className="list-disc ml-4 mt-2 text-sm">
          <li>Fixed size, contiguous memory</li>
          <li>O(1) access by index</li>
          <li>O(n) insertion/deletion</li>
        </ul>
      </div>

      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
        <h4 className="font-semibold text-green-800">Linked Lists</h4>
        <ul className="list-disc ml-4 mt-2 text-sm">
          <li>Dynamic size, non-contiguous</li>
          <li>O(n) access</li>
          <li>O(1) insertion/deletion at known position</li>
        </ul>
      </div>

      <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
        <h4 className="font-semibold text-purple-800">Stacks (LIFO)</h4>
        <ul className="list-disc ml-4 mt-2 text-sm">
          <li>Last In, First Out</li>
          <li>Push, Pop, Peek operations</li>
          <li>Used in: Undo, recursion, parsing</li>
        </ul>
      </div>

      <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
        <h4 className="font-semibold text-orange-800">Queues (FIFO)</h4>
        <ul className="list-disc ml-4 mt-2 text-sm">
          <li>First In, First Out</li>
          <li>Enqueue, Dequeue operations</li>
          <li>Used in: BFS, scheduling, buffers</li>
        </ul>
      </div>
    </div>

    <h3 className="text-xl font-semibold mt-6">Non-Linear Data Structures</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
      <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
        <h4 className="font-semibold text-red-800">Trees</h4>
        <ul className="list-disc ml-4 mt-2 text-sm">
          <li>Hierarchical structure</li>
          <li>Binary Trees, BST, AVL, Red-Black</li>
          <li>O(log n) operations when balanced</li>
        </ul>
      </div>

      <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-400">
        <h4 className="font-semibold text-indigo-800">Graphs</h4>
        <ul className="list-disc ml-4 mt-2 text-sm">
          <li>Nodes connected by edges</li>
          <li>Directed/Undirected, Weighted</li>
          <li>Used in: Networks, maps, social media</li>
        </ul>
      </div>

      <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-400">
        <h4 className="font-semibold text-teal-800">Hash Tables</h4>
        <ul className="list-disc ml-4 mt-2 text-sm">
          <li>Key-value pairs</li>
          <li>O(1) average case operations</li>
          <li>Used in: Caching, indexing, sets</li>
        </ul>
      </div>

      <div className="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-400">
        <h4 className="font-semibold text-pink-800">Heaps</h4>
        <ul className="list-disc ml-4 mt-2 text-sm">
          <li>Complete binary tree property</li>
          <li>Min-Heap or Max-Heap</li>
          <li>Used in: Priority queues, scheduling</li>
        </ul>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Complexity Comparison</h2>
    <table className="min-w-full border border-gray-300 mt-4">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 px-4 py-2">Data Structure</th>
          <th className="border border-gray-300 px-4 py-2">Access</th>
          <th className="border border-gray-300 px-4 py-2">Search</th>
          <th className="border border-gray-300 px-4 py-2">Insert</th>
          <th className="border border-gray-300 px-4 py-2">Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Array</td>
          <td className="border border-gray-300 px-4 py-2">O(1)</td>
          <td className="border border-gray-300 px-4 py-2">O(n)</td>
          <td className="border border-gray-300 px-4 py-2">O(n)</td>
          <td className="border border-gray-300 px-4 py-2">O(n)</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Linked List</td>
          <td className="border border-gray-300 px-4 py-2">O(n)</td>
          <td className="border border-gray-300 px-4 py-2">O(n)</td>
          <td className="border border-gray-300 px-4 py-2">O(1)</td>
          <td className="border border-gray-300 px-4 py-2">O(1)</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Hash Table</td>
          <td className="border border-gray-300 px-4 py-2">N/A</td>
          <td className="border border-gray-300 px-4 py-2">O(1)</td>
          <td className="border border-gray-300 px-4 py-2">O(1)</td>
          <td className="border border-gray-300 px-4 py-2">O(1)</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">BST (balanced)</td>
          <td className="border border-gray-300 px-4 py-2">O(log n)</td>
          <td className="border border-gray-300 px-4 py-2">O(log n)</td>
          <td className="border border-gray-300 px-4 py-2">O(log n)</td>
          <td className="border border-gray-300 px-4 py-2">O(log n)</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-6">Example: Stack Implementation</h2>
    <pre className="bg-gray-100 text-black p-4 rounded-md font-mono mt-3 overflow-x-auto">
{`class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) return "Underflow";
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}

// Usage:
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.pop());   // 30
console.log(stack.peek());  // 20`}
    </pre>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="text-yellow-700">
        <strong>💡 Pro Tip:</strong> When choosing a data structure, consider: What operations are most frequent?
        What's the expected data size? Is memory a constraint? Answer these to pick the optimal structure.
      </p>
    </div>
  </div>
);

export default PlaceholderTopic;
