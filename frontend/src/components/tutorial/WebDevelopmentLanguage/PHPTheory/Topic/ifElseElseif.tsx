import React from "react";

const PHPIfStatements: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">PHP if Statements</h1>

      <p>
        Conditional statements are used to perform different actions based on
        different conditions.
      </p>

      <h2 className="text-2xl font-semibold mt-6">PHP Conditional Statements</h2>

      <p>In PHP, we have the following conditional statements:</p>

      <ul className="list-disc ml-6 mt-2">
        <li>
          <strong>if statement</strong> - executes some code if one condition is
          true
        </li>
        <li>
          <strong>if...else statement</strong> - executes some code if a
          condition is true and another code if that condition is false
        </li>
        <li>
          <strong>if...elseif...else statement</strong> - executes different
          code for more than two conditions
        </li>
        <li>
          <strong>switch statement</strong> - selects one of many blocks of code
          to be executed
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">PHP - The if Statement</h2>
      <p>
        The <strong>if statement</strong> executes some code if one condition is
        true.
      </p>

      <h3 className="text-xl font-semibold mt-4">Syntax</h3>

      <pre className="bg-gray-200 p-3 rounded mt-2">
{`if (condition) {
  // code to be executed if condition is true;
}`}
      </pre>

      <h3 className="text-xl font-semibold mt-4">Example</h3>
      <p>Output "Have a good day!" if 5 is larger than 3:</p>

      <pre className="bg-gray-200 p-3 rounded mt-2">
{`if (5 > 3) {
  echo "Have a good day!";
}`}
      </pre>

      <h3 className="text-xl font-semibold mt-4">Example with Variables</h3>
      <p>Output "Have a good day!" if $t is less than 20:</p>

      <pre className="bg-gray-200 p-3 rounded mt-2">
{`$t = 14;

if ($t < 20) {
  echo "Have a good day!";
}`}
      </pre>
    </div>
  );
};

export default PHPIfStatements;
