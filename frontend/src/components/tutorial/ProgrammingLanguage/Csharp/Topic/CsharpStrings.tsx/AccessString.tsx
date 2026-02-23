import React from "react";

const CsharpAccessStrings: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      C# Access Strings
    </h1>

    <p className="text-lg  leading-relaxed mt-4">
      You can access the characters in a string by referring to its index number inside square brackets <code>[]</code>.
    </p>

    <h2 className="text-2xl font-bold mt-6">Example: Access First Character</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <code>{`string myString = "Hello";
Console.WriteLine(myString[0]);  // Outputs "H"`}</code>
    </pre>
    <p className="text-lg mt-2">
      <strong>Note:</strong> String indexes start at 0. [0] is the first character, [1] is the second character, and so on.
    </p>

    <h2 className="text-2xl font-bold mt-6">Example: Access Second Character</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <code>{`string myString = "Hello";
Console.WriteLine(myString[1]);  // Outputs "e"`}</code>
    </pre>

    <h2 className="text-2xl font-bold mt-6">Finding the Index of a Character</h2>
    <p className="text-lg  mt-2">
      You can find the index position of a specific character using the <code>IndexOf()</code> method:
    </p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <code>{`string myString = "Hello";
Console.WriteLine(myString.IndexOf("e"));  // Outputs "1"`}</code>
    </pre>

    <h2 className="text-2xl font-bold mt-6">Extracting Substrings</h2>
    <p className="text-lg mt-2">
      The <code>Substring()</code> method extracts characters from a string, starting from a specified index, and returns a new string. It is often used together with <code>IndexOf()</code>:
    </p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <code>{`// Full name
string name = "John Doe";

// Location of the letter D
int charPos = name.IndexOf("D");

// Get last name
string lastName = name.Substring(charPos);

// Print the result
Console.WriteLine(lastName);  // Outputs "Doe"`}</code>
    </pre>
  </div>
);

export default CsharpAccessStrings;
