import React from 'react';


const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Euler and Hamiltonian Paths ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Euler and Hamiltonian Paths
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 03 Feb, 2025</p>

    {/* Intro */}
    <p className="text-lg leading-relaxed">
      Euler and Hamiltonian paths are fundamental concepts in graph theory. 
      An Euler path visits every edge exactly once, while a Hamiltonian path visits every vertex exactly once. 
      These concepts play an important role in fields like computer science, engineering, robotics, and operations research.
    </p>

    {/* Basic Definitions */}
    <h2 className="text-3xl font-bold mt-8">Path and Circuit</h2>
    <p className="leading-relaxed">
      <strong>Path:</strong> A sequence of edges where no vertex is repeated (except in circuits).
    </p>
    <p className="leading-relaxed">
      Example: 0 → 2 → 3 → 1
    </p>
    <p className="leading-relaxed">
      <strong>Circuit:</strong> A path that starts and ends at the same vertex.
    </p>
    <p>Example: 0 → 2 → 3 → 1 → 0</p>

    {/* Euler Paths */}
    <h2 className="text-3xl font-bold mt-8">Euler Paths and Circuits</h2>
    <p className="leading-relaxed">
      <strong>Euler Path:</strong> Uses every edge of the graph exactly once.
    </p>
    <p className="leading-relaxed">
      <strong>Euler Circuit:</strong> An Euler path that starts and ends at the same vertex.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Conditions</h3>
    <ul className="list-disc list-inside leading-relaxed">
      <li>A connected graph has an <strong>Euler Path</strong> if it has exactly 0 or 2 vertices of odd degree.</li>
      <li>A connected graph has an <strong>Euler Circuit</strong> if every vertex has an even degree.</li>
    </ul>

    {/* Hamiltonian Paths */}
    <h2 className="text-3xl font-bold mt-8">Hamiltonian Paths</h2>
    <p className="leading-relaxed">
      A Hamiltonian path visits every vertex exactly once.
    </p>

    <p className="leading-relaxed mt-2">
      Unlike Euler paths, there is no simple necessary and sufficient condition for Hamiltonian paths and cycles.
      However, some important theorems apply:
    </p>

    <ul className="list-disc list-inside leading-relaxed">
      <li><strong>Dirac's Theorem:</strong> If every vertex of an n-vertex graph (n ≥ 3) has degree ≥ n/2, the graph is Hamiltonian.</li>
      <li><strong>Ore's Theorem:</strong> For every pair of non-adjacent vertices u and v, deg(u) + deg(v) ≥ n implies the graph is Hamiltonian.</li>
    </ul>

    {/* Hamiltonian Circuit */}
    <h2 className="text-3xl font-bold mt-8">Hamiltonian Circuit</h2>
    <p className="leading-relaxed">
      A Hamiltonian circuit is a simple circuit that visits each vertex exactly once.
    </p>
    <p className="leading-relaxed">
      There is no simple rule to check Hamiltonicity, but low vertex degrees or disconnected subgraphs often rule it out.
    </p>

    {/* Euler vs Hamiltonian */}
    <h2 className="text-3xl font-bold mt-8">Eulerian vs Hamiltonian Graphs</h2>
    <p className="leading-relaxed">
      <strong>Hamiltonian Graph:</strong> Contains a Hamiltonian circuit.
    </p>
    <p className="leading-relaxed">
      <strong>Eulerian Graph:</strong> Contains an Euler circuit.
    </p>

    {/* Applications */}
    <h2 className="text-3xl font-bold mt-8">Applications in Engineering</h2>
    <ul className="list-disc list-inside leading-relaxed">
      <li><strong>Network Design:</strong> Hamiltonian cycles minimize routing costs.</li>
      <li><strong>Circuit Design:</strong> Euler paths reduce wire traces.</li>
      <li><strong>DNA Sequencing:</strong> Hamiltonian paths reconstruct genomes.</li>
      <li><strong>Robotics:</strong> Euler paths help in area coverage without retracing.</li>
      <li><strong>Logistics:</strong> Hamiltonian cycles reduce travel cost.</li>
    </ul>

    {/* Solved Examples */}
    <h2 className="text-3xl font-bold mt-8">Solved Examples</h2>

    <h3 className="text-2xl font-semibold mt-4">1. Euler Circuit Check</h3>
    <p className="leading-relaxed">
      A graph with vertices A, B, C, D and edges AB, BC, CD, DA, AC has degrees A(3), B(2), C(3), D(2).  
      Since A and C have odd degrees, it does not have an Euler circuit.
    </p>

    <h3 className="text-2xl font-semibold mt-4">2. Euler Path Check</h3>
    <p className="leading-relaxed">
      A graph  with edges PQ, QR, RS, SP, PR has exactly two odd-degree vertices.  
      Therefore, it has an Euler path but not a circuit.
    </p>

    <h3 className="text-2xl font-semibold mt-4">3. Hamiltonian Cycle in K5</h3>
    <p className="leading-relaxed">K5 always has a Hamiltonian cycle since it is a complete graph.</p>

    <h3 className="text-2xl font-semibold mt-4">4. Hamiltonian Path Check</h3>
    <p className="leading-relaxed">Graph  with edges AB, BC, CD, DE, AE, AC has a Hamiltonian path: A-B-C-D-E</p>

    <h3 className="text-2xl font-semibold mt-4">5. Euler & Hamiltonian in K3,3</h3>
    <p className="leading-relaxed">
      K3,3 has no Euler circuit (all degrees are 3) but has a Hamiltonian cycle.
    </p>

    <h3 className="text-2xl font-semibold mt-4">6. Petersen Graph</h3>
    <p className="leading-relaxed">
      Petersen graph has no Euler circuit and no Hamiltonian cycle.
    </p>

    {/* FAQs */}
    <h2 className="text-3xl font-bold mt-8">FAQs</h2>
    <p><strong>Difference:</strong>  
      Euler path → every edge once.  
      Hamiltonian path → every vertex once.
    </p>
    <p><strong>Hamiltonian condition?</strong> No simple test; Dirac's & Ore's theorems help.</p>
    <p><strong>DNA sequencing?</strong> Uses Hamiltonian paths.</p>
    <p><strong>Robotics?</strong> Uses Euler paths.</p>
    <p><strong>Circuit design?</strong> Euler paths reduce wire traces.</p>

  </div>
);

export default Home;
