import React from 'react';

const CycleDetection: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Cycle Detection in Graphs
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Cycle detection is the process of finding whether a graph contains a cycle (a path that starts and
      ends at the same vertex). Different approaches are required for undirected and directed graphs.
      Detecting cycles is crucial for many applications including deadlock detection, dependency resolution,
      and validating graph structures.
    </p>

    <h2 className="text-2xl font-bold mt-6">Types of Graphs and Cycles</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-bold text-blue-800">Undirected Graph Cycle</h4>
        <p className="mt-2 text-sm">A cycle exists if we can reach a visited vertex (other than the parent) during traversal.</p>
        <pre className="mt-2 text-xs font-mono">
{`0 --- 1
|     |
3 --- 2
Cycle: 0-1-2-3-0`}
        </pre>
      </div>
      <div className="bg-green-50 p-4 rounded-lg">
        <h4 className="font-bold text-green-800">Directed Graph Cycle</h4>
        <p className="mt-2 text-sm">A cycle exists if we can reach a vertex that is currently in the recursion stack.</p>
        <pre className="mt-2 text-xs font-mono">
{`0 --> 1
^     |
|     v
3 <-- 2
Cycle: 0->1->2->3->0`}
        </pre>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Approaches for Cycle Detection</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
      <div className="bg-gray-100 p-4 rounded-lg">
        <h4 className="font-bold">DFS (Recursion Stack)</h4>
        <p className="mt-2 text-sm">For directed graphs - track vertices in current recursion path.</p>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg">
        <h4 className="font-bold">DFS (Parent Tracking)</h4>
        <p className="mt-2 text-sm">For undirected graphs - check if neighbor is visited but not parent.</p>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg">
        <h4 className="font-bold">Union-Find</h4>
        <p className="mt-2 text-sm">For undirected graphs - if two vertices of an edge are already connected.</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">1. Cycle Detection in Undirected Graph (DFS)</h2>
    <div className="bg-gray-100 p-4 rounded-lg mb-4">
      <p className="font-semibold">Algorithm:</p>
      <ol className="list-decimal list-inside space-y-2 mt-2">
        <li>Perform DFS from each unvisited vertex</li>
        <li>Keep track of visited vertices and the parent of current vertex</li>
        <li>If we reach a visited vertex that is not the parent, cycle exists</li>
      </ol>
    </div>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function hasCycleUndirectedDFS(graph) {
    const V = graph.length;
    const visited = new Array(V).fill(false);

    function dfs(node, parent) {
        visited[node] = true;

        for (const neighbor of graph[node]) {
            if (!visited[neighbor]) {
                // Visit unvisited neighbor
                if (dfs(neighbor, node)) {
                    return true;  // Cycle found in subtree
                }
            } else if (neighbor !== parent) {
                // Visited neighbor that's not parent = cycle!
                return true;
            }
        }
        return false;
    }

    // Check all components
    for (let i = 0; i < V; i++) {
        if (!visited[i]) {
            if (dfs(i, -1)) {
                return true;
            }
        }
    }
    return false;
}

// Undirected graph as adjacency list
const undirectedGraph = [
    [1, 3],     // 0 connected to 1, 3
    [0, 2],     // 1 connected to 0, 2
    [1, 3],     // 2 connected to 1, 3
    [0, 2]      // 3 connected to 0, 2
];

