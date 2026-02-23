import React from 'react';

const LinearTransformations: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Linear Transformations</h1>

    <p className="text-lg leading-relaxed">
      A linear transformation T: V → W preserves addition and scalar multiplication.
      Every linear transformation can be represented by a matrix.
    </p>

    <h2 className="text-2xl font-bold mt-8">Definition</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">T is linear if:</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border">T(u + v) = T(u) + T(v)</td>
        </tr>
        <tr>
          <td className="p-2 border">T(cv) = cT(v)</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Common Transformations</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Transformation</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border font-semibold">Rotation</td>
          <td className="p-2 border">Rotate by angle θ</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Scaling</td>
          <td className="p-2 border">Stretch/shrink by factors</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Reflection</td>
          <td className="p-2 border">Mirror across axis</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Projection</td>
          <td className="p-2 border">Project onto subspace</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Kernel and Image</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Concept</th>
          <th className="p-2 border">Definition</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border font-semibold">Kernel (Null space)</td>
          <td className="p-2 border">{'{'}v | T(v) = 0{'}'}</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Image (Range)</td>
          <td className="p-2 border">{'{'}T(v) | v ∈ V{'}'}</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Rank-Nullity</td>
          <td className="p-2 border">dim(Kernel) + dim(Image) = dim(V)</td>
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
          <td className="p-2 border">Write the matrix for 90° rotation in 2D</td>
        </tr>
        <tr>
          <td className="p-2 border">2</td>
          <td className="p-2 border">Find the kernel of T(x,y) = (x+y, 0)</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default LinearTransformations;
