import React from 'react';

const ReverseLinkedList: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Reversing a Linked List
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Reversing a linked list is one of the most fundamental and frequently asked problems in coding
      interviews. It involves changing the direction of all pointers so that the last node becomes
      the first and vice versa. Understanding multiple approaches to solve this problem builds a
      strong foundation for more complex linked list manipulations.
    </p>

    <h2 className="text-2xl font-bold mt-6">Problem Statement</h2>
    <div className="bg-gray-50 p-4 rounded-lg mt-4">
      <p className="font-bold">Given a singly linked list, reverse it in place.</p>
      <div className="font-mono mt-4">
        <p>Input:  HEAD -&gt; [1] -&gt; [2] -&gt; [3] -&gt; [4] -&gt; [5] -&gt; NULL</p>
        <p>Output: HEAD -&gt; [5] -&gt; [4] -&gt; [3] -&gt; [2] -&gt; [1] -&gt; NULL</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Approaches to Reverse</h2>
    <div className="space-y-4 mt-4">
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">1. Iterative (Three Pointers)</h4>
        <p>Use prev, current, and next pointers to reverse links one by one.</p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">2. Recursive</h4>
        <p>Reverse the rest of the list and fix the pointers on the way back.</p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">3. Using Stack</h4>
        <p>Push all nodes to stack and rebuild the list (extra space).</p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">4. Reverse in Groups</h4>
        <p>Reverse nodes in groups of K at a time.</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Iterative Approach - Step by Step</h2>
    <div className="bg-gray-50 p-4 rounded-lg mt-4">
      <div className="font-mono space-y-2">
        <p>Initial: prev=NULL, curr=1, next=NULL</p>
        <p className="mt-2">Step 1:</p>
        <p>  next = curr.next (next = 2)</p>
        <p>  curr.next = prev (1 -&gt; NULL)</p>
        <p>  prev = curr (prev = 1)</p>
        <p>  curr = next (curr = 2)</p>
        <p className="mt-2">Step 2:</p>
        <p>  next = 3, 2 -&gt; 1, prev = 2, curr = 3</p>
        <p className="mt-2">Step 3:</p>
        <p>  next = 4, 3 -&gt; 2, prev = 3, curr = 4</p>
        <p className="mt-2">Step 4:</p>
        <p>  next = 5, 4 -&gt; 3, prev = 4, curr = 5</p>
        <p className="mt-2">Step 5:</p>
        <p>  next = NULL, 5 -&gt; 4, prev = 5, curr = NULL</p>
        <p className="mt-2">Final: head = prev (5)</p>
        <p>Result: 5 -&gt; 4 -&gt; 3 -&gt; 2 -&gt; 1 -&gt; NULL</p>
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
    }

    // Helper to create list from array
    static fromArray(arr) {
        const list = new LinkedList();
        for (const val of arr) {
            list.append(val);
        }
        return list;
    }

    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    // ============ METHOD 1: ITERATIVE (RECOMMENDED) ============
    // Time: O(n), Space: O(1)
    reverseIterative() {
        let prev = null;
        let current = this.head;
        let next = null;

        while (current !== null) {
            // Store next node
            next = current.next;
            // Reverse current node's pointer
            current.next = prev;
            // Move prev and current one step forward
            prev = current;
            current = next;
        }

        this.head = prev;
        return this.head;
    }

    // ============ METHOD 2: RECURSIVE ============
    // Time: O(n), Space: O(n) due to call stack
    reverseRecursive() {
        this.head = this._reverseRecursiveHelper(this.head);
        return this.head;
    }

    _reverseRecursiveHelper(node) {
        // Base case: empty list or single node
        if (node === null || node.next === null) {
            return node;
        }

        // Reverse the rest of the list
        const newHead = this._reverseRecursiveHelper(node.next);

        // Put current node at the end of reversed list
        node.next.next = node;
        node.next = null;

        return newHead;
    }

    // ============ METHOD 3: USING STACK ============
    // Time: O(n), Space: O(n)
    reverseUsingStack() {
        if (!this.head || !this.head.next) return this.head;

        const stack = [];
        let current = this.head;

        // Push all nodes to stack
        while (current !== null) {
            stack.push(current);
            current = current.next;
        }

        // Pop and rebuild
        this.head = stack.pop();
        current = this.head;

        while (stack.length > 0) {
            current.next = stack.pop();
            current = current.next;
        }
        current.next = null;

        return this.head;
    }

    // ============ METHOD 4: REVERSE IN GROUPS OF K ============
    // Time: O(n), Space: O(1) iterative / O(n/k) recursive
    reverseInGroups(k) {
        this.head = this._reverseKGroup(this.head, k);
        return this.head;
    }

    _reverseKGroup(head, k) {
        // Check if there are k nodes to reverse
        let count = 0;
        let current = head;
        while (current !== null && count < k) {
            current = current.next;
            count++;
        }

        // If k nodes exist, reverse them
        if (count === k) {
            current = head;
            let prev = null;
            let next = null;

            for (let i = 0; i < k; i++) {
                next = current.next;
                current.next = prev;
                prev = current;
                current = next;
            }

            // head is now the tail of reversed group
            // Recursively reverse the rest and connect
            head.next = this._reverseKGroup(current, k);

            return prev; // prev is new head of this group
        }

        return head; // Not enough nodes, return as is
    }

    // ============ METHOD 5: REVERSE BETWEEN POSITIONS ============
    // Reverse from position m to n (1-indexed)
    // Time: O(n), Space: O(1)
    reverseBetween(m, n) {
        if (!this.head || m === n) return this.head;

        const dummy = new Node(0);
        dummy.next = this.head;
        let prev = dummy;

        // Move to position m-1
        for (let i = 1; i < m; i++) {
            prev = prev.next;
        }

        // Start reversing from position m
        let start = prev.next;  // First node to reverse
        let then = start.next;  // Node to be moved

        // Reverse nodes from m to n
        for (let i = 0; i < n - m; i++) {
            start.next = then.next;
            then.next = prev.next;
            prev.next = then;
            then = start.next;
        }

        this.head = dummy.next;
        return this.head;
    }

    // ============ METHOD 6: REVERSE ALTERNATE K NODES ============
    // Reverse alternate groups of k nodes
    reverseAlternateK(k) {
        this.head = this._reverseAlternateKHelper(this.head, k, true);
        return this.head;
    }

    _reverseAlternateKHelper(head, k, shouldReverse) {
        if (!head) return null;

        let current = head;
        let prev = null;
        let next = null;
        let count = 0;

        if (shouldReverse) {
            // Reverse k nodes
            while (current !== null && count < k) {
                next = current.next;
                current.next = prev;
                prev = current;
                current = next;
                count++;
            }

            // head is now tail of reversed group
            head.next = this._reverseAlternateKHelper(current, k, false);
            return prev;
        } else {
            // Skip k nodes
            while (current !== null && count < k - 1) {
                current = current.next;
                count++;
            }

            if (current !== null) {
                current.next = this._reverseAlternateKHelper(current.next, k, true);
            }
            return head;
        }
    }

    // Utility: Print list
    print() {
        let current = this.head;
        let result = "HEAD -> ";
        while (current) {
            result += current.data + " -> ";
            current = current.next;
        }
        console.log(result + "NULL");
    }

    // Utility: Convert to array
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

