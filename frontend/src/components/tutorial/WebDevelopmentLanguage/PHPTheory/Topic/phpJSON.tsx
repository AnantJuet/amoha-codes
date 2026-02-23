import React from "react";

const PHPJSON: React.FC = () => {
  return (
    <div className="p-6 leading-7">
      <h1 className="text-3xl font-bold mb-4">PHP and JSON</h1>

      <h2 className="text-2xl font-semibold mt-6">What is JSON?</h2>
      <p>
        JSON (JavaScript Object Notation) is a text-based format for storing and exchanging data. It can be sent to/from a server and used by any programming language.
      </p>

      <h2 className="text-2xl font-semibold mt-6">PHP Functions for JSON</h2>
      <ul className="list-disc pl-5 mt-2">
        <li><code>json_encode()</code> - Encodes a value to JSON format</li>
        <li><code>json_decode()</code> - Decodes JSON data into a PHP object or associative array</li>
      </ul>

      <h3 className="text-xl font-semibold mt-4">json_encode() Examples</h3>
      <p>Encode an associative array:</p>
      <pre className="bg-gray-200 p-3 rounded mt-2">
{`<?php
$age = array("Peter"=>35, "Ben"=>37, "Joe"=>43);
echo json_encode($age);
?>`}
      </pre>

      <p>Encode an indexed array:</p>
      <pre className="bg-gray-200 p-3 rounded mt-2">
{`<?php
$cars = array("Volvo", "BMW", "Toyota");
echo json_encode($cars);
?>`}
      </pre>

      <h3 className="text-xl font-semibold mt-4">json_decode() Examples</h3>
      <p>Decode JSON into a PHP object:</p>
      <pre className="bg-gray-200 p-3 rounded mt-2">
{`<?php
$jsonobj = '{"Peter":35,"Ben":37,"Joe":43}';
var_dump(json_decode($jsonobj));
?>`}
      </pre>

      <p>Decode JSON into an associative array:</p>
      <pre className="bg-gray-200 p-3 rounded mt-2">
{`<?php
$jsonobj = '{"Peter":35,"Ben":37,"Joe":43}';
var_dump(json_decode($jsonobj, true));
?>`}
      </pre>

      <h3 className="text-xl font-semibold mt-4">Accessing Decoded Values</h3>
      <p>From a PHP object:</p>
      <pre className="bg-gray-200 p-3 rounded mt-2">
{`<?php
$obj = json_decode('{"Peter":35,"Ben":37,"Joe":43}');
echo $obj->Peter;
echo $obj->Ben;
echo $obj->Joe;
?>`}
      </pre>

      <p>From a PHP associative array:</p>
      <pre className="bg-gray-200 p-3 rounded mt-2">
{`<?php
$arr = json_decode('{"Peter":35,"Ben":37,"Joe":43}', true);
echo $arr["Peter"];
echo $arr["Ben"];
echo $arr["Joe"];
?>`}
      </pre>

      <h3 className="text-xl font-semibold mt-4">Looping Through Values</h3>
      <p>Loop through a PHP object:</p>
      <pre className="bg-gray-200 p-3 rounded mt-2">
{`<?php
$obj = json_decode('{"Peter":35,"Ben":37,"Joe":43}');
foreach($obj as $key => $value) {
  echo $key . " => " . $value . "<br>";
}
?>`}
      </pre>

      <p>Loop through a PHP associative array:</p>
      <pre className="bg-gray-200 p-3 rounded mt-2">
{`<?php
$arr = json_decode('{"Peter":35,"Ben":37,"Joe":43}', true);
foreach($arr as $key => $value) {
  echo $key . " => " . $value . "<br>";
}
?>`}
      </pre>
    </div>
  );
};

export default PHPJSON;
