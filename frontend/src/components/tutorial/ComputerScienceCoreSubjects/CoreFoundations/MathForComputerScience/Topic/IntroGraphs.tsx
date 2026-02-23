import React from 'react';

const IntroGraphs: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Introduction to Graphs</h1>

    <p className="text-lg leading-relaxed">
      A graph is a mathematical structure consisting of vertices (nodes) connected by edges.
      Graphs are used to model relationships, networks, and connections. They're fundamental
      to computer science, appearing in social networks, routing, scheduling, and more.
    </p>

    <h2 className="text-2xl font-bold mt-8">Definition</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Component</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border"><strong>V</strong></td>
          <td className="p-2 border">A set of vertices (nodes)</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>E</strong></td>
          <td className="p-2 border">A set of edges connecting pairs of vertices</td>
        </tr>
      </tbody>
    </table>
    <p className="mt-3">A graph G = (V, E) consists of vertices and edges:</p>
    <pre className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
{`V = {A, B, C, D}
E = {(A,B), (B,C), (C,D), (A,D)}`}
    </pre>

    <h2 className="text-2xl font-bold mt-8">Types of Graphs</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Type</th>
          <th className="p-2 border">Description</th>
          <th className="p-2 border">Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border"><strong>Undirected Graph</strong></td>
          <td className="p-2 border">Edges have no direction. (A, B) = (B, A)</td>
          <td className="p-2 border">Facebook friendships</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Directed Graph (Digraph)</strong></td>
          <td className="p-2 border">Edges have direction. (A, B) ≠ (B, A)</td>
          <td className="p-2 border">Twitter follows, web links</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Weighted Graph</strong></td>
          <td className="p-2 border">Edges have associated weights/costs</td>
          <td className="p-2 border">Road distances, network latency</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Special Graphs</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Graph Type</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border"><strong>Simple Graph</strong></td>
          <td className="p-2 border">No self-loops, no multiple edges</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Multigraph</strong></td>
          <td className="p-2 border">Allows multiple edges between same vertices</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Complete Graph (Kn)</strong></td>
          <td className="p-2 border">Every vertex connected to every other</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Bipartite Graph</strong></td>
          <td className="p-2 border">Vertices split into two groups, edges only between groups</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Cycle (Cn)</strong></td>
          <td className="p-2 border">A single cycle of n vertices</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Path (Pn)</strong></td>
          <td className="p-2 border">A simple path of n vertices</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Graph Statistics</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Statistic</th>
          <th className="p-2 border">Definition</th>
          <th className="p-2 border">Bound</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border"><strong>Order</strong></td>
          <td className="p-2 border">Number of vertices |V|</td>
          <td className="p-2 border">-</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Size</strong></td>
          <td className="p-2 border">Number of edges |E|</td>
          <td className="p-2 border">-</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Simple Undirected</strong></td>
          <td className="p-2 border">Maximum edges</td>
          <td className="p-2 border">0 ≤ |E| ≤ |V|(|V|-1)/2</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Simple Directed</strong></td>
          <td className="p-2 border">Maximum edges</td>
          <td className="p-2 border">0 ≤ |E| ≤ |V|(|V|-1)</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Subgraphs</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Type</th>
          <th className="p-2 border">Definition</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border"><strong>Subgraph</strong></td>
          <td className="p-2 border">G' = (V', E') where V' ⊆ V and E' ⊆ E</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Induced subgraph</strong></td>
          <td className="p-2 border">Subgraph containing all edges between selected vertices</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Spanning subgraph</strong></td>
          <td className="p-2 border">Contains all vertices but possibly fewer edges</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Real-World Examples</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Application</th>
          <th className="p-2 border">Vertices</th>
          <th className="p-2 border">Edges</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border"><strong>Social networks</strong></td>
          <td className="p-2 border">People</td>
          <td className="p-2 border">Friendships</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Web graph</strong></td>
          <td className="p-2 border">Pages</td>
          <td className="p-2 border">Hyperlinks (directed)</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Road networks</strong></td>
          <td className="p-2 border">Intersections</td>
          <td className="p-2 border">Roads (weighted)</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Computer networks</strong></td>
          <td className="p-2 border">Devices</td>
          <td className="p-2 border">Connections</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Molecules</strong></td>
          <td className="p-2 border">Atoms</td>
          <td className="p-2 border">Bonds</td>
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
          <td className="p-2 border">Draw K4 (complete graph with 4 vertices). How many edges does it have?</td>
        </tr>
        <tr>
          <td className="p-2 border">2</td>
          <td className="p-2 border">Is Facebook's friend graph directed or undirected?</td>
        </tr>
        <tr>
          <td className="p-2 border">3</td>
          <td className="p-2 border">What's the maximum number of edges in a simple graph with 5 vertices?</td>
        </tr>
        <tr>
          <td className="p-2 border">4</td>
          <td className="p-2 border">Give an example of a bipartite graph from real life</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default IntroGraphs;
