import React from "react";

const PhpArrays: React.FC = () => {
  return (
    <div style={{ padding: "20px", lineHeight: "1.7" }}>
      <h1>PHP Create Arrays</h1>

      <h2>Create Array</h2>
      <p>You can create arrays by using the array() function:</p>
      <pre>
{`$cars = array("Volvo", "BMW", "Toyota");`}
      </pre>

      <p>You can also use a shorter syntax using [] brackets:</p>
      <pre>
{`$cars = ["Volvo", "BMW", "Toyota"];`}
      </pre>

      <h2>Multiple Lines</h2>
      <p>
        Line breaks are not important, so an array declaration can span multiple
        lines:
      </p>
      <pre>
{`$cars = [
  "Volvo",
  "BMW",
  "Toyota"
];`}
      </pre>

      <h2>Trailing Comma</h2>
      <p>A comma after the last item is allowed:</p>
      <pre>
{`$cars = [
  "Volvo",
  "BMW",
  "Toyota",
];`}
      </pre>

      <h2>Array Keys</h2>
      <p>
        When creating indexed arrays the keys are given automatically, starting
        at 0:
      </p>
      <pre>
{`$cars = [
  0 => "Volvo",
  1 => "BMW",
  2 => "Toyota"
];`}
      </pre>

      <p>Associative arrays use named keys instead of numbers:</p>
      <pre>
{`$myCar = [
  "brand" => "Ford",
  "model" => "Mustang",
  "year" => 1964
];`}
      </pre>

      <h2>Declare Empty Array</h2>
      <p>You can declare an empty array first, then add items later:</p>
      <pre>
{`$cars = [];
$cars[0] = "Volvo";
$cars[1] = "BMW";
$cars[2] = "Toyota";`}
      </pre>

      <p>Same for associative arrays:</p>
      <pre>
{`$myCar = [];
$myCar["brand"] = "Ford";
$myCar["model"] = "Mustang";
$myCar["year"] = 1964;`}
      </pre>

      <h2>Mixing Array Keys</h2>
      <p>You can mix both indexed and named keys:</p>
      <pre>
{`$myArr = [];
$myArr[0] = "apples";
$myArr[1] = "bananas";
$myArr["fruit"] = "cherries";`}
      </pre>
    </div>
  );
};

export default PhpArrays;
