import React from 'react';

const GraphTraversals: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Graph Traversals</h1>

    <p className="text-lg leading-relaxed">
      Graph traversal algorithms systematically visit all vertices in a graph. The two
      fundamental approaches are Breadth-First Search (BFS) and Depth-First Search (DFS),
      each with different properties and use cases.
    </p>

    <h2 className="text-2xl font-bold mt-8">Breadth-First Search (BFS)</h2>
    <p className="mt-3">Explores neighbors level by level (closest first)</p>
    <p className="mt-2"><strong>Algorithm:</strong></p>
    <pre className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-sm text-gray-900">
{`1. Start at source, add to queue
2. While queue not empty:
   - Dequeue vertex v
   - For each unvisited neighbor u:
     - Mark u as visited, enqueue u`}
    </pre>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Property</th>
          <th className="p-2 border">Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border"><strong>Data structure</strong></td>
          <td className="p-2 border">Queue (FIFO)</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Time</strong></td>
          <td className="p-2 border">O(V + E)</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Space</strong></td>
          <td className="p-2 border">O(V)</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">BFS Properties</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Property</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border">Shortest path</td>
          <td className="p-2 border">Finds shortest path in unweighted graphs</td>
        </tr>
        <tr>
          <td className="p-2 border">Visit order</td>
          <td className="p-2 border">Visits vertices in order of distance from source</td>
        </tr>
        <tr>
          <td className="p-2 border">BFS tree</td>
          <td className="p-2 border">Creates a BFS tree with shortest paths to all reachable vertices</td>
        </tr>
        <tr>
          <td className="p-2 border">Bipartite check</td>
          <td className="p-2 border">Can detect if graph is bipartite (2-colorable)</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Depth-First Search (DFS)</h2>
    <p className="mt-3">Explores as deep as possible before backtracking</p>
    <p className="mt-2"><strong>Recursive Algorithm:</strong></p>
    <pre className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-sm text-gray-900">
{`DFS(v):
  mark v as visited
  for each neighbor u of v:
    if u not visited:
      DFS(u)`}
    </pre>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Property</th>
          <th className="p-2 border">Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border"><strong>Data structure</strong></td>
          <td className="p-2 border">Stack (implicit via recursion)</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Time</strong></td>
          <td className="p-2 border">O(V + E)</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Space</strong></td>
          <td className="p-2 border">O(V) for recursion stack</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">DFS Properties</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Property</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border">DFS tree</td>
          <td className="p-2 border">Creates a DFS tree/forest</td>
        </tr>
        <tr>
          <td className="p-2 border">Edge classification</td>
          <td className="p-2 border">Classifies edges: tree, back, forward, cross edges</td>
        </tr>
        <tr>
          <td className="p-2 border">Cycle detection</td>
          <td className="p-2 border">Back edge exists if and only if cycle exists</td>
        </tr>
        <tr>
          <td className="p-2 border">Applications</td>
          <td className="p-2 border">Useful for topological sort, strongly connected components</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Edge Classification (DFS)</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Edge Type</th>
          <th className="p-2 border">Definition</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border"><strong>Tree edge</strong></td>
          <td className="p-2 border">Edge used in DFS tree</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Back edge</strong></td>
          <td className="p-2 border">Edge to an ancestor (indicates cycle)</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Forward edge</strong></td>
          <td className="p-2 border">Edge to a descendant (not in tree)</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Cross edge</strong></td>
          <td className="p-2 border">Edge between non-ancestor/descendant</td>
        </tr>
      </tbody>
    </table>
    <p className="mt-3 text-sm">Note: In undirected graphs, only tree and back edges exist.</p>

    <h2 className="text-2xl font-bold mt-8">BFS vs DFS Comparison</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Aspect</th>
          <th className="p-2 border">BFS</th>
          <th className="p-2 border">DFS</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border">Data structure</td>
          <td className="p-2 border">Queue</td>
          <td className="p-2 border">Stack</td>
        </tr>
        <tr>
          <td className="p-2 border">Shortest path</td>
          <td className="p-2 border">Yes (unweighted)</td>
          <td className="p-2 border">No</td>
        </tr>
        <tr>
          <td className="p-2 border">Memory</td>
          <td className="p-2 border">More (stores level)</td>
          <td className="p-2 border">Less (stack)</td>
        </tr>
        <tr>
          <td className="p-2 border">Best for</td>
          <td className="p-2 border">Nearest, levels</td>
          <td className="p-2 border">Cycles, paths</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Applications</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">BFS Applications</th>
          <th className="p-2 border">DFS Applications</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border">Shortest path (unweighted)</td>
          <td className="p-2 border">Cycle detection</td>
        </tr>
        <tr>
          <td className="p-2 border">Level-order traversal</td>
          <td className="p-2 border">Topological sorting</td>
        </tr>
        <tr>
          <td className="p-2 border">Finding connected components</td>
          <td className="p-2 border">Strongly connected components</td>
        </tr>
        <tr>
          <td className="p-2 border">Bipartite checking</td>
          <td className="p-2 border">Maze solving</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Practice Problems</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">#</th>
          <th className="p-2 border">Problem</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border">1</td>
          <td className="p-2 border">Trace BFS on a graph starting from vertex A</td>
        </tr>
        <tr>
          <td className="p-2 border">2</td>
          <td className="p-2 border">Trace DFS and identify all back edges</td>
        </tr>
        <tr>
          <td className="p-2 border">3</td>
          <td className="p-2 border">Which traversal finds shortest path in unweighted graph?</td>
        </tr>
        <tr>
          <td className="p-2 border">4</td>
          <td className="p-2 border">Modify DFS to detect if a graph has a cycle</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default GraphTraversals;
