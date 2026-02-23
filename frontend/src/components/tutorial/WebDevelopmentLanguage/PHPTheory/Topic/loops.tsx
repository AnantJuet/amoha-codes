import React from "react";

const PhpLoops: React.FC = () => {
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">PHP Loops</h1>

      <p>
        Loops in PHP are used to execute the same block of code repeatedly, as long as
        a certain condition is true. This helps avoid writing repetitive code.
      </p>

      <h2 className="text-xl font-semibold mt-4">PHP Loop Types</h2>
      <p>PHP supports the following loop types:</p>

      <ul className="list-disc ml-6 mt-2">
        <li><b>while</b> – loops while a condition is true</li>
        <li><b>do...while</b> – executes once, then loops while condition is true</li>
        <li><b>for</b> – loops a specific number of times</li>
        <li><b>foreach</b> – loops through each element in an array</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">1. While Loop</h2>
      <p>
        The <code>while</code> loop executes as long as the condition is true:
      </p>

      <pre className="bg-gray-200 p-3 rounded mt-2">
{`<?php
$x = 1;

while ($x <= 5) {
    echo "Number: $x <br>";
    $x++;
}
?>

// Output:
// Number: 1
// Number: 2
// Number: 3
// Number: 4
// Number: 5`}
      </pre>

      <h2 className="text-xl font-semibold mt-6">2. Do...While Loop</h2>
      <p>
        The <code>do...while</code> loop executes at least once before checking the condition:
      </p>

      <pre className="bg-gray-200 p-3 rounded mt-2">
{`<?php
$x = 1;

do {
    echo "Number: $x <br>";
    $x++;
} while ($x <= 5);
?>

// The code block runs first, then checks the condition`}
      </pre>

      <h2 className="text-xl font-semibold mt-6">3. For Loop</h2>
      <p>
        Use the <code>for</code> loop when you know exactly how many times to iterate:
      </p>

      <pre className="bg-gray-200 p-3 rounded mt-2">
{`<?php
// Syntax: for (init; condition; increment)

for ($i = 0; $i < 5; $i++) {
    echo "Iteration: $i <br>";
}
?>

// Output: Iteration: 0, 1, 2, 3, 4`}
      </pre>

      <h3 className="text-lg font-semibold mt-4">For Loop with Different Steps</h3>
      <pre className="bg-gray-200 p-3 rounded mt-2">
{`<?php
// Count by 2
for ($i = 0; $i <= 10; $i += 2) {
    echo "$i ";  // Output: 0 2 4 6 8 10
}

// Count backwards
for ($i = 5; $i >= 1; $i--) {
    echo "$i ";  // Output: 5 4 3 2 1
}
?>`}
      </pre>

      <h2 className="text-xl font-semibold mt-6">4. Foreach Loop</h2>
      <p>
        The <code>foreach</code> loop is designed specifically for arrays:
      </p>

      <pre className="bg-gray-200 p-3 rounded mt-2">
{`<?php
// Indexed array
$colors = array("Red", "Green", "Blue");

foreach ($colors as $color) {
    echo "$color <br>";
}

// Associative array (with key-value)
$ages = array("Alice" => 25, "Bob" => 30, "Charlie" => 35);

foreach ($ages as $name => $age) {
    echo "$name is $age years old <br>";
}
?>`}
      </pre>

      <h2 className="text-xl font-semibold mt-6">Break and Continue</h2>
      <p>
        Control loop execution with <code>break</code> and <code>continue</code>:
      </p>

      <pre className="bg-gray-200 p-3 rounded mt-2">
{`<?php
// break - exit the loop entirely
for ($i = 0; $i < 10; $i++) {
    if ($i == 5) {
        break;
    }
    echo "$i ";  // Output: 0 1 2 3 4
}

// continue - skip current iteration
for ($i = 0; $i < 5; $i++) {
    if ($i == 2) {
        continue;
    }
    echo "$i ";  // Output: 0 1 3 4
}
?>`}
      </pre>

      <h2 className="text-xl font-semibold mt-6">Nested Loops</h2>
      <p>You can place loops inside other loops:</p>

      <pre className="bg-gray-200 p-3 rounded mt-2">
{`<?php
// Multiplication table
for ($i = 1; $i <= 3; $i++) {
    for ($j = 1; $j <= 3; $j++) {
        echo "$i x $j = " . ($i * $j) . " | ";
    }
    echo "<br>";
}
?>

// Output:
// 1 x 1 = 1 | 1 x 2 = 2 | 1 x 3 = 3 |
// 2 x 1 = 2 | 2 x 2 = 4 | 2 x 3 = 6 |
// 3 x 1 = 3 | 3 x 2 = 6 | 3 x 3 = 9 |`}
      </pre>

      <h2 className="text-xl font-semibold mt-6">Comparison Table</h2>
      <table className="min-w-full border border-gray-300 mt-2">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Loop</th>
            <th className="border border-gray-300 px-4 py-2">Best Used When</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">while</td>
            <td className="border border-gray-300 px-4 py-2">Unknown number of iterations</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">do...while</td>
            <td className="border border-gray-300 px-4 py-2">Must run at least once</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">for</td>
            <td className="border border-gray-300 px-4 py-2">Known number of iterations</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">foreach</td>
            <td className="border border-gray-300 px-4 py-2">Iterating through arrays</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PhpLoops;
