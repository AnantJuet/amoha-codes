import React from 'react';

const MatrixOperations: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Matrix Operations</h1>

    <h2 className="text-2xl font-bold mt-8">Matrix Addition</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Concept</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border font-semibold">Rule</td>
          <td className="p-2 border">Add corresponding elements. Matrices must have same dimensions.</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Formula</td>
          <td className="p-2 border font-mono text-gray-900">(A + B)ᵢⱼ = Aᵢⱼ + Bᵢⱼ</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Matrix Multiplication</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Concept</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border font-semibold">Dimensions</td>
          <td className="p-2 border">For A (m×n) and B (n×p), product C = AB is m×p</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Formula</td>
          <td className="p-2 border font-mono text-gray-900">Cᵢⱼ = Σ Aᵢₖ × Bₖⱼ (sum over k)</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Note</td>
          <td className="p-2 border">Inner dimensions must match. AB ≠ BA in general!</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Transpose</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Concept</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border font-semibold">Definition</td>
          <td className="p-2 border">Flip rows and columns: (Aᵀ)ᵢⱼ = Aⱼᵢ</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Properties</td>
          <td className="p-2 border">(AB)ᵀ = BᵀAᵀ, (Aᵀ)ᵀ = A</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Properties</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Property</th>
          <th className="p-2 border">Expression</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border font-semibold">Associative</td>
          <td className="p-2 border">A(BC) = (AB)C</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Distributive</td>
          <td className="p-2 border">A(B + C) = AB + AC</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Identity</td>
          <td className="p-2 border">AI = IA = A</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">NOT commutative</td>
          <td className="p-2 border">AB ≠ BA</td>
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
          <td className="p-2 border">Multiply a 2×3 matrix by a 3×2 matrix</td>
        </tr>
        <tr>
          <td className="p-2 border">2</td>
          <td className="p-2 border">Verify (AB)ᵀ = BᵀAᵀ for 2×2 matrices</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default MatrixOperations;
