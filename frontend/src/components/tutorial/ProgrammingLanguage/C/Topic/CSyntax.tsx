import React from "react";

const CSyntax: React.FC = () => (
  <div className="mt-17 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">C Syntax</h1>

    <h2 className="text-2xl font-bold mt-6">Syntax</h2>
    <p>
      You have already seen the following code a couple of times in the first chapters. Let's break it down to understand it better:
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`#include <stdio.h>

int main() {
    printf("Hello World!");
    return 0;
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Example Explained</h2>

    <p className="mt-3">
      <b>Line 1:</b> <code>#include &lt;stdio.h&gt;</code> is a <b>header file library</b> that lets us work with input and output functions, such as <code>printf()</code> (used in line 4). Header files add functionality to C programs.
    </p>

    <p className="mt-3">
      <b>Line 2:</b> A blank line. C ignores white space. But we use it to make the code more readable.
    </p>

    <p className="mt-3">
      <b>Line 3:</b> Another thing that always appear in a C program is <code>main()</code>. This is called a <b>function</b>. Any code inside its curly brackets <code>{"{}"}</code> will be executed.
    </p>

    <p className="mt-3">
      <b>Line 4:</b> <code>printf()</code> is a <b>function</b> used to output/print text to the screen. In our example, it will output "Hello World!".
    </p>

    <p className="mt-3">
      <b>Note:</b> Every C statement ends with a semicolon <code>;</code>
    </p>

    <p className="mt-3">
      <b>Note:</b> The body of <code>int main()</code> could also been written as:
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`int main(void) {
    printf("Hello World!");
    return 0;
}`}
    </pre>

    <p className="mt-3">
      <b>Line 5:</b> <code>return 0</code> ends the <code>main()</code> function.
    </p>

    <p className="mt-3">
      <b>Line 6:</b> Do not forget to add the closing curly bracket <code>{"}"}</code> to actually end the main function.
    </p>

    <h2 className="text-2xl font-bold mt-6">The main() Function</h2>
    <p>
      The <code>main()</code> function is required and you will see it in every C program:
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`int main() {
    // code to be executed
    return 0;
}`}
    </pre>

    <p className="mt-3">
      Any code inside the <code>main()</code> function will be executed. For now, just remember that every C program has a <code>main()</code> function.
    </p>

    <h2 className="text-2xl font-bold mt-6">Statements</h2>
    <p>
      A computer program is a list of "instructions" to be "executed" by a computer.
    </p>
    <p className="mt-3">
      In a programming language, these programming instructions are called <b>statements</b>.
    </p>
    <p className="mt-3">
      The following statement "instructs" the compiler to print the text "Hello World" to the screen:
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`printf("Hello World!");`}
    </pre>

    <p className="mt-3">
      It is important that you end the statement with a semicolon <code>;</code>
    </p>
    <p className="mt-3">
      If you forget the semicolon, an error will occur and the program will not run.
    </p>

    <h2 className="text-2xl font-bold mt-6">Many Statements</h2>
    <p>
      Most C programs contain many statements. The statements are executed, one by one, in the same order as they are written:
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`#include <stdio.h>

int main() {
    printf("Hello World!");
    printf("Have a good day!");
    return 0;
}`}
    </pre>

    <h3 className="text-lg font-semibold mt-3">Result:</h3>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`Hello World!Have a good day!`}
    </pre>

    <p className="mt-3">
      Note that the outputs appear on the same line. To insert a new line, you can use <code>\n</code>:
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`printf("Hello World!\\n");
printf("Have a good day!");`}
    </pre>

    <h3 className="text-lg font-semibold mt-3">Result:</h3>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`Hello World!
Have a good day!`}
    </pre>
  </div>
);

export default CSyntax;
