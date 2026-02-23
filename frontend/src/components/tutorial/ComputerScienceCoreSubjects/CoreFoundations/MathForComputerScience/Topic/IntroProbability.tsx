import React from 'react';

const IntroProbability: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Introduction to Probability</h1>

    <p className="text-lg leading-relaxed">
      Probability measures the likelihood of events occurring. It's essential for algorithm
      analysis, machine learning, cryptography, and data science.
    </p>

    <h2 className="text-2xl font-bold mt-8">Basic Definitions</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Term</th>
          <th className="p-2 border">Definition</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border"><strong>Sample space (S)</strong></td>
          <td className="p-2 border">Set of all possible outcomes</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Event (E)</strong></td>
          <td className="p-2 border">Subset of sample space</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Probability</strong></td>
          <td className="p-2 border">P(E) = |E| / |S| (equally likely outcomes)</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Axioms</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Axiom</th>
          <th className="p-2 border">Statement</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border">1</td>
          <td className="p-2 border">P(E) ≥ 0 for any event E</td>
        </tr>
        <tr>
          <td className="p-2 border">2</td>
          <td className="p-2 border">P(S) = 1</td>
        </tr>
        <tr>
          <td className="p-2 border">3</td>
          <td className="p-2 border">P(A ∪ B) = P(A) + P(B) if A ∩ B = ∅</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Basic Rules</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Rule</th>
          <th className="p-2 border">Formula</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border"><strong>Complement</strong></td>
          <td className="p-2 border">P(A') = 1 - P(A)</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Union</strong></td>
          <td className="p-2 border">P(A ∪ B) = P(A) + P(B) - P(A ∩ B)</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Independence</strong></td>
          <td className="p-2 border">P(A ∩ B) = P(A) × P(B)</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Practice Problems</h2>
    <ol className="list-decimal ml-6 mt-2 space-y-1">
      <li>What's the probability of rolling a 6 on a fair die?</li>
      <li>Two cards are drawn. What's P(both red)?</li>
    </ol>
  </div>
);

export default IntroProbability;
