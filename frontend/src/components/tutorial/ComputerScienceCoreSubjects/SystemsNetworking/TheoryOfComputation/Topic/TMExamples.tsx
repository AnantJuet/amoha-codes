import React from 'react';

const TMExamples: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Turing Machine Examples</h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>
    <p className="text-lg leading-relaxed">
      Let's explore several Turing Machine examples that demonstrate different techniques and
      design patterns. These examples show how TMs can solve problems beyond the capability of PDAs.
    </p>
    <h2 className="text-3xl font-bold mt-8">Example 1: L = {"{a^n b^n c^n | n >= 1}"}</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Strategy: Mark one a, one b, one c in each pass

States: q0 (start), q1 (find b), q2 (find c), q3 (rewind), qa (accept)
Tape: {a, b, c, X, Y, Z, B}

Transitions:
δ(q0, a) = (q1, X, R)    // Mark a with X
δ(q1, a) = (q1, a, R)    // Skip a's
δ(q1, Y) = (q1, Y, R)    // Skip marked b's
δ(q1, b) = (q2, Y, R)    // Mark b with Y
δ(q2, b) = (q2, b, R)    // Skip b's
δ(q2, Z) = (q2, Z, R)    // Skip marked c's
δ(q2, c) = (q3, Z, L)    // Mark c with Z
δ(q3, *) = (q3, *, L)    // Rewind (* = any)
δ(q3, X) = (q0, X, R)    // Start next pass
δ(q0, Y) = (q4, Y, R)    // All a's marked
δ(q4, Y) = (q4, Y, R)    // Skip Y's
δ(q4, Z) = (q4, Z, R)    // Skip Z's
δ(q4, B) = (qa, B, R)    // Accept`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Example 2: Binary Addition</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Input: binary numbers separated by +, output their sum

Example: 101+11 → 1000

Strategy:
1. Move to rightmost digit of second number
2. Add 1 to first number, subtract 1 from second
3. Repeat until second number is 0
4. Clean up

This demonstrates TM as a transducer/calculator.`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Example 3: Palindrome Checker</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`L = {w | w = w^R, w ∈ {a,b}*}

Strategy:
1. Read and mark first symbol
2. Move to end, check last symbol matches
3. Mark last symbol
4. Return to front, repeat
5. Accept if all matched

Transitions (partial):
δ(q0, a) = (q1, X, R)    // First symbol is 'a'
δ(q0, b) = (q2, X, R)    // First symbol is 'b'
δ(q1, a/b) = (q1, a/b, R) // Move right
δ(q1, B/X) = (q3, B/X, L) // At end, looking for 'a'
δ(q3, a) = (q4, X, L)    // Match! Mark it
δ(q4, a/b) = (q4, a/b, L) // Return left
δ(q4, X) = (q0, X, R)    // Start next iteration`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Example 4: Copy Machine</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Transform: w → ww (copy input)

Input: abc → abcabc

Strategy:
1. Mark current symbol
2. Move to end of output
3. Write the symbol
4. Return, unmark, move to next
5. Repeat for all symbols`}</pre>
    </div>
    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>TMs use marking to track progress</li>
        <li>Multi-pass algorithms are common</li>
        <li>TMs can recognize non-context-free languages</li>
        <li>TMs can compute functions, not just decide languages</li>
      </ul>
    </div>
  </div>
);
export default TMExamples;
