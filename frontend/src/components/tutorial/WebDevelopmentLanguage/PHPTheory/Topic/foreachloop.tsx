import React from "react";

const PhpForeachLoop: React.FC = () => {
  return (
    <div className="p-6 leading-7">
      <h1 className="text-3xl font-bold mb-4">PHP foreach Loop</h1>

      <p>
        The PHP <b>foreach</b> loop executes a block of code for each element in an array or each property in an object.
      </p>

      {/* Foreach on Arrays */}
      <h2 className="text-2xl font-semibold mt-6">Foreach on Arrays</h2>
      <p>Loop through an indexed array:</p>
      <pre className="bg-gray-200 p-3 rounded mt-2">
{`$colors = array("red", "green", "blue", "yellow");

foreach ($colors as $x) {
  echo "$x <br>";
}`}
      </pre>

      <p>Loop through an associative array and get both keys and values:</p>
      <pre className="bg-gray-200 p-3 rounded mt-2">
{`$members = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");

foreach ($members as $x => $y) {
  echo "$x : $y <br>";
}`}
      </pre>

      {/* Foreach on Objects */}
      <h2 className="text-2xl font-semibold mt-6">Foreach on Objects</h2>
      <p>Loop through object properties:</p>
      <pre className="bg-gray-200 p-3 rounded mt-2">
{`class Car {
  public $color;
  public $model;
  public function __construct($color, $model) {
    $this->color = $color;
    $this->model = $model;
  }
}

$myCar = new Car("red", "Volvo");

foreach ($myCar as $x => $y) {
  echo "$x: $y <br>";
}`}
      </pre>

      {/* Break */}
      <h2 className="text-2xl font-semibold mt-6">Using break</h2>
      <p>Stop the loop when $x is "blue":</p>
      <pre className="bg-gray-200 p-3 rounded mt-2">
{`$colors = array("red", "green", "blue", "yellow");

foreach ($colors as $x) {
  if ($x == "blue") break;
  echo "$x <br>";
}`}
      </pre>

      {/* Continue */}
      <h2 className="text-2xl font-semibold mt-6">Using continue</h2>
      <p>Skip iteration when $x is "blue":</p>
      <pre className="bg-gray-200 p-3 rounded mt-2">
{`$colors = array("red", "green", "blue", "yellow");

foreach ($colors as $x) {
  if ($x == "blue") continue;
  echo "$x <br>";
}`}
      </pre>

      {/* By Reference */}
      <h2 className="text-2xl font-semibold mt-6">Foreach By Reference</h2>
      <p>Changes to array items by default do NOT affect the original array:</p>
      <pre className="bg-gray-200 p-3 rounded mt-2">
{`$colors = array("red", "green", "blue", "yellow");

foreach ($colors as $x) {
  if ($x == "blue") $x = "pink";
}

var_dump($colors);`}
      </pre>

      <p>Use <code>&</code> to modify the original array:</p>
      <pre className="bg-gray-200 p-3 rounded mt-2">
{`$colors = array("red", "green", "blue", "yellow");

foreach ($colors as &$x) {
  if ($x == "blue") $x = "pink";
}

var_dump($colors);`}
      </pre>

      {/* Alternative Syntax */}
      <h2 className="text-2xl font-semibold mt-6">Alternative Syntax</h2>
      <p>Foreach can also use <code>endforeach</code>:</p>
      <pre className="bg-gray-200 p-3 rounded mt-2">
{`$colors = array("red", "green", "blue", "yellow");

foreach ($colors as $x) :
  echo "$x <br>";
endforeach;`}
      </pre>
    </div>
  );
};

export default PhpForeachLoop;
