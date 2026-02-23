import React from 'react';

const QueueUsingStack: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Queue using Stack
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A Queue can be implemented using two stacks. This is a classic interview question that
      demonstrates how to convert LIFO (Stack) behavior into FIFO (Queue) behavior.
    </p>

    <h2 className="text-2xl font-bold mt-6">Two Approaches</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-bold text-blue-800">Approach 1: Costly Enqueue</h4>
        <ul className="text-sm mt-2 space-y-1">
          <li><strong>Enqueue:</strong> O(n) - Move all to stack2, push, move back</li>
          <li><strong>Dequeue:</strong> O(1) - Pop from stack1</li>
        </ul>
      </div>
      <div className="bg-green-50 p-4 rounded-lg">
        <h4 className="font-bold text-green-800">Approach 2: Costly Dequeue</h4>
        <ul className="text-sm mt-2 space-y-1">
          <li><strong>Enqueue:</strong> O(1) - Push to stack1</li>
          <li><strong>Dequeue:</strong> O(n) - Move to stack2 if empty, pop</li>
        </ul>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Approach 2 Implementation (Recommended)</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`class QueueUsingStack {
    constructor() {
        this.stack1 = [];  // For enqueue
        this.stack2 = [];  // For dequeue
    }

    // O(1) - Simply push to stack1
    enqueue(item) {
        this.stack1.push(item);
    }

    // Amortized O(1) - Pop from stack2
    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }

        // If stack2 is empty, transfer all from stack1
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }

        return this.stack2.pop();
    }

    // Peek front element
    front() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }

        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }

        return this.stack2[this.stack2.length - 1];
    }

    isEmpty() {
        return this.stack1.length === 0 && this.stack2.length === 0;
    }

    size() {
        return this.stack1.length + this.stack2.length;
    }
}

// Example usage
const queue = new QueueUsingStack();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue());  // 1
console.log(queue.front());    // 2
queue.enqueue(4);
console.log(queue.dequeue());  // 2`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">How It Works</h2>
    <div className="bg-gray-100 p-4 rounded-lg">
      <p className="font-semibold">Enqueue: 1, 2, 3</p>
      <p className="mt-2">Stack1: [1, 2, 3] (top = 3)</p>
      <p>Stack2: []</p>

      <p className="font-semibold mt-4">Dequeue (first call):</p>
      <p className="mt-2">1. Transfer all to Stack2: Stack2 = [3, 2, 1] (top = 1)</p>
      <p>2. Pop from Stack2: returns 1</p>
      <p>3. Stack2: [3, 2] (top = 2)</p>

      <p className="font-semibold mt-4">Dequeue (second call):</p>
      <p className="mt-2">Stack2 not empty, pop directly: returns 2</p>
    </div>

    <h2 className="text-2xl font-bold mt-6">Complexity Analysis</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Operation</th>
            <th className="p-3 border">Time Complexity</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Enqueue</td>
            <td className="p-3 border">O(1)</td>
          </tr>
          <tr>
            <td className="p-3 border">Dequeue</td>
            <td className="p-3 border">Amortized O(1), Worst O(n)</td>
          </tr>
          <tr>
            <td className="p-3 border">Front</td>
            <td className="p-3 border">Amortized O(1), Worst O(n)</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p className="mt-2"><strong>Space Complexity:</strong> O(n) for two stacks</p>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="text-yellow-700">
        <strong>Why Amortized O(1)?</strong> Each element is moved from stack1 to stack2 at most once.
        So n enqueue and n dequeue operations cost O(2n), making each operation O(1) on average.
      </p>
    </div>
  </div>
);

export default QueueUsingStack;
