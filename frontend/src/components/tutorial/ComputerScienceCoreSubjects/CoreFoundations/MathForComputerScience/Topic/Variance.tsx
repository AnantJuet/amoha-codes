import React from 'react';

const Variance: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Variance and Standard Deviation</h1>

    <p className="text-lg leading-relaxed">
      Variance measures how spread out values are from the mean. Standard deviation is
      the square root of variance and has the same units as the data.
    </p>

    <h2 className="text-2xl font-bold mt-8">Definitions</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Measure</th>
          <th className="p-2 border">Formula</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border"><strong>Variance</strong></td>
          <td className="p-2 border font-mono text-gray-900">Var(X) = E[(X - mu)^2] = E[X^2] - (E[X])^2</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Standard Deviation</strong></td>
          <td className="p-2 border font-mono text-gray-900">sigma = sqrt(Var(X))</td>
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
          <td className="p-2 border font-mono text-gray-900">Var(aX + b) = a^2 * Var(X)</td>
          <td className="p-2 border">Constants scale variance quadratically</td>
        </tr>
        <tr>
          <td className="p-2 border font-mono text-gray-900">Var(X + Y) = Var(X) + Var(Y)</td>
          <td className="p-2 border">Only if independent</td>
        </tr>
        <tr>
          <td className="p-2 border font-mono text-gray-900">Var(X) &gt;= 0</td>
          <td className="p-2 border">Always non-negative</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Practice Problems</h2>
    <ol className="list-decimal ml-6 mt-2 space-y-1">
      <li>Find variance of a fair die roll</li>
      <li>If Var(X)=4, what is Var(3X+2)?</li>
    </ol>
  </div>
);

export default Variance;
