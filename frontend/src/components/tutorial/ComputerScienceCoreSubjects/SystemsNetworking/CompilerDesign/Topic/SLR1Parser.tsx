import React from "react";

const SLR1Parser: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      SLR(1) Parser
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      <strong>SLR(1)</strong> (Simple LR with 1 lookahead) improves upon LR(0) by using
      FOLLOW sets to determine when to reduce. It only reduces when the lookahead is
      in the FOLLOW set of the non-terminal being reduced.
    </p>

    <h2 className="text-3xl font-bold mt-8">SLR(1) vs LR(0)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`LR(0) Problem:
  For complete item A → α•, reduce on ALL terminals
  This causes many false conflicts

SLR(1) Solution:
  For complete item A → α•, reduce only on FOLLOW(A)
  Uses FOLLOW sets to restrict reduce actions

Same states as LR(0), smarter reduce decisions!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">SLR(1) Table Construction</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`SLR(1) Parsing Table Construction:

1. Construct canonical LR(0) item sets (same as LR(0))

2. For state Iᵢ:
   a) If A → α•aβ is in Iᵢ and GOTO(Iᵢ, a) = Iⱼ:
      ACTION[i, a] = shift j

   b) If A → α• is in Iᵢ (A ≠ S'):
      For each terminal a in FOLLOW(A):
        ACTION[i, a] = reduce A → α

   c) If S' → S• is in Iᵢ:
      ACTION[i, $] = accept

3. GOTO entries (same as LR(0)):
   If GOTO(Iᵢ, A) = Iⱼ for non-terminal A:
     GOTO[i, A] = j

