import React from 'react';

const HashFunctions: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Hash Functions
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A hash function is a function that takes an input (or key) and returns a fixed-size value
      called a hash code or hash value. The quality of a hash function directly impacts the
      performance of a hash table.
    </p>

    <h2 className="text-2xl font-bold mt-6">Properties of a Good Hash Function</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Deterministic:</strong> Same input always produces the same output</li>
      <li><strong>Uniform Distribution:</strong> Distributes keys evenly across the table</li>
      <li><strong>Efficient:</strong> Fast to compute</li>
      <li><strong>Minimizes Collisions:</strong> Different keys should rarely produce same hash</li>
      <li><strong>Avalanche Effect:</strong> Small change in input causes significant change in output</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Common Hash Functions</h2>

    <h3 className="text-xl font-bold mt-4">1. Division Method</h3>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// h(k) = k mod m
// m is typically a prime number

function divisionHash(key, tableSize) {
    return key % tableSize;
}

// Example:
// key = 123, tableSize = 10
// hash = 123 % 10 = 3

// Best practice: Use a prime number for tableSize
// Avoids patterns when keys are multiples of tableSize`}</pre>
    </div>

    <h3 className="text-xl font-bold mt-4">2. Multiplication Method</h3>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// h(k) = floor(m * (k * A mod 1))
// A is a constant between 0 and 1
// Knuth suggests A = (sqrt(5) - 1) / 2 = 0.6180339887...

function multiplicationHash(key, tableSize) {
    const A = 0.6180339887;
    return Math.floor(tableSize * ((key * A) % 1));
}

// Example:
// key = 123, tableSize = 10
// 123 * 0.618... = 76.02...
// 76.02 mod 1 = 0.02...
// floor(10 * 0.02) = 0`}</pre>
    </div>

    <h3 className="text-xl font-bold mt-4">3. Mid-Square Method</h3>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Square the key and extract middle digits

function midSquareHash(key, numDigits) {
    const squared = key * key;
    const str = squared.toString();

    // Extract middle digits
    const mid = Math.floor(str.length / 2);
    const halfDigits = Math.floor(numDigits / 2);

    return parseInt(str.slice(mid - halfDigits, mid + halfDigits + numDigits % 2));
}

// Example:
// key = 123
// squared = 15129
// middle 2 digits = 51`}</pre>
    </div>

    <h3 className="text-xl font-bold mt-4">4. Folding Method</h3>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Divide key into parts and add them

function foldingHash(key, tableSize) {
    const str = key.toString();
    const partSize = 2;
    let sum = 0;

    for (let i = 0; i < str.length; i += partSize) {
        sum += parseInt(str.slice(i, i + partSize)) || 0;
    }

    return sum % tableSize;
}

// Example:
// key = 123456, partSize = 2
// parts: 12, 34, 56
// sum = 12 + 34 + 56 = 102
// hash = 102 % tableSize`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">String Hash Functions</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// 1. Simple Sum of ASCII values
function simpleStringHash(str, tableSize) {
    let sum = 0;
    for (let char of str) {
        sum += char.charCodeAt(0);
    }
    return sum % tableSize;
}

// Problem: "abc" and "bca" produce same hash

// 2. Polynomial Rolling Hash (Better)
function polynomialHash(str, tableSize) {
    let hash = 0;
    const PRIME = 31;

    for (let i = 0; i < str.length; i++) {
        const charCode = str.charCodeAt(i) - 96; // 'a' = 1
        hash = (hash * PRIME + charCode) % tableSize;
    }

    return hash;
}

// Each character's position affects the hash
// "abc" != "bca"

// 3. djb2 Hash (Popular)
function djb2Hash(str) {
    let hash = 5381;

    for (let char of str) {
        // hash * 33 + charCode
        hash = ((hash << 5) + hash) + char.charCodeAt(0);
    }

    return hash >>> 0; // Convert to unsigned
}

// 4. FNV-1a Hash
function fnv1aHash(str) {
    let hash = 2166136261; // FNV offset basis

    for (let char of str) {
        hash ^= char.charCodeAt(0);
        hash = (hash * 16777619) >>> 0; // FNV prime
    }

    return hash;
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Hash Function for Objects</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Hash function for composite keys/objects
function objectHash(obj, tableSize) {
    // Convert object to string representation
    const str = JSON.stringify(obj);
    return polynomialHash(str, tableSize);
}

// For custom objects, combine hashes of fields
function personHash(person, tableSize) {
    const nameHash = polynomialHash(person.name, tableSize);
    const ageHash = person.age % tableSize;

    // Combine using XOR and prime multiplication
    return (nameHash * 31 + ageHash) % tableSize;
}

// Example:
const person = { name: "John", age: 30 };
console.log(personHash(person, 100)); // Combined hash`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Universal Hashing</h2>
    <div className="bg-blue-50 p-4 rounded-lg">
      <p className="leading-relaxed">
        Universal hashing uses a family of hash functions and randomly selects one at runtime.
        This prevents adversarial inputs that could cause many collisions.
      </p>
    </div>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Universal hash family: h(k) = ((a*k + b) mod p) mod m
// a, b are random, p is prime larger than key space

class UniversalHash {
    constructor(tableSize, prime = 104729) {
        this.m = tableSize;
        this.p = prime;
        this.a = Math.floor(Math.random() * (prime - 1)) + 1;
        this.b = Math.floor(Math.random() * prime);
    }

    hash(key) {
        return ((this.a * key + this.b) % this.p) % this.m;
    }
}

// Each instance uses different a, b
const hash1 = new UniversalHash(100);
const hash2 = new UniversalHash(100);

console.log(hash1.hash(42)); // Different from hash2.hash(42)`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Choosing Table Size</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Prime Numbers:</strong> Reduce clustering with division method</li>
      <li><strong>Power of 2:</strong> Fast modulo using bitwise AND (but can cause issues)</li>
      <li><strong>Load Factor:</strong> Table size should maintain load factor below 0.7</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Time Complexity</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Hash Function</th>
            <th className="p-3 border">Time</th>
            <th className="p-3 border">Notes</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Division</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">Single modulo operation</td>
          </tr>
          <tr>
            <td className="p-3 border">Multiplication</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">Few arithmetic operations</td>
          </tr>
          <tr>
            <td className="p-3 border">String Hash</td>
            <td className="p-3 border">O(k)</td>
            <td className="p-3 border">k = length of string</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Key Points to Remember</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Hash function choice significantly impacts performance</li>
      <li>Use prime table sizes with division method</li>
      <li>For strings, polynomial hashing considers character positions</li>
      <li>Same input must always produce same hash (deterministic)</li>
      <li>Goal is uniform distribution across table indices</li>
    </ul>
  </div>
);

export default HashFunctions;
