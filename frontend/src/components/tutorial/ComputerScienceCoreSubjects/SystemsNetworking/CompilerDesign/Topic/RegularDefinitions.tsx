import React from "react";

const RegularDefinitions: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Regular Definitions
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      <strong>Regular definitions</strong> provide a way to give names to regular expressions,
      allowing complex patterns to be built from simpler, named components. This makes token
      specifications more readable and maintainable.
    </p>

    <h2 className="text-3xl font-bold mt-8">Syntax</h2>
    <p className="leading-relaxed">
      A regular definition is a sequence of definitions of the form:
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`d₁ → r₁
d₂ → r₂
...
dₙ → rₙ

where:
- dᵢ is a distinct name (not in alphabet Σ)
- rᵢ is a regular expression over Σ ∪ {d₁, d₂, ..., dᵢ₋₁}

Each definition can use names from previous definitions`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example: C Identifiers</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Regular Definitions for C Identifiers:

letter_  → [a-zA-Z_]
digit    → [0-9]
id       → letter_ (letter_ | digit)*

Expansion of 'id':
id = [a-zA-Z_]([a-zA-Z_]|[0-9])*

This matches:
✓ count     (letter followed by letters)
✓ _temp     (underscore followed by letters)
✓ x1        (letter followed by digit)
✓ MAX_SIZE  (letters with underscore)
✗ 1abc      (starts with digit - invalid)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example: Numbers</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Regular Definitions for Numbers:

digit    → [0-9]
digits   → digit+
optFrac  → (. digits)?
optExp   → ((E|e)(+|-)?digits)?
number   → digits optFrac optExp

This matches:
✓ 42          (integer)
✓ 3.14        (decimal)
✓ 100.0       (decimal)
✓ 1e10        (scientific)
✓ 2.5e-3      (scientific with fraction)
✓ 1.23E+45    (full format)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example: Complete Token Definitions</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Complete Regular Definitions for a Simple Language:

// Character classes
letter   → [a-zA-Z]
digit    → [0-9]
ws       → [ \\t\\n]+

// Identifiers and numbers
id       → letter(letter|digit)*
integer  → digit+
float    → digit+.digit+

// Operators
relop    → < | > | <= | >= | == | !=
addop    → + | -
mulop    → * | /
assign   → =

// Delimiters
lparen   → (
rparen   → )
lbrace   → {
rbrace   → }
semi     → ;
comma    → ,

// Keywords (listed separately, matched before id)
if       → if
else     → else
while    → while
return   → return`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Benefits of Regular Definitions</h2>
    <ul className="list-disc list-inside mt-2 space-y-2">
      <li><strong>Readability:</strong> Named patterns are easier to understand</li>
      <li><strong>Reusability:</strong> Common patterns defined once, used many times</li>
      <li><strong>Maintainability:</strong> Changes to pattern in one place</li>
      <li><strong>Modularity:</strong> Complex patterns built from simple ones</li>
      <li><strong>Documentation:</strong> Names serve as documentation</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Restrictions</h2>
    <p className="leading-relaxed">
      Regular definitions must avoid recursive definitions. Each definition can only reference
      previously defined names - no forward references or self-references allowed.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Invalid (recursive):
  expr → expr + term | term    // Self-reference not allowed

Valid (no recursion):
  digit  → [0-9]
  digits → digit+              // Uses previously defined 'digit'
  number → digits(. digits)?   // Uses previously defined 'digits'`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">LEX/Flex Syntax</h2>
    <p className="leading-relaxed">
      In LEX/Flex, regular definitions are placed in the definitions section:
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`%{
  /* C declarations */
%}

/* Regular Definitions */
DIGIT    [0-9]
LETTER   [a-zA-Z]
ID       {LETTER}({LETTER}|{DIGIT})*
NUMBER   {DIGIT}+

%%

/* Rules - use definitions with {name} */
{ID}      { return IDENTIFIER; }
{NUMBER}  { return INTEGER; }
"if"      { return IF; }
"while"   { return WHILE; }

%%`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Expansion Process</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Given definitions:
  letter → [a-zA-Z]
  digit  → [0-9]
  id     → letter(letter|digit)*

Expanding 'id':

Step 1: Replace 'letter' with [a-zA-Z]
  id → [a-zA-Z]([a-zA-Z]|digit)*

Step 2: Replace 'digit' with [0-9]
  id → [a-zA-Z]([a-zA-Z]|[0-9])*

Final regex: [a-zA-Z]([a-zA-Z]|[0-9])*

This can then be converted to NFA/DFA for scanning`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Regular definitions name regular expressions</li>
        <li>They enable modular pattern specification</li>
        <li>Definitions can reference previous definitions</li>
        <li>Recursive definitions are not allowed</li>
        <li>Used in tools like LEX/Flex with {`{name}`} syntax</li>
      </ul>
    </div>
  </div>
);

export default RegularDefinitions;
