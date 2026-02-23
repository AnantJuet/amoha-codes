import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Matching (Graph Theory) ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Matching (Graph Theory)
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 30 Sep, 2024</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      In graph theory, <strong>matching</strong> is a fundamental concept that refers to a set of
      edges in which no two edges share a common vertex. Matchings are widely used in
      network design, job assignment, scheduling, and other optimization problems
      involving pairings and resource allocation.
    </p>

    {/* Definition Section */}
    <h2 className="text-3xl font-bold mt-8">Matching Definition</h2>
    <p className="leading-relaxed">
      A <strong>matching</strong> in a graph is a set of edges such that no two edges share a common vertex.
      In simple terms, it pairs up vertices so that each vertex belongs to at most one matched edge.
    </p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm text-gray-900">
      Example: In a bipartite graph with vertices U = {'{u1, u2, u3}'} and V = {'{v1, v2, v3}'},
      a possible maximum matching is: {'{(u1, v2), (u2, v3), (u3, v1)}'}.
    </p>

    {/* Types of Matching */}
    <h2 className="text-3xl font-bold mt-8">Types of Matching in Graph Theory</h2>

    <h3 className="text-2xl font-semibold mt-4">Perfect Matching</h3>
    <p className="leading-relaxed">
      A <strong>perfect matching</strong> is a matching where every vertex in the graph is part of exactly one edge.
      This is possible only if the graph has an even number of vertices.
    </p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm text-gray-900">
      Example: For U = {'{u1, u2, u3}'} and V = {'{v1, v2, v3}'},
      a perfect matching is {'{(u1, v1), (u2, v2), (u3, v3)}'}.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Maximum Matching</h3>
    <p className="leading-relaxed">
      A <strong>maximum matching</strong> is a matching that contains the maximum possible number of edges.
    </p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm text-gray-900">
      Example: In graph G, a maximum matching could be {'{(u1, v1), (u2, v2)}'} if no edge connects u3.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Maximum Bipartite Matching</h3>
    <p className="leading-relaxed">
      In bipartite graphs, maximum bipartite matching pairs the largest number of vertices in both partitions.
    </p>

    {/* Algorithms */}
    <h2 className="text-3xl font-bold mt-8">Algorithms for Finding Matchings</h2>

    <h3 className="text-2xl font-semibold mt-4">Hungarian Algorithm</h3>
    <p className="leading-relaxed">
      Used for finding maximum matching in bipartite graphs.
    </p>
    <ul className="list-disc list-inside leading-relaxed">
      <li>Initialize matching M as empty.</li>
      <li>Find augmenting paths.</li>
      <li>Repeat until no augmenting paths remain.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Hopcroft–Karp Algorithm</h3>
    <p className="leading-relaxed">
      A fast algorithm for maximum bipartite matching.
    </p>
    <ul className="list-disc list-inside leading-relaxed">
      <li>Use BFS to find the shortest augmenting path.</li>
      <li>Use DFS to augment along the path.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Blossom Algorithm</h3>
    <p className="leading-relaxed">
      Used in general (non-bipartite) graphs, introduced by Jack Edmonds.
    </p>
    <ul className="list-disc list-inside leading-relaxed">
      <li>Identify blossoms (odd cycles).</li>
      <li>Contract them into single vertices.</li>
      <li>Repeat until no augmenting paths remain.</li>
    </ul>

    {/* Applications */}
    <h2 className="text-3xl font-bold mt-8">Applications of Matching</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Network Design:</strong> Efficient routing and resource allocation.</li>
      <li><strong>Job Assignment:</strong> Assigning workers to tasks.</li>
      <li><strong>Scheduling:</strong> Avoiding conflicts in tasks or exams.</li>
    </ul>

    {/* Practice Problems */}
    <h2 className="text-3xl font-bold mt-8">Practice Problems</h2>
    <ul className="list-decimal ml-6 leading-relaxed">
      <li>Determine if a perfect matching exists in a given graph.</li>
      <li>Find all maximum matchings in a bipartite graph.</li>
      <li>Use augmenting paths to find a maximum matching.</li>
      <li>Determine the minimum path cover in a bipartite graph.</li>
      <li>Find a maximum weighted matching.</li>
      <li>Implement the Hungarian algorithm.</li>
      <li>Determine if a matching is stable in a preference system.</li>
      <li>Apply the Blossom algorithm on a general graph.</li>
      <li>Find the maximum cardinality matching.</li>
      <li>Find the minimum edge cover in a bipartite graph.</li>
    </ul>

    {/* Conclusion */}
    <h2 className="text-3xl font-bold mt-8">Conclusion</h2>
    <p className="leading-relaxed">
      Matching is an essential concept in graph theory with significant applications in
      optimization and network design. Understanding different types of matchings and 
      algorithms helps solve complex pairing and allocation problems efficiently.
    </p>

  </div>
);

export default Home;
