import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= Power Set ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Power Set
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 23 Jul, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      A Power Set is a set that contains all possible subsets of a given set, including the empty set.
      For example, if A = {'{1, 2, 9}'}, then the power set of A is:
    </p>

    <p className="leading-relaxed">
      {'{∅, {1}, {2}, {9}, {1, 2}, {1, 9}, {2, 9}, {1, 2, 9}}'}
    </p>

    <p className="leading-relaxed">
      Here, ∅ is the empty set, single-element subsets come next, followed by all two-element subsets,
      and finally the full set itself. Power sets are widely used in fields like computer science,
      data analysis, and artificial intelligence for evaluating all possible combinations.
    </p>

    {/* Table of Content */}
    <h2 className="text-3xl font-bold  mt-8">
      Table of Content
    </h2>
    <ul className="list-disc pl-6 space-y-1">
      <li>Power Set Definition</li>
      <li>Power Set Example</li>
      <li>How to Find Power Set?</li>
      <li>Cardinality of Power Set</li>
      <li>Properties of Power Set</li>
      <li>Solved Examples on Power Set</li>
      <li>Practice Questions on Power Set</li>
    </ul>

    {/* Power Set Definition */}
    <h3 className="text-2xl font-semibold mt-6 ">Power Set Definition</h3>

    <p className="leading-relaxed">
      A Power Set is the set of all subsets of a given set, including the empty set. Formally:
    </p>

    <p className="leading-relaxed font-semibold">
      P(S) = {'{ T | T is a subset of S }'}
    </p>

    <p className="leading-relaxed">
      Here, T is any subset of S, "|" means "such that", and {} indicates a set.
    </p>

    <h3 className="text-2xl font-semibold mt-6 ">Power Set Symbol</h3>
    <p className="leading-relaxed">
      The power set of a set A is represented as P(A).
    </p>

    {/* Power Set Example */}
    <h3 className="text-2xl font-semibold mt-6 ">Power Set Example</h3>

    <p className="leading-relaxed">
      Let A = {'{a, e, i, o, u}'}. Then the power set P(A) contains all subsets from ∅ to the full set
      {' {a, e, i, o, u}'}.
    </p>

    {/* Empty Set */}
    <h3 className="text-2xl font-semibold mt-6 ">Power Set of the Empty Set</h3>
    <p className="leading-relaxed">
      If the original set is empty (∅), its power set contains exactly one element:
    </p>
    <p className="font-semibold">P(∅) = {'{∅}'}</p>

    {/* How to Find Power Set */}
    <h3 className="text-2xl font-semibold mt-6 ">How to Find Power Set?</h3>
    <ul className="list-disc pl-6 space-y-1 leading-relaxed">
      <li>Start with the empty set.</li>
      <li>Add all one-element subsets.</li>
      <li>Add all two-element subsets.</li>
      <li>Continue until subsets with N-1 elements.</li>
      <li>Finally, include the original set.</li>
    </ul>

    {/* Cardinality */}
    <h3 className="text-2xl font-semibold mt-6 ">Cardinality of Power Set</h3>

    <p className="leading-relaxed">
      Cardinality means the number of elements in the power set. It is given by:
    </p>

    <p className="font-semibold">|P(A)| = 2ⁿ</p>

    <p className="leading-relaxed">
      Example: If A = {'{1,2,9}'}, then |A| = 3, so:
    </p>

    <p className="font-semibold">|P(A)| = 2³ = 8</p>

    {/* Properties of Power Set */}
    <h3 className="text-2xl font-semibold mt-6 ">Properties of Power Set</h3>

    <ul className="list-disc pl-6 space-y-1 leading-relaxed">
      <li>Total elements = 2ⁿ</li>
      <li>Always contains ∅ and the original set</li>
      <li>Power set elements are always more than original set elements</li>
      <li>P(∅) = {'{∅}'}</li>
      <li>Useful for operations like union, intersection, complement</li>
      <li>Each subset of the original set is included</li>
    </ul>

    {/* Solved Examples */}
    <h3 className="text-2xl font-semibold mt-6 ">Solved Examples on Power Set</h3>

    <ul className="list-decimal pl-6 space-y-3 leading-relaxed">
      <li>
        For A = {'{1,2,4,9}'}, n(A) = 4 → Power set elements = 2⁴ = 16
      </li>
      <li>
        For A = {'{9,18,5,6}'}, P(A) includes all single, pair, triple, and full-set subsets.
      </li>
      <li>
        Empty set power set → P(∅) = {'{∅}'}
      </li>
      <li>
        A with 10 elements → |P(A)| = 2¹⁰ = 1024
      </li>
      <li>
        Power set has 64 subsets → 2ˣ = 64 → x = 6
      </li>
    </ul>

    {/* Practice Questions */}
    <h3 className="text-2xl font-semibold mt-6 ">Practice Questions on Power Set</h3>

    <ul className="list-disc pl-6 space-y-1 leading-relaxed">
      <li>Power Set of A = {'{2x : -2 ≤ x ≤ 2}'}</li>
      <li>Power Set of P = {'{x : x is a prime number ≤ 50}'}</li>
      <li>Cardinality of Power Set of first five even numbers</li>
      <li>Cardinality of Power Set of first seven multiples of 3</li>
    </ul>

  </div>
);

export default Home;
