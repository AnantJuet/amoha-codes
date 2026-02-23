import React from "react";

const CVariables: React.FC = () => (
  <div className="mt-17 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">C Variables</h1>

    <p>
      Variables are containers for storing data values, like numbers and characters.
    </p>

    <p className="mt-3">
      In C, there are different <b>types</b> of variables (defined with different keywords), for example:
    </p>

    <ul className="list-disc ml-6 mt-3 space-y-2">
      <li><code>int</code> - stores integers (whole numbers), without decimals, such as 123 or -123</li>
      <li><code>float</code> - stores floating point numbers, with decimals, such as 19.99 or -19.99</li>
      <li><code>char</code> - stores single characters, such as 'a' or 'B'. Characters are surrounded by single quotes</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Declaring (Creating) Variables</h2>
    <p>
      To create a variable, specify the <b>type</b> and assign it a <b>value</b>:
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`type variableName = value;`}
    </pre>

    <p className="mt-3">
      Where <code>type</code> is one of C types (such as <code>int</code>), and <code>variableName</code> is the name of the variable (such as <b>x</b> or <b>myName</b>). The <b>equal sign</b> is used to assign values to the variable.
    </p>

    <h2 className="text-2xl font-bold mt-6">Example</h2>
    <p>
      To create a variable that should store a number, look at the following example:
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`int myNum = 15;`}
    </pre>

    <p className="mt-3">
      You can also declare a variable without assigning the value, and assign the value later:
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`// Declare a variable
int myNum;

// Assign a value to the variable
myNum = 15;`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Output Variables</h2>
    <p>
      In many other programming languages (like Python, Java, and C++), you would normally use a <code>print</code> function to display the value of a variable. However, this is not possible in C:
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`int myNum = 15;
printf(myNum);  // Nothing happens`}
    </pre>

    <p className="mt-3">
      To output variables in C, you must get familiar with something called "format specifiers".
    </p>

    <h2 className="text-2xl font-bold mt-6">Format Specifiers</h2>
    <p>
      Format specifiers are used together with the <code>printf()</code> function to tell the compiler what type of data the variable is storing. It is basically a placeholder for the variable value.
    </p>

    <p className="mt-3">
      A format specifier starts with a percent sign <code>%</code>, followed by a character.
    </p>

    <p className="mt-3">
      For example, to output the value of an <code>int</code> variable, you must use the format specifier <code>%d</code> or <code>%i</code> surrounded by double quotes, inside the <code>printf()</code> function:
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`int myNum = 15;
printf("%d", myNum);  // Outputs 15`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Other Data Types</h2>

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

    <h3 className="text-lg font-semibold mt-3">Result:</h3>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`5
5.990000
D`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Common Format Specifiers</h2>
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
  </div>
);

export default CVariables;
