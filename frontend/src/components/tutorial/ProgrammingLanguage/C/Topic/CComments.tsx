import React from "react";

const CComments: React.FC = () => (
  <div className="mt-17 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">C Comments</h1>

    <p>
      Comments can be used to explain C code, and to make it more readable. It can also be used to prevent execution when testing alternative code.
    </p>

    <h2 className="text-2xl font-bold mt-6">Single-line Comments</h2>
    <p>
      Single-line comments start with two forward slashes (<code>//</code>).
    </p>
    <p className="mt-3">
      Any text between <code>//</code> and the end of the line is ignored by the compiler (will not be executed).
    </p>
    <p className="mt-3">
      This example uses a single-line comment before a line of code:
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`// This is a comment
printf("Hello World!");`}
    </pre>

    <p className="mt-3">
      This example uses a single-line comment at the end of a line of code:
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`printf("Hello World!"); // This is a comment`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Multi-line Comments</h2>
    <p>
      Multi-line comments start with <code>/*</code> and ends with <code>*/</code>.
    </p>
    <p className="mt-3">
      Any text between <code>/*</code> and <code>*/</code> will be ignored by the compiler:
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`/* The code below will print the words Hello World!
to the screen, and it is amazing */
printf("Hello World!");`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Single or Multi-line Comments?</h2>
    <p>
      It is up to you which you want to use. Normally, we use <code>//</code> for short comments, and <code>/* */</code> for longer comments.
    </p>

    <h2 className="text-2xl font-bold mt-6">Good Practice</h2>
    <p>
      Comments are useful for:
    </p>
    <ul className="list-disc ml-6 mt-3 space-y-2">
      <li><b>Explaining complex code:</b> Help other programmers (or your future self) understand what the code does</li>
      <li><b>Temporarily disabling code:</b> Comment out code you don't want to run while testing</li>
      <li><b>Documentation:</b> Describe the purpose of functions and modules</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Example</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`#include <stdio.h>

/*
 * This program demonstrates the use of comments in C.
 * Author: Your Name
 * Date: 2024
 */

int main() {
    // Print a greeting message
    printf("Hello World!\\n");

    // This line is temporarily disabled
    // printf("This won't be printed");

    return 0;  // Return success
}`}
    </pre>
  </div>
);

export default CComments;
