import React from "react";

const StringComparison: React.FC = () => (
  <div className="mt-15">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Java String Comparison
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      Comparing strings correctly is crucial in Java. There are several ways to compare strings,
      each serving different purposes. Understanding the difference between <b>==</b> and
      <b>.equals()</b> is especially important.
    </p>

    <h2 className="text-2xl font-bold mt-6">== vs .equals()</h2>

    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`String s1 = "Hello";
String s2 = "Hello";
String s3 = new String("Hello");

// == compares references (memory addresses)
System.out.println(s1 == s2);      // true (same pool reference)
System.out.println(s1 == s3);      // false (different objects)

// .equals() compares content
System.out.println(s1.equals(s2)); // true
System.out.println(s1.equals(s3)); // true`}
      </pre>
    </div>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
      <p className="font-semibold">Important Rule</p>
      <p className="mt-2">
        Always use <code className="bg-gray-200 px-1 rounded">.equals()</code> to compare string content.
        The <code className="bg-gray-200 px-1 rounded">==</code> operator only checks if two references
        point to the same object, which can lead to unexpected results.
      </p>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">equals() Method</h2>
    <p className="leading-relaxed mt-3">
      Compares the content of two strings. Case-sensitive comparison.
    </p>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`String str1 = "Java";
String str2 = "Java";
String str3 = "java";
String str4 = null;

System.out.println(str1.equals(str2));  // true
System.out.println(str1.equals(str3));  // false (case matters)

// Safe comparison with literal first (avoids NullPointerException)
System.out.println("Java".equals(str4));  // false (no exception)

// Dangerous: can throw NullPointerException
// System.out.println(str4.equals("Java"));  // NullPointerException!`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">equalsIgnoreCase() Method</h2>
    <p className="leading-relaxed mt-3">
      Compares strings ignoring case differences.
    </p>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`String str1 = "JAVA";
String str2 = "java";
String str3 = "JaVa";

System.out.println(str1.equalsIgnoreCase(str2));  // true
System.out.println(str1.equalsIgnoreCase(str3));  // true

// Useful for user input validation
String userInput = "Yes";
if (userInput.equalsIgnoreCase("yes")) {
    System.out.println("User confirmed!");
}`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">compareTo() Method</h2>
    <p className="leading-relaxed mt-3">
      Compares strings lexicographically (dictionary order). Returns:
    </p>
    <ul className="list-disc pl-6 mt-2 space-y-1">
      <li><b>0</b> if strings are equal</li>
      <li><b>Negative</b> if first string comes before second</li>
      <li><b>Positive</b> if first string comes after second</li>
    </ul>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`String s1 = "Apple";
String s2 = "Banana";
String s3 = "Apple";

System.out.println(s1.compareTo(s2));  // -1 (A < B)
System.out.println(s2.compareTo(s1));  // 1 (B > A)
System.out.println(s1.compareTo(s3));  // 0 (equal)

// Numeric comparison based on character codes
System.out.println("a".compareTo("b"));   // -1
System.out.println("abc".compareTo("abd")); // -1 (c < d)
System.out.println("ab".compareTo("abc")); // -1 (shorter)

// Case sensitive
System.out.println("a".compareTo("A"));   // 32 (a > A in ASCII)`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">compareToIgnoreCase() Method</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`String s1 = "APPLE";
String s2 = "apple";
String s3 = "Banana";

