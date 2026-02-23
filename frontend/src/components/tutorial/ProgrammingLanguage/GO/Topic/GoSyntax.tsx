import React from "react";

const GoSyntax: React.FC = () => (
  <div className="mt-17  dark:text-white space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2 ">Go Syntax</h1>

    <p>
      A Go file consists of the following parts:
      <br />• Package declaration
      <br />• Import packages
      <br />• Functions
      <br />• Statements and expressions
    </p>

    <h2 className="text-2xl font-bold mt-6">Example</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      package main
      <br />
      import ("fmt")
      <br />
      <br />
      func main() &#123;
      <br />
      &nbsp;&nbsp;fmt.Println("Hello World!")
      <br />
      &#125;
    </div>

    <h2 className="text-2xl font-bold mt-6">Example Explained</h2>

    <p>
      <b>Line 1:</b> In Go, every program is part of a package. We define this
      using the <b>package</b> keyword. In this example, the program belongs to
      the <b>main</b> package.
    </p>

    <p>
      <b>Line 2:</b> <b>import ("fmt")</b> lets us import files included in the{" "}
      <b>fmt</b> package.
    </p>

    <p>
      <b>Line 3:</b> A blank line. Go ignores white space. Having white spaces in
      code makes it more readable.
    </p>

    <p>
      <b>Line 4:</b> <b>func main() &#123;&#125;</b> is a function. Any code inside its
      curly brackets <b>&#123;&#125;</b> will be executed.
    </p>

    <p>
      <b>Line 5:</b> <b>fmt.Println()</b> is a function made available from the{" "}
      <b>fmt</b> package. It is used to output/print text. In our example, it
      will output <b>"Hello World!"</b>
    </p>

    <p>
      <b>Note:</b> In Go, any executable code belongs to the <b>main</b> package.
    </p>

    <h2 className="text-2xl font-bold mt-6">Go Statements</h2>

    <p>
      <b>fmt.Println("Hello World!")</b> is a statement.
    </p>

    <p>
      In Go, statements are separated by ending a line (hitting the Enter key) or
      by a semicolon <b>;</b>.
    </p>

    <p>
      Hitting the Enter key adds <b>;</b> to the end of the line implicitly (it
      does not show up in the source code).
    </p>

    <p>The left curly bracket <b>&#123;</b> cannot come at the start of a line.</p>

    <p>Run the following code and see what happens:</p>

    <h2 className="text-2xl font-bold mt-6">Example</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      package main
      <br />
      import ("fmt")
      <br />
      <br />
      func main()
      <br />
      &#123;
      <br />
      &nbsp;&nbsp;fmt.Println("Hello World!")
      <br />
      &#125;
    </div>

    <h2 className="text-2xl font-bold mt-6">Go Compact Code</h2>
    <p>
      You can write more compact code like shown below (this is not recommended
      because it makes the code more difficult to read):
    </p>

    <h2 className="text-2xl font-bold mt-6">Example</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      package main; import ("fmt"); func main() &#123; fmt.Println("Hello
      World!");&#125;
    </div>
  </div>
);

export default GoSyntax;
