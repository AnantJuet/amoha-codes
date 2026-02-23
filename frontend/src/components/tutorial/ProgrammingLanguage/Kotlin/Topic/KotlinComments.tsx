import React from "react";

const KotlinComments: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Kotlin Comments
    </h1>

    <p className="text-lg  mt-6 leading-relaxed">
      Comments in Kotlin are used to make the code more readable and to explain
      what the code does. They can also be used to temporarily disable code
      during testing or debugging.
    </p>

    <h2 className="text-2xl font-bold  mt-8">
      Single-line Comments
    </h2>

    <p className="text-lg  mt-4 leading-relaxed">
      Single-line comments start with two forward slashes (<b>//</b>). Anything
      written after <b>//</b> on that line will be ignored by Kotlin (it will
      not be executed).
    </p>

    <p className="text-lg  mt-4 leading-relaxed">
      Here’s an example of a single-line comment written before a line of code:
    </p>

    <div className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      <pre>{`// This is a comment
println("Hello World")`}</pre>
    </div>

    <p className="text-lg  mt-6 leading-relaxed">
      You can also write a single-line comment at the end of a line of code:
    </p>

    <div className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      <pre>{`println("Hello World")  // This is a comment`}</pre>
    </div>

    <h2 className="text-2xl font-bold  mt-8">
      Multi-line Comments
    </h2>

    <p className="text-lg  mt-4 leading-relaxed">
      Multi-line comments start with <b>/*</b> and end with <b>*/</b>. Anything
      written between these symbols will be ignored by the compiler. This is
      useful when you want to write longer explanations or temporarily disable
      multiple lines of code.
    </p>

    <p className="text-lg  mt-4 leading-relaxed">
      Here’s an example of a multi-line comment:
    </p>

    <div className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      <pre>{`/* The code below will print the words Hello World
to the screen, and it is amazing */
println("Hello World")`}</pre>
    </div>

    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-xl mt-6">
      <p className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
        💡 <b>Tip:</b> Use comments to make your code easier to understand for
        yourself and others. Avoid adding unnecessary comments for obvious code.
      </p>
    </div>
  </div>
);

export default KotlinComments;
