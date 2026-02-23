import React from 'react';

const DijkstraShortestPath: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Dijkstra's Shortest Path Algorithm
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Dijkstra's algorithm is a greedy algorithm that finds the shortest path from a single source vertex
      to all other vertices in a weighted graph with non-negative edge weights. Developed by Edsger W. Dijkstra
      in 1956, it is one of the most important algorithms in computer science for solving shortest path problems.
    </p>

    <h2 className="text-2xl font-bold mt-6">Key Concepts</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-bold text-blue-800">Greedy Approach</h4>
        <p className="mt-2 text-sm">Always selects the vertex with minimum distance that hasn't been processed yet.</p>
      </div>
      <div className="bg-green-50 p-4 rounded-lg">
        <h4 className="font-bold text-green-800">Non-negative Weights</h4>
        <p className="mt-2 text-sm">Only works correctly with non-negative edge weights.</p>
      </div>
      <div className="bg-purple-50 p-4 rounded-lg">
        <h4 className="font-bold text-purple-800">Relaxation</h4>
        <p className="mt-2 text-sm">Updates distance if a shorter path is found through current vertex.</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Algorithm Steps</h2>
    <ol className="list-decimal list-inside space-y-2">
      <li>Initialize distances: source = 0, all others = infinity</li>
      <li>Create a set of unvisited vertices</li>
      <li>While there are unvisited vertices:
        <ul className="list-disc list-inside ml-6 mt-1">
          <li>Select the unvisited vertex with minimum distance</li>
          <li>Mark it as visited</li>
          <li>For each unvisited neighbor, calculate distance through current vertex</li>
          <li>If new distance is smaller, update the distance (relaxation)</li>
        </ul>
      </li>
      <li>Repeat until all vertices are visited or target is reached</li>
    </ol>

    <h2 className="text-2xl font-bold mt-6">Visual Example</h2>
    <div className="bg-gray-100 p-4 rounded-lg">
      <p className="font-semibold">Weighted Graph:</p>
      <pre className="mt-2 text-sm font-mono">
{`      (1)     (3)
   0 ───→ 1 ───→ 3
   │      │      ↑
(4)│   (2)│      │(1)
   ↓      ↓      │
   2 ───→ 4 ─────┘
      (5)

Source: 0`}
      </pre>
      <p className="font-semibold mt-4">Step-by-Step Execution:</p>
      <div className="mt-3 space-y-2 text-sm">
        <p><strong>Initial:</strong> dist = [0, INF, INF, INF, INF]</p>
        <p><strong>Step 1:</strong> Visit 0, update neighbors. dist = [0, 1, 4, INF, INF]</p>
        <p><strong>Step 2:</strong> Visit 1 (min dist=1), update neighbors. dist = [0, 1, 4, 4, 3]</p>
        <p><strong>Step 3:</strong> Visit 4 (min dist=3), update neighbors. dist = [0, 1, 4, 4, 3]</p>
        <p><strong>Step 4:</strong> Visit 2 (min dist=4), update neighbors. dist = [0, 1, 4, 4, 3] (no improvement via 2→4)</p>
        <p><strong>Step 5:</strong> Visit 3 (min dist=4)</p>
        <p className="mt-2 text-green-600 font-semibold">Final Distances from 0: [0, 1, 4, 4, 3]</p>
        <p className="text-sm">Shortest path to 3: 0 → 1 → 3 (distance: 4) or 0 → 1 → 4 → 3 (distance: 4)</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Basic Implementation (Array-Based)</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function dijkstra(graph, source) {
    const n = graph.length;
    const dist = new Array(n).fill(Infinity);
    const visited = new Array(n).fill(false);
    const parent = new Array(n).fill(-1);

    dist[source] = 0;

    for (let count = 0; count < n - 1; count++) {
        // Find minimum distance vertex from unvisited set
        let minDist = Infinity;
        let u = -1;

        for (let v = 0; v < n; v++) {
            if (!visited[v] && dist[v] < minDist) {
                minDist = dist[v];
                u = v;
            }
        }

        if (u === -1) break;  // No reachable unvisited vertex
        visited[u] = true;

        // Update distances of adjacent vertices (relaxation)
        for (let v = 0; v < n; v++) {
            if (!visited[v] && graph[u][v] !== 0) {
                const newDist = dist[u] + graph[u][v];
                if (newDist < dist[v]) {
                    dist[v] = newDist;
                    parent[v] = u;
                }
            }
        }
    }

    return { distances: dist, parents: parent };
}

// Graph as adjacency matrix (0 means no edge)
const graph = [
    [0, 1, 4, 0, 0],  // From 0
    [0, 0, 0, 3, 2],  // From 1
    [0, 0, 0, 0, 5],  // From 2
    [0, 0, 0, 0, 0],  // From 3
    [0, 0, 0, 1, 0]   // From 4
];

