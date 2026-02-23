import React from "react";

const CStrings: React.FC = () => (
  <div className="mt-17 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">C Strings</h1>

    <h2 className="text-2xl font-bold mt-6">Strings</h2>
    <p>
      Strings are used for storing text/characters.
    </p>

    <p className="mt-3">
      For example, "Hello World" is a string of characters.
    </p>

    <p className="mt-3">
      Unlike many other programming languages, C does not have a String type to easily create string variables. Instead, you must use the <code>char</code> type and create an <b>array</b> of characters to make a string in C:
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`char greetings[] = "Hello World!";`}
    </pre>

    <p className="mt-3">
      Note that you have to use double quotes (<code>""</code>).
    </p>

    <h2 className="text-2xl font-bold mt-6">Output Strings</h2>
    <p>
      To output a string, you can use the <code>printf()</code> function together with the format specifier <code>%s</code>:
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`char greetings[] = "Hello World!";
printf("%s", greetings);`}
    </pre>

    <h3 className="text-lg font-semibold mt-3">Result:</h3>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`Hello World!`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Access Strings</h2>
    <p>
      Since strings are actually arrays in C, you can access a string by referring to its index number inside square brackets <code>[]</code>.
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`char greetings[] = "Hello World!";
printf("%c", greetings[0]);  // Outputs 'H'`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Modify Strings</h2>
    <p>
      To change the value of a specific character in a string, refer to the index number, and use single quotes:
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`char greetings[] = "Hello World!";
greetings[0] = 'J';
printf("%s", greetings);  // Outputs "Jello World!"`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Loop Through a String</h2>
    <p>
      You can also loop through the characters of a string, using a <code>for</code> loop:
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`char carName[] = "Volvo";

for (int i = 0; i < 5; ++i) {
    printf("%c\\n", carName[i]);
}`}
    </pre>

    <h3 className="text-lg font-semibold mt-3">Result:</h3>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`V
o
l
v
o`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">String Length</h2>
    <p>
      To get the length of a string, you can use the <code>strlen()</code> function:
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`#include <stdio.h>
#include <string.h>

int main() {
    char alphabet[] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    printf("%lu", strlen(alphabet));  // Outputs 26
    return 0;
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">String Functions</h2>
    <p>
      C has many useful string functions, available in the <code>&lt;string.h&gt;</code> header:
    </p>

    <table className="w-full mt-3 border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 px-4 py-2 text-left">Function</th>
          <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2"><code>strlen()</code></td>
          <td className="border border-gray-300 px-4 py-2">Returns the length of a string</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2"><code>strcpy()</code></td>
          <td className="border border-gray-300 px-4 py-2">Copies one string to another</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2"><code>strcat()</code></td>
          <td className="border border-gray-300 px-4 py-2">Concatenates (joins) two strings</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2"><code>strcmp()</code></td>
          <td className="border border-gray-300 px-4 py-2">Compares two strings</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-6">String Examples</h2>

    <h3 className="text-xl font-semibold mt-4">strcpy() - Copy Strings</h3>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`char str1[20] = "Hello";
char str2[20];

strcpy(str2, str1);
printf("%s", str2);  // Outputs "Hello"`}
    </pre>

    <h3 className="text-xl font-semibold mt-4">strcat() - Concatenate Strings</h3>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`char str1[20] = "Hello ";
char str2[] = "World!";

strcat(str1, str2);
printf("%s", str1);  // Outputs "Hello World!"`}
    </pre>

    <h3 className="text-xl font-semibold mt-4">strcmp() - Compare Strings</h3>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`char str1[] = "Hello";
char str2[] = "Hello";
char str3[] = "World";

printf("%d\\n", strcmp(str1, str2));  // Outputs 0 (strings are equal)
printf("%d\\n", strcmp(str1, str3));  // Outputs negative (str1 < str3)`}
    </pre>
  </div>
);

export default CStrings;
