import React from "react";

const ExceptionHandling: React.FC = () => (
  <div className="mt-15">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Java Exception Handling
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      <b>Exception handling</b> is a mechanism to handle runtime errors, allowing the program to
      continue execution instead of crashing. Java provides a robust exception handling framework
      using try, catch, finally, throw, and throws keywords.
    </p>

    <h2 className="text-2xl font-bold mt-6">What is an Exception?</h2>
    <p className="leading-relaxed mt-3">
      An exception is an event that disrupts the normal flow of program execution. Examples include
      dividing by zero, accessing null objects, or reading files that don't exist.
    </p>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Exception Hierarchy</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`Throwable
├── Error (serious problems, usually not caught)
│   ├── OutOfMemoryError
│   ├── StackOverflowError
│   └── ...
└── Exception
    ├── RuntimeException (unchecked)
    │   ├── NullPointerException
    │   ├── ArrayIndexOutOfBoundsException
    │   ├── ArithmeticException
    │   └── ...
    └── Checked Exceptions
        ├── IOException
        ├── SQLException
        ├── FileNotFoundException
        └── ...`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Try-Catch Block</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`try {
    // Code that might throw an exception
    int result = 10 / 0;  // ArithmeticException
} catch (ArithmeticException e) {
    // Handle the exception
    System.out.println("Cannot divide by zero!");
    System.out.println("Error: " + e.getMessage());
}
// Program continues after handling`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Multiple Catch Blocks</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`try {
    int[] arr = {1, 2, 3};
    System.out.println(arr[10]);  // ArrayIndexOutOfBoundsException
    String str = null;
    str.length();                  // NullPointerException
} catch (ArrayIndexOutOfBoundsException e) {
    System.out.println("Array index out of bounds!");
} catch (NullPointerException e) {
    System.out.println("Null pointer exception!");
} catch (Exception e) {
    // Catches any other exception
    System.out.println("Some error occurred: " + e.getMessage());
}`}
      </pre>
    </div>

    <h3 className="text-xl font-semibold mt-4">Multi-Catch (Java 7+)</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`try {
    // Code that might throw exceptions
} catch (IOException | SQLException e) {
    // Handle both exceptions the same way
    System.out.println("IO or SQL error: " + e.getMessage());
}`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Finally Block</h2>
    <p className="leading-relaxed mt-3">
      The <code className="bg-gray-200 px-1 rounded">finally</code> block always executes, whether
      an exception occurs or not. It's commonly used for cleanup operations.
    </p>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`FileReader reader = null;
try {
    reader = new FileReader("file.txt");
    // Read file
} catch (FileNotFoundException e) {
    System.out.println("File not found!");
} finally {
    // Always executes - cleanup
    if (reader != null) {
        try {
            reader.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    System.out.println("Cleanup completed");
}`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Try-With-Resources (Java 7+)</h2>
    <p className="leading-relaxed mt-3">
      Automatically closes resources that implement AutoCloseable.
    </p>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`// Resources are automatically closed
try (FileReader reader = new FileReader("file.txt");
     BufferedReader br = new BufferedReader(reader)) {

    String line;
    while ((line = br.readLine()) != null) {
        System.out.println(line);
    }
} catch (IOException e) {
    System.out.println("Error reading file: " + e.getMessage());
}
// No need for finally block to close resources`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Throw and Throws</h2>

    <h3 className="text-xl font-semibold mt-4">throw - Throwing an Exception</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`public void setAge(int age) {
    if (age < 0) {
        throw new IllegalArgumentException("Age cannot be negative");
    }
    this.age = age;
}

// Usage
try {
    setAge(-5);
} catch (IllegalArgumentException e) {
    System.out.println(e.getMessage());
}`}
      </pre>
    </div>

    <h3 className="text-xl font-semibold mt-4">throws - Declaring Exceptions</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`// Method declares it might throw checked exceptions
public void readFile(String filename) throws FileNotFoundException, IOException {
    FileReader reader = new FileReader(filename);
    // Read file operations
    reader.close();
}

// Caller must handle or propagate
public void processFile() {
    try {
        readFile("data.txt");
    } catch (FileNotFoundException e) {
        System.out.println("File not found");
    } catch (IOException e) {
        System.out.println("IO error");
    }
}`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Custom Exceptions</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`// Custom checked exception
class InsufficientFundsException extends Exception {
    private double amount;

    public InsufficientFundsException(double amount) {
        super("Insufficient funds. Need: $" + amount);
        this.amount = amount;
    }

    public double getAmount() {
        return amount;
    }
}

// Custom unchecked exception
class InvalidUserException extends RuntimeException {
    public InvalidUserException(String message) {
        super(message);
    }
}

// Usage
class BankAccount {
    private double balance = 100;

    public void withdraw(double amount) throws InsufficientFundsException {
        if (amount > balance) {
            throw new InsufficientFundsException(amount - balance);
        }
        balance -= amount;
    }
}

// Main
BankAccount account = new BankAccount();
try {
    account.withdraw(150);
} catch (InsufficientFundsException e) {
    System.out.println(e.getMessage());
    System.out.println("Short by: $" + e.getAmount());
}`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Checked vs Unchecked Exceptions</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Checked Exceptions</th>
            <th className="border p-2">Unchecked Exceptions</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border p-2">Checked at compile time</td><td className="border p-2">Checked at runtime</td></tr>
          <tr><td className="border p-2">Must be caught or declared</td><td className="border p-2">No requirement to handle</td></tr>
          <tr><td className="border p-2">Extend Exception</td><td className="border p-2">Extend RuntimeException</td></tr>
          <tr><td className="border p-2">IOException, SQLException</td><td className="border p-2">NullPointerException, ArithmeticException</td></tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Exception Methods</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`try {
    int result = 10 / 0;
} catch (ArithmeticException e) {
    // Get error message
    System.out.println(e.getMessage());

    // Print stack trace
    e.printStackTrace();

    // Get exception class name
    System.out.println(e.getClass().getName());

    // Get cause (if chained)
    Throwable cause = e.getCause();

    // Convert to string
    String str = e.toString();
}`}
      </pre>
    </div>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="font-semibold">Best Practices</p>
      <ul className="list-disc pl-6 mt-2 space-y-1">
        <li>Catch specific exceptions, not generic Exception</li>
        <li>Don't catch exceptions you can't handle properly</li>
        <li>Use try-with-resources for auto-closeable resources</li>
        <li>Include meaningful messages in custom exceptions</li>
        <li>Don't use exceptions for flow control</li>
        <li>Log exceptions appropriately for debugging</li>
      </ul>
    </div>
  </div>
);

export default ExceptionHandling;
