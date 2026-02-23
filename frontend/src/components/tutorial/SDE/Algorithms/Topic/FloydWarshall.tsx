import React from 'react';

const FloydWarshall: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Floyd-Warshall Algorithm
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The Floyd-Warshall algorithm is a dynamic programming algorithm for finding shortest paths between
      all pairs of vertices in a weighted graph. It can handle both positive and negative edge weights
      (but not negative cycles) and is particularly useful when you need to find distances between every
      pair of vertices efficiently.
    </p>

    <h2 className="text-2xl font-bold mt-6">Key Concepts</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-bold text-blue-800">All-Pairs Shortest Path</h4>
        <p className="mt-2 text-sm">Finds shortest paths between every pair of vertices in one execution.</p>
      </div>
      <div className="bg-green-50 p-4 rounded-lg">
        <h4 className="font-bold text-green-800">Dynamic Programming</h4>
        <p className="mt-2 text-sm">Builds solution by considering intermediate vertices one by one.</p>
      </div>
      <div className="bg-purple-50 p-4 rounded-lg">
        <h4 className="font-bold text-purple-800">Works with Negatives</h4>
        <p className="mt-2 text-sm">Handles negative edge weights, can detect negative cycles.</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Core Idea</h2>
    <div className="bg-gray-100 p-4 rounded-lg">
      <p className="text-sm">
        For each pair of vertices (i, j), we consider whether going through an intermediate vertex k
        gives a shorter path than the current known path.
      </p>
      <div className="mt-3 font-mono bg-white p-3 rounded">
        <p className="text-sm">dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])</p>
      </div>
      <p className="mt-3 text-sm">
        We iterate through all possible intermediate vertices k (from 0 to V-1), and for each k,
        we update all pairs (i, j) to see if path i → k → j is shorter than the current i → j path.
      </p>
    </div>

    <h2 className="text-2xl font-bold mt-6">Algorithm Steps</h2>
    <ol className="list-decimal list-inside space-y-2">
      <li>Initialize distance matrix with edge weights (infinity if no direct edge)</li>
      <li>Set diagonal elements to 0 (distance to self)</li>
      <li>For each intermediate vertex k (0 to V-1):
        <ul className="list-disc list-inside ml-6 mt-1">
          <li>For each source vertex i (0 to V-1):</li>
          <li>For each destination vertex j (0 to V-1):</li>
          <li>If dist[i][k] + dist[k][j] {"<"} dist[i][j], update dist[i][j]</li>
        </ul>
      </li>
      <li>Check diagonal for negative values (indicates negative cycle)</li>
    </ol>

    <h2 className="text-2xl font-bold mt-6">Visual Example</h2>
    <div className="bg-gray-100 p-4 rounded-lg">
      <p className="font-semibold">Graph:</p>
      <pre className="mt-2 text-sm font-mono">
{`     (3)
  0 ───→ 1
  │ ↖    │
(8)│  (4)│(1)
  ↓    ↖ ↓
  3 ←─── 2
     (7)`}
      </pre>
      <p className="font-semibold mt-4">Initial Distance Matrix:</p>
      <pre className="mt-2 text-sm font-mono">
{`    0    1    2    3
0 [ 0,   3,  INF,  8 ]
1 [INF,  0,   1,  INF]
2 [ 4, INF,   0,   7 ]
3 [INF, INF, INF,  0 ]`}
      </pre>
      <p className="font-semibold mt-4">After Processing k=0, k=1, k=2, k=3:</p>
      <pre className="mt-2 text-sm font-mono">
{`    0    1    2    3
0 [ 0,   3,   4,   8 ]
1 [ 5,   0,   1,   8 ]
2 [ 4,   7,   0,   7 ]
3 [INF, INF, INF,  0 ]`}
      </pre>
      <p className="mt-2 text-green-600 font-semibold">
        Shortest path from 0 to 2: 0 → 1 → 2 (distance: 4)
      </p>
    </div>

    <h2 className="text-2xl font-bold mt-6">Implementation</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function floydWarshall(graph) {
    const V = graph.length;

    // Create distance matrix (copy of input graph)
    const dist = graph.map(row => [...row]);

    // Create next matrix for path reconstruction
    const next = Array(V).fill(null).map(() => Array(V).fill(null));

    // Initialize next matrix
    for (let i = 0; i < V; i++) {
        for (let j = 0; j < V; j++) {
            if (graph[i][j] !== Infinity && i !== j) {
                next[i][j] = j;
            }
        }
    }

    // Floyd-Warshall algorithm
    for (let k = 0; k < V; k++) {
        for (let i = 0; i < V; i++) {
            for (let j = 0; j < V; j++) {
                if (dist[i][k] !== Infinity && dist[k][j] !== Infinity) {
                    if (dist[i][k] + dist[k][j] < dist[i][j]) {
                        dist[i][j] = dist[i][k] + dist[k][j];
                        next[i][j] = next[i][k];
                    }
                }
            }
        }
    }

    // Check for negative cycles
    for (let i = 0; i < V; i++) {
        if (dist[i][i] < 0) {
            return { hasNegativeCycle: true, distances: null, next: null };
        }
    }

    return { hasNegativeCycle: false, distances: dist, next: next };
}

