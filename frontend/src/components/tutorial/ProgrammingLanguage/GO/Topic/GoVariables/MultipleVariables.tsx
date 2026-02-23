import React from "react";

const GoMultipleVariable: React.FC = () => (
  <div className="mt-17  dark:text-white space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Go Multiple Variable Declaration
    </h1>

    <p>
      In Go, it is possible to declare multiple variables on the same line.
    </p>

    <h2 className="text-2xl font-bold mt-6">Example</h2>
    <p>This example shows how to declare multiple variables on the same line:</p>

    <div className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      package main
      <br />
      import ("fmt")
      <br />
      <br />
      func main() &#123;
      <br />
      &nbsp;&nbsp;var a, b, c, d int = 1, 3, 5, 7
      <br />
      <br />
      &nbsp;&nbsp;fmt.Println(a)
      <br />
      &nbsp;&nbsp;fmt.Println(b)
      <br />
      &nbsp;&nbsp;fmt.Println(c)
      <br />
      &nbsp;&nbsp;fmt.Println(d)
      <br />
      &#125;
    </div>

    <p>
      <b>Note:</b> If you use the <b>type</b> keyword, it is only possible to
      declare one type of variable per line.
    </p>

    <p>
      If the <b>type</b> keyword is not specified, you can declare different
      types of variables on the same line:
    </p>

    <h2 className="text-2xl font-bold mt-6">Example</h2>
    <div className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      package main
      <br />
      import ("fmt")
      <br />
      <br />
      func main() &#123;
      <br />
      &nbsp;&nbsp;var a, b = 6, "Hello"
      <br />
      &nbsp;&nbsp;c, d := 7, "World!"
      <br />
      <br />
      &nbsp;&nbsp;fmt.Println(a)
      <br />
      &nbsp;&nbsp;fmt.Println(b)
      <br />
      &nbsp;&nbsp;fmt.Println(c)
      <br />
      &nbsp;&nbsp;fmt.Println(d)
      <br />
      &#125;
    </div>

    <h2 className="text-2xl font-bold mt-6">
      Go Variable Declaration in a Block
    </h2>
    <p>
      Multiple variable declarations can also be grouped together into a block
      for greater readability:
    </p>

    <h3 className="text-xl font-semibold mt-4">Example</h3>
    <div className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      package main
      <br />
      import ("fmt")
      <br />
      <br />
      func main() &#123;
      <br />
      &nbsp;&nbsp;var (
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;a int
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;b int = 1
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;c string = "hello"
      <br />
      &nbsp;&nbsp;)
      <br />
      <br />
      &nbsp;&nbsp;fmt.Println(a)
      <br />
      &nbsp;&nbsp;fmt.Println(b)
      <br />
      &nbsp;&nbsp;fmt.Println(c)
      <br />
      &#125;
    </div>
  </div>
);

export default GoMultipleVariable;
