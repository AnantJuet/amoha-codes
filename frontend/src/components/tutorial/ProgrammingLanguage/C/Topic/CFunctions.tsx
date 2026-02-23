import React from "react";

const CFunctions: React.FC = () => (
  <div className="mt-17 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">C Functions</h1>

    <p>
      A function is a block of code which only runs when it is called.
    </p>
    <p className="mt-3">
      You can pass data, known as parameters, into a function.
    </p>
    <p className="mt-3">
      Functions are used to perform certain actions, and they are important for reusing code: Define the code once, and use it many times.
    </p>

    <h2 className="text-2xl font-bold mt-6">Predefined Functions</h2>
    <p>
      You have already been using functions without knowing it. For example, <code>main()</code> is a function, which is used to execute code, and <code>printf()</code> is a function; used to output/print text to the screen:
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`int main() {
    printf("Hello World!");
    return 0;
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Create a Function</h2>
    <p>
      To create (often referred to as <i>declare</i>) your own function, specify the name of the function, followed by parentheses <code>()</code> and curly brackets <code>{"{}"}</code>:
    </p>

    <h3 className="text-xl font-semibold mt-4">Syntax</h3>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`void myFunction() {
    // code to be executed
}`}
    </pre>

    <ul className="list-disc ml-6 mt-3 space-y-2">
      <li><code>myFunction()</code> is the name of the function</li>
      <li><code>void</code> means that the function does not have a return value</li>
      <li>Inside the function (the body), add code that defines what the function should do</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Call a Function</h2>
    <p>
      Declared functions are not executed immediately. They are "saved for later use", and will be executed when they are called.
    </p>
    <p className="mt-3">
      To call a function, write the function's name followed by two parentheses <code>()</code> and a semicolon <code>;</code>
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`#include <stdio.h>

// Create a function
void myFunction() {
    printf("I just got executed!");
}

int main() {
    myFunction();  // call the function
    return 0;
}`}
    </pre>

    <h3 className="text-lg font-semibold mt-3">Result:</h3>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`I just got executed!`}
    </pre>

    <p className="mt-3">
      A function can be called multiple times:
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`void myFunction() {
    printf("I just got executed!\\n");
}

int main() {
    myFunction();
    myFunction();
    myFunction();
    return 0;
}`}
    </pre>

    <h3 className="text-lg font-semibold mt-3">Result:</h3>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`I just got executed!
I just got executed!
I just got executed!`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Parameters and Arguments</h2>
    <p>
      Information can be passed to functions as a parameter. Parameters act as variables inside the function.
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`void myFunction(char name[]) {
    printf("Hello %s\\n", name);
}

int main() {
    myFunction("Liam");
    myFunction("Jenny");
    myFunction("Anja");
    return 0;
}`}
    </pre>

    <h3 className="text-lg font-semibold mt-3">Result:</h3>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`Hello Liam
Hello Jenny
Hello Anja`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Multiple Parameters</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`void myFunction(char name[], int age) {
    printf("Hello %s. You are %d years old.\\n", name, age);
}

int main() {
    myFunction("Liam", 3);
    myFunction("Jenny", 14);
    myFunction("Anja", 30);
    return 0;
}`}
    </pre>

    <h3 className="text-lg font-semibold mt-3">Result:</h3>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`Hello Liam. You are 3 years old.
Hello Jenny. You are 14 years old.
Hello Anja. You are 30 years old.`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Return Values</h2>
    <p>
      The <code>void</code> keyword indicates that the function should not return a value. If you want the function to return a value, you can use a data type (such as <code>int</code> or <code>float</code>, etc.) instead of <code>void</code>, and use the <code>return</code> keyword inside the function:
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`int myFunction(int x) {
    return 5 + x;
}

int main() {
    printf("Result is: %d", myFunction(3));
    return 0;
}`}
    </pre>

    <h3 className="text-lg font-semibold mt-3">Result:</h3>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`Result is: 8`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Function with Two Parameters</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`int myFunction(int x, int y) {
    return x + y;
}

int main() {
    printf("Result is: %d", myFunction(5, 3));
    return 0;
}`}
    </pre>

    <h3 className="text-lg font-semibold mt-3">Result:</h3>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`Result is: 8`}
    </pre>
  </div>
);

export default CFunctions;
