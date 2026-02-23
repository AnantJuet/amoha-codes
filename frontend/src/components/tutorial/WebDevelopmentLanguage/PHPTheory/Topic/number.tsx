import React from "react";

const PHPNumbers: React.FC = () => {
  return (
    <div className="p-6 leading-7">
      <h1 className="text-3xl font-bold mb-4">PHP Numbers</h1>

      <p>
        In this chapter we explore <strong>Integers</strong>,{" "}
        <strong>Floats</strong>, and <strong>Number Strings</strong>. PHP also
        supports <strong>Infinity</strong> and <strong>NaN</strong>.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Numeric Types in PHP</h2>
      <ul className="list-disc ml-6 mt-2">
        <li>Integer</li>
        <li>Float</li>
        <li>Number Strings</li>
        <li>Infinity</li>
        <li>NaN</li>
      </ul>

      <p className="mt-4">PHP creates numeric variables automatically:</p>

      <pre className="bg-gray-200 p-3 rounded">{`$a = 5;
$b = 5.34;
$c = "25";`}</pre>

      <p className="mt-2">Use var_dump() to check a variable’s type:</p>

      <pre className="bg-gray-200 p-3 rounded">{`var_dump($a);
var_dump($b);
var_dump($c);`}</pre>

      {/* Integers */}
      <h2 className="text-2xl font-semibold mt-6">PHP Integers</h2>

      <p>
        Use <code>is_int()</code> to check if a variable is an integer. Integers
        are whole numbers (positive or negative) without decimals.
      </p>

      <pre className="bg-gray-200 p-3 rounded mt-2">{`$x = 5985;
var_dump(is_int($x));

$x = 59.85;
var_dump(is_int($x));`}</pre>

      <p className="mt-2">
        Integer ranges depend on system architecture (32-bit or 64-bit). PHP
        converts values outside the integer range to float.
      </p>

      <p className="mt-2 font-semibold">Rules for integers:</p>
      <ul className="list-disc ml-6 mt-2">
        <li>Must contain at least one digit</li>
        <li>No decimal point allowed</li>
        <li>Can be positive or negative</li>
        <li>
          Can be written in decimal, hexadecimal (<code>0x</code>), octal (
          <code>0</code>), or binary (<code>0b</code>) format
        </li>
      </ul>

      <p className="mt-3 font-semibold">Predefined Integer Constants:</p>
      <ul className="list-disc ml-6 mt-2">
        <li>PHP_INT_MAX</li>
        <li>PHP_INT_MIN</li>
        <li>PHP_INT_SIZE</li>
      </ul>

      {/* Floats */}
      <h2 className="text-2xl font-semibold mt-6">PHP Floats</h2>

      <p>Use <code>is_float()</code> to check float types.</p>

      <pre className="bg-gray-200 p-3 rounded mt-2">{`$x = 10.365;
var_dump(is_float($x));`}</pre>

      <p className="mt-2">
        Floats support very large values (up to approx 1.79E+308) and provide up
        to 14 digits of precision.
      </p>

      <p className="mt-3 font-semibold">Float Constants (PHP 7.2+):</p>
      <ul className="list-disc ml-6 mt-2">
        <li>PHP_FLOAT_MAX</li>
        <li>PHP_FLOAT_MIN</li>
        <li>PHP_FLOAT_DIG</li>
        <li>PHP_FLOAT_EPSILON</li>
      </ul>

      {/* Infinity */}
      <h2 className="text-2xl font-semibold mt-6">PHP Infinity</h2>

      <p>
        Use <code>is_finite()</code> and <code>is_infinite()</code> to check if
        a number is finite or infinite.
      </p>

      <pre className="bg-gray-200 p-3 rounded mt-2">{`$x = 1.9e411;
var_dump(is_infinite($x));`}</pre>

      {/* NaN */}
      <h2 className="text-2xl font-semibold mt-6">PHP NaN</h2>

      <p>
        NaN means “Not a Number.” Returned from invalid mathematical operations.
        Check using <code>is_nan()</code>.
      </p>

      <pre className="bg-gray-200 p-3 rounded mt-2">{`$x = acos(8);
var_dump($x);`}</pre>

      {/* Numerical Strings */}
      <h2 className="text-2xl font-semibold mt-6">PHP Numerical Strings</h2>

      <p>
        <code>is_numeric()</code> returns true for numbers and numeric strings.
      </p>

      <pre className="bg-gray-200 p-3 rounded mt-2">{`$x = 5985;
var_dump(is_numeric($x));

$x = "5985";
var_dump(is_numeric($x));

$x = "59.85" + 100;
var_dump(is_numeric($x));

$x = "Hello";
var_dump(is_numeric($x));`}</pre>

      <p className="mt-2 italic">
        Note: From PHP 7.0, hexadecimal numeric strings (e.g., 0xf4c3b00c) return
        FALSE.
      </p>

      {/* Casting */}
      <h2 className="text-2xl font-semibold mt-6">
        PHP Casting Strings and Floats to Integers
      </h2>

      <p>
        Use <code>(int)</code>, <code>(integer)</code>, or{" "}
        <code>intval()</code> to convert values to integers.
      </p>

      <pre className="bg-gray-200 p-3 rounded mt-2">{`// Cast float to int
$x = 23465.768;
$int_cast = (int)$x;
echo $int_cast;

echo "<br>";

// Cast string to int
$x = "23465.768";
$int_cast = (int)$x;
echo $int_cast;`}</pre>
    </div>
  );
};

export default PHPNumbers;
