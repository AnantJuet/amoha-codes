import React from 'react';

const BinomialTheorem: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Binomial Theorem</h1>

    <p className="text-lg leading-relaxed">
      The Binomial Theorem provides a formula for expanding powers of binomials (expressions with two terms).
      It connects algebra with combinatorics and has numerous applications in probability, calculus, and computer science.
    </p>

    <h2 className="text-2xl font-bold mt-8">The Theorem</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Formula</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border">
            <p className="font-semibold">For any non-negative integer n:</p>
            <p className="font-mono text-center mt-2 text-gray-900">(x + y)^n = Sum of C(n, k) x x^(n-k) x y^k for k = 0 to n</p>
            <p className="mt-2">Or equivalently:</p>
            <p className="font-mono text-center text-gray-900">(x + y)^n = C(n,0)x^n + C(n,1)x^(n-1)y + C(n,2)x^(n-2)y^2 + ... + C(n,n)y^n</p>
          </td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Binomial Coefficients</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p>The coefficient of x^(n-k)y^k in the expansion is C(n, k), the binomial coefficient.</p>
      <p className="font-mono mt-2 text-gray-900">C(n, k) = n! / (k! x (n-k)!)</p>
    </div>

    <h2 className="text-2xl font-bold mt-8">Examples</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Example: Expand (x + y)^4</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border">
            <pre className="font-mono text-sm text-gray-900 bg-gray-100 text-gray-900 p-2 rounded">
{`(x + y)^4 = C(4,0)x^4 + C(4,1)x^3y + C(4,2)x^2y^2 + C(4,3)xy^3 + C(4,4)y^4
         = 1x^4 + 4x^3y + 6x^2y^2 + 4xy^3 + 1y^4
         = x^4 + 4x^3y + 6x^2y^2 + 4xy^3 + y^4`}
            </pre>
          </td>
        </tr>
      </tbody>
    </table>

    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Example: Expand (2a - 3b)^3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border">
            <pre className="font-mono text-sm text-gray-900 bg-gray-100 text-gray-900 p-2 rounded">
{`Let x = 2a, y = -3b
(2a - 3b)^3 = (2a)^3 + 3(2a)^2(-3b) + 3(2a)(-3b)^2 + (-3b)^3
           = 8a^3 - 36a^2b + 54ab^2 - 27b^3`}
            </pre>
          </td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Special Cases</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Case</th>
          <th className="p-2 border">Result</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border font-mono text-gray-900">(1 + x)^n</td>
          <td className="p-2 border">Sum of C(n, k) x x^k for k = 0 to n</td>
        </tr>
        <tr>
          <td className="p-2 border font-mono text-gray-900">(1 + 1)^n = 2^n</td>
          <td className="p-2 border">Sum of all binomial coefficients</td>
        </tr>
        <tr>
          <td className="p-2 border font-mono text-gray-900">(1 - 1)^n = 0</td>
          <td className="p-2 border">Alternating sum of binomial coefficients</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Finding Specific Terms</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Formula</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border">
            <p className="font-semibold">The (k+1)th term in (x + y)^n is:</p>
            <p className="font-mono text-center mt-2 text-gray-900">T(k+1) = C(n, k) x x^(n-k) x y^k</p>
          </td>
        </tr>
      </tbody>
    </table>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <h3 className="font-bold">Example: Find the 4th term in (2x + 3)^6</h3>
      <p className="mt-2">T4 = T(3+1) where k = 3</p>
      <p className="font-mono text-gray-900">T4 = C(6,3) x (2x)^(6-3) x 3^3 = 20 x 8x^3 x 27 = 4320x^3</p>
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
          <td className="p-2 border"><strong>Probability</strong></td>
          <td className="p-2 border">Binomial distribution formula</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Approximations</strong></td>
          <td className="p-2 border">(1+x)^n is approximately 1 + nx for small x</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Algorithm Analysis</strong></td>
          <td className="p-2 border">Counting subsets</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Generating Functions</strong></td>
          <td className="p-2 border">Coefficient extraction</td>
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
          <td className="p-2 border">Expand (x + 2)^5</td>
        </tr>
        <tr>
          <td className="p-2 border">2</td>
          <td className="p-2 border">Find the coefficient of x^3y^4 in (x + y)^7</td>
        </tr>
        <tr>
          <td className="p-2 border">3</td>
          <td className="p-2 border">Find the middle term in (a + b)^8</td>
        </tr>
        <tr>
          <td className="p-2 border">4</td>
          <td className="p-2 border">Prove: C(n,0) + C(n,1) + ... + C(n,n) = 2^n using binomial theorem</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default BinomialTheorem;
