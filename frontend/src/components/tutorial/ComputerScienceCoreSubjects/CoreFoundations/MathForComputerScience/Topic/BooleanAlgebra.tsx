import React from 'react';

const BooleanAlgebra: React.FC = () => (
  <div className="mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Boolean Algebra</h1>

    <p className="text-lg leading-relaxed">
      Boolean algebra deals with binary values (0 and 1) and is the foundation of digital
      circuit design and computer logic.
    </p>

    <h2 className="text-2xl font-bold mt-8">Basic Operations</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Operation</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border font-semibold">AND (·)</td>
          <td className="p-2 border">1·1=1, all others 0</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">OR (+)</td>
          <td className="p-2 border">0+0=0, all others 1</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">NOT (')</td>
          <td className="p-2 border">0'=1, 1'=0</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Laws</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Law</th>
          <th className="p-2 border">Expression</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border font-semibold">De Morgan's</td>
          <td className="p-2 border">(A·B)' = A'+B', (A+B)' = A'·B'</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Absorption</td>
          <td className="p-2 border">A+A·B = A, A·(A+B) = A</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Complement</td>
          <td className="p-2 border">A+A' = 1, A·A' = 0</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Applications</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Field</th>
          <th className="p-2 border">Application</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border font-semibold">Digital circuits</td>
          <td className="p-2 border">Logic gates</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Programming</td>
          <td className="p-2 border">Conditional statements</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Databases</td>
          <td className="p-2 border">Query optimization</td>
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
          <td className="p-2 border">Simplify: A·B + A·B'</td>
        </tr>
        <tr>
          <td className="p-2 border">2</td>
          <td className="p-2 border">Apply De Morgan's to (A+B+C)'</td>
        </tr>
      </tbody>
    </table>

  </div>
);

export default BooleanAlgebra;
