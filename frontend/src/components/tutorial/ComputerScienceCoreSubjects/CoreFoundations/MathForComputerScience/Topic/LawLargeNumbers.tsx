import React from 'react';

const LawLargeNumbers: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Law of Large Numbers</h1>

    <p className="text-lg leading-relaxed">
      The Law of Large Numbers states that as sample size increases, the sample mean
      converges to the expected value. This justifies using simulations and sampling.
    </p>

    <h2 className="text-2xl font-bold mt-8">Statement</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Condition</th>
          <th className="p-2 border">Result</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border">For i.i.d. random variables X1, X2, ..., Xn with mean mu</td>
          <td className="p-2 border font-mono text-gray-900">(X1 + X2 + ... + Xn)/n -&gt; mu as n -&gt; infinity</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Applications</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Application</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border"><strong>Monte Carlo methods</strong></td>
          <td className="p-2 border">Estimate integrals via sampling</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Polling</strong></td>
          <td className="p-2 border">Larger samples = better accuracy</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Testing</strong></td>
          <td className="p-2 border">Run many trials to estimate probability</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Practice Problems</h2>
    <ol className="list-decimal ml-6 mt-2 space-y-1">
      <li>Flip a coin 1000 times. What proportion heads do you expect?</li>
      <li>Why do casinos always win in the long run?</li>
    </ol>
  </div>
);

export default LawLargeNumbers;
