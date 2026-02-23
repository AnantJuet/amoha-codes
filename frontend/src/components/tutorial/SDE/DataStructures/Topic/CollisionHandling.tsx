import React from 'react';

const CollisionHandling: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Collision Handling Techniques
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A collision occurs when two different keys hash to the same index in a hash table.
      Since hash functions map a large key space to a smaller index space, collisions are
      inevitable. Effective collision handling is crucial for hash table performance.
    </p>

    <h2 className="text-2xl font-bold mt-6">Why Collisions Occur</h2>
    <div className="bg-blue-50 p-4 rounded-lg">
      <p className="leading-relaxed">
        By the Pigeonhole Principle: If we have more keys than slots, at least two keys must
        share the same slot. Even with fewer keys, different keys can produce the same hash value.
      </p>
    </div>

    <h2 className="text-2xl font-bold mt-6">Two Main Approaches</h2>
    <div className="space-y-4 mt-4">
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">1. Separate Chaining (Closed Addressing)</h4>
        <p>Store multiple elements at the same index using a secondary data structure (usually linked list).</p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">2. Open Addressing</h4>
        <p>Find another empty slot within the hash table itself using probing techniques.</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Separate Chaining</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`class HashTableChaining {
    constructor(size = 53) {
        this.buckets = new Array(size);
        this.size = size;

        // Initialize each bucket as empty linked list
        for (let i = 0; i < size; i++) {
            this.buckets[i] = [];
        }
    }

    _hash(key) {
        let total = 0;
        const PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            const value = key.charCodeAt(i) - 96;
            total = (total * PRIME + value) % this.size;
        }
        return total;
    }

    // Insert key-value pair
    set(key, value) {
        const index = this._hash(key);
        const bucket = this.buckets[index];

        // Check if key exists and update
        for (let pair of bucket) {
            if (pair[0] === key) {
                pair[1] = value;
                return;
            }
        }

        // Add new pair to chain
        bucket.push([key, value]);
    }

    // Get value by key
    get(key) {
        const index = this._hash(key);
        const bucket = this.buckets[index];

        for (let pair of bucket) {
            if (pair[0] === key) {
                return pair[1];
            }
        }

        return undefined;
    }

    // Remove key-value pair
    remove(key) {
        const index = this._hash(key);
        const bucket = this.buckets[index];

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket.splice(i, 1);
                return true;
            }
        }

        return false;
    }
}

// Visual representation of chaining:
// Index 0: [("apple", 5)] -> [("apricot", 3)] -> null
// Index 1: [("banana", 2)] -> null
// Index 2: empty
// Index 3: [("cherry", 7)] -> [("coconut", 1)] -> [("citrus", 4)] -> null`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Open Addressing Overview</h2>
    <p className="leading-relaxed">
      In open addressing, all elements are stored in the hash table itself. When a collision
      occurs, we probe for the next empty slot using a probing sequence.
    </p>

    <h3 className="text-xl font-bold mt-4">1. Linear Probing</h3>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// h(k, i) = (h'(k) + i) mod m
// Try consecutive slots: h(k), h(k)+1, h(k)+2, ...

class LinearProbingHashTable {
    constructor(size = 53) {
        this.keys = new Array(size);
        this.values = new Array(size);
        this.size = size;
    }

    _hash(key) {
        let total = 0;
        for (let char of key) {
            total = (total * 31 + char.charCodeAt(0)) % this.size;
        }
        return total;
    }

    set(key, value) {
        let index = this._hash(key);
        let i = 0;

        // Linear probing
        while (this.keys[index] !== undefined && this.keys[index] !== key) {
            i++;
            index = (this._hash(key) + i) % this.size;

            if (i === this.size) {
                throw new Error("Hash table is full");
            }
        }

        this.keys[index] = key;
        this.values[index] = value;
    }

    get(key) {
        let index = this._hash(key);
        let i = 0;

        while (this.keys[index] !== undefined) {
            if (this.keys[index] === key) {
                return this.values[index];
            }
            i++;
            index = (this._hash(key) + i) % this.size;

            if (i === this.size) break;
        }

        return undefined;
    }
}

// Problem: Primary clustering - long runs of occupied slots`}</pre>
    </div>

    <h3 className="text-xl font-bold mt-4">2. Quadratic Probing</h3>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// h(k, i) = (h'(k) + c1*i + c2*i^2) mod m
// Common choice: c1 = c2 = 1/2, or c1 = 0, c2 = 1

function quadraticProbe(hash, i, size) {
    return (hash + i * i) % size;
}

// Sequence: h(k), h(k)+1, h(k)+4, h(k)+9, h(k)+16, ...
// Reduces primary clustering but can cause secondary clustering`}</pre>
    </div>

    <h3 className="text-xl font-bold mt-4">3. Double Hashing</h3>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// h(k, i) = (h1(k) + i * h2(k)) mod m
// Uses two hash functions

class DoubleHashingTable {
    constructor(size = 53) {
        this.keys = new Array(size);
        this.values = new Array(size);
        this.size = size;
    }

    _hash1(key) {
        let total = 0;
        for (let char of key) {
            total = (total * 31 + char.charCodeAt(0)) % this.size;
        }
        return total;
    }

    _hash2(key) {
        // Second hash should never be 0
        let total = 0;
        for (let char of key) {
            total = (total * 37 + char.charCodeAt(0)) % (this.size - 1);
        }
        return 1 + total; // Ensure non-zero
    }

    _probe(key, i) {
        return (this._hash1(key) + i * this._hash2(key)) % this.size;
    }

    set(key, value) {
        let i = 0;
        let index = this._probe(key, i);

        while (this.keys[index] !== undefined && this.keys[index] !== key) {
            i++;
            index = this._probe(key, i);

            if (i === this.size) {
                throw new Error("Hash table is full");
            }
        }

        this.keys[index] = key;
        this.values[index] = value;
    }
}

// Best distribution, minimizes clustering`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Comparison of Techniques</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Technique</th>
            <th className="p-3 border">Pros</th>
            <th className="p-3 border">Cons</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Separate Chaining</td>
            <td className="p-3 border">Simple, handles high load</td>
            <td className="p-3 border">Extra memory for pointers</td>
          </tr>
          <tr>
            <td className="p-3 border">Linear Probing</td>
            <td className="p-3 border">Cache friendly</td>
            <td className="p-3 border">Primary clustering</td>
          </tr>
          <tr>
            <td className="p-3 border">Quadratic Probing</td>
            <td className="p-3 border">Less clustering than linear</td>
            <td className="p-3 border">Secondary clustering, may not find empty slot</td>
          </tr>
          <tr>
            <td className="p-3 border">Double Hashing</td>
            <td className="p-3 border">Best distribution</td>
            <td className="p-3 border">Two hash computations</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Load Factor</h2>
    <div className="bg-yellow-50 p-4 rounded-lg">
      <p className="leading-relaxed">
        <strong>Load Factor (alpha) = n / m</strong> where n = number of elements, m = table size
      </p>
      <ul className="list-disc list-inside space-y-2 mt-2">
        <li>Chaining: Works well even with alpha greater than 1</li>
        <li>Open Addressing: Should keep alpha below 0.7</li>
        <li>Resize table when load factor exceeds threshold</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold mt-6">Key Points</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Collisions are unavoidable - handling them well is key</li>
      <li>Chaining is simpler but uses more memory</li>
      <li>Open addressing is more cache-efficient</li>
      <li>Double hashing provides best distribution for open addressing</li>
      <li>Monitor and resize based on load factor</li>
    </ul>
  </div>
);

export default CollisionHandling;
