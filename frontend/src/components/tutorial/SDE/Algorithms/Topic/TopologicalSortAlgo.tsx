import React from 'react';

const TopologicalSortAlgo: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Topological Sort Algorithm
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Topological Sort is a linear ordering of vertices in a Directed Acyclic Graph (DAG) such that for every
      directed edge (u, v), vertex u comes before vertex v in the ordering. It is only possible for graphs
      without cycles (DAGs) and is fundamental for scheduling tasks with dependencies.
    </p>

    <h2 className="text-2xl font-bold mt-6">Key Concepts</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-bold text-blue-800">DAG Required</h4>
        <p className="mt-2 text-sm">Only works on Directed Acyclic Graphs. Cycles make ordering impossible.</p>
      </div>
      <div className="bg-green-50 p-4 rounded-lg">
        <h4 className="font-bold text-green-800">Multiple Solutions</h4>
        <p className="mt-2 text-sm">A DAG can have multiple valid topological orderings.</p>
      </div>
      <div className="bg-purple-50 p-4 rounded-lg">
        <h4 className="font-bold text-purple-800">Dependency Resolution</h4>
        <p className="mt-2 text-sm">Dependencies are processed before dependent tasks.</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Two Main Approaches</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-gray-100 p-4 rounded-lg">
        <h4 className="font-bold">1. Kahn's Algorithm (BFS)</h4>
        <p className="mt-2 text-sm">Uses in-degree of vertices. Repeatedly removes vertices with in-degree 0.</p>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg">
        <h4 className="font-bold">2. DFS-Based Approach</h4>
        <p className="mt-2 text-sm">Performs DFS and adds vertices to result in reverse finish order.</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Visual Example</h2>
    <div className="bg-gray-100 p-4 rounded-lg">
      <p className="font-semibold">DAG Structure (Task Dependencies):</p>
      <pre className="mt-2 text-sm font-mono">
{`    5 ──→ 0 ←── 4
    │           │
    ↓           ↓
    2 ──→ 3 ←── 1

Edges: 5→0, 5→2, 4→0, 4→1, 2→3, 3→1`}
      </pre>
      <p className="font-semibold mt-4">One Valid Topological Order:</p>
      <p className="mt-2 text-green-600 font-semibold">5 → 4 → 2 → 3 → 1 → 0</p>
      <p className="mt-2 text-sm">Another valid order: 4 → 5 → 2 → 3 → 1 → 0</p>
    </div>

    <h2 className="text-2xl font-bold mt-6">Kahn's Algorithm (BFS-Based)</h2>
    <div className="bg-gray-100 p-4 rounded-lg mb-4">
      <ol className="list-decimal list-inside space-y-2">
        <li>Calculate in-degree for all vertices</li>
        <li>Add all vertices with in-degree 0 to queue</li>
        <li>While queue is not empty:
          <ul className="list-disc list-inside ml-6 mt-1">
            <li>Dequeue vertex u and add to result</li>
            <li>For each neighbor v of u, decrease in-degree by 1</li>
            <li>If in-degree of v becomes 0, add v to queue</li>
          </ul>
        </li>
        <li>If result contains all vertices, return it; otherwise cycle exists</li>
      </ol>
    </div>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function topologicalSortKahn(graph, numVertices) {
    // Calculate in-degree for all vertices
    const inDegree = new Array(numVertices).fill(0);

    for (let u = 0; u < numVertices; u++) {
        for (const v of graph[u]) {
            inDegree[v]++;
        }
    }

    // Add all vertices with in-degree 0 to queue
    const queue = [];
    for (let i = 0; i < numVertices; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
        }
    }

    const result = [];

    while (queue.length > 0) {
        const u = queue.shift();
        result.push(u);

        // Reduce in-degree for all neighbors
        for (const v of graph[u]) {
            inDegree[v]--;
            if (inDegree[v] === 0) {
                queue.push(v);
            }
        }
    }

    // Check if topological sort is possible (no cycle)
    if (result.length !== numVertices) {
        return null;  // Cycle detected
    }

    return result;
}

// Example graph as adjacency list
const graph = [
    [/* 0 */],
    [/* 1 */],
    [3],      // 2 → 3
    [1],      // 3 → 1
    [0, 1],   // 4 → 0, 4 → 1
    [0, 2]    // 5 → 0, 5 → 2
];

console.log("Topological Sort:", topologicalSortKahn(graph, 6));
// Output: [4, 5, 0, 2, 3, 1] or similar valid ordering`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">DFS-Based Approach</h2>
    <div className="bg-gray-100 p-4 rounded-lg mb-4">
      <ol className="list-decimal list-inside space-y-2">
        <li>Perform DFS from each unvisited vertex</li>
        <li>After visiting all neighbors of a vertex, add it to a stack</li>
        <li>Pop all elements from stack to get topological order</li>
      </ol>
    </div>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function topologicalSortDFS(graph, numVertices) {
    const visited = new Set();
    const stack = [];

    function dfs(node) {
        visited.add(node);

        for (const neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                dfs(neighbor);
            }
        }

        // Add to stack after all descendants are processed
        stack.push(node);
    }

    // Visit all vertices
    for (let i = 0; i < numVertices; i++) {
        if (!visited.has(i)) {
            dfs(i);
        }
    }

    // Reverse stack to get topological order
    return stack.reverse();
}

