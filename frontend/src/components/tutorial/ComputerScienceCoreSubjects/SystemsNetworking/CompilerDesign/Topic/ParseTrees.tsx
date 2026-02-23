import React from "react";

const ParseTrees: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Parse Trees
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A <strong>parse tree</strong> (also called a derivation tree or concrete syntax tree) is
      a graphical representation of a derivation that shows how the grammar produces a string.
      It captures the hierarchical structure of the input.
    </p>

    <h2 className="text-3xl font-bold mt-8">Structure of Parse Tree</h2>
    <ul className="list-disc list-inside mt-2 space-y-2">
      <li><strong>Root:</strong> The start symbol of the grammar</li>
      <li><strong>Internal nodes:</strong> Non-terminals</li>
      <li><strong>Leaf nodes:</strong> Terminals or ε</li>
      <li><strong>Children:</strong> Symbols on right side of production used</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Example Parse Tree</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Grammar:
E → E + T | T
T → T * F | F
F → ( E ) | id

Input: id + id * id

Parse Tree:
                E
              / | \\
             E  +  T
             |    /|\\
             T   T * F
             |   |   |
             F   F  id
             |   |
            id  id

Reading leaves left to right: id + id * id`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Parse Tree Properties</h2>
    <ul className="list-disc list-inside mt-2 space-y-2">
      <li>Each interior node is labeled by a non-terminal</li>
      <li>Each leaf is labeled by a terminal or ε</li>
      <li>If A is an interior node with children X₁, X₂, ..., Xₙ, then A → X₁X₂...Xₙ is a production</li>
      <li>The yield (leaves read left to right) equals the derived string</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Abstract Syntax Tree (AST)</h2>
    <p className="leading-relaxed">
      An <strong>AST</strong> is a simplified version of the parse tree that removes unnecessary
      details like parentheses and intermediate non-terminals.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Parse Tree for (id + id) * id:        AST:

         E                              *
        /|\\                           /   \\
       T * F                         +    id
      /|\\  |                       /   \\
     F   id                       id   id
    /|\\
   ( E )
    /|\\
   E + T
   |   |
   T   F
   |   |
   F  id
   |
  id

AST removes:
• Parentheses (structure is implicit)
• Chain rules (E→T, T→F)
• Syntax details`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Parse Tree vs AST</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Parse Tree (CST)</th>
            <th className="p-3 border">Abstract Syntax Tree (AST)</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Complete grammatical structure</td>
            <td className="p-3 border">Essential semantic structure</td>
          </tr>
          <tr>
            <td className="p-3 border">Includes all grammar symbols</td>
            <td className="p-3 border">Removes redundant nodes</td>
          </tr>
          <tr>
            <td className="p-3 border">Larger size</td>
            <td className="p-3 border">Compact size</td>
          </tr>
          <tr>
            <td className="p-3 border">Direct grammar correspondence</td>
            <td className="p-3 border">Easier to analyze</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Building Parse Trees</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Top-Down Construction:
1. Start with root (start symbol)
2. Expand leftmost non-terminal
3. Match terminals with input
4. Repeat until all leaves are terminals

Bottom-Up Construction:
1. Start with input tokens as leaves
2. Find handle (right side of production)
3. Reduce handle to non-terminal
4. Repeat until only start symbol remains`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Parse trees show hierarchical structure of derivation</li>
        <li>Root is start symbol; leaves are terminals</li>
        <li>AST is a simplified parse tree for semantic analysis</li>
        <li>Top-down builds from root; bottom-up from leaves</li>
        <li>The yield of a parse tree equals the input string</li>
      </ul>
    </div>
  </div>
);

export default ParseTrees;
