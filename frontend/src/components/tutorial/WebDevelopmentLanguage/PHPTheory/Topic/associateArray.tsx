import React from "react";

const PhpAssociativeArrays: React.FC = () => {
  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-4">PHP Associative Arrays</h1>

      <p className="mb-4">
        Associative arrays are arrays that use <strong>named keys</strong> that
        you assign to them.
      </p>

      {/* Example 1 */}
      <section className="bg-gray-800 p-4 rounded-xl mb-6 shadow">
        <h2 className="text-xl font-semibold mb-2">Create Associative Array</h2>

        <pre className="bg-black p-4 rounded text-green-400 overflow-x-auto">
{`$car = array("brand" => "Ford", "model" => "Mustang", "year" => 1964);
var_dump($car);`}
        </pre>
      </section>

      {/* Example 2 */}
      <section className="bg-gray-800 p-4 rounded-xl mb-6 shadow">
        <h2 className="text-xl font-semibold mb-2">Access Associative Array</h2>

        <pre className="bg-black p-4 rounded text-green-400 overflow-x-auto">
{`$car = array("brand" => "Ford", "model" => "Mustang", "year" => 1964);
echo $car["model"];`}
        </pre>

        <p className="mt-2 text-gray-300">Output: Mustang</p>
      </section>

      {/* Example 3 */}
      <section className="bg-gray-800 p-4 rounded-xl mb-6 shadow">
        <h2 className="text-xl font-semibold mb-2">Change Value</h2>

        <pre className="bg-black p-4 rounded text-green-400 overflow-x-auto">
{`$car = array("brand" => "Ford", "model" => "Mustang", "year" => 1964);
$car["year"] = 2024;
var_dump($car);`}
        </pre>
      </section>

      {/* Example 4 */}
      <section className="bg-gray-800 p-4 rounded-xl mb-6 shadow">
        <h2 className="text-xl font-semibold mb-2">Loop Through Associative Array</h2>

        <pre className="bg-black p-4 rounded text-green-400 overflow-x-auto">
{`$car = array("brand" => "Ford", "model" => "Mustang", "year" => 1964);

foreach ($car as $x => $y) {
  echo "$x: $y <br>";
}`}
        </pre>
      </section>
    </div>
  );
};

export default PhpAssociativeArrays;
