import React from 'react';

const DFS: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Depth-First Search (DFS)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Depth-First Search (DFS) is a graph traversal algorithm that explores as far as possible
      along each branch before backtracking. It uses a stack (or recursion) and is fundamental
      for many graph algorithms like cycle detection and topological sorting.
    </p>

    <h2 className="text-2xl font-bold mt-6">How DFS Works</h2>
    <ol className="list-decimal list-inside space-y-2">
      <li>Start from a source vertex and mark it as visited</li>
      <li>Explore an unvisited neighbor recursively</li>
      <li>When no unvisited neighbors exist, backtrack</li>
      <li>Repeat until all reachable vertices are visited</li>
    </ol>

    <h2 className="text-2xl font-bold mt-6">DFS Implementation (Recursive)</h2>
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
        this.adjacencyList.get(v2).push(v1); // Remove for directed graph
    }

    // Recursive DFS
    dfsRecursive(start) {
        const result = [];
        const visited = new Set();

        const dfs = (vertex) => {
            visited.add(vertex);
            result.push(vertex);

            const neighbors = this.adjacencyList.get(vertex) || [];

            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    dfs(neighbor);
                }
            }
        };

        dfs(start);
        return result;
    }

    // DFS for all vertices (handles disconnected graphs)
    dfsAll() {
        const result = [];
        const visited = new Set();

        const dfs = (vertex) => {
            visited.add(vertex);
            result.push(vertex);

            const neighbors = this.adjacencyList.get(vertex) || [];

            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    dfs(neighbor);
                }
            }
        };

        // Visit all vertices
        for (const vertex of this.adjacencyList.keys()) {
            if (!visited.has(vertex)) {
                dfs(vertex);
            }
        }

        return result;
    }
}

// Example:
const graph = new Graph();
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 3);
graph.addEdge(1, 4);
graph.addEdge(2, 5);
graph.addEdge(2, 6);

console.log(graph.dfsRecursive(0));
// Output: [0, 1, 3, 4, 2, 5, 6]

/*
Visual:
        0
       / \\
      1   2
     / \\ / \\
    3  4 5  6

DFS explores: 0 -> 1 -> 3 -> (backtrack) -> 4 -> (backtrack) -> 2 -> 5 -> 6
*/`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">DFS Implementation (Iterative)</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Iterative DFS using explicit stack
dfsIterative(start) {
    const result = [];
    const visited = new Set();
    const stack = [start];

    while (stack.length > 0) {
        const vertex = stack.pop();

        if (!visited.has(vertex)) {
            visited.add(vertex);
            result.push(vertex);

            // Add neighbors to stack (in reverse for same order as recursive)
            const neighbors = this.adjacencyList.get(vertex) || [];
            for (let i = neighbors.length - 1; i >= 0; i--) {
                if (!visited.has(neighbors[i])) {
                    stack.push(neighbors[i]);
                }
            }
        }
    }

    return result;
}

// Example:
console.log(graph.dfsIterative(0));
// Output: [0, 1, 3, 4, 2, 5, 6]`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">DFS with Entry and Exit Times</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Track entry (discovery) and exit (finish) times
function dfsWithTimes(graph, start) {
    const visited = new Set();
    const entryTime = new Map();
    const exitTime = new Map();
    let time = 0;

    const dfs = (vertex) => {
        visited.add(vertex);
        entryTime.set(vertex, ++time);

        const neighbors = graph.adjacencyList.get(vertex) || [];

        for (const neighbor of neighbors) {
            if (!visited.has(neighbor)) {
                dfs(neighbor);
            }
        }

        exitTime.set(vertex, ++time);
    };

    dfs(start);

    return { entryTime, exitTime };
}

// Example:
const { entryTime, exitTime } = dfsWithTimes(graph, 0);
console.log("Entry times:", Object.fromEntries(entryTime));
console.log("Exit times:", Object.fromEntries(exitTime));

