import React from "react";

const GoFormattingVerbs: React.FC = () => (
  <div className="mt-17 space-y-6  dark:text-white">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2  dark:text-white">
      Go Formatting Verbs
    </h1>

    <p className="text-lg leading-relaxed mt-4  dark:text-white">
      <strong>Formatting Verbs for Printf()</strong> — Go offers several formatting verbs that can be used with the <code>Printf()</code> function.
    </p>

    {/* General Formatting Verbs */}
    <h2 className="text-2xl font-bold mt-6  dark:text-white">
      General Formatting Verbs
    </h2>

    <p className="mt-2  dark:text-white">
      The following verbs can be used with all data types:
    </p>

    <table className="table-auto border-collapse border border-gray-400 mt-3  dark:text-white">
      <thead>
        <tr className="bg-gray-200 dark:bg-gray-700">
          <th className="border px-4 py-2">Verb</th>
          <th className="border px-4 py-2">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="border px-4 py-2">%v</td><td className="border px-4 py-2">Prints the value in the default format</td></tr>
        <tr><td className="border px-4 py-2">%#v</td><td className="border px-4 py-2">Prints the value in Go-syntax format</td></tr>
        <tr><td className="border px-4 py-2">%T</td><td className="border px-4 py-2">Prints the type of the value</td></tr>
        <tr><td className="border px-4 py-2">%%</td><td className="border px-4 py-2">Prints the % sign</td></tr>
      </tbody>
    </table>

    <h3 className="text-xl font-semibold mt-4  dark:text-white">Example</h3>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`package main
import ("fmt")

func main() {
  var i = 15.5
  var txt = "Hello World!"

  fmt.Printf("%v\n", i)
  fmt.Printf("%#v\n", i)
  fmt.Printf("%v%%\n", i)
  fmt.Printf("%T\n", i)

  fmt.Printf("%v\n", txt)
  fmt.Printf("%#v\n", txt)
  fmt.Printf("%T\n", txt)
}`}
    </pre>

    <p className="mt-2  dark:text-white">Result:</p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
15.5
{"\n"}15.5
{"\n"}15.5%
{"\n"}float64
{"\n"}Hello World!
{"\n"}"Hello World!"
{"\n"}string
    </pre>

  </div>
);

export default GoFormattingVerbs;
