import React from 'react';

const CentralLimitTheorem: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Central Limit Theorem</h1>

    <p className="text-lg leading-relaxed">
      The Central Limit Theorem states that the sum (or average) of many independent
      random variables tends toward a normal distribution, regardless of the original
      distribution.
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
          <td className="p-2 border">For i.i.d. X1, ..., Xn with mean mu and variance sigma^2</td>
          <td className="p-2 border font-mono text-gray-900">(X_bar - mu) / (sigma/sqrt(n)) -&gt; N(0,1) as n -&gt; infinity</td>
        </tr>
        <tr>
          <td className="p-2 border">Sample mean approximation</td>
          <td className="p-2 border">X_bar is approximately N(mu, sigma^2/n)</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Why It Matters</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Importance</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border">Explains why normal distribution is so common</td>
        </tr>
        <tr>
          <td className="p-2 border">Enables hypothesis testing and confidence intervals</td>
        </tr>
        <tr>
          <td className="p-2 border">Works for non-normal distributions (n &gt;= 30 often sufficient)</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Practice Problems</h2>
    <ol className="list-decimal ml-6 mt-2 space-y-1">
      <li>Roll a die 100 times. What's the approximate distribution of the sum?</li>
      <li>Why does height in a population follow a normal distribution?</li>
    </ol>
  </div>
);

export default CentralLimitTheorem;
