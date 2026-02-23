import React from "react";

const KotlinStrings: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Kotlin Strings
    </h1>

    <p className="text-lg  leading-relaxed mt-4">
      Strings are used for storing text. A string contains a collection of characters
      surrounded by double quotes:
    </p>

    <pre className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      <code>var greeting = "Hello"</code>
    </pre>

    <p className="text-lg  mt-4">
      Unlike Java, you do not have to specify that the variable should be a{" "}
      <code>String</code>. Kotlin is smart enough to understand that the{" "}
      <code>greeting</code> variable is a String because of the double quotes.
    </p>

    <h2 className="text-2xl font-bold mt-6">Specifying Type</h2>
    <pre className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      <code>var greeting: String = "Hello"</code>
    </pre>

    <p className="text-lg  mt-4">
      If you want to create a String without assigning the value (and assign it later), 
      you must specify the type:
    </p>

    <pre className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      <code>{`var name: String
name = "John"
println(name)`}</code>
    </pre>

    <p className="text-lg  mt-4">
      But this will generate an error:
    </p>

    <pre className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      <code>{`var name
name = "John"
println(name)`}</code>
    </pre>

    <h2 className="text-2xl font-bold mt-6">Access a String</h2>
    <p className="text-lg  mt-2">
      You can access characters in a string using index numbers (starting from 0):
    </p>

    <pre className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      <code>{`var txt = "Hello World"
println(txt[0]) // H
println(txt[2]) // l`}</code>
    </pre>

    <h2 className="text-2xl font-bold mt-6">String Length</h2>
    <p className="text-lg  mt-2">
      You can find the length of a string using the <code>.length</code> property:
    </p>

    <pre className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      <code>{`var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
println("The length of the txt string is: " + txt.length)`}</code>
    </pre>

    <h2 className="text-2xl font-bold mt-6">String Functions</h2>
    <p className="text-lg  mt-2">
      Some useful functions are <code>uppercase()</code> and <code>lowercase()</code>:
    </p>

    <pre className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      <code>{`var txt = "Hello World"
println(txt.uppercase())   // HELLO WORLD
println(txt.lowercase())   // hello world`}</code>
    </pre>

    <h2 className="text-2xl font-bold mt-6">Comparing Strings</h2>
    <pre className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      <code>{`var txt1 = "Hello World"
var txt2 = "Hello World"
println(txt1.compareTo(txt2))  // 0 (they are equal)`}</code>
    </pre>

    <h2 className="text-2xl font-bold mt-6">Finding a String in a String</h2>
    <pre className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      <code>{`var txt = "Please locate where 'locate' occurs!"
println(txt.indexOf("locate"))  // 7`}</code>
    </pre>

    <h2 className="text-2xl font-bold mt-6">Quotes Inside a String</h2>
    <p className="text-lg  mt-2">
      To use quotes inside a string, use single quotes:
    </p>

    <pre className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      <code>{`var txt1 = "It's alright"
var txt2 = "That's great"`}</code>
    </pre>

    <h2 className="text-2xl font-bold mt-6">String Concatenation</h2>
    <pre className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      <code>{`var firstName = "John"
var lastName = "Doe"
println(firstName + " " + lastName)`}</code>
    </pre>

    <p className="text-lg  mt-2">
      You can also use <code>plus()</code>:
    </p>

    <pre className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      <code>{`var firstName = "John "
var lastName = "Doe"
println(firstName.plus(lastName))`}</code>
    </pre>

    <h2 className="text-2xl font-bold mt-6">String Templates / Interpolation</h2>
    <p className="text-lg  mt-2">
      String templates allow embedding variables using the <code>$</code> symbol:
    </p>

    <pre className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      <code>{`var firstName = "John"
var lastName = "Doe"
println("My name is $firstName $lastName")`}</code>
    </pre>
  </div>
);

export default KotlinStrings;
