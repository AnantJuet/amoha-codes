import React from 'react';

const HashMapImpl: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      HashMap Implementation
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A HashMap is a data structure that implements an associative array abstract data type,
      a structure that can map keys to values. It uses a hash function to compute an index
      into an array of buckets, from which the desired value can be found.
    </p>

    <h2 className="text-2xl font-bold mt-6">Complete HashMap Implementation</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`class HashMap {
    constructor(initialCapacity = 16, loadFactorThreshold = 0.75) {
        this.capacity = initialCapacity;
        this.loadFactorThreshold = loadFactorThreshold;
        this.size = 0;
        this.buckets = new Array(this.capacity).fill(null).map(() => []);
    }

    // Hash function using polynomial rolling hash
    _hash(key) {
        const str = String(key);
        let hash = 0;
        const PRIME = 31;

        for (let i = 0; i < str.length; i++) {
            hash = (hash * PRIME + str.charCodeAt(i)) % this.capacity;
        }

        return Math.abs(hash);
    }

    // Get current load factor
    _loadFactor() {
        return this.size / this.capacity;
    }

    // Resize and rehash when load factor exceeds threshold
    _resize() {
        const oldBuckets = this.buckets;
        this.capacity *= 2;
        this.buckets = new Array(this.capacity).fill(null).map(() => []);
        this.size = 0;

        // Rehash all existing entries
        for (const bucket of oldBuckets) {
            for (const [key, value] of bucket) {
                this.put(key, value);
            }
        }
    }

    // Insert or update key-value pair
    put(key, value) {
        // Check if resize needed
        if (this._loadFactor() >= this.loadFactorThreshold) {
            this._resize();
        }

        const index = this._hash(key);
        const bucket = this.buckets[index];

        // Check if key already exists
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket[i][1] = value; // Update existing
                return;
            }
        }

        // Add new entry
        bucket.push([key, value]);
        this.size++;
    }

    // Get value by key
    get(key) {
        const index = this._hash(key);
        const bucket = this.buckets[index];

        for (const [k, v] of bucket) {
            if (k === key) {
                return v;
            }
        }

        return undefined;
    }

    // Check if key exists
    has(key) {
        return this.get(key) !== undefined;
    }

    // Remove key-value pair
    remove(key) {
        const index = this._hash(key);
        const bucket = this.buckets[index];

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket.splice(i, 1);
                this.size--;
                return true;
            }
        }

        return false;
    }

    // Get all keys
    keys() {
        const result = [];
        for (const bucket of this.buckets) {
            for (const [key] of bucket) {
                result.push(key);
            }
        }
        return result;
    }

    // Get all values
    values() {
        const result = [];
        for (const bucket of this.buckets) {
            for (const [, value] of bucket) {
                result.push(value);
            }
        }
        return result;
    }

    // Get all entries as [key, value] pairs
    entries() {
        const result = [];
        for (const bucket of this.buckets) {
            for (const entry of bucket) {
                result.push([...entry]);
            }
        }
        return result;
    }

    // Clear all entries
    clear() {
        this.buckets = new Array(this.capacity).fill(null).map(() => []);
        this.size = 0;
    }

    // Get number of entries
    getSize() {
        return this.size;
    }

    // Check if empty
    isEmpty() {
        return this.size === 0;
    }

    // For each iteration
    forEach(callback) {
        for (const bucket of this.buckets) {
            for (const [key, value] of bucket) {
                callback(value, key, this);
            }
        }
    }
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Usage Examples</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`const map = new HashMap();

// Insert entries
map.put("name", "John");
map.put("age", 30);
map.put("city", "New York");

// Get values
console.log(map.get("name"));     // "John"
console.log(map.get("age"));      // 30
console.log(map.get("unknown"));  // undefined

// Check existence
console.log(map.has("name"));     // true
console.log(map.has("unknown"));  // false

// Update value
map.put("age", 31);
console.log(map.get("age"));      // 31

// Remove entry
map.remove("city");
console.log(map.has("city"));     // false

// Get all keys/values
console.log(map.keys());          // ["name", "age"]
console.log(map.values());        // ["John", 31]
console.log(map.entries());       // [["name", "John"], ["age", 31]]

