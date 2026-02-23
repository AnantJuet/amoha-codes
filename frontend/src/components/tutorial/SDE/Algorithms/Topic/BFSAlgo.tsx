import React from 'react';

const BFSAlgo: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      BFS (Breadth First Search) Algorithm
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Breadth First Search (BFS) is a graph traversal algorithm that explores all vertices at the present
      depth level before moving on to vertices at the next depth level. It uses a queue data structure
      to keep track of nodes to be explored and is particularly useful for finding the shortest path
      in unweighted graphs.
    </p>

    <h2 className="text-2xl font-bold mt-6">Key Concepts</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-bold text-blue-800">Queue-Based</h4>
        <p className="mt-2 text-sm">Uses FIFO (First In, First Out) queue to process nodes level by level.</p>
      </div>
      <div className="bg-green-50 p-4 rounded-lg">
        <h4 className="font-bold text-green-800">Level Order</h4>
        <p className="mt-2 text-sm">Visits all nodes at distance d before visiting nodes at distance d+1.</p>
      </div>
      <div className="bg-purple-50 p-4 rounded-lg">
        <h4 className="font-bold text-purple-800">Shortest Path</h4>
        <p className="mt-2 text-sm">Guarantees shortest path in unweighted graphs.</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Algorithm Steps</h2>
    <ol className="list-decimal list-inside space-y-2">
      <li>Create a queue and enqueue the starting vertex</li>
      <li>Mark the starting vertex as visited</li>
      <li>While the queue is not empty:
        <ul className="list-disc list-inside ml-6 mt-1">
          <li>Dequeue a vertex from the queue</li>
          <li>Process the current vertex</li>
          <li>For each unvisited adjacent vertex, mark it as visited and enqueue it</li>
        </ul>
      </li>
      <li>Repeat until all reachable vertices are visited</li>
    </ol>

    <h2 className="text-2xl font-bold mt-6">Visual Example</h2>
    <div className="bg-gray-100 p-4 rounded-lg">
      <p className="font-semibold">Graph Structure:</p>
      <pre className="mt-2 text-sm font-mono">
{`       0
      / \\
     1   2
    / \\   \\
   3   4   5`}
      </pre>
      <p className="font-semibold mt-4">BFS Traversal from vertex 0:</p>
      <div className="mt-3 space-y-2">
        <p><strong>Step 1:</strong> Start at 0, Queue: [0], Visited: {"{0}"}</p>
        <p><strong>Step 2:</strong> Dequeue 0, add neighbors 1, 2. Queue: [1, 2], Visited: {"{0, 1, 2}"}</p>
        <p><strong>Step 3:</strong> Dequeue 1, add neighbors 3, 4. Queue: [2, 3, 4], Visited: {"{0, 1, 2, 3, 4}"}</p>
        <p><strong>Step 4:</strong> Dequeue 2, add neighbor 5. Queue: [3, 4, 5], Visited: {"{0, 1, 2, 3, 4, 5}"}</p>
        <p><strong>Step 5:</strong> Dequeue 3, 4, 5 (no new neighbors). Queue: []</p>
        <p className="mt-2 text-green-600 font-semibold">BFS Order: 0 → 1 → 2 → 3 → 4 → 5</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Implementation</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function bfs(graph, startNode) {
    const visited = new Set();
    const queue = [startNode];
    const result = [];

    visited.add(startNode);

    while (queue.length > 0) {
        // Dequeue the front vertex
        const currentNode = queue.shift();
        result.push(currentNode);

        // Get all adjacent vertices
        for (const neighbor of graph[currentNode]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }

    return result;
}

// Example graph represented as adjacency list
const graph = {
    0: [1, 2],
    1: [0, 3, 4],
    2: [0, 5],
    3: [1],
    4: [1],
    5: [2]
};

console.log("BFS Traversal:", bfs(graph, 0));
// Output: [0, 1, 2, 3, 4, 5]`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">BFS for Shortest Path (Unweighted Graph)</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function bfsShortestPath(graph, start, end) {
    const visited = new Set();
    const queue = [[start, [start]]];  // [node, path]

    visited.add(start);

    while (queue.length > 0) {
        const [currentNode, path] = queue.shift();

        if (currentNode === end) {
            return path;  // Found shortest path
        }

        for (const neighbor of graph[currentNode]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push([neighbor, [...path, neighbor]]);
            }
        }
    }

    return null;  // No path found
}

// Example usage
const path = bfsShortestPath(graph, 0, 5);
console.log("Shortest Path from 0 to 5:", path);
// Output: [0, 2, 5]`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Complexity Analysis</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Metric</th>
            <th className="p-3 border">Complexity</th>
            <th className="p-3 border">Explanation</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Time Complexity</td>
            <td className="p-3 border">O(V + E)</td>
            <td className="p-3 border">V = vertices, E = edges. Each vertex and edge is visited once.</td>
          </tr>
          <tr>
            <td className="p-3 border">Space Complexity</td>
            <td className="p-3 border">O(V)</td>
            <td className="p-3 border">Queue and visited set can hold up to V vertices.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Advantages</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Shortest Path:</strong> Guarantees the shortest path in unweighted graphs</li>
      <li><strong>Complete:</strong> Will find a solution if one exists in a finite graph</li>
      <li><strong>Level-wise Traversal:</strong> Useful for problems requiring level-order processing</li>
      <li><strong>Optimal for Unweighted Graphs:</strong> Best choice when all edges have equal weight</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Disadvantages</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Memory Intensive:</strong> Requires storing all nodes at current level</li>
      <li><strong>Not Suitable for Weighted Graphs:</strong> Cannot handle different edge weights efficiently</li>
      <li><strong>Slower for Deep Solutions:</strong> Explores many nodes before reaching deep targets</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Applications</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Finding shortest path in unweighted graphs</li>
      <li>Web crawling and search engines</li>
      <li>Social networking (finding people within k connections)</li>
      <li>GPS navigation systems</li>
      <li>Peer-to-peer networks</li>
      <li>Garbage collection (Cheney's algorithm)</li>
      <li>Broadcasting in networks</li>
      <li>Solving puzzles (Rubik's cube, sliding puzzles)</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">BFS vs DFS Comparison</h2>
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
            <td className="p-3 border">Stack (or recursion)</td>
          </tr>
          <tr>
            <td className="p-3 border">Traversal Order</td>
            <td className="p-3 border">Level by level</td>
            <td className="p-3 border">Deep as possible first</td>
          </tr>
          <tr>
            <td className="p-3 border">Shortest Path</td>
            <td className="p-3 border">Yes (unweighted)</td>
            <td className="p-3 border">No</td>
          </tr>
          <tr>
            <td className="p-3 border">Memory Usage</td>
            <td className="p-3 border">Higher (stores level)</td>
            <td className="p-3 border">Lower (stores path)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
      <p className="text-blue-700">
        <strong>Pro Tip:</strong> BFS is the go-to algorithm when you need to find the shortest path in an
        unweighted graph. For weighted graphs, use Dijkstra's algorithm instead.
      </p>
    </div>
  </div>
);

export default BFSAlgo;
