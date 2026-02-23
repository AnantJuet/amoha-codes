import React from "react";

const IfStatement: React.FC = () => (
  <div className="mt-15">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Java If Statement
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      The <b>if statement</b> is the most basic control flow statement in Java. It allows you to
      execute a block of code only when a specified condition is <b>true</b>.
    </p>

    <h2 className="text-2xl font-bold mt-6">Syntax</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`if (condition) {
    // code to execute if condition is true
}`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">How It Works</h2>
    <p className="leading-relaxed mt-3">
      The condition inside the parentheses must evaluate to a boolean value (true or false).
      If the condition is true, the code inside the curly braces is executed.
      If false, the code is skipped.
    </p>

    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`int age = 20;

if (age >= 18) {
    System.out.println("You are an adult.");
}
// Output: You are an adult.

int score = 50;

if (score >= 60) {
    System.out.println("You passed!");
}
// No output (condition is false)`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Multiple Conditions</h2>
    <p className="leading-relaxed mt-3">
      You can combine multiple conditions using logical operators.
    </p>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`int age = 25;
boolean hasLicense = true;

// Using AND (&&) - both conditions must be true
if (age >= 18 && hasLicense) {
    System.out.println("You can drive.");
}

// Using OR (||) - at least one condition must be true
boolean isWeekend = false;
boolean isHoliday = true;

if (isWeekend || isHoliday) {
    System.out.println("No work today!");
}

// Using NOT (!) - reverses the condition
boolean isRaining = false;

if (!isRaining) {
    System.out.println("Let's go outside!");
}`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Nested If Statements</h2>
    <p className="leading-relaxed mt-3">
      You can place if statements inside other if statements.
    </p>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`int age = 25;
boolean hasID = true;

if (age >= 21) {
    if (hasID) {
        System.out.println("Entry allowed.");
    }
}

// Equivalent to:
if (age >= 21 && hasID) {
    System.out.println("Entry allowed.");
}`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Single Statement If</h2>
    <p className="leading-relaxed mt-3">
      If the if block contains only one statement, you can omit the curly braces.
      However, this is not recommended for code readability and maintenance.
    </p>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`int x = 10;

// Without braces (not recommended)
if (x > 5)
    System.out.println("x is greater than 5");

// With braces (recommended)
if (x > 5) {
    System.out.println("x is greater than 5");
}`}
      </pre>
    </div>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
      <p className="font-semibold">Best Practice</p>
      <p className="mt-2">
        Always use curly braces, even for single statements. This prevents bugs when adding
        more statements later and improves code readability.
      </p>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Common Conditions</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`// Comparing numbers
int num = 10;
if (num > 0) { /* positive */ }
if (num < 0) { /* negative */ }
if (num == 0) { /* zero */ }
if (num != 0) { /* not zero */ }
if (num >= 5 && num <= 15) { /* between 5 and 15 */ }

// Checking null
String text = null;
if (text == null) {
    System.out.println("Text is null");
}

// Checking string content
String name = "Java";
if (name != null && name.equals("Java")) {
    System.out.println("Name is Java");
}

// Better: null-safe comparison
if ("Java".equals(name)) {
    System.out.println("Name is Java");
}

// Checking array/collection
int[] arr = {1, 2, 3};
if (arr != null && arr.length > 0) {
    System.out.println("Array has elements");
}`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Practical Example</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`import java.util.Scanner;

public class VotingEligibility {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter your age: ");
        int age = scanner.nextInt();

        System.out.print("Are you a citizen? (true/false): ");
        boolean isCitizen = scanner.nextBoolean();

        if (age >= 18) {
            System.out.println("You meet the age requirement.");
        }

        if (isCitizen) {
            System.out.println("You are a citizen.");
        }

        if (age >= 18 && isCitizen) {
            System.out.println("You are eligible to vote!");
        }

        scanner.close();
    }
}`}
      </pre>
    </div>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="font-semibold">Common Mistakes to Avoid</p>
      <ul className="list-disc pl-6 mt-2 space-y-1">
        <li>Using <code className="bg-gray-200 px-1 rounded">=</code> instead of <code className="bg-gray-200 px-1 rounded">==</code> for comparison</li>
        <li>Using <code className="bg-gray-200 px-1 rounded">==</code> to compare strings (use <code className="bg-gray-200 px-1 rounded">.equals()</code>)</li>
        <li>Forgetting that conditions must be boolean expressions</li>
        <li>Not handling null values before method calls</li>
      </ul>
    </div>
  </div>
);

export default IfStatement;