console.log("Topological Sort (DFS):", topologicalSortDFS(graph, 6));
// Output: [5, 4, 2, 3, 1, 0] or similar valid ordering`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Step-by-Step Walkthrough (Kahn's Algorithm)</h2>
    <div className="bg-gray-100 p-4 rounded-lg">
      <p className="font-semibold">Initial State:</p>
      <p className="text-sm mt-2">In-degrees: [2, 2, 1, 1, 0, 0] (vertices 0-5)</p>
      <p className="text-sm">Queue: [4, 5] (vertices with in-degree 0)</p>
      <div className="mt-3 space-y-2">
        <p><strong>Step 1:</strong> Dequeue 4, Result: [4], Update neighbors 0,1. In-degrees: [1, 1, 1, 1, 0, 0]</p>
        <p><strong>Step 2:</strong> Dequeue 5, Result: [4, 5], Update neighbors 0,2. In-degrees: [0, 1, 0, 1, 0, 0]</p>
        <p><strong>Step 3:</strong> Queue: [0, 2]. Dequeue 0, Result: [4, 5, 0]</p>
        <p><strong>Step 4:</strong> Dequeue 2, Result: [4, 5, 0, 2], Update neighbor 3. In-degrees: [0, 1, 0, 0, 0, 0]</p>
        <p><strong>Step 5:</strong> Queue: [3]. Dequeue 3, Result: [4, 5, 0, 2, 3], Update neighbor 1. In-degrees: [0, 0, 0, 0, 0, 0]</p>
        <p><strong>Step 6:</strong> Queue: [1]. Dequeue 1, Result: [4, 5, 0, 2, 3, 1]</p>
        <p className="mt-2 text-green-600 font-semibold">Final Order: 4 → 5 → 0 → 2 → 3 → 1</p>
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
            <td className="p-3 border">Kahn's Algorithm (BFS)</td>
            <td className="p-3 border">O(V + E)</td>
            <td className="p-3 border">O(V)</td>
          </tr>
          <tr>
            <td className="p-3 border">DFS-Based</td>
            <td className="p-3 border">O(V + E)</td>
            <td className="p-3 border">O(V)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Comparison: Kahn's vs DFS</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Kahn's (BFS)</th>
            <th className="p-3 border">DFS-Based</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Cycle Detection</td>
            <td className="p-3 border">Built-in (check result length)</td>
            <td className="p-3 border">Needs extra logic</td>
          </tr>
          <tr>
            <td className="p-3 border">Implementation</td>
            <td className="p-3 border">Iterative (queue)</td>
            <td className="p-3 border">Recursive (stack)</td>
          </tr>
          <tr>
            <td className="p-3 border">In-degree Calculation</td>
            <td className="p-3 border">Required</td>
            <td className="p-3 border">Not required</td>
          </tr>
          <tr>
            <td className="p-3 border">Order Generation</td>
            <td className="p-3 border">Direct</td>
            <td className="p-3 border">Reverse of finish order</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Advantages</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Linear Time:</strong> Runs in O(V + E) time</li>
      <li><strong>Dependency Resolution:</strong> Perfect for task scheduling with dependencies</li>
      <li><strong>Cycle Detection:</strong> Kahn's algorithm naturally detects cycles</li>
      <li><strong>Multiple Valid Orders:</strong> Can find all valid orderings if needed</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Disadvantages</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>DAG Only:</strong> Does not work on graphs with cycles</li>
      <li><strong>Directed Graphs Only:</strong> Requires directed edges</li>
      <li><strong>No Unique Solution:</strong> Multiple valid orderings can exist</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Applications</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Task scheduling (project management)</li>
      <li>Build systems (compile order in makefiles)</li>
      <li>Course prerequisite ordering</li>
      <li>Package dependency resolution (npm, pip)</li>
      <li>Data serialization</li>
      <li>Instruction scheduling in compilers</li>
      <li>Spreadsheet cell evaluation order</li>
      <li>Database query optimization</li>
    </ul>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="text-yellow-700">
        <strong>Note:</strong> If Kahn's algorithm returns fewer vertices than the total count, the graph
        contains a cycle and topological sort is not possible.
      </p>
    </div>

    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
      <p className="text-blue-700">
        <strong>Pro Tip:</strong> Use Kahn's algorithm when you need to detect cycles as part of the
        topological sort. Use DFS-based approach when you're certain the graph is a DAG.
      </p>
    </div>
  </div>
);

export default TopologicalSortAlgo;
