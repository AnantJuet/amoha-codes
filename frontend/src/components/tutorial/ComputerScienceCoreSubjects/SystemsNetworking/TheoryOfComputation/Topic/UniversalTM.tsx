import React from 'react';

const UniversalTM: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Universal Turing Machine</h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>
    <p className="text-lg leading-relaxed">
      A Universal Turing Machine (UTM) is a TM that can simulate any other Turing Machine. Given
      the description of a TM and an input, the UTM produces the same result as running that TM
      on that input. UTMs are the theoretical foundation of programmable computers.
    </p>
    <h2 className="text-3xl font-bold mt-8">Concept</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Universal TM U:
Input: <M, w> (encoding of TM M and input string w)
Output: Same as M on input w

U simulates M step by step:
- Decodes M's transition function
- Maintains M's tape contents
- Tracks M's current state
- Follows M's transitions

If M accepts w, U accepts <M, w>
If M rejects w, U rejects <M, w>
If M loops on w, U loops on <M, w>`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Encoding Turing Machines</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Standard encoding <M>:
- States numbered: q1, q2, ..., qn
- Symbols numbered: X1, X2, ..., Xm
- Directions: D1 = L, D2 = R

Transition δ(qi, Xj) = (qk, Xl, Dm) encoded as:
0^i 1 0^j 1 0^k 1 0^l 1 0^m

Transitions separated by 11
Entire TM description separated from input by 111

Example:
<M, w> = 0001001000100101100...111 w`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">UTM Construction (3-tape)</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Tape 1: Description of M (δ encoded)
Tape 2: Current tape contents of M
Tape 3: Current state of M

Algorithm:
1. Initialize tape 2 with w, tape 3 with q1
2. Repeat:
   a. Read current state from tape 3
   b. Read current symbol from tape 2
   c. Search tape 1 for matching transition
   d. If found: update tape 2 (write),
               update tape 3 (new state),
               move head on tape 2
   e. If not found (accepting/rejecting): halt accordingly`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Significance</h2>
    <ul className="list-disc list-inside space-y-2 ml-4">
      <li><strong>Programmability:</strong> One machine runs any program</li>
      <li><strong>Stored-program concept:</strong> Programs are data</li>
      <li><strong>Foundation of computers:</strong> Modern computers are UTMs</li>
      <li><strong>Undecidability:</strong> Enables diagonal arguments</li>
    </ul>
    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>UTM simulates any TM given its description</li>
        <li>Programs can be encoded as strings</li>
        <li>Theoretical basis for general-purpose computers</li>
        <li>Essential for proving undecidability results</li>
      </ul>
    </div>
  </div>
);
export default UniversalTM;
