import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Graph Isomorphisms and Connectivity ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Mathematics | Graph Isomorphisms and Connectivity
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 27 Sep, 2024</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Graph theory studies relationships between vertices and edges. Two
      important concepts are <strong>graph isomorphism</strong> and{" "}
      <strong>graph connectivity</strong>. Isomorphism checks whether two graphs
      are structurally identical, while connectivity measures how strongly the
      vertices of a graph are linked.
    </p>

    <h2 className="text-3xl font-bold mt-8">Table of Content</h2>
    <ul className="list-disc list-inside leading-relaxed">
      <li>What is Graph Isomorphism?</li>
      <li>Example</li>
      <li>Applications in Engineering</li>
      <li>Graph Connectivity</li>
      <li>Applications in Engineering</li>
    </ul>

    {/* ================= Graph Isomorphism ================= */}
    <h2 className="text-3xl font-bold mt-8">What is Graph Isomorphism?</h2>

    <p className="leading-relaxed">
      A <strong>graph isomorphism</strong> is a bijection between the vertex sets
      of two graphs that preserves adjacency. Two graphs G and H are isomorphic
      if we can rename the vertices of one graph to make it identical to the
      other.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Example</h3>
    <p className="leading-relaxed">
      Consider two graphs:
      <br />
      <br />
      <strong>Graph G:</strong>  
      <br />A -- B  
      <br />| &nbsp;&nbsp;&nbsp;&nbsp;|  
      <br />C -- D
      <br />
      <br />
      <strong>Graph H:</strong>
      <br />1 -- 2  
      <br />| &nbsp;&nbsp;&nbsp;&nbsp;|  
      <br />3 -- 4
    </p>

    <p className="leading-relaxed mt-2">
      These two graphs are isomorphic because we can define a bijection:
    </p>

    <ul className="list-disc list-inside leading-relaxed">
      <li>f(A) = 1</li>
      <li>f(B) = 2</li>
      <li>f(C) = 3</li>
      <li>f(D) = 4</li>
    </ul>

    <p className="leading-relaxed">
      This mapping preserves adjacency, so G ≅ H.
    </p>

    {/* ================= Applications ================= */}
    <h2 className="text-3xl font-bold mt-8">Applications in Engineering</h2>

    <ul className="list-disc list-inside leading-relaxed">
      <li>
        <strong>Network Analysis:</strong> Identifies identical network
        structures for optimization.
      </li>
      <li>
        <strong>Chemical Informatics:</strong> Compares molecular structures
        represented as graphs.
      </li>
      <li>
        <strong>Pattern Recognition:</strong> Helps in matching shapes and
        visual patterns.
      </li>
    </ul>

    {/* ================= Connectivity ================= */}
    <h2 className="text-3xl font-bold mt-8">Graph Connectivity</h2>

    <p className="leading-relaxed">
      Connectivity measures how well the vertices of a graph are connected. It
      is divided into:
    </p>

    <ul className="list-disc list-inside leading-relaxed">
      <li>
        <strong>Vertex Connectivity:</strong> Minimum number of vertices whose
        removal disconnects the graph.
      </li>
      <li>
        <strong>Edge Connectivity:</strong> Minimum number of edges whose
        removal disconnects the graph.
      </li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Example</h3>
    <p className="leading-relaxed">
      Consider the graph:
      <br />
      A -- B -- C  
      <br />| &nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;|  
      <br />D -- E -- F
    </p>

    {/* ================= Applications ================= */}
    <h2 className="text-3xl font-bold mt-8">Applications in Engineering</h2>

    <ul className="list-disc list-inside leading-relaxed">
      <li>
        <strong>Network Reliability:</strong> Ensures communication networks
        stay functional during failures.
      </li>
      <li>
        <strong>Electrical Engineering:</strong> Maintains circuit connections
        even when some components fail.
      </li>
      <li>
        <strong>Transportation Planning:</strong> Designs robust transport
        systems that withstand disruptions.
      </li>
    </ul>

    {/* ================= Conclusion ================= */}
    <h2 className="text-3xl font-bold mt-8">Conclusion</h2>

    <p className="leading-relaxed">
      Graph isomorphisms and connectivity are essential components of graph
      theory. They help analyze, optimize, and compare networks, molecular
      structures, circuits, and transportation systems. Understanding these
      concepts enhances efficiency, reliability, and overall system design.
    </p>

  </div>
);

export default Home;
