import React from 'react';

const MST: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Minimum Spanning Tree (MST)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A Minimum Spanning Tree (MST) is a subset of edges from a connected, weighted, undirected graph that
      connects all vertices together with the minimum total edge weight, without forming any cycles.
      MST is fundamental in network design, clustering, and optimization problems.
    </p>

    <h2 className="text-2xl font-bold mt-6">Key Properties</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-bold text-blue-800">V-1 Edges</h4>
        <p className="mt-2 text-sm">An MST with V vertices always has exactly V-1 edges.</p>
      </div>
      <div className="bg-green-50 p-4 rounded-lg">
        <h4 className="font-bold text-green-800">No Cycles</h4>
        <p className="mt-2 text-sm">MST is a tree - it contains no cycles.</p>
      </div>
      <div className="bg-purple-50 p-4 rounded-lg">
        <h4 className="font-bold text-purple-800">Connected</h4>
        <p className="mt-2 text-sm">All vertices are connected through the MST edges.</p>
      </div>
      <div className="bg-orange-50 p-4 rounded-lg">
        <h4 className="font-bold text-orange-800">Minimum Weight</h4>
        <p className="mt-2 text-sm">Total weight of edges is minimum possible.</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Two Main Algorithms</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-gray-100 p-4 rounded-lg">
        <h4 className="font-bold">Kruskal's Algorithm</h4>
        <p className="mt-2 text-sm">Greedy approach that sorts edges by weight and adds them if they don't form a cycle (uses Union-Find).</p>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg">
        <h4 className="font-bold">Prim's Algorithm</h4>
        <p className="mt-2 text-sm">Greedy approach that grows MST from a starting vertex by always adding the minimum weight edge to a new vertex.</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Visual Example</h2>
    <div className="bg-gray-100 p-4 rounded-lg">
      <p className="font-semibold">Original Graph:</p>
      <pre className="mt-2 text-sm font-mono">
{`      (2)     (3)
   0 ───── 1 ───── 2
   │ \\     │     / │
(6)│  (8)  │(5) (7)│(9)
   │     \\ │ /     │
   3 ───── 4 ───── 5
      (9)     (11)`}
      </pre>
      <p className="font-semibold mt-4">Minimum Spanning Tree:</p>
      <pre className="mt-2 text-sm font-mono">
{`      (2)     (3)
   0 ───── 1 ───── 2
   │       │
(6)│       │(5)
   │       │
   3       4 ───── 5
               (11)

MST Edges: (0-1, 2), (1-2, 3), (1-4, 5), (0-3, 6), (4-5, 11)
Total Weight: 2 + 3 + 5 + 6 + 11 = 27`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Kruskal's Algorithm</h2>
    <div className="bg-gray-100 p-4 rounded-lg mb-4">
      <ol className="list-decimal list-inside space-y-2">
        <li>Sort all edges in ascending order by weight</li>
        <li>Initialize each vertex as its own component (Union-Find)</li>
        <li>For each edge (u, v) in sorted order:
          <ul className="list-disc list-inside ml-6 mt-1">
            <li>If u and v are in different components, add edge to MST</li>
            <li>Union the components containing u and v</li>
          </ul>
        </li>
        <li>Stop when MST has V-1 edges</li>
      </ol>
    </div>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Union-Find data structure
class UnionFind {
    constructor(n) {
        this.parent = Array.from({ length: n }, (_, i) => i);
        this.rank = new Array(n).fill(0);
    }

    find(x) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]);  // Path compression
        }
        return this.parent[x];
    }

    union(x, y) {
        const rootX = this.find(x);
        const rootY = this.find(y);

        if (rootX === rootY) return false;

        // Union by rank
        if (this.rank[rootX] < this.rank[rootY]) {
            this.parent[rootX] = rootY;
        } else if (this.rank[rootX] > this.rank[rootY]) {
            this.parent[rootY] = rootX;
        } else {
            this.parent[rootY] = rootX;
            this.rank[rootX]++;
        }
        return true;
    }
}

function kruskal(vertices, edges) {
    // Sort edges by weight
    edges.sort((a, b) => a[2] - b[2]);

    const uf = new UnionFind(vertices);
    const mst = [];
    let totalWeight = 0;

    for (const [u, v, weight] of edges) {
        if (uf.union(u, v)) {
            mst.push([u, v, weight]);
            totalWeight += weight;

            // MST complete when we have V-1 edges
            if (mst.length === vertices - 1) break;
        }
    }

    return { edges: mst, weight: totalWeight };
}