console.log("Has cycle:", hasCycleUndirectedDFS(undirectedGraph));
// Output: true (cycle: 0-1-2-3-0)`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">2. Cycle Detection in Undirected Graph (Union-Find)</h2>
    <div className="bg-gray-100 p-4 rounded-lg mb-4">
      <p className="font-semibold">Algorithm:</p>
      <ol className="list-decimal list-inside space-y-2 mt-2">
        <li>Initialize each vertex as its own component</li>
        <li>For each edge (u, v), check if u and v are already in same component</li>
        <li>If same component, adding this edge creates a cycle</li>
        <li>Otherwise, union the components</li>
      </ol>
    </div>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`class UnionFind {
    constructor(n) {
        this.parent = Array.from({ length: n }, (_, i) => i);
        this.rank = new Array(n).fill(0);
    }

    find(x) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]);
        }
        return this.parent[x];
    }

    union(x, y) {
        const rootX = this.find(x);
        const rootY = this.find(y);

        if (rootX === rootY) return false;  // Already connected

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

function hasCycleUnionFind(vertices, edges) {
    const uf = new UnionFind(vertices);

    for (const [u, v] of edges) {
        // If already in same component, adding edge creates cycle
        if (uf.find(u) === uf.find(v)) {
            return true;
        }
        uf.union(u, v);
    }
    return false;
}

// Edges of undirected graph
const edges = [[0, 1], [1, 2], [2, 3], [3, 0]];
console.log("Has cycle (Union-Find):", hasCycleUnionFind(4, edges));
// Output: true`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">3. Cycle Detection in Directed Graph (DFS with Colors)</h2>
    <div className="bg-gray-100 p-4 rounded-lg mb-4">
      <p className="font-semibold">Three-Color Algorithm:</p>
      <ul className="list-disc list-inside space-y-1 mt-2">
        <li><strong>WHITE (0):</strong> Vertex not yet visited</li>
        <li><strong>GRAY (1):</strong> Vertex being processed (in current recursion stack)</li>
        <li><strong>BLACK (2):</strong> Vertex completely processed</li>
      </ul>
      <p className="mt-2 text-sm">A cycle exists if we reach a GRAY vertex during DFS.</p>
    </div>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function hasCycleDirectedDFS(graph) {
    const V = graph.length;
    const WHITE = 0, GRAY = 1, BLACK = 2;
    const color = new Array(V).fill(WHITE);

    function dfs(node) {
        color[node] = GRAY;  // Start processing

        for (const neighbor of graph[node]) {
            if (color[neighbor] === GRAY) {
                // Found back edge - cycle detected!
                return true;
            }
            if (color[neighbor] === WHITE) {
                if (dfs(neighbor)) {
                    return true;
                }
            }
        }

        color[node] = BLACK;  // Finished processing
        return false;
    }

    // Check all components
    for (let i = 0; i < V; i++) {
        if (color[i] === WHITE) {
            if (dfs(i)) {
                return true;
            }
        }
    }
    return false;
}

// Directed graph as adjacency list
const directedGraph = [
    [1],        // 0 -> 1
    [2],        // 1 -> 2
    [3],        // 2 -> 3
    [0]         // 3 -> 0 (creates cycle)
];

console.log("Has cycle (Directed):", hasCycleDirectedDFS(directedGraph));
// Output: true`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">4. Cycle Detection using Kahn's Algorithm (BFS)</h2>
    <div className="bg-gray-100 p-4 rounded-lg mb-4">
      <p className="font-semibold">For Directed Graphs:</p>
      <p className="mt-2 text-sm">
        If topological sort cannot include all vertices (some vertices have in-degree {">"} 0
        after processing), then the graph contains a cycle.
      </p>
    </div>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function hasCycleKahn(graph) {
    const V = graph.length;
    const inDegree = new Array(V).fill(0);

    // Calculate in-degrees
    for (let u = 0; u < V; u++) {
        for (const v of graph[u]) {
            inDegree[v]++;
        }
    }

    // Add vertices with in-degree 0 to queue
    const queue = [];
    for (let i = 0; i < V; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
        }
    }

    let processedCount = 0;

    while (queue.length > 0) {
        const u = queue.shift();
        processedCount++;

        for (const v of graph[u]) {
            inDegree[v]--;
            if (inDegree[v] === 0) {
                queue.push(v);
            }
        }
    }

    // If not all vertices processed, cycle exists
    return processedCount !== V;
}

console.log("Has cycle (Kahn's):", hasCycleKahn(directedGraph));
// Output: true`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">5. Find the Cycle (Get Cycle Vertices)</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function findCycleDirected(graph) {
    const V = graph.length;
    const WHITE = 0, GRAY = 1, BLACK = 2;
    const color = new Array(V).fill(WHITE);
    const parent = new Array(V).fill(-1);
    let cycleStart = -1;
    let cycleEnd = -1;

    function dfs(node) {
        color[node] = GRAY;

        for (const neighbor of graph[node]) {
            if (color[neighbor] === GRAY) {
                cycleEnd = node;
                cycleStart = neighbor;
                return true;
            }
            if (color[neighbor] === WHITE) {
                parent[neighbor] = node;
                if (dfs(neighbor)) return true;
            }
        }

        color[node] = BLACK;
        return false;
    }

    for (let i = 0; i < V; i++) {
        if (color[i] === WHITE && dfs(i)) {
            break;
        }
    }

    if (cycleStart === -1) {
        return [];  // No cycle
    }

    // Reconstruct cycle
    const cycle = [cycleStart];
    let current = cycleEnd;
    while (current !== cycleStart) {
        cycle.push(current);
        current = parent[current];
    }
    cycle.push(cycleStart);

    return cycle.reverse();
}

