import React from 'react';

const PvsNP: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">P vs NP</h1>

    <p className="text-lg leading-relaxed">
      The P vs NP problem asks whether every problem whose solution can be quickly verified
      can also be quickly solved. It's one of the most important open problems in CS.
    </p>

    <h2 className="text-2xl font-bold mt-8">Complexity Classes</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Class</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">P</td><td className="p-2 border">Problems solvable in polynomial time</td></tr>
        <tr><td className="p-2 border">NP</td><td className="p-2 border">Problems verifiable in polynomial time</td></tr>
        <tr><td className="p-2 border">NP-Complete</td><td className="p-2 border">Hardest problems in NP</td></tr>
        <tr><td className="p-2 border">NP-Hard</td><td className="p-2 border">At least as hard as NP-complete</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">NP-Complete Examples</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Problem</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">SAT (Boolean Satisfiability)</td></tr>
        <tr><td className="p-2 border">Traveling Salesman Problem</td></tr>
        <tr><td className="p-2 border">Graph Coloring</td></tr>
        <tr><td className="p-2 border">Knapsack Problem</td></tr>
        <tr><td className="p-2 border">Subset Sum</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">The Big Question</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Does P = NP?</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border">
            <p><strong>If yes:</strong> All verifiable problems are efficiently solvable</p>
            <p><strong>If no:</strong> Some problems are inherently hard to solve</p>
            <p className="mt-2 text-sm">$1 million prize for the answer!</p>
          </td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Practice Problems</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">#</th>
          <th className="p-2 border">Problem</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">1</td><td className="p-2 border">Is sorting in P or NP?</td></tr>
        <tr><td className="p-2 border">2</td><td className="p-2 border">Why is SAT important for NP-completeness?</td></tr>
      </tbody>
    </table>
  </div>
);

export default PvsNP;
