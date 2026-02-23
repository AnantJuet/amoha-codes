import React from "react";

const OperatorPrecedence: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Operator Precedence Parsing
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      <strong>Operator precedence parsing</strong> is a bottom-up technique for parsing
      operator grammars. It defines precedence relations between terminals to determine
      when to shift and when to reduce, making it efficient for expression parsing.
    </p>

    <h2 className="text-3xl font-bold mt-8">Operator Grammar</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`An operator grammar has:
1. No ε-productions
2. No two adjacent non-terminals in any production

Valid Operator Grammar:
  E → E + E | E * E | ( E ) | id

Invalid (two adjacent non-terminals):
  E → E A E
  A → + | *

Convert by substitution:
  E → E + E | E * E | ( E ) | id  ✓`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Precedence Relations</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Relation</th>
            <th className="p-3 border">Notation</th>
            <th className="p-3 border">Meaning</th>
            <th className="p-3 border">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Yields precedence</td>
            <td className="p-3 border font-mono text-gray-900">{`a <. b`}</td>
            <td className="p-3 border">a has lower precedence than b</td>
            <td className="p-3 border">Shift b</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Same precedence</td>
            <td className="p-3 border font-mono text-gray-900">{`a =. b`}</td>
            <td className="p-3 border">a and b have same precedence</td>
            <td className="p-3 border">Shift b</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Takes precedence</td>
            <td className="p-3 border font-mono text-gray-900">{`a .> b`}</td>
            <td className="p-3 border">a has higher precedence than b</td>
            <td className="p-3 border">Reduce</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Building Precedence Table</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Rules for building precedence relations:

For operators with usual arithmetic precedence:
  * has higher precedence than +
  Both are left-associative

Relations:
  + <. *    (+ yields to *)
  * .> +    (* takes precedence over +)
  + .> +    (left-associative: reduce first +)
  * .> *    (left-associative: reduce first *)

  ( <. +, ( <. *    (( yields to operators)
  + .> ), * .> )    (operators take over ))
  ( =. )            (parentheses match)

  id .> all operators  (id is always reduced)
  $ <. all except $    ($ yields to everything)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Precedence Table Example</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-center text-sm">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 border"></th>
            <th className="p-2 border">+</th>
            <th className="p-2 border">*</th>
            <th className="p-2 border">(</th>
            <th className="p-2 border">)</th>
            <th className="p-2 border">id</th>
            <th className="p-2 border">$</th>
          </tr>
        </thead>
        <tbody className="bg-white font-mono text-gray-900">
          <tr>
            <td className="p-2 border font-semibold">+</td>
            <td className="p-2 border">{`.>`}</td>
            <td className="p-2 border">{`<.`}</td>
            <td className="p-2 border">{`<.`}</td>
            <td className="p-2 border">{`.>`}</td>
            <td className="p-2 border">{`<.`}</td>
            <td className="p-2 border">{`.>`}</td>
          </tr>
          <tr>
            <td className="p-2 border font-semibold">*</td>
            <td className="p-2 border">{`.>`}</td>
            <td className="p-2 border">{`.>`}</td>
            <td className="p-2 border">{`<.`}</td>
            <td className="p-2 border">{`.>`}</td>
            <td className="p-2 border">{`<.`}</td>
            <td className="p-2 border">{`.>`}</td>
          </tr>
          <tr>
            <td className="p-2 border font-semibold">(</td>
            <td className="p-2 border">{`<.`}</td>
            <td className="p-2 border">{`<.`}</td>
            <td className="p-2 border">{`<.`}</td>
            <td className="p-2 border">{`=.`}</td>
            <td className="p-2 border">{`<.`}</td>
            <td className="p-2 border"></td>
          </tr>
          <tr>
            <td className="p-2 border font-semibold">)</td>
            <td className="p-2 border">{`.>`}</td>
            <td className="p-2 border">{`.>`}</td>
            <td className="p-2 border"></td>
            <td className="p-2 border">{`.>`}</td>
            <td className="p-2 border"></td>
            <td className="p-2 border">{`.>`}</td>
          </tr>
          <tr>
            <td className="p-2 border font-semibold">id</td>
            <td className="p-2 border">{`.>`}</td>
            <td className="p-2 border">{`.>`}</td>
            <td className="p-2 border"></td>
            <td className="p-2 border">{`.>`}</td>
            <td className="p-2 border"></td>
            <td className="p-2 border">{`.>`}</td>
          </tr>
          <tr>
            <td className="p-2 border font-semibold">$</td>
            <td className="p-2 border">{`<.`}</td>
            <td className="p-2 border">{`<.`}</td>
            <td className="p-2 border">{`<.`}</td>
            <td className="p-2 border"></td>
            <td className="p-2 border">{`<.`}</td>
            <td className="p-2 border"></td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Parsing Algorithm</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Operator Precedence Parsing Algorithm:

1. Push $ onto stack
2. While not (stack = $E and input = $):
   a. Let 'a' be topmost terminal on stack
   b. Let 'b' be current input terminal
   c. If a <. b or a =. b:
        Shift b onto stack
   d. If a .> b:
        Reduce:
        - Find leftmost <. on stack
        - Reduce symbols between <. and top
        - Replace with non-terminal E
   e. If no relation exists:
        Error`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example Parse</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Input: id + id * id $

Stack           Input           Relation    Action
─────────────────────────────────────────────────────
$               id+id*id$       $ <. id     Shift
$id             +id*id$         id .> +     Reduce E→id
$E              +id*id$         $ <. +      Shift
$E+             id*id$          + <. id     Shift
$E+id           *id$            id .> *     Reduce E→id
$E+E            *id$            + <. *      Shift
$E+E*           id$             * <. id     Shift
$E+E*id         $               id .> $     Reduce E→id
$E+E*E          $               * .> $      Reduce E→E*E
$E+E            $               + .> $      Reduce E→E+E
$E              $               Accept

Correct precedence: * before +`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Advantages and Limitations</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Advantages</th>
            <th className="p-3 border">Limitations</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Simple and efficient</td>
            <td className="p-3 border">Only for operator grammars</td>
          </tr>
          <tr>
            <td className="p-3 border">Handles precedence naturally</td>
            <td className="p-3 border">Hard to handle unary operators</td>
          </tr>
          <tr>
            <td className="p-3 border">Small parsing table</td>
            <td className="p-3 border">Limited error detection</td>
          </tr>
          <tr>
            <td className="p-3 border">Easy to implement</td>
            <td className="p-3 border">Not general-purpose</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Works only on operator grammars (no adjacent non-terminals)</li>
        <li>Three precedence relations determine parsing actions</li>
        <li>Efficient for arithmetic expression parsing</li>
        <li>Historically important but LR parsing is more general</li>
        <li>Naturally handles operator precedence and associativity</li>
      </ul>
    </div>
  </div>
);

export default OperatorPrecedence;
