import React from "react";

const StringBuilder: React.FC = () => (
  <div className="mt-15">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Java StringBuilder and StringBuffer
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      Since Strings are immutable in Java, frequent modifications create many temporary objects,
      which can be inefficient. <b>StringBuilder</b> and <b>StringBuffer</b> are mutable alternatives
      designed for efficient string manipulation.
    </p>

    <h2 className="text-2xl font-bold mt-6">Why Use StringBuilder?</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`// Inefficient: Creates multiple String objects
String result = "";
for (int i = 0; i < 1000; i++) {
    result += i;  // Creates new String each iteration
}

// Efficient: Uses StringBuilder
StringBuilder sb = new StringBuilder();
for (int i = 0; i < 1000; i++) {
    sb.append(i);  // Modifies existing buffer
}
String result2 = sb.toString();`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">StringBuilder vs StringBuffer</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Feature</th>
            <th className="border p-2">StringBuilder</th>
            <th className="border p-2">StringBuffer</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border p-2">Thread Safety</td><td className="border p-2">Not thread-safe</td><td className="border p-2">Thread-safe (synchronized)</td></tr>
          <tr><td className="border p-2">Performance</td><td className="border p-2">Faster</td><td className="border p-2">Slower due to synchronization</td></tr>
          <tr><td className="border p-2">Introduced</td><td className="border p-2">Java 1.5</td><td className="border p-2">Java 1.0</td></tr>
          <tr><td className="border p-2">Use Case</td><td className="border p-2">Single-threaded operations</td><td className="border p-2">Multi-threaded operations</td></tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Creating StringBuilder</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`// Empty StringBuilder (default capacity: 16)
StringBuilder sb1 = new StringBuilder();

// With initial string
StringBuilder sb2 = new StringBuilder("Hello");

// With initial capacity
StringBuilder sb3 = new StringBuilder(100);

// From CharSequence
StringBuilder sb4 = new StringBuilder(sb2);`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Common Methods</h2>

    <h3 className="text-xl font-semibold mt-4">append() - Add to End</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`StringBuilder sb = new StringBuilder("Hello");

sb.append(" ");        // "Hello "
sb.append("World");    // "Hello World"
sb.append(123);        // "Hello World123"
sb.append(true);       // "Hello World123true"
sb.append('!');        // "Hello World123true!"

// Method chaining
StringBuilder sb2 = new StringBuilder()
    .append("Name: ")
    .append("John")
    .append(", Age: ")
    .append(25);
// "Name: John, Age: 25"`}
      </pre>
    </div>

    <h3 className="text-xl font-semibold mt-4">insert() - Add at Position</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`StringBuilder sb = new StringBuilder("Hello World");

sb.insert(6, "Java ");  // "Hello Java World"
sb.insert(0, "Say: ");  // "Say: Hello Java World"

// Insert at end (same as append)
sb.insert(sb.length(), "!");
// "Say: Hello Java World!"`}
      </pre>
    </div>

    <h3 className="text-xl font-semibold mt-4">delete() and deleteCharAt()</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`StringBuilder sb = new StringBuilder("Hello World!");

// delete(start, end) - Remove range
sb.delete(5, 11);  // "Hello!"

// deleteCharAt(index) - Remove single character
sb.deleteCharAt(5);  // "Hello"

// Clear the entire content
sb.delete(0, sb.length());  // ""
// or
sb.setLength(0);  // ""`}
      </pre>
    </div>

    <h3 className="text-xl font-semibold mt-4">replace() and setCharAt()</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`StringBuilder sb = new StringBuilder("Hello World");

// replace(start, end, str)
sb.replace(6, 11, "Java");  // "Hello Java"

// setCharAt(index, char)
sb.setCharAt(0, 'h');  // "hello Java"

// Replace all occurrences (using indexOf)
StringBuilder text = new StringBuilder("Java is great. Java is fun.");
int index;
while ((index = text.indexOf("Java")) != -1) {
    text.replace(index, index + 4, "Python");
}
// "Python is great. Python is fun."`}
      </pre>
    </div>

    <h3 className="text-xl font-semibold mt-4">reverse()</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`StringBuilder sb = new StringBuilder("Hello");

sb.reverse();  // "olleH"

// Check palindrome
String word = "radar";
StringBuilder sbCheck = new StringBuilder(word);
boolean isPalindrome = word.equals(sbCheck.reverse().toString());
// true`}
      </pre>
    </div>

    <h3 className="text-xl font-semibold mt-4">substring() and toString()</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`StringBuilder sb = new StringBuilder("Hello World");

// substring returns String, not StringBuilder
String sub1 = sb.substring(6);      // "World"
String sub2 = sb.substring(0, 5);   // "Hello"

// Convert to String
String result = sb.toString();  // "Hello World"

// charAt and indexOf work like String
char ch = sb.charAt(0);         // 'H'
int index = sb.indexOf("World"); // 6`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Capacity Management</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`StringBuilder sb = new StringBuilder();

// Default capacity is 16
System.out.println(sb.capacity());  // 16

sb.append("Hello World!");
System.out.println(sb.length());    // 12
System.out.println(sb.capacity());  // 16 (still fits)

// Ensure minimum capacity
sb.ensureCapacity(100);
System.out.println(sb.capacity());  // at least 100

// Trim to current size
sb.trimToSize();
System.out.println(sb.capacity());  // 12 (same as length)`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">StringBuffer Example</h2>
    <p className="leading-relaxed mt-3">
      StringBuffer has the same methods as StringBuilder but is thread-safe.
    </p>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`// StringBuffer for thread-safe operations
StringBuffer buffer = new StringBuffer("Hello");

buffer.append(" World");
buffer.insert(6, "Java ");
buffer.reverse();

String result = buffer.toString();

// Use StringBuffer when multiple threads modify the same string
// Use StringBuilder for better performance in single-threaded code`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Practical Example</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`public class StringBuilderDemo {
    public static void main(String[] args) {
        // Building HTML content
        StringBuilder html = new StringBuilder();
        html.append("<html>\\n")
            .append("  <head>\\n")
            .append("    <title>My Page</title>\\n")
            .append("  </head>\\n")
            .append("  <body>\\n");

        String[] items = {"Apple", "Banana", "Cherry"};
        html.append("    <ul>\\n");
        for (String item : items) {
            html.append("      <li>").append(item).append("</li>\\n");
        }
        html.append("    </ul>\\n");
        html.append("  </body>\\n")
            .append("</html>");

        System.out.println(html.toString());

        // Building CSV data
        StringBuilder csv = new StringBuilder();
        String[] headers = {"Name", "Age", "City"};
        String[][] data = {
            {"John", "25", "New York"},
            {"Jane", "30", "Los Angeles"}
        };

        csv.append(String.join(",", headers)).append("\\n");
        for (String[] row : data) {
            csv.append(String.join(",", row)).append("\\n");
        }
        System.out.println(csv.toString());
    }
}`}
      </pre>
    </div>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="font-semibold">Best Practices</p>
      <ul className="list-disc pl-6 mt-2 space-y-1">
        <li>Use StringBuilder for string concatenation in loops</li>
        <li>Set initial capacity if you know the approximate size</li>
        <li>Use StringBuffer only when thread safety is required</li>
        <li>Prefer String.join() or String.format() for simple cases</li>
        <li>Chain methods for cleaner code: <code className="bg-gray-200 px-1 rounded">sb.append(...).append(...)</code></li>
      </ul>
    </div>
  </div>
);

export default StringBuilder;
