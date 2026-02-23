import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= Hasse Diagrams ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Hasse Diagrams
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 19 Aug, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      A Hasse diagram is a graphical representation of the relation of elements of a partially
      ordered set (poset) with an implied upward orientation.
    </p>

    <p className="leading-relaxed">
      Each element of the poset is shown as a point. If p &lt; q and there is no element r such that
      p &lt; r &lt; q, then p and q are joined by a line, with p placed below q. Redundant connections
      are omitted (e.g., if A &lt; B and B &lt; C, the direct link A &lt; C is skipped). Items higher in
      the diagram represent greater elements.
    </p>

    <p className="leading-relaxed">
      <strong>Necessary Condition:</strong> To draw a Hasse diagram, the provided set must be a poset.  
      A poset A is a pair (B, ≤), where B is a set and ≤ is a partial order on B that satisfies:
    </p>

    <ul className="list-disc list-inside leading-relaxed">
      <li><strong>Reflexivity →</strong> p ≤ p ∀ p ∈ B</li>
      <li><strong>Anti-symmetric →</strong> p ≤ q and q ≤ p ⇒ p = q</li>
      <li><strong>Transitivity →</strong> if p ≤ q and q ≤ r, then p ≤ r</li>
    </ul>

    {/* Steps */}
    <h2 className="text-3xl font-bold  mt-8">
      Steps to Draw a Hasse Diagram
    </h2>

    <ul className="list-disc list-inside leading-relaxed">
      <li>List the elements and their relationships.</li>
      <li>Draw all elements as dots, smaller ones at the bottom.</li>
      <li>Connect related dots (direct relations only).</li>
      <li>Remove unnecessary transitive connections.</li>
    </ul>

    {/* ================= Example 1 ================= */}
    <h2 className="text-3xl font-bold  mt-8">Example 1</h2>
    <p className="leading-relaxed">
      Draw a Hasse diagram for ({'{3, 4, 12, 24, 48, 72}'}, /). Find the Maximal, Minimal, Greatest,
      and Least elements.
    </p>

    <p className="leading-relaxed">
      First, construct the poset based on divisibility:
    </p>

    <p className="leading-relaxed">
      A = (3 ≺ 12), (3 ≺ 24), (3 ≺ 48), (3 ≺ 72), (4 ≺ 12), (4 ≺ 24), (4 ≺ 48), (4 ≺ 72),
      (12 ≺ 24), (12 ≺ 48), (12 ≺ 72), (24 ≺ 48), (24 ≺ 72)
    </p>

    <p className="leading-relaxed">So, the Hasse diagram will be:</p>

    <p className="italic">example 1</p>

    <ul className="list-disc list-inside leading-relaxed">
      <li>3 and 4 are minimal and placed at the same level.</li>
      <li>12 is above 3 and 4.</li>
      <li>24 is above 12.</li>
      <li>48 and 72 are above 24 but not related to each other.</li>
    </ul>

    <p className="leading-relaxed">
      <strong>Maximal elements:</strong> 48 and 72  
      <br />
      <strong>Minimal elements:</strong> 3 and 4  
      <br />
      <strong>Greatest element:</strong> Does not exist  
      <br />
      <strong>Least element:</strong> Does not exist
    </p>

    {/* ================= Example 2 ================= */}
    <h2 className="text-3xl font-bold  mt-8">Example 2</h2>
    <p className="leading-relaxed">
      Draw a Hasse diagram for (D12, /). Find Maximal, Minimal, Greatest, and Least elements.
    </p>

    <p className="leading-relaxed">
      D12 = {'{1, 2, 3, 4, 6, 12}'}
    </p>

    <p className="leading-relaxed">
      Poset A = (1 ≺ 2), (1 ≺ 3), (1 ≺ 4), (1 ≺ 6), (1 ≺ 12), (2 ≺ 4), (2 ≺ 6), (2 ≺ 12),
      (3 ≺ 6), (3 ≺ 12), (4 ≺ 12), (6 ≺ 12)
    </p>

    <p className="italic">example 2</p>

    <ul className="list-disc list-inside leading-relaxed">
      <li>1 is minimal and placed at the bottom.</li>
      <li>2 and 3 are above 1.</li>
      <li>4 is above 2; 6 is above 2 and 3.</li>
      <li>12 is the top-most element.</li>
    </ul>

    <p className="leading-relaxed">
      <strong>Maximal & Greatest:</strong> 12  
      <br />
      <strong>Minimal & Least:</strong> 1
    </p>

    {/* ================= Example 3 ================= */}
    <h2 className="text-3xl font-bold  mt-8">Example 3</h2>
    <p className="leading-relaxed">
      Consider the poset (P = {'{1, 2, 3, 4, 6, 12}'} with ≤ as divisibility.
    </p>

    <pre className="leading-relaxed text-gray-900">
      {`     12
     /  \\
    6    4
   | \\   |
   3  2
    \\ /
     1`}
    </pre>

    {/* ================= Example 4 ================= */}
    <h2 className="text-3xl font-bold  mt-8">Example 4</h2>

    <p className="leading-relaxed">
      Consider P = {'{a, b, c, d}'} with relations: a ≤ b, a ≤ c, b ≤ d, c ≤ d.
    </p>

    <pre className="leading-relaxed text-gray-900">
      {`     d
    /   \\
   b     c
    \\   /
      a`}
    </pre>

    {/* ================= Properties ================= */}
    <h2 className="text-3xl font-bold  mt-8">Properties of Hasse Diagram</h2>

    <ul className="list-disc list-inside leading-relaxed">
      <li>The maximal element is not less than any other element.</li>
      <li>The minimal element is not greater than any other element.</li>
      <li>The greatest element succeeds all elements.</li>
      <li>The least element precedes all elements.</li>
    </ul>

    <p className="leading-relaxed">
      Note: The greatest and least element, if they exist, are unique.  
      An element can be both maximal and minimal.
    </p>

    {/* ================= Practice Problems ================= */}
    <h2 className="text-3xl font-bold  mt-8">Practice Problems on Hasse Diagram</h2>

    <ul className="list-disc list-inside leading-relaxed">
      <li>Given P = {'{1, 2, 4, 8}'}, draw the Hasse diagram.</li>
      <li>P = {'{a, b, c, d, e}'}, relations given — draw the diagram.</li>
      <li>P = {'{1, 3, 9, 27}'}, draw the diagram.</li>
      <li>P = {'{2, 5, 10, 20}'}, draw the diagram.</li>
      <li>P = {'{a, b, c, d, e}'} with relations — draw diagram.</li>
      <li>P = {'{x, y, z, w}'} with chain relations — draw diagram.</li>
      <li>P = {'{m, n, o, p, q}'} with relations — draw diagram.</li>
      <li>P = {'{4, 8, 16, 32}'} divisibility — draw diagram.</li>
      <li>P = {'{r, s, t, u, v}'} chain relations — draw diagram.</li>
      <li>P = {'{1, 2, 5, 10}'} divisibility — draw diagram.</li>
    </ul>

  </div>
);

export default Home;