/*
Entry: {0: 1, 1: 2, 3: 3, 4: 5, 2: 7, 5: 8, 6: 10}
Exit:  {3: 4, 4: 6, 1: 6, 5: 9, 6: 11, 2: 12, 0: 14}

Useful for:
- Finding ancestors (entry[u] < entry[v] && exit[u] > exit[v])
- Detecting back edges
- Topological sorting
*/`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">DFS on 2D Grid</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Count islands using DFS
function countIslands(grid) {
    if (!grid || grid.length === 0) return 0;

    const rows = grid.length;
    const cols = grid[0].length;
    let islands = 0;

    const dfs = (row, col) => {
        // Boundary check and water check
        if (row < 0 || row >= rows ||
            col < 0 || col >= cols ||
            grid[row][col] === '0') {
            return;
        }

        // Mark as visited (sink the island)
        grid[row][col] = '0';

        // Explore 4 directions
        dfs(row + 1, col);
        dfs(row - 1, col);
        dfs(row, col + 1);
        dfs(row, col - 1);
    };

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === '1') {
                islands++;
                dfs(i, j);
            }
        }
    }

    return islands;
}

// Example:
const grid = [
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1']
];

console.log(countIslands(grid)); // Output: 3`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Path Finding with DFS</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Find a path (not necessarily shortest) between two vertices
function findPathDFS(graph, start, end) {
    const visited = new Set();
    const path = [];

    const dfs = (vertex) => {
        if (vertex === end) {
            path.push(vertex);
            return true;
        }

        visited.add(vertex);
        path.push(vertex);

        const neighbors = graph.adjacencyList.get(vertex) || [];

        for (const neighbor of neighbors) {
            if (!visited.has(neighbor)) {
                if (dfs(neighbor)) {
                    return true;
                }
            }
        }

        path.pop(); // Backtrack
        return false;
    };

    dfs(start);
    return path.length > 0 ? path : null;
}

// Find ALL paths between two vertices
function findAllPaths(graph, start, end) {
    const allPaths = [];

    const dfs = (vertex, path) => {
        if (vertex === end) {
            allPaths.push([...path, vertex]);
            return;
        }

        path.push(vertex);

        const neighbors = graph.adjacencyList.get(vertex) || [];

        for (const neighbor of neighbors) {
            if (!path.includes(neighbor)) {
                dfs(neighbor, path);
            }
        }

        path.pop(); // Backtrack
    };

    dfs(start, []);
    return allPaths;
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Time and Space Complexity</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Complexity</th>
            <th className="p-3 border">Explanation</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Time</td>
            <td className="p-3 border">O(V + E)</td>
            <td className="p-3 border">Visit each vertex and edge once</td>
          </tr>
          <tr>
            <td className="p-3 border">Space (Recursive)</td>
            <td className="p-3 border">O(V)</td>
            <td className="p-3 border">Call stack depth can be V</td>
          </tr>
          <tr>
            <td className="p-3 border">Space (Iterative)</td>
            <td className="p-3 border">O(V)</td>
            <td className="p-3 border">Explicit stack + visited set</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Applications of DFS</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Cycle Detection:</strong> Detect cycles in directed/undirected graphs</li>
      <li><strong>Topological Sort:</strong> Order tasks with dependencies</li>
      <li><strong>Connected Components:</strong> Find all connected components</li>
      <li><strong>Path Finding:</strong> Find any path between two vertices</li>
      <li><strong>Maze Solving:</strong> Explore all possible paths</li>
      <li><strong>Strongly Connected Components:</strong> Kosaraju's, Tarjan's algorithms</li>
      <li><strong>Backtracking:</strong> Puzzles, games, constraint satisfaction</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Key Points</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>DFS uses stack (explicit or call stack)</li>
      <li>Explores as deep as possible before backtracking</li>
      <li>Does NOT guarantee shortest path</li>
      <li>Time complexity: O(V + E)</li>
      <li>Recursive version is cleaner but has stack limit</li>
      <li>Iterative version avoids stack overflow for large graphs</li>
    </ul>
  </div>
);

export default DFS;
