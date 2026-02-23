import React from "react";

const GoConditions: React.FC = () => (
  <div className="mt-20 px-6">
    {/* Main Heading */}
    <h1 className="text-4xl font-extrabold text-gray-900 border-b-2 pb-2">
      Go Conditions
    </h1>

    {/* Intro Paragraph */}
    <p className="text-lg text-gray-700 mt-4 leading-relaxed">
      Conditional statements in Go are used to perform different actions based on
      different conditions. A condition can either be <code>true</code> or <code>false</code>.
    </p>

    {/* Subheading */}
    <h2 className="text-2xl font-bold text-gray-800 mt-6">Comparison Operators</h2>
    <p className="text-gray-700 mt-2">
      Go supports the usual comparison operators from mathematics:
    </p>

    {/* List of comparison operators */}
    <ul className="list-disc list-inside text-gray-700 mt-3 space-y-1">
      <li>Less than <code>&lt;</code></li>
      <li>Less than or equal <code>&lt;=</code></li>
      <li>Greater than <code>&gt;</code></li>
      <li>Greater than or equal <code>&gt;=</code></li>
      <li>Equal to <code>==</code></li>
      <li>Not equal to <code>!=</code></li>
    </ul>

    {/* Logical Operators */}
    <h2 className="text-2xl font-bold text-gray-800 mt-6">Logical Operators</h2>
    <p className="text-gray-700 mt-2">
      Additionally, Go supports the usual logical operators:
    </p>
    <ul className="list-disc list-inside text-gray-700 mt-3 space-y-1">
      <li>Logical AND <code>&amp;&amp;</code></li>
      <li>Logical OR <code>||</code></li>
      <li>Logical NOT <code>!</code></li>
    </ul>

    {/* Paragraph */}
    <p className="text-gray-700 mt-4 leading-relaxed">
      You can use these operators or their combinations to create conditions for
      decision-making in your Go programs.
    </p>

    {/* Example Table */}
    <h2 className="text-2xl font-bold text-gray-800 mt-6">Examples</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left text-gray-800">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-4 border">Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4 border">x &gt; y</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="py-2 px-4 border">x != y</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border">(x &gt; y) &amp;&amp; (y &gt; z)</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="py-2 px-4 border">(x == y) || z</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Conditional Statements List */}
    <h2 className="text-2xl font-bold text-gray-800 mt-6">Go Conditional Statements</h2>
    <ul className="list-disc list-inside text-gray-700 mt-3 space-y-1">
      <li>
        Use <code>if</code> to specify a block of code to execute if a specified
        condition is true.
      </li>
      <li>
        Use <code>else</code> to specify a block of code to execute if the same
        condition is false.
      </li>
      <li>
        Use <code>else if</code> to test a new condition if the first condition is false.
      </li>
      <li>
        Use <code>switch</code> to specify multiple alternative blocks of code to execute.
      </li>
    </ul>
  </div>
);

export default GoConditions;
