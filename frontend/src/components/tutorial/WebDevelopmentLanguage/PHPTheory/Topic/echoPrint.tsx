import React from "react";

const PHPOutputTutorial: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">PHP echo and print Statements</h1>

      <p>
        With PHP, there are two basic ways to output data to the screen:{" "}
        <strong>echo</strong> and <strong>print</strong>.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Differences</h2>
      <ul className="list-disc ml-6">
        <li>echo has no return value</li>
        <li>print returns 1, so it can be used in expressions</li>
        <li>echo can take multiple parameters</li>
        <li>echo is slightly faster than print</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">The PHP echo Statement</h2>
      <p>echo can be used with or without parentheses:</p>

      <pre className="bg-gray-200 p-3 rounded mt-2">
{`echo "Hello";
// same as:
echo("Hello");`}
      </pre>

      <h3 className="text-xl font-semibold mt-4">Display Text</h3>
      <pre className="bg-gray-200 p-3 rounded mt-2">
{`echo "<h2>PHP is Fun!</h2>";
echo "Hello world!<br>";
echo "I'm about to learn PHP!<br>";
echo "This ", "string ", "was ", "made ", "with multiple parameters.";`}
      </pre>

      <h3 className="text-xl font-semibold mt-4">Display Variables</h3>
      <pre className="bg-gray-200 p-3 rounded mt-2">
{`$txt1 = "Learn PHP";
$txt2 = "W3Schools.com";

echo "<h2>$txt1</h2>";
echo "<p>Study PHP at $txt2</p>";`}
      </pre>

      <h3 className="text-xl font-semibold mt-4">Using Single Quotes</h3>
      <pre className="bg-gray-200 p-3 rounded mt-2">
{`$txt1 = "Learn PHP";
$txt2 = "W3Schools.com";

echo '<h2>' . $txt1 . '</h2>';
echo '<p>Study PHP at ' . $txt2 . '</p>';`}
      </pre>

      <h2 className="text-2xl font-semibold mt-6">The PHP print Statement</h2>
      <pre className="bg-gray-200 p-3 rounded mt-2">
{`print "Hello";
// same as:
print("Hello");`}
      </pre>

      <h3 className="text-xl font-semibold mt-4">Display Text</h3>
      <pre className="bg-gray-200 p-3 rounded mt-2">
{`print "<h2>PHP is Fun!</h2>";
print "Hello world!<br>";
print "I'm about to learn PHP!";`}
      </pre>

      <h3 className="text-xl font-semibold mt-4">Display Variables</h3>
      <pre className="bg-gray-200 p-3 rounded mt-2">
{`$txt1 = "Learn PHP";
$txt2 = "W3Schools.com";

print "<h2>$txt1</h2>";
print "<p>Study PHP at $txt2</p>";`}
      </pre>

      <h3 className="text-xl font-semibold mt-4">Using Single Quotes</h3>
      <pre className="bg-gray-200 p-3 rounded mt-2">
{`$txt1 = "Learn PHP";
$txt2 = "W3Schools.com";

print '<h2>' . $txt1 . '</h2>';
print '<p>Study PHP at ' . $txt2 . '</p>';`}
      </pre>

    </div>
  );
};

export default PHPOutputTutorial;
