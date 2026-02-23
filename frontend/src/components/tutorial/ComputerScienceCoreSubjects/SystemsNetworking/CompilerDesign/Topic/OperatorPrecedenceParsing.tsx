import React from "react";

const OperatorPrecedenceParsing: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Operator Precedence Parsing
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      <strong>Operator precedence parsing</strong> is a bottom-up parsing technique for
      operator grammars. It uses precedence relations between terminals to determine
      shift and reduce actions.
    </p>

    <h2 className="text-3xl font-bold mt-8">Operator Grammar</h2>
    <p className="leading-relaxed">
      An operator grammar has no two adjacent non-terminals and no ε-productions:
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Operator Grammar (valid):
  E → E + E | E * E | ( E ) | id

NOT an operator grammar:
  E → E A E    (two adjacent non-terminals)
  A → + | *

Convert by substitution:
  E → E + E | E * E | ( E ) | id  ✓`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Precedence Relations</h2>
    <p className="leading-relaxed">
      Three precedence relations between terminals a and b:
    </p>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Relation</th>
            <th className="p-3 border">Symbol</th>
            <th className="p-3 border">Meaning</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Yields precedence</td>
            <td className="p-3 border text-center">{`a <· b`}</td>
            <td className="p-3 border">a has lower precedence than b</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Same precedence</td>
            <td className="p-3 border text-center">{`a =· b`}</td>
            <td className="p-3 border">a and b have equal precedence</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Takes precedence</td>
            <td className="p-3 border text-center">{`a ·> b`}</td>
            <td className="p-3 border">a has higher precedence than b</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Precedence Table</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Precedence Table for E → E+E | E*E | (E) | id

       +    *    (    )    id   $
    ┌─────────────────────────────┐
  + │ ·>   <·   <·   ·>   <·   ·> │
  * │ ·>   ·>   <·   ·>   <·   ·> │
  ( │ <·   <·   <·   =·   <·      │
  ) │ ·>   ·>        ·>        ·> │
  id│ ·>   ·>        ·>        ·> │
  $ │ <·   <·   <·        <·      │
    └─────────────────────────────┘

Rules:
• * takes precedence over +
• ( and ) have equal precedence
• id has highest precedence`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Parsing Algorithm</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Operator Precedence Parsing:

1. Push $ onto stack
2. Read next input symbol a
3. Let b be topmost terminal on stack
4. Compare b and a:
   If b <· a or b =· a:
     Shift: Push a onto stack
   If b ·> a:
     Reduce: Pop symbols until <· is found
             Replace with non-terminal
5. Repeat until stack = $S and input = $`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example Parse</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Input: id + id * id $

Stack          Input           Action
──────────────────────────────────────────
$              id+id*id$       $ <· id, Shift
$id            +id*id$         id ·> +, Reduce (E→id)
$E             +id*id$         $ <· +, Shift
$E+            id*id$          + <· id, Shift
$E+id          *id$            id ·> *, Reduce (E→id)
$E+E           *id$            + <· *, Shift
$E+E*          id$             * <· id, Shift
$E+E*id        $               id ·> $, Reduce (E→id)
$E+E*E         $               * ·> $, Reduce (E→E*E)
$E+E           $               + ·> $, Reduce (E→E+E)
$E             $               Accept`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Limitations</h2>
    <ul className="list-disc list-inside mt-2 space-y-2">
      <li>Only works for operator grammars</li>
      <li>Cannot handle unary operators well</li>
      <li>Limited to expression parsing</li>
      <li>Not general-purpose like LR parsing</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Uses precedence relations between terminals</li>
        <li>Works only for operator grammars</li>
        <li>Three relations: yields, same, takes precedence</li>
        <li>Simple and efficient for expression parsing</li>
        <li>Historical significance; LR parsing more common now</li>
      </ul>
    </div>
  </div>
);

export default OperatorPrecedenceParsing;
