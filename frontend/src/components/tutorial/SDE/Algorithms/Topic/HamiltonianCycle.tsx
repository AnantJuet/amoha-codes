import React from 'react';

const HamiltonianCycle: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Hamiltonian Cycle
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A Hamiltonian Cycle is a cycle in a graph that visits every vertex exactly once and returns
      to the starting vertex. Finding such a cycle is NP-complete, making backtracking a suitable approach.
    </p>

    <h2 className="text-2xl font-bold mt-6">Problem Definition</h2>
    <div className="bg-gray-100 p-4 rounded-lg">
      <p><strong>Hamiltonian Path:</strong> Path visiting every vertex exactly once</p>
      <p><strong>Hamiltonian Cycle:</strong> Hamiltonian Path that returns to start</p>
      <pre className="text-sm mt-4">
{`Example Graph:          Hamiltonian Cycle:
    0---1                0 → 1 → 2 → 4 → 3 → 0
    |\\  |
    | \\ |                Path: [0, 1, 2, 4, 3, 0]
    |  \\|
    3---2---4

Adjacency: 0-1, 0-3, 1-2, 2-3, 2-4, 3-4`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Approach</h2>
    <ol className="list-decimal list-inside space-y-2">
      <li>Start from vertex 0 (arbitrary choice)</li>
      <li>Add adjacent unvisited vertices to path</li>
      <li>If all vertices visited and last connects to first → found cycle</li>
      <li>If stuck (no valid next vertex), backtrack</li>
    </ol>

    <h2 className="text-2xl font-bold mt-6">Implementation</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function hamiltonianCycle(graph) {
    const V = graph.length;
    const path = new Array(V).fill(-1);
    const visited = new Array(V).fill(false);

    // Start from vertex 0
    path[0] = 0;
    visited[0] = true;

    function isSafe(v, pos) {
        // Check if v is adjacent to previous vertex
        if (!graph[path[pos - 1]][v]) {
            return false;
        }

        // Check if v is already in path
        if (visited[v]) {
            return false;
        }

        return true;
    }

    function backtrack(pos) {
        // All vertices included
        if (pos === V) {
            // Check if last vertex connects to first
            return graph[path[pos - 1]][path[0]] === 1;
        }

        // Try each vertex as next in path
        for (let v = 1; v < V; v++) {
            if (isSafe(v, pos)) {
                path[pos] = v;
                visited[v] = true;

                if (backtrack(pos + 1)) {
                    return true;
                }

                // Backtrack
                path[pos] = -1;
                visited[v] = false;
            }
        }

        return false;
    }

    if (backtrack(1)) {
        return [...path, path[0]];  // Add start vertex at end for cycle
    }

    return null;  // No Hamiltonian Cycle exists
}

// Example: Graph represented as adjacency matrix
const graph = [
    [0, 1, 0, 1, 0],  // 0 connects to 1, 3
    [1, 0, 1, 1, 1],  // 1 connects to 0, 2, 3, 4
    [0, 1, 0, 0, 1],  // 2 connects to 1, 4
    [1, 1, 0, 0, 1],  // 3 connects to 0, 1, 4
    [0, 1, 1, 1, 0]   // 4 connects to 1, 2, 3
];

const cycle = hamiltonianCycle(graph);
if (cycle) {
    console.log('Hamiltonian Cycle:', cycle.join(' → '));
} else {
    console.log('No Hamiltonian Cycle exists');
}
// Output: Hamiltonian Cycle: 0 → 1 → 2 → 4 → 3 → 0`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Hamiltonian Path (Without Return)</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function hamiltonianPath(graph) {
    const V = graph.length;

    function backtrack(path, visited) {
        // All vertices visited
        if (path.length === V) {
            return [...path];
        }

        const lastVertex = path[path.length - 1];

        // Try each adjacent unvisited vertex
        for (let next = 0; next < V; next++) {
            if (graph[lastVertex][next] && !visited[next]) {
                path.push(next);
                visited[next] = true;

                const result = backtrack(path, visited);
                if (result) return result;

                // Backtrack
                path.pop();
                visited[next] = false;
            }
        }

        return null;
    }

    // Try starting from each vertex
    for (let start = 0; start < V; start++) {
        const path = [start];
        const visited = new Array(V).fill(false);
        visited[start] = true;

        const result = backtrack(path, visited);
        if (result) return result;
    }

    return null;
}

// Find all Hamiltonian paths
function allHamiltonianPaths(graph) {
    const V = graph.length;
    const allPaths = [];

    function backtrack(path, visited) {
        if (path.length === V) {
            allPaths.push([...path]);
            return;
        }

        const lastVertex = path[path.length - 1];

        for (let next = 0; next < V; next++) {
            if (graph[lastVertex][next] && !visited[next]) {
                path.push(next);
                visited[next] = true;

                backtrack(path, visited);

                path.pop();
                visited[next] = false;
            }
        }
    }

    for (let start = 0; start < V; start++) {
        const path = [start];
        const visited = new Array(V).fill(false);
        visited[start] = true;
        backtrack(path, visited);
    }

    return allPaths;
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Complexity Analysis</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Complexity</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Time (worst case)</td>
            <td className="p-3 border">O(V!)</td>
          </tr>
          <tr>
            <td className="p-3 border">Space</td>
            <td className="p-3 border">O(V) for path and visited</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Hamiltonian vs Eulerian</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left text-sm">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Hamiltonian</th>
            <th className="p-3 border">Eulerian</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Visits</td>
            <td className="p-3 border">Every vertex once</td>
            <td className="p-3 border">Every edge once</td>
          </tr>
          <tr>
            <td className="p-3 border">Complexity</td>
            <td className="p-3 border text-red-600">NP-Complete</td>
            <td className="p-3 border text-green-600">O(V + E)</td>
          </tr>
          <tr>
            <td className="p-3 border">Existence Check</td>
            <td className="p-3 border">No simple condition</td>
            <td className="p-3 border">Degree conditions</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="text-yellow-700">
        <strong>Note:</strong> Unlike Eulerian paths/cycles which have polynomial-time algorithms,
        Hamiltonian problems are NP-complete. There's no known efficient algorithm, making
        backtracking with pruning the practical approach for small graphs.
      </p>
    </div>
  </div>
);

export default HamiltonianCycle;
