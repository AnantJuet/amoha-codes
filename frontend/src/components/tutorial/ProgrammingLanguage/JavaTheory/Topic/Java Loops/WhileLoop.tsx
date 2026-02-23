import React from "react";

const WhileLoop: React.FC = () => (
  <div className="mt-15">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Java While Loop
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      The <b>while loop</b> executes a block of code repeatedly as long as a specified condition
      is true. It is ideal when you don't know in advance how many times the loop should run.
    </p>

    <h2 className="text-2xl font-bold mt-6">Syntax</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`while (condition) {
    // code to be executed
}`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">How It Works</h2>
    <ol className="list-decimal pl-6 mt-3 space-y-2">
      <li>The condition is evaluated</li>
      <li>If the condition is <b>true</b>, the code block executes</li>
      <li>After execution, the condition is checked again</li>
      <li>This repeats until the condition becomes <b>false</b></li>
      <li>If the condition is initially false, the code never executes</li>
    </ol>

    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`// Print numbers 1 to 5
int i = 1;
while (i <= 5) {
    System.out.println(i);
    i++;
}
// Output: 1 2 3 4 5 (each on new line)

// Countdown
int count = 5;
while (count > 0) {
    System.out.println(count);
    count--;
}
System.out.println("Blast off!");
// Output: 5 4 3 2 1 Blast off!`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Common Use Cases</h2>

    <h3 className="text-xl font-semibold mt-4">Reading User Input</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`import java.util.Scanner;

Scanner scanner = new Scanner(System.in);
String input = "";

while (!input.equals("quit")) {
    System.out.print("Enter command (quit to exit): ");
    input = scanner.nextLine();
    System.out.println("You entered: " + input);
}
System.out.println("Goodbye!");
scanner.close();`}
      </pre>
    </div>

    <h3 className="text-xl font-semibold mt-4">Input Validation</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`import java.util.Scanner;

Scanner scanner = new Scanner(System.in);
int age = -1;

while (age < 0 || age > 120) {
    System.out.print("Enter your age (0-120): ");
    age = scanner.nextInt();

    if (age < 0 || age > 120) {
        System.out.println("Invalid age. Please try again.");
    }
}
System.out.println("Your age is: " + age);
scanner.close();`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Mathematical Examples</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`// Sum of digits
int number = 12345;
int sum = 0;
while (number > 0) {
    sum += number % 10;  // Get last digit
    number /= 10;        // Remove last digit
}
System.out.println("Sum of digits: " + sum);  // 15

// Reverse a number
int original = 12345;
int reversed = 0;
int temp = original;
while (temp > 0) {
    reversed = reversed * 10 + temp % 10;
    temp /= 10;
}
System.out.println("Reversed: " + reversed);  // 54321

// Find GCD (Greatest Common Divisor)
int a = 48, b = 18;
while (b != 0) {
    int temp2 = b;
    b = a % b;
    a = temp2;
}
System.out.println("GCD: " + a);  // 6`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Infinite While Loop</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`// Intentional infinite loop
while (true) {
    System.out.println("Running...");
    // Use break to exit when needed
    if (someCondition) {
        break;
    }
}

// Game loop example
boolean gameRunning = true;
while (gameRunning) {
    // Process game logic
    // Update display
    // Check for exit condition
    if (playerQuit) {
        gameRunning = false;
    }
}`}
      </pre>
    </div>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
      <p className="font-semibold">Warning: Avoiding Infinite Loops</p>
      <p className="mt-2">
        Always ensure the loop condition will eventually become false. Make sure to update
        the variables used in the condition inside the loop body.
      </p>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Sentinel-Controlled Loop</h2>
    <p className="leading-relaxed mt-3">
      A sentinel value is a special value that signals the end of input.
    </p>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`import java.util.Scanner;

Scanner scanner = new Scanner(System.in);
int sum = 0;
int count = 0;

System.out.println("Enter numbers (-1 to stop):");
int number = scanner.nextInt();

while (number != -1) {  // -1 is the sentinel value
    sum += number;
    count++;
    number = scanner.nextInt();
}

if (count > 0) {
    System.out.println("Sum: " + sum);
    System.out.println("Average: " + (double) sum / count);
} else {
    System.out.println("No numbers entered.");
}
scanner.close();`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">File Reading Example</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

try (BufferedReader reader = new BufferedReader(new FileReader("data.txt"))) {
    String line;
    while ((line = reader.readLine()) != null) {
        System.out.println(line);
    }
} catch (IOException e) {
    e.printStackTrace();
}`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Practical Example: Guessing Game</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`import java.util.Scanner;
import java.util.Random;

public class GuessingGame {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Random random = new Random();

        int secretNumber = random.nextInt(100) + 1;  // 1-100
        int guess = 0;
        int attempts = 0;

        System.out.println("Guess the number (1-100)!");

        while (guess != secretNumber) {
            System.out.print("Your guess: ");
            guess = scanner.nextInt();
            attempts++;

            if (guess < secretNumber) {
                System.out.println("Too low! Try again.");
            } else if (guess > secretNumber) {
                System.out.println("Too high! Try again.");
            } else {
                System.out.println("Correct! You got it in " + attempts + " attempts!");
            }
        }

        scanner.close();
    }
}`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">While vs For Loop</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Use While Loop</th>
            <th className="border p-2">Use For Loop</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border p-2">Unknown number of iterations</td><td className="border p-2">Known number of iterations</td></tr>
          <tr><td className="border p-2">Condition-based termination</td><td className="border p-2">Counter-based iteration</td></tr>
          <tr><td className="border p-2">User input processing</td><td className="border p-2">Array/collection traversal</td></tr>
          <tr><td className="border p-2">Event-driven loops</td><td className="border p-2">Fixed repetitions</td></tr>
        </tbody>
      </table>
    </div>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="font-semibold">Best Practices</p>
      <ul className="list-disc pl-6 mt-2 space-y-1">
        <li>Always update loop variables to avoid infinite loops</li>
        <li>Use meaningful conditions that clearly express intent</li>
        <li>Consider using do-while if the code must run at least once</li>
        <li>Use break cautiously; prefer proper loop conditions</li>
        <li>Initialize variables before the loop starts</li>
      </ul>
    </div>
  </div>
);

export default WhileLoop;
