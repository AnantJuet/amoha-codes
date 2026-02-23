import React from "react";

const CHome: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold border-b-2 pb-2 mt-17">
      Learn C
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      <b>C</b> is a powerful general-purpose programming language. It is fast, portable, and available on all platforms. C is one of the most widely used programming languages of all time.
    </p>

    <p className="leading-relaxed mt-3">
      C is very versatile; it can be used in both applications and technologies. It is the foundation for many other programming languages like C++, Java, and Python.
    </p>

    <h2 className="text-2xl font-bold mt-6">Why Learn C?</h2>

    <ul className="list-disc ml-6 mt-3 space-y-2">
      <li>It is one of the most popular programming languages in the world</li>
      <li>C is the foundation for many other languages (C++, C#, Java, etc.)</li>
      <li>C is used to develop operating systems, databases, and embedded systems</li>
      <li>C is fast and efficient, perfect for system programming</li>
      <li>Learning C helps you understand how computers work at a low level</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Example</h2>

    <p className="leading-relaxed mt-3">
      Here's a simple C program that prints "Hello World!" to the console:
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`#include <stdio.h>

int main() {
    printf("Hello World!");
    return 0;
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Example Explained</h2>

    <ul className="list-disc ml-6 mt-3 space-y-2">
      <li><b>Line 1:</b> <code>#include &lt;stdio.h&gt;</code> is a header file library that lets us work with input and output functions, such as <code>printf()</code>.</li>
      <li><b>Line 3:</b> <code>int main()</code> is the main function. Any code inside its curly brackets <code>{"{}"}</code> will be executed.</li>
      <li><b>Line 4:</b> <code>printf()</code> is a function used to output/print text to the screen. In our example, it will output "Hello World!".</li>
      <li><b>Line 5:</b> <code>return 0</code> ends the main function and returns the value 0 to indicate successful execution.</li>
    </ul>

    <p className="leading-relaxed mt-4">
      <b>Note:</b> Every C statement ends with a semicolon <code>;</code>
    </p>

    <p className="leading-relaxed mt-3">
      <b>Note:</b> The body of <code>int main()</code> could also be written as: <code>int main(void)</code>.
    </p>
  </>
);

export default CHome;
