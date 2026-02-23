import React from 'react';

const StackOperations: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Stack Operations: Push, Pop, Peek
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A stack supports several fundamental operations that allow us to add, remove, and inspect elements.
      All these operations follow the LIFO (Last In First Out) principle and operate on the top of the stack.
    </p>

    <h2 className="text-2xl font-bold mt-6">1. Push Operation</h2>
    <p className="leading-relaxed">
      The <strong>push</strong> operation adds an element to the top of the stack. If the stack is full
      (in case of fixed-size implementation), it results in a stack overflow.
    </p>

    <div className="bg-gray-50 p-4 rounded-lg mt-4">
      <h4 className="font-bold mb-2">Push Algorithm:</h4>
      <ol className="list-decimal list-inside space-y-1">
        <li>Check if the stack is full (overflow condition)</li>
        <li>If not full, increment the top pointer</li>
        <li>Add the element at the position pointed by top</li>
      </ol>
    </div>

    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Push operation
function push(stack, element) {
    if (isFull(stack)) {
        console.log("Stack Overflow!");
        return;
    }
    stack.top++;
    stack.items[stack.top] = element;
    console.log(\`Pushed \${element} to stack\`);
}

// JavaScript using array
class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }
}`}</pre>
    </div>

    <div className="bg-gray-50 p-4 rounded-lg mt-4">
      <h4 className="font-bold mb-2">Push Visualization:</h4>
      <pre className="text-sm bg-gray-800 text-green-400 p-4 rounded overflow-x-auto">{`
Before Push(4):        After Push(4):
    |     |               |     |
    |  3  | <- Top        |  4  | <- Top
    |  2  |               |  3  |
    |  1  |               |  2  |
    |_____|               |  1  |
                          |_____|
`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">2. Pop Operation</h2>
    <p className="leading-relaxed">
      The <strong>pop</strong> operation removes and returns the top element from the stack. If the stack
      is empty, it results in a stack underflow.
    </p>

    <div className="bg-gray-50 p-4 rounded-lg mt-4">
      <h4 className="font-bold mb-2">Pop Algorithm:</h4>
      <ol className="list-decimal list-inside space-y-1">
        <li>Check if the stack is empty (underflow condition)</li>
        <li>If not empty, store the top element</li>
        <li>Decrement the top pointer</li>
        <li>Return the stored element</li>
      </ol>
    </div>

    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Pop operation
function pop(stack) {
    if (isEmpty(stack)) {
        console.log("Stack Underflow!");
        return null;
    }
    const element = stack.items[stack.top];
    stack.top--;
    return element;
}

// JavaScript using array
class Stack {
    constructor() {
        this.items = [];
    }

    pop() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items.pop();
    }

    isEmpty() {
        return this.items.length === 0;
    }
}`}</pre>
    </div>

    <div className="bg-gray-50 p-4 rounded-lg mt-4">
      <h4 className="font-bold mb-2">Pop Visualization:</h4>
      <pre className="text-sm bg-gray-800 text-green-400 p-4 rounded overflow-x-auto">{`
Before Pop():          After Pop():
    |     |               |     |
    |  4  | <- Top        |  3  | <- Top
    |  3  |               |  2  |
    |  2  |               |  1  |
    |  1  |               |_____|
    |_____|
                      Returned: 4
`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">3. Peek (Top) Operation</h2>
    <p className="leading-relaxed">
      The <strong>peek</strong> or <strong>top</strong> operation returns the top element without removing it.
      This is useful when you want to see what's on top without modifying the stack.
    </p>

    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Peek operation
function peek(stack) {
    if (isEmpty(stack)) {
        console.log("Stack is empty!");
        return null;
    }
    return stack.items[stack.top];
}

// JavaScript using array
class Stack {
    constructor() {
        this.items = [];
    }

    peek() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items[this.items.length - 1];
    }
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">4. isEmpty Operation</h2>
    <p className="leading-relaxed">
      Checks whether the stack contains any elements. Returns true if stack is empty, false otherwise.
    </p>

    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// isEmpty operation
function isEmpty(stack) {
    return stack.top === -1;
}

// JavaScript using array
class Stack {
    isEmpty() {
        return this.items.length === 0;
    }
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">5. Size Operation</h2>
    <p className="leading-relaxed">
      Returns the number of elements currently in the stack.
    </p>

    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Size operation
function size(stack) {
    return stack.top + 1;
}

// JavaScript using array
class Stack {
    size() {
        return this.items.length;
    }
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Complete Stack Implementation</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`class Stack {
    constructor() {
        this.items = [];
    }

    // Add element to top
    push(element) {
        this.items.push(element);
    }

    // Remove and return top element
    pop() {
        if (this.isEmpty()) {
            throw new Error("Stack Underflow");
        }
        return this.items.pop();
    }

    // Return top element without removing
    peek() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }
        return this.items[this.items.length - 1];
    }

    // Check if stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Get number of elements
    size() {
        return this.items.length;
    }

    // Clear the stack
    clear() {
        this.items = [];
    }

    // Print stack elements
    print() {
        console.log(this.items.toString());
    }
}

// Usage Example
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek());   // Output: 30
console.log(stack.pop());    // Output: 30
console.log(stack.size());   // Output: 2
console.log(stack.isEmpty());// Output: false`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Time Complexity Analysis</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Operation</th>
            <th className="p-3 border">Time Complexity</th>
            <th className="p-3 border">Space Complexity</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Push</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">O(1)</td>
          </tr>
          <tr>
            <td className="p-3 border">Pop</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">O(1)</td>
          </tr>
          <tr>
            <td className="p-3 border">Peek</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">O(1)</td>
          </tr>
          <tr>
            <td className="p-3 border">isEmpty</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">O(1)</td>
          </tr>
          <tr>
            <td className="p-3 border">Size</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">O(1)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Key Points to Remember</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>All stack operations have O(1) time complexity</li>
      <li>Push adds to top, Pop removes from top</li>
      <li>Peek views the top element without removing it</li>
      <li>Always check for underflow before pop/peek</li>
      <li>Always check for overflow before push (for fixed-size stacks)</li>
      <li>Stack follows LIFO principle strictly</li>
    </ul>
  </div>
);

export default StackOperations;
