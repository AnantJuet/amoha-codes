import React from "react";

const PhpArrays: React.FC = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-medium mb-4 pb-2 border-b border-purple-300 mt-10">
        PHP Arrays
      </h2>

      <p className="leading-relaxed mb-4">
        A PHP array stores multiple values inside a single variable. This makes
        it easy to manage collections of data.
      </p>

      <h3 className="text-xl font-medium mb-3">Example</h3>
      <p className="font-mono bg-gray-100 dark:bg-gray-800 p-2 rounded text-sm text-black dark:text-gray-200 mb-4">
        $cars = array("Volvo", "BMW", "Toyota");
      </p>

      <h3 className="text-xl font-medium mb-3">What is an Array?</h3>
      <p className="leading-relaxed mb-4">
        An array is a special variable that can hold multiple values under one
        name. You can access each value using an index number or a key.
      </p>

      <h3 className="text-xl font-medium mb-3">PHP Array Types</h3>
      <ul className="list-disc list-inside ml-4 space-y-2 mb-4">
        <li>
          <strong>Indexed Arrays</strong> – Arrays with numeric indexes.
        </li>
        <li>
          <strong>Associative Arrays</strong> – Arrays with named keys.
        </li>
        <li>
          <strong>Multidimensional Arrays</strong> – Arrays containing one or
          more arrays.
        </li>
      </ul>

      <h3 className="text-xl font-medium mb-3">Working With Arrays</h3>
      <p className="leading-relaxed mb-4">
        In PHP, you can perform many operations with arrays, such as:
      </p>

      <ul className="list-disc list-inside ml-4 space-y-2 mb-4">
        <li>Create Arrays</li>
        <li>Access Arrays</li>
        <li>Update Arrays</li>
        <li>Add Array Items</li>
        <li>Remove Array Items</li>
        <li>Sort Arrays</li>
      </ul>

      <h3 className="text-xl font-medium mb-3">Array Items</h3>
      <p className="leading-relaxed mb-4">
        Array items can be of any data type: strings, integers, floats, arrays,
        objects, or even functions. PHP allows mixed data types in the same
        array.
      </p>

      <h3 className="text-xl font-medium mb-3">Example</h3>
      <p className="font-mono bg-gray-100 dark:bg-gray-800 p-2 rounded text-sm text-black dark:text-gray-200 mb-4">
        $myArr = array("Volvo", 15, ["apples", "bananas"], myFunction);
      </p>

      <h3 className="text-xl font-medium mb-3">Array Functions</h3>
      <p className="leading-relaxed mb-4">
        PHP provides many built-in array functions. One common example is{" "}
        <span className="font-mono">count()</span>, which returns the number of
        items in an array.
      </p>

      <h3 className="text-xl font-medium mb-3">Example</h3>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
        <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200 whitespace-pre-wrap break-words">
{`$cars = array("Volvo", "BMW", "Toyota");
echo count($cars);`}
        </pre>
      </div>

      <p className="leading-relaxed mb-4">
        For a full list of array functions, check the complete PHP Array
        Reference.
      </p>
    </div>
  );
};

export default PhpArrays;
