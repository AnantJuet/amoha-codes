// import React from "react";

// const PHPFiltersAdvanced: React.FC = () => {
//   return (
//     <div className="p-6 leading-7">
//       <h1 className="text-3xl font-bold mb-4">PHP Filters - Advanced</h1>

//       <h2 className="text-2xl font-semibold mt-6">Validate an Integer Within a Range</h2>
//       <p>
//         Use <code>filter_var()</code> to check if a variable is an integer and falls within a specified range:
//       </p>
//       <pre className="bg-gray-200 p-3 rounded mt-2">
// {`<?php
// $int = 122;
// $min = 1;
// $max = 200;

// if (filter_var($int, FILTER_VALIDATE_INT, array("options" => array("min_range"=>$min, "max_range"=>$max))) === false) {
//   echo("Variable value is not within the legal range");
// } else {
//   echo("Variable value is within the legal range");
// }
// ?>`}
//       </pre>

//       <h2 className="text-2xl font-semibold mt-6">Validate IPv6 Address</h2>
//       <p>
//         Check if a variable is a valid IPv6 address:
//       </p>
//       <pre className="bg-gray-200 p-3 rounded mt-2">
// {`<?php
// $ip = "2001:0db8:85a3:08d3:1319:8a2e:0370:7334";

// if (!filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_IPV6) === false) {
//   echo("$ip is a valid IPv6 address");
// } else {
//   echo("$ip is not a valid IPv6 address");
// }
// ?>`}
//       </pre>

//       <h2 className="text-2xl font-semibold mt-6">Validate URL - Must Contain Query String</h2>
//       <p>
//         Ensure a URL contains a query string:
//       </p>
//       <pre className="bg-gray-200 p-3 rounded mt-2">
// {`<?php
// $url = "https://www.w3schools.com";

// if (!filter_var($url, FILTER_VALIDATE_URL, FILTER_FLAG_QUERY_REQUIRED) === false) {
//   echo("$url is a valid URL with a query string");
// } else {
//   echo("$url is not a valid URL with a query string");
// }
// ?>`}
//       </pre>

//       <h2 className="text-2xl font-semibold mt-6">Remove Characters With ASCII Value &gt; 127</h2>
//       <p>
//         Sanitize a string by removing HTML tags and characters with ASCII value is greater 127:
//       </p>
//       <pre className="bg-gray-200 p-3 rounded mt-2">
// {`<?php
// $str = "<h1>Hello WorldÆØÅ!</h1>";

// $newstr = filter_var($str, FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_HIGH);
// echo $newstr; // Output: Hello World!
// ?>`}
//       </pre>
//     </div>
//   );
// };

// export default PHPFiltersAdvanced;

import React from "react";

const PHPFiltersAdvanced: React.FC = () => {
  return (
    <div className="p-6 leading-7">
      <h1 className="text-3xl font-bold mb-4">PHP Filters - Advanced</h1>

      <h2 className="text-2xl font-semibold mt-6">Validate an Integer Within a Range</h2>
      <p>
        Use <code>filter_var()</code> to check if a variable is an integer and falls within a specified range:
      </p>
      <pre className="bg-gray-200 p-3 rounded mt-2">
{String.raw`<?php
$int = 122;
$min = 1;
$max = 200;

if (filter_var($int, FILTER_VALIDATE_INT, array("options" => array("min_range"=>$min, "max_range"=>$max))) === false) {
  echo("Variable value is not within the legal range");
} else {
  echo("Variable value is within the legal range");
}
?>`}
      </pre>

      <h2 className="text-2xl font-semibold mt-6">Validate IPv6 Address</h2>
      <p>
        Check if a variable is a valid IPv6 address:
      </p>
      <pre className="bg-gray-200 p-3 rounded mt-2">
{String.raw`<?php
$ip = "2001:0db8:85a3:08d3:1319:8a2e:0370:7334";

if (!filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_IPV6) === false) {
  echo("$ip is a valid IPv6 address");
} else {
  echo("$ip is not a valid IPv6 address");
}
?>`}
      </pre>

      <h2 className="text-2xl font-semibold mt-6">Validate URL - Must Contain Query String</h2>
      <p>
        Ensure a URL contains a query string:
      </p>
      <pre className="bg-gray-200 p-3 rounded mt-2">
{String.raw`<?php
$url = "https://www.w3schools.com";

if (!filter_var($url, FILTER_VALIDATE_URL, FILTER_FLAG_QUERY_REQUIRED) === false) {
  echo("$url is a valid URL with a query string");
} else {
  echo("$url is not a valid URL with a query string");
}
?>`}
      </pre>

      <h2 className="text-2xl font-semibold mt-6">Remove Characters With ASCII Value &gt; 127</h2>
      <p>
        Sanitize a string by removing HTML tags and characters with ASCII value greater than 127:
      </p>
      <pre className="bg-gray-200 p-3 rounded mt-2">
{String.raw`<?php
$str = "<h1>Hello WorldÆØÅ!</h1>";

$newstr = filter_var($str, FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_HIGH);
echo $newstr; // Output: Hello World!
?>`}
      </pre>
    </div>
  );
};

export default PHPFiltersAdvanced;


