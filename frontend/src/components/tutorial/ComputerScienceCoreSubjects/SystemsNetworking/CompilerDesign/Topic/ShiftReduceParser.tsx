import React from "react";

const ShiftReduceParser: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Shift-Reduce Parser
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A <strong>shift-reduce parser</strong> is a type of bottom-up parser that uses a stack
      to hold grammar symbols and an input buffer to hold the remaining input. It performs
      shift and reduce actions to build the parse tree.
    </p>

    <h2 className="text-3xl font-bold mt-8">Parser Actions</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Action</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Shift</td>
            <td className="p-3 border">Move next input symbol onto stack</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Reduce</td>
            <td className="p-3 border">Replace handle with non-terminal (apply production in reverse)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Accept</td>
            <td className="p-3 border">Parsing successful (start symbol on stack, input empty)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Error</td>
            <td className="p-3 border">Syntax error detected</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Configuration</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`A configuration of a shift-reduce parser:

( Stack Contents, Remaining Input )

Initial configuration:
( $, w$ )  where w is the input string

Final configuration (accept):
( $S, $ )  where S is the start symbol`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example Parse</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Grammar:
  S → aABe
  A → Abc | b
  B → d

Input: abbcde

Stack       Input       Action
──────────────────────────────────
$           abbcde$     Shift
$a          bbcde$      Shift
$ab         bcde$       Reduce A → b
$aA         bcde$       Shift
$aAb        cde$        Shift
$aAbc       de$         Reduce A → Abc
$aA         de$         Shift
$aAd        e$          Reduce B → d
$aAB        e$          Shift
$aABe       $           Reduce S → aABe
$S          $           Accept`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Conflicts</h2>
    <p className="leading-relaxed">
      Shift-reduce parsers may encounter conflicts when multiple actions are possible:
    </p>

    <h3 className="text-2xl font-semibold mt-6">Shift-Reduce Conflict</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Both shift and reduce are valid actions.

Example: "dangling else"
Stack: ...if E then S
Input: else...

Can either:
- Shift 'else' (attach else to this if)
- Reduce S → if E then S (leave else for outer if)`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Reduce-Reduce Conflict</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Multiple reduce actions are valid.

Example:
  A → α
  B → α

Stack top matches α, but unclear whether to reduce
to A or to B.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Handle Detection</h2>
    <p className="leading-relaxed">
      The key challenge is identifying the handle - the substring to reduce. LR parsers use
      states and lookahead to make this decision deterministically.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Properties of handles:
1. Handle is always on top of stack
2. Handle is the RHS of some production
3. Reducing handle leads toward start symbol

Finding handles:
- Use DFA states (LR parsers)
- Use precedence rules (operator precedence parser)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Viable Prefixes</h2>
    <p className="leading-relaxed">
      A <strong>viable prefix</strong> is a prefix of a right-sentential form that can appear
      on the stack during a valid parse. The set of viable prefixes is recognized by the
      parser's DFA.
    </p>

    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Four actions: shift, reduce, accept, error</li>
        <li>Stack holds grammar symbols; input holds remaining tokens</li>
        <li>Handle is the substring being reduced</li>
        <li>Conflicts occur when multiple actions are possible</li>
        <li>LR parsers resolve conflicts using states and lookahead</li>
      </ul>
    </div>
  </div>
);

export default ShiftReduceParser;
