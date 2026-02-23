import React from 'react';

const RandomVariables: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Random Variables</h1>

    <p className="text-lg leading-relaxed">
      A random variable assigns a numerical value to each outcome in a sample space.
      It allows us to use mathematical operations on random outcomes.
    </p>

    <h2 className="text-2xl font-bold mt-8">Types</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Type</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border"><strong>Discrete</strong></td>
          <td className="p-2 border">Takes countable values (die roll, coin flip)</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Continuous</strong></td>
          <td className="p-2 border">Takes values in a range (height, time)</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Probability Functions</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Function</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border"><strong>PMF (discrete)</strong></td>
          <td className="p-2 border">P(X = x) for each value x</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>PDF (continuous)</strong></td>
          <td className="p-2 border">f(x) where P(a ≤ X ≤ b) = ∫f(x)dx</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>CDF</strong></td>
          <td className="p-2 border">F(x) = P(X ≤ x)</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Practice Problems</h2>
    <ol className="list-decimal ml-6 mt-2 space-y-1">
      <li>Write the PMF for rolling a fair die</li>
      <li>Is "number of heads in 10 coin flips" discrete or continuous?</li>
    </ol>
  </div>
);

export default RandomVariables;
