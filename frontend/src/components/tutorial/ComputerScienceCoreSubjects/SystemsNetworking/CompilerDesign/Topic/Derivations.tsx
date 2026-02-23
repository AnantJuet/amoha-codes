import React from "react";

const Derivations: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Derivations (Leftmost and Rightmost)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A <strong>derivation</strong> is the step-by-step process of applying grammar rules to
      start from the start symbol and produce a string of terminals. The order in which
      non-terminals are expanded defines the type of derivation.
    </p>

    <h2 className="text-3xl font-bold mt-8">Derivation Types</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Used By</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Leftmost (LMD)</td>
            <td className="p-3 border">Always expand leftmost non-terminal</td>
            <td className="p-3 border">Top-down parsers</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Rightmost (RMD)</td>
            <td className="p-3 border">Always expand rightmost non-terminal</td>
            <td className="p-3 border">Bottom-up parsers</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example Grammar</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Grammar G:
  E → E + T | T
  T → T * F | F
  F → ( E ) | id

Input string: id + id * id`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Leftmost Derivation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Leftmost Derivation of "id + id * id":

E  ⇒lm  E + T           (E → E + T)
   ⇒lm  T + T           (E → T)
   ⇒lm  F + T           (T → F)
   ⇒lm  id + T          (F → id)
   ⇒lm  id + T * F      (T → T * F)
   ⇒lm  id + F * F      (T → F)
   ⇒lm  id + id * F     (F → id)
   ⇒lm  id + id * id    (F → id)

At each step, the leftmost non-terminal (underlined mentally)
is replaced by the right side of one of its productions.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Rightmost Derivation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Rightmost Derivation of "id + id * id":

E  ⇒rm  E + T           (E → E + T)
   ⇒rm  E + T * F       (T → T * F)
   ⇒rm  E + T * id      (F → id)
   ⇒rm  E + F * id      (T → F)
   ⇒rm  E + id * id     (F → id)
   ⇒rm  T + id * id     (E → T)
   ⇒rm  F + id * id     (T → F)
   ⇒rm  id + id * id    (F → id)

At each step, the rightmost non-terminal is replaced.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Same Parse Tree</h2>
    <p className="leading-relaxed">
      Both leftmost and rightmost derivations produce the same parse tree for an unambiguous
      grammar. They only differ in the order of node expansion.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Both derivations produce this parse tree:

                E
              / | \\
             E  +  T
             |    /|\\
             T   T * F
             |   |   |
             F   F  id
             |   |
            id  id`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Canonical Derivations</h2>
    <ul className="list-disc list-inside mt-2 space-y-2">
      <li><strong>Canonical LMD:</strong> Standard leftmost derivation</li>
      <li><strong>Canonical RMD:</strong> Reverse of rightmost derivation (used in bottom-up)</li>
    </ul>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <p className="leading-relaxed">
        <strong>Note:</strong> Bottom-up parsers construct the rightmost derivation in reverse.
        This is called a "reverse rightmost derivation" or "canonical reduction sequence."
      </p>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Derivation is the process of generating a string from grammar</li>
        <li>Leftmost derivation always expands the leftmost non-terminal</li>
        <li>Rightmost derivation always expands the rightmost non-terminal</li>
        <li>Both produce the same parse tree for unambiguous grammars</li>
        <li>Top-down uses LMD; bottom-up uses reverse RMD</li>
      </ul>
    </div>
  </div>
);

export default Derivations;
