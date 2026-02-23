import React from 'react';

const SystemsLinearEquations: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Systems of Linear Equations</h1>

    <p className="text-lg leading-relaxed">
      A system of linear equations can be written as Ax = b, where A is a matrix, x is
      the unknown vector, and b is the result vector.
    </p>

    <h2 className="text-2xl font-bold mt-8">Gaussian Elimination</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Step</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border">1</td>
          <td className="p-2 border">Form augmented matrix [A|b]</td>
        </tr>
        <tr>
          <td className="p-2 border">2</td>
          <td className="p-2 border">Use row operations to get row echelon form</td>
        </tr>
        <tr>
          <td className="p-2 border">3</td>
          <td className="p-2 border">Back-substitute to find solutions</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Solution Types</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Type</th>
          <th className="p-2 border">Condition</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border font-semibold">Unique solution</td>
          <td className="p-2 border">Rank(A) = Rank([A|b]) = n variables</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">No solution</td>
          <td className="p-2 border">Rank(A) {"<"} Rank([A|b]) (inconsistent)</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Infinite solutions</td>
          <td className="p-2 border">Rank(A) = Rank([A|b]) {"<"} n</td>
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
        <tr>
          <td className="p-2 border">1</td>
          <td className="p-2 border">Solve: x + 2y = 5, 3x + y = 5 using Gaussian elimination</td>
        </tr>
        <tr>
          <td className="p-2 border">2</td>
          <td className="p-2 border">Determine if 2x + y = 3, 4x + 2y = 5 has a solution</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default SystemsLinearEquations;
