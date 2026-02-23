import React from 'react';

const StackIntro: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Introduction to Stack
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A stack is a linear data structure that follows the <strong>Last In First Out (LIFO)</strong> principle.
      This means the last element inserted into the stack is the first one to be removed. Think of it like
      a stack of plates - you can only add or remove plates from the top.
    </p>

    <h2 className="text-2xl font-bold mt-6">LIFO Principle</h2>
    <p className="leading-relaxed">
      In a stack, all insertions and deletions happen at only one end called the <strong>top</strong> of the stack.
      The element that is added last will be removed first, hence the name Last In First Out (LIFO).
    </p>

    <div className="bg-gray-50 p-4 rounded-lg mt-4">
      <h4 className="font-bold mb-2">Visual Representation:</h4>
      <pre className="text-sm bg-gray-800 text-green-400 p-4 rounded overflow-x-auto">{`
    |     |
    |  3  |  <- Top (Last In, First Out)
    |  2  |
    |  1  |
    |_____|

    Push 4:       Pop:
    |     |       |     |
    |  4  | <-Top |  3  | <-Top
    |  3  |       |  2  |
    |  2  |       |  1  |
    |  1  |       |_____|
    |_____|
`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Key Characteristics</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>LIFO Order:</strong> Last element added is first to be removed</li>
      <li><strong>Single End Operations:</strong> All operations happen at the top</li>
      <li><strong>Dynamic Size:</strong> Can grow or shrink as needed (in dynamic implementation)</li>
      <li><strong>Simple Access:</strong> Only the top element is directly accessible</li>
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
            <td className="p-3 border">Push</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">Add element to the top</td>
          </tr>
          <tr>
            <td className="p-3 border">Pop</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">Remove element from the top</td>
          </tr>
          <tr>
            <td className="p-3 border">Peek/Top</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">View the top element without removing</td>
          </tr>
          <tr>
            <td className="p-3 border">isEmpty</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">Check if stack is empty</td>
          </tr>
          <tr>
            <td className="p-3 border">Size</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">Get number of elements</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Real-World Examples</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Undo functionality:</strong> Text editors use stacks to track changes</li>
      <li><strong>Browser history:</strong> Back button uses stack to navigate previous pages</li>
      <li><strong>Function calls:</strong> Call stack in programming languages</li>
      <li><strong>Expression evaluation:</strong> Parsing mathematical expressions</li>
      <li><strong>Backtracking:</strong> Maze solving, puzzle games</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Implementation Methods</h2>
    <div className="space-y-4 mt-4">
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">1. Using Array</h4>
        <p>Simple implementation with fixed or dynamic size array. Fast access but may have size limitations.</p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">2. Using Linked List</h4>
        <p>Dynamic size with no overflow. Each push/pop involves creating/deleting nodes.</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Advantages</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Simple and easy to implement</li>
      <li>All operations are O(1) time complexity</li>
      <li>Efficient memory management in linked list implementation</li>
      <li>Helps in implementing recursion</li>
      <li>Natural fit for many algorithms (DFS, backtracking)</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Disadvantages</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Limited access - only top element is accessible</li>
      <li>Not suitable for random access</li>
      <li>Array implementation may cause overflow</li>
      <li>Not efficient for searching</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Common Applications</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Balanced parentheses checking</li>
      <li>Infix to Postfix/Prefix conversion</li>
      <li>Postfix expression evaluation</li>
      <li>Tower of Hanoi problem</li>
      <li>Stock span problem</li>
      <li>Next greater element</li>
      <li>Implementing recursion</li>
      <li>Memory management (call stack)</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Space Complexity</h2>
    <p className="leading-relaxed">
      The space complexity of a stack is <strong>O(n)</strong>, where n is the number of elements in the stack.
      In array implementation, additional space may be required if the array needs to be resized.
    </p>
  </div>
);

export default StackIntro;
