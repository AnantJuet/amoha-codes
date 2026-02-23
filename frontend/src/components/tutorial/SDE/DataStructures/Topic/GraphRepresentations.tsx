import React from 'react';

const GraphRepresentations: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Graph Representations
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      There are multiple ways to represent a graph in memory. The choice of representation
      affects the efficiency of graph algorithms. The two most common representations are
      Adjacency Matrix and Adjacency List.
    </p>

    <h2 className="text-2xl font-bold mt-6">1. Adjacency Matrix</h2>
    <p className="leading-relaxed">
      A 2D array of size V x V where V is the number of vertices. If there is an edge from
      vertex i to vertex j, then matrix[i][j] = 1 (or the weight for weighted graphs).
    </p>

    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`class GraphMatrix {
    constructor(numVertices) {
        this.numVertices = numVertices;
        // Initialize matrix with zeros
        this.matrix = Array(numVertices).fill(null)
            .map(() => Array(numVertices).fill(0));
    }

    // Add edge (undirected graph)
    addEdge(v1, v2, weight = 1) {
        this.matrix[v1][v2] = weight;
        this.matrix[v2][v1] = weight; // Remove for directed graph
    }

    // Remove edge
    removeEdge(v1, v2) {
        this.matrix[v1][v2] = 0;
        this.matrix[v2][v1] = 0;
    }

    // Check if edge exists
    hasEdge(v1, v2) {
        return this.matrix[v1][v2] !== 0;
    }

    // Get all neighbors of a vertex
    getNeighbors(vertex) {
        const neighbors = [];
        for (let i = 0; i < this.numVertices; i++) {
            if (this.matrix[vertex][i] !== 0) {
                neighbors.push(i);
            }
        }
        return neighbors;
    }

    // Get degree of a vertex
    getDegree(vertex) {
        return this.getNeighbors(vertex).length;
    }

    // Print the matrix
    print() {
        console.log("Adjacency Matrix:");
        for (let i = 0; i < this.numVertices; i++) {
            console.log(this.matrix[i].join(" "));
        }
    }
}

// Example usage:
const graph = new GraphMatrix(4);
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 2);
graph.addEdge(2, 3);

graph.print();
/*
  0 1 2 3
0 [0 1 1 0]
1 [1 0 1 0]
2 [1 1 0 1]
3 [0 0 1 0]
*/`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">2. Adjacency List</h2>
    <p className="leading-relaxed">
      An array of lists where each index represents a vertex and contains a list of its
      adjacent vertices. More space-efficient for sparse graphs.
    </p>

    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`class GraphList {
    constructor() {
        this.adjacencyList = new Map();
    }

    // Add vertex
    addVertex(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }

    // Add edge (undirected graph)
    addEdge(v1, v2, weight = 1) {
        // Add vertices if they don't exist
        this.addVertex(v1);
        this.addVertex(v2);

        // Add edge with weight
        this.adjacencyList.get(v1).push({ node: v2, weight });
        this.adjacencyList.get(v2).push({ node: v1, weight }); // Remove for directed
    }

    // Add directed edge
    addDirectedEdge(from, to, weight = 1) {
        this.addVertex(from);
        this.addVertex(to);
        this.adjacencyList.get(from).push({ node: to, weight });
    }

    // Remove edge
    removeEdge(v1, v2) {
        this.adjacencyList.set(v1,
            this.adjacencyList.get(v1).filter(v => v.node !== v2)
        );
        this.adjacencyList.set(v2,
            this.adjacencyList.get(v2).filter(v => v.node !== v1)
        );
    }

    // Remove vertex
    removeVertex(vertex) {
        // Remove all edges to this vertex
        for (const [v, neighbors] of this.adjacencyList) {
            this.adjacencyList.set(v,
                neighbors.filter(n => n.node !== vertex)
            );
        }
        // Remove the vertex
        this.adjacencyList.delete(vertex);
    }

    // Get neighbors
    getNeighbors(vertex) {
        return this.adjacencyList.get(vertex) || [];
    }

    // Check if edge exists
    hasEdge(v1, v2) {
        const neighbors = this.adjacencyList.get(v1);
        if (!neighbors) return false;
        return neighbors.some(n => n.node === v2);
    }

    // Get all vertices
    getVertices() {
        return Array.from(this.adjacencyList.keys());
    }

    // Print the graph
    print() {
        console.log("Adjacency List:");
        for (const [vertex, neighbors] of this.adjacencyList) {
            const edges = neighbors.map(n => \`\${n.node}(\${n.weight})\`).join(", ");
            console.log(\`\${vertex} -> \${edges}\`);
        }
    }
}

// Example usage:
const graph = new GraphList();
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 2);
graph.addEdge(2, 3);

graph.print();
/*
0 -> 1(1), 2(1)
1 -> 0(1), 2(1)
2 -> 0(1), 1(1), 3(1)
3 -> 2(1)
*/`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">3. Edge List</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`class GraphEdgeList {
    constructor() {
        this.edges = [];
        this.vertices = new Set();
    }

    addEdge(from, to, weight = 1) {
        this.edges.push({ from, to, weight });
        this.vertices.add(from);
        this.vertices.add(to);
    }

    getEdges() {
        return this.edges;
    }

    getVertices() {
        return Array.from(this.vertices);
    }

    // Get neighbors of a vertex
    getNeighbors(vertex) {
        const neighbors = [];
        for (const edge of this.edges) {
            if (edge.from === vertex) neighbors.push(edge.to);
            if (edge.to === vertex) neighbors.push(edge.from);
        }
        return neighbors;
    }
}

