import React from 'react';

const TopologicalSort: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Topological Sort
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Topological Sort is a linear ordering of vertices in a Directed Acyclic Graph (DAG) such
      that for every directed edge (u, v), vertex u comes before vertex v. It is used for
      scheduling tasks with dependencies.
    </p>

    <h2 className="text-2xl font-bold mt-6">Prerequisites</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Graph must be <strong>directed</strong></li>
      <li>Graph must be <strong>acyclic</strong> (no cycles)</li>
      <li>Multiple valid orderings may exist</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Visual Example</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`Graph:
    5 --> 0 <-- 4
    |           |
    v           v
    2 --> 3 --> 1

Edges: 5->0, 5->2, 4->0, 4->1, 2->3, 3->1

Valid Topological Orders:
- 4, 5, 0, 2, 3, 1
- 5, 4, 0, 2, 3, 1
- 5, 4, 2, 0, 3, 1
- 5, 4, 2, 3, 0, 1
- 5, 4, 2, 3, 1, 0
... and more

Key: For every edge u->v, u appears before v`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Method 1: DFS-based (Tarjan's Algorithm)</h2>
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

    addEdge(from, to) {
        this.addVertex(from);
        this.addVertex(to);
        this.adjacencyList.get(from).push(to);
    }

    // DFS-based topological sort
    topologicalSortDFS() {
        const visited = new Set();
        const stack = []; // Will contain topological order

        const dfs = (vertex) => {
            visited.add(vertex);

            const neighbors = this.adjacencyList.get(vertex) || [];

            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    dfs(neighbor);
                }
            }

            // Add to stack AFTER processing all descendants
            stack.push(vertex);
        };

        // Visit all vertices
        for (const vertex of this.adjacencyList.keys()) {
            if (!visited.has(vertex)) {
                dfs(vertex);
            }
        }

        // Reverse stack to get topological order
        return stack.reverse();
    }
}

// Example:
const graph = new Graph();
graph.addEdge(5, 0);
graph.addEdge(5, 2);
graph.addEdge(4, 0);
graph.addEdge(4, 1);
graph.addEdge(2, 3);
graph.addEdge(3, 1);

console.log(graph.topologicalSortDFS());
// Output: [5, 4, 2, 3, 1, 0] or another valid order`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Method 2: Kahn's Algorithm (BFS)</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// BFS-based using in-degree
topologicalSortBFS() {
    const inDegree = new Map();
    const result = [];

    // Initialize in-degree for all vertices
    for (const vertex of this.adjacencyList.keys()) {
        inDegree.set(vertex, 0);
    }

    // Calculate in-degree
    for (const [vertex, neighbors] of this.adjacencyList) {
        for (const neighbor of neighbors) {
            inDegree.set(neighbor, inDegree.get(neighbor) + 1);
        }
    }

    // Queue for vertices with in-degree 0
    const queue = [];
    for (const [vertex, degree] of inDegree) {
        if (degree === 0) {
            queue.push(vertex);
        }
    }

    while (queue.length > 0) {
        const vertex = queue.shift();
        result.push(vertex);

        const neighbors = this.adjacencyList.get(vertex) || [];

        for (const neighbor of neighbors) {
            const newDegree = inDegree.get(neighbor) - 1;
            inDegree.set(neighbor, newDegree);

            if (newDegree === 0) {
                queue.push(neighbor);
            }
        }
    }

    // Check if topological sort is possible
    if (result.length !== this.adjacencyList.size) {
        throw new Error("Graph has a cycle - topological sort not possible");
    }

    return result;
}

