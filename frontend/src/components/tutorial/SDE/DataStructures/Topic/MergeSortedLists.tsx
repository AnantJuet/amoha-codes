import React from 'react';

const MergeSortedLists: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Merging Two Sorted Linked Lists
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Merging two sorted linked lists is a fundamental problem that combines two already-sorted lists
      into a single sorted list. This operation is crucial for merge sort implementation and is one
      of the most frequently asked linked list problems in technical interviews. The challenge is to
      do this efficiently while maintaining the sorted order.
    </p>

    <h2 className="text-2xl font-bold mt-6">Problem Statement</h2>
    <div className="bg-gray-50 p-4 rounded-lg mt-4">
      <p className="font-bold mb-4">Given two sorted linked lists, merge them into one sorted list.</p>
      <div className="font-mono space-y-2">
        <p>List 1: HEAD -&gt; [1] -&gt; [3] -&gt; [5] -&gt; [7] -&gt; NULL</p>
        <p>List 2: HEAD -&gt; [2] -&gt; [4] -&gt; [6] -&gt; [8] -&gt; NULL</p>
        <p className="mt-2 text-green-700 font-bold">Merged: HEAD -&gt; [1] -&gt; [2] -&gt; [3] -&gt; [4] -&gt; [5] -&gt; [6] -&gt; [7] -&gt; [8] -&gt; NULL</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Approaches</h2>
    <div className="space-y-4 mt-4">
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">1. Iterative with Dummy Node</h4>
        <p>Use a dummy node to simplify edge cases. Compare nodes and link smaller one. Time: O(n+m), Space: O(1)</p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">2. Recursive</h4>
        <p>Recursively decide which node comes first and link. Elegant but uses stack space. Time: O(n+m), Space: O(n+m)</p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">3. In-place Merge</h4>
        <p>Modify original lists without creating new nodes. More complex but memory efficient.</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Iterative Approach - Step by Step</h2>
    <div className="bg-gray-50 p-4 rounded-lg mt-4">
      <div className="font-mono space-y-1 text-sm">
        <p>L1: 1 -&gt; 3 -&gt; 5</p>
        <p>L2: 2 -&gt; 4 -&gt; 6</p>
        <p className="mt-2">Start: dummy -&gt; null, current = dummy</p>
        <p className="mt-2">Step 1: 1 &lt; 2, link 1</p>
        <p>  Result: dummy -&gt; 1, L1 moves to 3</p>
        <p className="mt-2">Step 2: 3 &gt; 2, link 2</p>
        <p>  Result: dummy -&gt; 1 -&gt; 2, L2 moves to 4</p>
        <p className="mt-2">Step 3: 3 &lt; 4, link 3</p>
        <p>  Result: dummy -&gt; 1 -&gt; 2 -&gt; 3, L1 moves to 5</p>
        <p className="mt-2">Step 4: 5 &gt; 4, link 4</p>
        <p>  Result: dummy -&gt; 1 -&gt; 2 -&gt; 3 -&gt; 4, L2 moves to 6</p>
        <p className="mt-2">Step 5: 5 &lt; 6, link 5</p>
        <p>  Result: dummy -&gt; 1 -&gt; 2 -&gt; 3 -&gt; 4 -&gt; 5, L1 = null</p>
        <p className="mt-2">Step 6: L1 exhausted, link remaining L2</p>
        <p>  Result: dummy -&gt; 1 -&gt; 2 -&gt; 3 -&gt; 4 -&gt; 5 -&gt; 6</p>
        <p className="mt-2 text-green-700 font-bold">Return dummy.next: 1 -&gt; 2 -&gt; 3 -&gt; 4 -&gt; 5 -&gt; 6</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">JavaScript Implementation</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

