import React from 'react';

const RecurrenceSolving: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Solving Recurrences</h1>

    <p className="text-lg leading-relaxed">
      Algorithm running times are often expressed as recurrence relations. Several methods
      exist to solve them and find closed-form solutions.
    </p>

    <h2 className="text-2xl font-bold mt-8">1. Substitution Method</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Step</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">1</td><td className="p-2 border">Guess the form of the solution</td></tr>
        <tr><td className="p-2 border">2</td><td className="p-2 border">Use induction to prove it correct</td></tr>
        <tr><td className="p-2 border">3</td><td className="p-2 border">Find constants</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">2. Recursion Tree</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Step</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">1</td><td className="p-2 border">Draw tree of recursive calls</td></tr>
        <tr><td className="p-2 border">2</td><td className="p-2 border">Sum work at each level</td></tr>
        <tr><td className="p-2 border">3</td><td className="p-2 border">Sum across all levels</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">3. Master Theorem</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Overview</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border">
            <p>Quick formula for T(n) = aT(n/b) + f(n)</p>
            <p className="text-sm mt-2">(See dedicated topic for details)</p>
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
        <tr><td className="p-2 border">1</td><td className="p-2 border">Solve T(n) = T(n-1) + n using substitution</td></tr>
        <tr><td className="p-2 border">2</td><td className="p-2 border">Draw recursion tree for T(n) = 2T(n/2) + n</td></tr>
      </tbody>
    </table>
  </div>
);

export default RecurrenceSolving;
