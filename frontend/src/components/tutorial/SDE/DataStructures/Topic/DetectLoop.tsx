import React from 'react';

const DetectLoop: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Loop Detection in Linked List
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A loop (or cycle) in a linked list occurs when a node's next pointer points back to a previous
      node in the list, creating an infinite loop. Detecting and handling loops is crucial for
      preventing infinite loops in programs and is a classic interview question that tests understanding
      of pointer manipulation and algorithmic thinking.
    </p>

    <h2 className="text-2xl font-bold mt-6">What is a Loop?</h2>
    <div className="bg-gray-50 p-4 rounded-lg mt-4">
      <div className="font-mono text-center overflow-x-auto">
        <p className="mb-4">Linked List with a Loop:</p>
        <pre className="text-sm">
{`HEAD -> [1] -> [2] -> [3] -> [4] -> [5]
                       ^              |
                       |______________|

Node 5's next points to Node 3, creating a loop`}
        </pre>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Common Problems</h2>
    <div className="space-y-4 mt-4">
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">1. Detect if loop exists</h4>
        <p>Return true/false indicating presence of a cycle</p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">2. Find the start of the loop</h4>
        <p>Return the node where the loop begins</p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">3. Find the length of the loop</h4>
        <p>Count the number of nodes in the cycle</p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">4. Remove the loop</h4>
        <p>Break the cycle while keeping the list intact</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Detection Algorithms</h2>
    <div className="space-y-4 mt-4">
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">1. Floyd's Cycle Detection (Tortoise and Hare)</h4>
        <p>Use two pointers moving at different speeds. If they meet, there's a loop. Time: O(n), Space: O(1)</p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">2. Hashing</h4>
        <p>Store visited nodes in a hash set. If a node is visited twice, there's a loop. Time: O(n), Space: O(n)</p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">3. Marking Visited Nodes</h4>
        <p>Modify nodes to mark them as visited. Destructive approach. Time: O(n), Space: O(1)</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Floyd's Algorithm - Step by Step</h2>
    <div className="bg-gray-50 p-4 rounded-lg mt-4">
      <div className="font-mono space-y-2 text-sm">
        <p>List: 1 -&gt; 2 -&gt; 3 -&gt; 4 -&gt; 5 -&gt; 3 (loop to node 3)</p>
        <p className="mt-2">slow moves 1 step, fast moves 2 steps:</p>
        <p>Step 0: slow=1, fast=1</p>
        <p>Step 1: slow=2, fast=3</p>
        <p>Step 2: slow=3, fast=5</p>
        <p>Step 3: slow=4, fast=4 (both at same position via cycle)</p>
        <p className="mt-2 text-green-700 font-bold">Loop detected! slow == fast</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Finding Loop Start - Mathematical Proof</h2>
    <div className="bg-gray-50 p-4 rounded-lg mt-4">
      <div className="space-y-2">
        <p><strong>Let:</strong></p>
        <ul className="list-disc list-inside ml-4">
          <li>m = distance from head to loop start</li>
          <li>k = distance from loop start to meeting point</li>
          <li>L = length of loop</li>
        </ul>
        <p className="mt-2"><strong>When they meet:</strong></p>
        <p>Distance traveled by slow = m + k</p>
        <p>Distance traveled by fast = m + k + nL (n complete loops)</p>
        <p className="mt-2"><strong>Since fast travels 2x speed:</strong></p>
        <p>2(m + k) = m + k + nL</p>
        <p>m + k = nL</p>
        <p>m = nL - k</p>
        <p className="mt-2"><strong>This means:</strong> Moving m steps from head and m steps from meeting point both reach the loop start!</p>
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

    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return newNode;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
        return newNode;
    }

    // Create a loop for testing (connect tail to a node)
    createLoop(position) {
        if (!this.head) return;

        let loopNode = this.head;
        for (let i = 0; i < position && loopNode; i++) {
            loopNode = loopNode.next;
        }

        let tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
        tail.next = loopNode;
    }

    // ============ METHOD 1: FLOYD'S CYCLE DETECTION ============
    // Time: O(n), Space: O(1)
    detectLoop() {
        if (!this.head || !this.head.next) {
            return false;
        }

        let slow = this.head;
        let fast = this.head;

        while (fast !== null && fast.next !== null) {
            slow = slow.next;        // Move 1 step
            fast = fast.next.next;   // Move 2 steps

            if (slow === fast) {
                return true;  // Loop detected
            }
        }

        return false;  // No loop
    }

    // ============ METHOD 2: USING HASH SET ============
    // Time: O(n), Space: O(n)
    detectLoopHashing() {
        const visited = new Set();
        let current = this.head;

        while (current !== null) {
            if (visited.has(current)) {
                return true;  // Loop detected
            }
            visited.add(current);
            current = current.next;
        }

        return false;  // No loop
    }

    // ============ FIND LOOP START NODE ============
    // Time: O(n), Space: O(1)
    findLoopStart() {
        if (!this.head || !this.head.next) {
            return null;
        }

        let slow = this.head;
        let fast = this.head;

        // Phase 1: Detect loop
        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;

            if (slow === fast) {
                break;  // Loop found
            }
        }

        // No loop exists
        if (fast === null || fast.next === null) {
            return null;
        }

        // Phase 2: Find loop start
        // Move slow to head, keep fast at meeting point
        // Both move at same speed until they meet
        slow = this.head;
        while (slow !== fast) {
            slow = slow.next;
            fast = fast.next;
        }

        return slow;  // Loop start node
    }

    // ============ FIND LOOP LENGTH ============
    // Time: O(n), Space: O(1)
    findLoopLength() {
        if (!this.head || !this.head.next) {
            return 0;
        }

        let slow = this.head;
        let fast = this.head;

        // Detect loop
        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;

            if (slow === fast) {
                break;
            }
        }

        // No loop
        if (fast === null || fast.next === null) {
            return 0;
        }

        // Count loop length
        let count = 1;
        let current = slow.next;
        while (current !== slow) {
            count++;
            current = current.next;
        }

        return count;
    }

    // ============ REMOVE LOOP ============
    // Time: O(n), Space: O(1)
    removeLoop() {
        if (!this.head || !this.head.next) {
            return false;
        }

        let slow = this.head;
        let fast = this.head;

        // Detect loop
        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;

            if (slow === fast) {
                break;
            }
        }

        // No loop
        if (fast === null || fast.next === null) {
            return false;
        }

        // Find loop start
        slow = this.head;

        // Special case: loop starts at head
        if (slow === fast) {
            while (fast.next !== slow) {
                fast = fast.next;
            }
        } else {
            while (slow.next !== fast.next) {
                slow = slow.next;
                fast = fast.next;
            }
        }

        // Remove loop
        fast.next = null;
        return true;
    }

    // ============ REMOVE LOOP USING HASHING ============
    // Time: O(n), Space: O(n)
    removeLoopHashing() {
        if (!this.head) return false;

        const visited = new Set();
        let current = this.head;
        let prev = null;

        while (current !== null) {
            if (visited.has(current)) {
                // Found loop start, break the connection
                prev.next = null;
                return true;
            }
            visited.add(current);
            prev = current;
            current = current.next;
        }

        return false;
    }

    // ============ COUNT NODES IN LOOP ============
    countNodesInLoop() {
        const loopStart = this.findLoopStart();
        if (!loopStart) return 0;

        let count = 1;
        let current = loopStart.next;
        while (current !== loopStart) {
            count++;
            current = current.next;
        }
        return count;
    }

    // Print list (be careful with loops!)
    printSafe(limit = 20) {
        let current = this.head;
        let result = "HEAD -> ";
        let count = 0;
        const visited = new Set();

        while (current !== null && count < limit) {
            if (visited.has(current)) {
                result += \`(LOOP to \${current.data})\`;
                break;
            }
            visited.add(current);
            result += current.data + " -> ";
            current = current.next;
            count++;
        }

        if (count >= limit) {
            result += "... (truncated)";
        } else if (current === null) {
            result += "NULL";
        }

        console.log(result);
    }
}

// ============ USAGE EXAMPLES ============

// Example 1: Detect loop
const list1 = new LinkedList();
list1.append(1);
list1.append(2);
list1.append(3);
list1.append(4);
list1.append(5);

console.log("Before loop:", list1.detectLoop()); // false

list1.createLoop(2); // Connect tail to node at index 2 (value 3)
console.log("After loop:", list1.detectLoop()); // true

// Example 2: Find loop start
const list2 = new LinkedList();
list2.append(1);
list2.append(2);
list2.append(3);
list2.append(4);
list2.append(5);
list2.createLoop(1); // Loop starts at node 2

const loopStart = list2.findLoopStart();
console.log("Loop starts at:", loopStart ? loopStart.data : "No loop"); // 2

// Example 3: Find loop length
const loopLength = list2.findLoopLength();
console.log("Loop length:", loopLength); // 4 (nodes 2,3,4,5)

// Example 4: Remove loop
const list3 = new LinkedList();
list3.append(1);
list3.append(2);
list3.append(3);
list3.append(4);
list3.append(5);
list3.createLoop(2);

console.log("Has loop:", list3.detectLoop()); // true
list3.removeLoop();
console.log("After removal:", list3.detectLoop()); // false
list3.printSafe(); // HEAD -> 1 -> 2 -> 3 -> 4 -> 5 -> NULL`}</pre>
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
            <td className="p-3 border">Detect Loop (Floyd)</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(1)</td>
          </tr>
          <tr>
            <td className="p-3 border">Detect Loop (Hashing)</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(n)</td>
          </tr>
          <tr>
            <td className="p-3 border">Find Loop Start</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(1)</td>
          </tr>
          <tr>
            <td className="p-3 border">Find Loop Length</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(1)</td>
          </tr>
          <tr>
            <td className="p-3 border">Remove Loop</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(1)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Why Floyd's Algorithm Works</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Fast pointer moves twice as fast as slow pointer</li>
      <li>If there's a loop, fast will eventually catch up to slow inside the loop</li>
      <li>The meeting point has a mathematical relationship with loop start</li>
      <li>After meeting, move one pointer to head and both at same speed to find start</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Use Cases and Applications</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Memory Management:</strong> Detecting circular references in garbage collection</li>
      <li><strong>Infinite Loop Prevention:</strong> Detecting bugs in list manipulations</li>
      <li><strong>Cycle Detection in Graphs:</strong> Same algorithm extends to directed graphs</li>
      <li><strong>Finding Duplicate:</strong> Floyd's algorithm used in finding duplicate number</li>
      <li><strong>State Machine Cycles:</strong> Detecting if a state machine enters infinite loop</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Common Interview Follow-ups</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Why does the slow and fast pointer meet in the loop?</li>
      <li>Prove that moving one pointer to head finds the loop start</li>
      <li>What if the loop length is 1 (node points to itself)?</li>
      <li>Can you detect loop without modifying the list?</li>
      <li>What's the maximum number of steps before detection?</li>
    </ul>
  </div>
);

export default DetectLoop;
