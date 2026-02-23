import React from 'react';

const VectorSpaces: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Vector Spaces</h1>

    <p className="text-lg leading-relaxed">
      A vector space is a collection of vectors that is closed under addition and scalar
      multiplication. The concepts of basis, dimension, and span are fundamental.
    </p>

    <h2 className="text-2xl font-bold mt-8">Key Concepts</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Concept</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border font-semibold">Linear combination</td>
          <td className="p-2 border">c₁v₁ + c₂v₂ + ... + cₙvₙ</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Span</td>
          <td className="p-2 border">Set of all linear combinations of given vectors</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Linear independence</td>
          <td className="p-2 border">No vector is a linear combination of others</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Basis</td>
          <td className="p-2 border">Linearly independent set that spans the space</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Dimension</td>
          <td className="p-2 border">Number of vectors in a basis</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Examples</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Space</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border font-semibold">Rⁿ</td>
          <td className="p-2 border">Standard n-dimensional space, dimension n</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Standard basis for R³</td>
          <td className="p-2 border">e₁=[1,0,0], e₂=[0,1,0], e₃=[0,0,1]</td>
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
          <td className="p-2 border">Are [1,2] and [2,4] linearly independent?</td>
        </tr>
        <tr>
          <td className="p-2 border">2</td>
          <td className="p-2 border">Find a basis for span{'{'}[1,1,0], [0,1,1], [1,2,1]{'}'}</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default VectorSpaces;
