import React from "react";

const CsharpSpecialCharacters: React.FC = () => (
  <div className="mt-20 px-6">
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      C# Special Characters
    </h1>

    <p className="text-lg  leading-relaxed mt-4">
      Because strings must be written within quotes, C# may misunderstand certain strings and generate an error. For example:
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <code>{`string txt = "We are the so-called "Vikings" from the north.";`}</code>
    </pre>

    <p className="text-lg text-gray-700 mt-2">
      The solution is to use the <strong>backslash (\)</strong> escape character. It turns special characters into string characters.
    </p>

    <h2 className="text-2xl font-bold mt-6">Common Escape Characters</h2>
    <table className="table-auto border-collapse border border-gray-300 mt-2 text-left text-lg ">
      <thead>
        <tr>
          <th className="border border-gray-300 px-4 py-2">Escape character</th>
          <th className="border border-gray-300 px-4 py-2">Result</th>
          <th className="border border-gray-300 px-4 py-2">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2">\'</td>
          <td className="border border-gray-300 px-4 py-2">'</td>
          <td className="border border-gray-300 px-4 py-2">Single quote</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">\"</td>
          <td className="border border-gray-300 px-4 py-2">"</td>
          <td className="border border-gray-300 px-4 py-2">Double quote</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">\\</td>
          <td className="border border-gray-300 px-4 py-2">\</td>
          <td className="border border-gray-300 px-4 py-2">Backslash</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-6">Examples</h2>

    <p className="text-lg  mt-2">
      Insert a double quote in a string:
    </p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <code>{`string txt = "We are the so-called \"Vikings\" from the north.";`}</code>
    </pre>

    <p className="text-lg mt-2">
      Insert a single quote in a string:
    </p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <code>{`string txt = "It\'s alright.";`}</code>
    </pre>

    <p className="text-lg  mt-2">
      Insert a backslash in a string:
    </p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <code>{`string txt = "The character \\ is called backslash.";`}</code>
    </pre>

    <h2 className="text-2xl font-bold mt-6">Other Useful Escape Characters</h2>
    <table className="table-auto border-collapse border border-gray-300 mt-2 text-left text-lg ">
      <thead>
        <tr>
          <th className="border border-gray-300 px-4 py-2">Code</th>
          <th className="border border-gray-300 px-4 py-2">Result</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2">\n</td>
          <td className="border border-gray-300 px-4 py-2">New Line</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">\t</td>
          <td className="border border-gray-300 px-4 py-2">Tab</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">\b</td>
          <td className="border border-gray-300 px-4 py-2">Backspace</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default CsharpSpecialCharacters;
