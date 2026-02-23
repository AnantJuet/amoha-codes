import React from "react";

const GoHome: React.FC = () => (
 
<>
    <h1 className="text-4xl font-extrabold border-b-2 pb-2 mt-17 ">
      Learn Go
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      <b>Go</b> is a popular programming language used to create computer programs. It is known
      for its simplicity, efficiency, and performance.
    </p>

    <p className="leading-relaxed mt-3">
      Our "Try it Yourself" editor allows you to easily learn Go by editing code and viewing the
      results directly in your browser.
    </p>

    <h2 className="text-2xl font-bold mt-6">
      Example
    </h2>

    <p className="leading-relaxed mt-3">
      Here’s a simple Go program that prints "Hello World!" to the console:
    </p>

    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>
{`package main
import ("fmt")

func main() {
  fmt.Println("Hello World!")
}`}
      </pre>
    </div>

    <p className="leading-relaxed mt-4">
       This program defines a <b>main</b> function and uses <b>fmt.Println()</b> to display text
      in the console.
    </p>
  </>
);

export default GoHome;
