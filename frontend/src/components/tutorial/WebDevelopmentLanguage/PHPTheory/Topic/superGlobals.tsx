import React from "react";

const PhpSuperglobals: React.FC = () => {
  return (
    <div className="p-4 space-y-6">
      <h1 className="text-3xl font-bold">PHP Global Variables - Superglobals</h1>

      <p>
        PHP <strong>superglobals</strong> were introduced in PHP 4.1.0. These are
        special built-in variables that are available in all scopes — meaning
        they can be accessed from any function, class, or file without needing
        <code>global</code> or any special declaration.
      </p>

      <h2 className="text-2xl font-semibold">What Are Superglobals?</h2>
      <p>
        Superglobals are predefined variables in PHP that are automatically
        available everywhere in your script. They help you access request data,
        server info, session data, environment variables, file uploads, and
        more.
      </p>

      <h3 className="text-xl font-semibold">List of PHP Superglobal Variables</h3>

      <ul className="list-disc ml-6 space-y-1">
        <li><strong>$GLOBALS</strong></li>
        <li><strong>$_SERVER</strong></li>
        <li><strong>$_REQUEST</strong></li>
        <li><strong>$_POST</strong></li>
        <li><strong>$_GET</strong></li>
        <li><strong>$_FILES</strong></li>
        <li><strong>$_ENV</strong></li>
        <li><strong>$_COOKIE</strong></li>
        <li><strong>$_SESSION</strong></li>
      </ul>

      <p>
        Some superglobals will be explained in the next chapters, while others
        will be covered later in the PHP tutorial series.
      </p>

      <h2 className="text-2xl font-semibold">Why Are They Important?</h2>
      <ul className="list-disc ml-6 space-y-1">
        <li>Accessible everywhere (no need for <code>global</code> keyword).</li>
        <li>Used for handling forms, sessions, cookies, and server info.</li>
        <li>Help in building dynamic, interactive web applications.</li>
      </ul>

      <h2 className="text-2xl font-semibold">Example: Using $GLOBALS</h2>

      <pre className="bg-gray-100 p-4 rounded-md overflow-auto">
{`$x = 10;
$y = 20;

function addNumbers() {
  $GLOBALS['z'] = $GLOBALS['x'] + $GLOBALS['y'];
}

addNumbers();
echo $z;  // Output: 30`}
      </pre>

      <p>
        This example shows how <strong>$GLOBALS</strong> allows accessing and modifying variables inside a function.
      </p>
    </div>
  );
};

export default PhpSuperglobals;
