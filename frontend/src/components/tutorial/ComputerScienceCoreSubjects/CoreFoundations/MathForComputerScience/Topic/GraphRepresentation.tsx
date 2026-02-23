import React from 'react';

const GraphRepresentation: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Graph Representation</h1>

    <p className="text-lg leading-relaxed">
      How we represent a graph in memory affects the efficiency of graph algorithms.
      Different representations trade off between space usage and the speed of various operations.
    </p>

    <h2 className="text-2xl font-bold mt-8">1. Adjacency Matrix</h2>
    <p className="mt-3">A 2D array where A[i][j] = 1 if edge (i,j) exists</p>
    <p className="mt-2"><strong>For graph with edges: (0,1), (0,2), (1,2)</strong></p>
    <pre className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-sm text-gray-900">
{`    0  1  2
0 [ 0  1  1 ]
1 [ 1  0  1 ]
2 [ 1  1  0 ]`}
    </pre>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Pros</th>
          <th className="p-2 border">Cons</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border">Check if edge exists: O(1)</td>
          <td className="p-2 border">Space: O(V^2) - wasteful for sparse graphs</td>
        </tr>
        <tr>
          <td className="p-2 border">Simple to implement</td>
          <td className="p-2 border">List all neighbors: O(V)</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">2. Adjacency List</h2>
    <p className="mt-3">Array of lists where list[i] contains neighbors of vertex i</p>
    <p className="mt-2"><strong>For graph with edges: (0,1), (0,2), (1,2)</strong></p>
    <pre className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-sm text-gray-900">
{`0: [1, 2]
1: [0, 2]
2: [0, 1]`}
    </pre>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Pros</th>
          <th className="p-2 border">Cons</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border">Space: O(V + E) - efficient for sparse graphs</td>
          <td className="p-2 border">Check if edge exists: O(degree)</td>
        </tr>
        <tr>
          <td className="p-2 border">List all neighbors: O(degree)</td>
          <td className="p-2 border">-</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">3. Edge List</h2>
    <p className="mt-3">Simple list of all edges as (u, v) pairs</p>
    <pre className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-sm text-gray-900">
{`edges = [(0,1), (0,2), (1,2)]`}
    </pre>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Pros</th>
          <th className="p-2 border">Cons</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border">Space: O(E)</td>
          <td className="p-2 border">Check if edge exists: O(E)</td>
        </tr>
        <tr>
          <td className="p-2 border">Simple, good for edge-centric algorithms</td>
          <td className="p-2 border">Find neighbors: O(E)</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Comparison Table</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Operation</th>
          <th className="p-2 border">Matrix</th>
          <th className="p-2 border">Adj List</th>
          <th className="p-2 border">Edge List</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border">Space</td>
          <td className="p-2 border text-center">O(V^2)</td>
          <td className="p-2 border text-center">O(V+E)</td>
          <td className="p-2 border text-center">O(E)</td>
        </tr>
        <tr>
          <td className="p-2 border">Add edge</td>
          <td className="p-2 border text-center">O(1)</td>
          <td className="p-2 border text-center">O(1)</td>
          <td className="p-2 border text-center">O(1)</td>
        </tr>
        <tr>
          <td className="p-2 border">Remove edge</td>
          <td className="p-2 border text-center">O(1)</td>
          <td className="p-2 border text-center">O(deg)</td>
          <td className="p-2 border text-center">O(E)</td>
        </tr>
        <tr>
          <td className="p-2 border">Edge exists?</td>
          <td className="p-2 border text-center">O(1)</td>
          <td className="p-2 border text-center">O(deg)</td>
          <td className="p-2 border text-center">O(E)</td>
        </tr>
        <tr>
          <td className="p-2 border">List neighbors</td>
          <td className="p-2 border text-center">O(V)</td>
          <td className="p-2 border text-center">O(deg)</td>
          <td className="p-2 border text-center">O(E)</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Weighted Graphs</h2>
    <p className="mt-3">Store weights alongside edges:</p>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Representation</th>
          <th className="p-2 border">How to Store Weights</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border"><strong>Matrix</strong></td>
          <td className="p-2 border">A[i][j] = weight (or infinity if no edge)</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Adj List</strong></td>
          <td className="p-2 border">List of (neighbor, weight) pairs</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Edge List</strong></td>
          <td className="p-2 border">List of (u, v, weight) triples</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Directed Graphs</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Representation</th>
          <th className="p-2 border">Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border"><strong>Matrix</strong></td>
          <td className="p-2 border">A[i][j] = 1 only for edge i to j (not symmetric)</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Adj List</strong></td>
          <td className="p-2 border">Each list contains outgoing neighbors</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>In-adjacency</strong></td>
          <td className="p-2 border">For quick access to incoming edges, maintain separate in-adjacency list</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">When to Use What</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Use Case</th>
          <th className="p-2 border">Recommended Representation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border">Dense graphs (|E| approx V^2)</td>
          <td className="p-2 border">Adjacency matrix</td>
        </tr>
        <tr>
          <td className="p-2 border">Sparse graphs (|E| {"<<"} V^2)</td>
          <td className="p-2 border">Adjacency list</td>
        </tr>
        <tr>
          <td className="p-2 border">BFS/DFS</td>
          <td className="p-2 border">Adjacency list (need to iterate neighbors)</td>
        </tr>
        <tr>
          <td className="p-2 border">Floyd-Warshall</td>
          <td className="p-2 border">Adjacency matrix</td>
        </tr>
        <tr>
          <td className="p-2 border">Kruskal's MST</td>
          <td className="p-2 border">Edge list (sort edges)</td>
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
          <td className="p-2 border">Draw the adjacency matrix for K4</td>
        </tr>
        <tr>
          <td className="p-2 border">2</td>
          <td className="p-2 border">Write the adjacency list for a directed graph: 1-&gt;2, 1-&gt;3, 2-&gt;3, 3-&gt;1</td>
        </tr>
        <tr>
          <td className="p-2 border">3</td>
          <td className="p-2 border">A graph has 100 vertices and 200 edges. Which representation uses less memory?</td>
        </tr>
        <tr>
          <td className="p-2 border">4</td>
          <td className="p-2 border">Convert an adjacency matrix to an adjacency list (write pseudocode)</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default GraphRepresentation;
