import React from "react";

const KotlinVariables: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Kotlin Variables
    </h1>

    <p className="text-lg  mt-6 leading-relaxed">
      Variables are containers for storing data values in Kotlin. You can create
      variables using either <b>var</b> or <b>val</b> keywords, and assign them a
      value using the equal sign (<b>=</b>).
    </p>

    <h2 className="text-2xl font-bold  mt-8">Syntax</h2>
    <div className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      <pre>{`var variableName = value
val variableName = value`}</pre>
    </div>

    <h2 className="text-2xl font-bold  mt-8">Example</h2>
    <div className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      <pre>{`var name = "John"
val birthyear = 1975

println(name)          // Print the value of name
println(birthyear)     // Print the value of birthyear`}</pre>
    </div>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-xl mt-6">
      <p className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
        ⚡ <b>Note:</b> Variables declared with <b>var</b> can be changed, while
        those declared with <b>val</b> cannot be modified.
      </p>
    </div>

    <h2 className="text-2xl font-bold  mt-8">Variable Type</h2>
    <p className="text-lg  mt-4 leading-relaxed">
      In Kotlin, you don’t always need to specify the data type — Kotlin can
      automatically determine it based on the value assigned.
    </p>

    <div className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      <pre>{`var name = "John"      // String (text)
val birthyear = 1975   // Int (number)

println(name)
println(birthyear)`}</pre>
    </div>

    <p className="text-lg  mt-4 leading-relaxed">
      You can also explicitly specify the data type if you prefer:
    </p>

    <div className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      <pre>{`var name: String = "John"
val birthyear: Int = 1975

println(name)
println(birthyear)`}</pre>
    </div>

    <h2 className="text-2xl font-bold  mt-8">
      Declaring Variables Without Assigning Values
    </h2>
    <p className="text-lg  mt-4 leading-relaxed">
      You can declare a variable without assigning it a value, but only if you
      specify its type.
    </p>

    <div className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      <pre>{`// This works fine
var name: String
name = "John"
println(name)`}</pre>
    </div>

    <p className="text-lg  mt-4 leading-relaxed">
      Without specifying a type, it will generate an error:
    </p>

    <div className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      <pre>{`// This will cause an error
var name
name = "John"
println(name)`}</pre>
    </div>

    <h2 className="text-2xl font-bold  mt-8">Notes on val</h2>
    <p className="text-lg  mt-4 leading-relaxed">
      Variables declared with <b>val</b> cannot be changed once assigned:
    </p>

    <div className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      <pre>{`val name = "John"
name = "Robert"  // Error (Val cannot be reassigned)
println(name)`}</pre>
    </div>

    <p className="text-lg  mt-4 leading-relaxed">
      With <b>var</b>, however, you can change the value anytime:
    </p>

    <div className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      <pre>{`var name = "John"
name = "Robert"
println(name)`}</pre>
    </div>

    <h2 className="text-2xl font-bold  mt-8">
      When to Use val?
    </h2>
    <p className="text-lg  mt-4 leading-relaxed">
      Use <b>val</b> when you want a constant value that shouldn’t change — for
      example, mathematical constants like <b>PI</b>.
    </p>

    <div className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      <pre>{`val pi = 3.14159265359
println(pi)`}</pre>
    </div>

    <h2 className="text-2xl font-bold  mt-8">
      Displaying Variables
    </h2>
    <p className="text-lg  mt-4 leading-relaxed">
      You can print variables using <b>println()</b>. To combine text with
      variables, use the <b>+</b> operator:
    </p>

    <div className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      <pre>{`val name = "John"
println("Hello " + name)`}</pre>
    </div>

    <p className="text-lg  mt-4 leading-relaxed">
      You can also combine multiple variables or add numeric values:
    </p>

    <div className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      <pre>{`val firstName = "John "
val lastName = "Doe"
val fullName = firstName + lastName
println(fullName)

val x = 5
val y = 6
println(x + y)  // Output: 11`}</pre>
    </div>

    <h2 className="text-2xl font-bold  mt-8">
      Variable Naming Rules
    </h2>
    <ul className="list-disc pl-6 text-lg  mt-4 space-y-2">
      <li>Names can contain letters, digits, underscores, and dollar signs</li>
      <li>Names should start with a letter</li>
      <li>Names are case-sensitive</li>
      <li>
        Names should start with a lowercase letter and cannot contain spaces
      </li>
      <li>Reserved words cannot be used as variable names</li>
    </ul>

    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-xl mt-6">
      <p className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
        💡 <b>Tip:</b> Use <b>camelCase</b> for variable names, such as{" "}
        <b>firstName</b>, <b>totalAmount</b>, or <b>userScore</b> — it improves
        readability.
      </p>
    </div>
  </div>
);

export default KotlinVariables;
