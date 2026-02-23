import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Planar Graphs & Graph Coloring ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Planar Graphs and Graph Coloring
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 28 Jun, 2025</p>

    {/* Intro */}
    <p className="text-lg leading-relaxed">
      Planar graphs and graph coloring are fundamental concepts in graph theory.
      A planar graph can be drawn on a plane without any edges crossing, while
      graph coloring assigns colors to vertices so that no two adjacent vertices
      share the same color. These concepts have applications in computer science,
      engineering, and geography.
    </p>

    {/* ================= Planar Graphs ================= */}
    <h2 className="text-3xl font-bold mt-8">Planar Graphs</h2>
    <p className="leading-relaxed">
      A planar graph is a graph that can be embedded in the plane such that
      no edges intersect except at their endpoints.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Properties of Planar Graphs</h3>

    <p className="leading-relaxed">
      <strong>Euler's Formula:</strong> For any connected planar graph:
    </p>
    <p className="font-medium">V − E + F = 2</p>

    <p className="leading-relaxed mt-4">
      <strong>Kuratowski's Theorem:</strong> A graph is planar if and only if it
      does not contain a subgraph homeomorphic to:
    </p>

    <ul className="list-disc list-inside leading-relaxed">
      <li>K<sub>5</sub> : Complete graph on 5 vertices</li>
      <li>K<sub>3,3</sub> : Complete bipartite graph</li>
    </ul>

    {/* ================= Graph Coloring ================= */}
    <h2 className="text-3xl font-bold mt-8">Graph Coloring</h2>
    <p className="leading-relaxed">
      Graph coloring assigns colors to vertices such that no two adjacent
      vertices share the same color. The minimum number of colors is called
      the chromatic number.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Types of Coloring</h3>

    <ul className="list-disc list-inside leading-relaxed">
      <li><strong>Vertex Coloring:</strong> Colors vertices</li>
      <li><strong>Edge Coloring:</strong> Colors edges</li>
      <li><strong>Face Coloring:</strong> Colors faces of planar graphs</li>
    </ul>

    {/* ================= Applications ================= */}
    <h2 className="text-3xl font-bold mt-8">Applications in Engineering</h2>

    <ul className="list-disc list-inside leading-relaxed">
      <li>
        <strong>Frequency Assignment:</strong> Avoid interference between
        communication devices.
      </li>
      <li>
        <strong>Scheduling:</strong> Avoid overlapping tasks or exams.
      </li>
      <li>
        <strong>Map Coloring:</strong> Adjacent regions get different colors.
      </li>
      <li>
        <strong>Register Allocation:</strong> Assign CPU registers efficiently.
      </li>
      <li>
        <strong>Circuit Design:</strong> Reduce wiring layers on circuit boards.
      </li>
    </ul>

    {/* ================= Solved Examples ================= */}
    <h2 className="text-3xl font-bold mt-8">Solved Examples</h2>

    <p className="leading-relaxed mt-4">
      <strong>Example 1:</strong> Is K₄ planar?  
      <br />➤ Yes. Chromatic number = 4.
    </p>

    <p className="leading-relaxed mt-4">
      <strong>Example 2:</strong> Is K₃,₃ planar?  
      <br />➤ No (Kuratowski’s theorem).
    </p>

    <p className="leading-relaxed mt-4">
      <strong>Example 3:</strong> A planar graph with 6 vertices and 9 edges.  
      Find faces.  
      <br />Using Euler’s formula: F = 5
    </p>

    <p className="leading-relaxed mt-4">
      <strong>Example 4:</strong> Chromatic number of odd cycle (C₅).  
      <br />➤ 3
    </p>

    <p className="leading-relaxed mt-4">
      <strong>Example 5:</strong> Chromatic number of bipartite graph.  
      <br />➤ 2
    </p>

    <p className="leading-relaxed mt-4">
      <strong>Example 6:</strong> Is Petersen graph planar?  
      <br />➤ No
    </p>

    <p className="leading-relaxed mt-4">
      <strong>Example 7:</strong> Chromatic number of C₅ ∪ C₃.  
      <br />➤ 3
    </p>

    <p className="leading-relaxed mt-4">
      <strong>Example 8:</strong> Verify Euler for V=8, E=12, F=6.  
      <br />➤ Holds: 8 − 12 + 6 = 2
    </p>

    <p className="leading-relaxed mt-4">
      <strong>Example 9:</strong> Is K₂,₃ planar? Chromatic number?  
      <br />➤ Planar, Chromatic number = 2
    </p>

    {/* ================= Practice Problems ================= */}
    <h2 className="text-3xl font-bold mt-8">Practice Problems</h2>

    <ul className="list-disc list-inside leading-relaxed">
      <li>Is K₄ planar? Find chromatic number.</li>
      <li>Given V=10, E=15, find number of faces.</li>
      <li>Chromatic number of star graph Sₙ.</li>
      <li>Prove every tree is 2-colorable.</li>
      <li>Check Euler’s formula for V=12, E=18.</li>
      <li>Find chromatic number of wheel graph Wₙ.</li>
      <li>Is the dodecahedron graph planar?</li>
      <li>Given planar graph with E = 3V − 6, find faces.</li>
      <li>Chromatic number of Kₘ,ₙ.</li>
      <li>Is C₄ ∪ K₂ planar? Chromatic number?</li>
    </ul>

  </div>
);

export default Home;
