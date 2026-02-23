import React from "react";

const CDataTypes: React.FC = () => (
  <div className="mt-17 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">C Data Types</h1>

    <p>
      As explained in the Variables chapter, a variable in C must be a specified <b>data type</b>, and you must use a <b>format specifier</b> inside the <code>printf()</code> function to display it:
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`// Create variables
int myNum = 5;             // Integer (whole number)
float myFloatNum = 5.99;   // Floating point number
char myLetter = 'D';       // Character

// Print variables
printf("%d\\n", myNum);
printf("%f\\n", myFloatNum);
printf("%c\\n", myLetter);`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Basic Data Types</h2>
    <p>
      The data type specifies the size and type of information the variable will store.
    </p>

    <table className="w-full mt-3 border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 px-4 py-2 text-left">Data Type</th>
          <th className="border border-gray-300 px-4 py-2 text-left">Size</th>
          <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2"><code>int</code></td>
          <td className="border border-gray-300 px-4 py-2">2 or 4 bytes</td>
          <td className="border border-gray-300 px-4 py-2">Stores whole numbers, without decimals</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2"><code>float</code></td>
          <td className="border border-gray-300 px-4 py-2">4 bytes</td>
          <td className="border border-gray-300 px-4 py-2">Stores fractional numbers. Sufficient for 6-7 decimal digits</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2"><code>double</code></td>
          <td className="border border-gray-300 px-4 py-2">8 bytes</td>
          <td className="border border-gray-300 px-4 py-2">Stores fractional numbers. Sufficient for 15 decimal digits</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2"><code>char</code></td>
          <td className="border border-gray-300 px-4 py-2">1 byte</td>
          <td className="border border-gray-300 px-4 py-2">Stores a single character/letter/number, or ASCII values</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-6">Basic Format Specifiers</h2>
    <table className="w-full mt-3 border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 px-4 py-2 text-left">Format Specifier</th>
          <th className="border border-gray-300 px-4 py-2 text-left">Data Type</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2"><code>%d</code> or <code>%i</code></td>
          <td className="border border-gray-300 px-4 py-2">int</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2"><code>%f</code></td>
          <td className="border border-gray-300 px-4 py-2">float</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2"><code>%lf</code></td>
          <td className="border border-gray-300 px-4 py-2">double</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2"><code>%c</code></td>
          <td className="border border-gray-300 px-4 py-2">char</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2"><code>%s</code></td>
          <td className="border border-gray-300 px-4 py-2">string (char array)</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-6">Setting Decimal Precision</h2>
    <p>
      You have probably already noticed that if you print a floating point number, the output will show many digits after the decimal point:
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`float myFloatNum = 3.5;
double myDoubleNum = 19.99;

printf("%f\\n", myFloatNum);   // Outputs 3.500000
printf("%lf", myDoubleNum);   // Outputs 19.990000`}
    </pre>

    <p className="mt-3">
      If you want to remove the extra zeros (set decimal precision), you can use a dot (<code>.</code>) followed by a number that specifies how many digits that should be shown after the decimal point:
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`float myFloatNum = 3.5;

printf("%f\\n", myFloatNum);    // Default will show 6 digits after decimal
printf("%.1f\\n", myFloatNum);  // Only show 1 digit
printf("%.2f\\n", myFloatNum);  // Only show 2 digits
printf("%.4f", myFloatNum);    // Only show 4 digits`}
    </pre>

    <h3 className="text-lg font-semibold mt-3">Result:</h3>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`3.500000
3.5
3.50
3.5000`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Type Conversion</h2>
    <p>
      Sometimes, you have to convert the value of one data type to another type. This is known as <b>type conversion</b>.
    </p>

    <h3 className="text-xl font-semibold mt-4">Implicit Conversion</h3>
    <p>
      Implicit conversion is done automatically by the compiler:
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`int myInt = 9;
double myDouble = myInt;  // Automatic conversion: int to double

printf("%d\\n", myInt);     // Outputs 9
printf("%lf", myDouble);   // Outputs 9.000000`}
    </pre>

    <h3 className="text-xl font-semibold mt-4">Explicit Conversion</h3>
    <p>
      Explicit conversion is done manually by placing the type in parentheses in front of the value:
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`double myDouble = 9.78;
int myInt = (int) myDouble;  // Manual conversion: double to int

printf("%lf\\n", myDouble);   // Outputs 9.780000
printf("%d", myInt);         // Outputs 9`}
    </pre>
  </div>
);

export default CDataTypes;
