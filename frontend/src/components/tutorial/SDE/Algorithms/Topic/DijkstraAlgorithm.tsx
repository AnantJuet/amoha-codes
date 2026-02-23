import React from 'react';

const DijkstraAlgorithm: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Dijkstra's Algorithm
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Dijkstra's Algorithm is a greedy algorithm that finds the shortest path from a source vertex
      to all other vertices in a weighted graph with non-negative edge weights. It is one of the
      most important algorithms in computer science and is widely used in routing and navigation.
    </p>

    <h2 className="text-2xl font-bold mt-6">Prerequisites</h2>
    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Non-negative weights:</strong> All edge weights must be {">="} 0</li>
        <li>Works on both directed and undirected graphs</li>
        <li>Graph can be represented as adjacency list or matrix</li>
      </ul>
      <p className="mt-2 text-red-600 text-sm">
        <strong>Warning:</strong> Dijkstra's does NOT work with negative edge weights. Use Bellman-Ford instead.
      </p>
    </div>

    <h2 className="text-2xl font-bold mt-6">Algorithm Steps</h2>
    <ol className="list-decimal list-inside space-y-2">
      <li>Initialize distances: source = 0, all others = infinity</li>
      <li>Create a set of unvisited vertices</li>
      <li>While there are unvisited vertices:</li>
      <li className="ml-6">Select vertex u with minimum distance</li>
      <li className="ml-6">Mark u as visited</li>
      <li className="ml-6">For each neighbor v of u:</li>
      <li className="ml-10">If dist[u] + weight(u,v) {"<"} dist[v], update dist[v]</li>
    </ol>

    <h2 className="text-2xl font-bold mt-6">Visual Example</h2>
    <div className="bg-gray-100 p-4 rounded-lg">
      <p className="font-semibold">Graph (source = A):</p>
      <p className="text-sm">A-B: 4, A-C: 2, B-C: 1, B-D: 5, C-D: 8, C-E: 10, D-E: 2</p>

      <div className="mt-4 font-mono text-sm space-y-3">
        <p className="text-blue-600 font-bold">Initial distances:</p>
        <p>A: 0, B: inf, C: inf, D: inf, E: inf</p>

        <p className="text-green-600 font-bold mt-2">Visit A (dist=0):</p>
        <p>Update B: min(inf, 0+4) = 4</p>
        <p>Update C: min(inf, 0+2) = 2</p>
        <p>Distances: A: 0, B: 4, C: 2, D: inf, E: inf</p>

        <p className="text-green-600 font-bold mt-2">Visit C (dist=2):</p>
        <p>Update B: min(4, 2+1) = 3</p>
        <p>Update D: min(inf, 2+8) = 10</p>
        <p>Update E: min(inf, 2+10) = 12</p>
        <p>Distances: A: 0, B: 3, C: 2, D: 10, E: 12</p>

        <p className="text-green-600 font-bold mt-2">Visit B (dist=3):</p>
        <p>Update D: min(10, 3+5) = 8</p>
        <p>Distances: A: 0, B: 3, C: 2, D: 8, E: 12</p>

        <p className="text-green-600 font-bold mt-2">Visit D (dist=8):</p>
        <p>Update E: min(12, 8+2) = 10</p>
        <p>Distances: A: 0, B: 3, C: 2, D: 8, E: 10</p>

        <p className="text-green-600 font-bold mt-2">Visit E (dist=10):</p>
        <p>No updates</p>

        <p className="text-green-600 font-bold mt-4">Final Shortest Distances from A:</p>
        <p>A: 0, B: 3, C: 2, D: 8, E: 10</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Implementation with Priority Queue</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(node) {
        this.heap.push(node);
        this.bubbleUp(this.heap.length - 1);
    }

    extractMin() {
        if (this.heap.length === 0) return null;
        const min = this.heap[0];
        const last = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.bubbleDown(0);
        }
        return min;
    }

    bubbleUp(index) {
        while (index > 0) {
            const parent = Math.floor((index - 1) / 2);
            if (this.heap[parent].dist <= this.heap[index].dist) break;
            [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
            index = parent;
        }
    }

    bubbleDown(index) {
        while (true) {
            let smallest = index;
            const left = 2 * index + 1;
            const right = 2 * index + 2;
            if (left < this.heap.length && this.heap[left].dist < this.heap[smallest].dist) {
                smallest = left;
            }
            if (right < this.heap.length && this.heap[right].dist < this.heap[smallest].dist) {
                smallest = right;
            }
            if (smallest === index) break;
            [this.heap[smallest], this.heap[index]] = [this.heap[index], this.heap[smallest]];
            index = smallest;
        }
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}

function dijkstra(graph, source) {
    const n = Object.keys(graph).length;
    const dist = {};
    const prev = {};
    const visited = new Set();

    // Initialize distances
    for (const vertex in graph) {
        dist[vertex] = Infinity;
        prev[vertex] = null;
    }
    dist[source] = 0;

    const pq = new MinHeap();
    pq.insert({ vertex: source, dist: 0 });

    while (!pq.isEmpty()) {
        const { vertex: u, dist: d } = pq.extractMin();

        // Skip if already visited
        if (visited.has(u)) continue;
        visited.add(u);

        // Relax all neighbors
        for (const [neighbor, weight] of graph[u]) {
            if (!visited.has(neighbor)) {
                const newDist = dist[u] + weight;
                if (newDist < dist[neighbor]) {
                    dist[neighbor] = newDist;
                    prev[neighbor] = u;
                    pq.insert({ vertex: neighbor, dist: newDist });
                }
            }
        }
    }

    return { distances: dist, previous: prev };
}

// Example
const graph = {
    'A': [['B', 4], ['C', 2]],
    'B': [['A', 4], ['C', 1], ['D', 5]],
    'C': [['A', 2], ['B', 1], ['D', 8], ['E', 10]],
    'D': [['B', 5], ['C', 8], ['E', 2]],
    'E': [['C', 10], ['D', 2]]
};

const result = dijkstra(graph, 'A');
console.log("Distances:", result.distances);
// { A: 0, B: 3, C: 2, D: 8, E: 10 }`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Reconstructing the Path</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function getPath(prev, target) {
    const path = [];
    let current = target;

    while (current !== null) {
        path.unshift(current);
        current = prev[current];
    }

    return path;
}

