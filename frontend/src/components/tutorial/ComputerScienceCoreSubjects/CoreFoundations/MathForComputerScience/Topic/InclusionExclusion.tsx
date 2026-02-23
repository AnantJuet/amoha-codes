import React from 'react';

const InclusionExclusion: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Inclusion-Exclusion Principle</h1>

    <p className="text-lg leading-relaxed">
      The Inclusion-Exclusion Principle is a counting technique used to find the size of a union
      of sets by adding and subtracting the sizes of intersections. It's essential for solving
      counting problems where sets overlap.
    </p>

    <h2 className="text-2xl font-bold mt-8">Two Sets</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Formula</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border">
            <p className="font-mono text-center text-lg text-gray-900">|A U B| = |A| + |B| - |A intersection B|</p>
          </td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Three Sets</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Formula</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border">
            <p className="font-mono text-center text-gray-900">|A U B U C| = |A| + |B| + |C| - |A intersection B| - |A intersection C| - |B intersection C| + |A intersection B intersection C|</p>
          </td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">General Formula</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p>For n sets A1, A2, ..., An:</p>
      <p className="font-mono mt-2 text-gray-900">|A1 U A2 U ... U An| = Sum|Ai| - Sum|Ai intersection Aj| + Sum|Ai intersection Aj intersection Ak| - ... + (-1)^(n+1)|A1 intersection A2 intersection ... intersection An|</p>
    </div>

    <h2 className="text-2xl font-bold mt-8">Example: Survey Problem</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Problem and Solution</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border">
            <p className="font-bold">Problem:</p>
            <p>In a class of 100 students: 70 like math, 60 like science, 40 like both. How many like at least one subject?</p>
            <pre className="mt-2 font-mono text-sm text-gray-900 bg-gray-100 text-gray-900 p-2 rounded">
{`|Math U Science| = |Math| + |Science| - |Math intersection Science|
                = 70 + 60 - 40
                = 90 students`}
            </pre>
          </td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Counting Derangements</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Definition and Formula</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border">
            <p className="font-semibold">A derangement is a permutation where no element is in its original position.</p>
            <p className="font-mono mt-2 text-gray-900">D(n) = n! x (1 - 1/1! + 1/2! - 1/3! + ... + (-1)^n/n!)</p>
            <p className="mt-2">D(4) = 24 x (1 - 1 + 0.5 - 0.167 + 0.042) = 9 derangements</p>
          </td>
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
          <td className="p-2 border"><strong>Euler's Totient</strong></td>
          <td className="p-2 border">Counting coprimes using IE</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Probability</strong></td>
          <td className="p-2 border">P(A U B) = P(A) + P(B) - P(A intersection B)</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Database Queries</strong></td>
          <td className="p-2 border">Union operations on result sets</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Sieve Methods</strong></td>
          <td className="p-2 border">Counting primes</td>
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
          <td className="p-2 border">How many integers from 1-1000 are divisible by 2 or 3?</td>
        </tr>
        <tr>
          <td className="p-2 border">2</td>
          <td className="p-2 border">How many integers from 1-100 are divisible by 2, 3, or 5?</td>
        </tr>
        <tr>
          <td className="p-2 border">3</td>
          <td className="p-2 border">Find the number of derangements of 5 objects</td>
        </tr>
        <tr>
          <td className="p-2 border">4</td>
          <td className="p-2 border">In 50 students: 30 play football, 25 play basketball, 10 play both. How many play neither?</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default InclusionExclusion;
