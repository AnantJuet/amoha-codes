import React from "react";

const CConditions: React.FC = () => (
  <div className="mt-17 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">C Conditions</h1>

    <h2 className="text-2xl font-bold mt-6">Conditions and If Statements</h2>
    <p>
      You have already learned that C supports the usual logical conditions from mathematics:
    </p>
    <ul className="list-disc ml-6 mt-3 space-y-1">
      <li>Less than: <code>a &lt; b</code></li>
      <li>Less than or equal to: <code>a &lt;= b</code></li>
      <li>Greater than: <code>a &gt; b</code></li>
      <li>Greater than or equal to: <code>a &gt;= b</code></li>
      <li>Equal to: <code>a == b</code></li>
      <li>Not Equal to: <code>a != b</code></li>
    </ul>

    <p className="mt-3">
      You can use these conditions to perform different actions for different decisions.
    </p>

    <p className="mt-3">
      C has the following conditional statements:
    </p>
    <ul className="list-disc ml-6 mt-3 space-y-1">
      <li>Use <code>if</code> to specify a block of code to be executed, if a specified condition is true</li>
      <li>Use <code>else</code> to specify a block of code to be executed, if the same condition is false</li>
      <li>Use <code>else if</code> to specify a new condition to test, if the first condition is false</li>
      <li>Use <code>switch</code> to specify many alternative blocks of code to be executed</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">The if Statement</h2>
    <p>
      Use the <code>if</code> statement to specify a block of C code to be executed if a condition is <code>true</code>.
    </p>

    <h3 className="text-xl font-semibold mt-4">Syntax</h3>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`if (condition) {
    // block of code to be executed if the condition is true
}`}
    </pre>

    <h3 className="text-xl font-semibold mt-4">Example</h3>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`int x = 20;
int y = 18;

if (x > y) {
    printf("x is greater than y");
}`}
    </pre>

    <h3 className="text-lg font-semibold mt-3">Result:</h3>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`x is greater than y`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">The else Statement</h2>
    <p>
      Use the <code>else</code> statement to specify a block of code to be executed if the condition is <code>false</code>.
    </p>

    <h3 className="text-xl font-semibold mt-4">Syntax</h3>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`if (condition) {
    // block of code to be executed if the condition is true
} else {
    // block of code to be executed if the condition is false
}`}
    </pre>

    <h3 className="text-xl font-semibold mt-4">Example</h3>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`int time = 20;

if (time < 18) {
    printf("Good day.");
} else {
    printf("Good evening.");
}`}
    </pre>

    <h3 className="text-lg font-semibold mt-3">Result:</h3>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`Good evening.`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">The else if Statement</h2>
    <p>
      Use the <code>else if</code> statement to specify a new condition if the first condition is <code>false</code>.
    </p>

    <h3 className="text-xl font-semibold mt-4">Syntax</h3>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`if (condition1) {
    // block of code if condition1 is true
} else if (condition2) {
    // block of code if condition1 is false and condition2 is true
} else {
    // block of code if condition1 and condition2 are false
}`}
    </pre>

    <h3 className="text-xl font-semibold mt-4">Example</h3>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`int time = 22;

if (time < 10) {
    printf("Good morning.");
} else if (time < 20) {
    printf("Good day.");
} else {
    printf("Good evening.");
}`}
    </pre>

    <h3 className="text-lg font-semibold mt-3">Result:</h3>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`Good evening.`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Short Hand If...Else (Ternary Operator)</h2>
    <p>
      There is also a short-hand if else, which is known as the <b>ternary operator</b> because it consists of three operands. It can be used to replace multiple lines of code with a single line.
    </p>

    <h3 className="text-xl font-semibold mt-4">Syntax</h3>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`variable = (condition) ? expressionTrue : expressionFalse;`}
    </pre>

    <h3 className="text-xl font-semibold mt-4">Example</h3>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`int time = 20;
(time < 18) ? printf("Good day.") : printf("Good evening.");`}
    </pre>

    <h3 className="text-lg font-semibold mt-3">Result:</h3>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`Good evening.`}
    </pre>
  </div>
);

export default CConditions;