// Example:
console.log(graph.topologicalSortBFS());
// Output: [4, 5, 0, 2, 3, 1] or another valid order`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">All Topological Orderings</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Find all possible topological orderings
allTopologicalSorts() {
    const inDegree = new Map();
    const results = [];
    const visited = new Set();
    const current = [];

    // Initialize in-degree
    for (const vertex of this.adjacencyList.keys()) {
        inDegree.set(vertex, 0);
    }

    for (const [vertex, neighbors] of this.adjacencyList) {
        for (const neighbor of neighbors) {
            inDegree.set(neighbor, inDegree.get(neighbor) + 1);
        }
    }

    const backtrack = () => {
        if (current.length === this.adjacencyList.size) {
            results.push([...current]);
            return;
        }

        for (const vertex of this.adjacencyList.keys()) {
            if (!visited.has(vertex) && inDegree.get(vertex) === 0) {
                // Choose vertex
                visited.add(vertex);
                current.push(vertex);

                // Reduce in-degree of neighbors
                for (const neighbor of this.adjacencyList.get(vertex)) {
                    inDegree.set(neighbor, inDegree.get(neighbor) - 1);
                }

                // Recurse
                backtrack();

                // Unchoose (backtrack)
                visited.delete(vertex);
                current.pop();

                // Restore in-degrees
                for (const neighbor of this.adjacencyList.get(vertex)) {
                    inDegree.set(neighbor, inDegree.get(neighbor) + 1);
                }
            }
        }
    };

    backtrack();
    return results;
}

// This generates ALL valid topological orderings`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Practical Example: Course Schedule</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Given courses and prerequisites, find valid order to take courses
function findOrder(numCourses, prerequisites) {
    // Build graph
    const graph = new Map();
    const inDegree = new Array(numCourses).fill(0);

    for (let i = 0; i < numCourses; i++) {
        graph.set(i, []);
    }

    // prerequisites[i] = [course, prerequisite]
    // prerequisite -> course
    for (const [course, prereq] of prerequisites) {
        graph.get(prereq).push(course);
        inDegree[course]++;
    }

    // Kahn's algorithm
    const queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
        }
    }

    const order = [];

    while (queue.length > 0) {
        const course = queue.shift();
        order.push(course);

        for (const next of graph.get(course)) {
            inDegree[next]--;
            if (inDegree[next] === 0) {
                queue.push(next);
            }
        }
    }

    // If we couldn't schedule all courses, there's a cycle
    return order.length === numCourses ? order : [];
}

// Example:
// numCourses = 4
// prerequisites = [[1,0], [2,0], [3,1], [3,2]]
// Meaning: 0->1, 0->2, 1->3, 2->3

console.log(findOrder(4, [[1,0], [2,0], [3,1], [3,2]]));
// Output: [0, 1, 2, 3] or [0, 2, 1, 3]`}</pre>
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
            <td className="p-3 border">DFS-based</td>
            <td className="p-3 border">O(V + E)</td>
            <td className="p-3 border">O(V)</td>
          </tr>
          <tr>
            <td className="p-3 border">Kahn's (BFS)</td>
            <td className="p-3 border">O(V + E)</td>
            <td className="p-3 border">O(V)</td>
          </tr>
          <tr>
            <td className="p-3 border">All orderings</td>
            <td className="p-3 border">O(V! * V)</td>
            <td className="p-3 border">O(V! * V)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">DFS vs Kahn's Algorithm</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">DFS</th>
            <th className="p-3 border">Kahn's (BFS)</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Approach</td>
            <td className="p-3 border">Post-order traversal</td>
            <td className="p-3 border">In-degree based</td>
          </tr>
          <tr>
            <td className="p-3 border">Cycle Detection</td>
            <td className="p-3 border">Needs extra logic</td>
            <td className="p-3 border">Built-in</td>
          </tr>
          <tr>
            <td className="p-3 border">Implementation</td>
            <td className="p-3 border">Recursive/Stack</td>
            <td className="p-3 border">Queue</td>
          </tr>
          <tr>
            <td className="p-3 border">Preferred When</td>
            <td className="p-3 border">Already doing DFS</td>
            <td className="p-3 border">Need level-by-level processing</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Applications</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Task Scheduling:</strong> Order tasks with dependencies</li>
      <li><strong>Course Prerequisites:</strong> Determine course order</li>
      <li><strong>Build Systems:</strong> Compile dependencies in correct order</li>
      <li><strong>Package Management:</strong> Install packages with dependencies</li>
      <li><strong>Spreadsheets:</strong> Calculate cells in dependency order</li>
      <li><strong>Data Processing:</strong> Order pipeline stages</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Key Points</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Only possible for DAGs (Directed Acyclic Graphs)</li>
      <li>Multiple valid orderings may exist</li>
      <li>DFS: add vertex after all descendants processed</li>
      <li>Kahn's: process vertices with in-degree 0 first</li>
      <li>Both methods have O(V + E) time complexity</li>
    </ul>
  </div>
);

export default TopologicalSort;
