import React from "react";

const SwiftMultipleVariables: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2 mt-15">
      Swift Multiple Variables
    </h1>

    <p className="text-lg  leading-relaxed mt-4">
      Swift allows declaring <b>multiple variables</b> or <b>constants</b> on a single
      line, especially when they share the same purpose or type. Use this approach
      when readability remains clear.
    </p>

    {/* Multiple Variables Declared */}
    <h2 className="text-2xl font-bold  mt-6">
      Multiple Variables Declared
    </h2>

    <p className=" leading-relaxed mt-3">
      You can declare multiple values in one line, but it is recommended only when
      the code remains easy to understand.
    </p>

    <h3 className="text-xl font-bold  mt-4">Example</h3>

    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>
{`var x = 1, y = 2, z = 3
let a = 10, b = 20
print(x, y, z, a, b)`}
      </pre>
    </div>

    <p className=" leading-relaxed mt-4">
      This example shows multiple variables and constants declared on one line.
    </p>

    {/* With Type Annotations */}
    <h2 className="text-2xl font-bold  mt-6">
      With Type Annotations
    </h2>

    <p className=" leading-relaxed mt-3">
      Adding explicit type annotations helps when type inference may be unclear or
      when documenting intent.
    </p>

    <h3 className="text-xl font-bold  mt-4">Example</h3>

    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>
{`var i: Int = 1, j: Int = 2
let firstName: String = "Robin", lastName: String = "Refsnes"
print(i + j, firstName, lastName)`}
      </pre>
    </div>
  </>
);

export default SwiftMultipleVariables;
