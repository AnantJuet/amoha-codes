import React from 'react';

const LinkedListOperations: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Linked List Operations
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Linked list operations are fundamental manipulations performed on linked lists including
      insertion, deletion, traversal, searching, and various utility operations. Mastering these
      operations is essential for solving complex linked list problems in interviews and real-world
      applications.
    </p>

    <h2 className="text-2xl font-bold mt-6">Categories of Operations</h2>
    <div className="space-y-4 mt-4">
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">1. Basic Operations</h4>
        <p>Insertion, Deletion, Traversal, Search</p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">2. Utility Operations</h4>
        <p>Find length, Find middle, Check if empty</p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">3. Transformation Operations</h4>
        <p>Reverse, Sort, Merge, Split</p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">4. Advanced Operations</h4>
        <p>Detect cycle, Find nth from end, Remove duplicates</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Insertion Operations</h2>
    <div className="bg-gray-50 p-4 rounded-lg mt-4">
      <h4 className="font-bold">Visual - Insert 25 at position 2:</h4>
      <div className="font-mono mt-2 space-y-1">
        <p>Before: HEAD -&gt; [10] -&gt; [20] -&gt; [30] -&gt; NULL</p>
        <p>After:  HEAD -&gt; [10] -&gt; [20] -&gt; [25] -&gt; [30] -&gt; NULL</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Deletion Operations</h2>
    <div className="bg-gray-50 p-4 rounded-lg mt-4">
      <h4 className="font-bold">Visual - Delete node with value 20:</h4>
      <div className="font-mono mt-2 space-y-1">
        <p>Before: HEAD -&gt; [10] -&gt; [20] -&gt; [30] -&gt; NULL</p>
        <p>Step 1: Find node with value 20</p>
        <p>Step 2: Update previous node's next pointer</p>
        <p>After:  HEAD -&gt; [10] -&gt; [30] -&gt; NULL</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">JavaScript Implementation</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // ============ BASIC OPERATIONS ============

    // Insert at beginning - O(1)
    insertAtHead(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    // Insert at end - O(n)
    insertAtTail(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    // Insert at position - O(n)
    insertAt(data, position) {
        if (position < 0 || position > this.size) {
            throw new Error("Invalid position");
        }
        if (position === 0) {
            this.insertAtHead(data);
            return;
        }
        const newNode = new Node(data);
        let current = this.head;
        for (let i = 0; i < position - 1; i++) {
            current = current.next;
        }
        newNode.next = current.next;
        current.next = newNode;
        this.size++;
    }

    // Delete from head - O(1)
    deleteFromHead() {
        if (!this.head) return null;
        const data = this.head.data;
        this.head = this.head.next;
        this.size--;
        return data;
    }

    // Delete from tail - O(n)
    deleteFromTail() {
        if (!this.head) return null;
        if (!this.head.next) {
            const data = this.head.data;
            this.head = null;
            this.size--;
            return data;
        }
        let current = this.head;
        while (current.next.next) {
            current = current.next;
        }
        const data = current.next.data;
        current.next = null;
        this.size--;
        return data;
    }

    // Delete by value - O(n)
    deleteByValue(value) {
        if (!this.head) return false;
        if (this.head.data === value) {
            this.head = this.head.next;
            this.size--;
            return true;
        }
        let current = this.head;
        while (current.next && current.next.data !== value) {
            current = current.next;
        }
        if (!current.next) return false;
        current.next = current.next.next;
        this.size--;
        return true;
    }

    // Delete at position - O(n)
    deleteAt(position) {
        if (position < 0 || position >= this.size) {
            throw new Error("Invalid position");
        }
        if (position === 0) {
            return this.deleteFromHead();
        }
        let current = this.head;
        for (let i = 0; i < position - 1; i++) {
            current = current.next;
        }
        const data = current.next.data;
        current.next = current.next.next;
        this.size--;
        return data;
    }

    // ============ UTILITY OPERATIONS ============

    // Get size - O(1)
    getSize() {
        return this.size;
    }

    // Check if empty - O(1)
    isEmpty() {
        return this.head === null;
    }

    // Search - O(n)
    search(value) {
        let current = this.head;
        let index = 0;
        while (current) {
            if (current.data === value) return index;
            current = current.next;
            index++;
        }
        return -1;
    }

    // Get element at index - O(n)
    getAt(index) {
        if (index < 0 || index >= this.size) {
            throw new Error("Index out of bounds");
        }
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current.data;
    }

    // Find middle element - O(n)
    findMiddle() {
        if (!this.head) return null;
        let slow = this.head;
        let fast = this.head;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow.data;
    }

    // Find nth node from end - O(n)
    getNthFromEnd(n) {
        if (n <= 0 || n > this.size) {
            throw new Error("Invalid position");
        }
        let first = this.head;
        let second = this.head;

        // Move first n nodes ahead
        for (let i = 0; i < n; i++) {
            first = first.next;
        }

        // Move both until first reaches end
        while (first) {
            first = first.next;
            second = second.next;
        }
        return second.data;
    }

    // ============ TRANSFORMATION OPERATIONS ============

    // Reverse iteratively - O(n)
    reverse() {
        let prev = null;
        let current = this.head;
        while (current) {
            const next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }

    // Reverse recursively - O(n)
    reverseRecursive() {
        this.head = this._reverseRecursiveHelper(this.head);
    }

    _reverseRecursiveHelper(node) {
        if (!node || !node.next) return node;
        const newHead = this._reverseRecursiveHelper(node.next);
        node.next.next = node;
        node.next = null;
        return newHead;
    }

    // Remove duplicates from sorted list - O(n)
    removeDuplicatesSorted() {
        let current = this.head;
        while (current && current.next) {
            if (current.data === current.next.data) {
                current.next = current.next.next;
                this.size--;
            } else {
                current = current.next;
            }
        }
    }

    // Remove all duplicates - O(n)
    removeDuplicates() {
        const seen = new Set();
        let current = this.head;
        let prev = null;
        while (current) {
            if (seen.has(current.data)) {
                prev.next = current.next;
                this.size--;
            } else {
                seen.add(current.data);
                prev = current;
            }
            current = current.next;
        }
    }

    // Sort the list (using merge sort) - O(n log n)
    sort() {
        this.head = this._mergeSort(this.head);
    }

    _mergeSort(head) {
        if (!head || !head.next) return head;

        // Find middle
        let slow = head, fast = head.next;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        const mid = slow.next;
        slow.next = null;

        const left = this._mergeSort(head);
        const right = this._mergeSort(mid);

        return this._merge(left, right);
    }

    _merge(l1, l2) {
        const dummy = new Node(0);
        let current = dummy;
        while (l1 && l2) {
            if (l1.data <= l2.data) {
                current.next = l1;
                l1 = l1.next;
            } else {
                current.next = l2;
                l2 = l2.next;
            }
            current = current.next;
        }
        current.next = l1 || l2;
        return dummy.next;
    }

    // ============ ADVANCED OPERATIONS ============

    // Detect cycle - O(n)
    hasCycle() {
        if (!this.head) return false;
        let slow = this.head;
        let fast = this.head;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow === fast) return true;
        }
        return false;
    }

    // Find cycle start - O(n)
    findCycleStart() {
        if (!this.head) return null;
        let slow = this.head;
        let fast = this.head;

        // Detect cycle
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow === fast) break;
        }

        if (!fast || !fast.next) return null;

        // Find start
        slow = this.head;
        while (slow !== fast) {
            slow = slow.next;
            fast = fast.next;
        }
        return slow;
    }

    // Check if palindrome - O(n)
    isPalindrome() {
        if (!this.head || !this.head.next) return true;

        // Find middle
        let slow = this.head, fast = this.head;
        while (fast.next && fast.next.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        // Reverse second half
        let secondHalf = slow.next;
        slow.next = null;
        secondHalf = this._reverseList(secondHalf);

        // Compare
        let p1 = this.head, p2 = secondHalf;
        while (p2) {
            if (p1.data !== p2.data) return false;
            p1 = p1.next;
            p2 = p2.next;
        }
        return true;
    }

    _reverseList(head) {
        let prev = null;
        while (head) {
            const next = head.next;
            head.next = prev;
            prev = head;
            head = next;
        }
        return prev;
    }

    // Print list
    print() {
        let current = this.head;
        let result = "HEAD -> ";
        while (current) {
            result += current.data + " -> ";
            current = current.next;
        }
        console.log(result + "NULL");
    }

    // Convert to array
    toArray() {
        const arr = [];
        let current = this.head;
        while (current) {
            arr.push(current.data);
            current = current.next;
        }
        return arr;
    }
}

