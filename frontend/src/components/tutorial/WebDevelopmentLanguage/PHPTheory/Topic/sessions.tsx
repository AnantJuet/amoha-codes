import React from "react";

const PHPSessions: React.FC = () => {
  return (
    <div className="p-6 leading-7">
      <h1 className="text-3xl font-bold mb-4">PHP Sessions</h1>

      <h2 className="text-2xl font-semibold mt-6">What is a PHP Session?</h2>
      <p>
        A session stores information (in variables) to be used across multiple pages. Unlike cookies, session data is stored on the server, not on the user's computer.
      </p>
      <p>
        Session variables hold information about a single user and are available to all pages in an application. By default, session variables last until the user closes the browser.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Start a PHP Session</h2>
      <p>Use <code>session_start()</code> and store variables in <code>$_SESSION</code>:</p>
      <pre className="bg-gray-200 p-3 rounded mt-2">
{`<?php
// Start the session
session_start();
?>
<!DOCTYPE html>
<html>
<body>

<?php
// Set session variables
$_SESSION["favcolor"] = "green";
$_SESSION["favanimal"] = "cat";
echo "Session variables are set.";
?>

</body>
</html>`}
      </pre>
      <p className="mt-2">
        <strong>Note:</strong> <code>session_start()</code> must be the very first thing in your document.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Get PHP Session Variable Values</h2>
      <pre className="bg-gray-200 p-3 rounded mt-2">
{`<?php
session_start();
?>
<!DOCTYPE html>
<html>
<body>

<?php
// Access session variables set on previous page
echo "Favorite color is " . $_SESSION["favcolor"] . ".<br>";
echo "Favorite animal is " . $_SESSION["favanimal"] . ".";
?>

</body>
</html>`}
      </pre>

      <h2 className="text-2xl font-semibold mt-6">Show All Session Variables</h2>
      <pre className="bg-gray-200 p-3 rounded mt-2">
{`<?php
session_start();
?>
<!DOCTYPE html>
<html>
<body>

<?php
print_r($_SESSION);
?>

</body>
</html>`}
      </pre>

      <h2 className="text-2xl font-semibold mt-6">Modify a PHP Session Variable</h2>
      <pre className="bg-gray-200 p-3 rounded mt-2">
{`<?php
session_start();
?>
<!DOCTYPE html>
<html>
<body>

<?php
// Change a session variable
$_SESSION["favcolor"] = "yellow";
print_r($_SESSION);
?>

</body>
</html>`}
      </pre>

      <h2 className="text-2xl font-semibold mt-6">Destroy a PHP Session</h2>
      <pre className="bg-gray-200 p-3 rounded mt-2">
{`<?php
session_start();
?>
<!DOCTYPE html>
<html>
<body>

<?php
// Remove all session variables
session_unset();

// Destroy the session
session_destroy();
?>

</body>
</html>`}
      </pre>

      <h2 className="text-2xl font-semibold mt-6">How It Works</h2>
      <p>
        Most sessions set a user-key (like <code>765487cf34ert8dede5a562e4f3a7e12</code>) on the user's computer. When a new page is opened, the server checks for this key and loads the session data if found, or starts a new session otherwise.
      </p>
    </div>
  );
};

export default PHPSessions;