// Helper to create list from array
function createList(arr) {
    const dummy = new ListNode(0);
    let current = dummy;
    for (const val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}

// Helper to convert list to array
function listToArray(head) {
    const result = [];
    while (head) {
        result.push(head.val);
        head = head.next;
    }
    return result;
}

// ============ METHOD 1: ITERATIVE WITH DUMMY NODE ============
// Time: O(n + m), Space: O(1)
function mergeTwoLists(l1, l2) {
    // Dummy node to simplify edge cases
    const dummy = new ListNode(-1);
    let current = dummy;

    while (l1 !== null && l2 !== null) {
        if (l1.val <= l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }

    // Attach remaining nodes
    current.next = l1 !== null ? l1 : l2;

    return dummy.next;
}

// ============ METHOD 2: RECURSIVE ============
// Time: O(n + m), Space: O(n + m) due to recursion stack
function mergeTwoListsRecursive(l1, l2) {
    // Base cases
    if (l1 === null) return l2;
    if (l2 === null) return l1;

    if (l1.val <= l2.val) {
        l1.next = mergeTwoListsRecursive(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoListsRecursive(l1, l2.next);
        return l2;
    }
}

// ============ METHOD 3: IN-PLACE MERGE ============
// Time: O(n + m), Space: O(1)
function mergeInPlace(l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;

    // Ensure l1 starts with smaller value
    if (l1.val > l2.val) {
        [l1, l2] = [l2, l1];
    }

    const head = l1;

    while (l1.next !== null && l2 !== null) {
        if (l1.next.val <= l2.val) {
            l1 = l1.next;
        } else {
            const temp = l2.next;
            l2.next = l1.next;
            l1.next = l2;
            l2 = temp;
        }
    }

    // Attach remaining l2 nodes
    if (l2 !== null) {
        l1.next = l2;
    }

    return head;
}

// ============ MERGE K SORTED LISTS ============
// Using divide and conquer approach
// Time: O(N log k) where N is total nodes, k is number of lists
function mergeKLists(lists) {
    if (lists.length === 0) return null;
    if (lists.length === 1) return lists[0];

    return divideAndMerge(lists, 0, lists.length - 1);
}

function divideAndMerge(lists, start, end) {
    if (start === end) return lists[start];
    if (start + 1 === end) return mergeTwoLists(lists[start], lists[end]);

    const mid = Math.floor((start + end) / 2);
    const left = divideAndMerge(lists, start, mid);
    const right = divideAndMerge(lists, mid + 1, end);

    return mergeTwoLists(left, right);
}

// ============ MERGE K LISTS USING MIN HEAP ============
// Time: O(N log k), Space: O(k)
class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(node) {
        this.heap.push(node);
        this.bubbleUp(this.heap.length - 1);
    }

    pop() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown(0);
        return min;
    }

    bubbleUp(idx) {
        while (idx > 0) {
            const parent = Math.floor((idx - 1) / 2);
            if (this.heap[parent].val <= this.heap[idx].val) break;
            [this.heap[parent], this.heap[idx]] = [this.heap[idx], this.heap[parent]];
            idx = parent;
        }
    }

    bubbleDown(idx) {
        const length = this.heap.length;
        while (true) {
            let smallest = idx;
            const left = 2 * idx + 1;
            const right = 2 * idx + 2;

            if (left < length && this.heap[left].val < this.heap[smallest].val) {
                smallest = left;
            }
            if (right < length && this.heap[right].val < this.heap[smallest].val) {
                smallest = right;
            }

            if (smallest === idx) break;
            [this.heap[idx], this.heap[smallest]] = [this.heap[smallest], this.heap[idx]];
            idx = smallest;
        }
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}

function mergeKListsHeap(lists) {
    const heap = new MinHeap();
    const dummy = new ListNode(0);
    let current = dummy;

    // Add first node of each list to heap
    for (const list of lists) {
        if (list) heap.push(list);
    }

    while (!heap.isEmpty()) {
        const node = heap.pop();
        current.next = node;
        current = current.next;

        if (node.next) {
            heap.push(node.next);
        }
    }

    return dummy.next;
}

// ============ MERGE SORTED LISTS WITH ALTERNATING ============
// Merge and alternate elements from two lists
function mergeAlternating(l1, l2) {
    const dummy = new ListNode(0);
    let current = dummy;
    let turn = true; // true for l1, false for l2

    while (l1 !== null && l2 !== null) {
        if (turn) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
        turn = !turn;
    }

    current.next = l1 || l2;
    return dummy.next;
}

// ============ MERGE AND REMOVE DUPLICATES ============
function mergeWithoutDuplicates(l1, l2) {
    const merged = mergeTwoLists(l1, l2);

    let current = merged;
    while (current !== null && current.next !== null) {
        if (current.val === current.next.val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }

    return merged;
}

// ============ USAGE EXAMPLES ============

// Example 1: Merge two sorted lists
const list1 = createList([1, 3, 5, 7]);
const list2 = createList([2, 4, 6, 8]);
const merged = mergeTwoLists(list1, list2);
console.log("Merged:", listToArray(merged));
// [1, 2, 3, 4, 5, 6, 7, 8]

// Example 2: Recursive merge
const list3 = createList([1, 2, 4]);
const list4 = createList([1, 3, 4]);
const mergedRecursive = mergeTwoListsRecursive(list3, list4);
console.log("Recursive:", listToArray(mergedRecursive));
// [1, 1, 2, 3, 4, 4]

// Example 3: Merge K sorted lists
const lists = [
    createList([1, 4, 5]),
    createList([1, 3, 4]),
    createList([2, 6])
];
const mergedK = mergeKLists(lists);
console.log("K lists:", listToArray(mergedK));
// [1, 1, 2, 3, 4, 4, 5, 6]

// Example 4: Merge with duplicates removed
const l5 = createList([1, 2, 3, 3, 5]);
const l6 = createList([2, 3, 4, 6]);
const noDups = mergeWithoutDuplicates(l5, l6);
console.log("No duplicates:", listToArray(noDups));
// [1, 2, 3, 4, 5, 6]`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Complexity Analysis</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Approach</th>
            <th className="p-3 border">Time Complexity</th>
            <th className="p-3 border">Space Complexity</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Iterative (Two Lists)</td>
            <td className="p-3 border">O(n + m)</td>
            <td className="p-3 border">O(1)</td>
          </tr>
          <tr>
            <td className="p-3 border">Recursive (Two Lists)</td>
            <td className="p-3 border">O(n + m)</td>
            <td className="p-3 border">O(n + m)</td>
          </tr>
          <tr>
            <td className="p-3 border">K Lists (Divide & Conquer)</td>
            <td className="p-3 border">O(N log k)</td>
            <td className="p-3 border">O(log k)</td>
          </tr>
          <tr>
            <td className="p-3 border">K Lists (Min Heap)</td>
            <td className="p-3 border">O(N log k)</td>
            <td className="p-3 border">O(k)</td>
          </tr>
        </tbody>
      </table>
      <p className="text-sm mt-2">n, m = lengths of two lists; N = total nodes; k = number of lists</p>
    </div>

    <h2 className="text-2xl font-bold mt-6">Why Use a Dummy Node?</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Eliminates need for special handling of the head pointer</li>
      <li>Simplifies code by always having a previous node</li>
      <li>Reduces edge cases (empty lists, single element lists)</li>
      <li>Result is always dummy.next</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Key Insights</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Two-pointer comparison:</strong> Always compare current nodes of both lists</li>
      <li><strong>Handle remaining:</strong> Don't forget to attach remaining nodes</li>
      <li><strong>Iterative vs Recursive:</strong> Iterative is preferred for O(1) space</li>
      <li><strong>For K lists:</strong> Divide and conquer or min-heap are optimal</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Use Cases and Applications</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Merge Sort:</strong> Core operation in merge sort algorithm</li>
      <li><strong>External Sorting:</strong> Merging sorted file chunks</li>
      <li><strong>Database Operations:</strong> Merge join in databases</li>
      <li><strong>Data Streaming:</strong> Combining sorted data streams</li>
      <li><strong>Search Results:</strong> Merging sorted search results from multiple sources</li>
      <li><strong>Calendar Merging:</strong> Combining sorted event lists</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Common Interview Variations</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Merge two sorted lists (basic)</li>
      <li>Merge K sorted lists</li>
      <li>Merge and remove duplicates</li>
      <li>Merge in descending order</li>
      <li>Merge alternating nodes</li>
      <li>Intersection of two sorted lists</li>
    </ul>
  </div>
);

export default MergeSortedLists;
