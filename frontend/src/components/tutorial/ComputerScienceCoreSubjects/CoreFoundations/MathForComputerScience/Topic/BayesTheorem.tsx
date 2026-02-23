import React from 'react';

const BayesTheorem: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Bayes' Theorem</h1>

    <p className="text-lg leading-relaxed">
      Bayes' theorem relates conditional probabilities and allows us to update beliefs
      based on new evidence. It's the foundation of Bayesian inference.
    </p>

    <h2 className="text-2xl font-bold mt-8">The Formula</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Bayes' Theorem</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border font-mono text-center text-lg text-gray-900">P(A|B) = P(B|A) × P(A) / P(B)</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Terminology</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Term</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border"><strong>P(A)</strong></td>
          <td className="p-2 border">Prior probability</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>P(B|A)</strong></td>
          <td className="p-2 border">Likelihood</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>P(A|B)</strong></td>
          <td className="p-2 border">Posterior probability</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>P(B)</strong></td>
          <td className="p-2 border">Evidence (normalizing constant)</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Applications</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Application</th>
          <th className="p-2 border">Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border"><strong>Spam filtering</strong></td>
          <td className="p-2 border">P(Spam|Words)</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Medical diagnosis</strong></td>
          <td className="p-2 border">P(Disease|Symptoms)</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Machine learning</strong></td>
          <td className="p-2 border">Naive Bayes classifier</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Practice Problems</h2>
    <ol className="list-decimal ml-6 mt-2 space-y-1">
      <li>A test is 95% accurate. If 1% have disease, what's P(Disease|Positive)?</li>
      <li>Use Bayes to update probability after observing evidence</li>
    </ol>
  </div>
);

export default BayesTheorem;