// Edges as [source, destination, weight]
const edges = [
    [0, 1, 2], [0, 3, 6], [0, 4, 8],
    [1, 2, 3], [1, 4, 5],
    [2, 4, 7], [2, 5, 9],
    [3, 4, 9],
    [4, 5, 11]
];

const result = kruskal(6, edges);
console.log("MST Edges:", result.edges);
console.log("Total Weight:", result.weight);
// Output: MST Edges: [[0,1,2], [1,2,3], [1,4,5], [0,3,6], [4,5,11]]
// Total Weight: 27`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Prim's Algorithm</h2>
    <div className="bg-gray-100 p-4 rounded-lg mb-4">
      <ol className="list-decimal list-inside space-y-2">
        <li>Start with an arbitrary vertex</li>
        <li>Initialize a priority queue with edges from the starting vertex</li>
        <li>While MST doesn't have V-1 edges:
          <ul className="list-disc list-inside ml-6 mt-1">
            <li>Extract minimum weight edge (u, v) from priority queue</li>
            <li>If v is not yet in MST, add edge (u, v) to MST</li>
            <li>Add all edges from v to unvisited vertices to priority queue</li>
          </ul>
        </li>
      </ol>
    </div>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function prim(graph, startVertex = 0) {
    const V = graph.length;
    const visited = new Array(V).fill(false);
    const mst = [];
    let totalWeight = 0;

    // Min-heap: [weight, from, to]
    const minHeap = [];

    // Start from vertex 0
    visited[startVertex] = true;
    for (const [neighbor, weight] of graph[startVertex]) {
        minHeap.push([weight, startVertex, neighbor]);
    }

    while (minHeap.length > 0 && mst.length < V - 1) {
        // Sort to simulate min-heap (use proper heap for efficiency)
        minHeap.sort((a, b) => a[0] - b[0]);
        const [weight, from, to] = minHeap.shift();

        if (visited[to]) continue;

        // Add edge to MST
        visited[to] = true;
        mst.push([from, to, weight]);
        totalWeight += weight;

        // Add edges from new vertex
        for (const [neighbor, edgeWeight] of graph[to]) {
            if (!visited[neighbor]) {
                minHeap.push([edgeWeight, to, neighbor]);
            }
        }
    }

    return { edges: mst, weight: totalWeight };
}

// Graph as adjacency list: [[neighbor, weight], ...]
const graphList = [
    [[1, 2], [3, 6], [4, 8]],       // From 0
    [[0, 2], [2, 3], [4, 5]],       // From 1
    [[1, 3], [4, 7], [5, 9]],       // From 2
    [[0, 6], [4, 9]],              // From 3
    [[0, 8], [1, 5], [2, 7], [3, 9], [5, 11]],  // From 4
    [[2, 9], [4, 11]]              // From 5
];

