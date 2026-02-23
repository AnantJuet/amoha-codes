import React from 'react';

const GraphTerminology: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Graph Terminology</h1>

    <p className="text-lg leading-relaxed">
      Understanding graph terminology is essential for discussing graph properties, algorithms,
      and problems. This vocabulary forms the foundation for all graph theory concepts.
    </p>

    <h2 className="text-2xl font-bold mt-8">Vertex Properties</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Term</th>
          <th className="p-2 border">Definition</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border"><strong>Degree</strong></td>
          <td className="p-2 border">Number of edges incident to a vertex (in directed graphs: in-degree + out-degree)</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Neighbor/Adjacent</strong></td>
          <td className="p-2 border">Vertices connected by an edge</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Isolated vertex</strong></td>
          <td className="p-2 border">Vertex with degree 0</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Pendant/Leaf</strong></td>
          <td className="p-2 border">Vertex with degree 1</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Handshaking Lemma</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Property</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border"><strong>Formula</strong></td>
          <td className="p-2 border">Sum of all degrees = 2 x |E| (i.e., Sum deg(v) = 2|E|)</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Explanation</strong></td>
          <td className="p-2 border">Each edge contributes 2 to the total degree (one for each endpoint)</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Corollary</strong></td>
          <td className="p-2 border">Every graph has an even number of odd-degree vertices</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Edge Properties</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Term</th>
          <th className="p-2 border">Definition</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border"><strong>Loop</strong></td>
          <td className="p-2 border">Edge from a vertex to itself</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Multiple edges</strong></td>
          <td className="p-2 border">More than one edge between same vertices</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Incident</strong></td>
          <td className="p-2 border">An edge is incident to its endpoints</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Bridge</strong></td>
          <td className="p-2 border">Edge whose removal disconnects the graph</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Cut edge</strong></td>
          <td className="p-2 border">Same as bridge</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Paths and Walks</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Term</th>
          <th className="p-2 border">Definition</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border"><strong>Walk</strong></td>
          <td className="p-2 border">Sequence of vertices where consecutive vertices are adjacent</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Trail</strong></td>
          <td className="p-2 border">Walk with no repeated edges</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Path</strong></td>
          <td className="p-2 border">Walk with no repeated vertices</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Cycle</strong></td>
          <td className="p-2 border">Path that starts and ends at the same vertex</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Length</strong></td>
          <td className="p-2 border">Number of edges in a path/walk</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Connectivity</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Term</th>
          <th className="p-2 border">Definition</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border"><strong>Connected</strong></td>
          <td className="p-2 border">There exists a path between every pair of vertices</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Connected component</strong></td>
          <td className="p-2 border">Maximal connected subgraph</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Strongly connected</strong></td>
          <td className="p-2 border">(Digraph) Path exists in both directions between all pairs</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Weakly connected</strong></td>
          <td className="p-2 border">(Digraph) Connected if edges were undirected</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Distance</strong></td>
          <td className="p-2 border">Length of shortest path between two vertices</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Diameter</strong></td>
          <td className="p-2 border">Maximum distance between any two vertices</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Directed Graph Terms</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Term</th>
          <th className="p-2 border">Definition</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border"><strong>In-degree</strong></td>
          <td className="p-2 border">Number of incoming edges</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Out-degree</strong></td>
          <td className="p-2 border">Number of outgoing edges</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Source</strong></td>
          <td className="p-2 border">Vertex with in-degree 0</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Sink</strong></td>
          <td className="p-2 border">Vertex with out-degree 0</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>DAG</strong></td>
          <td className="p-2 border">Directed Acyclic Graph (no directed cycles)</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Special Vertex Sets</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Term</th>
          <th className="p-2 border">Definition</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border"><strong>Independent set</strong></td>
          <td className="p-2 border">Set of vertices with no edges between them</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Clique</strong></td>
          <td className="p-2 border">Set of vertices where every pair is connected</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Vertex cover</strong></td>
          <td className="p-2 border">Set of vertices that touch every edge</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Dominating set</strong></td>
          <td className="p-2 border">Every vertex is in the set or adjacent to it</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Regular Graphs</h2>
    <p className="mt-3">A k-regular graph: every vertex has degree k</p>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">k-Regular</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border"><strong>0-regular</strong></td>
          <td className="p-2 border">No edges (empty graph)</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>1-regular</strong></td>
          <td className="p-2 border">Perfect matching</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>2-regular</strong></td>
          <td className="p-2 border">Disjoint union of cycles</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>3-regular</strong></td>
          <td className="p-2 border">Cubic graph</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Complete Kn</strong></td>
          <td className="p-2 border">(n-1)-regular</td>
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
          <td className="p-2 border">If a graph has 6 vertices and the degree sequence is (3,3,3,3,2,2), how many edges?</td>
        </tr>
        <tr>
          <td className="p-2 border">2</td>
          <td className="p-2 border">Can a simple graph have 5 vertices each of degree 3?</td>
        </tr>
        <tr>
          <td className="p-2 border">3</td>
          <td className="p-2 border">Find the diameter of a cycle graph C6</td>
        </tr>
        <tr>
          <td className="p-2 border">4</td>
          <td className="p-2 border">What is the maximum size of an independent set in K4?</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default GraphTerminology;
