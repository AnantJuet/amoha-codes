import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= Properties of Power Set ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Properties of Power Set
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 10 Jan, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      The power set of a set A, written as <strong>P(A)</strong>, contains all possible subsets of A — 
      including the empty set, single-element subsets, and the full set itself. 
      For example, if A = {'{'}1, 2{'}'}, then P(A) = {'{'}{}, {`{1}`}, {`{2}`}, {`{1, 2}`}{'}'}.
    </p>

    <p className="leading-relaxed">
      The power set plays a fundamental role in set theory because it includes every combination of elements. 
      Whether A is finite or infinite, its power set always contains more subsets than the number of elements in A.
    </p>

    {/* Properties Heading */}
    <h2 className="text-3xl font-bold  mt-8">
      Properties of Power Sets
    </h2>
    <p className="leading-relaxed">
      Some of the major properties of power sets are listed below:
    </p>

    {/* Empty Set */}
    <h3 className="text-2xl font-semibold mt-4 ">Empty Set</h3>
    <p className="leading-relaxed">
      The empty set ϕ is always an element of every power set.
      Also, the power set of an empty set is P(ϕ) = {'{'}{}{'}'}. It contains only one subset.
    </p>

    {/* Subset Relation */}
    <h3 className="text-2xl font-semibold mt-4 ">Subset Relation</h3>
    <p className="leading-relaxed">
      Every element inside P(S) is itself a subset of S.
      Also, the union and intersection of any subsets in P(S) again belong to P(S).
    </p>

    {/* Union & Intersection */}
    <h3 className="text-2xl font-semibold mt-4 ">Union & Intersection</h3>
    <p className="leading-relaxed">
      Since every subset is part of S, the union of all members of P(S) gives S,
      and the intersection of all members gives the empty set.
    </p>

    {/* Cardinality */}
    <h3 className="text-2xl font-semibold mt-4 ">Cardinality</h3>
    <p className="leading-relaxed">
      If a set S has n elements, then its power set contains 2ⁿ subsets.
      For example, if S = {'{'}1, 2, 3{'}'}, then P(S) contains 2³ = 8 subsets.
    </p>

    {/* Complements */}
    <h3 className="text-2xl font-semibold mt-4 ">Complements</h3>
    <p className="leading-relaxed">
      If S is a universal set, every subset A ∈ P(S) has a complement S − A,
      and this complement also lies in P(S).
    </p>

    {/* Infinite Sets */}
    <h3 className="text-2xl font-semibold mt-4 ">Infinite Sets</h3>
    <p className="leading-relaxed">
      If S is infinite, then P(S) has strictly greater cardinality than S.
      For example, a countably infinite set produces an uncountably infinite power set.
    </p>

    {/* Examples */}
    <h3 className="text-2xl font-semibold mt-4 ">Examples</h3>
    <p className="leading-relaxed">
      Example: If A = {'{'}a, b{'}'}, then the power set is: {'{'}{}{'}'}, {`{a}`}, {`{b}`}, {`{a, b}`}.
      Total subsets = 2² = 4.
    </p>

  </div>
);

export default Home;
