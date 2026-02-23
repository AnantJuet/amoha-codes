import React from 'react';

const KruskalsAlgorithm: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Kruskal's Algorithm
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Kruskal's Algorithm is a greedy algorithm that finds a Minimum Spanning Tree (MST) for a weighted
      undirected graph. It works by sorting all edges by weight and adding them one by one to the MST,
      as long as they don't create a cycle.
    </p>

    <h2 className="text-2xl font-bold mt-6">Key Concept: Union-Find</h2>
    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
      <p>Kruskal's uses <strong>Union-Find (Disjoint Set Union)</strong> to efficiently:</p>
      <ul className="list-disc list-inside mt-2 text-sm">
        <li><strong>Find:</strong> Determine which component a vertex belongs to</li>
        <li><strong>Union:</strong> Merge two components when adding an edge</li>
        <li>Detect cycles: If two vertices are in the same component, adding an edge creates a cycle</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold mt-6">Algorithm Steps</h2>
    <ol className="list-decimal list-inside space-y-2">
      <li>Sort all edges in ascending order of weight</li>
      <li>Initialize each vertex as its own component (Union-Find)</li>
      <li>For each edge (in sorted order):</li>
      <li className="ml-6">If the two vertices are in different components:</li>
      <li className="ml-10">Add edge to MST</li>
      <li className="ml-10">Union the two components</li>
      <li className="ml-6">Else skip (would create cycle)</li>
      <li>Stop when MST has V-1 edges</li>
    </ol>

    <h2 className="text-2xl font-bold mt-6">Visual Example</h2>
    <div className="bg-gray-100 p-4 rounded-lg">
      <p className="font-semibold">Graph Edges (sorted by weight):</p>
      <p className="text-sm">B-C: 1, A-B: 2, A-C: 3, B-D: 4, C-D: 5, C-E: 6, D-E: 7</p>

      <div className="mt-4 font-mono text-sm space-y-3">
        <p className="text-blue-600 font-bold">Initial: Each vertex is its own component</p>
        <p>Components: {'{A}, {B}, {C}, {D}, {E}'}</p>

        <p className="text-green-600 font-bold mt-2">Edge B-C (weight=1):</p>
        <p>B and C in different components - ADD</p>
        <p>Components: {'{A}, {B,C}, {D}, {E}'}</p>

        <p className="text-green-600 font-bold mt-2">Edge A-B (weight=2):</p>
        <p>A and B in different components - ADD</p>
        <p>Components: {'{A,B,C}, {D}, {E}'}</p>

        <p className="text-red-600 font-bold mt-2">Edge A-C (weight=3):</p>
        <p>A and C in same component - SKIP (would create cycle)</p>

        <p className="text-green-600 font-bold mt-2">Edge B-D (weight=4):</p>
        <p>B and D in different components - ADD</p>
        <p>Components: {'{A,B,C,D}, {E}'}</p>

        <p className="text-red-600 font-bold mt-2">Edge C-D (weight=5):</p>
        <p>C and D in same component - SKIP</p>

        <p className="text-green-600 font-bold mt-2">Edge C-E (weight=6):</p>
        <p>C and E in different components - ADD</p>
        <p>Components: {'{A,B,C,D,E}'}</p>

        <p className="text-green-600 font-bold mt-4">MST Edges: B-C(1), A-B(2), B-D(4), C-E(6)</p>
        <p className="text-green-600 font-bold">Total Weight: 1 + 2 + 4 + 6 = 13</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Union-Find Implementation</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`class UnionFind {
    constructor(n) {
        this.parent = Array.from({ length: n }, (_, i) => i);
        this.rank = new Array(n).fill(0);
    }

    // Find with path compression
    find(x) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]);
        }
        return this.parent[x];
    }

    // Union by rank
    union(x, y) {
        const rootX = this.find(x);
        const rootY = this.find(y);

        if (rootX === rootY) return false; // Already in same set

        // Attach smaller tree under larger tree
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

    // Check if two elements are in same set
    connected(x, y) {
        return this.find(x) === this.find(y);
    }
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Kruskal's Algorithm Implementation</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function kruskalsAlgorithm(vertices, edges) {
    // Sort edges by weight
    edges.sort((a, b) => a.weight - b.weight);

    const uf = new UnionFind(vertices);
    const mstEdges = [];
    let totalWeight = 0;

    for (const edge of edges) {
        const { from, to, weight } = edge;

        // If adding this edge doesn't create a cycle
        if (!uf.connected(from, to)) {
            uf.union(from, to);
            mstEdges.push(edge);
            totalWeight += weight;

            // MST complete when we have V-1 edges
            if (mstEdges.length === vertices - 1) break;
        }
    }

    return { edges: mstEdges, totalWeight };
}

// Example
const vertices = 5; // A=0, B=1, C=2, D=3, E=4
const edges = [
    { from: 0, to: 1, weight: 2 },  // A-B
    { from: 0, to: 2, weight: 3 },  // A-C
    { from: 1, to: 2, weight: 1 },  // B-C
    { from: 1, to: 3, weight: 4 },  // B-D
    { from: 2, to: 3, weight: 5 },  // C-D
    { from: 2, to: 4, weight: 6 },  // C-E
    { from: 3, to: 4, weight: 7 }   // D-E
];

const result = kruskalsAlgorithm(vertices, edges);
console.log("MST Edges:", result.edges);
console.log("Total Weight:", result.totalWeight); // 13`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Complete Example with Labels</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function kruskalsWithLabels(vertexLabels, edges) {
    const n = vertexLabels.length;
    const labelToIndex = {};
    vertexLabels.forEach((label, i) => labelToIndex[label] = i);

    // Convert labeled edges to indexed edges
    const indexedEdges = edges.map(e => ({
        from: labelToIndex[e.from],
        to: labelToIndex[e.to],
        weight: e.weight,
        label: \`\${e.from}-\${e.to}\`
    }));

    // Sort by weight
    indexedEdges.sort((a, b) => a.weight - b.weight);

    const uf = new UnionFind(n);
    const mst = [];
    let total = 0;

    for (const edge of indexedEdges) {
        if (!uf.connected(edge.from, edge.to)) {
            uf.union(edge.from, edge.to);
            mst.push(edge);
            total += edge.weight;
            console.log(\`Added: \${edge.label} (weight=\${edge.weight})\`);

            if (mst.length === n - 1) break;
        } else {
            console.log(\`Skipped: \${edge.label} (would create cycle)\`);
        }
    }

    return { mst, total };
}

// Example
const labels = ['A', 'B', 'C', 'D', 'E'];
const graphEdges = [
    { from: 'A', to: 'B', weight: 2 },
    { from: 'A', to: 'C', weight: 3 },
    { from: 'B', to: 'C', weight: 1 },
    { from: 'B', to: 'D', weight: 4 },
    { from: 'C', to: 'D', weight: 5 },
    { from: 'C', to: 'E', weight: 6 },
    { from: 'D', to: 'E', weight: 7 }
];

kruskalsWithLabels(labels, graphEdges);`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Complexity Analysis</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Operation</th>
            <th className="p-3 border">Time Complexity</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Sorting edges</td>
            <td className="p-3 border">O(E log E)</td>
          </tr>
          <tr>
            <td className="p-3 border">Union-Find operations</td>
            <td className="p-3 border">O(E * alpha(V))</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Total</td>
            <td className="p-3 border font-bold">O(E log E) or O(E log V)</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p className="mt-2 text-sm">alpha(V) is the inverse Ackermann function, effectively constant</p>
    <p className="mt-2"><strong>Space Complexity:</strong> O(V) for Union-Find</p>

    <h2 className="text-2xl font-bold mt-6">Kruskal's vs Prim's</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left text-sm">
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
            <td className="p-3 border">Better for</td>
            <td className="p-3 border">Sparse graphs</td>
            <td className="p-3 border">Dense graphs</td>
          </tr>
          <tr>
            <td className="p-3 border">Complexity</td>
            <td className="p-3 border">O(E log E)</td>
            <td className="p-3 border">O((V+E) log V)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Advantages</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Simple and intuitive edge-based approach</li>
      <li>Efficient for sparse graphs</li>
      <li>Works well when edges are already sorted</li>
      <li>Can work with disconnected graphs (finds MSF)</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Disadvantages</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Requires sorting all edges first</li>
      <li>Less efficient for dense graphs than Prim's</li>
      <li>Requires Union-Find data structure</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Applications</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Network design (telecommunications, electrical grids)</li>
      <li>Cluster analysis</li>
      <li>Image segmentation</li>
      <li>Approximation algorithms (TSP, Steiner tree)</li>
      <li>Circuit design</li>
    </ul>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="text-yellow-700">
        <strong>Tip:</strong> Kruskal's algorithm is preferred for sparse graphs (E is close to V).
        For dense graphs (E is close to V^2), Prim's with adjacency matrix is often faster.
      </p>
    </div>
  </div>
);

export default KruskalsAlgorithm;
