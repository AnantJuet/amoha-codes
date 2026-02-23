import React from "react";

const GoComments: React.FC = () => (
  <div className="mt-17  dark:text-white space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Go Comments</h1>

    <p>
      A comment is a text that is ignored upon execution.
      <br />
      Comments can be used to explain the code and make it more readable.
      <br />
      Comments can also be used to prevent code execution when testing an alternative code.
    </p>

    <p>Go supports single-line and multi-line comments.</p>

    <h2 className="text-2xl font-bold mt-6">Go Single-line Comments</h2>
    <p>
      Single-line comments start with two forward slashes (<b>//</b>).
      <br />
      Any text between <b>//</b> and the end of the line is ignored by the compiler (it will not be executed).
    </p>

    <h2 className="text-2xl font-bold mt-6">Example</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      // This is a comment
      <br />
      package main
      <br />
      import ("fmt")
      <br />
      <br />
      func main() &#123;
      <br />
      &nbsp;&nbsp;// This is a comment
      <br />
      &nbsp;&nbsp;fmt.Println("Hello World!")
      <br />
      &#125;
    </div>

    <p>The following example uses a single-line comment at the end of a code line:</p>

    <h2 className="text-2xl font-bold mt-6">Example</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      package main
      <br />
      import ("fmt")
      <br />
      <br />
      func main() &#123;
      <br />
      &nbsp;&nbsp;fmt.Println("Hello World!") // This is a comment
      <br />
      &#125;
    </div>

    <h2 className="text-2xl font-bold mt-6">Go Multi-line Comments</h2>
    <p>
      Multi-line comments start with <b>/*</b> and end with <b>*/</b>.
      <br />
      Any text between <b>/*</b> and <b>*/</b> will be ignored by the compiler.
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
      &nbsp;&nbsp;/* The code below will print Hello World
      <br />
      &nbsp;&nbsp;to the screen, and it is amazing */
      <br />
      &nbsp;&nbsp;fmt.Println("Hello World!")
      <br />
      &#125;
    </div>

    <p>
      <b>Tip:</b> It is up to you which one you want to use. Normally, we use{" "}
      <b>//</b> for short comments and <b>/* ... */</b> for longer comments.
    </p>

    <h2 className="text-2xl font-bold mt-6">Comment to Prevent Code Execution</h2>
    <p>
      You can also use comments to prevent code from being executed. The commented code can be saved for later reference and troubleshooting.
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
      &nbsp;&nbsp;// fmt.Println("This line does not execute")
      <br />
      &#125;
    </div>
  </div>
);

export default GoComments;