// Example
const { distances, previous } = dijkstra(graph, 'A');
console.log("Shortest path A to E:", getPath(previous, 'E'));
// Output: ['A', 'C', 'B', 'D', 'E']
console.log("Distance:", distances['E']); // 10`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Simple Implementation (No Priority Queue)</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function dijkstraSimple(graph, source) {
    const n = graph.length;
    const dist = new Array(n).fill(Infinity);
    const visited = new Array(n).fill(false);

    dist[source] = 0;

    for (let count = 0; count < n - 1; count++) {
        // Find minimum distance vertex not yet visited
        let minDist = Infinity;
        let u = -1;

        for (let v = 0; v < n; v++) {
            if (!visited[v] && dist[v] < minDist) {
                minDist = dist[v];
                u = v;
            }
        }

        if (u === -1) break;
        visited[u] = true;

        // Update distances of adjacent vertices
        for (let v = 0; v < n; v++) {
            if (!visited[v] && graph[u][v] !== 0) {
                const newDist = dist[u] + graph[u][v];
                if (newDist < dist[v]) {
                    dist[v] = newDist;
                }
            }
        }
    }

    return dist;
}

// Adjacency matrix representation
const graphMatrix = [
    [0, 4, 2, 0, 0],  // A
    [4, 0, 1, 5, 0],  // B
    [2, 1, 0, 8, 10], // C
    [0, 5, 8, 0, 2],  // D
    [0, 0, 10, 2, 0]  // E
];

console.log(dijkstraSimple(graphMatrix, 0));
// [0, 3, 2, 8, 10]`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Complexity Analysis</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Implementation</th>
            <th className="p-3 border">Time Complexity</th>
            <th className="p-3 border">Space</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Adjacency Matrix</td>
            <td className="p-3 border">O(V^2)</td>
            <td className="p-3 border">O(V)</td>
          </tr>
          <tr>
            <td className="p-3 border">Binary Heap + Adj List</td>
            <td className="p-3 border">O((V + E) log V)</td>
            <td className="p-3 border">O(V + E)</td>
          </tr>
          <tr>
            <td className="p-3 border">Fibonacci Heap</td>
            <td className="p-3 border">O(E + V log V)</td>
            <td className="p-3 border">O(V + E)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Dijkstra vs Other Shortest Path Algorithms</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left text-sm">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Algorithm</th>
            <th className="p-3 border">Time</th>
            <th className="p-3 border">Negative Weights</th>
            <th className="p-3 border">Use Case</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Dijkstra</td>
            <td className="p-3 border">O((V+E) log V)</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">Single source, non-negative</td>
          </tr>
          <tr>
            <td className="p-3 border">Bellman-Ford</td>
            <td className="p-3 border">O(VE)</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">Single source, negative allowed</td>
          </tr>
          <tr>
            <td className="p-3 border">Floyd-Warshall</td>
            <td className="p-3 border">O(V^3)</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">All pairs shortest paths</td>
          </tr>
          <tr>
            <td className="p-3 border">A*</td>
            <td className="p-3 border">O(E)</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">Single target with heuristic</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Why No Negative Weights?</h2>
    <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
      <p>Dijkstra's greedy approach assumes that once a vertex is visited, its shortest path is found.</p>
      <p className="mt-2">With negative weights, a longer path might become shorter later, violating this assumption.</p>
      <p className="mt-2"><strong>Example:</strong> A-B(2), B-C(-5), A-C(1)</p>
      <p className="text-sm mt-1">Dijkstra finds A-C = 1, but A-B-C = 2-5 = -3 is shorter!</p>
    </div>

    <h2 className="text-2xl font-bold mt-6">Advantages</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Efficient for non-negative weighted graphs</li>
      <li>Finds shortest path to all vertices from source</li>
      <li>Works with both directed and undirected graphs</li>
      <li>Widely applicable and well-understood</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Disadvantages</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Does not work with negative edge weights</li>
      <li>Explores all vertices (not goal-directed like A*)</li>
      <li>Requires efficient priority queue for best performance</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Applications</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>GPS navigation and route planning</li>
      <li>Network routing protocols (OSPF, IS-IS)</li>
      <li>Social network analysis</li>
      <li>Robotics path planning</li>
      <li>Game AI for pathfinding</li>
      <li>Flight scheduling and logistics</li>
    </ul>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="text-yellow-700">
        <strong>Tip:</strong> For graphs with negative edges, use Bellman-Ford. For single-target
        pathfinding with a good heuristic, use A* algorithm. For all-pairs shortest paths, use
        Floyd-Warshall.
      </p>
    </div>
  </div>
);

export default DijkstraAlgorithm;
