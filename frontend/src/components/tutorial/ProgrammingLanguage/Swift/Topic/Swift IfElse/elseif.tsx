import React from "react";

const SwiftElseIf: React.FC = () => (
  <div className="mt-15">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Swift Else If Statement
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      Chain multiple conditions with <code>else if</code> for more than two branches.
      Swift evaluates conditions from top to bottom and executes the first matching block.
    </p>

    <h2 className="text-2xl font-bold mt-6">Basic Else If Syntax</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`if condition1 {
    // Executes when condition1 is true
} else if condition2 {
    // Executes when condition2 is true
} else if condition3 {
    // Executes when condition3 is true
} else {
    // Executes when none above are true
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Grade Calculator Example</h2>
    <p className="text-lg leading-relaxed mt-2">
      Use <code>else if</code> for additional conditions when the first <code>if</code> is false:
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`let score = 72

if score >= 90 {
    print("Grade: A")
} else if score >= 80 {
    print("Grade: B")
} else if score >= 70 {
    print("Grade: C")
} else if score >= 60 {
    print("Grade: D")
} else {
    print("Grade: F")
}

// Output: Grade: C`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Temperature Classification</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`let temperature = 28

if temperature >= 35 {
    print("It's hot! Stay hydrated.")
} else if temperature >= 25 {
    print("It's warm. Nice weather!")
} else if temperature >= 15 {
    print("It's cool. Bring a jacket.")
} else if temperature >= 5 {
    print("It's cold. Wear warm clothes.")
} else {
    print("It's freezing! Stay indoors.")
}

// Output: It's warm. Nice weather!`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Day of the Week</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`let dayNumber = 3

if dayNumber == 1 {
    print("Monday")
} else if dayNumber == 2 {
    print("Tuesday")
} else if dayNumber == 3 {
    print("Wednesday")
} else if dayNumber == 4 {
    print("Thursday")
} else if dayNumber == 5 {
    print("Friday")
} else if dayNumber == 6 {
    print("Saturday")
} else if dayNumber == 7 {
    print("Sunday")
} else {
    print("Invalid day number")
}

// Output: Wednesday`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Age Group Classification</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`let age = 25

if age < 0 {
    print("Invalid age")
} else if age < 13 {
    print("Child")
} else if age < 20 {
    print("Teenager")
} else if age < 60 {
    print("Adult")
} else {
    print("Senior")
}

// Output: Adult`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Multiple Conditions with Logical Operators</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`let hour = 14
let isWeekend = false

if hour < 6 {
    print("Good night")
} else if hour < 12 {
    print("Good morning")
} else if hour < 17 {
    print("Good afternoon")
} else if hour < 21 {
    print("Good evening")
} else {
    print("Good night")
}

// With multiple conditions
if isWeekend && hour >= 10 {
    print("Sleeping in!")
} else if !isWeekend && hour >= 9 && hour <= 17 {
    print("Work time")
} else {
    print("Free time")
}

// Output: Good afternoon
// Output: Work time`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">User Role Permissions</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`let userRole = "editor"

if userRole == "admin" {
    print("Full access: Read, Write, Delete, Manage Users")
} else if userRole == "editor" {
    print("Editor access: Read, Write")
} else if userRole == "viewer" {
    print("Viewer access: Read only")
} else if userRole == "guest" {
    print("Guest access: Limited read")
} else {
    print("Unknown role: No access")
}

// Output: Editor access: Read, Write`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Switch Alternative</h2>
    <p className="text-lg leading-relaxed mt-2">
      For many conditions based on a single value, consider using <code>switch</code>:
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`// Using else if (verbose for many cases)
let fruit = "apple"

if fruit == "apple" {
    print("Red or green")
} else if fruit == "banana" {
    print("Yellow")
} else if fruit == "orange" {
    print("Orange")
} else {
    print("Unknown fruit")
}

// Better with switch (cleaner for many cases)
switch fruit {
case "apple":
    print("Red or green")
case "banana":
    print("Yellow")
case "orange":
    print("Orange")
default:
    print("Unknown fruit")
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">When to Use Else If vs Switch</h2>
    <table className="min-w-full border border-gray-300 mt-4">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 px-4 py-2">Use Else If</th>
          <th className="border border-gray-300 px-4 py-2">Use Switch</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Range comparisons (x &gt; 10)</td>
          <td className="border border-gray-300 px-4 py-2">Exact value matching</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Complex conditions with &&, ||</td>
          <td className="border border-gray-300 px-4 py-2">Enum cases</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Few conditions (2-3)</td>
          <td className="border border-gray-300 px-4 py-2">Many discrete values</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Different variables in conditions</td>
          <td className="border border-gray-300 px-4 py-2">Single variable matching</td>
        </tr>
      </tbody>
    </table>

    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
      <p className="text-blue-700">
        <strong>Note:</strong> Swift evaluates conditions in order. Once a condition is true,
        remaining conditions are skipped. Order your conditions from most specific to most general.
      </p>
    </div>
  </div>
);

export default SwiftElseIf;
