import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= Partial Orders and Lattices ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Partial Orders and Lattices
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 15 May, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Partial orders and lattices are important concepts in discrete mathematics and are widely used 
      in computer science, especially in data structures, database theory, and computation. A partial 
      order is a binary relation that describes a set of elements that are ordered, but not necessarily 
      linearly. A lattice is a particular kind of partially ordered set with additional properties.
    </p>

    {/* Partial Orders Section */}
    <h2 className="text-3xl font-bold  mt-8">Partial Orders</h2>
    <p className="leading-relaxed">
      A partial order is a binary relation ≤ over a set P that satisfies:
    </p>

    <ul className="list-disc list-inside leading-relaxed">
      <li><strong>Reflexivity:</strong> For all a ∈ P, a ≤ a.</li>
      <li><strong>Antisymmetry:</strong> If a ≤ b and b ≤ a, then a = b.</li>
      <li><strong>Transitivity:</strong> If a ≤ b and b ≤ c, then a ≤ c.</li>
    </ul>

    <p className="leading-relaxed">
      A set P with such a relation is called a <strong>partially ordered set (poset)</strong>.
    </p>

    {/* Example */}
    <h3 className="text-2xl font-semibold mt-4 ">Example of Partial Orders</h3>
    <p className="leading-relaxed">
      Consider P = {'{1, 2, 3}'} with the usual numerical order. It satisfies reflexivity, 
      antisymmetry, and transitivity, making it a poset.
    </p>

    {/* Lattices Section */}
    <h2 className="text-3xl font-bold  mt-8">Lattices</h2>
    <p className="leading-relaxed">
      A lattice is a special poset where every pair of elements has:
    </p>

    <ul className="list-disc list-inside leading-relaxed">
      <li><strong>Join (least upper bound):</strong> a ∨ b</li>
      <li><strong>Meet (greatest lower bound):</strong> a ∧ b</li>
    </ul>

    <p className="leading-relaxed">
      Example: The set of integers ordered by divisibility is a lattice.
    </p>

    {/* Example Lattice */}
    <h3 className="text-2xl font-semibold mt-4 ">Example of Lattices</h3>
    <p className="leading-relaxed">
      Consider L = {'{1, 2, 3, 6}'} under the divisibility relation.
      The join of 2 and 3 is 6. The meet of 2 and 6 is 2. Hence, L is a lattice.
    </p>

    {/* Table */}
    <table className="w-full border mt-4 text-left">
      <thead>
        <tr className="bg-gray-400 text-gray-900">
          <th className="border px-4 py-2">Concept</th>
          <th className="border px-4 py-2">Key Properties</th>
          <th className="border px-4 py-2">Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border px-4 py-2">Partial Order</td>
          <td className="border px-4 py-2">Reflexive, antisymmetric, transitive</td>
          <td className="border px-4 py-2">Subset relation</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Lattice</td>
          <td className="border px-4 py-2">Every pair has join & meet</td>
          <td className="border px-4 py-2">Power set ordered by inclusion</td>
        </tr>
      </tbody>
    </table>

    {/* Hasse Diagram Explanation */}
    <h2 className="text-3xl font-bold  mt-8">Hasse Diagram Explanation</h2>
    <p className="leading-relaxed">
      A Hasse diagram represents a poset graphically. The bottom element (0) is the least, 
      and the top element (1) is the greatest. A path upward means an order relationship.
    </p>

    <ul className="list-disc list-inside leading-relaxed">
      <li>c and d are above 0 → 0 ≤ c, 0 ≤ d</li>
      <li>The middle node is above c & d and below a & b</li>
      <li>1 is the greatest element</li>
    </ul>

    <p className="leading-relaxed">
      Join of c and d is the middle node. Meet of a and b is also the middle node.
    </p>

    {/* Applications */}
    <h2 className="text-3xl font-bold  mt-8">Applications in Engineering</h2>

    <h3 className="text-2xl font-semibold mt-4 ">Task Scheduling</h3>
    <p className="leading-relaxed">
      Partial orders model task dependencies for efficient scheduling.
    </p>

    <h3 className="text-2xl font-semibold mt-4 ">Data Structures</h3>
    <p className="leading-relaxed">
      Lattices help optimize search trees and heaps.
    </p>

    <h3 className="text-2xl font-semibold mt-4 ">Database Theory</h3>
    <p className="leading-relaxed">
      Used in query optimization and schema hierarchy modeling.
    </p>

    <h3 className="text-2xl font-semibold mt-4 ">Formal Verification</h3>
    <p className="leading-relaxed">
      Partial orders help verify correctness in concurrent systems.
    </p>

    <h3 className="text-2xl font-semibold mt-4 ">Network Design</h3>
    <p className="leading-relaxed">
      Used in routing optimization and dependency analysis.
    </p>
  </div>
);

export default Home;
