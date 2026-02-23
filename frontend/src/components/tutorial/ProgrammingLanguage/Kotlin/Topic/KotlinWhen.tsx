import React from "react";

const KotlinWhen: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Kotlin When
    </h1>

    <p className="text-lg  leading-relaxed mt-4">
      Instead of writing many <code>if..else</code> expressions, you can use the <code>when</code> expression, which is easier to read. 
      It is used to select one of many code blocks to be executed.
    </p>

    <h2 className="text-2xl font-bold mt-6">Example</h2>
    <p className="text-lg  mt-2">
      Use the weekday number to calculate the weekday name:
    </p>
    <pre className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      <code>{`val day = 4

val result = when (day) {
  1 -> "Monday"
  2 -> "Tuesday"
  3 -> "Wednesday"
  4 -> "Thursday"
  5 -> "Friday"
  6 -> "Saturday"
  7 -> "Sunday"
  else -> "Invalid day."
}
println(result)`}</code>
    </pre>
    <p className="text-lg  mt-2">
      // Outputs "Thursday" (day 4)
    </p>

    <h2 className="text-2xl font-bold mt-6">How It Works</h2>
    <p className="text-lg  mt-2">
      The <code>when</code> expression works similarly to the <code>switch</code> statement in Java:
    </p>
    <ul className="list-disc list-inside  mt-2">
      <li>The <code>when</code> variable (e.g., <code>day</code>) is evaluated once.</li>
      <li>Its value is compared with the values of each "branch".</li>
      <li>Each branch starts with a value, followed by an arrow (<code></code>) and a result.</li>
      <li>If there is a match, the associated block of code is executed.</li>
      <li><code>else</code> is used to specify code to run if there is no match.</li>
    </ul>
  </div>
);

export default KotlinWhen;
