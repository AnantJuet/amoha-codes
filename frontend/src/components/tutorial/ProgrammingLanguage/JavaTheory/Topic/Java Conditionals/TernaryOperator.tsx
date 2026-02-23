import React from "react";

const TernaryOperator: React.FC = () => (
  <div className="mt-15">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Java Ternary Operator
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      The <b>ternary operator</b> (also called the conditional operator) is a shorthand way to write
      simple if-else statements. It is the only operator in Java that takes three operands.
    </p>

    <h2 className="text-2xl font-bold mt-6">Syntax</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`variable = (condition) ? valueIfTrue : valueIfFalse;`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">How It Works</h2>
    <ul className="list-disc pl-6 mt-3 space-y-2">
      <li>The <b>condition</b> is evaluated first</li>
      <li>If the condition is <b>true</b>, the first value (after ?) is returned</li>
      <li>If the condition is <b>false</b>, the second value (after :) is returned</li>
    </ul>

    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`int age = 20;

// Using ternary operator
String status = (age >= 18) ? "Adult" : "Minor";
System.out.println(status);  // Adult

// Equivalent if-else
String status2;
if (age >= 18) {
    status2 = "Adult";
} else {
    status2 = "Minor";
}`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Basic Examples</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`// Finding maximum
int a = 10, b = 20;
int max = (a > b) ? a : b;
System.out.println("Max: " + max);  // 20

// Finding minimum
int min = (a < b) ? a : b;
System.out.println("Min: " + min);  // 10

// Absolute value
int num = -5;
int abs = (num < 0) ? -num : num;
System.out.println("Absolute: " + abs);  // 5

// Check even or odd
int number = 7;
String evenOdd = (number % 2 == 0) ? "Even" : "Odd";
System.out.println(number + " is " + evenOdd);  // 7 is Odd

// Checking null
String name = null;
String displayName = (name != null) ? name : "Guest";
System.out.println("Hello, " + displayName);  // Hello, Guest`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Ternary in Print Statements</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`int score = 75;

// Direct use in println
System.out.println("Result: " + ((score >= 60) ? "Pass" : "Fail"));
// Output: Result: Pass

// Formatting with ternary
int items = 5;
System.out.println("You have " + items + " item" + ((items != 1) ? "s" : ""));
// Output: You have 5 items

items = 1;
System.out.println("You have " + items + " item" + ((items != 1) ? "s" : ""));
// Output: You have 1 item`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Nested Ternary Operators</h2>
    <p className="leading-relaxed mt-3">
      You can nest ternary operators, but this can reduce readability.
    </p>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`int score = 85;

// Nested ternary for grading
String grade = (score >= 90) ? "A" :
               (score >= 80) ? "B" :
               (score >= 70) ? "C" :
               (score >= 60) ? "D" : "F";

System.out.println("Grade: " + grade);  // Grade: B

// Finding largest of three numbers
int x = 10, y = 20, z = 15;
int largest = (x > y) ? ((x > z) ? x : z) : ((y > z) ? y : z);
System.out.println("Largest: " + largest);  // Largest: 20`}
      </pre>
    </div>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
      <p className="font-semibold">Caution</p>
      <p className="mt-2">
        While nested ternary operators are valid, they can make code hard to read.
        For complex conditions, prefer if-else statements or switch expressions.
      </p>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Ternary with Method Calls</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`// Calling different methods based on condition
public class TernaryMethods {
    public static void main(String[] args) {
        boolean isWeekend = true;

        // Call method based on condition
        String message = isWeekend ? getWeekendGreeting() : getWeekdayGreeting();
        System.out.println(message);
    }

    static String getWeekendGreeting() {
        return "Enjoy your weekend!";
    }

    static String getWeekdayGreeting() {
        return "Have a productive day!";
    }
}`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Ternary with Different Types</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`// Both expressions must be compatible types
boolean condition = true;

// int result
int num = condition ? 10 : 20;

// double result (int is promoted to double)
double value = condition ? 10 : 20.5;  // 10.0

// Object types
String text = condition ? "Yes" : "No";

// This won't compile - incompatible types
// int result = condition ? "Yes" : 10;  // Error!

// Wrapper classes with null
Integer nullableInt = condition ? 42 : null;`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">When to Use Ternary Operator</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Use Ternary When</th>
            <th className="border p-2">Use If-Else When</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border p-2">Simple condition with two outcomes</td><td className="border p-2">Multiple conditions (else-if)</td></tr>
          <tr><td className="border p-2">Assigning one of two values</td><td className="border p-2">Executing different code blocks</td></tr>
          <tr><td className="border p-2">Inline expressions in print/return</td><td className="border p-2">Complex logic with side effects</td></tr>
          <tr><td className="border p-2">Short, readable expressions</td><td className="border p-2">Need for debugging breakpoints</td></tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Practical Examples</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`import java.util.Scanner;

public class TernaryExamples {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Example 1: Discount calculation
        System.out.print("Enter purchase amount: $");
        double amount = scanner.nextDouble();

        // 10% discount for purchases over $100
        double discount = (amount > 100) ? amount * 0.10 : 0;
        double finalPrice = amount - discount;

        System.out.printf("Discount: $%.2f%n", discount);
        System.out.printf("Final Price: $%.2f%n", finalPrice);

        // Example 2: Sign determination
        System.out.print("Enter a number: ");
        int num = scanner.nextInt();

        String sign = (num > 0) ? "positive" :
                      (num < 0) ? "negative" : "zero";
        System.out.println("The number is " + sign);

        // Example 3: Leap year check
        System.out.print("Enter a year: ");
        int year = scanner.nextInt();

        boolean isLeapYear = ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0));
        String leapStatus = isLeapYear ? "is" : "is not";
        System.out.println(year + " " + leapStatus + " a leap year");

        scanner.close();
    }
}`}
      </pre>
    </div>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="font-semibold">Best Practices</p>
      <ul className="list-disc pl-6 mt-2 space-y-1">
        <li>Use for simple assignments, not complex logic</li>
        <li>Avoid nesting more than one level deep</li>
        <li>Use parentheses for clarity when combining with other operators</li>
        <li>Consider readability over brevity</li>
        <li>Both expressions should have compatible return types</li>
      </ul>
    </div>
  </div>
);

export default TernaryOperator;
