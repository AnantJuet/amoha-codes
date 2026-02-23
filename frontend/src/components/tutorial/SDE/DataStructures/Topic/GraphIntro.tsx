import React from 'react';

const GraphIntro: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Introduction to Graph
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A Graph is a non-linear data structure consisting of vertices (nodes) and edges that connect
      these vertices. Graphs are used to model relationships between objects and are fundamental
      to many algorithms in computer science.
    </p>

    <h2 className="text-2xl font-bold mt-6">What is a Graph?</h2>
    <p className="leading-relaxed">
      A graph G is defined as G = (V, E) where:
    </p>
    <ul className="list-disc list-inside space-y-2 mt-2">
      <li><strong>V:</strong> A set of vertices (nodes)</li>
      <li><strong>E:</strong> A set of edges connecting pairs of vertices</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Types of Graphs</h2>
    <div className="space-y-4 mt-4">
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">1. Directed Graph (Digraph)</h4>
        <p>Edges have a direction. Edge (u, v) goes from u to v, but not vice versa.</p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">2. Undirected Graph</h4>
        <p>Edges have no direction. Edge (u, v) means u and v are connected bidirectionally.</p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">3. Weighted Graph</h4>
        <p>Edges have associated weights/costs (e.g., distances, times).</p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">4. Unweighted Graph</h4>
        <p>All edges are treated equally (weight = 1).</p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">5. Cyclic Graph</h4>
        <p>Contains at least one cycle (path that starts and ends at the same vertex).</p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">6. Acyclic Graph</h4>
        <p>Contains no cycles. A directed acyclic graph is called a DAG.</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Visual Representation</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`Undirected Graph:
    0 --- 1
    |     |
    |     |
    3 --- 2

Vertices: {0, 1, 2, 3}
Edges: {(0,1), (0,3), (1,2), (2,3)}

Directed Graph:
    0 --> 1
    |     |
    v     v
    3 <-- 2

Vertices: {0, 1, 2, 3}
Edges: {(0,1), (0,3), (1,2), (2,3)}

Weighted Graph:
    0 --5-- 1
    |       |
    2       3
    |       |
    3 --1-- 2

Edges with weights: {(0,1,5), (0,3,2), (1,2,3), (2,3,1)}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Graph Terminology</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Term</th>
            <th className="p-3 border">Definition</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Vertex (Node)</td>
            <td className="p-3 border">A fundamental unit of the graph</td>
          </tr>
          <tr>
            <td className="p-3 border">Edge</td>
            <td className="p-3 border">Connection between two vertices</td>
          </tr>
          <tr>
            <td className="p-3 border">Adjacent</td>
            <td className="p-3 border">Two vertices connected by an edge</td>
          </tr>
          <tr>
            <td className="p-3 border">Degree</td>
            <td className="p-3 border">Number of edges connected to a vertex</td>
          </tr>
          <tr>
            <td className="p-3 border">In-degree</td>
            <td className="p-3 border">Number of incoming edges (directed graph)</td>
          </tr>
          <tr>
            <td className="p-3 border">Out-degree</td>
            <td className="p-3 border">Number of outgoing edges (directed graph)</td>
          </tr>
          <tr>
            <td className="p-3 border">Path</td>
            <td className="p-3 border">Sequence of vertices connected by edges</td>
          </tr>
          <tr>
            <td className="p-3 border">Cycle</td>
            <td className="p-3 border">Path that starts and ends at the same vertex</td>
          </tr>
          <tr>
            <td className="p-3 border">Connected</td>
            <td className="p-3 border">Path exists between every pair of vertices</td>
          </tr>
          <tr>
            <td className="p-3 border">Component</td>
            <td className="p-3 border">Maximal connected subgraph</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Special Types of Graphs</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Complete Graph:</strong> Every vertex is connected to every other vertex</li>
      <li><strong>Bipartite Graph:</strong> Vertices can be divided into two disjoint sets</li>
      <li><strong>Tree:</strong> Connected acyclic graph with n-1 edges for n vertices</li>
      <li><strong>Forest:</strong> Collection of disjoint trees</li>
      <li><strong>Sparse Graph:</strong> Number of edges close to minimum</li>
      <li><strong>Dense Graph:</strong> Number of edges close to maximum</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Graph Representations</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Adjacency Matrix:</strong> 2D array where matrix[i][j] indicates edge from i to j</li>
      <li><strong>Adjacency List:</strong> Array of lists, each containing neighbors of a vertex</li>
      <li><strong>Edge List:</strong> List of all edges as (source, destination, weight) tuples</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Common Graph Operations</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Add Vertex:</strong> Add a new node to the graph</li>
      <li><strong>Add Edge:</strong> Create connection between two vertices</li>
      <li><strong>Remove Vertex:</strong> Remove a node and its edges</li>
      <li><strong>Remove Edge:</strong> Remove connection between vertices</li>
      <li><strong>Check Adjacent:</strong> Check if two vertices are connected</li>
      <li><strong>Get Neighbors:</strong> Get all vertices adjacent to a given vertex</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Graph Algorithms</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Category</th>
            <th className="p-3 border">Algorithms</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Traversal</td>
            <td className="p-3 border">BFS, DFS</td>
          </tr>
          <tr>
            <td className="p-3 border">Shortest Path</td>
            <td className="p-3 border">Dijkstra, Bellman-Ford, Floyd-Warshall</td>
          </tr>
          <tr>
            <td className="p-3 border">Minimum Spanning Tree</td>
            <td className="p-3 border">Prim's, Kruskal's</td>
          </tr>
          <tr>
            <td className="p-3 border">Topological Sort</td>
            <td className="p-3 border">Kahn's Algorithm, DFS-based</td>
          </tr>
          <tr>
            <td className="p-3 border">Cycle Detection</td>
            <td className="p-3 border">DFS, Union-Find</td>
          </tr>
          <tr>
            <td className="p-3 border">Connectivity</td>
            <td className="p-3 border">Union-Find, Tarjan's, Kosaraju's</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Real-World Applications</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Social Networks:</strong> Users as vertices, friendships as edges</li>
      <li><strong>Maps/Navigation:</strong> Locations as vertices, roads as edges</li>
      <li><strong>Web:</strong> Pages as vertices, hyperlinks as edges</li>
      <li><strong>Computer Networks:</strong> Devices as vertices, connections as edges</li>
      <li><strong>Dependencies:</strong> Tasks/packages as vertices, dependencies as edges</li>
      <li><strong>Recommendation Systems:</strong> Users/items as vertices, interactions as edges</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Key Points</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Graphs model relationships between objects</li>
      <li>Can be directed or undirected, weighted or unweighted</li>
      <li>Adjacency list is efficient for sparse graphs</li>
      <li>Adjacency matrix is efficient for dense graphs</li>
      <li>Many real-world problems can be modeled as graph problems</li>
    </ul>
  </div>
);

export default GraphIntro;
