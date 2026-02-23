import React from 'react';

const ConsistentHashing: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Consistent Hashing
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Consistent Hashing is a distributed hashing technique that minimizes key remapping when
      the number of servers changes. It's essential for building scalable distributed systems
      like distributed caches, databases, and load balancers.
    </p>

    <h2 className="text-2xl font-bold mt-6">The Problem with Simple Hashing</h2>
    <div className="bg-red-50 p-4 rounded-lg">
      <p className="font-semibold">Traditional Approach: hash(key) % n</p>
      <div className="mt-2">
        <p>With 4 servers: key "user123" → hash % 4 = 2 → Server 2</p>
        <p className="text-red-600 mt-2">
          <strong>Problem:</strong> Adding/removing a server changes almost all key mappings!
        </p>
        <p className="text-sm mt-1">
          If we add a 5th server, now hash % 5 gives different results for most keys.
        </p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">How Consistent Hashing Works</h2>
    <ol className="list-decimal list-inside space-y-2">
      <li>Arrange all hash values in a circle (0 to 2³² - 1)</li>
      <li>Hash each server to a position on the circle</li>
      <li>Hash each key to a position on the circle</li>
      <li>Key is assigned to the first server clockwise from its position</li>
    </ol>

    <div className="bg-gray-100 p-4 rounded-lg mt-4">
      <p className="font-semibold">Visual Representation:</p>
      <pre className="text-sm mt-2">
{`           0°
           |
    S1 ----+---- S2 (90°)
    |             |
    |    Hash     |
    |    Ring     |
    |             |
    S4 ---------- S3
   (270°)       (180°)

Key K1 (45°) → goes to S2 (clockwise)
Key K2 (200°) → goes to S4 (clockwise)`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Virtual Nodes</h2>
    <div className="bg-blue-50 p-4 rounded-lg">
      <p className="font-semibold">Problem: Uneven Distribution</p>
      <p className="text-sm mt-1">With few servers, distribution can be skewed.</p>
      <p className="font-semibold mt-3">Solution: Virtual Nodes</p>
      <p className="text-sm mt-1">
        Each physical server has multiple positions on the ring (e.g., 150 virtual nodes per server).
        This ensures more even distribution.
      </p>
    </div>

    <h2 className="text-2xl font-bold mt-6">Implementation</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`const crypto = require('crypto');

class ConsistentHash {
    constructor(virtualNodes = 150) {
        this.virtualNodes = virtualNodes;
        this.ring = new Map();  // position -> server
        this.sortedKeys = [];   // sorted positions
        this.servers = new Set();
    }

    // Hash function using MD5
    _hash(key) {
        const hash = crypto.createHash('md5').update(key).digest('hex');
        return parseInt(hash.substring(0, 8), 16);
    }

    // Add a server to the ring
    addServer(server) {
        this.servers.add(server);

        // Add virtual nodes
        for (let i = 0; i < this.virtualNodes; i++) {
            const virtualKey = \`\${server}#\${i}\`;
            const position = this._hash(virtualKey);
            this.ring.set(position, server);
            this.sortedKeys.push(position);
        }

        this.sortedKeys.sort((a, b) => a - b);
    }

    // Remove a server from the ring
    removeServer(server) {
        this.servers.delete(server);

        for (let i = 0; i < this.virtualNodes; i++) {
            const virtualKey = \`\${server}#\${i}\`;
            const position = this._hash(virtualKey);
            this.ring.delete(position);
            this.sortedKeys = this.sortedKeys.filter(k => k !== position);
        }
    }

    // Get the server for a given key
    getServer(key) {
        if (this.ring.size === 0) {
            return null;
        }

        const hash = this._hash(key);

        // Binary search for the first server position >= hash
        let left = 0;
        let right = this.sortedKeys.length - 1;

        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (this.sortedKeys[mid] < hash) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        // If hash is greater than all positions, wrap to first server
        const position = this.sortedKeys[left] >= hash
            ? this.sortedKeys[left]
            : this.sortedKeys[0];

        return this.ring.get(position);
    }
}

// Example usage
const ch = new ConsistentHash(100);

// Add servers
ch.addServer('Server-A');
ch.addServer('Server-B');
ch.addServer('Server-C');

// Route keys
console.log(ch.getServer('user:1001'));  // Server-B
console.log(ch.getServer('user:1002'));  // Server-A
console.log(ch.getServer('user:1003'));  // Server-C

// Add a new server - only ~1/n keys need to move
ch.addServer('Server-D');
console.log(ch.getServer('user:1001'));  // Still Server-B (likely)

// Remove a server - only that server's keys need to move
ch.removeServer('Server-B');`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Key Benefits</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-green-50 p-4 rounded-lg">
        <h4 className="font-bold text-green-800">Minimal Disruption</h4>
        <p className="text-sm mt-1">Only K/n keys need to be remapped when adding/removing a server (K = total keys, n = servers)</p>
      </div>
      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-bold text-blue-800">Horizontal Scaling</h4>
        <p className="text-sm mt-1">Easy to add/remove servers without major rebalancing</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Real-World Applications</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Amazon DynamoDB:</strong> Partitioning data across nodes</li>
      <li><strong>Cassandra:</strong> Data distribution and replication</li>
      <li><strong>Memcached/Redis:</strong> Distributed caching</li>
      <li><strong>CDNs:</strong> Content distribution to edge servers</li>
      <li><strong>Load Balancers:</strong> Sticky sessions</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left text-sm">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Modulo Hashing</th>
            <th className="p-3 border">Consistent Hashing</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Keys remapped on change</td>
            <td className="p-3 border text-red-600">~100%</td>
            <td className="p-3 border text-green-600">~1/n</td>
          </tr>
          <tr>
            <td className="p-3 border">Scaling</td>
            <td className="p-3 border">Difficult</td>
            <td className="p-3 border">Easy</td>
          </tr>
          <tr>
            <td className="p-3 border">Implementation</td>
            <td className="p-3 border">Simple</td>
            <td className="p-3 border">Moderate</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="text-yellow-700">
        <strong>Interview Tip:</strong> Consistent hashing is frequently asked in system design interviews
        for designing distributed systems. Understand both the concept and be able to discuss trade-offs
        like virtual nodes and replication strategies.
      </p>
    </div>
  </div>
);

export default ConsistentHashing;
