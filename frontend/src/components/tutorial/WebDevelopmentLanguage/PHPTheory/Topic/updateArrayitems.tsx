import React from "react";

const PhpUpdateArrayItems: React.FC = () => {
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">PHP Update Array Items</h1>

      <p>
        In PHP, you can update existing array elements by referring to their
        index (for indexed arrays) or key (for associative arrays).
      </p>

      {/* Update indexed array */}
      <h2 className="text-xl font-semibold">Update Array Item</h2>
      <p>
        To update a value in an indexed array, use the index number. Indexing
        starts from <b>0</b>.
      </p>

      <pre className="bg-gray-200 p-3 rounded">
{`$cars = array("Volvo", "BMW", "Toyota");
$cars[1] = "Ford";   // Updates "BMW" to "Ford"`}
      </pre>

      {/* Update associative array */}
      <p>To update an item in an associative array, use the key name.</p>

      <pre className="bg-gray-200 p-3 rounded">
{`$cars = array("brand" => "Ford", "model" => "Mustang", "year" => 1964);
$cars["year"] = 2024;`}
      </pre>

      {/* foreach reference update */}
      <h2 className="text-xl font-semibold">
        Update Array Items in a Foreach Loop
      </h2>

      <p>
        To modify all array items inside a <b>foreach</b> loop, assign values by
        reference using the <code>&</code> symbol.
      </p>

      <p>This ensures any change inside the loop affects the original array.</p>

      <pre className="bg-gray-200 p-3 rounded">
{`$cars = array("Volvo", "BMW", "Toyota");

foreach ($cars as &$x) {
  $x = "Ford";   // All items become "Ford"
}

unset($x);   // Important!`}
      </pre>

      <p>
        The <b>unset($x)</b> is necessary to break the reference. If you skip
        it, the loop variable <b>$x</b> will stay linked to the last array
        element.
      </p>

      {/* forgetting unset consequence */}
      <h2 className="text-xl font-semibold">
        What Happens If You Forget unset()?
      </h2>

      <p>
        If <code>unset($x)</code> is not used, modifying <code>$x</code> after
        the loop will change the last element in the array.
      </p>

      <pre className="bg-gray-200 p-3 rounded">
{`$cars = array("Volvo", "BMW", "Toyota");

foreach ($cars as &$x) {
  $x = "Ford";
}

$x = "ice cream";   // This changes the last item!

var_dump($cars);`}
      </pre>

      <p>
        Because <code>$x</code> was still referencing the last element, changing
        it affects the array.
      </p>
    </div>
  );
};

export default PhpUpdateArrayItems;
