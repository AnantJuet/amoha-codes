import React from "react";

const PHPCallbacks: React.FC = () => {
  return (
    <div className="p-6 leading-7">
      <h1 className="text-3xl font-bold mb-4">PHP Callback Functions</h1>

      <h2 className="text-2xl font-semibold mt-6">What is a Callback Function?</h2>
      <p>
        A callback function is a function passed as an argument into another function. It can be an existing function or an anonymous function.
      </p>

      <h3 className="text-xl font-semibold mt-4">Example: Using a Callback with <code>array_map()</code></h3>
      <pre className="bg-gray-200 p-3 rounded mt-2">
{`<?php
function my_callback($item) {
  return strlen($item);
}

$strings = ["apple", "orange", "banana", "coconut"];
$lengths = array_map("my_callback", $strings);
print_r($lengths);
?>`}
      </pre>

      <h3 className="text-xl font-semibold mt-4">Example: Anonymous Function as Callback</h3>
      <pre className="bg-gray-200 p-3 rounded mt-2">
{`<?php
$strings = ["apple", "orange", "banana", "coconut"];
$lengths = array_map(function($item) { return strlen($item); }, $strings);
print_r($lengths);
?>`}
      </pre>

      <h2 className="text-2xl font-semibold mt-6">Callbacks in User-Defined Functions</h2>
      <p>
        User-defined functions can also take callbacks as arguments. You call the callback by using parentheses and passing arguments as usual.
      </p>

      <h3 className="text-xl font-semibold mt-4">Example: Callback in a User-Defined Function</h3>
      <pre className="bg-gray-200 p-3 rounded mt-2">
{`<?php
function exclaim($str) {
  return $str . "! ";
}

function ask($str) {
  return $str . "? ";
}

function printFormatted($str, $format) {
  // Calling the $format callback function
  echo $format($str);
}

// Pass "exclaim" and "ask" as callback functions
printFormatted("Hello world", "exclaim");
printFormatted("Hello world", "ask");
?>`}
      </pre>
    </div>
  );
};

export default PHPCallbacks;
