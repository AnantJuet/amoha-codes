import React from 'react';

const PascalsTriangle: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Pascal's Triangle</h1>

    <p className="text-lg leading-relaxed">
      Pascal's Triangle is a triangular array of binomial coefficients. Each number is the sum
      of the two numbers directly above it. It has beautiful mathematical properties and numerous
      applications in combinatorics, probability, and algebra.
    </p>

    <h2 className="text-2xl font-bold mt-8">The Triangle</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-center text-gray-900">
      <pre>
{`          1              (n=0)
         1 1             (n=1)
        1 2 1            (n=2)
       1 3 3 1           (n=3)
      1 4 6 4 1          (n=4)
     1 5 10 10 5 1       (n=5)
    1 6 15 20 15 6 1     (n=6)`}
      </pre>
    </div>
    <p className="mt-2 text-center">Row n contains the coefficients C(n, 0), C(n, 1), ..., C(n, n)</p>

    <h2 className="text-2xl font-bold mt-8">Construction Rule</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Pascal's Identity</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border">
            <p className="font-mono text-center mt-2 text-gray-900">C(n, k) = C(n-1, k-1) + C(n-1, k)</p>
            <p className="mt-2">Each entry is the sum of the two entries above it.</p>
          </td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Properties</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Property</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border"><strong>Symmetry</strong></td>
          <td className="p-2 border">C(n, k) = C(n, n-k)</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Row Sum</strong></td>
          <td className="p-2 border">Sum of row n = 2^n</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Alternating Sum</strong></td>
          <td className="p-2 border">C(n,0) - C(n,1) + C(n,2) - ... = 0 (for n {">"} 0)</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Hockey Stick</strong></td>
          <td className="p-2 border">Diagonal sums give Fibonacci-like patterns</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Powers of 11</strong></td>
          <td className="p-2 border">Row n gives digits of 11^n (for small n)</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Hidden Patterns</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Column</th>
          <th className="p-2 border">Pattern</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border">Column 1</td>
          <td className="p-2 border">Natural numbers (1, 2, 3, 4, ...)</td>
        </tr>
        <tr>
          <td className="p-2 border">Column 2</td>
          <td className="p-2 border">Triangular numbers (1, 3, 6, 10, ...)</td>
        </tr>
        <tr>
          <td className="p-2 border">Column 3</td>
          <td className="p-2 border">Tetrahedral numbers (1, 4, 10, 20, ...)</td>
        </tr>
        <tr>
          <td className="p-2 border">Diagonals</td>
          <td className="p-2 border">Fibonacci numbers (sum of shallow diagonals)</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Implementation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="font-mono text-sm text-gray-900 overflow-x-auto">
{`function generatePascal(n):
    triangle = []
    for i from 0 to n:
        row = []
        for j from 0 to i:
            if j == 0 or j == i:
                row.append(1)
            else:
                row.append(triangle[i-1][j-1] + triangle[i-1][j])
        triangle.append(row)
    return triangle`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-8">Applications</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Application</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border"><strong>Binomial Expansion</strong></td>
          <td className="p-2 border">Coefficients of (x+y)^n</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Probability</strong></td>
          <td className="p-2 border">Binomial distribution</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Combinatorics</strong></td>
          <td className="p-2 border">Quick lookup for C(n, k)</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Dynamic Programming</strong></td>
          <td className="p-2 border">Building solutions incrementally</td>
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
          <td className="p-2 border">Generate the first 8 rows of Pascal's Triangle</td>
        </tr>
        <tr>
          <td className="p-2 border">2</td>
          <td className="p-2 border">Find the sum of the 7th row</td>
        </tr>
        <tr>
          <td className="p-2 border">3</td>
          <td className="p-2 border">Use Pascal's Triangle to expand (x + y)^5</td>
        </tr>
        <tr>
          <td className="p-2 border">4</td>
          <td className="p-2 border">Find the third element in row 10</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default PascalsTriangle;