System.out.println(s1.compareToIgnoreCase(s2));  // 0 (equal)
System.out.println(s1.compareToIgnoreCase(s3));  // -1 (A < B)`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">contentEquals() Method</h2>
    <p className="leading-relaxed mt-3">
      Compares String with CharSequence (StringBuilder, StringBuffer, etc.).
    </p>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`String str = "Hello";
StringBuilder sb = new StringBuilder("Hello");
StringBuffer buffer = new StringBuffer("Hello");

System.out.println(str.contentEquals(sb));      // true
System.out.println(str.contentEquals(buffer));  // true

// equals() would return false
System.out.println(str.equals(sb));  // false (different types)`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">regionMatches() Method</h2>
    <p className="leading-relaxed mt-3">
      Compares specific regions of two strings.
    </p>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`String s1 = "Hello World";
String s2 = "Say Hello";

// regionMatches(thisOffset, other, otherOffset, length)
boolean match1 = s1.regionMatches(0, s2, 4, 5);  // true ("Hello")
boolean match2 = s1.regionMatches(6, "World!", 0, 5);  // true ("World")

// Case-insensitive version
// regionMatches(ignoreCase, thisOffset, other, otherOffset, length)
boolean match3 = s1.regionMatches(true, 0, "HELLO", 0, 5);  // true`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Objects.equals() for Null-Safe Comparison</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`import java.util.Objects;

String s1 = null;
String s2 = null;
String s3 = "Hello";

// Null-safe comparison
System.out.println(Objects.equals(s1, s2));  // true (both null)
System.out.println(Objects.equals(s1, s3));  // false
System.out.println(Objects.equals(s3, s3));  // true

// Without Objects.equals, you'd need:
// (s1 == null && s2 == null) || (s1 != null && s1.equals(s2))`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Comparison Summary Table</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Method</th>
            <th className="border p-2">Purpose</th>
            <th className="border p-2">Case Sensitive</th>
            <th className="border p-2">Returns</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border p-2">==</td><td className="border p-2">Reference comparison</td><td className="border p-2">N/A</td><td className="border p-2">boolean</td></tr>
          <tr><td className="border p-2">equals()</td><td className="border p-2">Content comparison</td><td className="border p-2">Yes</td><td className="border p-2">boolean</td></tr>
          <tr><td className="border p-2">equalsIgnoreCase()</td><td className="border p-2">Content comparison</td><td className="border p-2">No</td><td className="border p-2">boolean</td></tr>
          <tr><td className="border p-2">compareTo()</td><td className="border p-2">Lexicographic order</td><td className="border p-2">Yes</td><td className="border p-2">int</td></tr>
          <tr><td className="border p-2">compareToIgnoreCase()</td><td className="border p-2">Lexicographic order</td><td className="border p-2">No</td><td className="border p-2">int</td></tr>
          <tr><td className="border p-2">contentEquals()</td><td className="border p-2">Compare with CharSequence</td><td className="border p-2">Yes</td><td className="border p-2">boolean</td></tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Practical Examples</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`import java.util.Arrays;
import java.util.Objects;

public class StringComparisonDemo {
    public static void main(String[] args) {
        // Password verification
        String storedPassword = "secret123";
        String userInput = "Secret123";

        if (storedPassword.equals(userInput)) {
            System.out.println("Password match!");
        } else {
            System.out.println("Password incorrect!");
        }

        // Sorting strings
        String[] names = {"Charlie", "Alice", "Bob", "alice"};
        Arrays.sort(names);  // Uses compareTo internally
        System.out.println(Arrays.toString(names));
        // [Alice, Bob, Charlie, alice]

        // Case-insensitive sorting
        Arrays.sort(names, String.CASE_INSENSITIVE_ORDER);
        System.out.println(Arrays.toString(names));
        // [Alice, alice, Bob, Charlie]

        // Finding min/max string
        String min = Arrays.stream(names)
            .min(String::compareToIgnoreCase)
            .orElse("");
        System.out.println("Min: " + min);  // Alice

        // Null-safe comparison in method
        System.out.println(safeEquals(null, null));    // true
        System.out.println(safeEquals("test", null));  // false
        System.out.println(safeEquals("test", "test")); // true
    }

    public static boolean safeEquals(String s1, String s2) {
        return Objects.equals(s1, s2);
    }
}`}
      </pre>
    </div>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="font-semibold">Best Practices</p>
      <ul className="list-disc pl-6 mt-2 space-y-1">
        <li>Always use <code className="bg-gray-200 px-1 rounded">.equals()</code> for content comparison</li>
        <li>Put literals first: <code className="bg-gray-200 px-1 rounded">"value".equals(variable)</code> to avoid NPE</li>
        <li>Use <code className="bg-gray-200 px-1 rounded">Objects.equals()</code> for null-safe comparison</li>
        <li>Use <code className="bg-gray-200 px-1 rounded">equalsIgnoreCase()</code> for user input validation</li>
        <li>Use <code className="bg-gray-200 px-1 rounded">compareTo()</code> for sorting and ordering</li>
      </ul>
    </div>
  </div>
);

export default StringComparison;
