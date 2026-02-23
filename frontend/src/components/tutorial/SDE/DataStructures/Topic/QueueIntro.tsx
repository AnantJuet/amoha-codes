import React from 'react';

const QueueIntro: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Introduction to Queue
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A queue is a linear data structure that follows the <strong>First In First Out (FIFO)</strong> principle.
      This means the first element added to the queue is the first one to be removed. Think of it like
      a line at a ticket counter - the first person in line gets served first.
    </p>

    <h2 className="text-2xl font-bold mt-6">FIFO Principle</h2>
    <p className="leading-relaxed">
      In a queue, elements are inserted at one end called the <strong>rear</strong> (or back) and removed
      from the other end called the <strong>front</strong>. This ensures that elements are processed in
      the same order they arrive.
    </p>

    <div className="bg-gray-50 p-4 rounded-lg mt-4">
      <h4 className="font-bold mb-2">Visual Representation:</h4>
      <pre className="text-sm bg-gray-800 text-green-400 p-4 rounded overflow-x-auto">{`
         Front                          Rear
           |                              |
           v                              v
        +-----+-----+-----+-----+-----+-----+
        |  1  |  2  |  3  |  4  |  5  |     |
        +-----+-----+-----+-----+-----+-----+
         ^                              ^
       Dequeue                        Enqueue
    (Remove here)                  (Add here)

    Enqueue 6:
        +-----+-----+-----+-----+-----+-----+
        |  1  |  2  |  3  |  4  |  5  |  6  |
        +-----+-----+-----+-----+-----+-----+

    Dequeue (removes 1):
        +-----+-----+-----+-----+-----+
        |  2  |  3  |  4  |  5  |  6  |
        +-----+-----+-----+-----+-----+
`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Key Characteristics</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>FIFO Order:</strong> First element added is first to be removed</li>
      <li><strong>Two-End Operations:</strong> Insert at rear, remove from front</li>
      <li><strong>Linear Structure:</strong> Elements arranged in sequence</li>
      <li><strong>Dynamic Size:</strong> Can grow or shrink as needed</li>
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
            <td className="p-3 border">Enqueue</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">Add element at the rear</td>
          </tr>
          <tr>
            <td className="p-3 border">Dequeue</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">Remove element from the front</td>
          </tr>
          <tr>
            <td className="p-3 border">Front/Peek</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">View front element without removing</td>
          </tr>
          <tr>
            <td className="p-3 border">isEmpty</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">Check if queue is empty</td>
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
      <li><strong>Ticket counters:</strong> First person in line gets served first</li>
      <li><strong>Print queue:</strong> Documents printed in order received</li>
      <li><strong>CPU scheduling:</strong> Processes executed in order of arrival</li>
      <li><strong>Call center:</strong> Calls answered in order received</li>
      <li><strong>Keyboard buffer:</strong> Keystrokes processed in order typed</li>
      <li><strong>Web server requests:</strong> Requests handled in order received</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Types of Queues</h2>
    <div className="space-y-4 mt-4">
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">1. Simple Queue</h4>
        <p>Basic FIFO queue with enqueue at rear and dequeue at front.</p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">2. Circular Queue</h4>
        <p>Last position connects back to first position, making efficient use of memory.</p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">3. Double-Ended Queue (Deque)</h4>
        <p>Insert and delete from both ends.</p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">4. Priority Queue</h4>
        <p>Elements dequeued based on priority, not order of arrival.</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Implementation Methods</h2>
    <div className="space-y-4 mt-4">
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">1. Using Array</h4>
        <p>Simple but may waste space after dequeue operations unless using circular array.</p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">2. Using Linked List</h4>
        <p>Dynamic size, efficient enqueue and dequeue with proper pointer management.</p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">3. Using Two Stacks</h4>
        <p>Can implement queue using two stacks (useful for certain scenarios).</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Queue vs Stack</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">Queue</th>
            <th className="p-3 border">Stack</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Order</td>
            <td className="p-3 border">FIFO (First In First Out)</td>
            <td className="p-3 border">LIFO (Last In First Out)</td>
          </tr>
          <tr>
            <td className="p-3 border">Insert</td>
            <td className="p-3 border">Rear (Enqueue)</td>
            <td className="p-3 border">Top (Push)</td>
          </tr>
          <tr>
            <td className="p-3 border">Remove</td>
            <td className="p-3 border">Front (Dequeue)</td>
            <td className="p-3 border">Top (Pop)</td>
          </tr>
          <tr>
            <td className="p-3 border">Access Points</td>
            <td className="p-3 border">Two ends</td>
            <td className="p-3 border">One end</td>
          </tr>
          <tr>
            <td className="p-3 border">Use Case</td>
            <td className="p-3 border">BFS, Scheduling</td>
            <td className="p-3 border">DFS, Backtracking</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Advantages</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Maintains order of arrival</li>
      <li>Fair processing - first come, first served</li>
      <li>All operations are O(1) time complexity</li>
      <li>Simple and intuitive concept</li>
      <li>Natural fit for BFS and level-order traversal</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Disadvantages</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>No random access - can only access front element</li>
      <li>Not suitable when priority-based processing is needed</li>
      <li>Array implementation may waste space or require resizing</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Common Applications</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Breadth-First Search (BFS) in graphs and trees</li>
      <li>Level-order traversal of binary trees</li>
      <li>CPU and disk scheduling</li>
      <li>Print spooling</li>
      <li>Message queues in distributed systems</li>
      <li>Handling interrupts in operating systems</li>
      <li>Asynchronous data transfer (pipes, buffers)</li>
      <li>Traffic management systems</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Space Complexity</h2>
    <p className="leading-relaxed">
      The space complexity of a queue is <strong>O(n)</strong>, where n is the number of elements
      in the queue. Additional space may be required depending on the implementation method used.
    </p>
  </div>
);

export default QueueIntro;
