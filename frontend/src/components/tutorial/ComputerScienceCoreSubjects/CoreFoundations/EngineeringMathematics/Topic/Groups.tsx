import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= Group in Maths: Group Theory ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Group in Maths: Group Theory
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 23 Jul, 2025</p>

    {/* INTRO */}
    <p className="text-lg leading-relaxed">
      Group theory is one of the most important branches of abstract algebra which deals with the concept of groups. 
      A group consists of a set equipped with a binary operation that satisfies closure, associativity, identity, 
      and inverse properties. Group theory has wide applications in physics, chemistry, computer science, and cryptography.
    </p>

    {/* TABLE OF CONTENTS */}
    <h2 className="text-3xl font-bold  mt-8">Table of Content</h2>
    <ul className="list-disc ml-6 space-y-1">
      <li>What is Group Theory?</li>
      <li>Group Definition</li>
      <li>Examples of Group</li>
      <li>Integers under Addition (Z, +)</li>
      <li>Non-Zero Real Numbers under Multiplication (R, ⋅)</li>
      <li>Cyclic Group Z (Integers Modulo n)</li>
      <li>Quaternion Group</li>
      <li>Dihedral Group Dₙ</li>
      <li>What is Algebraic Structure?</li>
      <li>Other Algebraic Structure Related to Group</li>
      <li>Abelian Group or Commutative Group</li>
      <li>Semi Group</li>
      <li>Monoid</li>
      <li>Examples of Various Algebraic Structures</li>
      <li>Summary: Group Theory</li>
      <li>Solved Examples</li>
      <li>Practice Problems on Group Theory</li>
    </ul>

    {/* WHAT IS GROUP THEORY */}
    <h2 className="text-3xl font-bold mt-8 ">What is Group Theory?</h2>
    <p className="leading-relaxed">
      Group theory studies algebraic structures known as groups. A group is a set equipped with a single 
      binary operation that satisfies specific axioms. It has deep applications across mathematics and science.
    </p>

    {/* GROUP DEFINITION */}
    <h2 className="text-3xl font-bold mt-8 ">Group Definition</h2>
    <p className="leading-relaxed">
      A set G with a binary operation * is a group if it satisfies the following:
    </p>

    <ul className="list-disc ml-6 space-y-1">
      <li><strong>Closure:</strong> a * b ∈ G</li>
      <li><strong>Associativity:</strong> (a * b) * c = a * (b * c)</li>
      <li><strong>Identity Element:</strong> e * a = a * e = a</li>
      <li><strong>Inverse:</strong> a * a⁻¹ = a⁻¹ * a = e</li>
    </ul>

    {/* EXAMPLES OF GROUP */}
    <h2 className="text-3xl font-bold mt-8 ">Examples of Group</h2>

    <h3 className="text-2xl font-semibold  mt-4">Integers under Addition (Z, +)</h3>
    <p className="leading-relaxed">
      Set: Z = {"{ -2, -1, 0, 1, 2, ... }"}. Operation: Addition. Identity: 0. Inverse: −n.
    </p>


    <h3 className="text-2xl font-semibold  mt-4">Non-Zero Real Numbers under Multiplication (R, ⋅)</h3>
    <p className="leading-relaxed">
      Set: Non-zero real numbers. Operation: Multiplication. Identity: 1. Inverse: 1/n.
    </p>

    <h3 className="text-2xl font-semibold  mt-4">Cyclic Group Zₙ</h3>
   <p className="leading-relaxed">
      Set: {"{0, 1, n−1}"}. Operation: Addition modulo n. Identity: 0.
    </p>


    {/* ALGEBRAIC STRUCTURE */}
    <h2 className="text-3xl font-bold mt-8 ">What is Algebraic Structure?</h2>
    <p className="leading-relaxed">
      A non-empty set S with operation * is an algebraic structure if it follows closure.
    </p>

    {/* OTHER STRUCTURES */}
    <h2 className="text-3xl font-bold mt-8 ">Other Algebraic Structures Related to Group</h2>

    <h3 className="text-2xl font-semibold  mt-4">Abelian Group</h3>
    <ul className="list-disc ml-6 space-y-1">
      <li>Closure</li>
      <li>Associativity</li>
      <li>Identity</li>
      <li>Inverse</li>
      <li>Commutativity</li>
    </ul>

    <h3 className="text-2xl font-semibold  mt-4">Semi Group</h3>
    <p className="leading-relaxed">Closure + Associativity</p>

    <h3 className="text-2xl font-semibold  mt-4">Monoid</h3>
    <p className="leading-relaxed">Closure + Associativity + Identity</p>

    {/* TABLE */}
    <h2 className="text-3xl font-bold mt-8 ">
      Examples of Various Algebraic Structures
    </h2>

    <table className="w-full border border-gray-300 mt-4 text-sm">
      <thead>
        <tr className="bg-gray-400 text-gray-900">
          <th className="border p-2">Set, Operation</th>
          <th className="border p-2">Semi Group</th>
          <th className="border p-2">Monoid</th>
          <th className="border p-2">Group</th>
          <th className="border p-2">Abelian Group</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border p-2">N, +</td><td className="border p-2">Y</td><td className="border p-2">Y</td><td className="border p-2">-</td><td className="border p-2">-</td>
        </tr>
        <tr>
          <td className="border p-2">Z, +</td><td className="border p-2">Y</td><td className="border p-2">Y</td><td className="border p-2">Y</td><td className="border p-2">Y</td>
        </tr>
        <tr>
          <td className="border p-2">R, ×</td><td className="border p-2">Y</td><td className="border p-2">Y</td><td className="border p-2">Y</td><td className="border p-2">-</td>
        </tr>
      </tbody>
    </table>

    {/* SUMMARY */}
    <h2 className="text-3xl font-bold mt-8 ">Summary: Group Theory</h2>
    <ul className="list-disc ml-6 space-y-1">
      <li>Algebraic Structure — Closure</li>
      <li>Semi Group — Closure, Associativity</li>
      <li>Monoid — Closure, Associativity, Identity</li>
      <li>Group — Closure, Associativity, Identity, Inverse</li>
      <li>Abelian Group — All group properties + Commutative</li>
    </ul>

  </div>
);

export default Home;
