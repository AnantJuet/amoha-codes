import React from "react";

const GoGettingStarted: React.FC = () => (
  <div className="mt-17 dark:text-white space-y-6">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Go Getting Started
    </h1>

    <h2 className="text-2xl font-bold mt-6">Go Get Started</h2>

    <p className="leading-relaxed">
      To start using Go, you need two things:
      <br />• A text editor, like VS Code, to write Go code
      <br />• A compiler, like GCC, to translate the Go code into a language that the computer will understand
    </p>

    <p className="leading-relaxed">
      There are many text editors and compilers to choose from. In this tutorial,
      we will use an IDE (see below).
    </p>

    <h2 className="text-2xl font-bold mt-6">Go Install</h2>

    <p className="leading-relaxed">
      You can find the relevant installation files at{" "}
      <a
        href="https://golang.org/dl/"
        target="_blank"
        className="text-blue-600 underline dark:text-blue-400"
      >
        https://golang.org/dl/
      </a>
      .
    </p>

    <p className="leading-relaxed">
      Follow the instructions related to your OS. To check if Go installed, run:
    </p>

    {/* CODE BLOCK (black text always) */}
    <div className="bg-gray-100 dark:bg-gray-900 p-3 rounded-md font-mono text-black dark:text-black">
      go version
    </div>

    <p className="leading-relaxed">
      This should show your Go version.
    </p>

    <h2 className="text-2xl font-bold mt-6">Go Install IDE</h2>

    <p className="leading-relaxed">
      An IDE is used to edit AND compile code.
    </p>

    <p className="leading-relaxed">
      Popular IDEs: VS Code, Vim, Eclipse, Notepad.
    </p>

    <p className="leading-relaxed">
      Download VS Code:
      <br />
      <a
        href="https://code.visualstudio.com/"
        target="_blank"
        className="text-blue-600 underline dark:text-blue-400"
      >
        https://code.visualstudio.com/
      </a>
    </p>

    <h2 className="text-2xl font-bold mt-6">Go Quickstart</h2>

    <p className="leading-relaxed">Let's create our first Go program:</p>

    <p className="leading-relaxed">
      1. Launch VS Code <br />
      2. Press <b>Ctrl + Shift + X</b> <br />
      3. Search <b>Go</b> → Install <br />
      4. Open Command Palette (<b>Ctrl + Shift + P</b>) <br />
      5. Run <b>Go: Install/Update Tools</b> <br />
      6. Select all → OK <br />
    </p>

    <p className="leading-relaxed">Open terminal and type:</p>

    {/* CODE BLOCK */}
    <div className="bg-gray-100 dark:bg-gray-900 p-3 rounded-md font-mono text-black dark:text-black">
      go mod init example.com/hello
    </div>

    <p className="leading-relaxed">
      Don't worry if you don't understand this now.
    </p>

    <p className="leading-relaxed">
      Create file <b>helloworld.go</b> and add:
    </p>

    {/* CODE BLOCK */}
    <div className="bg-gray-100 dark:bg-gray-900 p-3 rounded-md font-mono text-black dark:text-black">
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

    <p className="leading-relaxed">Then run:</p>

    {/* CODE BLOCK */}
    <div className="bg-gray-100 dark:bg-gray-900 p-3 rounded-md font-mono text-black dark:text-black">
      go run .\helloworld.go
    </div>

    <p className="leading-relaxed">
      <b>Output:</b>
      <br />
      Hello World!
    </p>

    <p className="leading-relaxed">To build executable:</p>

    {/* CODE BLOCK */}
    <div className="bg-gray-100 dark:bg-gray-900 p-3 rounded-md font-mono text-black dark:text-black">
      go build .\helloworld.go
    </div>

    <h2 className="text-2xl font-bold mt-6">Learning Go at W3Schools</h2>

    <p className="leading-relaxed">
      Try it Yourself editor example:
    </p>

    {/* CODE BLOCK */}
    <div className="bg-gray-100 dark:bg-gray-900 p-3 rounded-md font-mono text-black dark:text-black">
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

    <p className="leading-relaxed">
      <b>Result:</b>
      <br />
      Hello World!
    </p>
  </div>
);

export default GoGettingStarted;