const primResult = prim(graphList);
console.log("MST Edges:", primResult.edges);
console.log("Total Weight:", primResult.weight);`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Step-by-Step: Kruskal's Algorithm</h2>
    <div className="bg-gray-100 p-4 rounded-lg">
      <p className="font-semibold">Sorted Edges: (0-1,2), (1-2,3), (1-4,5), (0-3,6), (2-4,7), (0-4,8), (3-4,9), (2-5,9), (4-5,11)</p>
      <div className="mt-3 space-y-2 text-sm">
        <p><strong>Step 1:</strong> Add (0-1, 2). Components: {"{0,1}, {2}, {3}, {4}, {5}"}</p>
        <p><strong>Step 2:</strong> Add (1-2, 3). Components: {"{0,1,2}, {3}, {4}, {5}"}</p>
        <p><strong>Step 3:</strong> Add (1-4, 5). Components: {"{0,1,2,4}, {3}, {5}"}</p>
        <p><strong>Step 4:</strong> Add (0-3, 6). Components: {"{0,1,2,3,4}, {5}"}</p>
        <p><strong>Skip:</strong> (2-4, 7) would create cycle (2 and 4 already connected)</p>
        <p><strong>Skip:</strong> (0-4, 8) would create cycle</p>
        <p><strong>Skip:</strong> (3-4, 9) would create cycle</p>
        <p><strong>Skip:</strong> (2-5, 9) would create cycle</p>
        <p><strong>Step 5:</strong> Add (4-5, 11). Components: {"{0,1,2,3,4,5}"}</p>
        <p className="mt-2 text-green-600 font-semibold">MST Complete! Total Weight: 2+3+5+6+11 = 27</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Complexity Analysis</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Algorithm</th>
            <th className="p-3 border">Time Complexity</th>
            <th className="p-3 border">Space Complexity</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Kruskal's</td>
            <td className="p-3 border">O(E log E)</td>
            <td className="p-3 border">O(E + V)</td>
          </tr>
          <tr>
            <td className="p-3 border">Prim's (Binary Heap)</td>
            <td className="p-3 border">O(E log V)</td>
            <td className="p-3 border">O(V)</td>
          </tr>
          <tr>
            <td className="p-3 border">Prim's (Fibonacci Heap)</td>
            <td className="p-3 border">O(E + V log V)</td>
            <td className="p-3 border">O(V)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Kruskal's vs Prim's</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Kruskal's</th>
            <th className="p-3 border">Prim's</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Approach</td>
            <td className="p-3 border">Edge-based</td>
            <td className="p-3 border">Vertex-based</td>
          </tr>
          <tr>
            <td className="p-3 border">Data Structure</td>
            <td className="p-3 border">Union-Find</td>
            <td className="p-3 border">Priority Queue</td>
          </tr>
          <tr>
            <td className="p-3 border">Better For</td>
            <td className="p-3 border">Sparse graphs</td>
            <td className="p-3 border">Dense graphs</td>
          </tr>
          <tr>
            <td className="p-3 border">Initial Step</td>
            <td className="p-3 border">Sort all edges</td>
            <td className="p-3 border">Start from any vertex</td>
          </tr>
          <tr>
            <td className="p-3 border">Edge Addition</td>
            <td className="p-3 border">Any valid edge</td>
            <td className="p-3 border">Must connect to existing tree</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Advantages of MST Algorithms</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Efficient:</strong> Both algorithms run in near-linear time</li>
      <li><strong>Greedy:</strong> Simple to understand and implement</li>
      <li><strong>Optimal:</strong> Always produce minimum weight spanning tree</li>
      <li><strong>Versatile:</strong> Foundation for many optimization problems</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Disadvantages</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Undirected Only:</strong> Only works on undirected graphs</li>
      <li><strong>Connected Graphs:</strong> Graph must be connected (or find MST per component)</li>
      <li><strong>Unique MST:</strong> If edge weights are not distinct, multiple MSTs may exist</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Applications</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Network design (minimum cost to connect all nodes)</li>
      <li>Cluster analysis in data mining</li>
      <li>Image segmentation</li>
      <li>Approximation algorithms for NP-hard problems (TSP)</li>
      <li>Circuit design</li>
      <li>Cable TV network planning</li>
      <li>Road network construction</li>
      <li>Taxonomy (evolutionary trees)</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">MST Properties (Cut Property)</h2>
    <div className="bg-gray-100 p-4 rounded-lg">
      <p className="font-semibold">Cut Property:</p>
      <p className="mt-2 text-sm">
        For any cut (partition of vertices into two sets), the minimum weight edge crossing the cut
        must be part of some MST. This is the theoretical foundation for both Kruskal's and Prim's algorithms.
      </p>
      <p className="mt-3 font-semibold">Cycle Property:</p>
      <p className="mt-2 text-sm">
        For any cycle in the graph, the maximum weight edge in the cycle is not part of any MST
        (unless there are ties).
      </p>
    </div>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="text-yellow-700">
        <strong>Note:</strong> If the graph is not connected, you cannot form an MST. Instead, you can
        find an MST for each connected component, resulting in a Minimum Spanning Forest.
      </p>
    </div>

    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
      <p className="text-blue-700">
        <strong>Pro Tip:</strong> Use Kruskal's when you have edges given as a list and need to sort them.
        Use Prim's when you have an adjacency list/matrix representation and want to grow the tree from a starting vertex.
      </p>
    </div>
  </div>
);

export default MST;