// Iteration
map.forEach((value, key) => {
    console.log(\`\${key}: \${value}\`);
});
// Output:
// name: John
// age: 31

// Size and clear
console.log(map.getSize());       // 2
map.clear();
console.log(map.isEmpty());       // true`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">HashMap with Generic Types (TypeScript)</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`class GenericHashMap<K, V> {
    private capacity: number;
    private loadFactorThreshold: number;
    private size: number;
    private buckets: Array<Array<[K, V]>>;

    constructor(initialCapacity = 16, loadFactorThreshold = 0.75) {
        this.capacity = initialCapacity;
        this.loadFactorThreshold = loadFactorThreshold;
        this.size = 0;
        this.buckets = new Array(this.capacity).fill(null).map(() => []);
    }

    private hash(key: K): number {
        const str = String(key);
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = (hash * 31 + str.charCodeAt(i)) % this.capacity;
        }
        return Math.abs(hash);
    }

    put(key: K, value: V): void {
        if (this.size / this.capacity >= this.loadFactorThreshold) {
            this.resize();
        }

        const index = this.hash(key);
        const bucket = this.buckets[index];

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket[i][1] = value;
                return;
            }
        }

        bucket.push([key, value]);
        this.size++;
    }

    get(key: K): V | undefined {
        const index = this.hash(key);
        const bucket = this.buckets[index];

        for (const [k, v] of bucket) {
            if (k === key) return v;
        }

        return undefined;
    }

    // ... other methods with proper types
}

// Usage with types
const userMap = new GenericHashMap<number, string>();
userMap.put(1, "Alice");
userMap.put(2, "Bob");

const productMap = new GenericHashMap<string, number>();
productMap.put("apple", 10);
productMap.put("banana", 5);`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Time Complexity</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Operation</th>
            <th className="p-3 border">Average</th>
            <th className="p-3 border">Worst</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">put()</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">O(n)</td>
          </tr>
          <tr>
            <td className="p-3 border">get()</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">O(n)</td>
          </tr>
          <tr>
            <td className="p-3 border">remove()</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">O(n)</td>
          </tr>
          <tr>
            <td className="p-3 border">has()</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">O(n)</td>
          </tr>
          <tr>
            <td className="p-3 border">keys()/values()</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(n)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Space Complexity</h2>
    <p className="leading-relaxed">
      O(n) where n is the number of key-value pairs stored. The actual memory used is
      O(capacity + n) due to the bucket array.
    </p>

    <h2 className="text-2xl font-bold mt-6">Common Use Cases</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Caching:</strong> Store computed results for quick lookup</li>
      <li><strong>Counting:</strong> Count occurrences of items</li>
      <li><strong>Indexing:</strong> Map IDs to objects</li>
      <li><strong>Deduplication:</strong> Track seen items</li>
      <li><strong>Grouping:</strong> Group items by a key</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Practical Examples</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Example 1: Word frequency counter
function wordFrequency(text) {
    const map = new HashMap();
    const words = text.toLowerCase().split(/\\s+/);

    for (const word of words) {
        const count = map.get(word) || 0;
        map.put(word, count + 1);
    }

    return map;
}

const freq = wordFrequency("hello world hello");
console.log(freq.get("hello")); // 2

// Example 2: Two Sum problem
function twoSum(nums, target) {
    const map = new HashMap();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (map.has(complement)) {
            return [map.get(complement), i];
        }

        map.put(nums[i], i);
    }

    return null;
}

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]

// Example 3: Group anagrams
function groupAnagrams(strs) {
    const map = new HashMap();

    for (const str of strs) {
        const sorted = str.split('').sort().join('');
        const group = map.get(sorted) || [];
        group.push(str);
        map.put(sorted, group);
    }

    return map.values();
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Key Points</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>HashMap provides O(1) average time for basic operations</li>
      <li>Uses hash function to map keys to bucket indices</li>
      <li>Handles collisions using chaining (linked list per bucket)</li>
      <li>Automatically resizes when load factor exceeds threshold</li>
      <li>Ideal for fast lookups, counting, and grouping operations</li>
    </ul>
  </div>
);

export default HashMapImpl;
