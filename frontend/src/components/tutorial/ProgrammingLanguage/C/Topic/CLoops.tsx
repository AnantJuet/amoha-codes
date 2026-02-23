import React from "react";

const CLoops: React.FC = () => (
  <div className="mt-17 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">C Loops</h1>

    <p>
      Loops can execute a block of code as long as a specified condition is reached.
    </p>
    <p className="mt-3">
      Loops are handy because they save time, reduce errors, and they make code more readable.
    </p>

    <h2 className="text-2xl font-bold mt-6">While Loop</h2>
    <p>
      The <code>while</code> loop loops through a block of code as long as a specified condition is <code>true</code>:
    </p>

    <h3 className="text-xl font-semibold mt-4">Syntax</h3>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`while (condition) {
    // code block to be executed
}`}
    </pre>

    <h3 className="text-xl font-semibold mt-4">Example</h3>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`int i = 0;

while (i < 5) {
    printf("%d\\n", i);
    i++;
}`}
    </pre>

    <h3 className="text-lg font-semibold mt-3">Result:</h3>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`0
1
2
3
4`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">The Do/While Loop</h2>
    <p>
      The <code>do/while</code> loop is a variant of the <code>while</code> loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.
    </p>

    <h3 className="text-xl font-semibold mt-4">Syntax</h3>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`do {
    // code block to be executed
} while (condition);`}
    </pre>

    <h3 className="text-xl font-semibold mt-4">Example</h3>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`int i = 0;

do {
    printf("%d\\n", i);
    i++;
} while (i < 5);`}
    </pre>

    <h3 className="text-lg font-semibold mt-3">Result:</h3>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`0
1
2
3
4`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">For Loop</h2>
    <p>
      When you know exactly how many times you want to loop through a block of code, use the <code>for</code> loop instead of a <code>while</code> loop:
    </p>

    <h3 className="text-xl font-semibold mt-4">Syntax</h3>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`for (statement 1; statement 2; statement 3) {
    // code block to be executed
}`}
    </pre>

    <ul className="list-disc ml-6 mt-3 space-y-1">
      <li><b>Statement 1</b> is executed (one time) before the execution of the code block.</li>
      <li><b>Statement 2</b> defines the condition for executing the code block.</li>
      <li><b>Statement 3</b> is executed (every time) after the code block has been executed.</li>
    </ul>

    <h3 className="text-xl font-semibold mt-4">Example</h3>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`for (int i = 0; i < 5; i++) {
    printf("%d\\n", i);
}`}
    </pre>

    <h3 className="text-lg font-semibold mt-3">Result:</h3>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`0
1
2
3
4`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Nested Loops</h2>
    <p>
      It is also possible to place a loop inside another loop. This is called a <b>nested loop</b>.
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`// Outer loop
for (int i = 1; i <= 2; ++i) {
    printf("Outer: %d\\n", i);

    // Inner loop
    for (int j = 1; j <= 3; ++j) {
        printf(" Inner: %d\\n", j);
    }
}`}
    </pre>

    <h3 className="text-lg font-semibold mt-3">Result:</h3>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`Outer: 1
 Inner: 1
 Inner: 2
 Inner: 3
Outer: 2
 Inner: 1
 Inner: 2
 Inner: 3`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Break and Continue</h2>

    <h3 className="text-xl font-semibold mt-4">Break</h3>
    <p>
      The <code>break</code> statement can be used to jump out of a loop.
    </p>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`for (int i = 0; i < 10; i++) {
    if (i == 4) {
        break;
    }
    printf("%d\\n", i);
}`}
    </pre>

    <h3 className="text-lg font-semibold mt-3">Result:</h3>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`0
1
2
3`}
    </pre>

    <h3 className="text-xl font-semibold mt-4">Continue</h3>
    <p>
      The <code>continue</code> statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.
    </p>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`for (int i = 0; i < 10; i++) {
    if (i == 4) {
        continue;
    }
    printf("%d\\n", i);
}`}
    </pre>

    <h3 className="text-lg font-semibold mt-3">Result:</h3>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`0
1
2
3
5
6
7
8
9`}
    </pre>
  </div>
);

export default CLoops;
