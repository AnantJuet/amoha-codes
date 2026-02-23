import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Data Structures Tutorial ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Data Structures Tutorial
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Welcome to the comprehensive Data Structures tutorial on Amoha Codes. Data structures are fundamental
      concepts that manage how data is stored and accessed. Understanding data structures is essential for
      writing efficient algorithms and solving complex programming problems.
    </p>

    <p className="text-lg leading-relaxed">
      This tutorial covers all essential data structures from basic to advanced level, including Arrays,
      Linked Lists, Stacks, Queues, Trees, Graphs, Heaps, Hash Tables, and Tries. Before beginning this
      journey, it is recommended to learn at least one programming language (C++, Java, Python, JavaScript).
    </p>

    {/* What You Will Learn */}
    <h2 className="text-3xl font-bold mt-8">What You Will Learn</h2>
    <p className="leading-relaxed">
      This tutorial provides in-depth coverage of data structure concepts, from fundamental principles to
      advanced implementations. Whether you're preparing for coding interviews at top tech companies or
      building efficient software applications, this guide will help you master the subject.
    </p>

    {/* Course Structure */}
    <h2 className="text-3xl font-bold mt-8">Course Structure</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">S.No</th>
            <th className="p-3 border">Topic</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">Array</td>
            <td className="p-3 border">Introduction, operations, searching, sorting, rotation, two pointer, sliding window</td>
          </tr>
          <tr>
            <td className="p-3 border">2</td>
            <td className="p-3 border">Linked List</td>
            <td className="p-3 border">Singly, doubly, circular linked lists, operations, reversal, loop detection</td>
          </tr>
          <tr>
            <td className="p-3 border">3</td>
            <td className="p-3 border">Stack</td>
            <td className="p-3 border">Operations, implementations, balanced parentheses, expression evaluation</td>
          </tr>
          <tr>
            <td className="p-3 border">4</td>
            <td className="p-3 border">Queue</td>
            <td className="p-3 border">Operations, circular queue, deque, priority queue</td>
          </tr>
          <tr>
            <td className="p-3 border">5</td>
            <td className="p-3 border">Binary Tree</td>
            <td className="p-3 border">Traversals, height, diameter, LCA, balanced tree check</td>
          </tr>
          <tr>
            <td className="p-3 border">6</td>
            <td className="p-3 border">Binary Search Tree</td>
            <td className="p-3 border">Search, insert, delete operations, AVL tree</td>
          </tr>
          <tr>
            <td className="p-3 border">7</td>
            <td className="p-3 border">Heap</td>
            <td className="p-3 border">Binary heap, heapify, heap sort, priority queue</td>
          </tr>
          <tr>
            <td className="p-3 border">8</td>
            <td className="p-3 border">Hashing</td>
            <td className="p-3 border">Hash functions, collision handling, HashMap implementation</td>
          </tr>
          <tr>
            <td className="p-3 border">9</td>
            <td className="p-3 border">Graph</td>
            <td className="p-3 border">Representations, BFS, DFS, cycle detection, topological sort</td>
          </tr>
          <tr>
            <td className="p-3 border">10</td>
            <td className="p-3 border">Trie</td>
            <td className="p-3 border">Insert, search, delete, autocomplete, word search</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Why Learn Data Structures */}
    <h2 className="text-3xl font-bold mt-8">Why Learn Data Structures?</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li><strong>Foundation of Programming:</strong> Data structures are the building blocks for writing efficient programs</li>
      <li><strong>Interview Preparation:</strong> Essential for technical interviews at all major tech companies</li>
      <li><strong>Problem Solving:</strong> Helps in choosing the right approach for different types of problems</li>
      <li><strong>Efficiency:</strong> Understanding data structures helps write code with optimal time and space complexity</li>
      <li><strong>Real-World Applications:</strong> Used in databases, compilers, operating systems, and more</li>
      <li><strong>Algorithm Design:</strong> Forms the foundation for understanding and implementing algorithms</li>
    </ul>

    {/* Key Advantages */}
    <h2 className="text-3xl font-bold mt-8">Key Advantages of Each Data Structure</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li><strong>Array:</strong> Random access in O(1) time, cache-friendly due to contiguous memory</li>
      <li><strong>Linked List:</strong> Dynamic size, efficient insertions/deletions at any position</li>
      <li><strong>Stack:</strong> LIFO access, efficient for expression evaluation and backtracking</li>
      <li><strong>Queue:</strong> FIFO access, ideal for scheduling and BFS traversal</li>
      <li><strong>Tree:</strong> Hierarchical structure, efficient searching and sorting</li>
      <li><strong>Hash Table:</strong> O(1) average case for search, insert, and delete operations</li>
      <li><strong>Graph:</strong> Represents relationships between entities, networks, and connections</li>
    </ul>

    {/* Prerequisites */}
    <h2 className="text-3xl font-bold mt-8">Prerequisites</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Basic programming knowledge in any language (C++, Java, Python recommended)</li>
      <li>Understanding of variables, loops, and functions</li>
      <li>Basic knowledge of pointers and memory management</li>
      <li>Familiarity with recursion concepts</li>
    </ul>

    {/* Getting Started */}
    <h2 className="text-3xl font-bold mt-8">Getting Started</h2>
    <p className="leading-relaxed">
      Begin your journey by exploring the Array section, which covers the most fundamental data structure.
      Each topic builds upon previous concepts, so following the sequential order is recommended for
      beginners. Experienced learners can navigate directly to specific topics of interest using the sidebar.
    </p>

    <p className="leading-relaxed mt-4">
      Each topic includes detailed explanations, code implementations, complexity analysis, and practice
      problems to reinforce your understanding. The content is designed to match the depth expected in
      technical interviews and competitive programming.
    </p>
  </div>
);

export default Home;
