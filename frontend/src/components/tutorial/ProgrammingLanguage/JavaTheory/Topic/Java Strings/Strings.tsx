import React from "react";

const Strings: React.FC = () => (
  <div className="mt-15">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Java Strings
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      A <b>String</b> in Java is an object that represents a sequence of characters. Strings are
      one of the most commonly used data types in Java programming. Unlike primitive types,
      String is a <b>reference type</b> and is part of the <code className="bg-gray-200 px-1 rounded">java.lang</code> package.
    </p>

    <h2 className="text-2xl font-bold mt-6">Creating Strings</h2>

    <h3 className="text-xl font-semibold mt-4">String Literal</h3>
    <p className="leading-relaxed mt-2">
      The most common way to create strings. Stored in the String Pool for memory efficiency.
    </p>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`String greeting = "Hello, World!";
String name = "Java";
String empty = "";`}
      </pre>
    </div>

    <h3 className="text-xl font-semibold mt-4">Using new Keyword</h3>
    <p className="leading-relaxed mt-2">
      Creates a new String object in heap memory.
    </p>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`String str1 = new String("Hello");
String str2 = new String(new char[]{'J', 'a', 'v', 'a'});
String str3 = new String(new byte[]{72, 101, 108, 108, 111});  // "Hello"`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">String Pool</h2>
    <p className="leading-relaxed mt-3">
      Java maintains a special memory area called the String Pool to store string literals.
      When you create a string literal, Java first checks if an identical string exists in the pool.
    </p>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`String s1 = "Hello";
String s2 = "Hello";
String s3 = new String("Hello");

System.out.println(s1 == s2);      // true (same pool reference)
System.out.println(s1 == s3);      // false (different objects)
System.out.println(s1.equals(s3)); // true (same content)`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Strings are Immutable</h2>
    <p className="leading-relaxed mt-3">
      Once a String object is created, its value cannot be changed. Any operation that seems
      to modify a string actually creates a new String object.
    </p>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`String original = "Hello";
String modified = original.concat(" World");

System.out.println(original);   // "Hello" (unchanged)
System.out.println(modified);   // "Hello World" (new string)

// When you do this:
String text = "Java";
text = text + " Programming";
// A new String object is created and 'text' references it`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">String Length and Characters</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`String text = "Hello, Java!";

// Get length
int length = text.length();  // 12

// Access individual characters
char first = text.charAt(0);   // 'H'
char last = text.charAt(text.length() - 1);  // '!'

// Check if empty
boolean isEmpty = text.isEmpty();     // false
boolean isBlank = "   ".isBlank();    // true (Java 11+)

// Convert to character array
char[] chars = text.toCharArray();`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">String Concatenation</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`String first = "Hello";
String second = "World";

// Using + operator
String result1 = first + " " + second;  // "Hello World"

// Using concat() method
String result2 = first.concat(" ").concat(second);

// Concatenating with other types
int age = 25;
String message = "Age: " + age;  // "Age: 25"

// Using String.join() (Java 8+)
String joined = String.join(", ", "Apple", "Banana", "Cherry");
// "Apple, Banana, Cherry"`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Escape Sequences</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Sequence</th>
            <th className="border p-2">Description</th>
            <th className="border p-2">Example Output</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border p-2">\n</td><td className="border p-2">New line</td><td className="border p-2">Line1{"\n"}Line2</td></tr>
          <tr><td className="border p-2">\t</td><td className="border p-2">Tab</td><td className="border p-2">Col1{"\t"}Col2</td></tr>
          <tr><td className="border p-2">\\</td><td className="border p-2">Backslash</td><td className="border p-2">C:\path</td></tr>
          <tr><td className="border p-2">\"</td><td className="border p-2">Double quote</td><td className="border p-2">He said "Hi"</td></tr>
          <tr><td className="border p-2">\'</td><td className="border p-2">Single quote</td><td className="border p-2">It's Java</td></tr>
          <tr><td className="border p-2">\r</td><td className="border p-2">Carriage return</td><td className="border p-2">-</td></tr>
        </tbody>
      </table>
    </div>

    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`System.out.println("Hello\\nWorld");
// Hello
// World

System.out.println("Name\\tAge");
// Name    Age

System.out.println("Path: C:\\\\Users\\\\Java");
// Path: C:\\Users\\Java

System.out.println("She said \\"Hello\\"");
// She said "Hello"`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Text Blocks (Java 15+)</h2>
    <p className="leading-relaxed mt-3">
      Text blocks provide a cleaner way to write multi-line strings.
    </p>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`// Traditional approach
String html = "<html>\\n" +
              "    <body>\\n" +
              "        <p>Hello</p>\\n" +
              "    </body>\\n" +
              "</html>";

// Using text blocks (Java 15+)
String htmlBlock = """
    <html>
        <body>
            <p>Hello</p>
        </body>
    </html>
    """;

// JSON example
String json = """
    {
        "name": "John",
        "age": 30,
        "city": "New York"
    }
    """;`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Practical Example</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`public class StringDemo {
    public static void main(String[] args) {
        // Creating strings
        String firstName = "John";
        String lastName = "Doe";

        // Concatenation
        String fullName = firstName + " " + lastName;
        System.out.println("Full Name: " + fullName);

        // String length
        System.out.println("Length: " + fullName.length());

        // Accessing characters
        System.out.println("First char: " + fullName.charAt(0));
        System.out.println("Last char: " + fullName.charAt(fullName.length() - 1));

        // Email template
        String email = String.format(
            "Dear %s,\\n\\n" +
            "Welcome to our platform!\\n\\n" +
            "Best regards,\\nThe Team",
            firstName
        );
        System.out.println(email);
    }
}`}
      </pre>
    </div>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="font-semibold">Key Points to Remember</p>
      <ul className="list-disc pl-6 mt-2 space-y-1">
        <li>Strings are immutable - operations create new String objects</li>
        <li>Use <code className="bg-gray-200 px-1 rounded">.equals()</code> to compare string content, not <code className="bg-gray-200 px-1 rounded">==</code></li>
        <li>String literals are stored in the String Pool</li>
        <li>Use StringBuilder for frequent string modifications</li>
        <li>Text blocks (Java 15+) simplify multi-line strings</li>
      </ul>
    </div>
  </div>
);

export default Strings;
