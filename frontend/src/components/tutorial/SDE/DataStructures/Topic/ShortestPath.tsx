import React from 'react';

const ShortestPath: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Shortest Path Algorithms
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Finding the shortest path between vertices is one of the most fundamental graph problems.
      Different algorithms are suited for different graph types: unweighted, weighted with
      non-negative edges, or weighted with negative edges.
    </p>

    <h2 className="text-2xl font-bold mt-6">Overview of Algorithms</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Algorithm</th>
            <th className="p-3 border">Graph Type</th>
            <th className="p-3 border">Time</th>
            <th className="p-3 border">Use Case</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">BFS</td>
            <td className="p-3 border">Unweighted</td>
            <td className="p-3 border">O(V + E)</td>
            <td className="p-3 border">Single source, unweighted</td>
          </tr>
          <tr>
            <td className="p-3 border">Dijkstra</td>
            <td className="p-3 border">Non-negative weights</td>
            <td className="p-3 border">O((V+E) log V)</td>
            <td className="p-3 border">Single source, weighted</td>
          </tr>
          <tr>
            <td className="p-3 border">Bellman-Ford</td>
            <td className="p-3 border">Any weights</td>
            <td className="p-3 border">O(V * E)</td>
            <td className="p-3 border">Single source, negative edges</td>
          </tr>
          <tr>
            <td className="p-3 border">Floyd-Warshall</td>
            <td className="p-3 border">Any weights</td>
            <td className="p-3 border">O(V^3)</td>
            <td className="p-3 border">All pairs shortest path</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">1. BFS for Unweighted Graphs</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function shortestPathBFS(graph, start, end) {
    const visited = new Set();
    const queue = [{ vertex: start, distance: 0, path: [start] }];
    visited.add(start);

    while (queue.length > 0) {
        const { vertex, distance, path } = queue.shift();

        if (vertex === end) {
            return { distance, path };
        }

        const neighbors = graph.adjacencyList.get(vertex) || [];

        for (const neighbor of neighbors) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push({
                    vertex: neighbor,
                    distance: distance + 1,
                    path: [...path, neighbor]
                });
            }
        }
    }

    return { distance: -1, path: [] }; // No path found
}

// Time: O(V + E)
// Space: O(V)`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">2. Dijkstra's Algorithm</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Using Min Heap for efficient implementation
class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(item) {
        this.heap.push(item);
        this.bubbleUp(this.heap.length - 1);
    }

    extractMin() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown(0);
        return min;
    }

    bubbleUp(index) {
        while (index > 0) {
            const parent = Math.floor((index - 1) / 2);
            if (this.heap[parent].distance <= this.heap[index].distance) break;
            [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
            index = parent;
        }
    }

    bubbleDown(index) {
        while (true) {
            let smallest = index;
            const left = 2 * index + 1;
            const right = 2 * index + 2;

            if (left < this.heap.length &&
                this.heap[left].distance < this.heap[smallest].distance) {
                smallest = left;
            }
            if (right < this.heap.length &&
                this.heap[right].distance < this.heap[smallest].distance) {
                smallest = right;
            }

            if (smallest === index) break;

            [this.heap[smallest], this.heap[index]] = [this.heap[index], this.heap[smallest]];
            index = smallest;
        }
    }

    isEmpty() { return this.heap.length === 0; }
}

function dijkstra(graph, start) {
    const distances = new Map();
    const previous = new Map();
    const heap = new MinHeap();

    // Initialize distances
    for (const vertex of graph.adjacencyList.keys()) {
        distances.set(vertex, Infinity);
        previous.set(vertex, null);
    }
    distances.set(start, 0);

    heap.insert({ vertex: start, distance: 0 });

    while (!heap.isEmpty()) {
        const { vertex, distance } = heap.extractMin();

        // Skip if we've found a better path already
        if (distance > distances.get(vertex)) continue;

        const neighbors = graph.adjacencyList.get(vertex) || [];

        for (const { node: neighbor, weight } of neighbors) {
            const newDistance = distance + weight;

            if (newDistance < distances.get(neighbor)) {
                distances.set(neighbor, newDistance);
                previous.set(neighbor, vertex);
                heap.insert({ vertex: neighbor, distance: newDistance });
            }
        }
    }

    return { distances, previous };
}

// Get path to specific vertex
function getPath(previous, end) {
    const path = [];
    let current = end;

    while (current !== null) {
        path.unshift(current);
        current = previous.get(current);
    }

    return path;
}

