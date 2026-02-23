import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= Representation of Relation in Graphs and Matrices ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Representation of Relation in Graphs and Matrices
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 23 Jul, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Understanding how to represent relations in graphs and matrices is fundamental in engineering mathematics.
      These representations are not only crucial for theoretical understanding but also have significant practical
      applications in engineering, computer science, and data analysis.
    </p>
    <p className="leading-relaxed">
      This article will explore different ways to represent relations using graphs and matrices, their properties,
      and applications in engineering.
    </p>

    {/* Table of Content */}
    <h2 className="text-3xl font-bold  mt-8">Table of Content</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>What is a Relation?</li>
      <li>Representation of Relation in Graphs</li>
      <li>Directed Graphs (Digraphs)</li>
      <li>Undirected Graphs</li>
      <li>Types of Relation in Graphs and Matrices</li>
      <li>Representation of Relation in Graphs and Matrices</li>
      <li>Applications in Engineering</li>
      <li>Practice Problems</li>
    </ul>

    {/* What is a Relation */}
    <h2 className="text-3xl font-bold  mt-8">What is a Relation?</h2>
    <p className="leading-relaxed">
      A relation is a connection or association between elements of two sets. If we have two sets A and B,
      a relation R from A to B is a subset of the Cartesian product A × B.
    </p>

    {/* Representation of Relation in Graphs */}
    <h2 className="text-3xl font-bold  mt-8">Representation of Relation in Graphs</h2>
    <p className="leading-relaxed">
      Graphs provide a visual way to represent relations. There are different types of graphs used for this,
      including directed graphs (digraphs) and undirected graphs.
    </p>

    {/* Directed Graphs */}
    <h3 className="text-2xl font-semibold mt-4 ">Directed Graphs (Digraphs)</h3>
    <p className="leading-relaxed">
      A directed graph consists of nodes connected by directed edges. If a relation R contains (a, b),
      then the directed graph contains an arrow from a to b.
    </p>

    <h4 className="text-xl font-semibold mt-3">Properties</h4>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Reflexive → Loop at every node</li>
      <li>Irreflexive → No loop at any node</li>
      <li>Symmetric → Edge in both directions</li>
      <li>Asymmetric → No pair of edges in opposite direction</li>
      <li>Transitive → If (a, b) and (b, c) exist, then (a, c) must exist</li>
    </ul>

    <p className="leading-relaxed mt-3">
      Example:  
      R = {'{'}(a,a),(a,b),(b,b),(b,c),(c,c),(c,b),(c,a){'}'}
      <br />
      This is reflexive but not symmetric nor transitive.
    </p>

    {/* Undirected Graphs */}
    <h3 className="text-2xl font-semibold mt-4 ">Undirected Graphs</h3>
    <p className="leading-relaxed">
      In an undirected graph, edges have no direction. This is used when relations are symmetric.
    </p>
    <p className="leading-relaxed">
      Example: For A = {'{'}1,2,3{'}'} and R = {'{'}(1,2),(2,3){'}'}, edges will connect 1–2 and 2–3.
    </p>

    {/* Types of Relations */}
    <h2 className="text-3xl font-bold  mt-8">Types of Relation in Graphs and Matrices</h2>

    <h3 className="text-2xl font-semibold mt-4">1. Combining Relation</h3>
    <p className="leading-relaxed">
      If R is from A → B and S is from B → C, then R∘S contains (a,c) if (a,b) ∈ R and (b,c) ∈ S.
    </p>

    <h3 className="text-2xl font-semibold mt-4">2. Inverse Relation</h3>
    <p className="leading-relaxed">
      If R contains (a,b), the inverse contains (b,a).  
      R⁻¹ = {'{'}(b,a) | (a,b) ∈ R{'}'}
    </p>

    <h3 className="text-2xl font-semibold mt-4">3. Complementary Relation</h3>
    <p className="leading-relaxed">
      Complement of R contains all ordered pairs NOT in R.
    </p>

    {/* Matrices */}
    <h2 className="text-3xl font-bold  mt-8">Representation of Relation in Matrices</h2>
    <p className="leading-relaxed">
      A relation matrix is a 2D array with rows for elements of A and columns for elements of B.
      Entry is 1 if relation exists; otherwise 0.
    </p>

    {/* Applications */}
    <h2 className="text-3xl font-bold  mt-8">Applications in Engineering</h2>

    <h3 className="text-2xl font-semibold mt-4">1. Network Analysis</h3>
    <p className="leading-relaxed">
      Used in communication networks, transportation, electrical grids.
    </p>

    <h3 className="text-2xl font-semibold mt-4">2. Control Systems</h3>
    <p className="leading-relaxed">
      State transition graphs and matrices help in system modeling.
    </p>

    <h3 className="text-2xl font-semibold mt-4">3. Data Structures & Algorithms</h3>
    <p className="leading-relaxed">
      Graph algorithms depend heavily on matrix and graph representations.
    </p>

    <h3 className="text-2xl font-semibold mt-4">4. Database Management</h3>
    <p className="leading-relaxed">
      Relational model uses tables (matrices) for storing data.
    </p>

    {/* Practice Problems */}
    <h2 className="text-3xl font-bold  mt-8">Practice Problems</h2>

    <p className="leading-relaxed whitespace-pre-line">
      <strong>Problem 1:</strong> Given set A={'{'}1,2,3{'}'} and R={'{'}(1,2),(2,3),(3,1){'}'}, draw graph and matrix.  
      Determine reflexive, symmetric, transitive.

      <br /><br />
      <strong>Problem 2:</strong> For A={'{'}1,2,3,4,5{'}'} and R={'{'}(1,2),(2,3),(3,4),(4,5){'}'}, draw graph and matrix.

      <br /><br />
      <strong>Problem 3:</strong> For C={'{'}a,b,c,d{'}'} and T={'{'}(a,b),(b,c),(c,d),(d,a){'}'}, create adjacency matrix and check transitivity.

      <br /><br />
      <strong>Problem 4:</strong> For D={'{'}1,2,3,4{'}'} and U={'{'}(1,2),(2,1),(3,4),(4,3){'}'}, check if symmetric.

      <br /><br />
      <strong>Problem 5:</strong> For C={'{'}a,b,c{'}'} and T={'{'}(a,b),(b,a),(b,c){'}'}, draw graph and matrix.

      <br /><br />
      <strong>Problem 6:</strong> F={'{'}m,n,o{'}'} and W={'{'}(m,n),(n,o),(o,m),(m,m){'}'}, check reflexive, symmetric, transitive.

      <br /><br />
      <strong>Problem 7:</strong> Construct a relation X on G={'{'}1,2,3{'}'} that is reflexive, symmetric, transitive.

      <br /><br />
      <strong>Problem 8:</strong> H={'{'}a,b,c{'}'} and Y={'{'}(a,a),(b,b),(c,c){'}'}, determine relation properties.

      <br /><br />
      <strong>Problem 9:</strong> H={'{'}a,b,c,d{'}'} and Y={'{'}(a,a),(b,b),(c,c),(d,d){'}'}.

      <br /><br />
      <strong>Problem 10:</strong> J={'{'}x,y,z{'}'} and R₁={'{'}(x,y),(y,x),(y,z){'}'}, check symmetric & transitive.
    </p>
  </div>
);

export default Home;
