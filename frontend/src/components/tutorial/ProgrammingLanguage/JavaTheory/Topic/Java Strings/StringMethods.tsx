import React from "react";

const StringMethods: React.FC = () => (
  <div className="mt-15">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Java String Methods
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      The Java String class provides numerous methods for manipulating and working with strings.
      Here are the most commonly used methods with examples.
    </p>

    <h2 className="text-2xl font-bold mt-6">Length and Character Methods</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`String text = "Hello, World!";

// length() - Returns the number of characters
int len = text.length();  // 13

// charAt() - Returns character at specified index
char ch = text.charAt(0);  // 'H'
char last = text.charAt(text.length() - 1);  // '!'

// toCharArray() - Converts to character array
char[] chars = text.toCharArray();

// isEmpty() - Checks if string has zero length
boolean empty = "".isEmpty();     // true
boolean notEmpty = text.isEmpty(); // false

// isBlank() (Java 11+) - Checks if empty or only whitespace
boolean blank = "   ".isBlank();  // true`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Case Conversion Methods</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`String text = "Hello World";

// toUpperCase() - Converts to uppercase
String upper = text.toUpperCase();  // "HELLO WORLD"

// toLowerCase() - Converts to lowercase
String lower = text.toLowerCase();  // "hello world"

// Example: Case-insensitive comparison
String input = "JAVA";
boolean match = input.toLowerCase().equals("java");  // true`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Searching Methods</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`String text = "Java programming is fun. Java is powerful!";

// indexOf() - Returns first occurrence index (-1 if not found)
int index1 = text.indexOf("Java");      // 0
int index2 = text.indexOf("is");        // 17
int notFound = text.indexOf("Python");  // -1

// indexOf() with start position
int index3 = text.indexOf("Java", 5);   // 25

// lastIndexOf() - Returns last occurrence index
int lastIndex = text.lastIndexOf("Java");  // 25

// contains() - Checks if substring exists
boolean hasJava = text.contains("Java");    // true
boolean hasPython = text.contains("Python"); // false

// startsWith() - Checks prefix
boolean startsJ = text.startsWith("Java");  // true

// endsWith() - Checks suffix
boolean endsExclaim = text.endsWith("!");   // true`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Substring Methods</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`String text = "Hello, World!";

// substring(beginIndex) - From index to end
String sub1 = text.substring(7);     // "World!"

// substring(beginIndex, endIndex) - From start to end (exclusive)
String sub2 = text.substring(0, 5);  // "Hello"
String sub3 = text.substring(7, 12); // "World"

// Extracting parts of a string
String email = "user@example.com";
int atIndex = email.indexOf("@");
String username = email.substring(0, atIndex);        // "user"
String domain = email.substring(atIndex + 1);          // "example.com"`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Trim and Strip Methods</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`String text = "   Hello World   ";

// trim() - Removes leading and trailing whitespace
String trimmed = text.trim();  // "Hello World"

// strip() (Java 11+) - Better Unicode support
String stripped = text.strip();  // "Hello World"

// stripLeading() (Java 11+) - Remove leading whitespace
String stripLeft = text.stripLeading();  // "Hello World   "

// stripTrailing() (Java 11+) - Remove trailing whitespace
String stripRight = text.stripTrailing();  // "   Hello World"`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Replace Methods</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`String text = "Java is great. Java is fun!";

// replace(char, char) - Replace all occurrences of a character
String replaced1 = "Hello".replace('l', 'x');  // "Hexxo"

// replace(String, String) - Replace all occurrences of a string
String replaced2 = text.replace("Java", "Python");
// "Python is great. Python is fun!"

// replaceFirst() - Replace only first occurrence
String replaced3 = text.replaceFirst("Java", "Python");
// "Python is great. Java is fun!"

// replaceAll() - Replace using regex
String digits = "a1b2c3";
String noDigits = digits.replaceAll("[0-9]", "");  // "abc"
String noLetters = digits.replaceAll("[a-z]", ""); // "123"`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Split and Join Methods</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`// split() - Split string into array
String csv = "Apple,Banana,Cherry,Date";
String[] fruits = csv.split(",");
// fruits = ["Apple", "Banana", "Cherry", "Date"]

// Split with limit
String[] limited = csv.split(",", 2);
// limited = ["Apple", "Banana,Cherry,Date"]

// Split on whitespace
String sentence = "Java is awesome";
String[] words = sentence.split("\\\\s+");
// words = ["Java", "is", "awesome"]

// String.join() (Java 8+) - Join array into string
String joined = String.join("-", "2024", "01", "15");
// "2024-01-15"

String[] parts = {"Hello", "World"};
String result = String.join(" ", parts);  // "Hello World"`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Comparison Methods</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`String s1 = "Hello";
String s2 = "Hello";
String s3 = "HELLO";
String s4 = "World";

// equals() - Compare content
boolean eq1 = s1.equals(s2);  // true
boolean eq2 = s1.equals(s3);  // false

// equalsIgnoreCase() - Case-insensitive comparison
boolean eq3 = s1.equalsIgnoreCase(s3);  // true

// compareTo() - Lexicographic comparison
int cmp1 = s1.compareTo(s4);  // negative (H < W)
int cmp2 = s4.compareTo(s1);  // positive (W > H)
int cmp3 = s1.compareTo(s2);  // 0 (equal)

// compareToIgnoreCase()
int cmp4 = "abc".compareToIgnoreCase("ABC");  // 0`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Formatting Methods</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`// String.format() - Create formatted strings
String formatted = String.format("Name: %s, Age: %d", "John", 25);
// "Name: John, Age: 25"

// Formatting numbers
String price = String.format("Price: $%.2f", 19.99);
// "Price: $19.99"

// Padding
String padded = String.format("%10s", "Hi");      // "        Hi"
String padLeft = String.format("%-10s", "Hi");    // "Hi        "
String zeroPad = String.format("%05d", 42);       // "00042"

// formatted() method (Java 15+)
String msg = "Hello %s, you have %d messages".formatted("Alice", 5);
// "Hello Alice, you have 5 messages"`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Other Useful Methods</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`// valueOf() - Convert other types to String
String intStr = String.valueOf(123);      // "123"
String doubleStr = String.valueOf(3.14);  // "3.14"
String boolStr = String.valueOf(true);    // "true"

// repeat() (Java 11+) - Repeat string
String repeated = "Ha".repeat(3);  // "HaHaHa"

// lines() (Java 11+) - Split into stream of lines
String multiline = "Line1\\nLine2\\nLine3";
multiline.lines().forEach(System.out::println);

// indent() (Java 12+) - Add/remove indentation
String indented = "Hello".indent(4);  // "    Hello\\n"

// matches() - Check if matches regex
boolean isEmail = "test@email.com".matches("[\\\\w]+@[\\\\w]+\\\\.[a-z]+");`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Method Summary Table</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Method</th>
            <th className="border p-2">Description</th>
            <th className="border p-2">Return Type</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border p-2">length()</td><td className="border p-2">Returns string length</td><td className="border p-2">int</td></tr>
          <tr><td className="border p-2">charAt(index)</td><td className="border p-2">Returns character at index</td><td className="border p-2">char</td></tr>
          <tr><td className="border p-2">substring(start, end)</td><td className="border p-2">Extracts portion of string</td><td className="border p-2">String</td></tr>
          <tr><td className="border p-2">toLowerCase()</td><td className="border p-2">Converts to lowercase</td><td className="border p-2">String</td></tr>
          <tr><td className="border p-2">toUpperCase()</td><td className="border p-2">Converts to uppercase</td><td className="border p-2">String</td></tr>
          <tr><td className="border p-2">trim()</td><td className="border p-2">Removes whitespace</td><td className="border p-2">String</td></tr>
          <tr><td className="border p-2">replace(old, new)</td><td className="border p-2">Replaces occurrences</td><td className="border p-2">String</td></tr>
          <tr><td className="border p-2">split(regex)</td><td className="border p-2">Splits into array</td><td className="border p-2">String[]</td></tr>
          <tr><td className="border p-2">equals(str)</td><td className="border p-2">Compares content</td><td className="border p-2">boolean</td></tr>
          <tr><td className="border p-2">contains(str)</td><td className="border p-2">Checks for substring</td><td className="border p-2">boolean</td></tr>
        </tbody>
      </table>
    </div>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="font-semibold">Remember</p>
      <ul className="list-disc pl-6 mt-2 space-y-1">
        <li>All String methods return a new String (strings are immutable)</li>
        <li>Method chaining: <code className="bg-gray-200 px-1 rounded">str.trim().toLowerCase().replace(" ", "-")</code></li>
        <li>Always check for null before calling methods to avoid NullPointerException</li>
        <li>Use newer methods (strip, isBlank, repeat) for better functionality in Java 11+</li>
      </ul>
    </div>
  </div>
);

export default StringMethods;