// Example usage:
const { distances, previous } = dijkstra(graph, 0);
console.log("Distance to 4:", distances.get(4));
console.log("Path to 4:", getPath(previous, 4));`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">3. Bellman-Ford Algorithm</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Handles negative edge weights, detects negative cycles
function bellmanFord(vertices, edges, start) {
    const distances = new Map();
    const previous = new Map();

    // Initialize
    for (const v of vertices) {
        distances.set(v, Infinity);
        previous.set(v, null);
    }
    distances.set(start, 0);

    // Relax edges V-1 times
    for (let i = 0; i < vertices.length - 1; i++) {
        let updated = false;

        for (const { from, to, weight } of edges) {
            if (distances.get(from) !== Infinity &&
                distances.get(from) + weight < distances.get(to)) {
                distances.set(to, distances.get(from) + weight);
                previous.set(to, from);
                updated = true;
            }
        }

        // Early termination if no updates
        if (!updated) break;
    }

    // Check for negative cycles (V-th iteration)
    for (const { from, to, weight } of edges) {
        if (distances.get(from) !== Infinity &&
            distances.get(from) + weight < distances.get(to)) {
            throw new Error("Graph contains negative cycle");
        }
    }

    return { distances, previous };
}

// Example:
const vertices = [0, 1, 2, 3, 4];
const edges = [
    { from: 0, to: 1, weight: -1 },
    { from: 0, to: 2, weight: 4 },
    { from: 1, to: 2, weight: 3 },
    { from: 1, to: 3, weight: 2 },
    { from: 1, to: 4, weight: 2 },
    { from: 3, to: 2, weight: 5 },
    { from: 3, to: 1, weight: 1 },
    { from: 4, to: 3, weight: -3 }
];

const result = bellmanFord(vertices, edges, 0);
console.log("Distances:", Object.fromEntries(result.distances));`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">4. Floyd-Warshall Algorithm</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// All-pairs shortest path
function floydWarshall(numVertices, edges) {
    // Initialize distance matrix
    const dist = Array(numVertices).fill(null)
        .map(() => Array(numVertices).fill(Infinity));

    // Distance to self is 0
    for (let i = 0; i < numVertices; i++) {
        dist[i][i] = 0;
    }

    // Set initial distances from edges
    for (const { from, to, weight } of edges) {
        dist[from][to] = weight;
    }

    // Floyd-Warshall: try each vertex as intermediate
    for (let k = 0; k < numVertices; k++) {
        for (let i = 0; i < numVertices; i++) {
            for (let j = 0; j < numVertices; j++) {
                if (dist[i][k] !== Infinity && dist[k][j] !== Infinity &&
                    dist[i][k] + dist[k][j] < dist[i][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j];
                }
            }
        }
    }

    // Check for negative cycles
    for (let i = 0; i < numVertices; i++) {
        if (dist[i][i] < 0) {
            throw new Error("Graph contains negative cycle");
        }
    }

    return dist;
}

// Example:
const edges = [
    { from: 0, to: 1, weight: 3 },
    { from: 0, to: 2, weight: 8 },
    { from: 1, to: 2, weight: 2 },
    { from: 2, to: 0, weight: 5 },
    { from: 2, to: 3, weight: 1 },
    { from: 3, to: 0, weight: 2 }
];

const distances = floydWarshall(4, edges);
console.log("Distance matrix:");
distances.forEach((row, i) => console.log(\`\${i}: \${row.join(", ")}\`));

/*
Output:
0: 0, 3, 5, 6
1: 5, 0, 2, 3
2: 3, 6, 0, 1
3: 2, 5, 7, 0
*/`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Algorithm Selection Guide</h2>
    <div className="space-y-4 mt-4">
      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-bold">Use BFS when:</h4>
        <ul className="list-disc list-inside">
          <li>Graph is unweighted</li>
          <li>Finding shortest path by number of edges</li>
        </ul>
      </div>
      <div className="bg-green-50 p-4 rounded-lg">
        <h4 className="font-bold">Use Dijkstra when:</h4>
        <ul className="list-disc list-inside">
          <li>All edge weights are non-negative</li>
          <li>Need single-source shortest paths</li>
          <li>Performance is important</li>
        </ul>
      </div>
      <div className="bg-yellow-50 p-4 rounded-lg">
        <h4 className="font-bold">Use Bellman-Ford when:</h4>
        <ul className="list-disc list-inside">
          <li>Graph has negative edge weights</li>
          <li>Need to detect negative cycles</li>
          <li>Single-source shortest paths</li>
        </ul>
      </div>
      <div className="bg-purple-50 p-4 rounded-lg">
        <h4 className="font-bold">Use Floyd-Warshall when:</h4>
        <ul className="list-disc list-inside">
          <li>Need all-pairs shortest paths</li>
          <li>Graph is dense</li>
          <li>Simple implementation preferred</li>
        </ul>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Complexity Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Algorithm</th>
            <th className="p-3 border">Time</th>
            <th className="p-3 border">Space</th>
            <th className="p-3 border">Negative Edges</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">BFS</td>
            <td className="p-3 border">O(V + E)</td>
            <td className="p-3 border">O(V)</td>
            <td className="p-3 border">No</td>
          </tr>
          <tr>
            <td className="p-3 border">Dijkstra (heap)</td>
            <td className="p-3 border">O((V+E) log V)</td>
            <td className="p-3 border">O(V)</td>
            <td className="p-3 border">No</td>
          </tr>
          <tr>
            <td className="p-3 border">Bellman-Ford</td>
            <td className="p-3 border">O(V * E)</td>
            <td className="p-3 border">O(V)</td>
            <td className="p-3 border">Yes</td>
          </tr>
          <tr>
            <td className="p-3 border">Floyd-Warshall</td>
            <td className="p-3 border">O(V^3)</td>
            <td className="p-3 border">O(V^2)</td>
            <td className="p-3 border">Yes</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Key Points</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>BFS: Best for unweighted graphs, O(V + E)</li>
      <li>Dijkstra: Greedy, requires non-negative weights</li>
      <li>Bellman-Ford: Handles negative weights, detects negative cycles</li>
      <li>Floyd-Warshall: All-pairs, simple O(V^3) solution</li>
      <li>Choose algorithm based on graph properties and requirements</li>
    </ul>
  </div>
);

export default ShortestPath;
