import React from 'react';

const ConditionalProbability: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Conditional Probability</h1>

    <p className="text-lg leading-relaxed">
      Conditional probability measures the probability of an event given that another
      event has occurred. It's fundamental to Bayesian reasoning and machine learning.
    </p>

    <h2 className="text-2xl font-bold mt-8">Definition</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Formula</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border font-mono text-gray-900">P(A|B) = P(A ∩ B) / P(B)</td>
          <td className="p-2 border">"Probability of A given B"</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Multiplication Rule</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Formula</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border font-mono text-gray-900">P(A ∩ B) = P(A|B) × P(B) = P(B|A) × P(A)</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Independence</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Condition</th>
          <th className="p-2 border">Equivalent Form</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border">Events A and B are independent if P(A|B) = P(A)</td>
          <td className="p-2 border">P(A ∩ B) = P(A) × P(B)</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Practice Problems</h2>
    <ol className="list-decimal ml-6 mt-2 space-y-1">
      <li>A card is drawn and is red. What's P(Heart|Red)?</li>
      <li>If P(A)=0.3, P(B)=0.4, P(A∩B)=0.12, are A and B independent?</li>
    </ol>
  </div>
);

export default ConditionalProbability;
