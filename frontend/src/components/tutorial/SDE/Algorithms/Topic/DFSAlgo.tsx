import React from 'react';

const DFSAlgo: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      DFS (Depth First Search) Algorithm
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Depth First Search (DFS) is a graph traversal algorithm that explores as far as possible along each branch
      before backtracking. It uses a stack data structure (either explicitly or via recursion) and is fundamental
      for many graph-related problems like cycle detection, topological sorting, and finding connected components.
    </p>

    <h2 className="text-2xl font-bold mt-6">Key Concepts</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-bold text-blue-800">Stack-Based</h4>
        <p className="mt-2 text-sm">Uses LIFO (Last In, First Out) principle, either via explicit stack or recursion.</p>
      </div>
      <div className="bg-green-50 p-4 rounded-lg">
        <h4 className="font-bold text-green-800">Backtracking</h4>
        <p className="mt-2 text-sm">Goes deep first, then backtracks when no unvisited neighbors remain.</p>
      </div>
      <div className="bg-purple-50 p-4 rounded-lg">
        <h4 className="font-bold text-purple-800">Path Finding</h4>
        <p className="mt-2 text-sm">Excellent for exploring all possible paths and detecting cycles.</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Algorithm Steps</h2>
    <ol className="list-decimal list-inside space-y-2">
      <li>Start from a source vertex and mark it as visited</li>
      <li>Explore an adjacent unvisited vertex</li>
      <li>Repeat step 2 recursively for the new vertex</li>
      <li>If no adjacent unvisited vertex exists, backtrack to the previous vertex</li>
      <li>Continue until all reachable vertices are visited</li>
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
      <p className="font-semibold mt-4">DFS Traversal from vertex 0:</p>
      <div className="mt-3 space-y-2">
        <p><strong>Step 1:</strong> Visit 0, Stack: [0], Visited: {"{0}"}</p>
        <p><strong>Step 2:</strong> Visit 1 (first neighbor of 0), Stack: [0, 1], Visited: {"{0, 1}"}</p>
        <p><strong>Step 3:</strong> Visit 3 (first neighbor of 1), Stack: [0, 1, 3], Visited: {"{0, 1, 3}"}</p>
        <p><strong>Step 4:</strong> 3 has no unvisited neighbors, backtrack to 1</p>
        <p><strong>Step 5:</strong> Visit 4 (next neighbor of 1), Stack: [0, 1, 4], Visited: {"{0, 1, 3, 4}"}</p>
        <p><strong>Step 6:</strong> 4 has no unvisited neighbors, backtrack to 0</p>
        <p><strong>Step 7:</strong> Visit 2 (next neighbor of 0), Stack: [0, 2], Visited: {"{0, 1, 3, 4, 2}"}</p>
        <p><strong>Step 8:</strong> Visit 5 (neighbor of 2), Stack: [0, 2, 5], Visited: {"{0, 1, 3, 4, 2, 5}"}</p>
        <p className="mt-2 text-green-600 font-semibold">DFS Order: 0 → 1 → 3 → 4 → 2 → 5</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Recursive Implementation</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function dfsRecursive(graph, startNode, visited = new Set()) {
    // Mark current node as visited
    visited.add(startNode);
    console.log(startNode);  // Process the node

    // Recursively visit all unvisited neighbors
    for (const neighbor of graph[startNode]) {
        if (!visited.has(neighbor)) {
            dfsRecursive(graph, neighbor, visited);
        }
    }

    return visited;
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

console.log("DFS Traversal (Recursive):");
dfsRecursive(graph, 0);
// Output: 0, 1, 3, 4, 2, 5`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Iterative Implementation</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function dfsIterative(graph, startNode) {
    const visited = new Set();
    const stack = [startNode];
    const result = [];

    while (stack.length > 0) {
        // Pop the top vertex from stack
        const currentNode = stack.pop();

        if (!visited.has(currentNode)) {
            visited.add(currentNode);
            result.push(currentNode);

            // Push all unvisited neighbors to stack
            // Reverse to maintain left-to-right order
            const neighbors = [...graph[currentNode]].reverse();
            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    stack.push(neighbor);
                }
            }
        }
    }

    return result;
}

