import React from 'react';

const TMTransducer: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Turing Machine as Transducer</h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>
    <p className="text-lg leading-relaxed">
      When a Turing Machine computes a function rather than just deciding membership, it acts as a
      transducer. The TM transforms the input on the tape into an output, computing functions
      from strings to strings.
    </p>
    <h2 className="text-3xl font-bold mt-8">TM as Function Computer</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`A TM M computes function f: Σ* → Σ* if:

For all w ∈ Σ*:
- M starts with w on tape
- M halts with f(w) on tape (no other symbols)
- Head positioned at start of output

Initial configuration: q0 w
Final configuration:   qf f(w)

Function is "computable" or "Turing-computable"`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Examples of Computable Functions</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`1. Successor function
   f(n) = n + 1 (in unary or binary)
   Input: 111 (3 in unary)
   Output: 1111 (4 in unary)

2. Addition
   f(m, n) = m + n
   Input: 111#11 (3 + 2)
   Output: 11111 (5)

3. Multiplication
   f(m, n) = m × n
   Input: 11#111 (2 × 3)
   Output: 111111 (6)

4. String reversal
   f(w) = w^R
   Input: abc
   Output: cba`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Example: Increment Binary Number</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Compute f(n) = n + 1 in binary

Input: 1011 (11 in decimal)
Output: 1100 (12 in decimal)

Algorithm:
1. Move to rightmost digit
2. If 0, change to 1, done
3. If 1, change to 0, move left, repeat
4. If blank (overflow), write 1

Transitions:
δ(q0, 0/1) = (q0, 0/1, R)  // Move right
δ(q0, B) = (q1, B, L)      // At end
δ(q1, 0) = (qf, 1, L)      // Change 0 to 1, done
δ(q1, 1) = (q1, 0, L)      // Carry
δ(q1, B) = (qf, 1, R)      // Overflow`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Partial vs Total Functions</h2>
    <ul className="list-disc list-inside space-y-2 ml-4">
      <li><strong>Total function:</strong> Defined for all inputs, TM always halts</li>
      <li><strong>Partial function:</strong> May be undefined for some inputs, TM may loop</li>
      <li>Partial computable functions = Recursively enumerable</li>
      <li>Total computable functions = Recursive (decidable)</li>
    </ul>
    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Transducer TMs compute functions, not just decide languages</li>
        <li>Output replaces input on the tape</li>
        <li>Arithmetic functions are Turing-computable</li>
        <li>Total vs partial corresponds to decidable vs recognizable</li>
      </ul>
    </div>
  </div>
);
export default TMTransducer;
