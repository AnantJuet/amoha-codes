import React from 'react';

const StackArray: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Stack Implementation Using Array
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      One of the most common ways to implement a stack is using an array. This approach is simple,
      efficient, and provides O(1) time complexity for all basic operations. However, it may have
      a fixed capacity limitation in static implementations.
    </p>

    <h2 className="text-2xl font-bold mt-6">How It Works</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>An array is used to store stack elements</li>
      <li>A variable <code className="bg-gray-100 px-1 rounded">top</code> keeps track of the topmost element's index</li>
      <li>Initially, <code className="bg-gray-100 px-1 rounded">top = -1</code> indicates an empty stack</li>
      <li>Push increments top and adds element at that index</li>
      <li>Pop returns element at top and decrements top</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Visual Representation</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`
Array: [ 10 | 20 | 30 | 40 |    |    |    |    ]
Index:    0    1    2    3    4    5    6    7
                          ^
                         top = 3
                     (capacity = 8)

After push(50):
Array: [ 10 | 20 | 30 | 40 | 50 |    |    |    ]
Index:    0    1    2    3    4    5    6    7
                               ^
                              top = 4

After pop():
Array: [ 10 | 20 | 30 | 40 |    |    |    |    ]
Index:    0    1    2    3    4    5    6    7
                          ^
                         top = 3  (returned: 50)
`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Implementation in JavaScript</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`class StackArray {
    constructor(capacity = 100) {
        this.items = new Array(capacity);
        this.capacity = capacity;
        this.top = -1;
    }

    // Check if stack is full
    isFull() {
        return this.top === this.capacity - 1;
    }

    // Check if stack is empty
    isEmpty() {
        return this.top === -1;
    }

    // Push element to stack
    push(element) {
        if (this.isFull()) {
            throw new Error("Stack Overflow! Cannot push to full stack.");
        }
        this.top++;
        this.items[this.top] = element;
        console.log(\`Pushed: \${element}\`);
    }

    // Pop element from stack
    pop() {
        if (this.isEmpty()) {
            throw new Error("Stack Underflow! Cannot pop from empty stack.");
        }
        const element = this.items[this.top];
        this.items[this.top] = undefined; // Clear the slot
        this.top--;
        return element;
    }

    // Peek at top element
    peek() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty!");
        }
        return this.items[this.top];
    }

    // Get current size
    size() {
        return this.top + 1;
    }

    // Print stack contents
    print() {
        if (this.isEmpty()) {
            console.log("Stack is empty");
            return;
        }
        let result = "Stack (top -> bottom): ";
        for (let i = this.top; i >= 0; i--) {
            result += this.items[i] + " ";
        }
        console.log(result);
    }
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Implementation in C++</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`#include <iostream>
using namespace std;

#define MAX_SIZE 100

class Stack {
private:
    int arr[MAX_SIZE];
    int top;

public:
    Stack() {
        top = -1;
    }

    bool isFull() {
        return top == MAX_SIZE - 1;
    }

    bool isEmpty() {
        return top == -1;
    }

    void push(int element) {
        if (isFull()) {
            cout << "Stack Overflow!" << endl;
            return;
        }
        arr[++top] = element;
        cout << "Pushed: " << element << endl;
    }

    int pop() {
        if (isEmpty()) {
            cout << "Stack Underflow!" << endl;
            return -1;
        }
        return arr[top--];
    }

    int peek() {
        if (isEmpty()) {
            cout << "Stack is empty!" << endl;
            return -1;
        }
        return arr[top];
    }

    int size() {
        return top + 1;
    }
};`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Implementation in Python</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`class StackArray:
    def __init__(self, capacity=100):
        self.items = [None] * capacity
        self.capacity = capacity
        self.top = -1

    def is_full(self):
        return self.top == self.capacity - 1

    def is_empty(self):
        return self.top == -1

    def push(self, element):
        if self.is_full():
            raise Exception("Stack Overflow!")
        self.top += 1
        self.items[self.top] = element

    def pop(self):
        if self.is_empty():
            raise Exception("Stack Underflow!")
        element = self.items[self.top]
        self.items[self.top] = None
        self.top -= 1
        return element

    def peek(self):
        if self.is_empty():
            raise Exception("Stack is empty!")
        return self.items[self.top]

    def size(self):
        return self.top + 1

# Usage
stack = StackArray(10)
stack.push(10)
stack.push(20)
stack.push(30)
print(stack.peek())  # Output: 30
print(stack.pop())   # Output: 30
print(stack.size())  # Output: 2`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Dynamic Array Implementation</h2>
    <p className="leading-relaxed">
      To overcome the fixed-size limitation, we can implement a dynamic array that doubles in size
      when full:
    </p>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`class DynamicStack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);  // Dynamic array handles resizing
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error("Stack Underflow!");
        }
        return this.items.pop();
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty!");
        }
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Complexity Analysis</h2>
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
            <td className="p-3 border">O(1) amortized</td>
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
    <p className="text-sm text-gray-600 mt-2">
      * For dynamic arrays, push is O(1) amortized - occasional resizing takes O(n) but happens rarely.
    </p>

    <h2 className="text-2xl font-bold mt-6">Advantages of Array Implementation</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Simple and easy to implement</li>
      <li>Memory efficient - no extra space for pointers</li>
      <li>Cache-friendly due to contiguous memory</li>
      <li>Random access is possible (though not typically used)</li>
      <li>All operations are O(1)</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Disadvantages of Array Implementation</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Fixed size in static implementation</li>
      <li>Memory wastage if stack doesn't use full capacity</li>
      <li>Dynamic resizing can be expensive (occasional O(n) push)</li>
      <li>Difficult to implement multiple stacks efficiently</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">When to Use Array Implementation</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>When maximum size is known in advance</li>
      <li>When memory efficiency is important</li>
      <li>When you need cache-friendly operations</li>
      <li>For simple applications with predictable stack usage</li>
    </ul>
  </div>
);

export default StackArray;
