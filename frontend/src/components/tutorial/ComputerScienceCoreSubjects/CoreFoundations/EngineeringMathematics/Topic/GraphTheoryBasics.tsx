import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Graph Theory ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Introduction to Graph Theory
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 25 Aug, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      In many real-world situations, we deal with a set of objects and the relationships between them—like cities connected by roads, computers in a network, or people connected by friendships.
      Graph Theory helps us model such relationships mathematically.
    </p>

    <p className="leading-relaxed">
      Graph Theory is a branch of mathematics dealing with graphs—structures made of vertices (points) and edges (lines). It is used in computer science, engineering, biology, networks, logistics, and many more fields.
    </p>

    {/* Definition of Graph */}
    <h2 className="text-3xl font-bold mt-8">Definition of Graph</h2>

    <p className="leading-relaxed">
      A graph is a mathematical structure used to represent objects and the connections between them.
    </p>

    <ul className="list-disc list-inside leading-relaxed">
      <li><strong>Vertices (Nodes):</strong> Objects or points.</li>
      <li><strong>Edges (Links):</strong> Connections between pairs of vertices.</li>
    </ul>

    <p className="leading-relaxed mt-2">
      Formally, a graph G is defined as: <strong>G = (V, E)</strong>  
      where V is a set of vertices and E is a set of edges.
    </p>

    {/* Basic Concepts */}
    <h2 className="text-3xl font-bold mt-8">Basic Concepts</h2>

    <ul className="list-disc list-inside leading-relaxed">
      <li><strong>Vertex:</strong> A point representing an entity.</li>
      <li><strong>Edge:</strong> A connection between two vertices.</li>
      <li><strong>Adjacent Vertices:</strong> Vertices sharing an edge.</li>
      <li><strong>Degree of Vertex:</strong> Number of edges incident on a vertex.</li>
      <li><strong>Path:</strong> A sequence of connected vertices with no repetition.</li>
      <li><strong>Cycle:</strong> A path that starts and ends at the same vertex.</li>
      <li><strong>Connected Graph:</strong> A graph where every vertex is reachable.</li>
      <li><strong>Subgraph:</strong> A smaller graph formed from a larger graph.</li>
      <li><strong>Loop:</strong> An edge connecting a vertex to itself.</li>
      <li><strong>Parallel Edges:</strong> Multiple edges connecting the same vertices.</li>
    </ul>

    {/* Explanation Example */}
    <h3 className="text-2xl font-semibold mt-6">Example Explanation</h3>

    <ul className="list-disc list-inside leading-relaxed">
      <li><strong>Vertex:</strong> Example vertices: 1, 2, 3, 4, 5, 6.</li>
      <li><strong>Edge:</strong> Example: edge between 3 and 5.</li>
      <li><strong>Adjacent Vertices:</strong> 3 and 5 are adjacent.</li>
      <li><strong>Degree:</strong> Vertex 3 has degree 3.</li>
      <li><strong>Path:</strong> Example path: 5 → 3 → 1 → 2 → 6.</li>
      <li><strong>Cycle:</strong> 1 → 3 → 4 → 2 → 1.</li>
      <li><strong>Connected Graph:</strong> All vertices reachable from any vertex.</li>
    </ul>

    {/* Types of Graphs */}
    <h2 className="text-3xl font-bold mt-8">Types of Graphs</h2>

    <h3 className="text-2xl font-semibold mt-4">Directed Graph (Digraph)</h3>
    <p className="leading-relaxed">
      A graph where every edge has a direction.  
      A Directed Acyclic Graph (DAG) has no cycles.
    </p>

    <p className="leading-relaxed">
      <strong>Tree:</strong> A special type of DAG where each child has only one parent.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Undirected Graph</h3>
    <p className="leading-relaxed">
      A graph where edges have no direction. If u is connected to v, then v is connected to u.
    </p>

    <ul className="list-disc list-inside leading-relaxed">
      <li><strong>Connected Graph:</strong> Every vertex is reachable.</li>
      <li><strong>Complete Graph:</strong> Every vertex is connected to every other vertex.</li>
      <li><strong>Biconnected Graph:</strong> No articulation point exists.</li>
    </ul>

    {/* Important Graphs */}
    <h2 className="text-3xl font-bold mt-8">Some Important Graphs</h2>

    <h3 className="text-2xl font-semibold mt-4">1. Regular Graph</h3>
    <p className="leading-relaxed">
      A graph where every vertex has the same degree.  
      A Kₙ complete graph is (n − 1)-regular.
    </p>

    <h3 className="text-2xl font-semibold mt-4">2. Bipartite Graph</h3>
    <p className="leading-relaxed">
      A graph where vertices can be divided into sets U and V, and edges connect U to V only.
    </p>

    <h3 className="text-2xl font-semibold mt-4">3. Complete Bipartite Graph</h3>
    <p className="leading-relaxed">
      Every vertex in U is connected to every vertex in W, with no self-loops.
    </p>

    <h3 className="text-2xl font-semibold mt-4">4. Cycle Graph</h3>
    <p className="leading-relaxed">
      A graph where each vertex has degree 2, forming one closed loop.
    </p>

    {/* Applications */}
    <h2 className="text-3xl font-bold mt-8">Applications of Graph Theory in Computer Science</h2>

    <ul className="list-disc list-inside leading-relaxed">
      <li>Computer Networks – finding shortest path.</li>
      <li>Social Networks – friend suggestions, influencers.</li>
      <li>Operating Systems – deadlock detection using cycles.</li>
      <li>Compiler Design – control flow graphs.</li>
      <li>Search Engines – Web graph and PageRank.</li>
    </ul>

    {/* Solved Questions */}
    <h2 className="text-3xl font-bold mt-8">Solved Questions</h2>

    <h3 className="text-2xl font-semibold mt-4">
      Question 1: For V = {'{'}1, 2, 3, 4{'}'}, find edges in K₄.
    </h3>
    <p className="leading-relaxed">
      Unordered pairs: 6  
      Total edges = 6  
      Formula: (n(n − 1))/2 = 6
    </p>

    <h3 className="text-2xl font-semibold mt-4">
      Question 2: Graph with edges forming cycle C₄
    </h3>
    <p className="leading-relaxed">
      Degrees: Each vertex = 2.
    </p>

    {/* Unsolved Questions */}
    <h2 className="text-3xl font-bold mt-8">Unsolved Questions</h2>

    <ul className="list-disc list-inside leading-relaxed">
      <li>K₅ → Find number of edges.</li>
      <li>Graph with edges {'{'}1-2, 2-3, 3-4, 4-5{'}'} → Find order, size, degrees.</li>
      <li>K₃,₄ → Find edges and degrees.</li>
      <li>Find number of spanning trees in K₄.</li>
    </ul>

  </div>
);

export default Home;
