import React from 'react';

const ArrayOperations: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Array Operations
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Array operations are fundamental manipulations performed on arrays including insertion, deletion,
      searching, and updating elements. Understanding these operations and their time complexities is
      essential for efficient programming and forms the foundation for more complex algorithms.
    </p>

    <h2 className="text-2xl font-bold mt-6">1. Insertion Operation</h2>
    <p className="leading-relaxed">
      Insertion adds a new element to the array. The complexity depends on where we insert:
    </p>
    <ul className="list-disc list-inside space-y-2 mt-4">
      <li><strong>At End:</strong> O(1) - Simply add at the next available index</li>
      <li><strong>At Beginning:</strong> O(n) - Shift all elements to the right</li>
      <li><strong>At Position i:</strong> O(n-i) - Shift elements from index i to end</li>
    </ul>

    <div className="bg-gray-50 p-4 rounded-lg mt-4">
      <h4 className="font-bold">Visual Example - Insert 25 at index 2:</h4>
      <div className="font-mono mt-2 space-y-2">
        <p>Before: [10, 20, 30, 40, 50]</p>
        <p>Step 1: Shift elements from index 2 onwards to the right</p>
        <p>Step 2: [10, 20, __, 30, 40, 50]</p>
        <p>Step 3: Place 25 at index 2</p>
        <p>After:  [10, 20, 25, 30, 40, 50]</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">2. Deletion Operation</h2>
    <p className="leading-relaxed">
      Deletion removes an element from the array and may require shifting elements:
    </p>
    <ul className="list-disc list-inside space-y-2 mt-4">
      <li><strong>From End:</strong> O(1) - Simply reduce the size</li>
      <li><strong>From Beginning:</strong> O(n) - Shift all elements to the left</li>
      <li><strong>From Position i:</strong> O(n-i) - Shift elements from index i+1 to fill gap</li>
    </ul>

    <div className="bg-gray-50 p-4 rounded-lg mt-4">
      <h4 className="font-bold">Visual Example - Delete element at index 2:</h4>
      <div className="font-mono mt-2 space-y-2">
        <p>Before: [10, 20, 30, 40, 50]</p>
        <p>Step 1: Remove element at index 2 (value 30)</p>
        <p>Step 2: [10, 20, __, 40, 50]</p>
        <p>Step 3: Shift elements left to fill the gap</p>
        <p>After:  [10, 20, 40, 50]</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">3. Search Operation</h2>
    <p className="leading-relaxed">
      Searching finds an element in the array. Two main approaches:
    </p>
    <ul className="list-disc list-inside space-y-2 mt-4">
      <li><strong>Linear Search:</strong> O(n) - Check each element sequentially</li>
      <li><strong>Binary Search:</strong> O(log n) - Only works on sorted arrays</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">4. Update Operation</h2>
    <p className="leading-relaxed">
      Updating modifies an element at a given index. This is O(1) since we have direct access via index.
    </p>

    <h2 className="text-2xl font-bold mt-6">JavaScript Implementation</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`class ArrayOperations {
    constructor() {
        this.arr = [];
    }

    // Insert at end - O(1)
    insertAtEnd(element) {
        this.arr.push(element);
    }

    // Insert at beginning - O(n)
    insertAtBeginning(element) {
        this.arr.unshift(element);
    }

    // Insert at specific position - O(n)
    insertAt(index, element) {
        if (index < 0 || index > this.arr.length) {
            throw new Error("Index out of bounds");
        }
        this.arr.splice(index, 0, element);
    }

    // Delete from end - O(1)
    deleteFromEnd() {
        if (this.arr.length === 0) {
            throw new Error("Array is empty");
        }
        return this.arr.pop();
    }

    // Delete from beginning - O(n)
    deleteFromBeginning() {
        if (this.arr.length === 0) {
            throw new Error("Array is empty");
        }
        return this.arr.shift();
    }

    // Delete at specific position - O(n)
    deleteAt(index) {
        if (index < 0 || index >= this.arr.length) {
            throw new Error("Index out of bounds");
        }
        return this.arr.splice(index, 1)[0];
    }

    // Linear search - O(n)
    linearSearch(element) {
        for (let i = 0; i < this.arr.length; i++) {
            if (this.arr[i] === element) {
                return i;
            }
        }
        return -1;
    }

    // Binary search (array must be sorted) - O(log n)
    binarySearch(element) {
        let left = 0;
        let right = this.arr.length - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (this.arr[mid] === element) {
                return mid;
            } else if (this.arr[mid] < element) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return -1;
    }

    // Update element at index - O(1)
    update(index, element) {
        if (index < 0 || index >= this.arr.length) {
            throw new Error("Index out of bounds");
        }
        const oldValue = this.arr[index];
        this.arr[index] = element;
        return oldValue;
    }

    // Get element at index - O(1)
    get(index) {
        if (index < 0 || index >= this.arr.length) {
            throw new Error("Index out of bounds");
        }
        return this.arr[index];
    }

    // Get array size - O(1)
    size() {
        return this.arr.length;
    }
}

// Usage example
const ops = new ArrayOperations();
ops.insertAtEnd(10);
ops.insertAtEnd(20);
ops.insertAtEnd(30);
ops.insertAtBeginning(5);
ops.insertAt(2, 15);
console.log(ops.arr); // [5, 10, 15, 20, 30]

console.log(ops.linearSearch(15)); // 2
ops.update(2, 17);
console.log(ops.arr); // [5, 10, 17, 20, 30]

ops.deleteAt(2);
console.log(ops.arr); // [5, 10, 20, 30]`}</pre>
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
            <td className="p-3 border">Insert at End</td>
            <td className="p-3 border">O(1) amortized</td>
            <td className="p-3 border">O(1)</td>
          </tr>
          <tr>
            <td className="p-3 border">Insert at Beginning</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(1)</td>
          </tr>
          <tr>
            <td className="p-3 border">Insert at Position</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(1)</td>
          </tr>
          <tr>
            <td className="p-3 border">Delete from End</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">O(1)</td>
          </tr>
          <tr>
            <td className="p-3 border">Delete from Beginning</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(1)</td>
          </tr>
          <tr>
            <td className="p-3 border">Delete at Position</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(1)</td>
          </tr>
          <tr>
            <td className="p-3 border">Linear Search</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(1)</td>
          </tr>
          <tr>
            <td className="p-3 border">Binary Search</td>
            <td className="p-3 border">O(log n)</td>
            <td className="p-3 border">O(1)</td>
          </tr>
          <tr>
            <td className="p-3 border">Update</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">O(1)</td>
          </tr>
          <tr>
            <td className="p-3 border">Access</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">O(1)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Use Cases and Applications</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Database Operations:</strong> CRUD operations on records stored in arrays</li>
      <li><strong>Dynamic Lists:</strong> Managing shopping carts, playlists, task lists</li>
      <li><strong>Buffer Management:</strong> Circular buffers for streaming data</li>
      <li><strong>Caching:</strong> LRU cache implementation with array-based structures</li>
      <li><strong>Game Development:</strong> Managing game objects, inventories, scores</li>
      <li><strong>Text Editors:</strong> Undo/redo operations, clipboard management</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Best Practices</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Use insertion at end when order does not matter for O(1) performance</li>
      <li>Consider using linked lists for frequent insertions/deletions at beginning</li>
      <li>Sort the array first if multiple searches are needed (binary search)</li>
      <li>Batch operations when possible to minimize shifting</li>
      <li>Pre-allocate array size if the final size is known</li>
    </ul>
  </div>
);

export default ArrayOperations;
