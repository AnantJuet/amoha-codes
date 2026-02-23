import React from 'react';

const SetOperations: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Set Operations</h1>

    <p className="text-lg leading-relaxed">
      Set operations allow us to combine, compare, and manipulate sets. These operations are
      fundamental in database queries, programming logic, and mathematical proofs.
    </p>

    <h2 className="text-2xl font-bold mt-8">Union (A &cup; B)</h2>
    <table className="min-w-full border border-gray-300 text-left">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Aspect</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">Definition</td><td className="p-2 border">Contains all elements that are in A OR in B (or both)</td></tr>
        <tr><td className="p-2 border">Notation</td><td className="p-2 border font-mono text-gray-900">A &cup; B = {'{'}x | x &isin; A or x &isin; B{'}'}</td></tr>
        <tr><td className="p-2 border">Example</td><td className="p-2 border font-mono text-gray-900">{'{'}1, 2, 3{'}'} &cup; {'{'}3, 4, 5{'}'} = {'{'}1, 2, 3, 4, 5{'}'}</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Intersection (A &cap; B)</h2>
    <table className="min-w-full border border-gray-300 text-left">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Aspect</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">Definition</td><td className="p-2 border">Contains all elements that are in A AND in B</td></tr>
        <tr><td className="p-2 border">Notation</td><td className="p-2 border font-mono text-gray-900">A &cap; B = {'{'}x | x &isin; A and x &isin; B{'}'}</td></tr>
        <tr><td className="p-2 border">Example</td><td className="p-2 border font-mono text-gray-900">{'{'}1, 2, 3{'}'} &cap; {'{'}3, 4, 5{'}'} = {'{'}3{'}'}</td></tr>
        <tr><td className="p-2 border">Disjoint Sets</td><td className="p-2 border">If A &cap; B = &empty;, the sets are called disjoint</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Difference (A - B or A \ B)</h2>
    <table className="min-w-full border border-gray-300 text-left">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Aspect</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">Definition</td><td className="p-2 border">Contains elements in A but NOT in B</td></tr>
        <tr><td className="p-2 border">Notation</td><td className="p-2 border font-mono text-gray-900">A - B = {'{'}x | x &isin; A and x &notin; B{'}'}</td></tr>
        <tr><td className="p-2 border">Example</td><td className="p-2 border font-mono text-gray-900">{'{'}1, 2, 3{'}'} - {'{'}3, 4, 5{'}'} = {'{'}1, 2{'}'}</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Complement (A' or A&#7580;)</h2>
    <table className="min-w-full border border-gray-300 text-left">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Aspect</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">Definition</td><td className="p-2 border">Contains all elements NOT in A (relative to universal set U)</td></tr>
        <tr><td className="p-2 border">Notation</td><td className="p-2 border font-mono text-gray-900">A' = U - A = {'{'}x | x &isin; U and x &notin; A{'}'}</td></tr>
        <tr><td className="p-2 border">Example</td><td className="p-2 border font-mono text-gray-900">If U = {'{'}1, 2, 3, 4, 5{'}'} and A = {'{'}1, 2{'}'}, then A' = {'{'}3, 4, 5{'}'}</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Symmetric Difference (A &Delta; B)</h2>
    <table className="min-w-full border border-gray-300 text-left">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Aspect</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">Definition</td><td className="p-2 border">Contains elements in A or B but NOT in both (XOR)</td></tr>
        <tr><td className="p-2 border">Notation</td><td className="p-2 border font-mono text-gray-900">A &Delta; B = (A - B) &cup; (B - A) = (A &cup; B) - (A &cap; B)</td></tr>
        <tr><td className="p-2 border">Example</td><td className="p-2 border font-mono text-gray-900">{'{'}1, 2, 3{'}'} &Delta; {'{'}3, 4, 5{'}'} = {'{'}1, 2, 4, 5{'}'}</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Cartesian Product (A &times; B)</h2>
    <table className="min-w-full border border-gray-300 text-left">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Aspect</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">Definition</td><td className="p-2 border">Set of all ordered pairs (a, b) where a &isin; A and b &isin; B</td></tr>
        <tr><td className="p-2 border">Notation</td><td className="p-2 border font-mono text-gray-900">A &times; B = {'{'}(a, b) | a &isin; A and b &isin; B{'}'}</td></tr>
        <tr><td className="p-2 border">Example</td><td className="p-2 border font-mono text-gray-900">{'{'}1, 2{'}'} &times; {'{'}a, b{'}'} = {'{'}(1,a), (1,b), (2,a), (2,b){'}'}</td></tr>
        <tr><td className="p-2 border">Cardinality</td><td className="p-2 border font-mono text-gray-900">|A &times; B| = |A| &times; |B|</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Set Laws</h2>
    <table className="min-w-full border border-gray-300 text-left">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Law</th>
          <th className="p-2 border">Formula</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">Commutative</td><td className="p-2 border font-mono text-gray-900">A &cup; B = B &cup; A, A &cap; B = B &cap; A</td></tr>
        <tr><td className="p-2 border">Associative</td><td className="p-2 border font-mono text-gray-900">(A &cup; B) &cup; C = A &cup; (B &cup; C)</td></tr>
        <tr><td className="p-2 border">Distributive</td><td className="p-2 border font-mono text-gray-900">A &cap; (B &cup; C) = (A &cap; B) &cup; (A &cap; C)</td></tr>
        <tr><td className="p-2 border">De Morgan's</td><td className="p-2 border font-mono text-gray-900">(A &cup; B)' = A' &cap; B', (A &cap; B)' = A' &cup; B'</td></tr>
        <tr><td className="p-2 border">Identity</td><td className="p-2 border font-mono text-gray-900">A &cup; &empty; = A, A &cap; U = A</td></tr>
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
        <tr><td className="p-2 border">1</td><td className="p-2 border">If A = {'{'}1, 2, 3, 4{'}'} and B = {'{'}3, 4, 5, 6{'}'}, find A &cup; B, A &cap; B, A - B, B - A</td></tr>
        <tr><td className="p-2 border">2</td><td className="p-2 border">Verify De Morgan's law for A = {'{'}1, 2{'}'}, B = {'{'}2, 3{'}'}, U = {'{'}1, 2, 3, 4{'}'}</td></tr>
        <tr><td className="p-2 border">3</td><td className="p-2 border">Find {'{'}a, b{'}'} &times; {'{'}1, 2, 3{'}'}</td></tr>
        <tr><td className="p-2 border">4</td><td className="p-2 border">Prove that A &Delta; B = B &Delta; A</td></tr>
      </tbody>
    </table>
  </div>
);

export default SetOperations;
