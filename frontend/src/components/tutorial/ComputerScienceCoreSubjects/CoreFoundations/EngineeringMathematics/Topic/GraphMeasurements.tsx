import React from "react";

const GraphMeasurements: React.FC = () => {
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Graph Measurements</h1>

      <p>
        Graph measurements (or graph metrics) are quantitative values that help us understand the structure, properties, and behavior of graphs. These measurements are essential in network analysis, social networks, computer networks, and many other applications.
      </p>

      <h2 className="text-xl font-semibold mt-4">1. Degree of a Vertex</h2>
      <p>
        The <strong>degree</strong> of a vertex is the number of edges connected to it. For directed graphs, we distinguish between:
      </p>
      <ul className="list-disc ml-6">
        <li><strong>In-degree:</strong> Number of incoming edges</li>
        <li><strong>Out-degree:</strong> Number of outgoing edges</li>
      </ul>

      <pre className="bg-gray-200 p-3 rounded mt-2">
{`For an undirected graph G:
deg(v) = number of edges incident to vertex v

For a directed graph:
in-deg(v) = number of edges coming into v
out-deg(v) = number of edges going out of v

Example:
    A --- B
    |     |
    C --- D

deg(A) = 2, deg(B) = 2, deg(C) = 2, deg(D) = 2`}
      </pre>

      <h2 className="text-xl font-semibold mt-4">2. Path Length</h2>
      <p>
        The <strong>path length</strong> is the number of edges in a path between two vertices.
      </p>

      <pre className="bg-gray-200 p-3 rounded mt-2">
{`Path from A to D: A → B → D
Path length = 2 (two edges)

Shortest path length is also called "distance" between vertices.`}
      </pre>

      <h2 className="text-xl font-semibold mt-4">3. Eccentricity</h2>
      <p>
        The <strong>eccentricity</strong> of a vertex v is the maximum distance from v to any other vertex in the graph.
      </p>

      <pre className="bg-gray-200 p-3 rounded mt-2">
{`e(v) = max{ d(v, u) : u ∈ V }

where d(v, u) is the distance between vertices v and u

Example: In a linear graph A-B-C-D-E
e(A) = 4 (distance to E)
e(C) = 2 (distance to A or E)`}
      </pre>

      <h2 className="text-xl font-semibold mt-4">4. Radius and Diameter</h2>
      <p>
        <strong>Radius:</strong> The minimum eccentricity among all vertices.
      </p>
      <p>
        <strong>Diameter:</strong> The maximum eccentricity among all vertices (longest shortest path).
      </p>

      <pre className="bg-gray-200 p-3 rounded mt-2">
{`radius(G) = min{ e(v) : v ∈ V }
diameter(G) = max{ e(v) : v ∈ V }

Example: In a cycle graph with 6 vertices
Diameter = 3 (half the cycle)
Radius = 3 (all vertices have same eccentricity)`}
      </pre>

      <h2 className="text-xl font-semibold mt-4">5. Center of a Graph</h2>
      <p>
        The <strong>center</strong> of a graph consists of all vertices whose eccentricity equals the radius.
      </p>

      <pre className="bg-gray-200 p-3 rounded mt-2">
{`Center(G) = { v ∈ V : e(v) = radius(G) }

A central vertex minimizes the maximum distance to all other vertices.
This is useful for facility location problems.`}
      </pre>

      <h2 className="text-xl font-semibold mt-4">6. Clustering Coefficient</h2>
      <p>
        The <strong>clustering coefficient</strong> measures how connected a vertex's neighbors are to each other.
      </p>

      <pre className="bg-gray-200 p-3 rounded mt-2">
{`Local clustering coefficient for vertex v:
C(v) = 2 * |edges between neighbors| / (deg(v) * (deg(v) - 1))

Range: 0 to 1
- C(v) = 0: No edges between neighbors
- C(v) = 1: All neighbors are connected (form a clique)

Global clustering coefficient:
C(G) = average of all local clustering coefficients`}
      </pre>

      <h2 className="text-xl font-semibold mt-4">7. Centrality Measures</h2>
      <p>
        Centrality measures identify the most important vertices in a graph.
      </p>

      <h3 className="text-lg font-semibold mt-3">Degree Centrality</h3>
      <pre className="bg-gray-200 p-3 rounded mt-2">
{`C_D(v) = deg(v) / (n - 1)

where n is the total number of vertices
Higher degree = more central`}
      </pre>

      <h3 className="text-lg font-semibold mt-3">Betweenness Centrality</h3>
      <pre className="bg-gray-200 p-3 rounded mt-2">
{`C_B(v) = Σ (σ_st(v) / σ_st)

where:
σ_st = total number of shortest paths from s to t
σ_st(v) = number of those paths passing through v

High betweenness = vertex is a "bridge" in the network`}
      </pre>

      <h3 className="text-lg font-semibold mt-3">Closeness Centrality</h3>
      <pre className="bg-gray-200 p-3 rounded mt-2">
{`C_C(v) = (n - 1) / Σ d(v, u)

where d(v, u) is the distance from v to u
High closeness = vertex can quickly reach all others`}
      </pre>

      <h2 className="text-xl font-semibold mt-4">8. Graph Density</h2>
      <p>
        <strong>Density</strong> measures how many edges exist compared to the maximum possible.
      </p>

      <pre className="bg-gray-200 p-3 rounded mt-2">
{`For undirected graph:
D = 2|E| / (|V| * (|V| - 1))

For directed graph:
D = |E| / (|V| * (|V| - 1))

Range: 0 to 1
- Sparse graph: D close to 0
- Dense graph: D close to 1
- Complete graph: D = 1`}
      </pre>

      <h2 className="text-xl font-semibold mt-4">9. Connected Components</h2>
      <p>
        A <strong>connected component</strong> is a maximal set of vertices such that there is a path between every pair.
      </p>

      <pre className="bg-gray-200 p-3 rounded mt-2">
{`Number of connected components:
- 1 component = connected graph
- Multiple components = disconnected graph

For directed graphs:
- Strongly connected: path exists in both directions
- Weakly connected: path exists ignoring edge direction`}
      </pre>

      <h2 className="text-xl font-semibold mt-4">10. Girth</h2>
      <p>
        The <strong>girth</strong> of a graph is the length of the shortest cycle.
      </p>

      <pre className="bg-gray-200 p-3 rounded mt-2">
{`girth(G) = length of shortest cycle

Examples:
- Triangle (K₃): girth = 3
- Square (C₄): girth = 4
- Tree: girth = ∞ (no cycles)
- Complete graph K_n: girth = 3 (for n ≥ 3)`}
      </pre>

      <h2 className="text-xl font-semibold mt-4">Summary Table</h2>
      <table className="min-w-full border border-gray-300 mt-2">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Measurement</th>
            <th className="border border-gray-300 px-4 py-2">What it Measures</th>
            <th className="border border-gray-300 px-4 py-2">Application</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Degree</td>
            <td className="border border-gray-300 px-4 py-2">Connections per vertex</td>
            <td className="border border-gray-300 px-4 py-2">Network connectivity</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Diameter</td>
            <td className="border border-gray-300 px-4 py-2">Longest shortest path</td>
            <td className="border border-gray-300 px-4 py-2">Network latency</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Clustering</td>
            <td className="border border-gray-300 px-4 py-2">Local connectivity</td>
            <td className="border border-gray-300 px-4 py-2">Community detection</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Centrality</td>
            <td className="border border-gray-300 px-4 py-2">Vertex importance</td>
            <td className="border border-gray-300 px-4 py-2">Influencer identification</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Density</td>
            <td className="border border-gray-300 px-4 py-2">Edge coverage</td>
            <td className="border border-gray-300 px-4 py-2">Network classification</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default GraphMeasurements;
