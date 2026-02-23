import React from "react";

const Variables: React.FC = () => (
  <div className="mt-15">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Java Variables
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      A <b>variable</b> in Java is a container that holds data values during program execution.
      Each variable must be declared with a specific data type that determines what kind of
      value it can store.
    </p>

    <h2 className="text-2xl font-bold mt-6">Variable Declaration Syntax</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`// Syntax: dataType variableName = value;

int age = 25;           // Integer variable
double price = 19.99;   // Decimal variable
char grade = 'A';       // Character variable
boolean isJavaFun = true; // Boolean variable
String name = "John";   // String variable (reference type)`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Types of Variables</h2>
    <p className="leading-relaxed mt-3">
      Java has three types of variables based on their scope and lifetime:
    </p>

    <h3 className="text-xl font-semibold mt-4">1. Local Variables</h3>
    <p className="leading-relaxed mt-2">
      Declared inside a method, constructor, or block. They exist only within that scope.
    </p>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`public void calculateSum() {
    int x = 10;  // Local variable
    int y = 20;  // Local variable
    int sum = x + y;
    System.out.println("Sum: " + sum);
}
// x, y, and sum are not accessible outside this method`}
      </pre>
    </div>

    <h3 className="text-xl font-semibold mt-4">2. Instance Variables (Non-Static Fields)</h3>
    <p className="leading-relaxed mt-2">
      Declared inside a class but outside any method. Each object has its own copy.
    </p>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`public class Student {
    String name;      // Instance variable
    int age;          // Instance variable
    double gpa;       // Instance variable

    public void displayInfo() {
        System.out.println(name + " is " + age + " years old");
    }
}`}
      </pre>
    </div>

    <h3 className="text-xl font-semibold mt-4">3. Class Variables (Static Fields)</h3>
    <p className="leading-relaxed mt-2">
      Declared with the <code className="bg-gray-200 px-1 rounded">static</code> keyword. Shared among all instances of the class.
    </p>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`public class Counter {
    static int count = 0;  // Class variable (shared)

    public Counter() {
        count++;  // Incremented for every new object
    }
}`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Variable Naming Rules</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Rule</th>
            <th className="border p-2">Valid Examples</th>
            <th className="border p-2">Invalid Examples</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border p-2">Must start with letter, $ or _</td><td className="border p-2">name, $price, _count</td><td className="border p-2">1name, #value</td></tr>
          <tr><td className="border p-2">Cannot be a reserved keyword</td><td className="border p-2">myClass, value</td><td className="border p-2">class, int, void</td></tr>
          <tr><td className="border p-2">Case-sensitive</td><td className="border p-2">Name != name</td><td className="border p-2">-</td></tr>
          <tr><td className="border p-2">No spaces allowed</td><td className="border p-2">firstName, first_name</td><td className="border p-2">first name</td></tr>
          <tr><td className="border p-2">Use camelCase convention</td><td className="border p-2">studentAge, totalPrice</td><td className="border p-2">StudentAge, TOTALPRICE</td></tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Declaring Multiple Variables</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`// Multiple variables of the same type
int a = 5, b = 10, c = 15;

// Or declare first, assign later
int x, y, z;
x = 1;
y = 2;
z = 3;

// Initialize with the same value
int i, j, k;
i = j = k = 100;`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Final Variables (Constants)</h2>
    <p className="leading-relaxed mt-3">
      Use the <code className="bg-gray-200 px-1 rounded">final</code> keyword to create constants that cannot be modified after initialization.
    </p>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`final double PI = 3.14159;
final int MAX_SIZE = 100;
final String COMPANY_NAME = "TechCorp";

// This would cause a compilation error:
// PI = 3.14;  // Cannot assign a value to final variable`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Type Inference with var (Java 10+)</h2>
    <p className="leading-relaxed mt-3">
      Java 10 introduced the <code className="bg-gray-200 px-1 rounded">var</code> keyword for local variable type inference:
    </p>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`// The compiler infers the type from the value
var message = "Hello";      // String
var count = 42;             // int
var price = 19.99;          // double
var items = new ArrayList<String>();  // ArrayList<String>

// Note: var can only be used for local variables with initializers
// These are NOT allowed:
// var x;                   // No initializer
// var name = null;         // Cannot infer type from null`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Practical Example</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`public class VariableDemo {
    // Instance variables
    String productName;
    double price;

    // Class variable
    static int totalProducts = 0;

    // Constant
    static final double TAX_RATE = 0.08;

    public static void main(String[] args) {
        // Local variables
        String customerName = "Alice";
        int quantity = 3;

        VariableDemo product = new VariableDemo();
        product.productName = "Laptop";
        product.price = 999.99;
        totalProducts++;

        double total = product.price * quantity;
        double tax = total * TAX_RATE;
        double finalPrice = total + tax;

        System.out.println("Customer: " + customerName);
        System.out.println("Product: " + product.productName);
        System.out.println("Quantity: " + quantity);
        System.out.println("Total (with tax): $" + finalPrice);
    }
}`}
      </pre>
    </div>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="font-semibold">Best Practices</p>
      <ul className="list-disc pl-6 mt-2 space-y-1">
        <li>Use meaningful, descriptive variable names</li>
        <li>Follow camelCase naming convention for variables</li>
        <li>Use UPPER_SNAKE_CASE for constants</li>
        <li>Initialize variables before using them</li>
        <li>Keep variable scope as narrow as possible</li>
      </ul>
    </div>
  </div>
);

export default Variables;
