import React from "react";

const PhpAddArrayItems: React.FC = () => {
  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-4">PHP Add Array Items</h1>

      <p className="mb-4">
        You can add items to arrays using <strong>bracket [] syntax</strong> or
        functions like <strong>array_push()</strong>. Associative arrays can use
        keys to add new data.
      </p>

      {/* Example 1 */}
      <section className="bg-gray-800 p-4 rounded-xl mb-6 shadow">
        <h2 className="text-xl font-semibold mb-2">Add Array Item</h2>
        <p className="text-gray-300 mb-2">
          Add one more item to the fruits array:
        </p>

        <pre className="bg-black p-4 rounded text-green-400 overflow-x-auto">
{`$fruits = array("Apple", "Banana", "Cherry");
$fruits[] = "Orange";`}
        </pre>
      </section>

      {/* Example 2 */}
      <section className="bg-gray-800 p-4 rounded-xl mb-6 shadow">
        <h2 className="text-xl font-semibold mb-2">Associative Arrays</h2>

        <p className="text-gray-300 mb-2">Add one item to the car array:</p>

        <pre className="bg-black p-4 rounded text-green-400 overflow-x-auto">
{`$cars = array("brand" => "Ford", "model" => "Mustang");
$cars["color"] = "Red";`}
        </pre>
      </section>

      {/* Example 3 */}
      <section className="bg-gray-800 p-4 rounded-xl mb-6 shadow">
        <h2 className="text-xl font-semibold mb-2">Add Multiple Array Items</h2>

        <p className="text-gray-300 mb-2">
          Use <strong>array_push()</strong> to add multiple items:
        </p>

        <pre className="bg-black p-4 rounded text-green-400 overflow-x-auto">
{`$fruits = array("Apple", "Banana", "Cherry");
array_push($fruits, "Orange", "Kiwi", "Lemon");`}
        </pre>
      </section>

      {/* Example 4 */}
      <section className="bg-gray-800 p-4 rounded-xl mb-6 shadow">
        <h2 className="text-xl font-semibold mb-2">
          Add Multiple Items to Associative Arrays
        </h2>

        <p className="text-gray-300 mb-2">
          Use the <strong>+= operator</strong> to merge new key/value pairs:
        </p>

        <pre className="bg-black p-4 rounded text-green-400 overflow-x-auto">
{`$cars = array("brand" => "Ford", "model" => "Mustang");
$cars += ["color" => "red", "year" => 1964];`}
        </pre>
      </section>
    </div>
  );
};

export default PhpAddArrayItems;
