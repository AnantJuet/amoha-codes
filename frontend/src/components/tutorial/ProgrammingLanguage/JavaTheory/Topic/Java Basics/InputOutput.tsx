import React from "react";

const InputOutput: React.FC = () => (
  <div className="mt-15">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Java Input and Output
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      Java provides multiple ways to handle <b>input</b> (reading data) and <b>output</b> (displaying data).
      Understanding these mechanisms is essential for creating interactive programs.
    </p>

    <h2 className="text-2xl font-bold mt-6">Output in Java</h2>

    <h3 className="text-xl font-semibold mt-4">System.out.println()</h3>
    <p className="leading-relaxed mt-2">
      Prints text and moves to a new line.
    </p>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`System.out.println("Hello, World!");
System.out.println("Line 1");
System.out.println("Line 2");

// Output:
// Hello, World!
// Line 1
// Line 2`}
      </pre>
    </div>

    <h3 className="text-xl font-semibold mt-4">System.out.print()</h3>
    <p className="leading-relaxed mt-2">
      Prints text without moving to a new line.
    </p>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`System.out.print("Hello ");
System.out.print("World!");
System.out.println();  // Move to new line

// Output: Hello World!`}
      </pre>
    </div>

    <h3 className="text-xl font-semibold mt-4">System.out.printf()</h3>
    <p className="leading-relaxed mt-2">
      Formatted output using format specifiers.
    </p>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`String name = "Alice";
int age = 25;
double salary = 50000.50;

System.out.printf("Name: %s%n", name);
System.out.printf("Age: %d years%n", age);
System.out.printf("Salary: $%.2f%n", salary);

// Output:
// Name: Alice
// Age: 25 years
// Salary: $50000.50`}
      </pre>
    </div>

    <h3 className="text-xl font-semibold mt-4">Common Format Specifiers</h3>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Specifier</th>
            <th className="border p-2">Data Type</th>
            <th className="border p-2">Example</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border p-2">%s</td><td className="border p-2">String</td><td className="border p-2">printf("%s", "text")</td></tr>
          <tr><td className="border p-2">%d</td><td className="border p-2">Integer</td><td className="border p-2">printf("%d", 42)</td></tr>
          <tr><td className="border p-2">%f</td><td className="border p-2">Float/Double</td><td className="border p-2">printf("%f", 3.14)</td></tr>
          <tr><td className="border p-2">%.2f</td><td className="border p-2">Float (2 decimals)</td><td className="border p-2">printf("%.2f", 3.14159)</td></tr>
          <tr><td className="border p-2">%c</td><td className="border p-2">Character</td><td className="border p-2">printf("%c", 'A')</td></tr>
          <tr><td className="border p-2">%b</td><td className="border p-2">Boolean</td><td className="border p-2">printf("%b", true)</td></tr>
          <tr><td className="border p-2">%n</td><td className="border p-2">New line</td><td className="border p-2">printf("Line1%nLine2")</td></tr>
          <tr><td className="border p-2">%x</td><td className="border p-2">Hexadecimal</td><td className="border p-2">printf("%x", 255)</td></tr>
          <tr><td className="border p-2">%o</td><td className="border p-2">Octal</td><td className="border p-2">printf("%o", 8)</td></tr>
          <tr><td className="border p-2">%e</td><td className="border p-2">Scientific notation</td><td className="border p-2">printf("%e", 1234.5)</td></tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Input in Java</h2>

    <h3 className="text-xl font-semibold mt-4">Using Scanner Class</h3>
    <p className="leading-relaxed mt-2">
      The most common way to read user input. Import java.util.Scanner first.
    </p>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`import java.util.Scanner;

public class InputExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Reading a String
        System.out.print("Enter your name: ");
        String name = scanner.nextLine();

        // Reading an integer
        System.out.print("Enter your age: ");
        int age = scanner.nextInt();

        // Reading a double
        System.out.print("Enter your height: ");
        double height = scanner.nextDouble();

        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Height: " + height);

        scanner.close();  // Always close the scanner
    }
}`}
      </pre>
    </div>

    <h3 className="text-xl font-semibold mt-4">Scanner Methods</h3>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Method</th>
            <th className="border p-2">Description</th>
            <th className="border p-2">Example</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border p-2">nextLine()</td><td className="border p-2">Reads entire line as String</td><td className="border p-2">"Hello World"</td></tr>
          <tr><td className="border p-2">next()</td><td className="border p-2">Reads next word (until space)</td><td className="border p-2">"Hello"</td></tr>
          <tr><td className="border p-2">nextInt()</td><td className="border p-2">Reads an integer</td><td className="border p-2">42</td></tr>
          <tr><td className="border p-2">nextLong()</td><td className="border p-2">Reads a long integer</td><td className="border p-2">123456789L</td></tr>
          <tr><td className="border p-2">nextDouble()</td><td className="border p-2">Reads a double</td><td className="border p-2">3.14</td></tr>
          <tr><td className="border p-2">nextFloat()</td><td className="border p-2">Reads a float</td><td className="border p-2">3.14f</td></tr>
          <tr><td className="border p-2">nextBoolean()</td><td className="border p-2">Reads a boolean</td><td className="border p-2">true/false</td></tr>
          <tr><td className="border p-2">nextByte()</td><td className="border p-2">Reads a byte</td><td className="border p-2">127</td></tr>
          <tr><td className="border p-2">hasNext()</td><td className="border p-2">Checks if more input exists</td><td className="border p-2">true/false</td></tr>
        </tbody>
      </table>
    </div>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
      <p className="font-semibold">Common Issue: nextLine() after nextInt()</p>
      <p className="mt-2">
        When using <code className="bg-gray-200 px-1 rounded">nextInt()</code> followed by
        <code className="bg-gray-200 px-1 rounded">nextLine()</code>, the newline character from pressing
        Enter remains in the buffer. Add an extra <code className="bg-gray-200 px-1 rounded">nextLine()</code>
        to consume it.
      </p>
    </div>

    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`Scanner scanner = new Scanner(System.in);

System.out.print("Enter age: ");
int age = scanner.nextInt();
scanner.nextLine();  // Consume the leftover newline

System.out.print("Enter name: ");
String name = scanner.nextLine();  // Now works correctly`}
      </pre>
    </div>

    <h3 className="text-xl font-semibold mt-4">Using BufferedReader</h3>
    <p className="leading-relaxed mt-2">
      More efficient for reading large amounts of text. Requires exception handling.
    </p>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;

