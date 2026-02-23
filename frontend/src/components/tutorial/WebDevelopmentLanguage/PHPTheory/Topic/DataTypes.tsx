import React from "react";

const PhpDataTypes: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">PHP Data Types</h1>

      <p>
        Variables in PHP can store different types of data, and each data type
        behaves differently. PHP supports several data types.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Supported Data Types</h2>
      <ul className="list-disc ml-8">
        <li>String</li>
        <li>Integer</li>
        <li>Float</li>
        <li>Boolean</li>
        <li>Array</li>
        <li>Object</li>
        <li>NULL</li>
        <li>Resource</li>
      </ul>

      {/* var_dump Example */}
      <h2 className="text-2xl font-semibold mt-6 mb-2">Get the Data Type</h2>
      <p>The var_dump() function returns the data type and value:</p>

      <pre className="bg-gray-100 p-3 rounded whitespace-pre-wrap">
{`<?php
$x = 5;
var_dump($x);
?>`}
      </pre>

      {/* STRING */}
      <h2 className="text-2xl font-semibold mt-6 mb-2">PHP String</h2>
      <p>A string is a sequence of characters inside quotes.</p>

      <pre className="bg-gray-100 p-3 rounded whitespace-pre-wrap">
{`<?php
$x = "Hello world!";
$y = 'Hello world!';

var_dump($x);
var_dump($y);
?>`}
      </pre>

      {/* INTEGER */}
      <h2 className="text-2xl font-semibold mt-6 mb-2">PHP Integer</h2>
      <p>Integer is a whole number without decimal.</p>

      <pre className="bg-gray-100 p-3 rounded whitespace-pre-wrap">
{`<?php
$x = 5985;
var_dump($x);
?>`}
      </pre>

      {/* FLOAT */}
      <h2 className="text-2xl font-semibold mt-6 mb-2">PHP Float</h2>
      <p>A float is a number with a decimal.</p>

      <pre className="bg-gray-100 p-3 rounded whitespace-pre-wrap">
{`<?php
$x = 10.365;
var_dump($x);
?>`}
      </pre>

      {/* BOOLEAN */}
      <h2 className="text-2xl font-semibold mt-6 mb-2">PHP Boolean</h2>
      <p>Boolean stores TRUE or FALSE.</p>

      <pre className="bg-gray-100 p-3 rounded whitespace-pre-wrap">
{`<?php
$x = true;
var_dump($x);
?>`}
      </pre>

      {/* ARRAY */}
      <h2 className="text-2xl font-semibold mt-6 mb-2">PHP Array</h2>
      <p>An array stores multiple values in one variable.</p>

      <pre className="bg-gray-100 p-3 rounded whitespace-pre-wrap">
{`<?php
$cars = array("Volvo", "BMW", "Toyota");
var_dump($cars);
?>`}
      </pre>

      {/* OBJECT */}
      <h2 className="text-2xl font-semibold mt-6 mb-2">PHP Object</h2>
      <p>Objects are instances of classes.</p>

      <pre className="bg-gray-100 p-3 rounded whitespace-pre-wrap">
{`<?php
class Car {
  public $color;
  public $model;

  public function __construct($color, $model) {
    $this->color = $color;
    $this->model = $model;
  }

  public function message() {
    return "My car is a " . $this->color . " " . $this->model . "!";
  }
}

$myCar = new Car("red", "Volvo");
var_dump($myCar);
?>`}
      </pre>

      {/* NULL */}
      <h2 className="text-2xl font-semibold mt-6 mb-2">PHP NULL</h2>
      <p>NULL represents a variable with no value.</p>

      <pre className="bg-gray-100 p-3 rounded whitespace-pre-wrap">
{`<?php
$x = "Hello world!";
$x = null;
var_dump($x);
?>`}
      </pre>

      {/* TYPE CHANGE */}
      <h2 className="text-2xl font-semibold mt-6 mb-2">Change Data Type Automatically</h2>
      <p>PHP changes variable type automatically based on value.</p>

      <pre className="bg-gray-100 p-3 rounded whitespace-pre-wrap">
{`<?php
$x = 5;
var_dump($x);

$x = "Hello";
var_dump($x);
?>`}
      </pre>

      {/* CASTING */}
      <h2 className="text-2xl font-semibold mt-6 mb-2">Casting Data Types</h2>
      <p>You can manually convert a variable type using casting.</p>

      <pre className="bg-gray-100 p-3 rounded whitespace-pre-wrap">
{`<?php
$x = 5;
$x = (string) $x;
var_dump($x);
?>`}
      </pre>
    </div>
  );
};

export default PhpDataTypes;
