import React from "react";

const PhpDeleteArrayItems: React.FC = () => {
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">PHP Delete Array Items</h1>

      <p>
        PHP provides several functions to remove items from both indexed and
        associative arrays. Some functions reindex the array automatically,
        while others keep the original index structure.
      </p>

      {/* array_splice */}
      <h2 className="text-xl font-semibold">Remove Array Item Using array_splice()</h2>
      <p>
        The <b>array_splice()</b> function removes items starting from a
        specific index. It also automatically reindexes the array.
      </p>

      <pre className="bg-gray-200 p-3 rounded">
{`$cars = array("Volvo", "BMW", "Toyota");
array_splice($cars, 1, 1);   // Removes "BMW"`}
      </pre>

      <p>After deletion, the array reindexes starting from 0.</p>

      {/* unset */}
      <h2 className="text-xl font-semibold">Using the unset() Function</h2>
      <p>
        The <b>unset()</b> function also removes items, but it does{" "}
        <u>not</u> reindex the array. This means a gap remains in the index
        sequence.
      </p>

      <pre className="bg-gray-200 p-3 rounded">
{`$cars = array("Volvo", "BMW", "Toyota");
unset($cars[1]);   // Removes "BMW", index 1 becomes empty`}
      </pre>

      {/* multiple removes */}
      <h2 className="text-xl font-semibold">Remove Multiple Array Items</h2>
      <p>
        To remove multiple items, use <b>array_splice()</b> with the length
        parameter.
      </p>

      <pre className="bg-gray-200 p-3 rounded">
{`$cars = array("Volvo", "BMW", "Toyota");
array_splice($cars, 1, 2);   // Removes "BMW" and "Toyota"`}
      </pre>

      <p>
        You can also remove multiple items using <b>unset()</b> by passing
        multiple indices.
      </p>

      <pre className="bg-gray-200 p-3 rounded">
{`$cars = array("Volvo", "BMW", "Toyota");
unset($cars[0], $cars[1]);`}
      </pre>

      {/* associative array */}
      <h2 className="text-xl font-semibold">
        Remove Item From an Associative Array
      </h2>
      <p>Use <b>unset()</b> with the key you want to delete.</p>

      <pre className="bg-gray-200 p-3 rounded">
{`$cars = array("brand" => "Ford", "model" => "Mustang", "year" => 1964);
unset($cars["model"]);`}
      </pre>

      {/* array_diff */}
      <h2 className="text-xl font-semibold">Using array_diff()</h2>
      <p>
        The <b>array_diff()</b> function removes items by value and returns a
        new array.
      </p>

      <pre className="bg-gray-200 p-3 rounded">
{`$cars = array("brand" => "Ford", "model" => "Mustang", "year" => 1964);
$newarray = array_diff($cars, ["Mustang", 1964]);`}
      </pre>

      <p>Note: array_diff() compares values, not keys.</p>

      {/* array_pop */}
      <h2 className="text-xl font-semibold">Remove the Last Item</h2>
      <p>The <b>array_pop()</b> function removes the last item from an array.</p>

      <pre className="bg-gray-200 p-3 rounded">
{`$cars = array("Volvo", "BMW", "Toyota");
array_pop($cars);   // Removes "Toyota"`}
      </pre>

      {/* array_shift */}
      <h2 className="text-xl font-semibold">Remove the First Item</h2>
      <p>The <b>array_shift()</b> function removes the first item in the array.</p>

      <pre className="bg-gray-200 p-3 rounded">
{`$cars = array("Volvo", "BMW", "Toyota");
array_shift($cars);   // Removes "Volvo"`}
      </pre>

      <p className="mt-4">
        These functions give you full control over removing items from arrays in
        PHP.
      </p>
    </div>
  );
};

export default PhpDeleteArrayItems;