// Example:
const graph = new GraphEdgeList();
graph.addEdge(0, 1, 5);
graph.addEdge(0, 2, 3);
graph.addEdge(1, 2, 2);

console.log(graph.getEdges());
// [{from: 0, to: 1, weight: 5}, {from: 0, to: 2, weight: 3}, ...]`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Comparison of Representations</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Operation</th>
            <th className="p-3 border">Adjacency Matrix</th>
            <th className="p-3 border">Adjacency List</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Space</td>
            <td className="p-3 border">O(V^2)</td>
            <td className="p-3 border">O(V + E)</td>
          </tr>
          <tr>
            <td className="p-3 border">Check Edge</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">O(degree)</td>
          </tr>
          <tr>
            <td className="p-3 border">Add Edge</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">O(1)</td>
          </tr>
          <tr>
            <td className="p-3 border">Remove Edge</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">O(degree)</td>
          </tr>
          <tr>
            <td className="p-3 border">Get Neighbors</td>
            <td className="p-3 border">O(V)</td>
            <td className="p-3 border">O(degree)</td>
          </tr>
          <tr>
            <td className="p-3 border">Add Vertex</td>
            <td className="p-3 border">O(V^2)</td>
            <td className="p-3 border">O(1)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">When to Use Which?</h2>
    <div className="space-y-4 mt-4">
      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-bold">Use Adjacency Matrix when:</h4>
        <ul className="list-disc list-inside mt-2">
          <li>Graph is dense (many edges)</li>
          <li>Need to quickly check if edge exists</li>
          <li>Number of vertices is small</li>
          <li>Performing matrix operations on the graph</li>
        </ul>
      </div>
      <div className="bg-green-50 p-4 rounded-lg">
        <h4 className="font-bold">Use Adjacency List when:</h4>
        <ul className="list-disc list-inside mt-2">
          <li>Graph is sparse (few edges)</li>
          <li>Need to iterate over all edges efficiently</li>
          <li>Memory is a concern</li>
          <li>Frequently adding/removing vertices</li>
        </ul>
      </div>
      <div className="bg-yellow-50 p-4 rounded-lg">
        <h4 className="font-bold">Use Edge List when:</h4>
        <ul className="list-disc list-inside mt-2">
          <li>Need to process all edges (like in Kruskal's algorithm)</li>
          <li>Graph is very sparse</li>
          <li>Simple representation is preferred</li>
        </ul>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Converting Between Representations</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Matrix to Adjacency List
function matrixToList(matrix) {
    const list = new Map();
    const n = matrix.length;

    for (let i = 0; i < n; i++) {
        list.set(i, []);
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] !== 0) {
                list.get(i).push({ node: j, weight: matrix[i][j] });
            }
        }
    }

    return list;
}

// Adjacency List to Matrix
function listToMatrix(list, numVertices) {
    const matrix = Array(numVertices).fill(null)
        .map(() => Array(numVertices).fill(0));

    for (const [vertex, neighbors] of list) {
        for (const { node, weight } of neighbors) {
            matrix[vertex][node] = weight;
        }
    }

    return matrix;
}

// Edge List to Adjacency List
function edgeListToAdjList(edges, directed = false) {
    const list = new Map();

    for (const { from, to, weight } of edges) {
        if (!list.has(from)) list.set(from, []);
        if (!list.has(to)) list.set(to, []);

        list.get(from).push({ node: to, weight });
        if (!directed) {
            list.get(to).push({ node: from, weight });
        }
    }

    return list;
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Key Points</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Adjacency Matrix: O(V^2) space, O(1) edge lookup</li>
      <li>Adjacency List: O(V+E) space, O(degree) edge lookup</li>
      <li>Most graph algorithms work better with adjacency lists</li>
      <li>Matrix is better for dense graphs and edge existence queries</li>
      <li>Choose based on graph density and required operations</li>
    </ul>
  </div>
);

export default GraphRepresentations;
