import React from "react";

const ForLoop: React.FC = () => (
  <div className="mt-15">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Java For Loop
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      The <b>for loop</b> is used to execute a block of code a specific number of times.
      It is ideal when you know in advance how many times you want to iterate.
    </p>

    <h2 className="text-2xl font-bold mt-6">Syntax</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`for (initialization; condition; update) {
    // code to be executed
}`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Components Explained</h2>
    <ul className="list-disc pl-6 mt-3 space-y-2">
      <li><b>Initialization:</b> Executed once before the loop starts (e.g., <code className="bg-gray-200 px-1 rounded">int i = 0</code>)</li>
      <li><b>Condition:</b> Checked before each iteration; loop continues while true</li>
      <li><b>Update:</b> Executed after each iteration (e.g., <code className="bg-gray-200 px-1 rounded">i++</code>)</li>
    </ul>

    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`// Print numbers 1 to 5
for (int i = 1; i <= 5; i++) {
    System.out.println(i);
}
// Output: 1 2 3 4 5 (each on new line)

// How it works:
// 1. int i = 1  (initialization)
// 2. i <= 5?   (true, execute body)
// 3. print 1
// 4. i++       (i becomes 2)
// 5. i <= 5?   (true, execute body)
// ... continues until i = 6, then loop ends`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Basic Examples</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`// Counting down
for (int i = 5; i >= 1; i--) {
    System.out.println(i);
}
// Output: 5 4 3 2 1

// Counting by 2 (even numbers)
for (int i = 0; i <= 10; i += 2) {
    System.out.print(i + " ");
}
// Output: 0 2 4 6 8 10

// Multiplication table
int num = 5;
for (int i = 1; i <= 10; i++) {
    System.out.println(num + " x " + i + " = " + (num * i));
}`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Enhanced For Loop (For-Each)</h2>
    <p className="leading-relaxed mt-3">
      The enhanced for loop simplifies iteration over arrays and collections.
    </p>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`// Syntax
for (dataType item : collection) {
    // code using item
}

// Array example
int[] numbers = {1, 2, 3, 4, 5};
for (int num : numbers) {
    System.out.print(num + " ");
}
// Output: 1 2 3 4 5

// String array
String[] fruits = {"Apple", "Banana", "Cherry"};
for (String fruit : fruits) {
    System.out.println(fruit);
}

// With List
import java.util.ArrayList;
ArrayList<String> names = new ArrayList<>();
names.add("Alice");
names.add("Bob");

for (String name : names) {
    System.out.println("Hello, " + name);
}`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Iterating Over Strings</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`String text = "Hello";

// Traditional for loop
for (int i = 0; i < text.length(); i++) {
    System.out.print(text.charAt(i) + " ");
}
// Output: H e l l o

// Enhanced for loop with toCharArray()
for (char c : text.toCharArray()) {
    System.out.print(c + " ");
}
// Output: H e l l o`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Multiple Variables</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`// Multiple initialization and update
for (int i = 0, j = 10; i < j; i++, j--) {
    System.out.println("i = " + i + ", j = " + j);
}
// Output:
// i = 0, j = 10
// i = 1, j = 9
// i = 2, j = 8
// i = 3, j = 7
// i = 4, j = 6

// Two arrays simultaneously
int[] a = {1, 2, 3};
int[] b = {4, 5, 6};
for (int i = 0; i < a.length && i < b.length; i++) {
    System.out.println(a[i] + " + " + b[i] + " = " + (a[i] + b[i]));
}`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Infinite Loop</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`// All parts are optional
for (;;) {
    // This runs forever unless break is used
    System.out.println("Running...");
    break;  // Exit after one iteration
}

// Equivalent to:
for (; true; ) {
    // Infinite loop
}`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Practical Examples</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`// Calculate sum of 1 to 100
int sum = 0;
for (int i = 1; i <= 100; i++) {
    sum += i;
}
System.out.println("Sum: " + sum);  // 5050

// Calculate factorial
int n = 5;
long factorial = 1;
for (int i = 1; i <= n; i++) {
    factorial *= i;
}
System.out.println(n + "! = " + factorial);  // 5! = 120

// Find average of array
double[] scores = {85.5, 90.0, 78.5, 92.0, 88.5};
double total = 0;
for (double score : scores) {
    total += score;
}
double average = total / scores.length;
System.out.printf("Average: %.2f%n", average);

// Print pattern
for (int i = 1; i <= 5; i++) {
    for (int j = 1; j <= i; j++) {
        System.out.print("* ");
    }
    System.out.println();
}
// Output:
// *
// * *
// * * *
// * * * *
// * * * * *`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">For Loop vs Enhanced For Loop</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Traditional For Loop</th>
            <th className="border p-2">Enhanced For Loop</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border p-2">Access to index</td><td className="border p-2">No index access</td></tr>
          <tr><td className="border p-2">Can modify collection</td><td className="border p-2">Read-only iteration</td></tr>
          <tr><td className="border p-2">More control (skip, reverse)</td><td className="border p-2">Simpler syntax</td></tr>
          <tr><td className="border p-2">Works with any loop logic</td><td className="border p-2">Only for arrays/collections</td></tr>
        </tbody>
      </table>
    </div>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="font-semibold">Best Practices</p>
      <ul className="list-disc pl-6 mt-2 space-y-1">
        <li>Use enhanced for-each when you don't need the index</li>
        <li>Declare loop variable in the loop to limit scope</li>
        <li>Avoid modifying the collection during for-each iteration</li>
        <li>Cache array length for performance in tight loops</li>
        <li>Use meaningful variable names (i for index, item for elements)</li>
      </ul>
    </div>
  </div>
);

export default ForLoop;
