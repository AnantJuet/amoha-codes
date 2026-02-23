import React from 'react';

const Eigenvalues: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Eigenvalues and Eigenvectors</h1>

    <p className="text-lg leading-relaxed">
      Eigenvectors are special vectors that only get scaled (not rotated) when a linear
      transformation is applied. The scaling factor is the eigenvalue.
    </p>

    <h2 className="text-2xl font-bold mt-8">Definition</h2>
    <pre className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-3 font-mono text-center text-lg text-gray-900">
Av = λv
    </pre>
    <p className="mt-2 text-center">v is eigenvector, λ is eigenvalue</p>

    <h2 className="text-2xl font-bold mt-8">Finding Eigenvalues</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Method</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border font-semibold">Characteristic equation</td>
          <td className="p-2 border font-mono text-gray-900">det(A - λI) = 0</td>
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
          <td className="p-2 border font-semibold">PCA</td>
          <td className="p-2 border">Dimensionality reduction</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">PageRank</td>
          <td className="p-2 border">Google's original ranking algorithm</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Stability</td>
          <td className="p-2 border">Differential equations</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Quantum mechanics</td>
          <td className="p-2 border">Observable measurements</td>
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
          <td className="p-2 border">Find eigenvalues of [[4,1],[2,3]]</td>
        </tr>
        <tr>
          <td className="p-2 border">2</td>
          <td className="p-2 border">Find eigenvectors for each eigenvalue</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default Eigenvalues;
