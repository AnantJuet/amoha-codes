import React from 'react';

const CommonDistributions: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Common Distributions</h1>

    <h2 className="text-2xl font-bold mt-8">Bernoulli</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Description</th>
          <th className="p-2 border">Expected Value</th>
          <th className="p-2 border">Variance</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border">Single trial with success probability p</td>
          <td className="p-2 border">E[X] = p</td>
          <td className="p-2 border">Var(X) = p(1-p)</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Binomial</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Property</th>
          <th className="p-2 border">Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border">Description</td>
          <td className="p-2 border">n independent Bernoulli trials</td>
        </tr>
        <tr>
          <td className="p-2 border">PMF</td>
          <td className="p-2 border font-mono text-gray-900">P(X=k) = C(n,k)p^k(1-p)^(n-k)</td>
        </tr>
        <tr>
          <td className="p-2 border">Expected Value</td>
          <td className="p-2 border">E[X] = np</td>
        </tr>
        <tr>
          <td className="p-2 border">Variance</td>
          <td className="p-2 border">Var(X) = np(1-p)</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Geometric</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Property</th>
          <th className="p-2 border">Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border">Description</td>
          <td className="p-2 border">Trials until first success</td>
        </tr>
        <tr>
          <td className="p-2 border">PMF</td>
          <td className="p-2 border font-mono text-gray-900">P(X=k) = (1-p)^(k-1)p</td>
        </tr>
        <tr>
          <td className="p-2 border">Expected Value</td>
          <td className="p-2 border">E[X] = 1/p</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Poisson</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Property</th>
          <th className="p-2 border">Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border">Description</td>
          <td className="p-2 border">Events in fixed interval</td>
        </tr>
        <tr>
          <td className="p-2 border">PMF</td>
          <td className="p-2 border font-mono text-gray-900">P(X=k) = lambda^k * e^(-lambda) / k!</td>
        </tr>
        <tr>
          <td className="p-2 border">Expected Value</td>
          <td className="p-2 border">E[X] = lambda</td>
        </tr>
        <tr>
          <td className="p-2 border">Variance</td>
          <td className="p-2 border">Var(X) = lambda</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Normal (Gaussian)</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Property</th>
          <th className="p-2 border">Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border">Description</td>
          <td className="p-2 border">Bell curve with mean mu and standard deviation sigma</td>
        </tr>
        <tr>
          <td className="p-2 border">68-95-99.7 Rule</td>
          <td className="p-2 border">Data within 1, 2, 3 standard deviations</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Practice Problems</h2>
    <ol className="list-decimal ml-6 mt-2 space-y-1">
      <li>10 coin flips, P(exactly 7 heads)?</li>
      <li>Average 3 emails/hour, P(5 emails in an hour)?</li>
    </ol>
  </div>
);

export default CommonDistributions;
