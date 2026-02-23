import React from 'react';

const MatrixInverse: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Matrix Inverse</h1>

    <p className="text-lg leading-relaxed">
      The inverse of matrix A, denoted A⁻¹, satisfies AA⁻¹ = A⁻¹A = I. Not all matrices
      have inverses—only square matrices with non-zero determinant.
    </p>

    <h2 className="text-2xl font-bold mt-8">2×2 Inverse Formula</h2>
    <pre className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-3 font-mono text-gray-900">
{`A = |a b|, A⁻¹ = (1/det(A)) | d -b|
    |c d|                    |-c  a|`}
    </pre>

    <h2 className="text-2xl font-bold mt-8">Gauss-Jordan Method</h2>
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
          <td className="p-2 border">Form augmented matrix [A|I]</td>
        </tr>
        <tr>
          <td className="p-2 border">2</td>
          <td className="p-2 border">Use row operations to transform to [I|A⁻¹]</td>
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
          <td className="p-2 border font-semibold">Double inverse</td>
          <td className="p-2 border">(A⁻¹)⁻¹ = A</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Product inverse</td>
          <td className="p-2 border">(AB)⁻¹ = B⁻¹A⁻¹</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Transpose inverse</td>
          <td className="p-2 border">(Aᵀ)⁻¹ = (A⁻¹)ᵀ</td>
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
          <td className="p-2 border">Find the inverse of [[2,1],[5,3]]</td>
        </tr>
        <tr>
          <td className="p-2 border">2</td>
          <td className="p-2 border">Verify that AA⁻¹ = I for your answer</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default MatrixInverse;
