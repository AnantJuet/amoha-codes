import React from 'react';

const PigeonholePrinciple: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Pigeonhole Principle</h1>

    <p className="text-lg leading-relaxed">
      The Pigeonhole Principle states that if you have more pigeons than pigeonholes, at least
      one hole must contain more than one pigeon. Simple yet powerful, this principle is used
      to prove existence results in mathematics and computer science.
    </p>

    <h2 className="text-2xl font-bold mt-8">Basic Form</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Principle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border">
            <p className="font-semibold">If n + 1 objects are placed into n boxes, then at least one box contains 2 or more objects.</p>
          </td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Generalized Form</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Principle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border">
            <p className="font-semibold">If n objects are placed into k boxes, then at least one box contains at least ceiling(n/k) objects.</p>
            <p className="mt-2">Where ceiling(x) is the ceiling function (round up).</p>
          </td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Classic Examples</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Example</th>
          <th className="p-2 border">Explanation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border"><strong>Birthday Problem</strong></td>
          <td className="p-2 border">In a group of 367 people, at least 2 must share a birthday (366 possible birthdays + leap day).</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Handshakes</strong></td>
          <td className="p-2 border">In a party of n people, at least 2 people have shaken the same number of hands. Proof: Possible handshake counts are 0 to n-1 (n values), but if someone shook 0 hands, no one shook n-1 hands, so only n-1 actual values for n people.</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Hair Count</strong></td>
          <td className="p-2 border">Two people in New York City have the same number of hairs on their head (assuming max ~500,000 hairs and millions of people).</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Applications in CS</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Application</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border"><strong>Hash Collisions</strong></td>
          <td className="p-2 border">If you hash more items than there are hash values, collisions are guaranteed. E.g., 2^32 + 1 items with 32-bit hash leads to at least one collision.</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Data Compression</strong></td>
          <td className="p-2 border">No lossless compression algorithm can compress ALL files (if it compressed all files, two different files would map to the same compressed file).</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Network Routing</strong></td>
          <td className="p-2 border">If packets must traverse more nodes than there are in the network, cycles exist.</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Problem-Solving Strategy</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Step</th>
          <th className="p-2 border">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border">1</td>
          <td className="p-2 border">Identify the "pigeons" (objects being distributed)</td>
        </tr>
        <tr>
          <td className="p-2 border">2</td>
          <td className="p-2 border">Identify the "pigeonholes" (categories or boxes)</td>
        </tr>
        <tr>
          <td className="p-2 border">3</td>
          <td className="p-2 border">Show pigeons {">"} pigeonholes</td>
        </tr>
        <tr>
          <td className="p-2 border">4</td>
          <td className="p-2 border">Conclude at least one hole has multiple pigeons</td>
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
          <td className="p-2 border">Prove: Among 13 people, at least 2 were born in the same month</td>
        </tr>
        <tr>
          <td className="p-2 border">2</td>
          <td className="p-2 border">From numbers 1-100, prove 11 numbers contain 2 that differ by 10</td>
        </tr>
        <tr>
          <td className="p-2 border">3</td>
          <td className="p-2 border">In a drawer of 10 black and 10 white socks, how many must you grab to guarantee a pair?</td>
        </tr>
        <tr>
          <td className="p-2 border">4</td>
          <td className="p-2 border">Prove: Every sequence of n^2+1 distinct integers contains a monotonic subsequence of length n+1</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default PigeonholePrinciple;
