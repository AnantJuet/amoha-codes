import React from "react";

const PHPIndexedArrays: React.FC = () => {
  return (
    <div className="p-6 leading-7">
      <h1 className="text-3xl font-bold mb-4">PHP Indexed Arrays</h1>

      <p>
        In an indexed array, each item has a numerical index. The first item has
        index <strong>0</strong>, the second item has index <strong>1</strong>,
        and so on.
      </p>

      {/* Create and Display Array */}
      <h2 className="text-2xl font-semibold mt-6">Create and Display an Indexed Array</h2>

      <pre className="bg-gray-200 p-3 rounded mt-2">
{`$cars = array("Volvo", "BMW", "Toyota");
var_dump($cars);`}
      </pre>

      {/* Access Indexed Arrays */}
      <h2 className="text-2xl font-semibold mt-6">Access Indexed Arrays</h2>

      <p>To access an item, you refer to its index number.</p>

      <pre className="bg-gray-200 p-3 rounded mt-2">
{`$cars = array("Volvo", "BMW", "Toyota");
echo $cars[0];`}
      </pre>

      {/* Change Value */}
      <h2 className="text-2xl font-semibold mt-6">Change Array Item Value</h2>

      <p>Use the index number to update a value.</p>

      <pre className="bg-gray-200 p-3 rounded mt-2">
{`$cars = array("Volvo", "BMW", "Toyota");
$cars[1] = "Ford";
var_dump($cars);`}
      </pre>

      {/* Loop Through Array */}
      <h2 className="text-2xl font-semibold mt-6">
        Loop Through an Indexed Array
      </h2>

      <p>You can loop through an array with a foreach loop:</p>

      <pre className="bg-gray-200 p-3 rounded mt-2">
{`$cars = array("Volvo", "BMW", "Toyota");
foreach ($cars as $x) {
  echo "$x <br>";
}`}
      </pre>

      {/* Index Number Explanation */}
      <h2 className="text-2xl font-semibold mt-6">Index Number Behavior</h2>

      <p>
        By default, PHP assigns increasing numeric indexes. New items get the
        next available index.
      </p>

      <p className="mt-2">Example:</p>

      <pre className="bg-gray-200 p-3 rounded mt-2">
{`$cars[0] = "Volvo";
$cars[1] = "BMW";
$cars[2] = "Toyota";

array_push($cars, "Ford");
var_dump($cars);   // "Ford" gets index 3`}
      </pre>

      {/* Random Index Example */}
      <h2 className="text-2xl font-semibold mt-6">
        Indexed Arrays With Random Index Numbers
      </h2>

      <p>If the array has random indexes, PHP finds the highest index and adds 1.</p>

      <pre className="bg-gray-200 p-3 rounded mt-2">
{`$cars[5] = "Volvo";
$cars[7] = "BMW";
$cars[14] = "Toyota";

array_push($cars, "Ford");
var_dump($cars);   // "Ford" gets index 15`}
      </pre>
    </div>
  );
};

export default PHPIndexedArrays;
