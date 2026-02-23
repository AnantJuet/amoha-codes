import React from "react";

const PhpAccessArrays: React.FC = () => {
  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-4">PHP Access Arrays</h1>

      <p className="mb-4">
        You can access array items using <strong>index numbers</strong> for
        indexed arrays and <strong>keys</strong> for associative arrays.
      </p>

      {/* Example 1: Indexed Array Access */}
      <section className="bg-gray-800 p-4 rounded-xl mb-6 shadow">
        <h2 className="text-xl font-semibold mb-2">Access Array Item</h2>
        <p className="text-gray-300 mb-2">
          Access item by referring to its <strong>index number</strong>:
        </p>

        <pre className="bg-black p-4 rounded text-green-400 overflow-x-auto">
{`$cars = array("Volvo", "BMW", "Toyota");
echo $cars[2];`}
        </pre>
        <p className="text-gray-400 mt-2">Note: Indexing starts from 0.</p>
      </section>

      {/* Example 2: Associative Array Access */}
      <section className="bg-gray-800 p-4 rounded-xl mb-6 shadow">
        <h2 className="text-xl font-semibold mb-2">Access Associative Array</h2>

        <p className="text-gray-300 mb-2">
          Access item using the <strong>key name</strong>:
        </p>

        <pre className="bg-black p-4 rounded text-green-400 overflow-x-auto">
{`$cars = array("brand" => "Ford", "model" => "Mustang", "year" => 1964);
echo $cars["year"];`}
        </pre>
      </section>

      {/* Example 3: Quotes */}
      <section className="bg-gray-800 p-4 rounded-xl mb-6 shadow">
        <h2 className="text-xl font-semibold mb-2">Double or Single Quotes</h2>

        <pre className="bg-black p-4 rounded text-green-400 overflow-x-auto">
{`echo $cars["model"];
echo $cars['model'];`}
        </pre>
      </section>

      {/* Example 4: Execute Function in Array (Indexed) */}
      <section className="bg-gray-800 p-4 rounded-xl mb-6 shadow">
        <h2 className="text-xl font-semibold mb-2">Execute a Function Item</h2>

        <p className="text-gray-300 mb-2">
          Arrays can store functions. Call them using index + <strong>()</strong>
        </p>

        <pre className="bg-black p-4 rounded text-green-400 overflow-x-auto">
{`function myFunction() {
  echo "I come from a function!";
}

$myArr = array("Volvo", 15, myFunction);

$myArr[2]();`}
        </pre>
      </section>

      {/* Example 5: Execute Function in Associative Array */}
      <section className="bg-gray-800 p-4 rounded-xl mb-6 shadow">
        <h2 className="text-xl font-semibold mb-2">
          Execute Function in Associative Array
        </h2>

        <pre className="bg-black p-4 rounded text-green-400 overflow-x-auto">
{`function myFunction() {
  echo "I come from a function!";
}

$myArr = array("car" => "Volvo", "age" => 15, "message" => myFunction);

$myArr["message"]();`}
        </pre>
      </section>

      {/* Example 6: Loop Through Associative Array */}
      <section className="bg-gray-800 p-4 rounded-xl mb-6 shadow">
        <h2 className="text-xl font-semibold mb-2">
          Loop Through an Associative Array
        </h2>

        <pre className="bg-black p-4 rounded text-green-400 overflow-x-auto">
{`$car = array("brand" => "Ford", "model" => "Mustang", "year" => 1964);

foreach ($car as $x => $y) {
  echo "$x: $y <br>";
}`}
        </pre>
      </section>

      {/* Example 7: Loop Through Indexed Array */}
      <section className="bg-gray-800 p-4 rounded-xl mb-6 shadow">
        <h2 className="text-xl font-semibold mb-2">
          Loop Through an Indexed Array
        </h2>

        <pre className="bg-black p-4 rounded text-green-400 overflow-x-auto">
{`$cars = array("Volvo", "BMW", "Toyota");

foreach ($cars as $x) {
  echo "$x <br>";
}`}
        </pre>
      </section>
    </div>
  );
};

export default PhpAccessArrays;
