import React from "react";

const PhpSortingArrays: React.FC = () => {
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">PHP Sorting Arrays</h1>

      <p>
        PHP provides multiple functions to sort arrays in ascending or
        descending order. These functions can sort both indexed and associative
        arrays.
      </p>

      <h2 className="text-xl font-semibold">Available Sorting Functions</h2>
      <ul className="list-disc pl-6 space-y-1">
        <li><b>sort()</b> - Sort array in ascending order</li>
        <li><b>rsort()</b> - Sort array in descending order</li>
        <li><b>asort()</b> - Sort associative array by value (ascending)</li>
        <li><b>ksort()</b> - Sort associative array by key (ascending)</li>
        <li><b>arsort()</b> - Sort associative array by value (descending)</li>
        <li><b>krsort()</b> - Sort associative array by key (descending)</li>
      </ul>

      {/* sort() */}
      <h2 className="text-xl font-semibold">sort() - Ascending Order</h2>
      <p>Sorts array values in ascending (A–Z or 0–9) order.</p>

      <pre className="bg-gray-200 p-3 rounded">
{`$cars = array("Volvo", "BMW", "Toyota");
sort($cars);

$numbers = array(4, 6, 2, 22, 11);
sort($numbers);`}
      </pre>

      {/* rsort() */}
      <h2 className="text-xl font-semibold">rsort() - Descending Order</h2>
      <p>Sorts array values in descending order.</p>

      <pre className="bg-gray-200 p-3 rounded">
{`$cars = array("Volvo", "BMW", "Toyota");
rsort($cars);

$numbers = array(4, 6, 2, 22, 11);
rsort($numbers);`}
      </pre>

      {/* asort() */}
      <h2 className="text-xl font-semibold">asort() - Sort by Value (Ascending)</h2>
      <p>Sorts associative arrays by value in ascending order.</p>

      <pre className="bg-gray-200 p-3 rounded">
{`$age = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");
asort($age);`}
      </pre>

      {/* ksort() */}
      <h2 className="text-xl font-semibold">ksort() - Sort by Key (Ascending)</h2>
      <p>Sorts associative arrays by key in ascending order.</p>

      <pre className="bg-gray-200 p-3 rounded">
{`$age = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");
ksort($age);`}
      </pre>

      {/* arsort() */}
      <h2 className="text-xl font-semibold">arsort() - Sort by Value (Descending)</h2>
      <p>Sorts associative arrays by value in descending order.</p>

      <pre className="bg-gray-200 p-3 rounded">
{`$age = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");
arsort($age);`}
      </pre>

      {/* krsort() */}
      <h2 className="text-xl font-semibold">krsort() - Sort by Key (Descending)</h2>
      <p>Sorts associative arrays by key in descending order.</p>

      <pre className="bg-gray-200 p-3 rounded">
{`$age = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");
krsort($age);`}
      </pre>

      <p className="mt-4">
        For a full list of array functions, refer to the complete PHP Array
        Reference.
      </p>
    </div>
  );
};

export default PhpSortingArrays;
