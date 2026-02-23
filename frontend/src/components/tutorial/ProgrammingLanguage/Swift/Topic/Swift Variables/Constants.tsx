import React from "react";

const Constants: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2 mt-15">
      Swift Constants
    </h1>

    <p className="text-lg  leading-relaxed mt-4">
      In Swift, constants are declared using <b>let</b>. Once assigned, the value of a
      constant <b>cannot be changed</b>, making it ideal for values that should remain
      fixed throughout the program.
    </p>

    {/* Declare Constants */}
    <h2 className="text-2xl font-bold mt-6">Declare Constants</h2>

    <p className=" leading-relaxed mt-3">
      Use <code>let</code> to bind a value that should never be reassigned.
    </p>

    <h3 className="text-xl font-bold  mt-4">Example</h3>

    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>
{`let pi = 3.14159
let maxCount = 100
// pi = 4.0  // Error: cannot assign to 'pi' because it is a constant`}
      </pre>
    </div>

    <p className=" leading-relaxed mt-4">
      The <code>let</code> keyword ensures the value stays unchanged, preventing accidental
      modification.
    </p>

    {/* Constants and Collections */}
    <h2 className="text-2xl font-bold mt-6">
      Constants and Collections
    </h2>

    <p className=" leading-relaxed mt-3">
      When a collection (like an array) is declared with <code>var</code>, it can be
      modified. But if declared with <code>let</code>, the collection becomes immutable,
      meaning you cannot change its contents.
    </p>

    <h3 className="text-xl font-bold  mt-4">Example</h3>

    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>
{`var nums = [1, 2]
nums.append(3)       // OK: nums is mutable
print(nums)

let fixed = [1, 2]
// fixed.append(3)   // Error: cannot mutate an immutable array`}
      </pre>
    </div>
  </>
);

export default Constants;
