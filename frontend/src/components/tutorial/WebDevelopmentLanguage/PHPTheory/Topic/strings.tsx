import React from "react";

const PhpStrings: React.FC = () => {
  return (
    <div className="p-4 space-y-6">
      <h1 className="text-3xl font-bold">PHP Strings</h1>

      <p>
        A string is a sequence of characters, such as <code>"Hello world!"</code>.
        In PHP, strings can be declared using either <strong>single quotes</strong> or{" "}
        <strong>double quotes</strong>.
      </p>

      <h2 className="text-2xl font-semibold">PHP Strings</h2>
      <p>You can output a string using single or double quotation marks:</p>

      <pre className="bg-gray-100 p-4 rounded-md overflow-auto">
{`echo "Hello";
echo 'Hello';`}
      </pre>

      <p className="text-yellow-700 font-semibold">
        Note: Double quotes process special characters and variables, while single quotes do NOT.
      </p>

      <h2 className="text-2xl font-semibold">Double or Single Quotes?</h2>

      <p>
        Double-quoted strings interpret variables and special characters, while single-quoted
        strings return the content exactly as written.
      </p>

      <h3 className="text-xl font-semibold mt-4">Double-Quoted Example</h3>

      <pre className="bg-gray-100 p-4 rounded-md overflow-auto">
{`$x = "John";
echo "Hello $x";   // Output: Hello John`}
      </pre>

      <h3 className="text-xl font-semibold mt-4">Single-Quoted Example</h3>

      <pre className="bg-gray-100 p-4 rounded-md overflow-auto">
{`$x = "John";
echo 'Hello $x';   // Output: Hello $x`}
      </pre>

      <h2 className="text-2xl font-semibold">String Length</h2>

      <p>The <code>strlen()</code> function returns the length of a string.</p>

      <pre className="bg-gray-100 p-4 rounded-md overflow-auto">
{`echo strlen("Hello world!");   // Output: 12`}
      </pre>

      <h2 className="text-2xl font-semibold">Word Count</h2>

      <p>The <code>str_word_count()</code> function counts the number of words in a string.</p>

      <pre className="bg-gray-100 p-4 rounded-md overflow-auto">
{`echo str_word_count("Hello world!");   // Output: 2`}
      </pre>

      <h2 className="text-2xl font-semibold">Search for Text Within a String</h2>

      <p>
        Use the <code>strpos()</code> function to search for a specific text within a string.
        It returns the position of the first match or <strong>FALSE</strong> if not found.
      </p>

      <pre className="bg-gray-100 p-4 rounded-md overflow-auto">
{`echo strpos("Hello world!", "world");   // Output: 6`}
      </pre>

      <p className="italic">
        Tip: String positions start from index <strong>0</strong>.
      </p>
    </div>
  );
};

export default PhpStrings;
