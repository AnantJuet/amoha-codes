import React from 'react';

const OpenAddressing: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Open Addressing
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Open addressing is a collision resolution technique where all elements are stored directly
      in the hash table. When a collision occurs, we probe (search) for the next empty slot
      within the table using a probing sequence.
    </p>

    <h2 className="text-2xl font-bold mt-6">Key Characteristics</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>All data stored in the hash table array itself</li>
      <li>No external data structures (unlike chaining)</li>
      <li>Load factor must be less than 1</li>
      <li>Requires careful deletion handling (tombstones)</li>
      <li>Better cache performance than chaining</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Linear Probing</h2>
    <p className="leading-relaxed">
      The simplest probing method. When collision occurs, check the next slot sequentially.
    </p>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Probe sequence: h(k), h(k)+1, h(k)+2, ...
// h(k, i) = (h(k) + i) mod m

class LinearProbingHashTable {
    constructor(size = 23) {
        this.size = size;
        this.keys = new Array(size).fill(null);
        this.values = new Array(size).fill(null);
        this.deleted = new Array(size).fill(false); // Tombstone markers
        this.count = 0;
    }

    _hash(key) {
        if (typeof key === 'number') return key % this.size;

        let hash = 0;
        for (let char of String(key)) {
            hash = (hash * 31 + char.charCodeAt(0)) % this.size;
        }
        return hash;
    }

    set(key, value) {
        if (this.count >= this.size * 0.7) {
            this._resize();
        }

        let index = this._hash(key);
        let i = 0;

        // Find empty slot or existing key
        while (this.keys[index] !== null && this.keys[index] !== key) {
            i++;
            index = (this._hash(key) + i) % this.size;
        }

        if (this.keys[index] === null) {
            this.count++;
        }

        this.keys[index] = key;
        this.values[index] = value;
        this.deleted[index] = false;
    }

    get(key) {
        let index = this._hash(key);
        let i = 0;

        while (this.keys[index] !== null || this.deleted[index]) {
            if (this.keys[index] === key && !this.deleted[index]) {
                return this.values[index];
            }
            i++;
            index = (this._hash(key) + i) % this.size;

            if (i === this.size) return undefined;
        }

        return undefined;
    }

    delete(key) {
        let index = this._hash(key);
        let i = 0;

        while (this.keys[index] !== null || this.deleted[index]) {
            if (this.keys[index] === key && !this.deleted[index]) {
                this.deleted[index] = true; // Mark as tombstone
                this.count--;
                return true;
            }
            i++;
            index = (this._hash(key) + i) % this.size;

            if (i === this.size) return false;
        }

        return false;
    }

    _resize() {
        const oldKeys = this.keys;
        const oldValues = this.values;
        const oldDeleted = this.deleted;

        this.size = this.size * 2;
        this.keys = new Array(this.size).fill(null);
        this.values = new Array(this.size).fill(null);
        this.deleted = new Array(this.size).fill(false);
        this.count = 0;

        for (let i = 0; i < oldKeys.length; i++) {
            if (oldKeys[i] !== null && !oldDeleted[i]) {
                this.set(oldKeys[i], oldValues[i]);
            }
        }
    }
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Primary Clustering Problem</h2>
    <div className="bg-yellow-50 p-4 rounded-lg">
      <p className="leading-relaxed">
        Linear probing suffers from primary clustering: consecutive occupied slots form clusters.
        Once a cluster forms, it tends to grow, as new keys hashing to any slot in the cluster
        will be placed at the end of the cluster.
      </p>
    </div>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Example of primary clustering:
// Insert: 5, 15, 25 (all hash to index 5 with table size 10)

// After insert 5:
Index: 0  1  2  3  4  [5] 6  7  8  9
                      5

// After insert 15:
Index: 0  1  2  3  4  [5] [6] 7  8  9
                      5   15

// After insert 25:
Index: 0  1  2  3  4  [5] [6] [7] 8  9
                      5   15  25

// Cluster of 3 consecutive slots formed!
// Any key hashing to 5, 6, or 7 will extend this cluster`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Quadratic Probing</h2>
    <p className="leading-relaxed">
      Reduces primary clustering by using quadratic function for probe sequence.
    </p>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// h(k, i) = (h(k) + c1*i + c2*i^2) mod m
// Common: h(k, i) = (h(k) + i^2) mod m

class QuadraticProbingHashTable {
    constructor(size = 23) {
        this.size = size;
        this.keys = new Array(size).fill(null);
        this.values = new Array(size).fill(null);
        this.deleted = new Array(size).fill(false);
        this.count = 0;
    }

    _hash(key) {
        let hash = 0;
        for (let char of String(key)) {
            hash = (hash * 31 + char.charCodeAt(0)) % this.size;
        }
        return hash;
    }

    _probe(hash, i) {
        // Quadratic probing: h(k) + i^2
        return (hash + i * i) % this.size;
    }

