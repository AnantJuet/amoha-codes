import React from "react";

const PhpSwitchStatement: React.FC = () => {
  return (
    <div className="p-4 space-y-6">
      <h1 className="text-3xl font-bold">PHP Switch Statement</h1>

      <p>
        The <strong>PHP switch statement</strong> is used to perform different
        actions based on different conditions.
      </p>

      <h2 className="text-2xl font-semibold">Syntax</h2>
      <pre className="bg-gray-100 p-4 rounded-md overflow-auto">
{`switch (expression) {
  case label1:
    //code block
    break;
  case label2:
    //code block
    break;
  case label3:
    //code block
    break;
  default:
    //code block
}`}
      </pre>

      <p>This is how it works:</p>
      <ul className="list-disc ml-6">
        <li>The expression is evaluated once</li>
        <li>The value is compared with each case</li>
        <li>If matched, its block executes</li>
        <li><code>break</code> stops further checking</li>
        <li><code>default</code> runs if no match</li>
      </ul>

      <h2 className="text-2xl font-semibold">Example</h2>
      <pre className="bg-gray-100 p-4 rounded-md overflow-auto">
{`$favcolor = "red";

switch ($favcolor) {
  case "red":
    echo "Your favorite color is red!";
    break;
  case "blue":
    echo "Your favorite color is blue!";
    break;
  case "green":
    echo "Your favorite color is green!";
    break;
  default:
    echo "Your favorite color is neither red, blue, nor green!";
}`}
      </pre>

      <h2 className="text-2xl font-semibold">The <code>break</code> Keyword</h2>
      <p>
        When PHP reaches a <code>break</code>, the switch block ends. If you
        forget the <code>break</code> in a case, PHP will continue to the next
        case (this is called <strong>fall-through</strong>).
      </p>

      <h3 className="text-xl font-semibold">Example Without Break</h3>
      <pre className="bg-gray-100 p-4 rounded-md overflow-auto">
{`$favcolor = "red";

switch ($favcolor) {
  case "red":
    echo "Your favorite color is red!";
  case "blue":
    echo "Your favorite color is blue!";
    break;
  case "green":
    echo "Your favorite color is green!";
    break;
  default:
    echo "Your favorite color is neither red, blue, nor green!";
}`}
      </pre>

      <h2 className="text-2xl font-semibold">The <code>default</code> Case</h2>
      <p>
        The <code>default</code> block runs when no other case matches. It can
        be placed anywhere (but should be last).
      </p>

      <pre className="bg-gray-100 p-4 rounded-md overflow-auto">
{`$d = 4;

switch ($d) {
  case 6:
    echo "Today is Saturday";
    break;
  case 0:
    echo "Today is Sunday";
    break;
  default:
    echo "Looking forward to the Weekend";
}`}
      </pre>

      <h3 className="text-xl font-semibold">Default Not at the End</h3>
      <pre className="bg-gray-100 p-4 rounded-md overflow-auto">
{`$d = 4;

switch ($d) {
  default:
    echo "Looking forward to the Weekend";
    break;
  case 6:
    echo "Today is Saturday";
    break;
  case 0:
    echo "Today is Sunday";
}`}
      </pre>

      <h2 className="text-2xl font-semibold">Multiple Cases Using Same Code</h2>
      <p>You can use multiple cases for the same output:</p>

      <pre className="bg-gray-100 p-4 rounded-md overflow-auto">
{`$d = 3;

switch ($d) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    echo "The week feels so long!";
    break;
  case 6:
  case 0:
    echo "Weekends are the best!";
    break;
  default:
    echo "Something went wrong";
}`}
      </pre>
    </div>
  );
};

export default PhpSwitchStatement;
