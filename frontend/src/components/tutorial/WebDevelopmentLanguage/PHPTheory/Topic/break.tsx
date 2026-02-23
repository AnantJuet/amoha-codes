import React from "react";

const PhpBreakStatement: React.FC = () => {
  return (
    <div className="p-6 leading-7">
      <h1 className="text-3xl font-bold mb-4">PHP Break Statement</h1>

      <p>
        The <b>break</b> statement is used to jump out of loops in PHP, regardless of the loop type.
      </p>

      {/* Break in For Loop */}
      <h2 className="text-2xl font-semibold mt-6">Break in For Loop</h2>
      <p>Jump out of the loop when <code>$x</code> is 4:</p>
      <pre className="bg-gray-200 p-3 rounded mt-2">
{`for ($x = 0; $x < 10; $x++) {
  if ($x == 4) {
    break;
  }
  echo "The number is: $x <br>";
}`}
      </pre>

      {/* Break in While Loop */}
      <h2 className="text-2xl font-semibold mt-6">Break in While Loop</h2>
      <p>Jump out of the loop when <code>$x</code> is 4:</p>
      <pre className="bg-gray-200 p-3 rounded mt-2">
{`$x = 0;

while($x < 10) {
  if ($x == 4) {
    break;
  }
  echo "The number is: $x <br>";
  $x++;
}`}
      </pre>

      {/* Break in Do While Loop */}
      <h2 className="text-2xl font-semibold mt-6">Break in Do...While Loop</h2>
      <p>Jump out of the loop when <code>$i</code> is 3:</p>
      <pre className="bg-gray-200 p-3 rounded mt-2">
{`$i = 1;

do {
  if ($i == 3) break;
  echo $i;
  $i++;
} while ($i < 6);`}
      </pre>

      {/* Break in Foreach Loop */}
      <h2 className="text-2xl font-semibold mt-6">Break in Foreach Loop</h2>
      <p>Jump out of the loop if <code>$x</code> is "blue":</p>
      <pre className="bg-gray-200 p-3 rounded mt-2">
{`$colors = array("red", "green", "blue", "yellow");

foreach ($colors as $x) {
  if ($x == "blue") break;
  echo "$x <br>";
}`}
      </pre>
    </div>
  );
};

export default PhpBreakStatement;
