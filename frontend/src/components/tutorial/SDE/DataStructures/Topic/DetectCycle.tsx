import React from 'react';

const DetectCycle: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Detect Cycle in Graph
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Cycle detection is a fundamental graph problem. A cycle exists when there is a path that
      starts and ends at the same vertex. The approach differs for directed and undirected graphs.
    </p>

    <h2 className="text-2xl font-bold mt-6">Cycle in Undirected Graph</h2>
    <p className="leading-relaxed">
      In an undirected graph, a cycle exists if we visit a vertex that is already visited and
      is not the parent of the current vertex.
    </p>

    <h3 className="text-xl font-bold mt-4">Using DFS</h3>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }

    addEdge(v1, v2) {
        this.addVertex(v1);
        this.addVertex(v2);
        this.adjacencyList.get(v1).push(v2);
        this.adjacencyList.get(v2).push(v1);
    }

    // Detect cycle in undirected graph using DFS
    hasCycleUndirected() {
        const visited = new Set();

        // DFS helper function
        const dfs = (vertex, parent) => {
            visited.add(vertex);

            const neighbors = this.adjacencyList.get(vertex) || [];

            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    // Recurse for unvisited neighbor
                    if (dfs(neighbor, vertex)) {
                        return true;
                    }
                } else if (neighbor !== parent) {
                    // Visited vertex that's not parent = cycle!
                    return true;
                }
            }

            return false;
        };

        // Check all components (graph might be disconnected)
        for (const vertex of this.adjacencyList.keys()) {
            if (!visited.has(vertex)) {
                if (dfs(vertex, -1)) {
                    return true;
                }
            }
        }

        return false;
    }
}

// Example:
const graph = new Graph();
graph.addEdge(0, 1);
graph.addEdge(1, 2);
graph.addEdge(2, 0); // Creates cycle

console.log(graph.hasCycleUndirected()); // true

/*
    0 --- 1
     \\   /
      \\ /
       2

Cycle: 0 -> 1 -> 2 -> 0
*/`}</pre>
    </div>

    <h3 className="text-xl font-bold mt-4">Using Union-Find</h3>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`class UnionFind {
    constructor(n) {
        this.parent = Array.from({ length: n }, (_, i) => i);
        this.rank = new Array(n).fill(0);
    }

    find(x) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]); // Path compression
        }
        return this.parent[x];
    }

    union(x, y) {
        const rootX = this.find(x);
        const rootY = this.find(y);

        if (rootX === rootY) {
            return false; // Already in same set - cycle detected!
        }

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

function hasCycleUnionFind(edges, numVertices) {
    const uf = new UnionFind(numVertices);

    for (const [u, v] of edges) {
        if (!uf.union(u, v)) {
            return true; // Cycle detected
        }
    }

    return false;
}

// Example:
const edges = [[0, 1], [1, 2], [2, 0]];
console.log(hasCycleUnionFind(edges, 3)); // true`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Cycle in Directed Graph</h2>
    <p className="leading-relaxed">
      In a directed graph, we need to track vertices in the current recursion stack.
      A back edge (edge to a vertex in current stack) indicates a cycle.
    </p>

    <h3 className="text-xl font-bold mt-4">Using DFS with Recursion Stack</h3>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`class DirectedGraph {
    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }

    addEdge(from, to) {
        this.addVertex(from);
        this.addVertex(to);
        this.adjacencyList.get(from).push(to);
    }

    // Detect cycle using DFS with recursion stack
    hasCycleDirected() {
        const visited = new Set();
        const recStack = new Set(); // Vertices in current recursion path

        const dfs = (vertex) => {
            visited.add(vertex);
            recStack.add(vertex);

            const neighbors = this.adjacencyList.get(vertex) || [];

            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    if (dfs(neighbor)) {
                        return true;
                    }
                } else if (recStack.has(neighbor)) {
                    // Back edge found - cycle!
                    return true;
                }
            }

            recStack.delete(vertex); // Remove from recursion stack when backtracking
            return false;
        };

        // Check all vertices
        for (const vertex of this.adjacencyList.keys()) {
            if (!visited.has(vertex)) {
                if (dfs(vertex)) {
                    return true;
                }
            }
        }

        return false;
    }
}

// Example:
const dirGraph = new DirectedGraph();
dirGraph.addEdge(0, 1);
dirGraph.addEdge(1, 2);
dirGraph.addEdge(2, 0); // Creates cycle

console.log(dirGraph.hasCycleDirected()); // true

/*
    0 --> 1
    ^     |
    |     v
    +---- 2

Cycle: 0 -> 1 -> 2 -> 0
*/`}</pre>
    </div>

    <h3 className="text-xl font-bold mt-4">Using Coloring (White-Gray-Black)</h3>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Three colors:
// WHITE (0): Not visited
// GRAY (1): Being processed (in recursion stack)
// BLACK (2): Completely processed

function hasCycleColoring(graph) {
    const color = new Map();

    // Initialize all vertices as WHITE
    for (const vertex of graph.adjacencyList.keys()) {
        color.set(vertex, 0); // WHITE
    }

    const dfs = (vertex) => {
        color.set(vertex, 1); // GRAY - processing

        const neighbors = graph.adjacencyList.get(vertex) || [];

        for (const neighbor of neighbors) {
            if (color.get(neighbor) === 1) {
                // GRAY neighbor = back edge = cycle
                return true;
            }

            if (color.get(neighbor) === 0) {
                // WHITE neighbor - explore
                if (dfs(neighbor)) {
                    return true;
                }
            }
            // BLACK neighbor - already processed, skip
        }

        color.set(vertex, 2); // BLACK - done
        return false;
    };

    for (const vertex of graph.adjacencyList.keys()) {
        if (color.get(vertex) === 0) {
            if (dfs(vertex)) {
                return true;
            }
        }
    }

    return false;
}`}</pre>
    </div>

    <h3 className="text-xl font-bold mt-4">Using Kahn's Algorithm (BFS)</h3>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// If topological sort is not possible (not all vertices processed),
// then there's a cycle

function hasCycleKahns(graph) {
    const inDegree = new Map();
    const vertices = [...graph.adjacencyList.keys()];

    // Initialize in-degrees
    for (const v of vertices) {
        inDegree.set(v, 0);
    }

    // Calculate in-degrees
    for (const [vertex, neighbors] of graph.adjacencyList) {
        for (const neighbor of neighbors) {
            inDegree.set(neighbor, inDegree.get(neighbor) + 1);
        }
    }

    // Queue for vertices with in-degree 0
    const queue = vertices.filter(v => inDegree.get(v) === 0);
    let processedCount = 0;

    while (queue.length > 0) {
        const vertex = queue.shift();
        processedCount++;

        const neighbors = graph.adjacencyList.get(vertex) || [];

        for (const neighbor of neighbors) {
            const newDegree = inDegree.get(neighbor) - 1;
            inDegree.set(neighbor, newDegree);

            if (newDegree === 0) {
                queue.push(neighbor);
            }
        }
    }

    // If not all vertices processed, there's a cycle
    return processedCount !== vertices.length;
}

// Example:
console.log(hasCycleKahns(dirGraph)); // true`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Time and Space Complexity</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Method</th>
            <th className="p-3 border">Time</th>
            <th className="p-3 border">Space</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">DFS (Undirected)</td>
            <td className="p-3 border">O(V + E)</td>
            <td className="p-3 border">O(V)</td>
          </tr>
          <tr>
            <td className="p-3 border">Union-Find</td>
            <td className="p-3 border">O(E * alpha(V))</td>
            <td className="p-3 border">O(V)</td>
          </tr>
          <tr>
            <td className="p-3 border">DFS (Directed)</td>
            <td className="p-3 border">O(V + E)</td>
            <td className="p-3 border">O(V)</td>
          </tr>
          <tr>
            <td className="p-3 border">Kahn's Algorithm</td>
            <td className="p-3 border">O(V + E)</td>
            <td className="p-3 border">O(V)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Key Differences: Directed vs Undirected</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Undirected</th>
            <th className="p-3 border">Directed</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Detection</td>
            <td className="p-3 border">Visited + not parent</td>
            <td className="p-3 border">In recursion stack</td>
          </tr>
          <tr>
            <td className="p-3 border">Parent tracking</td>
            <td className="p-3 border">Required</td>
            <td className="p-3 border">Not needed</td>
          </tr>
          <tr>
            <td className="p-3 border">Union-Find</td>
            <td className="p-3 border">Works</td>
            <td className="p-3 border">Does not work</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Key Points</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Undirected: back edge to non-parent vertex indicates cycle</li>
      <li>Directed: back edge to vertex in recursion stack indicates cycle</li>
      <li>Union-Find is efficient for undirected graphs with edge list</li>
      <li>Kahn's algorithm can detect cycles while doing topological sort</li>
      <li>All methods have O(V + E) time complexity</li>
    </ul>
  </div>
);

export default DetectCycle;