// Usage examples
const list = new LinkedList();

// Basic operations
list.insertAtTail(10);
list.insertAtTail(20);
list.insertAtTail(30);
list.insertAtHead(5);
list.print(); // HEAD -> 5 -> 10 -> 20 -> 30 -> NULL

// Utility operations
console.log("Middle:", list.findMiddle()); // 10
console.log("2nd from end:", list.getNthFromEnd(2)); // 20

// Transformation operations
list.reverse();
list.print(); // HEAD -> 30 -> 20 -> 10 -> 5 -> NULL

list.sort();
list.print(); // HEAD -> 5 -> 10 -> 20 -> 30 -> NULL

// Advanced operations
console.log("Is palindrome:", list.isPalindrome()); // false
console.log("Has cycle:", list.hasCycle()); // false`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Complexity Analysis</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Operation</th>
            <th className="p-3 border">Time</th>
            <th className="p-3 border">Space</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Insert at Head</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">O(1)</td>
          </tr>
          <tr>
            <td className="p-3 border">Insert at Tail</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(1)</td>
          </tr>
          <tr>
            <td className="p-3 border">Delete</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(1)</td>
          </tr>
          <tr>
            <td className="p-3 border">Search</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(1)</td>
          </tr>
          <tr>
            <td className="p-3 border">Find Middle</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(1)</td>
          </tr>
          <tr>
            <td className="p-3 border">Reverse</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(1)</td>
          </tr>
          <tr>
            <td className="p-3 border">Sort</td>
            <td className="p-3 border">O(n log n)</td>
            <td className="p-3 border">O(log n)</td>
          </tr>
          <tr>
            <td className="p-3 border">Detect Cycle</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(1)</td>
          </tr>
          <tr>
            <td className="p-3 border">Remove Duplicates</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(n)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Common Interview Patterns</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Two Pointer (Slow/Fast):</strong> Find middle, detect cycle, nth from end</li>
      <li><strong>Dummy Node:</strong> Simplifies edge cases for head modifications</li>
      <li><strong>Reverse and Compare:</strong> Palindrome check</li>
      <li><strong>Merge Technique:</strong> Merge sorted lists, sort using merge sort</li>
      <li><strong>Hash Set:</strong> Remove duplicates, find intersection</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Use Cases</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Undo Operations:</strong> Store history of actions</li>
      <li><strong>Browser History:</strong> Navigate back and forward</li>
      <li><strong>Memory Management:</strong> Free list in allocators</li>
      <li><strong>Symbol Tables:</strong> Chaining in hash tables</li>
      <li><strong>Polynomial Arithmetic:</strong> Represent and manipulate polynomials</li>
    </ul>
  </div>
);

export default LinkedListOperations;
