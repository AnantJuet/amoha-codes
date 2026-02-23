import React from 'react';

const VectorsMatrices: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Vectors and Matrices</h1>

    <p className="text-lg leading-relaxed">
      Vectors and matrices are fundamental structures in linear algebra. They are used
      extensively in computer graphics, machine learning, physics simulations, and more.
    </p>

    <h2 className="text-2xl font-bold mt-8">Vectors</h2>
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
          <td className="p-2 border">A vector is an ordered list of numbers: v = [v₁, v₂, ..., vₙ]</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Row vector</td>
          <td className="p-2 border">1 × n matrix</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Column vector</td>
          <td className="p-2 border">n × 1 matrix</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Dimension</td>
          <td className="p-2 border">Number of components</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Vector Operations</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Operation</th>
          <th className="p-2 border">Formula</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border font-semibold">Addition</td>
          <td className="p-2 border">[a, b] + [c, d] = [a+c, b+d]</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Scalar multiplication</td>
          <td className="p-2 border">k[a, b] = [ka, kb]</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Dot product</td>
          <td className="p-2 border">[a, b] · [c, d] = ac + bd</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Magnitude</td>
          <td className="p-2 border">||v|| = √(v₁² + v₂² + ... + vₙ²)</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Matrices</h2>
    <p className="mt-3 font-semibold">A matrix is a 2D array of numbers with m rows and n columns.</p>
    <pre className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-center text-gray-900">
{`A = | a₁₁  a₁₂ |
    | a₂₁  a₂₂ |`}
    </pre>
    <p className="mt-2">Dimension: m × n (rows × columns)</p>

    <h2 className="text-2xl font-bold mt-8">Special Matrices</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Type</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border font-semibold">Square matrix</td>
          <td className="p-2 border">m = n</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Identity matrix (I)</td>
          <td className="p-2 border">1s on diagonal, 0s elsewhere</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Zero matrix</td>
          <td className="p-2 border">All elements are 0</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Diagonal matrix</td>
          <td className="p-2 border">Non-zero only on main diagonal</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Symmetric</td>
          <td className="p-2 border">A = Aᵀ</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Applications in CS</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Field</th>
          <th className="p-2 border">Application</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border font-semibold">Graphics</td>
          <td className="p-2 border">Transformations (rotation, scaling, translation)</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">ML</td>
          <td className="p-2 border">Data representation, neural network weights</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Games</td>
          <td className="p-2 border">Physics, 3D rendering</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Networks</td>
          <td className="p-2 border">Adjacency matrices</td>
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
          <td className="p-2 border">Calculate [1, 2, 3] · [4, 5, 6]</td>
        </tr>
        <tr>
          <td className="p-2 border">2</td>
          <td className="p-2 border">Find the magnitude of vector [3, 4]</td>
        </tr>
        <tr>
          <td className="p-2 border">3</td>
          <td className="p-2 border">Write the 3×3 identity matrix</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default VectorsMatrices;