    set(key, value) {
        if (this.count >= this.size * 0.5) {
            this._resize();
        }

        const hash = this._hash(key);
        let i = 0;

        while (i < this.size) {
            const index = this._probe(hash, i);

            if (this.keys[index] === null || this.keys[index] === key) {
                if (this.keys[index] === null) this.count++;
                this.keys[index] = key;
                this.values[index] = value;
                this.deleted[index] = false;
                return;
            }
            i++;
        }

        throw new Error("Hash table is full");
    }

    get(key) {
        const hash = this._hash(key);
        let i = 0;

        while (i < this.size) {
            const index = this._probe(hash, i);

            if (this.keys[index] === null && !this.deleted[index]) {
                return undefined;
            }

            if (this.keys[index] === key && !this.deleted[index]) {
                return this.values[index];
            }

            i++;
        }

        return undefined;
    }
}

// Probe sequence for h(k) = 5:
// i=0: 5
// i=1: 5+1 = 6
// i=2: 5+4 = 9
// i=3: 5+9 = 14 mod m
// i=4: 5+16 = 21 mod m`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Double Hashing</h2>
    <p className="leading-relaxed">
      Uses two hash functions for best distribution. Eliminates both primary and secondary clustering.
    </p>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// h(k, i) = (h1(k) + i * h2(k)) mod m
// h2(k) must never be 0

class DoubleHashingHashTable {
    constructor(size = 23) {
        this.size = size;
        this.keys = new Array(size).fill(null);
        this.values = new Array(size).fill(null);
        this.deleted = new Array(size).fill(false);
        this.count = 0;
    }

    _hash1(key) {
        let hash = 0;
        for (let char of String(key)) {
            hash = (hash * 31 + char.charCodeAt(0)) % this.size;
        }
        return hash;
    }

    _hash2(key) {
        // Must return value between 1 and size-1
        let hash = 0;
        for (let char of String(key)) {
            hash = (hash * 37 + char.charCodeAt(0)) % (this.size - 1);
        }
        return 1 + hash; // Ensure non-zero
    }

    _probe(key, i) {
        return (this._hash1(key) + i * this._hash2(key)) % this.size;
    }

    set(key, value) {
        if (this.count >= this.size * 0.7) {
            this._resize();
        }

        let i = 0;

        while (i < this.size) {
            const index = this._probe(key, i);

            if (this.keys[index] === null || this.keys[index] === key) {
                if (this.keys[index] === null) this.count++;
                this.keys[index] = key;
                this.values[index] = value;
                this.deleted[index] = false;
                return;
            }
            i++;
        }

        throw new Error("Hash table is full");
    }

    get(key) {
        let i = 0;

        while (i < this.size) {
            const index = this._probe(key, i);

            if (this.keys[index] === null && !this.deleted[index]) {
                return undefined;
            }

            if (this.keys[index] === key && !this.deleted[index]) {
                return this.values[index];
            }

            i++;
        }

        return undefined;
    }
}

// Example: key "hello", size = 23
// h1("hello") = 17
// h2("hello") = 5
// Probe sequence: 17, 22, 4, 9, 14, 19, 1, 6, ...`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Comparison of Probing Methods</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Method</th>
            <th className="p-3 border">Clustering</th>
            <th className="p-3 border">Cache</th>
            <th className="p-3 border">Computation</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Linear</td>
            <td className="p-3 border">Primary clustering</td>
            <td className="p-3 border">Excellent</td>
            <td className="p-3 border">Simple</td>
          </tr>
          <tr>
            <td className="p-3 border">Quadratic</td>
            <td className="p-3 border">Secondary clustering</td>
            <td className="p-3 border">Good</td>
            <td className="p-3 border">Moderate</td>
          </tr>
          <tr>
            <td className="p-3 border">Double</td>
            <td className="p-3 border">No clustering</td>
            <td className="p-3 border">Poor</td>
            <td className="p-3 border">Two hash functions</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Tombstones (Lazy Deletion)</h2>
    <div className="bg-blue-50 p-4 rounded-lg">
      <p className="leading-relaxed">
        When deleting in open addressing, we cannot simply mark the slot as empty. This would
        break the probe sequence for other keys. Instead, we use tombstones (deleted markers).
      </p>
      <ul className="list-disc list-inside space-y-2 mt-2">
        <li>Tombstone indicates "was occupied, now deleted"</li>
        <li>Search continues past tombstones</li>
        <li>Insert can reuse tombstone slots</li>
        <li>Too many tombstones require rehashing</li>
      </ul>
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
            <td className="p-3 border">Insert</td>
            <td className="p-3 border">O(1/(1-alpha))</td>
            <td className="p-3 border">O(n)</td>
          </tr>
          <tr>
            <td className="p-3 border">Search</td>
            <td className="p-3 border">O(1/(1-alpha))</td>
            <td className="p-3 border">O(n)</td>
          </tr>
          <tr>
            <td className="p-3 border">Delete</td>
            <td className="p-3 border">O(1/(1-alpha))</td>
            <td className="p-3 border">O(n)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Key Points</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Open addressing stores all elements in the table itself</li>
      <li>Linear probing is simple but causes clustering</li>
      <li>Double hashing provides best distribution</li>
      <li>Use tombstones for deletion</li>
      <li>Keep load factor below 0.7 for good performance</li>
    </ul>
  </div>
);

export default OpenAddressing;
