import React from "react";

const PHPExceptions: React.FC = () => {
  return (
    <div className="p-6 leading-7">
      <h1 className="text-3xl font-bold mb-4">PHP Exceptions</h1>

      <h2 className="text-2xl font-semibold mt-6">What is an Exception?</h2>
      <p>
        An exception is an object that describes an error or unexpected behavior in a PHP script. Exceptions can be thrown by PHP functions, classes, or user-defined functions to stop execution when something goes wrong.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Throwing an Exception</h2>
      <p>If an exception is not caught, a fatal error occurs:</p>
      <pre className="bg-gray-200 p-3 rounded mt-2">
{`<?php
function divide($dividend, $divisor) {
  if($divisor == 0) {
    throw new Exception("Division by zero");
  }
  return $dividend / $divisor;
}

echo divide(5, 0);
?>`}
      </pre>

      <h2 className="text-2xl font-semibold mt-6">Using try...catch</h2>
      <p>Catch exceptions and handle them gracefully:</p>
      <pre className="bg-gray-200 p-3 rounded mt-2">
{`<?php
try {
  echo divide(5, 0);
} catch(Exception $e) {
  echo "Unable to divide.";
}
?>`}
      </pre>

      <h2 className="text-2xl font-semibold mt-6">Using try...catch...finally</h2>
      <p>The finally block always runs regardless of whether an exception was caught:</p>
      <pre className="bg-gray-200 p-3 rounded mt-2">
{`<?php
try {
  echo divide(5, 0);
} catch(Exception $e) {
  echo "Unable to divide. ";
} finally {
  echo "Process complete.";
}
?>`}
      </pre>

      <p>You can also use <code>finally</code> without a <code>catch</code> block:</p>
      <pre className="bg-gray-200 p-3 rounded mt-2">
{`<?php
try {
  echo divide(5, 0);
} finally {
  echo "Process complete.";
}
?>`}
      </pre>

      <h2 className="text-2xl font-semibold mt-6">The Exception Object</h2>
      <p>Exceptions store information about the error. Example methods:</p>
      <ul className="list-disc pl-5 mt-2">
        <li><code>getMessage()</code> - Returns a description of why the exception was thrown</li>
        <li><code>getCode()</code> - Returns the exception code</li>
        <li><code>getFile()</code> - Returns the file path where the exception was thrown</li>
        <li><code>getLine()</code> - Returns the line number of the exception</li>
        <li><code>getPrevious()</code> - Returns the previous exception if chained</li>
      </ul>

      <h3 className="text-xl font-semibold mt-4">Example: Output Exception Information</h3>
      <pre className="bg-gray-200 p-3 rounded mt-2">
{`<?php
function divide($dividend, $divisor) {
  if($divisor == 0) {
    throw new Exception("Division by zero", 1);
  }
  return $dividend / $divisor;
}

try {
  echo divide(5, 0);
} catch(Exception $ex) {
  $code = $ex->getCode();
  $message = $ex->getMessage();
  $file = $ex->getFile();
  $line = $ex->getLine();
  echo "Exception thrown in $file on line $line: [Code $code] $message";
}
?>`}
      </pre>
    </div>
  );
};

export default PHPExceptions;
