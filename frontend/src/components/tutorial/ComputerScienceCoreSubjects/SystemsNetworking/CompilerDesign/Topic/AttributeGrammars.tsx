import React from "react";

const AttributeGrammars: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Attribute Grammars
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Attribute Grammars extend Context-Free Grammars (CFG) by associating attributes with
      grammar symbols and defining semantic rules to compute attribute values. They provide
      a formal framework for specifying the semantics of programming languages, enabling
      compilers to perform type checking, evaluate expressions, and generate code during parsing.
    </p>

    <h2 className="text-3xl font-bold mt-8">Definition</h2>
    <p className="leading-relaxed">
      An Attribute Grammar is a triple (G, A, R) where G is a context-free grammar, A is a
      finite set of attributes, and R is a finite set of semantic rules. Each grammar symbol
      can have associated attributes that hold semantic information computed during parsing.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Attribute Grammar Components:

1. Context-Free Grammar (CFG)
   - Terminal and non-terminal symbols
   - Production rules

2. Attributes
   - Associated with grammar symbols
   - Hold semantic values (types, values, code, etc.)

3. Semantic Rules
   - Define how attributes are computed
   - Attached to production rules

Example:
Production: E -> E1 + T
Semantic Rule: E.val = E1.val + T.val`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of Attributes</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Attribute Type</th>
            <th className="p-3 border">Definition</th>
            <th className="p-3 border">Information Flow</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Synthesized</td>
            <td className="p-3 border">Computed from children attributes</td>
            <td className="p-3 border">Bottom-up (children to parent)</td>
            <td className="p-3 border font-mono text-gray-900">E.val = E1.val + T.val</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Inherited</td>
            <td className="p-3 border">Computed from parent or siblings</td>
            <td className="p-3 border">Top-down (parent to children)</td>
            <td className="p-3 border font-mono text-gray-900">L.in = T.type</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Synthesized Attributes Example</h2>
    <p className="leading-relaxed">
      Consider a grammar for arithmetic expressions where we want to compute the value of expressions.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Grammar with Synthesized Attributes:

Production                  Semantic Rule
-----------                 -------------
S -> E                      print(E.val)
E -> E1 + T                 E.val = E1.val + T.val
E -> T                      E.val = T.val
T -> T1 * F                 T.val = T1.val * F.val
T -> F                      T.val = F.val
F -> ( E )                  F.val = E.val
F -> digit                  F.val = digit.lexval

Example: Input "3 + 5 * 2"

Parse Tree with Attributes:
                S
                |
            E (val=13)
           /    |    \
     E(val=3)  '+'   T(val=10)
        |           /    |    \
     T(val=3)   T(val=5) '*'  F(val=2)
        |           |            |
     F(val=3)   F(val=5)      digit(2)
        |           |
     digit(3)   digit(5)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Inherited Attributes Example</h2>
    <p className="leading-relaxed">
      Inherited attributes are useful for passing context information down the parse tree,
      such as type information in declarations.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Grammar for Type Declaration:

Production                  Semantic Rule
-----------                 -------------
D -> T L                    L.in = T.type
T -> int                    T.type = integer
T -> float                  T.type = float
L -> L1, id                 L1.in = L.in
                            addtype(id.entry, L.in)
L -> id                     addtype(id.entry, L.in)

Example: "int x, y, z"

Parse Tree:
            D
           / \
          T   L (in=int)
          |   |\        \
         int  L ',' id(z)
              |\
              L ',' id(y)
              |
            id(x)

L.in is inherited from T.type (flows top-down)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Dependency Graph</h2>
    <p className="leading-relaxed">
      A dependency graph shows the dependencies between attribute instances in a parse tree.
      It determines the order in which attributes must be evaluated.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Dependency Graph Construction:

For each production A -> X1 X2 ... Xn:
- For each semantic rule b = f(c1, c2, ..., ck)
- Draw edges from each ci to b

Example: E -> E1 + T with E.val = E1.val + T.val

Dependency:
    E1.val ----\
                >--> E.val
    T.val  ----/

The dependency graph must be acyclic for successful evaluation.
Cycles indicate undefined attribute values.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">S-Attributed vs L-Attributed Grammars</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Property</th>
            <th className="p-3 border">S-Attributed</th>
            <th className="p-3 border">L-Attributed</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Attributes Used</td>
            <td className="p-3 border">Only synthesized</td>
            <td className="p-3 border">Synthesized + restricted inherited</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Evaluation Order</td>
            <td className="p-3 border">Bottom-up only</td>
            <td className="p-3 border">Left-to-right depth-first</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Parser Compatibility</td>
            <td className="p-3 border">LR parsers</td>
            <td className="p-3 border">LL parsers, recursive descent</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Dependency</td>
            <td className="p-3 border">Children to parent only</td>
            <td className="p-3 border">Parent or left siblings</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Complete Example: Calculator</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Attribute Grammar for Calculator:

Grammar:
    L -> E \\n
    E -> E + T | T
    T -> T * F | F
    F -> ( E ) | digit

Semantic Rules:
Production          Semantic Rule
----------          -------------
L -> E \\n           print(E.val)
E -> E1 + T         E.val = E1.val + T.val
E -> T              E.val = T.val
T -> T1 * F         T.val = T1.val * F.val
T -> F              T.val = F.val
F -> ( E )          F.val = E.val
F -> digit          F.val = digit.lexval

Input: 2 + 3 * 4\\n

Annotated Parse Tree:
         L (prints 14)
         |
       E.val = 14
      /    |    \\
E.val=2   '+'   T.val=12
    |          /    |    \\
T.val=2   T.val=3  '*'  F.val=4
    |         |            |
F.val=2   F.val=3      digit(4)
    |         |
digit(2)  digit(3)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Applications of Attribute Grammars</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Type Checking:</strong> Verify type compatibility in expressions</li>
      <li><strong>Constant Folding:</strong> Evaluate constant expressions at compile time</li>
      <li><strong>Symbol Table Construction:</strong> Build and maintain symbol tables</li>
      <li><strong>Intermediate Code Generation:</strong> Generate three-address code</li>
      <li><strong>Pretty Printing:</strong> Format source code with proper indentation</li>
      <li><strong>Documentation Generation:</strong> Extract documentation from source</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Attribute Grammars = CFG + Attributes + Semantic Rules</li>
        <li>Synthesized attributes flow bottom-up (from children to parent)</li>
        <li>Inherited attributes flow top-down or left-to-right (from parent/siblings)</li>
        <li>S-Attributed grammars use only synthesized attributes</li>
        <li>L-Attributed grammars allow inherited attributes from left siblings</li>
        <li>Dependency graphs must be acyclic for successful evaluation</li>
        <li>Attribute grammars are fundamental for semantic analysis in compilers</li>
      </ul>
    </div>
  </div>
);

export default AttributeGrammars;
