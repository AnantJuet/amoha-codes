import React from "react";

const KotlinWhileLoop: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Kotlin While Loop
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      Loops can execute a block of code as long as a specified condition is true. 
      They save time, reduce errors, and make code more readable.
    </p>

    <h2 className="text-2xl font-bold mt-6">While Loop</h2>
    <p className="text-lg mt-2">
      The <code>while</code> loop executes a block of code repeatedly as long as a condition is true:
    </p>
    <pre className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      <code>{`while (condition) {
  // code block to be executed
}`}</code>
    </pre>

    <p className="text-lg  mt-2">
      Example: The code below will run as long as <code>i &lt; 5</code>:
    </p>
    <pre className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      <code>{`var i = 0
while (i < 5) {
  println(i)
  i++
}`}</code>
    </pre>
    <p className="text-lg  mt-2">
      <strong>Note:</strong> Do not forget to increment the variable used in the condition, otherwise the loop will never end.
    </p>

    <h2 className="text-2xl font-bold mt-6">Do..While Loop</h2>
    <p className="text-lg  mt-2">
      The <code>do..while</code> loop is a variant of the while loop. 
      It executes the code block once before checking the condition, then repeats as long as the condition is true.
    </p>
    <pre className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      <code>{`do {
  // code block to be executed
} while (condition)`}</code>
    </pre>

    <p className="text-lg  mt-2">
      Example: The loop will always execute at least once, even if the condition is false:
    </p>
    <pre className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      <code>{`var i = 0
do {
  println(i)
  i++
} while (i < 5)`}</code>
    </pre>
  </div>
);

export default KotlinWhileLoop;
