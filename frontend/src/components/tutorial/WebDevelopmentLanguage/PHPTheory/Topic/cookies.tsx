import React from "react";

const PHPCookies: React.FC = () => {
  return (
    <div className="p-6 leading-7">
      <h1 className="text-3xl font-bold mb-4">PHP Cookies</h1>

      <h2 className="text-2xl font-semibold mt-6">What is a Cookie?</h2>
      <p>
        A cookie is a small file that the server embeds on the user's computer. Each time the same computer requests a page, it sends the cookie back. Cookies are often used to identify a user. PHP can create and retrieve cookies.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Create Cookies with PHP</h2>
      <p>Use <code>setcookie()</code> function:</p>
      <pre className="bg-gray-200 p-3 rounded mt-2">
{`setcookie(name, value, expire, path, domain, secure, httponly);`}
      </pre>
      <p>Only the <code>name</code> is required; other parameters are optional.</p>

      <h2 className="text-2xl font-semibold mt-6">Example: Create and Retrieve a Cookie</h2>
      <pre className="bg-gray-200 p-3 rounded mt-2">
{`<?php
$cookie_name = "user";
$cookie_value = "John Doe";
setcookie($cookie_name, $cookie_value, time() + (86400 * 30), "/"); // 86400 = 1 day
?>
<html>
<body>

<?php
if(!isset($_COOKIE[$cookie_name])) {
  echo "Cookie named '" . $cookie_name . "' is not set!";
} else {
  echo "Cookie '" . $cookie_name . "' is set!<br>";
  echo "Value is: " . $_COOKIE[$cookie_name];
}
?>

</body>
</html>`}
      </pre>
      <p className="mt-2">
        <strong>Note:</strong> <code>setcookie()</code> must appear <strong>before</strong> the <code>&lt;html&gt;</code> tag.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Modify a Cookie Value</h2>
      <pre className="bg-gray-200 p-3 rounded mt-2">
{`<?php
$cookie_name = "user";
$cookie_value = "Alex Porter";
setcookie($cookie_name, $cookie_value, time() + (86400 * 30), "/");
?>`}
      </pre>

      <h2 className="text-2xl font-semibold mt-6">Delete a Cookie</h2>
      <pre className="bg-gray-200 p-3 rounded mt-2">
{`<?php
// Set expiration date to one hour ago
setcookie("user", "", time() - 3600);
?>
<html>
<body>
<?php
echo "Cookie 'user' is deleted.";
?>
</body>
</html>`}
      </pre>

      <h2 className="text-2xl font-semibold mt-6">Check if Cookies are Enabled</h2>
      <pre className="bg-gray-200 p-3 rounded mt-2">
{`<?php
setcookie("test_cookie", "test", time() + 3600, '/');
?>
<html>
<body>
<?php
if(count($_COOKIE) > 0) {
  echo "Cookies are enabled.";
} else {
  echo "Cookies are disabled.";
}
?>
</body>
</html>`}
      </pre>
    </div>
  );
};

export default PHPCookies;