// ============ USAGE EXAMPLES ============

// Example 1: Basic reversal
let list1 = LinkedList.fromArray([1, 2, 3, 4, 5]);
console.log("Original:", list1.toArray()); // [1, 2, 3, 4, 5]
list1.reverseIterative();
console.log("Reversed:", list1.toArray()); // [5, 4, 3, 2, 1]

// Example 2: Recursive reversal
let list2 = LinkedList.fromArray([1, 2, 3, 4, 5]);
list2.reverseRecursive();
console.log("Recursive:", list2.toArray()); // [5, 4, 3, 2, 1]

// Example 3: Reverse in groups of k=2
let list3 = LinkedList.fromArray([1, 2, 3, 4, 5, 6]);
list3.reverseInGroups(2);
console.log("Groups of 2:", list3.toArray()); // [2, 1, 4, 3, 6, 5]

// Example 4: Reverse in groups of k=3
let list4 = LinkedList.fromArray([1, 2, 3, 4, 5, 6, 7, 8]);
list4.reverseInGroups(3);
console.log("Groups of 3:", list4.toArray()); // [3, 2, 1, 6, 5, 4, 7, 8]

// Example 5: Reverse between positions
let list5 = LinkedList.fromArray([1, 2, 3, 4, 5]);
list5.reverseBetween(2, 4);
console.log("Reverse 2-4:", list5.toArray()); // [1, 4, 3, 2, 5]`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Complexity Analysis</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Method</th>
            <th className="p-3 border">Time Complexity</th>
            <th className="p-3 border">Space Complexity</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Iterative</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(1)</td>
          </tr>
          <tr>
            <td className="p-3 border">Recursive</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(n) stack</td>
          </tr>
          <tr>
            <td className="p-3 border">Using Stack</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(n)</td>
          </tr>
          <tr>
            <td className="p-3 border">Reverse K Groups</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(n/k) recursive</td>
          </tr>
          <tr>
            <td className="p-3 border">Reverse Between m,n</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(1)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Key Insights</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Iterative is preferred:</strong> O(1) space, no stack overflow risk</li>
      <li><strong>Three pointer technique:</strong> prev, current, next - memorize this pattern</li>
      <li><strong>Dummy node helps:</strong> Simplifies edge cases when head changes</li>
      <li><strong>Draw before coding:</strong> Visualize pointer changes on paper</li>
      <li><strong>Handle edge cases:</strong> Empty list, single node, two nodes</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Common Variations in Interviews</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Reverse entire linked list</li>
      <li>Reverse in groups of K</li>
      <li>Reverse between positions m and n</li>
      <li>Reverse alternate K nodes</li>
      <li>Reverse first K nodes</li>
      <li>Check if list is palindrome (uses reverse)</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Use Cases and Applications</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Undo Operations:</strong> Reverse to restore previous state</li>
      <li><strong>Palindrome Check:</strong> Compare with reversed list</li>
      <li><strong>Addition of Numbers:</strong> Numbers stored in reverse in lists</li>
      <li><strong>Browser Navigation:</strong> Reverse back button history</li>
      <li><strong>Data Processing:</strong> Process elements in reverse order</li>
    </ul>
  </div>
);

export default ReverseLinkedList;
