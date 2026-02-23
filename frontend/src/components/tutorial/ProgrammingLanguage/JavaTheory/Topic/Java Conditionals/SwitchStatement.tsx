import React from "react";

const SwitchStatement: React.FC = () => (
  <div className="mt-15">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Java Switch Statement
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      The <b>switch statement</b> is used to select one of many code blocks to execute based on
      the value of an expression. It is cleaner and more readable than multiple if-else statements
      when comparing a single variable against many values.
    </p>

    <h2 className="text-2xl font-bold mt-6">Traditional Switch Syntax</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`switch (expression) {
    case value1:
        // code block
        break;
    case value2:
        // code block
        break;
    case value3:
        // code block
        break;
    default:
        // default code block
}`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Basic Example</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`int day = 3;
String dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}

System.out.println(dayName);  // Wednesday`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">The break Statement</h2>
    <p className="leading-relaxed mt-3">
      The <code className="bg-gray-200 px-1 rounded">break</code> statement exits the switch block.
      Without it, execution continues to the next case (fall-through).
    </p>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`// Without break (fall-through behavior)
int num = 2;

switch (num) {
    case 1:
        System.out.println("One");
    case 2:
        System.out.println("Two");
    case 3:
        System.out.println("Three");
    default:
        System.out.println("Default");
}
// Output:
// Two
// Three
// Default`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Multiple Cases</h2>
    <p className="leading-relaxed mt-3">
      You can group multiple cases together when they should execute the same code.
    </p>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`int month = 4;
String season;

switch (month) {
    case 12:
    case 1:
    case 2:
        season = "Winter";
        break;
    case 3:
    case 4:
    case 5:
        season = "Spring";
        break;
    case 6:
    case 7:
    case 8:
        season = "Summer";
        break;
    case 9:
    case 10:
    case 11:
        season = "Fall";
        break;
    default:
        season = "Invalid month";
}

System.out.println(season);  // Spring`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Switch with Strings</h2>
    <p className="leading-relaxed mt-3">
      Since Java 7, you can use Strings in switch statements.
    </p>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`String command = "start";

switch (command.toLowerCase()) {
    case "start":
        System.out.println("Starting the application...");
        break;
    case "stop":
        System.out.println("Stopping the application...");
        break;
    case "restart":
        System.out.println("Restarting the application...");
        break;
    case "status":
        System.out.println("Application is running.");
        break;
    default:
        System.out.println("Unknown command: " + command);
}`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Switch with Enums</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`enum Color { RED, GREEN, BLUE, YELLOW }

Color color = Color.GREEN;

switch (color) {
    case RED:
        System.out.println("Stop!");
        break;
    case GREEN:
        System.out.println("Go!");
        break;
    case YELLOW:
        System.out.println("Caution!");
        break;
    case BLUE:
        System.out.println("Calm");
        break;
}
// Output: Go!`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Enhanced Switch (Java 14+)</h2>
    <p className="leading-relaxed mt-3">
      Java 14 introduced enhanced switch expressions with arrow syntax.
    </p>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`int day = 3;

// Arrow syntax - no break needed, no fall-through
String dayType = switch (day) {
    case 1, 2, 3, 4, 5 -> "Weekday";
    case 6, 7 -> "Weekend";
    default -> "Invalid";
};

System.out.println(dayType);  // Weekday

// With multiple statements using block
String result = switch (day) {
    case 1, 2, 3, 4, 5 -> {
        System.out.println("Working day");
        yield "Weekday";  // yield returns value from block
    }
    case 6, 7 -> {
        System.out.println("Rest day");
        yield "Weekend";
    }
    default -> "Invalid";
};`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Switch Expression (Returning Values)</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`// Traditional approach
int month = 2;
int days;
switch (month) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        days = 31;
        break;
    case 4: case 6: case 9: case 11:
        days = 30;
        break;
    case 2:
        days = 28;  // Simplified, ignoring leap year
        break;
    default:
        days = 0;
}

// Modern switch expression (Java 14+)
int daysModern = switch (month) {
    case 1, 3, 5, 7, 8, 10, 12 -> 31;
    case 4, 6, 9, 11 -> 30;
    case 2 -> 28;
    default -> 0;
};`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Pattern Matching in Switch (Java 21+)</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`// Pattern matching with switch (Java 21+)
Object obj = "Hello";

String result = switch (obj) {
    case Integer i -> "Integer: " + i;
    case String s -> "String: " + s;
    case Double d -> "Double: " + d;
    case null -> "Null value";
    default -> "Unknown type";
};

System.out.println(result);  // String: Hello

// With guards (when clause)
int number = 15;
String category = switch (number) {
    case Integer n when n < 0 -> "Negative";
    case Integer n when n == 0 -> "Zero";
    case Integer n when n < 10 -> "Single digit";
    case Integer n when n < 100 -> "Two digits";
    default -> "Large number";
};`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Switch Supported Types</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Type</th>
            <th className="border p-2">Supported Since</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border p-2">byte, short, int, char</td><td className="border p-2">Java 1.0</td></tr>
          <tr><td className="border p-2">Byte, Short, Integer, Character</td><td className="border p-2">Java 5</td></tr>
          <tr><td className="border p-2">Enum</td><td className="border p-2">Java 5</td></tr>
          <tr><td className="border p-2">String</td><td className="border p-2">Java 7</td></tr>
          <tr><td className="border p-2">Pattern matching</td><td className="border p-2">Java 21</td></tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Practical Example</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`import java.util.Scanner;

public class Calculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter first number: ");
        double num1 = scanner.nextDouble();

        System.out.print("Enter operator (+, -, *, /): ");
        char operator = scanner.next().charAt(0);

        System.out.print("Enter second number: ");
        double num2 = scanner.nextDouble();

        double result = switch (operator) {
            case '+' -> num1 + num2;
            case '-' -> num1 - num2;
            case '*' -> num1 * num2;
            case '/' -> {
                if (num2 == 0) {
                    System.out.println("Error: Division by zero!");
                    yield Double.NaN;
                }
                yield num1 / num2;
            }
            default -> {
                System.out.println("Invalid operator!");
                yield Double.NaN;
            }
        };

        System.out.println("Result: " + result);
        scanner.close();
    }
}`}
      </pre>
    </div>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="font-semibold">Best Practices</p>
      <ul className="list-disc pl-6 mt-2 space-y-1">
        <li>Always include a default case to handle unexpected values</li>
        <li>Use enhanced switch (Java 14+) for cleaner syntax</li>
        <li>Prefer switch over multiple if-else when comparing single variable</li>
        <li>Be aware of fall-through in traditional switch - use break</li>
        <li>Switch expressions must be exhaustive (cover all cases or have default)</li>
      </ul>
    </div>
  </div>
);

export default SwitchStatement;