console.log("DFS Traversal (Iterative):", dfsIterative(graph, 0));
// Output: [0, 1, 3, 4, 2, 5]`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">DFS for Finding All Paths</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function findAllPaths(graph, start, end, path = [], allPaths = []) {
    path.push(start);

    if (start === end) {
        allPaths.push([...path]);
    } else {
        for (const neighbor of graph[start]) {
            if (!path.includes(neighbor)) {
                findAllPaths(graph, neighbor, end, path, allPaths);
            }
        }
    }

    path.pop();  // Backtrack
    return allPaths;
}

// Example: Find all paths from 0 to 5
const paths = findAllPaths(graph, 0, 5);
console.log("All paths from 0 to 5:", paths);
// Output: [[0, 2, 5]]`}</pre>
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
            <td className="p-3 border">Recursive call stack or explicit stack can hold up to V vertices.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Types of Edges in DFS</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-gray-100 p-4 rounded-lg">
        <h4 className="font-bold">Tree Edge</h4>
        <p className="mt-2 text-sm">Edge used to discover a new vertex.</p>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg">
        <h4 className="font-bold">Back Edge</h4>
        <p className="mt-2 text-sm">Edge to an ancestor in DFS tree (indicates cycle).</p>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg">
        <h4 className="font-bold">Forward Edge</h4>
        <p className="mt-2 text-sm">Edge to a descendant that is not a tree edge.</p>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg">
        <h4 className="font-bold">Cross Edge</h4>
        <p className="mt-2 text-sm">Edge between nodes that are not ancestors/descendants.</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Advantages</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Memory Efficient:</strong> Only stores nodes on current path (O(h) where h is height)</li>
      <li><strong>Finds Path:</strong> Naturally finds a path between two nodes if it exists</li>
      <li><strong>Cycle Detection:</strong> Easily detects cycles using back edges</li>
      <li><strong>Topological Sort:</strong> Can be used for topological ordering of DAGs</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Disadvantages</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Not Optimal:</strong> Does not guarantee shortest path</li>
      <li><strong>Can Get Stuck:</strong> May explore deep branches unnecessarily</li>
      <li><strong>Stack Overflow:</strong> Deep recursion can cause stack overflow for large graphs</li>
      <li><strong>Infinite Loops:</strong> Can loop infinitely if cycles exist and not handled properly</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Applications</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Detecting cycles in a graph</li>
      <li>Topological sorting</li>
      <li>Finding connected components</li>
      <li>Finding strongly connected components</li>
      <li>Solving mazes and puzzles</li>
      <li>Path finding in games</li>
      <li>Detecting bridges and articulation points</li>
      <li>Generating spanning trees</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">DFS Tree Structure</h2>
    <div className="bg-gray-100 p-4 rounded-lg">
      <p className="font-mono text-sm">
        During DFS traversal, we can track entry and exit times for each node:
      </p>
      <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
        <li><strong>Entry Time (discovery):</strong> When node is first visited</li>
        <li><strong>Exit Time (finish):</strong> When all descendants are processed</li>
      </ul>
      <p className="mt-2 text-sm">
        These timestamps are useful for determining ancestor-descendant relationships
        and for topological sorting.
      </p>
    </div>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="text-yellow-700">
        <strong>Note:</strong> When implementing DFS for disconnected graphs, you need to start DFS from
        each unvisited vertex to ensure all components are explored.
      </p>
    </div>

    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
      <p className="text-blue-700">
        <strong>Pro Tip:</strong> Use DFS when you need to explore all possible paths, detect cycles, or
        perform topological sorting. Use BFS when you need the shortest path in unweighted graphs.
      </p>
    </div>
  </div>
);

export default DFSAlgo;
