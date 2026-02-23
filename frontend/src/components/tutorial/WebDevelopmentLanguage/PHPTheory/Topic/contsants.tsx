import React from "react";

const PhpConstants: React.FC = () => {
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">PHP Constants</h1>

      <p>
        A constant is an identifier (name) for a simple value. Unlike variables, constants cannot be changed or undefined once they are defined.
      </p>

      <h2 className="text-xl font-semibold">Creating Constants</h2>
      <p>
        To create a constant, use the <code>define()</code> function:
      </p>

      <pre className="bg-gray-200 p-3 rounded">
{`define(name, value, case-insensitive)`}
      </pre>

      <p>Parameters:</p>
      <ul className="list-disc ml-6">
        <li><b>name</b>: The name of the constant</li>
        <li><b>value</b>: The value of the constant</li>
        <li><b>case-insensitive</b>: Whether the name is case-insensitive (default is false)</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4">Example: Case-Sensitive Constant</h2>
      <pre className="bg-gray-200 p-3 rounded">
{`<?php
define("GREETING", "Welcome to W3Schools.com!");
echo GREETING;
?>`}
      </pre>

      <h2 className="text-xl font-semibold mt-4">Example: Case-Insensitive Constant (Deprecated in PHP 7.3+)</h2>
      <pre className="bg-gray-200 p-3 rounded">
{`<?php
define("GREETING", "Welcome!", true);
echo greeting;  // Works in older PHP versions
?>`}
      </pre>
      <p className="text-sm text-gray-600">
        Note: Case-insensitive constants are deprecated as of PHP 7.3 and removed in PHP 8.0.
      </p>

      <h2 className="text-xl font-semibold mt-4">PHP const Keyword</h2>
      <p>
        You can also create constants using the <code>const</code> keyword:
      </p>

      <pre className="bg-gray-200 p-3 rounded">
{`<?php
const SITE_NAME = "W3Schools";
echo SITE_NAME;
?>`}
      </pre>

      <h2 className="text-xl font-semibold mt-4">const vs define()</h2>
      <table className="min-w-full border border-gray-300 mt-2">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">const</th>
            <th className="border border-gray-300 px-4 py-2">define()</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Defined at compile time</td>
            <td className="border border-gray-300 px-4 py-2">Defined at runtime</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Cannot be used in conditional statements</td>
            <td className="border border-gray-300 px-4 py-2">Can be used in conditional statements</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Always case-sensitive</td>
            <td className="border border-gray-300 px-4 py-2">Can be case-insensitive (deprecated)</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-xl font-semibold mt-4">Constant Arrays</h2>
      <p>
        In PHP 7+, you can create constant arrays using <code>define()</code>:
      </p>

      <pre className="bg-gray-200 p-3 rounded">
{`<?php
define("CARS", [
    "Alfa Romeo",
    "BMW",
    "Toyota"
]);
echo CARS[0];  // Outputs: Alfa Romeo
?>`}
      </pre>

      <h2 className="text-xl font-semibold mt-4">Constants are Global</h2>
      <p>
        Constants are automatically global and can be accessed throughout the entire script:
      </p>

      <pre className="bg-gray-200 p-3 rounded">
{`<?php
define("GREETING", "Welcome to PHP!");

function myTest() {
    echo GREETING;  // Works! Constants are global
}

myTest();
?>`}
      </pre>

      <h2 className="text-xl font-semibold mt-4">Predefined Constants</h2>
      <p>
        PHP has many predefined constants (also called "magic constants"):
      </p>

      <table className="min-w-full border border-gray-300 mt-2">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Constant</th>
            <th className="border border-gray-300 px-4 py-2">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">__LINE__</td>
            <td className="border border-gray-300 px-4 py-2">Current line number</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">__FILE__</td>
            <td className="border border-gray-300 px-4 py-2">Full path and filename</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">__DIR__</td>
            <td className="border border-gray-300 px-4 py-2">Directory of the file</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">__FUNCTION__</td>
            <td className="border border-gray-300 px-4 py-2">Function name</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">__CLASS__</td>
            <td className="border border-gray-300 px-4 py-2">Class name</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">__METHOD__</td>
            <td className="border border-gray-300 px-4 py-2">Class method name</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">__NAMESPACE__</td>
            <td className="border border-gray-300 px-4 py-2">Current namespace</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">PHP_VERSION</td>
            <td className="border border-gray-300 px-4 py-2">PHP version</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">PHP_OS</td>
            <td className="border border-gray-300 px-4 py-2">Operating system</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-xl font-semibold mt-4">Example: Using Magic Constants</h2>
      <pre className="bg-gray-200 p-3 rounded">
{`<?php
echo "Current line: " . __LINE__ . "<br>";
echo "File: " . __FILE__ . "<br>";
echo "Directory: " . __DIR__ . "<br>";
echo "PHP Version: " . PHP_VERSION;
?>`}
      </pre>

      <h2 className="text-xl font-semibold mt-4">Checking if a Constant Exists</h2>
      <p>
        Use <code>defined()</code> to check if a constant is defined:
      </p>

      <pre className="bg-gray-200 p-3 rounded">
{`<?php
define("GREETING", "Hello!");

if (defined("GREETING")) {
    echo "GREETING is defined";
}
?>`}
      </pre>
    </div>
  );
};

export default PhpConstants;
