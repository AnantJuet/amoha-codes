import React from 'react';

const BellmanFord: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Bellman-Ford Algorithm
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The Bellman-Ford algorithm computes the shortest paths from a single source vertex to all other vertices
      in a weighted graph. Unlike Dijkstra's algorithm, it can handle graphs with negative edge weights and can
      detect negative weight cycles. Named after Richard Bellman and Lester Ford Jr., it uses a dynamic
      programming approach with edge relaxation.
    </p>

    <h2 className="text-2xl font-bold mt-6">Key Concepts</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-bold text-blue-800">Negative Weights</h4>
        <p className="mt-2 text-sm">Works correctly with negative edge weights unlike Dijkstra.</p>
      </div>
      <div className="bg-green-50 p-4 rounded-lg">
        <h4 className="font-bold text-green-800">Cycle Detection</h4>
        <p className="mt-2 text-sm">Can detect negative weight cycles in the graph.</p>
      </div>
      <div className="bg-purple-50 p-4 rounded-lg">
        <h4 className="font-bold text-purple-800">V-1 Iterations</h4>
        <p className="mt-2 text-sm">Relaxes all edges V-1 times to guarantee shortest paths.</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Algorithm Steps</h2>
    <ol className="list-decimal list-inside space-y-2">
      <li>Initialize distances: source = 0, all others = infinity</li>
      <li>Repeat V-1 times (V = number of vertices):
        <ul className="list-disc list-inside ml-6 mt-1">
          <li>For each edge (u, v) with weight w:</li>
          <li>If dist[u] + w {"<"} dist[v], update dist[v] = dist[u] + w</li>
        </ul>
      </li>
      <li>Check for negative cycles:
        <ul className="list-disc list-inside ml-6 mt-1">
          <li>For each edge (u, v) with weight w:</li>
          <li>If dist[u] + w {"<"} dist[v], negative cycle exists</li>
        </ul>
      </li>
    </ol>

    <h2 className="text-2xl font-bold mt-6">Why V-1 Iterations?</h2>
    <div className="bg-gray-100 p-4 rounded-lg">
      <p className="text-sm">
        The shortest path between any two vertices in a graph with V vertices can contain at most V-1 edges.
        Each iteration guarantees that at least one more edge of the shortest path is correctly computed.
        After V-1 iterations, all shortest paths are guaranteed to be found (if no negative cycles exist).
      </p>
    </div>

    <h2 className="text-2xl font-bold mt-6">Visual Example</h2>
    <div className="bg-gray-100 p-4 rounded-lg">
      <p className="font-semibold">Graph with Negative Edge:</p>
      <pre className="mt-2 text-sm font-mono">
{`      (6)     (5)
   0 ───→ 1 ───→ 2
   │      │      │
(-2)│  (-4)│  (3) │
   ↓      ↓      ↓
   3 ←─── 4 ←─── 5
      (1)    (2)

Edges: 0→1(6), 0→3(-2), 1→2(5), 1→4(-4), 2→5(3), 4→3(1), 5→4(2)
Source: 0`}
      </pre>
      <p className="font-semibold mt-4">Iteration by Iteration:</p>
      <div className="mt-3 space-y-2 text-sm">
        <p><strong>Initial:</strong> dist = [0, INF, INF, INF, INF, INF]</p>
        <p><strong>Iteration 1:</strong> Process edges starting from source.</p>
        <p className="ml-4">After: dist = [0, 6, INF, -2, INF, INF]</p>
        <p><strong>Iteration 2:</strong> More paths discovered.</p>
        <p className="ml-4">After: dist = [0, 6, 11, -2, 2, INF]</p>
        <p><strong>Iteration 3:</strong> Continue relaxation.</p>
        <p className="ml-4">After: dist = [0, 6, 11, -2, 2, 14]</p>
        <p><strong>Iteration 4:</strong> Further improvements.</p>
        <p className="ml-4">After: dist = [0, 6, 11, -2, 2, 14]</p>
        <p><strong>Iteration 5:</strong> Check for updates.</p>
        <p className="ml-4">After: dist = [0, 6, 11, -2, 2, 14]</p>
        <p className="mt-2 text-green-600 font-semibold">Final Distances from 0: [0, 6, 11, -2, 2, 14]</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Implementation</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function bellmanFord(vertices, edges, source) {
    // Initialize distances
    const dist = new Array(vertices).fill(Infinity);
    const parent = new Array(vertices).fill(-1);
    dist[source] = 0;

    // Relax all edges V-1 times
    for (let i = 0; i < vertices - 1; i++) {
        let updated = false;

        for (const [u, v, weight] of edges) {
            if (dist[u] !== Infinity && dist[u] + weight < dist[v]) {
                dist[v] = dist[u] + weight;
                parent[v] = u;
                updated = true;
            }
        }

        // Early termination if no updates
        if (!updated) break;
    }

    // Check for negative weight cycles
    for (const [u, v, weight] of edges) {
        if (dist[u] !== Infinity && dist[u] + weight < dist[v]) {
            return { hasNegativeCycle: true, distances: null, parents: null };
        }
    }

    return { hasNegativeCycle: false, distances: dist, parents: parent };
}

// Edges as [source, destination, weight]
const edges = [
    [0, 1, 6],
    [0, 3, -2],
    [1, 2, 5],
    [1, 4, -4],
    [2, 5, 3],
    [4, 3, 1],
    [5, 4, 2]
];

const result = bellmanFord(6, edges, 0);

