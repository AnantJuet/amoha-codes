import React from "react";

const IfElseStatement: React.FC = () => (
  <div className="mt-15">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Java If-Else Statement
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      The <b>if-else</b> statement provides two paths of execution: one when the condition is true,
      and another when it is false. This allows your program to make decisions and respond appropriately.
    </p>

    <h2 className="text-2xl font-bold mt-6">If-Else Syntax</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`if (condition) {
    // code to execute if condition is true
} else {
    // code to execute if condition is false
}`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Basic Example</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`int age = 16;

if (age >= 18) {
    System.out.println("You are an adult.");
} else {
    System.out.println("You are a minor.");
}
// Output: You are a minor.

// Checking even or odd
int number = 7;

if (number % 2 == 0) {
    System.out.println(number + " is even");
} else {
    System.out.println(number + " is odd");
}
// Output: 7 is odd`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Else-If Ladder</h2>
    <p className="leading-relaxed mt-3">
      When you have multiple conditions to check, use the else-if ladder.
      The first true condition's block is executed, and the rest are skipped.
    </p>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`if (condition1) {
    // executed if condition1 is true
} else if (condition2) {
    // executed if condition1 is false and condition2 is true
} else if (condition3) {
    // executed if condition1 and condition2 are false, condition3 is true
} else {
    // executed if all conditions are false
}`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Grading System Example</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`int score = 85;
char grade;

if (score >= 90) {
    grade = 'A';
} else if (score >= 80) {
    grade = 'B';
} else if (score >= 70) {
    grade = 'C';
} else if (score >= 60) {
    grade = 'D';
} else {
    grade = 'F';
}

System.out.println("Score: " + score + ", Grade: " + grade);
// Output: Score: 85, Grade: B`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Multiple Else-If Conditions</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`int hour = 14;
String greeting;

if (hour < 12) {
    greeting = "Good morning!";
} else if (hour < 17) {
    greeting = "Good afternoon!";
} else if (hour < 21) {
    greeting = "Good evening!";
} else {
    greeting = "Good night!";
}

System.out.println(greeting);
// Output: Good afternoon!`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Nested If-Else</h2>
    <p className="leading-relaxed mt-3">
      You can nest if-else statements inside each other for complex decision making.
    </p>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`int age = 25;
boolean hasTicket = true;
boolean isVIP = false;

if (age >= 18) {
    if (hasTicket) {
        if (isVIP) {
            System.out.println("Welcome VIP! Front row seats.");
        } else {
            System.out.println("Welcome! Regular seating.");
        }
    } else {
        System.out.println("Please purchase a ticket.");
    }
} else {
    System.out.println("Must be 18 or older to enter.");
}
// Output: Welcome! Regular seating.`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Comparing with Ranges</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`int temperature = 25;

if (temperature < 0) {
    System.out.println("Freezing cold!");
} else if (temperature < 10) {
    System.out.println("Cold");
} else if (temperature < 20) {
    System.out.println("Cool");
} else if (temperature < 30) {
    System.out.println("Warm");
} else if (temperature < 40) {
    System.out.println("Hot");
} else {
    System.out.println("Extremely hot!");
}
// Output: Warm`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Practical Example: Login System</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`import java.util.Scanner;

public class LoginSystem {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String storedUsername = "admin";
        String storedPassword = "secret123";

        System.out.print("Enter username: ");
        String username = scanner.nextLine();

        System.out.print("Enter password: ");
        String password = scanner.nextLine();

        if (username.isEmpty() || password.isEmpty()) {
            System.out.println("Username and password cannot be empty!");
        } else if (!username.equals(storedUsername)) {
            System.out.println("Invalid username!");
        } else if (!password.equals(storedPassword)) {
            System.out.println("Invalid password!");
        } else {
            System.out.println("Login successful! Welcome, " + username);
        }

        scanner.close();
    }
}`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">If-Else vs Ternary Operator</h2>
    <p className="leading-relaxed mt-3">
      For simple conditions that assign values, you can use the ternary operator.
    </p>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`int age = 20;

// Using if-else
String status;
if (age >= 18) {
    status = "Adult";
} else {
    status = "Minor";
}

// Using ternary operator (more concise)
String status2 = (age >= 18) ? "Adult" : "Minor";

// Both produce the same result`}
      </pre>
    </div>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="font-semibold">Best Practices</p>
      <ul className="list-disc pl-6 mt-2 space-y-1">
        <li>Order conditions from most specific to most general</li>
        <li>Always include an else clause for exhaustive handling</li>
        <li>Avoid deeply nested if-else (consider refactoring)</li>
        <li>Use switch statement when comparing one variable against many values</li>
        <li>Consider early returns to reduce nesting</li>
      </ul>
    </div>
  </div>
);

export default IfElseStatement;
