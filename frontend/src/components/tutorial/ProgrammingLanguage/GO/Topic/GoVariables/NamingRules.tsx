import React from "react";

const GoNamingRules: React.FC = () => (
  <div className="mt-17  dark:text-white space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Go Variable Naming Rules
    </h1>

    <p>
      A variable can have a short name (like <b>x</b> and <b>y</b>) or a more descriptive name 
      (like <b>age</b>, <b>price</b>, <b>carname</b>, etc.).
    </p>

    <h2 className="text-2xl font-bold mt-6">Go Variable Naming Rules</h2>
    <p>The following are the rules for naming variables in Go:</p>

    <ul className="list-disc list-inside ml-6 space-y-1">
      <li>A variable name must start with a letter or an underscore character (<b>_</b>).</li>
      <li>A variable name cannot start with a digit.</li>
      <li>
        A variable name can only contain alpha-numeric characters and underscores 
        (<b>a-z</b>, <b>A-Z</b>, <b>0-9</b>, and <b>_</b>).
      </li>
      <li>Variable names are case-sensitive (<b>age</b>, <b>Age</b>, and <b>AGE</b> are three different variables).</li>
      <li>There is no limit on the length of a variable name.</li>
      <li>A variable name cannot contain spaces.</li>
      <li>The variable name cannot be any Go keywords.</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Multi-Word Variable Names</h2>
    <p>
      Variable names with more than one word can be difficult to read.
      To make them easier to understand, Go developers use specific naming conventions.
    </p>

    <h3 className="text-xl font-semibold mt-4">Camel Case</h3>
    <p>
      Each word, except the first, starts with a capital letter.
    </p>
    <div className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      myVariableName = "John"
    </div>

    <h3 className="text-xl font-semibold mt-4">Pascal Case</h3>
    <p>
      Each word starts with a capital letter.
    </p>
    <div className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      MyVariableName = "John"
    </div>

    <h3 className="text-xl font-semibold mt-4">Snake Case</h3>
    <p>
      Each word is separated by an underscore character.
    </p>
    <div className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      my_variable_name = "John"
    </div>
  </div>
);

export default GoNamingRules;
