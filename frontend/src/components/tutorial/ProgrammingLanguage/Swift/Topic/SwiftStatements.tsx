import React from "react";

const SwiftStatements: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2 mt-15">
      Swift Statements
    </h1>

    <p className="text-lg  leading-relaxed mt-4">
      Swift programs are built using different types of <b>statements</b>, such as declarations,
      expressions, and control flow statements like <b>if</b>, <b>switch</b>, and loops.
    </p>

    {/* Expression & Declaration Statements */}
    <h2 className="text-2xl font-bold  mt-6">
      Expression & Declaration Statements
    </h2>

    <p className=" leading-relaxed mt-3">
      <b>Declarations</b> introduce new names into the program, such as variables and constants.
      <br />
      <b>Expression statements</b> evaluate and execute expressions like function calls.
    </p>

    <h3 className="text-xl font-bold  mt-4">Example</h3>

    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>
{`let x = 2   // declaration
print(x)     // expression statement`}
      </pre>
    </div>

    <p className=" leading-relaxed mt-4">
      In this example, <code>let x = 2</code> creates a constant, and{" "}
      <code>print(x)</code> is an expression statement that prints its value.
    </p>

    {/* Semicolons and Blocks */}
    <h2 className="text-2xl font-bold  mt-6">Semicolons and Blocks</h2>

    <p className=" leading-relaxed mt-3">
      Semicolons are <b>optional</b> at the end of lines in Swift. They are only needed when two
      or more statements appear on the same line.
    </p>

    <p className=" leading-relaxed mt-3">
      Braces <code>{"{ }"}</code> group statements into blocks, commonly used with conditionals and loops.
    </p>

    <h3 className="text-xl font-bold  mt-4">Example</h3>

    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>
{`let a = 1; let b = 2   // semicolons separating statements on one line
print(a + b)

if a < b {
  print("a is less than b")
}`}
      </pre>
    </div>

    <p className=" leading-relaxed mt-4">
      Swift does not require semicolons at the end of each line—use them only when putting
      multiple statements on one line.  
      <br />
      Braces <code>{"{ ... }"}</code> define blocks of grouped statements.
    </p>
  </>
);

export default SwiftStatements;
