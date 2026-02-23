import React from "react";

const LRParsingOverview: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      LR Parsing Overview
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      <strong>LR parsing</strong> is the most powerful class of shift-reduce parsers.
      The name stands for scanning input Left-to-right and producing a Rightmost derivation
      in reverse. LR parsers can handle a larger class of grammars than LL parsers.
    </p>

    <h2 className="text-3xl font-bold mt-8">LR Parser Structure</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`LR Parser Components:

┌───────────────────────────────────────────┐
│              Input Buffer                  │
│     a₁  a₂  a₃  ...  aₙ  $                │
└───────────────────────────────────────────┘
                    ↓ (lookahead)
┌─────────────┐    ┌──────────────────────┐
│   Stack     │    │    LR Parsing Table  │
│  s₀X₁s₁... │←→  │   ACTION  │  GOTO    │
│    sₘ      │    └──────────────────────┘
└─────────────┘
        ↓
     Output (Productions in reverse)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of LR Parsers</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Parser</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Power</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">LR(0)</td>
            <td className="p-3 border">No lookahead, uses only stack</td>
            <td className="p-3 border">Weakest</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">SLR(1)</td>
            <td className="p-3 border">Simple LR, uses FOLLOW for lookahead</td>
            <td className="p-3 border">Medium</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">LALR(1)</td>
            <td className="p-3 border">Look-Ahead LR, merged states with lookahead</td>
            <td className="p-3 border">Strong</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">CLR(1)</td>
            <td className="p-3 border">Canonical LR, full lookahead information</td>
            <td className="p-3 border">Strongest</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">LR Parsing Table</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`LR Parsing Table has two parts:

1. ACTION[state, terminal] → action
   Possible actions:
   - Shift s: Push terminal and state s onto stack
   - Reduce n: Reduce by production n
   - Accept: Parsing successful
   - Error: Syntax error

2. GOTO[state, non-terminal] → state
   Used after a reduction to determine next state

Example Table:
         ACTION              GOTO
State   id    +    *    $    E    T    F
  0     s5              s4   1    2    3
  1          s6         acc
  2          r2   s7    r2
  3          r4   r4    r4
  4     s5         s4        8    2    3
  5          r6   r6    r6
  ...`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">LR Parsing Algorithm</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`LR Parsing Algorithm:

Initialize: Push state 0 onto stack
            Let a be first input symbol

Loop:
  Let s be state on top of stack

  Case ACTION[s, a]:
    Shift t:
      Push a onto stack
      Push state t onto stack
      a = next input symbol

    Reduce A → β:
      Pop 2 * |β| symbols from stack
      Let t be state now on top
      Push A onto stack
      Push GOTO[t, A] onto stack
      Output production A → β

    Accept:
      Return success

    Error:
      Call error recovery`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example Parse</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Grammar (numbered):
  (1) E → E + T
  (2) E → T
  (3) T → T * F
  (4) T → F
  (5) F → ( E )
  (6) F → id

Input: id + id * id $

Stack              Input           Action
─────────────────────────────────────────────
0                  id+id*id$       Shift 5
0 id 5             +id*id$         Reduce 6: F→id
0 F 3              +id*id$         Reduce 4: T→F
0 T 2              +id*id$         Reduce 2: E→T
0 E 1              +id*id$         Shift 6
0 E 1 + 6          id*id$          Shift 5
0 E 1 + 6 id 5     *id$            Reduce 6: F→id
0 E 1 + 6 F 3      *id$            Reduce 4: T→F
0 E 1 + 6 T 9      *id$            Shift 7
0 E 1 + 6 T 9 * 7  id$             Shift 5
0 E 1 + 6 T 9 * 7 id 5   $         Reduce 6: F→id
0 E 1 + 6 T 9 * 7 F 10   $         Reduce 3: T→T*F
0 E 1 + 6 T 9      $               Reduce 1: E→E+T
0 E 1              $               Accept`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Grammar Hierarchy</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Grammar Class Hierarchy:

        LL(1) ⊂ LR(0) ⊂ SLR(1) ⊂ LALR(1) ⊂ LR(1)

All deterministic CFLs can be parsed by LR(1).

Relationship:
- Every LL(1) grammar is also LR(1)
- LR(1) can handle left recursion (LL cannot)
- LALR(1) is most practical (used by YACC/Bison)
- LR(0) is rarely sufficient for real languages`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Advantages of LR Parsing</h2>
    <ul className="list-disc list-inside mt-2 space-y-2">
      <li>Can parse virtually all programming language constructs</li>
      <li>Most general non-backtracking shift-reduce method</li>
      <li>Detects errors as soon as possible (left-to-right scan)</li>
      <li>Handles left recursion naturally</li>
      <li>Efficient O(n) parsing time</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>LR = Left-to-right scan, Rightmost derivation (in reverse)</li>
        <li>Four variants: LR(0), SLR(1), LALR(1), CLR(1)</li>
        <li>Uses ACTION and GOTO tables for deterministic parsing</li>
        <li>Most powerful shift-reduce parsing technique</li>
        <li>LALR(1) is the practical choice (YACC, Bison)</li>
      </ul>
    </div>
  </div>
);

export default LRParsingOverview;