// Graph as adjacency matrix (Infinity means no direct edge)
const INF = Infinity;
const graph = [
    [0,   3, INF,   8],
    [INF, 0,   1, INF],
    [4, INF,   0,   7],
    [INF, INF, INF, 0]
];

const result = floydWarshall(graph);

if (!result.hasNegativeCycle) {
    console.log("Distance Matrix:");
    result.distances.forEach((row, i) => {
        console.log(\`From \${i}: [\${row.map(d => d === INF ? 'INF' : d).join(', ')}]\`);
    });
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Path Reconstruction</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function reconstructPath(next, u, v) {
    if (next[u][v] === null) {
        return null;  // No path exists
    }

    const path = [u];
    while (u !== v) {
        u = next[u][v];
        path.push(u);
    }
    return path;
}

// Example: Find path from vertex 0 to vertex 2
if (!result.hasNegativeCycle) {
    const path = reconstructPath(result.next, 0, 2);
    console.log("Path from 0 to 2:", path);
    // Output: [0, 1, 2]
    console.log("Distance:", result.distances[0][2]);
    // Output: 4
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Step-by-Step Walkthrough</h2>
    <div className="bg-gray-100 p-4 rounded-lg">
      <p className="font-semibold">Processing Intermediate Vertices:</p>
      <div className="mt-3 space-y-3 text-sm">
        <div>
          <p className="font-semibold">k = 0 (consider paths through vertex 0):</p>
          <p className="ml-4">dist[2][3]: min(7, dist[2][0] + dist[0][3]) = min(7, 4+8) = 7 (no change)</p>
        </div>
        <div>
          <p className="font-semibold">k = 1 (consider paths through vertex 1):</p>
          <p className="ml-4">dist[0][2]: min(INF, dist[0][1] + dist[1][2]) = min(INF, 3+1) = 4 (updated!)</p>
        </div>
        <div>
          <p className="font-semibold">k = 2 (consider paths through vertex 2):</p>
          <p className="ml-4">dist[1][0]: min(INF, dist[1][2] + dist[2][0]) = min(INF, 1+4) = 5 (updated!)</p>
          <p className="ml-4">dist[1][3]: min(INF, dist[1][2] + dist[2][3]) = min(INF, 1+7) = 8 (updated!)</p>
        </div>
        <div>
          <p className="font-semibold">k = 3 (consider paths through vertex 3):</p>
          <p className="ml-4">No improvements (vertex 3 has no outgoing edges)</p>
        </div>
      </div>
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
            <td className="p-3 border">O(V^3)</td>
            <td className="p-3 border">Three nested loops, each iterating V times</td>
          </tr>
          <tr>
            <td className="p-3 border">Space Complexity</td>
            <td className="p-3 border">O(V^2)</td>
            <td className="p-3 border">Distance matrix of size V x V</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Advantages</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>All Pairs at Once:</strong> Finds shortest paths between all pairs in single execution</li>
      <li><strong>Simple Implementation:</strong> Easy to understand and implement (just three loops)</li>
      <li><strong>Handles Negative Weights:</strong> Works with negative edges (not negative cycles)</li>
      <li><strong>In-place Computation:</strong> Can be done with O(V^2) extra space</li>
      <li><strong>Detects Negative Cycles:</strong> Negative diagonal indicates a negative cycle</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Disadvantages</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>O(V^3) Time:</strong> Not efficient for very large graphs</li>
      <li><strong>O(V^2) Space:</strong> Requires storage for full distance matrix</li>
      <li><strong>Overkill for Single Source:</strong> If only need single source, Dijkstra or Bellman-Ford is better</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">When to Use Which Algorithm?</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Scenario</th>
            <th className="p-3 border">Best Algorithm</th>
            <th className="p-3 border">Complexity</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">All pairs, dense graph</td>
            <td className="p-3 border">Floyd-Warshall</td>
            <td className="p-3 border">O(V^3)</td>
          </tr>
          <tr>
            <td className="p-3 border">All pairs, sparse graph, non-negative</td>
            <td className="p-3 border">Run Dijkstra V times</td>
            <td className="p-3 border">O(V(V+E)logV)</td>
          </tr>
          <tr>
            <td className="p-3 border">All pairs, sparse, negative weights</td>
            <td className="p-3 border">Johnson's algorithm</td>
            <td className="p-3 border">O(V^2logV + VE)</td>
          </tr>
          <tr>
            <td className="p-3 border">Single source, non-negative</td>
            <td className="p-3 border">Dijkstra</td>
            <td className="p-3 border">O((V+E)logV)</td>
          </tr>
          <tr>
            <td className="p-3 border">Single source, negative weights</td>
            <td className="p-3 border">Bellman-Ford</td>
            <td className="p-3 border">O(VE)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Transitive Closure</h2>
    <div className="bg-gray-100 p-4 rounded-lg">
      <p className="text-sm">
        A variation of Floyd-Warshall can compute the transitive closure of a graph
        (determining if there is a path between any two vertices):
      </p>
      <div className="bg-gray-800 text-green-400 p-3 rounded-lg mt-3 overflow-x-auto">
        <pre className="text-sm">{`function transitiveClosure(graph) {
    const V = graph.length;
    const reach = graph.map(row => row.map(v => v !== 0 && v !== Infinity));

    for (let k = 0; k < V; k++) {
        for (let i = 0; i < V; i++) {
            for (let j = 0; j < V; j++) {
                reach[i][j] = reach[i][j] || (reach[i][k] && reach[k][j]);
            }
        }
    }
    return reach;
}`}</pre>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Applications</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Finding shortest paths in road networks</li>
      <li>Routing in computer networks</li>
      <li>Computing transitive closure</li>
      <li>Finding the diameter of a graph</li>
      <li>Detecting negative cycles</li>
      <li>Optimal routing problems</li>
      <li>Matrix chain multiplication (similar structure)</li>
    </ul>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="text-yellow-700">
        <strong>Note:</strong> If any diagonal element becomes negative after running the algorithm,
        the graph contains a negative cycle. In such cases, shortest paths are not well-defined.
      </p>
    </div>

    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
      <p className="text-blue-700">
        <strong>Pro Tip:</strong> For sparse graphs where E {"<<"} V^2, consider using Johnson's algorithm
        or running Dijkstra from each vertex, which can be more efficient than Floyd-Warshall.
      </p>
    </div>
  </div>
);

export default FloydWarshall;
