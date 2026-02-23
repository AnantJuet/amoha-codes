import React from 'react';

const StackLinkedList: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Stack Implementation Using Linked List
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A stack can be efficiently implemented using a linked list. In this implementation, the top of
      the stack is represented by the head of the linked list. This approach provides true O(1) time
      complexity for all operations and dynamic sizing without overflow.
    </p>

    <h2 className="text-2xl font-bold mt-6">How It Works</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Each element is stored in a node with data and a pointer to the next node</li>
      <li>The head of the linked list represents the top of the stack</li>
      <li>Push operation adds a new node at the head</li>
      <li>Pop operation removes the head node</li>
      <li>No fixed capacity - grows and shrinks dynamically</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Visual Representation</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`
Initial Stack:
top -> [30|*] -> [20|*] -> [10|null]
        ^
       head

After push(40):
top -> [40|*] -> [30|*] -> [20|*] -> [10|null]
        ^
       head

After pop(): (returns 40)
top -> [30|*] -> [20|*] -> [10|null]
        ^
       head

Node Structure:
+------+------+
| data | next |
+------+------+
`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Implementation in JavaScript</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Node class for linked list
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Stack using Linked List
class StackLinkedList {
    constructor() {
        this.top = null;  // Head of linked list
        this.length = 0;
    }

    // Check if stack is empty
    isEmpty() {
        return this.top === null;
    }

    // Push element to stack
    push(data) {
        const newNode = new Node(data);
        newNode.next = this.top;  // Link new node to current top
        this.top = newNode;       // Make new node the top
        this.length++;
        console.log(\`Pushed: \${data}\`);
    }

    // Pop element from stack
    pop() {
        if (this.isEmpty()) {
            throw new Error("Stack Underflow!");
        }
        const poppedData = this.top.data;
        this.top = this.top.next;  // Move top to next node
        this.length--;
        return poppedData;
    }

    // Peek at top element
    peek() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty!");
        }
        return this.top.data;
    }

    // Get stack size
    size() {
        return this.length;
    }

    // Print stack contents
    print() {
        if (this.isEmpty()) {
            console.log("Stack is empty");
            return;
        }
        let current = this.top;
        let result = "Stack (top -> bottom): ";
        while (current !== null) {
            result += current.data + " -> ";
            current = current.next;
        }
        result += "null";
        console.log(result);
    }
}

// Usage
const stack = new StackLinkedList();
stack.push(10);
stack.push(20);
stack.push(30);
stack.print();        // Stack (top -> bottom): 30 -> 20 -> 10 -> null
console.log(stack.peek());  // 30
console.log(stack.pop());   // 30
stack.print();        // Stack (top -> bottom): 20 -> 10 -> null`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Implementation in C++</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`#include <iostream>
using namespace std;

// Node structure
struct Node {
    int data;
    Node* next;

    Node(int val) {
        data = val;
        next = nullptr;
    }
};

class Stack {
private:
    Node* top;
    int length;

public:
    Stack() {
        top = nullptr;
        length = 0;
    }

    bool isEmpty() {
        return top == nullptr;
    }

    void push(int data) {
        Node* newNode = new Node(data);
        newNode->next = top;
        top = newNode;
        length++;
        cout << "Pushed: " << data << endl;
    }

    int pop() {
        if (isEmpty()) {
            cout << "Stack Underflow!" << endl;
            return -1;
        }
        Node* temp = top;
        int poppedData = temp->data;
        top = top->next;
        delete temp;  // Free memory
        length--;
        return poppedData;
    }

    int peek() {
        if (isEmpty()) {
            cout << "Stack is empty!" << endl;
            return -1;
        }
        return top->data;
    }

    int size() {
        return length;
    }

    // Destructor to free memory
    ~Stack() {
        while (!isEmpty()) {
            pop();
        }
    }
};`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Implementation in Python</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class StackLinkedList:
    def __init__(self):
        self.top = None
        self.length = 0

    def is_empty(self):
        return self.top is None

    def push(self, data):
        new_node = Node(data)
        new_node.next = self.top
        self.top = new_node
        self.length += 1

    def pop(self):
        if self.is_empty():
            raise Exception("Stack Underflow!")
        popped_data = self.top.data
        self.top = self.top.next
        self.length -= 1
        return popped_data

    def peek(self):
        if self.is_empty():
            raise Exception("Stack is empty!")
        return self.top.data

    def size(self):
        return self.length

    def __str__(self):
        if self.is_empty():
            return "Stack is empty"
        result = []
        current = self.top
        while current:
            result.append(str(current.data))
            current = current.next
        return " -> ".join(result) + " -> null"

# Usage
stack = StackLinkedList()
stack.push(10)
stack.push(20)
stack.push(30)
print(stack)           # 30 -> 20 -> 10 -> null
print(stack.peek())    # 30
print(stack.pop())     # 30
print(stack.size())    # 2`}</pre>
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
    <p className="text-sm text-gray-600 mt-2">
      Overall Space Complexity: O(n) for n elements in the stack.
    </p>

    <h2 className="text-2xl font-bold mt-6">Array vs Linked List Implementation</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">Array</th>
            <th className="p-3 border">Linked List</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Size</td>
            <td className="p-3 border">Fixed (unless dynamic)</td>
            <td className="p-3 border">Dynamic</td>
          </tr>
          <tr>
            <td className="p-3 border">Memory</td>
            <td className="p-3 border">Contiguous</td>
            <td className="p-3 border">Non-contiguous</td>
          </tr>
          <tr>
            <td className="p-3 border">Overflow</td>
            <td className="p-3 border">Possible</td>
            <td className="p-3 border">Only with memory exhaustion</td>
          </tr>
          <tr>
            <td className="p-3 border">Memory Overhead</td>
            <td className="p-3 border">None</td>
            <td className="p-3 border">Extra for pointers</td>
          </tr>
          <tr>
            <td className="p-3 border">Cache Performance</td>
            <td className="p-3 border">Better</td>
            <td className="p-3 border">Worse</td>
          </tr>
          <tr>
            <td className="p-3 border">Implementation</td>
            <td className="p-3 border">Simpler</td>
            <td className="p-3 border">Slightly complex</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Advantages of Linked List Implementation</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>No stack overflow (unless memory is exhausted)</li>
      <li>Dynamic size - grows and shrinks as needed</li>
      <li>No memory wastage</li>
      <li>True O(1) push without amortization</li>
      <li>Easy to implement multiple stacks</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Disadvantages of Linked List Implementation</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Extra memory for storing pointers</li>
      <li>Not cache-friendly due to non-contiguous memory</li>
      <li>Memory allocation/deallocation overhead for each push/pop</li>
      <li>Slightly more complex implementation</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">When to Use Linked List Implementation</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>When stack size is unpredictable</li>
      <li>When you need guaranteed O(1) operations</li>
      <li>When implementing multiple stacks</li>
      <li>When memory allocation is not a bottleneck</li>
      <li>When you need to avoid stack overflow</li>
    </ul>
  </div>
);

export default StackLinkedList;
