import React from 'react';

const LBA: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Linear Bounded Automata (LBA)</h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>
    <p className="text-lg leading-relaxed">
      A Linear Bounded Automaton (LBA) is a restricted Turing Machine where the tape head cannot
      move beyond the original input boundaries. LBAs are more powerful than PDAs but less powerful
      than unrestricted TMs.
    </p>
    <h2 className="text-3xl font-bold mt-8">Definition</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`LBA = Nondeterministic TM with restricted tape

Restriction:
- Tape is bounded by input length
- Head cannot move past left or right end markers
- Tape space = O(n) where n = |input|

Formally:
- Input: ¢ w $ (with end markers)
- Head stays between ¢ and $
- Can write in the space between markers

Languages recognized: Context-Sensitive Languages (CSL)`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">LBA vs Other Models</h2>
    <table className="min-w-full border-collapse border border-gray-300 mt-4">
      <thead className="bg-gray-100 text-gray-900">
        <tr>
          <th className="border border-gray-300 px-4 py-2">Model</th>
          <th className="border border-gray-300 px-4 py-2">Space</th>
          <th className="border border-gray-300 px-4 py-2">Languages</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2">FA</td>
          <td className="border border-gray-300 px-4 py-2">O(1)</td>
          <td className="border border-gray-300 px-4 py-2">Regular</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">PDA</td>
          <td className="border border-gray-300 px-4 py-2">Unbounded stack</td>
          <td className="border border-gray-300 px-4 py-2">Context-Free</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">LBA</td>
          <td className="border border-gray-300 px-4 py-2">O(n)</td>
          <td className="border border-gray-300 px-4 py-2">Context-Sensitive</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">TM</td>
          <td className="border border-gray-300 px-4 py-2">Unbounded</td>
          <td className="border border-gray-300 px-4 py-2">Recursively Enumerable</td>
        </tr>
      </tbody>
    </table>
    <h2 className="text-3xl font-bold mt-8">Languages Recognized by LBA</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Context-Sensitive Languages:

1. {a^n b^n c^n | n >= 1}
   - Not CFL, but CSL
   - LBA can mark and count all three

2. {a^(n²) | n >= 1}
   - Square-length strings
   - LBA can compute n² in linear space

3. {ww | w ∈ {a,b}*}
   - Exact duplication
   - LBA can compare halves

CSL is closed under:
- Union, intersection, complement
- Concatenation, Kleene star`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Properties</h2>
    <ul className="list-disc list-inside space-y-2 ml-4">
      <li>LBA = NSPACE(n) (nondeterministic linear space)</li>
      <li>Deterministic LBA question still open</li>
      <li>CSL membership is decidable (unlike RE languages)</li>
      <li>Every CSL is recursive (decidable)</li>
    </ul>
    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>LBA = TM with tape bounded by input length</li>
        <li>Recognizes context-sensitive languages</li>
        <li>CFL ⊂ CSL ⊂ Decidable languages</li>
        <li>All CSLs are decidable</li>
      </ul>
    </div>
  </div>
);
export default LBA;
