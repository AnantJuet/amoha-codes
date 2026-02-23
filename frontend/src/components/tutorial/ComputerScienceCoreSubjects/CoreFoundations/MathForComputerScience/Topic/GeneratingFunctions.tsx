import React from 'react';

const GeneratingFunctions: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Generating Functions</h1>

    <p className="text-lg leading-relaxed">
      A generating function is a formal power series whose coefficients encode information about
      a sequence. They provide a powerful algebraic tool for solving counting problems, recurrence
      relations, and proving combinatorial identities.
    </p>

    <h2 className="text-2xl font-bold mt-8">Definition</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Formula</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border">
            <p className="font-semibold">For a sequence a0, a1, a2, ..., the generating function is:</p>
            <p className="font-mono text-center mt-2 text-gray-900">G(x) = a0 + a1*x + a2*x^2 + a3*x^3 + ... = Sum of an*x^n</p>
          </td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Common Generating Functions</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Sequence</th>
          <th className="p-2 border">Generating Function</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border">(1, 1, 1, ...)</td>
          <td className="p-2 border font-mono text-gray-900">1/(1-x)</td>
        </tr>
        <tr>
          <td className="p-2 border">(1, 2, 3, ...)</td>
          <td className="p-2 border font-mono text-gray-900">1/(1-x)^2</td>
        </tr>
        <tr>
          <td className="p-2 border">(1, 0, 1, 0, ...)</td>
          <td className="p-2 border font-mono text-gray-900">1/(1-x^2)</td>
        </tr>
        <tr>
          <td className="p-2 border">(1, 1/2!, 1/3!, ...)</td>
          <td className="p-2 border font-mono text-gray-900">e^x</td>
        </tr>
        <tr>
          <td className="p-2 border">Binomial C(n,0), C(n,1), ...</td>
          <td className="p-2 border font-mono text-gray-900">(1+x)^n</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Solving Recurrences</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Example: Fibonacci</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border">
            <p className="mt-2">F(n) = F(n-1) + F(n-2), F(0)=0, F(1)=1</p>
            <p className="mt-2">Generating function: G(x) = x / (1 - x - x^2)</p>
            <p className="mt-2">Partial fractions give the closed form (Binet's formula).</p>
          </td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Operations</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Operation</th>
          <th className="p-2 border">Effect</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border"><strong>Addition</strong></td>
          <td className="p-2 border">Add coefficients term by term</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Multiplication</strong></td>
          <td className="p-2 border">Convolution of sequences</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Differentiation</strong></td>
          <td className="p-2 border">Shifts and weights coefficients</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Integration</strong></td>
          <td className="p-2 border">Divides coefficients by index</td>
        </tr>
      </tbody>
    </table>

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
          <td className="p-2 border"><strong>Counting Problems</strong></td>
          <td className="p-2 border">Coin change, partitions</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Algorithm Analysis</strong></td>
          <td className="p-2 border">Analyzing running time</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Probability</strong></td>
          <td className="p-2 border">Probability generating functions</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Combinatorial Proofs</strong></td>
          <td className="p-2 border">Identity verification</td>
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
          <td className="p-2 border">Find the generating function for (1, 2, 4, 8, 16, ...)</td>
        </tr>
        <tr>
          <td className="p-2 border">2</td>
          <td className="p-2 border">Find the generating function for (0, 1, 4, 9, 16, ...) (squares)</td>
        </tr>
        <tr>
          <td className="p-2 border">3</td>
          <td className="p-2 border">Use generating functions to solve a(n) = 2a(n-1) + 1, a(0) = 0</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default GeneratingFunctions;
