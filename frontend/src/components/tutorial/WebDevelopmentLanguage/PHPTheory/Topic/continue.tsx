import React from "react";

const PhpContinueStatement: React.FC = () => {
  return (
    <div className="p-6 leading-7">
      <h1 className="text-3xl font-bold mb-4">PHP Continue Statement</h1>

      <p>
        The <b>continue</b> statement is used to skip the current iteration of a loop and move to the next iteration.
      </p>

      {/* Continue in For Loop */}
      <h2 className="text-2xl font-semibold mt-6">Continue in For Loop</h2>
      <p>Move to the next iteration if <code>$x</code> is 4:</p>
      <pre className="bg-gray-200 p-3 rounded mt-2">
{`for ($x = 0; $x < 10; $x++) {
  if ($x == 4) {
    continue;
  }
  echo "The number is: $x <br>";
}`}
      </pre>

      {/* Continue in While Loop */}
      <h2 className="text-2xl font-semibold mt-6">Continue in While Loop</h2>
      <p>Move to the next iteration if <code>$x</code> is 4:</p>
      <pre className="bg-gray-200 p-3 rounded mt-2">
{`$x = 0;

while($x < 10) {
  if ($x == 4) {
    $x++;
    continue;
  }
  echo "The number is: $x <br>";
  $x++;
}`}
      </pre>

      {/* Continue in Do While Loop */}
      <h2 className="text-2xl font-semibold mt-6">Continue in Do...While Loop</h2>
      <p>Stop and jump to the next iteration if <code>$i</code> is 3:</p>
      <pre className="bg-gray-200 p-3 rounded mt-2">
{`$i = 0;

do {
  $i++;
  if ($i == 3) continue;
  echo $i;
} while ($i < 6);`}
      </pre>

      {/* Continue in Foreach Loop */}
      <h2 className="text-2xl font-semibold mt-6">Continue in Foreach Loop</h2>
      <p>Stop and jump to the next iteration if <code>$x</code> is "blue":</p>
      <pre className="bg-gray-200 p-3 rounded mt-2">
{`$colors = array("red", "green", "blue", "yellow");

foreach ($colors as $x) {
  if ($x == "blue") continue;
  echo "$x <br>";
}`}
      </pre>
    </div>
  );
};

export default PhpContinueStatement;
