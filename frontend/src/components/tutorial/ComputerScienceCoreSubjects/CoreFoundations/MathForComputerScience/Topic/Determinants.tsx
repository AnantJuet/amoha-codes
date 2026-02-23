import React from 'react';

const Determinants: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Determinants</h1>

    <p className="text-lg leading-relaxed">
      The determinant is a scalar value computed from a square matrix that indicates
      whether the matrix is invertible and the scaling factor of the linear transformation.
    </p>

    <h2 className="text-2xl font-bold mt-8">2×2 Determinant</h2>
    <pre className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-3 font-mono text-gray-900">
{`det(A) = |a b| = ad - bc
         |c d|`}
    </pre>

    <h2 className="text-2xl font-bold mt-8">3×3 Determinant</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Method</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border font-semibold">Cofactor Expansion</td>
          <td className="p-2 border">Use cofactor expansion along any row or column</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Formula</td>
          <td className="p-2 border font-mono text-gray-900">det(A) = a₁₁C₁₁ + a₁₂C₁₂ + a₁₃C₁₃</td>
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
          <td className="p-2 border font-semibold">Product</td>
          <td className="p-2 border">det(AB) = det(A) × det(B)</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Transpose</td>
          <td className="p-2 border">det(Aᵀ) = det(A)</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Inverse</td>
          <td className="p-2 border">det(A⁻¹) = 1/det(A)</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Singular</td>
          <td className="p-2 border">det(A) = 0 ⟺ A is singular (not invertible)</td>
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
          <td className="p-2 border">Calculate det([[3,1],[2,4]])</td>
        </tr>
        <tr>
          <td className="p-2 border">2</td>
          <td className="p-2 border">Find determinant of a 3×3 matrix using cofactor expansion</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default Determinants;