public class BufferedReaderExample {
    public static void main(String[] args) throws IOException {
        BufferedReader reader = new BufferedReader(
            new InputStreamReader(System.in)
        );

        System.out.print("Enter your name: ");
        String name = reader.readLine();

        System.out.print("Enter your age: ");
        int age = Integer.parseInt(reader.readLine());

        System.out.println("Hello, " + name + "! You are " + age);

        reader.close();
    }
}`}
      </pre>
    </div>

    <h3 className="text-xl font-semibold mt-4">Using Console Class</h3>
    <p className="leading-relaxed mt-2">
      Useful for reading passwords (hidden input). May not work in some IDEs.
    </p>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`import java.io.Console;

public class ConsoleExample {
    public static void main(String[] args) {
        Console console = System.console();

        if (console != null) {
            String username = console.readLine("Username: ");
            char[] password = console.readPassword("Password: ");

            System.out.println("Hello, " + username);
            // Clear password from memory for security
            java.util.Arrays.fill(password, ' ');
        } else {
            System.out.println("Console not available");
        }
    }
}`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">String Formatting</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`// Using String.format()
String name = "Bob";
int score = 95;
String formatted = String.format("Player %s scored %d points", name, score);
System.out.println(formatted);

// Width and alignment
System.out.printf("|%10s|%n", "right");     // Right-aligned
System.out.printf("|%-10s|%n", "left");     // Left-aligned
System.out.printf("|%10d|%n", 42);          // Right-aligned number
System.out.printf("|%-10d|%n", 42);         // Left-aligned number
System.out.printf("|%010d|%n", 42);         // Zero-padded

// Output:
// |     right|
// |left      |
// |        42|
// |42        |
// |0000000042|`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Practical Example</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`import java.util.Scanner;

public class StudentRegistration {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("=== Student Registration ===");

        System.out.print("Enter student ID: ");
        int studentId = scanner.nextInt();
        scanner.nextLine();  // Consume newline

        System.out.print("Enter full name: ");
        String name = scanner.nextLine();

        System.out.print("Enter GPA (0.0 - 4.0): ");
        double gpa = scanner.nextDouble();

        System.out.print("Enter major: ");
        scanner.nextLine();
        String major = scanner.nextLine();

        // Display formatted output
        System.out.println("\\n=== Registration Complete ===");
        System.out.printf("Student ID: %05d%n", studentId);
        System.out.printf("Name: %s%n", name);
        System.out.printf("GPA: %.2f%n", gpa);
        System.out.printf("Major: %s%n", major);

        String status = (gpa >= 3.5) ? "Honor Roll" : "Regular";
        System.out.printf("Status: %s%n", status);

        scanner.close();
    }
}`}
      </pre>
    </div>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="font-semibold">Best Practices</p>
      <ul className="list-disc pl-6 mt-2 space-y-1">
        <li>Always close Scanner/BufferedReader when done</li>
        <li>Use try-with-resources for automatic resource management</li>
        <li>Handle InputMismatchException when reading numbers</li>
        <li>Prefer BufferedReader for reading large files</li>
        <li>Use printf() for formatted output instead of string concatenation</li>
      </ul>
    </div>
  </div>
);

export default InputOutput;
