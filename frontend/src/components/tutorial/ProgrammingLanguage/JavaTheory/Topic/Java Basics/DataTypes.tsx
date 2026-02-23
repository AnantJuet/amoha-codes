import React from "react";

const DataTypes: React.FC = () => (
  <div className="mt-15">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Java Data Types
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      In Java, every variable must have a data type that defines what kind of value it can store.
      Java has two categories of data types: <b>Primitive Types</b> and <b>Reference Types</b>.
    </p>

    <h2 className="text-2xl font-bold mt-6">Primitive Data Types</h2>
    <p className="leading-relaxed mt-3">
      Java has 8 primitive data types that are predefined by the language. They store simple values
      directly in memory.
    </p>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Type</th>
            <th className="border p-2">Size</th>
            <th className="border p-2">Range</th>
            <th className="border p-2">Default</th>
            <th className="border p-2">Example</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border p-2">byte</td><td className="border p-2">1 byte</td><td className="border p-2">-128 to 127</td><td className="border p-2">0</td><td className="border p-2">byte b = 100;</td></tr>
          <tr><td className="border p-2">short</td><td className="border p-2">2 bytes</td><td className="border p-2">-32,768 to 32,767</td><td className="border p-2">0</td><td className="border p-2">short s = 5000;</td></tr>
          <tr><td className="border p-2">int</td><td className="border p-2">4 bytes</td><td className="border p-2">-2^31 to 2^31-1</td><td className="border p-2">0</td><td className="border p-2">int i = 100000;</td></tr>
          <tr><td className="border p-2">long</td><td className="border p-2">8 bytes</td><td className="border p-2">-2^63 to 2^63-1</td><td className="border p-2">0L</td><td className="border p-2">long l = 15000000000L;</td></tr>
          <tr><td className="border p-2">float</td><td className="border p-2">4 bytes</td><td className="border p-2">~7 decimal digits</td><td className="border p-2">0.0f</td><td className="border p-2">float f = 5.75f;</td></tr>
          <tr><td className="border p-2">double</td><td className="border p-2">8 bytes</td><td className="border p-2">~15 decimal digits</td><td className="border p-2">0.0d</td><td className="border p-2">double d = 19.99;</td></tr>
          <tr><td className="border p-2">boolean</td><td className="border p-2">1 bit</td><td className="border p-2">true or false</td><td className="border p-2">false</td><td className="border p-2">boolean flag = true;</td></tr>
          <tr><td className="border p-2">char</td><td className="border p-2">2 bytes</td><td className="border p-2">0 to 65,535 (Unicode)</td><td className="border p-2">'\u0000'</td><td className="border p-2">char c = 'A';</td></tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Integer Types</h2>

    <h3 className="text-xl font-semibold mt-4">byte</h3>
    <p className="leading-relaxed mt-2">
      Useful for saving memory in large arrays. Range: -128 to 127.
    </p>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`byte myByte = 100;
byte minByte = -128;
byte maxByte = 127;
// byte overflow = 128;  // Error: incompatible types`}
      </pre>
    </div>

    <h3 className="text-xl font-semibold mt-4">short</h3>
    <p className="leading-relaxed mt-2">
      Useful when memory is a concern and values are within its range.
    </p>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`short myShort = 5000;
short year = 2024;`}
      </pre>
    </div>

    <h3 className="text-xl font-semibold mt-4">int</h3>
    <p className="leading-relaxed mt-2">
      The most commonly used integer type. Default choice for whole numbers.
    </p>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`int myInt = 100000;
int population = 8000000;
int negative = -50000;

// Using underscores for readability (Java 7+)
int billion = 1_000_000_000;`}
      </pre>
    </div>

    <h3 className="text-xl font-semibold mt-4">long</h3>
    <p className="leading-relaxed mt-2">
      Use when int is not large enough. Must end with 'L' suffix.
    </p>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`long myLong = 15000000000L;
long distanceToSun = 149_597_870_700L;  // meters
long timestamp = System.currentTimeMillis();`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Floating-Point Types</h2>

    <h3 className="text-xl font-semibold mt-4">float</h3>
    <p className="leading-relaxed mt-2">
      Single precision. Must end with 'f' suffix. Precision: ~7 decimal digits.
    </p>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`float myFloat = 5.75f;
float pi = 3.14159f;
float scientific = 3.5e3f;  // 3500.0`}
      </pre>
    </div>

    <h3 className="text-xl font-semibold mt-4">double</h3>
    <p className="leading-relaxed mt-2">
      Double precision. Default type for decimal numbers. Precision: ~15 decimal digits.
    </p>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`double myDouble = 19.99;
double precise = 3.141592653589793;
double scientific = 1.5e10;  // 15000000000.0`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Boolean Type</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`boolean isJavaFun = true;
boolean isFishTasty = false;

// Used in conditions
boolean isAdult = age >= 18;
boolean hasAccess = isAdmin || isMember;`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Character Type</h2>
    <p className="leading-relaxed mt-3">
      Stores a single Unicode character. Use single quotes.
    </p>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`char letter = 'A';
char digit = '7';
char symbol = '@';

// Unicode representation
char unicode = '\u0041';  // 'A'
char heart = '\u2665';    // Heart symbol

// Escape sequences
char newline = '\n';
char tab = '\t';
char quote = '\'';`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Reference Types</h2>
    <p className="leading-relaxed mt-3">
      Reference types store references (memory addresses) to objects. They include classes,
      interfaces, arrays, and enums.
    </p>

    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`// String (most common reference type)
String greeting = "Hello, World!";

// Arrays
int[] numbers = {1, 2, 3, 4, 5};
String[] names = {"Alice", "Bob", "Charlie"};

// Objects
Scanner scanner = new Scanner(System.in);
ArrayList<Integer> list = new ArrayList<>();

// null reference
String empty = null;`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Wrapper Classes</h2>
    <p className="leading-relaxed mt-3">
      Each primitive type has a corresponding wrapper class that provides object representation.
    </p>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Primitive</th>
            <th className="border p-2">Wrapper Class</th>
            <th className="border p-2">Example</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border p-2">byte</td><td className="border p-2">Byte</td><td className="border p-2">Byte b = 10;</td></tr>
          <tr><td className="border p-2">short</td><td className="border p-2">Short</td><td className="border p-2">Short s = 100;</td></tr>
          <tr><td className="border p-2">int</td><td className="border p-2">Integer</td><td className="border p-2">Integer i = 1000;</td></tr>
          <tr><td className="border p-2">long</td><td className="border p-2">Long</td><td className="border p-2">Long l = 10000L;</td></tr>
          <tr><td className="border p-2">float</td><td className="border p-2">Float</td><td className="border p-2">Float f = 5.5f;</td></tr>
          <tr><td className="border p-2">double</td><td className="border p-2">Double</td><td className="border p-2">Double d = 9.99;</td></tr>
          <tr><td className="border p-2">boolean</td><td className="border p-2">Boolean</td><td className="border p-2">Boolean flag = true;</td></tr>
          <tr><td className="border p-2">char</td><td className="border p-2">Character</td><td className="border p-2">Character c = 'A';</td></tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Type Casting</h2>

    <h3 className="text-xl font-semibold mt-4">Widening Casting (Automatic)</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`// byte -> short -> int -> long -> float -> double
int myInt = 9;
double myDouble = myInt;  // Automatic casting

System.out.println(myInt);     // 9
System.out.println(myDouble);  // 9.0`}
      </pre>
    </div>

    <h3 className="text-xl font-semibold mt-4">Narrowing Casting (Manual)</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`// double -> float -> long -> int -> short -> byte
double myDouble = 9.78;
int myInt = (int) myDouble;  // Manual casting

System.out.println(myDouble);  // 9.78
System.out.println(myInt);     // 9 (truncated)`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Practical Example</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`public class DataTypesDemo {
    public static void main(String[] args) {
        // Product information
        int productId = 1001;
        String productName = "Wireless Mouse";
        double price = 29.99;
        int quantity = 150;
        boolean inStock = quantity > 0;
        char category = 'E';  // Electronics

        // Calculate total value
        double totalValue = price * quantity;

        // Display information
        System.out.println("Product ID: " + productId);
        System.out.println("Name: " + productName);
        System.out.println("Price: $" + price);
        System.out.println("Quantity: " + quantity);
        System.out.println("In Stock: " + inStock);
        System.out.println("Category: " + category);
        System.out.println("Total Value: $" + totalValue);
    }
}`}
      </pre>
    </div>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="font-semibold">Tips</p>
      <ul className="list-disc pl-6 mt-2 space-y-1">
        <li>Use <b>int</b> for general integer values</li>
        <li>Use <b>double</b> for decimal numbers (more precision than float)</li>
        <li>Use <b>long</b> for timestamps and very large numbers</li>
        <li>Use wrapper classes when working with collections</li>
        <li>Be careful with narrowing casts to avoid data loss</li>
      </ul>
    </div>
  </div>
);

export default DataTypes;