const result = dijkstra(graph, 0);
console.log("Distances:", result.distances);
// Output: [0, 1, 4, 4, 3]`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Optimized Implementation (Priority Queue)</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function dijkstraOptimized(graph, source) {
    const n = graph.length;
    const dist = new Array(n).fill(Infinity);
    const parent = new Array(n).fill(-1);

    // Min-heap: [distance, vertex]
    const minHeap = [[0, source]];
    dist[source] = 0;

    while (minHeap.length > 0) {
        // Sort to simulate min-heap (use proper heap for efficiency)
        minHeap.sort((a, b) => a[0] - b[0]);
        const [d, u] = minHeap.shift();

        // Skip if we've found a better path already
        if (d > dist[u]) continue;

        // Check all neighbors
        for (const [v, weight] of graph[u]) {
            const newDist = dist[u] + weight;
            if (newDist < dist[v]) {
                dist[v] = newDist;
                parent[v] = u;
                minHeap.push([newDist, v]);
            }
        }
    }

    return { distances: dist, parents: parent };
}

// Graph as adjacency list: [[neighbor, weight], ...]
const graphList = [
    [[1, 1], [2, 4]],     // From 0
    [[3, 3], [4, 2]],     // From 1
    [[4, 5]],             // From 2
    [],                    // From 3
    [[3, 1]]              // From 4
];

const result = dijkstraOptimized(graphList, 0);
console.log("Distances:", result.distances);
// Output: [0, 1, 4, 4, 3]`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Path Reconstruction</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function getPath(parents, target) {
    const path = [];
    let current = target;

    while (current !== -1) {
        path.unshift(current);
        current = parents[current];
    }

    return path;
}

// Example: Get path from source to vertex 3
const { parents } = dijkstraOptimized(graphList, 0);
console.log("Path to 3:", getPath(parents, 3));
// Output: [0, 1, 3] or [0, 1, 4, 3]`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Complexity Analysis</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Implementation</th>
            <th className="p-3 border">Time Complexity</th>
            <th className="p-3 border">Space Complexity</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Array (Linear Search)</td>
            <td className="p-3 border">O(V^2)</td>
            <td className="p-3 border">O(V)</td>
          </tr>
          <tr>
            <td className="p-3 border">Binary Heap</td>
            <td className="p-3 border">O((V + E) log V)</td>
            <td className="p-3 border">O(V)</td>
          </tr>
          <tr>
            <td className="p-3 border">Fibonacci Heap</td>
            <td className="p-3 border">O(E + V log V)</td>
            <td className="p-3 border">O(V)</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p className="mt-2 text-sm">
      <strong>Note:</strong> For dense graphs (E ~ V^2), array implementation can be competitive.
      For sparse graphs, priority queue implementation is preferred.
    </p>

    <h2 className="text-2xl font-bold mt-6">Relaxation Process</h2>
    <div className="bg-gray-100 p-4 rounded-lg">
      <p className="font-mono text-sm">
        For edge (u, v) with weight w:
      </p>
      <pre className="mt-2 font-mono text-sm bg-white p-3 rounded">
{`if (dist[u] + w < dist[v]) {
    dist[v] = dist[u] + w;  // Update distance
    parent[v] = u;           // Update path
}`}
      </pre>
      <p className="mt-2 text-sm">
        This is the core operation that ensures we always find the shortest path.
      </p>
    </div>

    <h2 className="text-2xl font-bold mt-6">Advantages</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Optimal:</strong> Guarantees shortest path for non-negative weights</li>
      <li><strong>Efficient:</strong> O((V + E) log V) with priority queue</li>
      <li><strong>Single Source:</strong> Finds shortest paths to all vertices from source</li>
      <li><strong>Widely Used:</strong> Foundation for many routing algorithms</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Disadvantages</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>No Negative Weights:</strong> Fails with negative edge weights</li>
      <li><strong>Single Source Only:</strong> For all-pairs, need to run V times or use Floyd-Warshall</li>
      <li><strong>Memory for Dense Graphs:</strong> Adjacency matrix requires O(V^2) space</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Why Negative Weights Fail</h2>
    <div className="bg-red-50 p-4 rounded-lg">
      <p className="text-sm">
        Dijkstra's algorithm is greedy - once a vertex is marked as visited with a certain distance,
        that distance is final. With negative weights, we might later find a shorter path through
        a negative edge, but we can't update the already-processed vertex.
      </p>
      <p className="mt-2 text-sm font-semibold">
        For graphs with negative weights (but no negative cycles), use Bellman-Ford algorithm.
      </p>
    </div>

    <h2 className="text-2xl font-bold mt-6">Applications</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>GPS and navigation systems</li>
      <li>Network routing protocols (OSPF)</li>
      <li>Social networks (finding degrees of separation)</li>
      <li>Telephone network routing</li>
      <li>Flight scheduling and booking systems</li>
      <li>Robot path planning</li>
      <li>Game AI (pathfinding)</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Comparison with Other Algorithms</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Algorithm</th>
            <th className="p-3 border">Negative Weights</th>
            <th className="p-3 border">Best For</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Dijkstra</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">Single source, non-negative weights</td>
          </tr>
          <tr>
            <td className="p-3 border">Bellman-Ford</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">Negative weights, cycle detection</td>
          </tr>
          <tr>
            <td className="p-3 border">Floyd-Warshall</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">All-pairs shortest paths</td>
          </tr>
          <tr>
            <td className="p-3 border">BFS</td>
            <td className="p-3 border">N/A</td>
            <td className="p-3 border">Unweighted graphs</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
      <p className="text-blue-700">
        <strong>Pro Tip:</strong> For very large graphs, consider A* algorithm which uses heuristics
        to speed up the search when you only need the shortest path to a specific target.
      </p>
    </div>
  </div>
);

export default DijkstraShortestPath;
