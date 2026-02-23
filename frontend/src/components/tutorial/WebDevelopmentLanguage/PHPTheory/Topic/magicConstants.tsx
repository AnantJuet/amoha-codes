import React from "react";

const PhpMagicConstants: React.FC = () => {
  return (
    <div className="p-4 space-y-6">
      <h1 className="text-3xl font-bold">PHP Magic Constants</h1>

      <p>
        PHP has nine predefined constants that change value depending on where they are used.
        These are known as <strong>magic constants</strong>.
      </p>

      <p>
        Magic constants are written with double underscores at the beginning and the end, except{" "}
        <code>ClassName::class</code>.
      </p>

      <h2 className="text-2xl font-semibold">List of Magic Constants</h2>

      <div className="bg-gray-100 p-4 rounded-md overflow-auto">
        <table className="w-full table-auto border">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Constant</th>
              <th className="border p-2">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2"><code>__CLASS__</code></td>
              <td className="border p-2">Returns the class name (used inside a class).</td>
            </tr>
            <tr>
              <td className="border p-2"><code>__DIR__</code></td>
              <td className="border p-2">Returns the directory of the file.</td>
            </tr>
            <tr>
              <td className="border p-2"><code>__FILE__</code></td>
              <td className="border p-2">Returns the full path and filename.</td>
            </tr>
            <tr>
              <td className="border p-2"><code>__FUNCTION__</code></td>
              <td className="border p-2">Returns the function name (inside a function).</td>
            </tr>
            <tr>
              <td className="border p-2"><code>__LINE__</code></td>
              <td className="border p-2">Returns the current line number.</td>
            </tr>
            <tr>
              <td className="border p-2"><code>__METHOD__</code></td>
              <td className="border p-2">Returns class + function name (inside class method).</td>
            </tr>
            <tr>
              <td className="border p-2"><code>__NAMESPACE__</code></td>
              <td className="border p-2">Returns the current namespace name.</td>
            </tr>
              <tr>
              <td className="border p-2"><code>__TRAIT__</code></td>
              <td className="border p-2">Returns the trait name (inside a trait).</td>
            </tr>
            <tr>
              <td className="border p-2"><code>ClassName::class</code></td>
              <td className="border p-2">
                Returns the class name including namespace (if any).
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold">Examples</h2>

      <h3 className="text-xl font-semibold">__FILE__ Example</h3>
      <pre className="bg-gray-100 p-4 rounded-md overflow-auto">
{`<?php
echo __FILE__; 
// Outputs: full path + filename
?>`}
      </pre>

      <h3 className="text-xl font-semibold">__DIR__ Example</h3>
      <pre className="bg-gray-100 p-4 rounded-md overflow-auto">
{`<?php
echo __DIR__;
// Outputs: directory path
?>`}
      </pre>

      <h3 className="text-xl font-semibold">__FUNCTION__ Example</h3>
      <pre className="bg-gray-100 p-4 rounded-md overflow-auto">
{`<?php
function test() {
  echo __FUNCTION__;
}
test(); 
?>`}
      </pre>

      <h3 className="text-xl font-semibold">__CLASS__ and __METHOD__</h3>
      <pre className="bg-gray-100 p-4 rounded-md overflow-auto">
{`<?php
class MyClass {
  public function myMethod() {
    echo __CLASS__ . "<br>";
    echo __METHOD__;
  }
}
$obj = new MyClass();
$obj->myMethod();
?>`}
      </pre>

      <p className="text-yellow-700 font-semibold">
        Note: Magic constants are case-insensitive (e.g., __LINE__ == __line__).
      </p>
    </div>
  );
};

export default PhpMagicConstants;
