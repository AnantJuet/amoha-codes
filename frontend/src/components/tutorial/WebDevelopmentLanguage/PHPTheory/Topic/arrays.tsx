import React from "react";

const PhpArrays: React.FC = () => {
  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-4">PHP Arrays</h1>

      <p className="mb-4">
        An array stores multiple values in one single variable in PHP.
      </p>

      {/* Example 1: Create Array */}
      <section className="bg-gray-800 p-4 rounded-xl mb-6 shadow">
        <h2 className="text-xl font-semibold mb-2">What is an Array?</h2>
        <p className="text-gray-300 mb-2">
          An array can hold many values under a single name. You can access
          these values using <strong>index numbers</strong> or{" "}
          <strong>key names</strong>.
        </p>

        <pre className="bg-black p-4 rounded text-green-400 overflow-x-auto">
{`$cars = array("Volvo", "BMW", "Toyota");`}
        </pre>
      </section>

      {/* Types of Arrays */}
      <section className="bg-gray-800 p-4 rounded-xl mb-6 shadow">
        <h2 className="text-xl font-semibold mb-2">PHP Array Types</h2>
        <ul className="list-disc ml-6 text-gray-300">
          <li>Indexed arrays - Arrays with numeric index</li>
          <li>Associative arrays - Arrays with named keys</li>
          <li>Multidimensional arrays - Arrays containing one or more arrays</li>
        </ul>
      </section>

      {/* Working with Arrays */}
      <section className="bg-gray-800 p-4 rounded-xl mb-6 shadow">
        <h2 className="text-xl font-semibold mb-2">Working With Arrays</h2>

        <p className="text-gray-300 mb-2">You will learn how to:</p>

        <ul className="list-disc ml-6 text-gray-300">
          <li>Create Arrays</li>
          <li>Access Arrays</li>
          <li>Update Arrays</li>
          <li>Add Array Items</li>
          <li>Remove Array Items</li>
          <li>Sort Arrays</li>
        </ul>
      </section>

      {/* Array items types */}
      <section className="bg-gray-800 p-4 rounded-xl mb-6 shadow">
        <h2 className="text-xl font-semibold mb-2">Array Items</h2>

        <p className="text-gray-300 mb-2">
          Array items can be of any data type: strings, numbers, objects,
          functions, or even arrays.
        </p>

        <pre className="bg-black p-4 rounded text-green-400 overflow-x-auto">
{`$myArr = array("Volvo", 15, ["apples", "bananas"], myFunction);`}
        </pre>
      </section>

      {/* Array Functions */}
      <section className="bg-gray-800 p-4 rounded-xl mb-6 shadow">
        <h2 className="text-xl font-semibold mb-2">Array Functions</h2>

        <p className="text-gray-300 mb-2">
          PHP arrays are powerful because of built-in functions. For example,
          <strong> count()</strong> returns the number of items in an array.
        </p>

        <pre className="bg-black p-4 rounded text-green-400 overflow-x-auto">
{`$cars = array("Volvo", "BMW", "Toyota");
echo count($cars);`}
        </pre>
      </section>
    </div>
  );
};

export default PhpArrays;