console.log("Cycle vertices:", findCycleDirected(directedGraph));
// Output: [0, 1, 2, 3, 0]`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Visual Walkthrough: DFS Cycle Detection</h2>
    <div className="bg-gray-100 p-4 rounded-lg">
      <p className="font-semibold">Directed Graph: 0 → 1 → 2 → 3 → 0</p>
      <div className="mt-3 space-y-2 text-sm">
        <p><strong>Step 1:</strong> DFS(0): color[0] = GRAY</p>
        <p><strong>Step 2:</strong> DFS(1): color[1] = GRAY (0 is parent)</p>
        <p><strong>Step 3:</strong> DFS(2): color[2] = GRAY</p>
        <p><strong>Step 4:</strong> DFS(3): color[3] = GRAY</p>
        <p><strong>Step 5:</strong> Check neighbor 0: color[0] = GRAY (back edge found!)</p>
        <p className="mt-2 text-red-600 font-semibold">Cycle Detected: 0 → 1 → 2 → 3 → 0</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Complexity Analysis</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Method</th>
            <th className="p-3 border">Graph Type</th>
            <th className="p-3 border">Time</th>
            <th className="p-3 border">Space</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">DFS (Parent)</td>
            <td className="p-3 border">Undirected</td>
            <td className="p-3 border">O(V + E)</td>
            <td className="p-3 border">O(V)</td>
          </tr>
          <tr>
            <td className="p-3 border">Union-Find</td>
            <td className="p-3 border">Undirected</td>
            <td className="p-3 border">O(E * a(V))</td>
            <td className="p-3 border">O(V)</td>
          </tr>
          <tr>
            <td className="p-3 border">DFS (Colors)</td>
            <td className="p-3 border">Directed</td>
            <td className="p-3 border">O(V + E)</td>
            <td className="p-3 border">O(V)</td>
          </tr>
          <tr>
            <td className="p-3 border">Kahn's (BFS)</td>
            <td className="p-3 border">Directed</td>
            <td className="p-3 border">O(V + E)</td>
            <td className="p-3 border">O(V)</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p className="mt-2 text-sm">Note: a(V) is the inverse Ackermann function, practically constant.</p>

    <h2 className="text-2xl font-bold mt-6">Comparison of Methods</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">DFS</th>
            <th className="p-3 border">Union-Find</th>
            <th className="p-3 border">Kahn's</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Implementation</td>
            <td className="p-3 border">Recursive/Iterative</td>
            <td className="p-3 border">Union-Find DS</td>
            <td className="p-3 border">BFS with in-degree</td>
          </tr>
          <tr>
            <td className="p-3 border">Find Cycle Path</td>
            <td className="p-3 border">Yes (with parent tracking)</td>
            <td className="p-3 border">Harder</td>
            <td className="p-3 border">No</td>
          </tr>
          <tr>
            <td className="p-3 border">Best For</td>
            <td className="p-3 border">General use</td>
            <td className="p-3 border">Edge list input</td>
            <td className="p-3 border">Topo sort needed too</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Advantages</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>DFS Methods:</strong> Can find the actual cycle path, not just detect presence</li>
      <li><strong>Union-Find:</strong> Efficient for processing edges one by one (online algorithm)</li>
      <li><strong>Kahn's:</strong> Can simultaneously perform topological sort and cycle detection</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Disadvantages</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>DFS:</strong> Recursion depth can be an issue for very deep graphs</li>
      <li><strong>Union-Find:</strong> Only works for undirected graphs</li>
      <li><strong>Kahn's:</strong> Only detects existence, doesn't give cycle path easily</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Applications</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Deadlock detection in operating systems</li>
      <li>Detecting circular dependencies in build systems</li>
      <li>Validating database schemas (foreign key cycles)</li>
      <li>Course prerequisite validation</li>
      <li>Memory leak detection (circular references)</li>
      <li>Social network analysis</li>
      <li>Compiler optimization (loop detection)</li>
      <li>Transaction dependency analysis in databases</li>
    </ul>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="text-yellow-700">
        <strong>Important:</strong> For undirected graphs, you must track the parent vertex to avoid
        falsely detecting a cycle when revisiting the vertex you just came from.
      </p>
    </div>

    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
      <p className="text-blue-700">
        <strong>Pro Tip:</strong> Use DFS with colors (WHITE, GRAY, BLACK) for directed graphs as it
        clearly distinguishes between vertices in the current path (GRAY) and completely processed
        vertices (BLACK).
      </p>
    </div>
  </div>
);

export default CycleDetection;
