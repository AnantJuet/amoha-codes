import React from "react";

const PHPFilters: React.FC = () => {
  return (
    <div className="p-6 leading-7">
      <h1 className="text-3xl font-bold mb-4">PHP Filters</h1>

      <h2 className="text-2xl font-semibold mt-6">What Are PHP Filters?</h2>
      <p>
        <strong>Validating data:</strong> Determine if the data is in proper form. <br />
        <strong>Sanitizing data:</strong> Remove any illegal characters from the data.
      </p>
      <p>
        PHP filters make it easy to validate and sanitize external input like user input, cookies, server variables, database results, or web services data.
      </p>

      <h2 className="text-2xl font-semibold mt-6">List All Filters</h2>
      <pre className="bg-gray-200 p-3 rounded mt-2">
{`<table>
  <tr>
    <td>Filter Name</td>
    <td>Filter ID</td>
  </tr>
  <?php
  foreach (filter_list() as $id => $filter) {
    echo '<tr><td>' . $filter . '</td><td>' . filter_id($filter) . '</td></tr>';
  }
  ?>
</table>`}
      </pre>

      <h2 className="text-2xl font-semibold mt-6">Sanitize a String</h2>
      <pre className="bg-gray-200 p-3 rounded mt-2">
{`<?php
$str = "<h1>Hello World!</h1>";
$newstr = filter_var($str, FILTER_SANITIZE_STRING);
echo $newstr; // Output: Hello World!
?>`}
      </pre>

      <h2 className="text-2xl font-semibold mt-6">Validate an Integer</h2>
      <pre className="bg-gray-200 p-3 rounded mt-2">
{`<?php
$int = 100;

if (!filter_var($int, FILTER_VALIDATE_INT) === false) {
  echo("Integer is valid");
} else {
  echo("Integer is not valid");
}
?>`}
      </pre>

      <p className="mt-2 text-gray-700">
        <strong>Tip:</strong> If $int = 0, the previous check fails. Use this instead:
      </p>
      <pre className="bg-gray-200 p-3 rounded mt-2">
{`<?php
$int = 0;

if (filter_var($int, FILTER_VALIDATE_INT) === 0 || !filter_var($int, FILTER_VALIDATE_INT) === false) {
  echo("Integer is valid");
} else {
  echo("Integer is not valid");
}
?>`}
      </pre>

      <h2 className="text-2xl font-semibold mt-6">Validate an IP Address</h2>
      <pre className="bg-gray-200 p-3 rounded mt-2">
{`<?php
$ip = "127.0.0.1";

if (!filter_var($ip, FILTER_VALIDATE_IP) === false) {
  echo("$ip is a valid IP address");
} else {
  echo("$ip is not a valid IP address");
}
?>`}
      </pre>

      <h2 className="text-2xl font-semibold mt-6">Sanitize & Validate Email</h2>
      <pre className="bg-gray-200 p-3 rounded mt-2">
{`<?php
$email = "john.doe@example.com";

// Sanitize
$email = filter_var($email, FILTER_SANITIZE_EMAIL);

// Validate
if (!filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
  echo("$email is a valid email address");
} else {
  echo("$email is not a valid email address");
}
?>`}
      </pre>

      <h2 className="text-2xl font-semibold mt-6">Sanitize & Validate URL</h2>
      <pre className="bg-gray-200 p-3 rounded mt-2">
{`<?php
$url = "https://www.w3schools.com";

// Sanitize
$url = filter_var($url, FILTER_SANITIZE_URL);

// Validate
if (!filter_var($url, FILTER_VALIDATE_URL) === false) {
  echo("$url is a valid URL");
} else {
  echo("$url is not a valid URL");
}
?>`}
      </pre>
    </div>
  );
};

export default PHPFilters;
