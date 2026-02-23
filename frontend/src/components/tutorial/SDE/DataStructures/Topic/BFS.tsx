import React from 'react';

const BFS: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Breadth-First Search (BFS)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Breadth-First Search (BFS) is a graph traversal algorithm that explores all vertices at the
      present depth level before moving to vertices at the next depth level. It uses a queue data
      structure and is ideal for finding the shortest path in unweighted graphs.
    </p>

    <h2 className="text-2xl font-bold mt-6">How BFS Works</h2>
    <ol className="list-decimal list-inside space-y-2">
      <li>Start from a source vertex and mark it as visited</li>
      <li>Add the source vertex to a queue</li>
      <li>While the queue is not empty:
        <ul className="list-disc list-inside ml-6 mt-2">
          <li>Dequeue a vertex from the front</li>
          <li>Process the vertex (print, store, etc.)</li>
          <li>Enqueue all unvisited neighbors and mark them visited</li>
        </ul>
      </li>
    </ol>

    <h2 className="text-2xl font-bold mt-6">BFS Implementation</h2>
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

    // Basic BFS traversal
    bfs(start) {
        const visited = new Set();
        const queue = [start];
        const result = [];

        visited.add(start);

        while (queue.length > 0) {
            const vertex = queue.shift();
            result.push(vertex);

            // Get all neighbors
            const neighbors = this.adjacencyList.get(vertex) || [];

            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }

        return result;
    }

    // BFS with level tracking
    bfsWithLevels(start) {
        const visited = new Set();
        const queue = [{ vertex: start, level: 0 }];
        const levels = new Map();

        visited.add(start);
        levels.set(start, 0);

        while (queue.length > 0) {
            const { vertex, level } = queue.shift();

            const neighbors = this.adjacencyList.get(vertex) || [];

            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    levels.set(neighbor, level + 1);
                    queue.push({ vertex: neighbor, level: level + 1 });
                }
            }
        }

        return levels;
    }
}

// Example usage:
const graph = new Graph();
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 3);
graph.addEdge(1, 4);
graph.addEdge(2, 5);
graph.addEdge(2, 6);

console.log(graph.bfs(0));
// Output: [0, 1, 2, 3, 4, 5, 6]

/*
Visual:
        0
       / \\
      1   2
     / \\ / \\
    3  4 5  6

BFS Order: 0 -> 1, 2 -> 3, 4, 5, 6
*/`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Shortest Path Using BFS</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Find shortest path in unweighted graph
function shortestPathBFS(graph, start, end) {
    if (start === end) return [start];

    const visited = new Set();
    const queue = [start];
    const parent = new Map();

    visited.add(start);
    parent.set(start, null);

    while (queue.length > 0) {
        const vertex = queue.shift();

        const neighbors = graph.adjacencyList.get(vertex) || [];

        for (const neighbor of neighbors) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                parent.set(neighbor, vertex);
                queue.push(neighbor);

                // Found the destination
                if (neighbor === end) {
                    return reconstructPath(parent, start, end);
                }
            }
        }
    }

    return null; // No path found
}

// Reconstruct path from parent map
function reconstructPath(parent, start, end) {
    const path = [];
    let current = end;

    while (current !== null) {
        path.unshift(current);
        current = parent.get(current);
    }

    return path;
}

// Example:
const path = shortestPathBFS(graph, 0, 6);
console.log(path); // [0, 2, 6]`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">BFS for Level Order Traversal</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Get vertices level by level
function levelOrderTraversal(graph, start) {
    const visited = new Set();
    const queue = [start];
    const levels = [];

    visited.add(start);

    while (queue.length > 0) {
        const levelSize = queue.length;
        const currentLevel = [];

        for (let i = 0; i < levelSize; i++) {
            const vertex = queue.shift();
            currentLevel.push(vertex);

            const neighbors = graph.adjacencyList.get(vertex) || [];

            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }

        levels.push(currentLevel);
    }

    return levels;
}

// Example:
console.log(levelOrderTraversal(graph, 0));
// Output: [[0], [1, 2], [3, 4, 5, 6]]`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">BFS on 2D Grid</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// BFS on a grid (e.g., finding shortest path in a maze)
function bfsGrid(grid, start, end) {
    const rows = grid.length;
    const cols = grid[0].length;
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    const visited = new Set();
    const queue = [{ pos: start, dist: 0 }];
    visited.add(\`\${start[0]},\${start[1]}\`);

    while (queue.length > 0) {
        const { pos, dist } = queue.shift();
        const [row, col] = pos;

        // Found destination
        if (row === end[0] && col === end[1]) {
            return dist;
        }

        // Explore 4 directions
        for (const [dr, dc] of directions) {
            const newRow = row + dr;
            const newCol = col + dc;
            const key = \`\${newRow},\${newCol}\`;

            // Check bounds, obstacles, and visited
            if (newRow >= 0 && newRow < rows &&
                newCol >= 0 && newCol < cols &&
                grid[newRow][newCol] !== 1 && // 1 = obstacle
                !visited.has(key)) {

                visited.add(key);
                queue.push({ pos: [newRow, newCol], dist: dist + 1 });
            }
        }
    }

    return -1; // No path found
}

// Example: 0 = open, 1 = obstacle
const maze = [
    [0, 0, 0, 0],
    [1, 1, 0, 1],
    [0, 0, 0, 0],
    [0, 1, 1, 0]
];

console.log(bfsGrid(maze, [0, 0], [3, 3])); // Output: 6`}</pre>
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
            <td className="p-3 border">Space</td>
            <td className="p-3 border">O(V)</td>
            <td className="p-3 border">Queue and visited set</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Applications of BFS</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Shortest Path:</strong> Find shortest path in unweighted graphs</li>
      <li><strong>Level Order Traversal:</strong> Process nodes level by level</li>
      <li><strong>Connected Components:</strong> Find all connected components</li>
      <li><strong>Bipartite Check:</strong> Determine if graph is bipartite</li>
      <li><strong>Social Networks:</strong> Find degrees of separation</li>
      <li><strong>Web Crawlers:</strong> Explore web pages layer by layer</li>
      <li><strong>GPS Navigation:</strong> Find shortest routes</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">BFS vs DFS</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">BFS</th>
            <th className="p-3 border">DFS</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Data Structure</td>
            <td className="p-3 border">Queue</td>
            <td className="p-3 border">Stack/Recursion</td>
          </tr>
          <tr>
            <td className="p-3 border">Traversal</td>
            <td className="p-3 border">Level by level</td>
            <td className="p-3 border">Depth first</td>
          </tr>
          <tr>
            <td className="p-3 border">Shortest Path</td>
            <td className="p-3 border">Yes (unweighted)</td>
            <td className="p-3 border">No</td>
          </tr>
          <tr>
            <td className="p-3 border">Memory</td>
            <td className="p-3 border">More (stores level)</td>
            <td className="p-3 border">Less</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Key Points</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>BFS uses a queue (FIFO) for traversal</li>
      <li>Explores all neighbors before going deeper</li>
      <li>Guarantees shortest path in unweighted graphs</li>
      <li>Time complexity: O(V + E)</li>
      <li>Mark vertices as visited when adding to queue</li>
    </ul>
  </div>
);

export default BFS;
