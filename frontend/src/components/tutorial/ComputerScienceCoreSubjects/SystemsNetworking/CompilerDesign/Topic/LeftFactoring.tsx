import React from "react";

const LeftFactoring: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Left Factoring
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      <strong>Left factoring</strong> is a grammar transformation technique used when two or
      more productions for a non-terminal begin with the same symbols. It helps make the grammar
      suitable for predictive (top-down) parsing.
    </p>

    <h2 className="text-3xl font-bold mt-8">The Problem</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Grammar with common prefix:
  A → αβ₁ | αβ₂

When parser sees α, it cannot decide which production to use
without looking ahead beyond α.

Example:
  S → if E then S else S | if E then S

Seeing "if", parser cannot choose between productions.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Left Factoring Transformation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`General Rule:
  A → αβ₁ | αβ₂ | ... | αβₙ | γ

becomes:
  A  → αA' | γ
  A' → β₁ | β₂ | ... | βₙ

Factor out the common prefix α into a new production.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example 1: If-Then-Else</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Original:
  S → if E then S else S | if E then S

Common prefix: "if E then S"

After left factoring:
  S  → if E then S S'
  S' → else S | ε

Now parser can:
1. Match "if E then S"
2. Look at next token
3. If "else", take S' → else S
4. Otherwise, take S' → ε`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example 2: Declaration</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Original:
  D → int id ; | int id [ num ] ;

Common prefix: "int id"

After left factoring:
  D  → int id D'
  D' → ; | [ num ] ;

The parser processes "int id" first,
then decides based on next token (; or [).`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Algorithm</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Left Factoring Algorithm:

For each non-terminal A:
  1. Find the longest common prefix α of two or more alternatives
  2. If α ≠ ε:
     Replace all A-productions
       A → αβ₁ | αβ₂ | ... | αβₙ | γ₁ | γ₂ | ...
     with:
       A  → αA' | γ₁ | γ₂ | ...
       A' → β₁ | β₂ | ... | βₙ
  3. Repeat until no common prefixes exist`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Multiple Levels</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Sometimes multiple rounds are needed:

Original:
  A → aBC | aBcD | aBeF

Round 1 (factor out "aB"):
  A  → aBA'
  A' → C | cD | eF

Round 2 (no more common prefixes):
  Done!

If A' had common prefixes, continue factoring.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Why Left Factor?</h2>
    <ul className="list-disc list-inside mt-2 space-y-2">
      <li>Predictive parsers need to choose production with one lookahead</li>
      <li>Common prefixes make choice impossible without more lookahead</li>
      <li>Left factoring defers the decision point</li>
      <li>Required for LL(1) grammar construction</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Left factoring handles productions with common prefixes</li>
        <li>Introduces new non-terminal to factor out common part</li>
        <li>Enables predictive parsing with single lookahead</li>
        <li>May require multiple rounds for nested prefixes</li>
        <li>Essential transformation for LL parsing</li>
      </ul>
    </div>
  </div>
);

export default LeftFactoring;
