import React from "react";

const PhpGlobals: React.FC = () => {
  return (
    <div className="p-5 text-white">
      <h1 className="text-3xl font-bold mb-4">PHP - $GLOBALS</h1>

      <p className="mb-4">
        <code>$GLOBALS</code> is an array that contains all global variables in PHP.
      </p>

      <h2 className="text-2xl font-semibold mb-3">Global Variables</h2>

      <p className="mb-4">
        Global variables can be accessed from any scope. Variables defined in the
        outermost scope are automatically global.
      </p>

      <p className="mb-4">
        To use a global variable inside a function, you must use either:
      </p>

      <ul className="list-disc ml-6 mb-4">
        <li><code>$GLOBALS</code> array</li>
        <li><code>global</code> keyword</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">
        Access Global Variable Using $GLOBALS
      </h3>

      <div className="bg-gray-900 p-4 rounded mb-4">
        <pre>
{`$x = 75;

function myfunction() {
  echo $GLOBALS['x'];
}

myfunction();`}
        </pre>
      </div>

      <h3 className="text-xl font-semibold mb-2">
        Accessing Without $GLOBALS (Gives Nothing / Error)
      </h3>

      <div className="bg-gray-900 p-4 rounded mb-4">
        <pre>
{`$x = 75;

function myfunction() {
  echo $x; // Not accessible inside function
}

myfunction();`}
        </pre>
      </div>

      <h3 className="text-xl font-semibold mb-2">
        Access Global Variable Using global Keyword
      </h3>

      <div className="bg-gray-900 p-4 rounded mb-4">
        <pre>
{`$x = 75;

function myfunction() {
  global $x;
  echo $x;
}

myfunction();`}
        </pre>
      </div>

      <h2 className="text-2xl font-semibold mb-3">Create Global Variables</h2>

      <p className="mb-4">
        Variables created in the outermost scope are automatically global:
      </p>

      <div className="bg-gray-900 p-4 rounded mb-4">
        <pre>
{`$x = 100;

echo $GLOBALS["x"];
echo $x;`}
        </pre>
      </div>

      <h3 className="text-xl font-semibold mb-2">
        Create Global Variable From Inside a Function
      </h3>

      <p className="mb-4">
        You can create global variables inside a function using <code>$GLOBALS</code>.
      </p>

      <div className="bg-gray-900 p-4 rounded mb-6">
        <pre>
{`function myfunction() {
  $GLOBALS["x"] = 100;
}

myfunction();

echo $GLOBALS["x"];
echo $x;`}
        </pre>
      </div>
    </div>
  );
};

export default PhpGlobals;
