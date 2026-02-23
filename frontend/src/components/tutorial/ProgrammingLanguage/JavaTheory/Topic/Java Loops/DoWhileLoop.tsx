import React from "react";

const DoWhileLoop: React.FC = () => (
  <div className="mt-15">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Java Do-While Loop
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      The <b>do-while loop</b> is similar to the while loop, but with one key difference:
      it executes the code block <b>at least once</b> before checking the condition.
      This is because the condition is evaluated after the code block.
    </p>

    <h2 className="text-2xl font-bold mt-6">Syntax</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`do {
    // code to be executed
} while (condition);  // Note the semicolon`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">How It Works</h2>
    <ol className="list-decimal pl-6 mt-3 space-y-2">
      <li>The code block executes first</li>
      <li>Then the condition is evaluated</li>
      <li>If the condition is <b>true</b>, the loop repeats</li>
      <li>If the condition is <b>false</b>, the loop ends</li>
      <li>The code block always runs <b>at least once</b></li>
    </ol>

    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`// Print numbers 1 to 5
int i = 1;
do {
    System.out.println(i);
    i++;
} while (i <= 5);
// Output: 1 2 3 4 5 (each on new line)

// Code runs even when condition is initially false
int x = 10;
do {
    System.out.println("x = " + x);
    x++;
} while (x < 5);
// Output: x = 10 (runs once)`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">While vs Do-While</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`int value = 10;

// While loop - condition checked first
System.out.println("While loop:");
while (value < 5) {
    System.out.println(value);  // Never executes
    value++;
}
System.out.println("While loop done (no output)");

// Do-while loop - code executes first
value = 10;
System.out.println("Do-while loop:");
do {
    System.out.println(value);  // Executes once
    value++;
} while (value < 5);
System.out.println("Do-while loop done");

// Output:
// While loop:
// While loop done (no output)
// Do-while loop:
// 10
// Do-while loop done`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Menu-Driven Programs</h2>
    <p className="leading-relaxed mt-3">
      Do-while is perfect for menu-driven programs where you always want to show the menu at least once.
    </p>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`import java.util.Scanner;

public class MenuExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int choice;

        do {
            System.out.println("\\n===== MENU =====");
            System.out.println("1. Add");
            System.out.println("2. Subtract");
            System.out.println("3. Multiply");
            System.out.println("4. Divide");
            System.out.println("5. Exit");
            System.out.print("Enter your choice: ");
            choice = scanner.nextInt();

            switch (choice) {
                case 1:
                    System.out.println("Addition selected");
                    break;
                case 2:
                    System.out.println("Subtraction selected");
                    break;
                case 3:
                    System.out.println("Multiplication selected");
                    break;
                case 4:
                    System.out.println("Division selected");
                    break;
                case 5:
                    System.out.println("Goodbye!");
                    break;
                default:
                    System.out.println("Invalid choice!");
            }
        } while (choice != 5);

        scanner.close();
    }
}`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Input Validation</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`import java.util.Scanner;

Scanner scanner = new Scanner(System.in);
int age;

// Validate age input (must be between 1 and 120)
do {
    System.out.print("Enter your age (1-120): ");
    age = scanner.nextInt();

    if (age < 1 || age > 120) {
        System.out.println("Invalid age! Please try again.");
    }
} while (age < 1 || age > 120);

System.out.println("Valid age entered: " + age);
scanner.close();`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Password Confirmation</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`import java.util.Scanner;

Scanner scanner = new Scanner(System.in);
String password;
String confirm;

do {
    System.out.print("Enter password: ");
    password = scanner.nextLine();

    System.out.print("Confirm password: ");
    confirm = scanner.nextLine();

    if (!password.equals(confirm)) {
        System.out.println("Passwords don't match! Try again.\\n");
    }
} while (!password.equals(confirm));

System.out.println("Password set successfully!");
scanner.close();`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Mathematical Examples</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`// Count digits in a number
int number = 12345;
int digitCount = 0;
int temp = number;

do {
    digitCount++;
    temp /= 10;
} while (temp > 0);

System.out.println("Number of digits: " + digitCount);  // 5

// This works even for number = 0 (counts 1 digit)
temp = 0;
digitCount = 0;
do {
    digitCount++;
    temp /= 10;
} while (temp > 0);
System.out.println("Digits in 0: " + digitCount);  // 1`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Retry Logic</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`import java.util.Random;

public class RetryExample {
    public static void main(String[] args) {
        Random random = new Random();
        int attempts = 0;
        boolean success;

        do {
            attempts++;
            System.out.println("Attempt " + attempts + "...");

            // Simulate operation that might fail
            success = random.nextBoolean();

            if (!success) {
                System.out.println("Failed, retrying...");
            }
        } while (!success && attempts < 5);

        if (success) {
            System.out.println("Success after " + attempts + " attempt(s)!");
        } else {
            System.out.println("Failed after " + attempts + " attempts.");
        }
    }
}`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Comparison Table</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Feature</th>
            <th className="border p-2">while</th>
            <th className="border p-2">do-while</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border p-2">Condition check</td><td className="border p-2">Before loop body</td><td className="border p-2">After loop body</td></tr>
          <tr><td className="border p-2">Minimum executions</td><td className="border p-2">0 times</td><td className="border p-2">1 time</td></tr>
          <tr><td className="border p-2">Entry-controlled</td><td className="border p-2">Yes</td><td className="border p-2">No</td></tr>
          <tr><td className="border p-2">Exit-controlled</td><td className="border p-2">No</td><td className="border p-2">Yes</td></tr>
          <tr><td className="border p-2">Semicolon after</td><td className="border p-2">No</td><td className="border p-2">Yes (required)</td></tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Practical Example: ATM Simulation</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`import java.util.Scanner;

public class ATMSimulation {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double balance = 1000.00;
        int choice;

        do {
            System.out.println("\\n===== ATM =====");
            System.out.printf("Balance: $%.2f%n", balance);
            System.out.println("1. Deposit");
            System.out.println("2. Withdraw");
            System.out.println("3. Exit");
            System.out.print("Choice: ");
            choice = scanner.nextInt();

            switch (choice) {
                case 1:
                    System.out.print("Deposit amount: $");
                    double deposit = scanner.nextDouble();
                    if (deposit > 0) {
                        balance += deposit;
                        System.out.println("Deposited successfully!");
                    }
                    break;
                case 2:
                    System.out.print("Withdraw amount: $");
                    double withdraw = scanner.nextDouble();
                    if (withdraw > 0 && withdraw <= balance) {
                        balance -= withdraw;
                        System.out.println("Withdrawn successfully!");
                    } else {
                        System.out.println("Invalid amount!");
                    }
                    break;
                case 3:
                    System.out.println("Thank you for using ATM!");
                    break;
                default:
                    System.out.println("Invalid choice!");
            }
        } while (choice != 3);

        scanner.close();
    }
}`}
      </pre>
    </div>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="font-semibold">When to Use Do-While</p>
      <ul className="list-disc pl-6 mt-2 space-y-1">
        <li>Menu-driven programs (always show menu first)</li>
        <li>Input validation (get input at least once)</li>
        <li>Games (play at least one round)</li>
        <li>Retry logic (try at least once)</li>
        <li>Processing that must happen before checking condition</li>
      </ul>
    </div>
  </div>
);

export default DoWhileLoop;
