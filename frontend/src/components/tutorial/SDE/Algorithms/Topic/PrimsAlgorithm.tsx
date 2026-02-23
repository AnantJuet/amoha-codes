import React from 'react';

const PrimsAlgorithm: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Prim's Algorithm
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Prim's Algorithm is a greedy algorithm that finds a Minimum Spanning Tree (MST) for a weighted
      undirected graph. It starts from an arbitrary vertex and grows the MST by always adding the
      cheapest edge that connects a vertex in the MST to a vertex outside it.
    </p>

    <h2 className="text-2xl font-bold mt-6">What is a Minimum Spanning Tree?</h2>
    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
      <p>A <strong>Spanning Tree</strong> of a connected graph is a subgraph that:</p>
      <ul className="list-disc list-inside mt-2 text-sm">
        <li>Includes all vertices of the original graph</li>
        <li>Is a tree (connected and acyclic)</li>
        <li>Has exactly V-1 edges for V vertices</li>
      </ul>
      <p className="mt-2">A <strong>Minimum Spanning Tree</strong> is the spanning tree with minimum total edge weight.</p>
    </div>

    <h2 className="text-2xl font-bold mt-6">Algorithm Steps</h2>
    <ol className="list-decimal list-inside space-y-2">
      <li>Initialize MST with an arbitrary starting vertex</li>
      <li>Create a set to track vertices in MST</li>
      <li>While MST doesn't include all vertices:</li>
      <li className="ml-6">Find the minimum weight edge connecting MST to non-MST vertex</li>
      <li className="ml-6">Add that edge and vertex to MST</li>
      <li>Return the MST edges</li>
    </ol>

    <h2 className="text-2xl font-bold mt-6">Visual Example</h2>
    <div className="bg-gray-100 p-4 rounded-lg">
      <p className="font-semibold">Graph (Edge: Weight):</p>
      <p className="text-sm">A-B: 2, A-C: 3, B-C: 1, B-D: 4, C-D: 5, C-E: 6, D-E: 7</p>

      <div className="mt-4 font-mono text-sm space-y-3">
        <p className="text-blue-600 font-bold">Starting from vertex A</p>

        <p className="text-green-600 font-bold mt-2">Step 1: MST = {'{A}'}</p>
        <p>Edges from A: A-B(2), A-C(3)</p>
        <p>Minimum: A-B(2)</p>
        <p>Add B to MST</p>

        <p className="text-green-600 font-bold mt-2">Step 2: MST = {'{A, B}'}</p>
        <p>Edges to non-MST: A-C(3), B-C(1), B-D(4)</p>
        <p>Minimum: B-C(1)</p>
        <p>Add C to MST</p>

        <p className="text-green-600 font-bold mt-2">Step 3: MST = {'{A, B, C}'}</p>
        <p>Edges to non-MST: B-D(4), C-D(5), C-E(6)</p>
        <p>Minimum: B-D(4)</p>
        <p>Add D to MST</p>

        <p className="text-green-600 font-bold mt-2">Step 4: MST = {'{A, B, C, D}'}</p>
        <p>Edges to non-MST: C-E(6), D-E(7)</p>
        <p>Minimum: C-E(6)</p>
        <p>Add E to MST</p>

        <p className="text-green-600 font-bold mt-4">MST Edges: A-B(2), B-C(1), B-D(4), C-E(6)</p>
        <p className="text-green-600 font-bold">Total Weight: 2 + 1 + 4 + 6 = 13</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Implementation (Adjacency List with Min-Heap)</h2>
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
            if (this.heap[parent].weight <= this.heap[index].weight) break;
            [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
            index = parent;
        }
    }

    bubbleDown(index) {
        while (true) {
            let smallest = index;
            const left = 2 * index + 1;
            const right = 2 * index + 2;
            if (left < this.heap.length && this.heap[left].weight < this.heap[smallest].weight) {
                smallest = left;
            }
            if (right < this.heap.length && this.heap[right].weight < this.heap[smallest].weight) {
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

function primsAlgorithm(graph, start = 0) {
    const n = Object.keys(graph).length;
    const inMST = new Set();
    const mstEdges = [];
    let totalWeight = 0;
    const minHeap = new MinHeap();

    // Start with the first vertex
    inMST.add(start);

    // Add all edges from start vertex to heap
    for (const [neighbor, weight] of graph[start]) {
        minHeap.insert({ from: start, to: neighbor, weight });
    }

    while (!minHeap.isEmpty() && inMST.size < n) {
        const { from, to, weight } = minHeap.extractMin();

        // Skip if destination is already in MST
        if (inMST.has(to)) continue;

        // Add edge to MST
        inMST.add(to);
        mstEdges.push({ from, to, weight });
        totalWeight += weight;

        // Add all edges from new vertex to heap
        for (const [neighbor, edgeWeight] of graph[to]) {
            if (!inMST.has(neighbor)) {
                minHeap.insert({ from: to, to: neighbor, weight: edgeWeight });
            }
        }
    }

    return { edges: mstEdges, totalWeight };
}

// Example
const graph = {
    0: [[1, 2], [2, 3]],           // A: A-B(2), A-C(3)
    1: [[0, 2], [2, 1], [3, 4]],   // B: B-A(2), B-C(1), B-D(4)
    2: [[0, 3], [1, 1], [3, 5], [4, 6]], // C
    3: [[1, 4], [2, 5], [4, 7]],   // D
    4: [[2, 6], [3, 7]]            // E
};

const result = primsAlgorithm(graph, 0);
console.log("MST Edges:", result.edges);
console.log("Total Weight:", result.totalWeight); // 13`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Simple Implementation (Adjacency Matrix)</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function primsSimple(graph) {
    const n = graph.length;
    const key = new Array(n).fill(Infinity);  // Minimum edge weight to reach vertex
    const parent = new Array(n).fill(-1);     // Parent in MST
    const inMST = new Array(n).fill(false);   // Is vertex in MST?

    key[0] = 0; // Start from vertex 0

    for (let count = 0; count < n - 1; count++) {
        // Find minimum key vertex not in MST
        let minKey = Infinity;
        let u = -1;

        for (let v = 0; v < n; v++) {
            if (!inMST[v] && key[v] < minKey) {
                minKey = key[v];
                u = v;
            }
        }

        inMST[u] = true;

        // Update key values of adjacent vertices
        for (let v = 0; v < n; v++) {
            if (graph[u][v] !== 0 && !inMST[v] && graph[u][v] < key[v]) {
                key[v] = graph[u][v];
                parent[v] = u;
            }
        }
    }

    // Construct MST from parent array
    const mstEdges = [];
    let totalWeight = 0;
    for (let i = 1; i < n; i++) {
        mstEdges.push({ from: parent[i], to: i, weight: graph[parent[i]][i] });
        totalWeight += graph[parent[i]][i];
    }

    return { edges: mstEdges, totalWeight };
}

// Example with adjacency matrix
const graphMatrix = [
    [0, 2, 3, 0, 0],  // A
    [2, 0, 1, 4, 0],  // B
    [3, 1, 0, 5, 6],  // C
    [0, 4, 5, 0, 7],  // D
    [0, 0, 6, 7, 0]   // E
];

console.log(primsSimple(graphMatrix));`}</pre>
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

    <h2 className="text-2xl font-bold mt-6">Prim's vs Kruskal's</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left text-sm">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Prim's</th>
            <th className="p-3 border">Kruskal's</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Approach</td>
            <td className="p-3 border">Vertex-based (grows tree)</td>
            <td className="p-3 border">Edge-based (forest merging)</td>
          </tr>
          <tr>
            <td className="p-3 border">Better for</td>
            <td className="p-3 border">Dense graphs</td>
            <td className="p-3 border">Sparse graphs</td>
          </tr>
          <tr>
            <td className="p-3 border">Data Structure</td>
            <td className="p-3 border">Priority Queue</td>
            <td className="p-3 border">Union-Find</td>
          </tr>
          <tr>
            <td className="p-3 border">Time (Adj Matrix)</td>
            <td className="p-3 border">O(V^2)</td>
            <td className="p-3 border">O(E log E)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Advantages</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Simple to understand and implement</li>
      <li>Efficient for dense graphs O(V^2)</li>
      <li>Can work with adjacency matrix directly</li>
      <li>Naturally builds a connected tree</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Disadvantages</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Not efficient for sparse graphs (use Kruskal's)</li>
      <li>Requires connected graph</li>
      <li>More complex with priority queue implementation</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Applications</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Network design (minimum cost to connect all nodes)</li>
      <li>Cluster analysis</li>
      <li>Approximation algorithms for NP-hard problems</li>
      <li>Image segmentation</li>
      <li>Handwriting recognition</li>
    </ul>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="text-yellow-700">
        <strong>Tip:</strong> Use Prim's algorithm when the graph is dense (many edges). For sparse
        graphs, Kruskal's algorithm with Union-Find is typically more efficient.
      </p>
    </div>
  </div>
);

export default PrimsAlgorithm;