Key difference: Step 2b uses FOLLOW(A) instead of all terminals`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example Grammar</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Grammar:
  (0) E' → E
  (1) E  → E + T
  (2) E  → T
  (3) T  → T * F
  (4) T  → F
  (5) F  → ( E )
  (6) F  → id

FOLLOW Sets:
  FOLLOW(E') = { $ }
  FOLLOW(E)  = { +, ), $ }
  FOLLOW(T)  = { +, *, ), $ }
  FOLLOW(F)  = { +, *, ), $ }`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">SLR(1) Parsing Table</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-center text-sm">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 border" rowSpan={2}>State</th>
            <th className="p-2 border" colSpan={6}>ACTION</th>
            <th className="p-2 border" colSpan={3}>GOTO</th>
          </tr>
          <tr>
            <th className="p-2 border">id</th>
            <th className="p-2 border">+</th>
            <th className="p-2 border">*</th>
            <th className="p-2 border">(</th>
            <th className="p-2 border">)</th>
            <th className="p-2 border">$</th>
            <th className="p-2 border">E</th>
            <th className="p-2 border">T</th>
            <th className="p-2 border">F</th>
          </tr>
        </thead>
        <tbody className="bg-white font-mono text-xs text-gray-900">
          <tr>
            <td className="p-2 border font-semibold">0</td>
            <td className="p-2 border">s5</td>
            <td className="p-2 border"></td>
            <td className="p-2 border"></td>
            <td className="p-2 border">s4</td>
            <td className="p-2 border"></td>
            <td className="p-2 border"></td>
            <td className="p-2 border">1</td>
            <td className="p-2 border">2</td>
            <td className="p-2 border">3</td>
          </tr>
          <tr>
            <td className="p-2 border font-semibold">1</td>
            <td className="p-2 border"></td>
            <td className="p-2 border">s6</td>
            <td className="p-2 border"></td>
            <td className="p-2 border"></td>
            <td className="p-2 border"></td>
            <td className="p-2 border">acc</td>
            <td className="p-2 border"></td>
            <td className="p-2 border"></td>
            <td className="p-2 border"></td>
          </tr>
          <tr>
            <td className="p-2 border font-semibold">2</td>
            <td className="p-2 border"></td>
            <td className="p-2 border">r2</td>
            <td className="p-2 border">s7</td>
            <td className="p-2 border"></td>
            <td className="p-2 border">r2</td>
            <td className="p-2 border">r2</td>
            <td className="p-2 border"></td>
            <td className="p-2 border"></td>
            <td className="p-2 border"></td>
          </tr>
          <tr>
            <td className="p-2 border font-semibold">3</td>
            <td className="p-2 border"></td>
            <td className="p-2 border">r4</td>
            <td className="p-2 border">r4</td>
            <td className="p-2 border"></td>
            <td className="p-2 border">r4</td>
            <td className="p-2 border">r4</td>
            <td className="p-2 border"></td>
            <td className="p-2 border"></td>
            <td className="p-2 border"></td>
          </tr>
          <tr>
            <td className="p-2 border font-semibold">4</td>
            <td className="p-2 border">s5</td>
            <td className="p-2 border"></td>
            <td className="p-2 border"></td>
            <td className="p-2 border">s4</td>
            <td className="p-2 border"></td>
            <td className="p-2 border"></td>
            <td className="p-2 border">8</td>
            <td className="p-2 border">2</td>
            <td className="p-2 border">3</td>
          </tr>
          <tr>
            <td className="p-2 border font-semibold">5</td>
            <td className="p-2 border"></td>
            <td className="p-2 border">r6</td>
            <td className="p-2 border">r6</td>
            <td className="p-2 border"></td>
            <td className="p-2 border">r6</td>
            <td className="p-2 border">r6</td>
            <td className="p-2 border"></td>
            <td className="p-2 border"></td>
            <td className="p-2 border"></td>
          </tr>
          <tr>
            <td className="p-2 border font-semibold">6</td>
            <td className="p-2 border">s5</td>
            <td className="p-2 border"></td>
            <td className="p-2 border"></td>
            <td className="p-2 border">s4</td>
            <td className="p-2 border"></td>
            <td className="p-2 border"></td>
            <td className="p-2 border"></td>
            <td className="p-2 border">9</td>
            <td className="p-2 border">3</td>
          </tr>
          <tr>
            <td className="p-2 border font-semibold">7</td>
            <td className="p-2 border">s5</td>
            <td className="p-2 border"></td>
            <td className="p-2 border"></td>
            <td className="p-2 border">s4</td>
            <td className="p-2 border"></td>
            <td className="p-2 border"></td>
            <td className="p-2 border"></td>
            <td className="p-2 border"></td>
            <td className="p-2 border">10</td>
          </tr>
          <tr>
            <td className="p-2 border font-semibold">8</td>
            <td className="p-2 border"></td>
            <td className="p-2 border">s6</td>
            <td className="p-2 border"></td>
            <td className="p-2 border"></td>
            <td className="p-2 border">s11</td>
            <td className="p-2 border"></td>
            <td className="p-2 border"></td>
            <td className="p-2 border"></td>
            <td className="p-2 border"></td>
          </tr>
          <tr>
            <td className="p-2 border font-semibold">9</td>
            <td className="p-2 border"></td>
            <td className="p-2 border">r1</td>
            <td className="p-2 border">s7</td>
            <td className="p-2 border"></td>
            <td className="p-2 border">r1</td>
            <td className="p-2 border">r1</td>
            <td className="p-2 border"></td>
            <td className="p-2 border"></td>
            <td className="p-2 border"></td>
          </tr>
          <tr>
            <td className="p-2 border font-semibold">10</td>
            <td className="p-2 border"></td>
            <td className="p-2 border">r3</td>
            <td className="p-2 border">r3</td>
            <td className="p-2 border"></td>
            <td className="p-2 border">r3</td>
            <td className="p-2 border">r3</td>
            <td className="p-2 border"></td>
            <td className="p-2 border"></td>
            <td className="p-2 border"></td>
          </tr>
          <tr>
            <td className="p-2 border font-semibold">11</td>
            <td className="p-2 border"></td>
            <td className="p-2 border">r5</td>
            <td className="p-2 border">r5</td>
            <td className="p-2 border"></td>
            <td className="p-2 border">r5</td>
            <td className="p-2 border">r5</td>
            <td className="p-2 border"></td>
            <td className="p-2 border"></td>
            <td className="p-2 border"></td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">SLR(1) Limitations</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`SLR(1) can still have conflicts:

Grammar that is NOT SLR(1):
  S → L = R | R
  L → * R | id
  R → L

State I₂:
  S → L • = R
  R → L •

FOLLOW(R) = { =, $ }

Conflict on '=':
  - Shift (S → L • = R)
  - Reduce R → L (since = ∈ FOLLOW(R))

This is a shift-reduce conflict!
Grammar is LALR(1) but not SLR(1).`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>SLR(1) uses same states as LR(0)</li>
        <li>Reduces only when lookahead is in FOLLOW set</li>
        <li>More powerful than LR(0), fewer conflicts</li>
        <li>Still cannot handle all LALR(1) grammars</li>
        <li>Simple to implement with small table size</li>
      </ul>
    </div>
  </div>
);

export default SLR1Parser;
