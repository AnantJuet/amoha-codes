import React from 'react';

const IntroSets: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Introduction to Sets</h1>

    <p className="text-lg leading-relaxed">
      A set is a well-defined collection of distinct objects. Sets are fundamental to mathematics
      and computer science, forming the basis for data structures, databases, logic, and more.
      The objects in a set are called elements or members.
    </p>

    <h2 className="text-2xl font-bold mt-8">Notation</h2>
    <table className="min-w-full border border-gray-300 text-left">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Type</th>
          <th className="p-2 border">Notation</th>
          <th className="p-2 border">Meaning</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">Roster notation</td><td className="p-2 border font-mono text-gray-900">A = {'{'}1, 2, 3, 4, 5{'}'}</td><td className="p-2 border">List all elements</td></tr>
        <tr><td className="p-2 border">Set-builder notation</td><td className="p-2 border font-mono text-gray-900">A = {'{'}x | x is a positive integer &le; 5{'}'}</td><td className="p-2 border">Define by property</td></tr>
        <tr><td className="p-2 border">Membership</td><td className="p-2 border font-mono text-gray-900">3 &isin; A</td><td className="p-2 border">3 is an element of A</td></tr>
        <tr><td className="p-2 border">Non-membership</td><td className="p-2 border font-mono text-gray-900">7 &notin; A</td><td className="p-2 border">7 is not an element of A</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Important Sets</h2>
    <table className="min-w-full border border-gray-300 text-left">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Symbol</th>
          <th className="p-2 border">Name</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border font-mono text-gray-900">&empty; or {'{}'}</td><td className="p-2 border">Empty set</td><td className="p-2 border">Contains no elements</td></tr>
        <tr><td className="p-2 border font-mono text-gray-900">&#8469;</td><td className="p-2 border">Natural numbers</td><td className="p-2 border">{'{'}0, 1, 2, 3, ...{'}'}</td></tr>
        <tr><td className="p-2 border font-mono text-gray-900">&#8484;</td><td className="p-2 border">Integers</td><td className="p-2 border">{'{'}..., -2, -1, 0, 1, 2, ...{'}'}</td></tr>
        <tr><td className="p-2 border font-mono text-gray-900">&#8474;</td><td className="p-2 border">Rational numbers</td><td className="p-2 border">Fractions p/q where p, q &isin; &#8484;, q &ne; 0</td></tr>
        <tr><td className="p-2 border font-mono text-gray-900">&#8477;</td><td className="p-2 border">Real numbers</td><td className="p-2 border">All points on the number line</td></tr>
        <tr><td className="p-2 border font-mono text-gray-900">&#8450;</td><td className="p-2 border">Complex numbers</td><td className="p-2 border">a + bi where a, b &isin; &#8477;</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Cardinality</h2>
    <table className="min-w-full border border-gray-300 text-left">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Concept</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">Definition</td><td className="p-2 border">The cardinality |A| is the number of elements in set A</td></tr>
        <tr><td className="p-2 border">Example</td><td className="p-2 border font-mono text-gray-900">|{'{'}a, b, c{'}'}| = 3</td></tr>
        <tr><td className="p-2 border">Empty set</td><td className="p-2 border font-mono text-gray-900">|&empty;| = 0</td></tr>
        <tr><td className="p-2 border">Infinite sets</td><td className="p-2 border">Sets can be finite or infinite (|&#8469;| = &infin;)</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Subsets</h2>
    <table className="min-w-full border border-gray-300 text-left">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Type</th>
          <th className="p-2 border">Notation</th>
          <th className="p-2 border">Meaning</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">Subset</td><td className="p-2 border font-mono text-gray-900">A &sube; B</td><td className="p-2 border">Every element of A is also in B</td></tr>
        <tr><td className="p-2 border">Proper subset</td><td className="p-2 border font-mono text-gray-900">A &sub; B</td><td className="p-2 border">A &sube; B and A &ne; B</td></tr>
        <tr><td className="p-2 border">Example</td><td className="p-2 border font-mono text-gray-900">{'{'}1, 2{'}'} &sube; {'{'}1, 2, 3{'}'}</td><td className="p-2 border">True</td></tr>
        <tr><td className="p-2 border">Empty set property</td><td className="p-2 border font-mono text-gray-900">&empty; &sube; A</td><td className="p-2 border">The empty set is a subset of every set</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Power Set</h2>
    <table className="min-w-full border border-gray-300 text-left">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Concept</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">Definition</td><td className="p-2 border">The power set P(A) is the set of all subsets of A</td></tr>
        <tr><td className="p-2 border">Example</td><td className="p-2 border font-mono text-gray-900">P({'{'}1, 2{'}'}) = {'{'}&empty;, {'{'}1{'}'}, {'{'}2{'}'}, {'{'}1, 2{'}'}{'}'}</td></tr>
        <tr><td className="p-2 border">Cardinality</td><td className="p-2 border">If |A| = n, then |P(A)| = 2&#8319;</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Practice Problems</h2>
    <table className="min-w-full border border-gray-300 text-left">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">#</th>
          <th className="p-2 border">Problem</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">1</td><td className="p-2 border">List all elements of A = {'{'}x | x is a prime number less than 20{'}'}</td></tr>
        <tr><td className="p-2 border">2</td><td className="p-2 border">Find the power set of {'{'}a, b, c{'}'}</td></tr>
        <tr><td className="p-2 border">3</td><td className="p-2 border">Is {'{'}1, 2{'}'} = {'{'}2, 1{'}'}? Explain why.</td></tr>
        <tr><td className="p-2 border">4</td><td className="p-2 border">How many subsets does a set with 5 elements have?</td></tr>
      </tbody>
    </table>
  </div>
);

export default IntroSets;
