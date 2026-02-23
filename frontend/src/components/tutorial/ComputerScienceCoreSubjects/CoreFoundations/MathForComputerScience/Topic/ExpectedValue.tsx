import React from 'react';

const ExpectedValue: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Expected Value</h1>

    <p className="text-lg leading-relaxed">
      The expected value (mean) is the long-run average of a random variable.
      It's crucial for decision-making and algorithm analysis.
    </p>

    <h2 className="text-2xl font-bold mt-8">Definition</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Type</th>
          <th className="p-2 border">Formula</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border"><strong>Discrete</strong></td>
          <td className="p-2 border font-mono text-gray-900">E[X] = Σ xᵢ × P(X = xᵢ)</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Continuous</strong></td>
          <td className="p-2 border font-mono text-gray-900">E[X] = ∫ x × f(x) dx</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Properties</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Property</th>
          <th className="p-2 border">Note</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border font-mono text-gray-900">E[aX + b] = aE[X] + b</td>
          <td className="p-2 border">Linearity</td>
        </tr>
        <tr>
          <td className="p-2 border font-mono text-gray-900">E[X + Y] = E[X] + E[Y]</td>
          <td className="p-2 border">Always true!</td>
        </tr>
        <tr>
          <td className="p-2 border font-mono text-gray-900">E[XY] = E[X]E[Y]</td>
          <td className="p-2 border">Only if independent</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Example</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Scenario</th>
          <th className="p-2 border">Expected Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border">Fair die</td>
          <td className="p-2 border">E[X] = (1+2+3+4+5+6)/6 = 3.5</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Practice Problems</h2>
    <ol className="list-decimal ml-6 mt-2 space-y-1">
      <li>Find E[X] for a biased coin with P(Head)=0.7</li>
      <li>If E[X]=5 and E[Y]=3, what is E[2X+3Y]?</li>
    </ol>
  </div>
);

export default ExpectedValue;