if (result.hasNegativeCycle) {
    console.log("Graph contains negative weight cycle!");
} else {
    console.log("Distances:", result.distances);
}
// Output: [0, 6, 11, -2, 2, 14]`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Path Reconstruction</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function getPath(parents, target) {
    if (parents[target] === -1 && target !== 0) {
        return null;  // No path exists
    }

    const path = [];
    let current = target;

    while (current !== -1) {
        path.unshift(current);
        current = parents[current];
    }

    return path;
}

// Example: Get path from source to vertex 3
if (!result.hasNegativeCycle) {
    console.log("Path to 3:", getPath(result.parents, 3));
    // Output: [0, 3]
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Negative Cycle Detection</h2>
    <div className="bg-gray-100 p-4 rounded-lg">
      <p className="font-semibold">What is a Negative Cycle?</p>
      <p className="mt-2 text-sm">
        A negative cycle is a cycle in the graph where the sum of edge weights is negative.
        If such a cycle exists and is reachable from the source, then shortest paths are undefined
        (we can keep going around the cycle to reduce distance infinitely).
      </p>
      <pre className="mt-3 text-sm font-mono">
{`Example of negative cycle:
  A ──(-3)──→ B
  ↑           │
  │           │
  └────(1)────┘

Sum: -3 + 1 = -2 (negative)`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Finding Vertices in Negative Cycle</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function findNegativeCycleVertices(vertices, edges, source) {
    const dist = new Array(vertices).fill(Infinity);
    const parent = new Array(vertices).fill(-1);
    dist[source] = 0;

    let lastUpdated = -1;

    // Run V times (one extra to detect cycle vertex)
    for (let i = 0; i < vertices; i++) {
        lastUpdated = -1;
        for (const [u, v, weight] of edges) {
            if (dist[u] !== Infinity && dist[u] + weight < dist[v]) {
                dist[v] = dist[u] + weight;
                parent[v] = u;
                lastUpdated = v;
            }
        }
    }

    if (lastUpdated === -1) {
        return [];  // No negative cycle
    }

    // Find a vertex in the cycle
    let cycleVertex = lastUpdated;
    for (let i = 0; i < vertices; i++) {
        cycleVertex = parent[cycleVertex];
    }

    // Trace the cycle
    const cycle = [];
    let current = cycleVertex;
    do {
        cycle.push(current);
        current = parent[current];
    } while (current !== cycleVertex);
    cycle.push(cycleVertex);

    return cycle.reverse();
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Complexity Analysis</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Metric</th>
            <th className="p-3 border">Complexity</th>
            <th className="p-3 border">Explanation</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Time Complexity</td>
            <td className="p-3 border">O(V * E)</td>
            <td className="p-3 border">V-1 iterations, each processing all E edges</td>
          </tr>
          <tr>
            <td className="p-3 border">Space Complexity</td>
            <td className="p-3 border">O(V)</td>
            <td className="p-3 border">Distance and parent arrays of size V</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Advantages</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Handles Negative Weights:</strong> Works correctly with negative edge weights</li>
      <li><strong>Cycle Detection:</strong> Can detect negative weight cycles</li>
      <li><strong>Simple Implementation:</strong> Straightforward to implement and understand</li>
      <li><strong>Distributed Systems:</strong> Can be parallelized for distributed computing</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Disadvantages</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Slower than Dijkstra:</strong> O(VE) vs O((V+E)logV) for non-negative weights</li>
      <li><strong>Not Efficient for Dense Graphs:</strong> O(V^3) for dense graphs</li>
      <li><strong>No Output for Negative Cycles:</strong> Cannot give meaningful distances if negative cycle exists</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Comparison with Dijkstra</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Bellman-Ford</th>
            <th className="p-3 border">Dijkstra</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Time Complexity</td>
            <td className="p-3 border">O(V * E)</td>
            <td className="p-3 border">O((V + E) log V)</td>
          </tr>
          <tr>
            <td className="p-3 border">Negative Weights</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">No</td>
          </tr>
          <tr>
            <td className="p-3 border">Negative Cycle Detection</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">No</td>
          </tr>
          <tr>
            <td className="p-3 border">Approach</td>
            <td className="p-3 border">Dynamic Programming</td>
            <td className="p-3 border">Greedy</td>
          </tr>
          <tr>
            <td className="p-3 border">When to Use</td>
            <td className="p-3 border">Negative weights present</td>
            <td className="p-3 border">Non-negative weights only</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Applications</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Currency arbitrage detection (negative cycles in exchange rates)</li>
      <li>Network routing with variable costs</li>
      <li>Distance vector routing protocols (RIP)</li>
      <li>Constraint satisfaction problems</li>
      <li>Systems of difference constraints</li>
      <li>Finding shortest paths with constraints</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">SPFA Optimization</h2>
    <div className="bg-gray-100 p-4 rounded-lg">
      <p className="font-semibold">Shortest Path Faster Algorithm (SPFA)</p>
      <p className="mt-2 text-sm">
        SPFA is an optimization of Bellman-Ford that uses a queue to only process vertices whose distances
        have been updated. Average case is O(E), but worst case remains O(V*E).
      </p>
    </div>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="text-yellow-700">
        <strong>Note:</strong> If a negative cycle is detected, the algorithm cannot provide valid
        shortest path distances. The cycle must be handled separately based on the application's needs.
      </p>
    </div>

    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
      <p className="text-blue-700">
        <strong>Pro Tip:</strong> Use Bellman-Ford when you need to handle negative weights or detect
        negative cycles. For graphs without negative weights, Dijkstra is more efficient.
      </p>
    </div>
  </div>
);

export default BellmanFord;
