import React from 'react';

const HashingIntro: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Introduction to Hashing
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Hashing is a technique used to uniquely identify objects from a group of similar objects.
      It uses a hash function to convert keys into array indices, enabling O(1) average-case
      time complexity for insertion, deletion, and search operations.
    </p>

    <h2 className="text-2xl font-bold mt-6">What is Hashing?</h2>
    <p className="leading-relaxed">
      Hashing is the process of mapping data of arbitrary size to fixed-size values (hash values).
      The function that performs this mapping is called a hash function. The data structure that
      uses hashing is called a hash table or hash map.
    </p>

    <h2 className="text-2xl font-bold mt-6">Key Components</h2>
    <div className="space-y-4 mt-4">
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">1. Hash Function</h4>
        <p>Converts keys into array indices. A good hash function distributes keys uniformly.</p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">2. Hash Table</h4>
        <p>An array that stores data at indices computed by the hash function.</p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">3. Collision Handling</h4>
        <p>Technique to handle cases when two keys hash to the same index.</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">How Hashing Works</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`Key: "apple"
         |
         v
   Hash Function: h("apple") = sum of ASCII values % table_size
         |
         v
   Hash Value: 530 % 10 = 0
         |
         v
   Store at index 0 in hash table

Hash Table:
Index:  0       1       2       3       4       5       6       7       8       9
      [apple] [     ] [     ] [     ] [     ] [     ] [     ] [     ] [     ] [     ]`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Basic Hash Table Implementation</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
        this.size = size;
    }

    // Simple hash function
    _hash(key) {
        let total = 0;
        const PRIME = 31;

        for (let i = 0; i < Math.min(key.length, 100); i++) {
            const char = key[i];
            const value = char.charCodeAt(0) - 96;
            total = (total * PRIME + value) % this.size;
        }

        return total;
    }

    // Insert key-value pair
    set(key, value) {
        const index = this._hash(key);

        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }

        // Check if key exists and update
        for (let pair of this.keyMap[index]) {
            if (pair[0] === key) {
                pair[1] = value;
                return;
            }
        }

        // Add new key-value pair
        this.keyMap[index].push([key, value]);
    }

    // Get value by key
    get(key) {
        const index = this._hash(key);

        if (this.keyMap[index]) {
            for (let pair of this.keyMap[index]) {
                if (pair[0] === key) {
                    return pair[1];
                }
            }
        }

        return undefined;
    }

    // Remove key-value pair
    remove(key) {
        const index = this._hash(key);

        if (this.keyMap[index]) {
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] === key) {
                    this.keyMap[index].splice(i, 1);
                    return true;
                }
            }
        }

        return false;
    }
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Time Complexity</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Operation</th>
            <th className="p-3 border">Average Case</th>
            <th className="p-3 border">Worst Case</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Insert</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">O(n)</td>
          </tr>
          <tr>
            <td className="p-3 border">Search</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">O(n)</td>
          </tr>
          <tr>
            <td className="p-3 border">Delete</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">O(n)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Hashing vs Other Data Structures</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Data Structure</th>
            <th className="p-3 border">Search</th>
            <th className="p-3 border">Insert</th>
            <th className="p-3 border">Delete</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Array (unsorted)</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">O(n)</td>
          </tr>
          <tr>
            <td className="p-3 border">Array (sorted)</td>
            <td className="p-3 border">O(log n)</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(n)</td>
          </tr>
          <tr>
            <td className="p-3 border">Linked List</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">O(n)</td>
          </tr>
          <tr>
            <td className="p-3 border">BST (balanced)</td>
            <td className="p-3 border">O(log n)</td>
            <td className="p-3 border">O(log n)</td>
            <td className="p-3 border">O(log n)</td>
          </tr>
          <tr>
            <td className="p-3 border">Hash Table</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">O(1)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Applications of Hashing</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Databases:</strong> Indexing for fast lookups</li>
      <li><strong>Caching:</strong> Quick access to cached data</li>
      <li><strong>Password Storage:</strong> Storing hashed passwords securely</li>
      <li><strong>Compilers:</strong> Symbol tables for variable lookup</li>
      <li><strong>Blockchain:</strong> Cryptographic hashing for security</li>
      <li><strong>Deduplication:</strong> Detecting duplicate records</li>
      <li><strong>Load Balancing:</strong> Consistent hashing for distribution</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Advantages of Hashing</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>O(1) average-case time for basic operations</li>
      <li>Efficient for large datasets</li>
      <li>Flexible key types (strings, objects, etc.)</li>
      <li>Good for frequency counting problems</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Disadvantages of Hashing</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>O(n) worst-case when many collisions occur</li>
      <li>Not suitable for ordered data traversal</li>
      <li>Extra space for the hash table</li>
      <li>Hash function design can be complex</li>
      <li>Resizing can be expensive</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Key Concepts to Master</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Hash function properties and design</li>
      <li>Collision resolution techniques</li>
      <li>Load factor and resizing</li>
      <li>Open addressing vs chaining</li>
      <li>Applications in problem solving</li>
    </ul>
  </div>
);

export default HashingIntro;
