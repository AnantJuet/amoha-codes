import React from 'react';

const IntroRelations: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Introduction to Relations</h1>

    <p className="text-lg leading-relaxed">
      A relation describes a relationship between elements of sets. Relations are fundamental
      to databases, programming, and mathematics. They generalize the concept of functions
      and allow us to express connections between objects.
    </p>

    <h2 className="text-2xl font-bold mt-8">Definition</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Concept</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border font-semibold">Relation R from A to B</td>
          <td className="p-2 border">A subset of the Cartesian product A × B</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Notation</td>
          <td className="p-2 border">If (a, b) ∈ R, we write aRb or R(a, b), meaning "a is related to b"</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Example</td>
          <td className="p-2 border">
            A = {'{'}1, 2, 3{'}'}, B = {'{'}a, b{'}'}<br />
            R = {'{'}(1, a), (2, b), (3, a){'}'} is a relation from A to B
          </td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Binary Relations on a Set</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Relation</th>
          <th className="p-2 border">Set/Pairs</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border font-semibold">Definition</td>
          <td className="p-2 border">A relation on set A is a relation from A to A (subset of A × A)</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Example Set</td>
          <td className="p-2 border">Let A = {'{'}1, 2, 3, 4{'}'}</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">R = "less than"</td>
          <td className="p-2 border">{'{'}(1,2), (1,3), (1,4), (2,3), (2,4), (3,4){'}'}</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">S = "divides"</td>
          <td className="p-2 border">{'{'}(1,1), (1,2), (1,3), (1,4), (2,2), (2,4), (3,3), (4,4){'}'}</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Domain and Range</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Term</th>
          <th className="p-2 border">Definition</th>
          <th className="p-2 border">Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border font-semibold">Domain</td>
          <td className="p-2 border">The set of all first elements in the relation</td>
          <td className="p-2 border font-mono text-gray-900">Domain(R) = {'{'}1, 2, 3{'}'}</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Range (Codomain image)</td>
          <td className="p-2 border">The set of all second elements in the relation</td>
          <td className="p-2 border font-mono text-gray-900">Range(R) = {'{'}a, b{'}'}</td>
        </tr>
      </tbody>
    </table>
    <p className="mt-2 text-sm">For R = {'{'}(1, a), (2, b), (3, a){'}'}</p>

    <h2 className="text-2xl font-bold mt-8">Inverse Relation</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Concept</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border font-semibold">Definition</td>
          <td className="p-2 border font-mono text-gray-900">R⁻¹ = {'{'}(b, a) | (a, b) ∈ R{'}'}</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Operation</td>
          <td className="p-2 border">Swap the elements in each ordered pair</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Example</td>
          <td className="p-2 border font-mono text-gray-900">
            If R = {'{'}(1, a), (2, b){'}'}<br />
            Then R⁻¹ = {'{'}(a, 1), (b, 2){'}'}
          </td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Composition of Relations</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Concept</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border font-semibold">Definition</td>
          <td className="p-2 border font-mono text-gray-900">S ∘ R = {'{'}(a, c) | ∃b: (a, b) ∈ R and (b, c) ∈ S{'}'}</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Example</td>
          <td className="p-2 border font-mono text-gray-900">
            R = {'{'}(1, 2), (2, 3){'}'}, S = {'{'}(2, a), (3, b){'}'}<br />
            S ∘ R = {'{'}(1, a), (2, b){'}'}
          </td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Representing Relations</h2>
    <ul className="list-disc ml-6 mt-2 space-y-2">
      <li><strong>Set of ordered pairs:</strong> R = {'{'}(a, b), (c, d), ...{'}'}</li>
      <li><strong>Matrix:</strong> M[i][j] = 1 if (aᵢ, aⱼ) ∈ R</li>
      <li><strong>Directed graph:</strong> Arrow from a to b if (a, b) ∈ R</li>
      <li><strong>Arrow diagram:</strong> Visual representation with arrows</li>
    </ul>

    <h2 className="text-2xl font-bold mt-8">Applications in CS</h2>
    <ul className="list-disc ml-6 mt-2 space-y-2">
      <li><strong>Databases:</strong> Tables are relations, foreign keys define relationships</li>
      <li><strong>Graphs:</strong> Edge sets are relations on vertices</li>
      <li><strong>Object-oriented programming:</strong> "is-a" and "has-a" relationships</li>
      <li><strong>File systems:</strong> Directory containment relation</li>
    </ul>

    <h2 className="text-2xl font-bold mt-8">Practice Problems</h2>
    <ol className="list-decimal ml-6 mt-2 space-y-2">
      <li>Given A = {'{'}1, 2, 3{'}'}, list all pairs in the relation "x divides y"</li>
      <li>Find the inverse of R = {'{'}(a, 1), (b, 2), (c, 1){'}'}</li>
      <li>If R = {'{'}(1, 2), (2, 3){'}'} and S = {'{'}(2, x), (3, y){'}'}, find S ∘ R</li>
      <li>Draw the matrix representation for R = {'{'}(1,1), (1,2), (2,2){'}'} on {'{'}1, 2, 3{'}'}</li>
    </ol>
  </div>
);

export default IntroRelations;
