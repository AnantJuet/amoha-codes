import React from "react";

const KotlinSyntax: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Kotlin Syntax
    </h1>

    <p className="text-lg  mt-6 leading-relaxed">
      In the previous chapter, we created a Kotlin file called{" "}
      <b>Main.kt</b>, and used the following code to print{" "}
      <b>"Hello World"</b> to the screen:
    </p>

    <div className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      <pre>{`fun main() {
  println("Hello World")
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold  mt-8">Example Explained</h2>

    <p className="text-lg  mt-4 leading-relaxed">
      The <b>fun</b> keyword is used to declare a <b>function</b>. A function
      is a block of code designed to perform a particular task. In the example
      above, it declares the <b>main()</b> function.
    </p>

    <p className="text-lg  mt-4 leading-relaxed">
      The <b>main()</b> function</p>
    <p className="text-lg  leading-relaxed">
      is something you will see in every Kotlin program. This function is used
      to execute code. Any code written inside the curly brackets{" "}
      <b>{`{}`}</b> of the main() function will be executed when the program
      runs.
    </p>

    <p className="text-lg  mt-4 leading-relaxed">
      The <b>println()</b> function is placed inside the main() function, which
      means it will be executed. The println() function is used to output or
      print text — in this example, it prints <b>"Hello World"</b> to the screen.
    </p>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-xl mt-6">
      <p className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
        💡 <b>Good To Know:</b> In Kotlin, code statements do not need to end
        with a semicolon (<b>;</b>) — unlike other languages like Java, C++, or C#.
      </p>
    </div>

    <h2 className="text-2xl font-bold  mt-8">Main Parameters</h2>

    <p className="text-lg  mt-4 leading-relaxed">
      Before Kotlin version 1.3, it was required to use the main() function
      with parameters. It was written like this:
    </p>

    <div className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      <pre>{`fun main(args : Array<String>) {
  println("Hello World")
}`}</pre>
    </div>

    <p className="text-lg  mt-4 leading-relaxed">
      This version of main() accepts command-line arguments as an array of
      strings (<b>Array&lt;String&gt;</b>), which can be used to pass data into
      your program.
    </p>
  </div>
);

export default KotlinSyntax;
