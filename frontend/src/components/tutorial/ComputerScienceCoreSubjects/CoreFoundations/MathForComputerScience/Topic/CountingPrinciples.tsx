import React from 'react';

const CountingPrinciples: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Fundamental Counting Principles</h1>

    <p className="text-lg leading-relaxed">
      Counting principles are the foundation of combinatorics. They help us determine the number of ways
      to arrange, select, or organize objects without having to list all possibilities explicitly.
    </p>

    <h2 className="text-2xl font-bold mt-8">The Addition Principle (Sum Rule)</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Principle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border">
            <p className="font-semibold">If task A can be done in m ways and task B can be done in n ways,
            and these tasks cannot be done simultaneously, then doing A OR B can be done in m + n ways.</p>
          </td>
        </tr>
      </tbody>
    </table>

    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border">
            A restaurant offers 5 appetizers and 8 main courses. If you choose either
            an appetizer OR a main course (but not both), you have 5 + 8 = 13 choices.
          </td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">The Multiplication Principle (Product Rule)</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Principle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border">
            <p className="font-semibold">If task A can be done in m ways and task B can be done in n ways,
            then doing A AND B can be done in m x n ways.</p>
          </td>
        </tr>
      </tbody>
    </table>

    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border">
            You have 4 shirts and 3 pants. The number of different outfits = 4 x 3 = 12.
          </td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">The Subtraction Principle</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Principle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border">
            <p className="font-semibold">If a task can be done in n ways, and of these, m ways are "bad",
            then the number of "good" ways = n - m.</p>
          </td>
        </tr>
      </tbody>
    </table>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <h3 className="font-bold">Example:</h3>
      <p className="mt-2">How many 3-digit numbers don't have all identical digits?</p>
      <p>Total 3-digit numbers: 900 (100 to 999)</p>
      <p>Numbers with identical digits: 9 (111, 222, ..., 999)</p>
      <p>Answer: 900 - 9 = 891</p>
    </div>

    <h2 className="text-2xl font-bold mt-8">The Division Principle</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Principle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border">
            <p className="font-semibold">If n identical tasks can be done in m ways, and we want to count
            distinct outcomes where each outcome corresponds to exactly k tasks, then there are m/k distinct outcomes.</p>
          </td>
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
          <td className="p-2 border"><strong>Password Combinations</strong></td>
          <td className="p-2 border">n^k for k positions with n options each</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>IP Addresses</strong></td>
          <td className="p-2 border">256^4 possible IPv4 addresses</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Binary Strings</strong></td>
          <td className="p-2 border">2^n different n-bit strings</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Algorithm Analysis</strong></td>
          <td className="p-2 border">Counting operations in nested loops</td>
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
          <td className="p-2 border">How many 4-digit PINs are possible using digits 0-9?</td>
        </tr>
        <tr>
          <td className="p-2 border">2</td>
          <td className="p-2 border">How many license plates with 3 letters followed by 3 digits?</td>
        </tr>
        <tr>
          <td className="p-2 border">3</td>
          <td className="p-2 border">How many bit strings of length 8 don't start with 11?</td>
        </tr>
        <tr>
          <td className="p-2 border">4</td>
          <td className="p-2 border">A menu has 3 soups, 5 salads, 8 entrees, 4 desserts. How many 4-course meals?</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default CountingPrinciples;
