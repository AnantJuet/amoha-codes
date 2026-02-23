import React from "react";

const BreakContinue: React.FC = () => (
  <div className="mt-15">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Java Break and Continue
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      Java provides two statements to control loop execution: <b>break</b> terminates the loop entirely,
      while <b>continue</b> skips the current iteration and moves to the next one.
    </p>

    <h2 className="text-2xl font-bold mt-6">The break Statement</h2>
    <p className="leading-relaxed mt-3">
      The <code className="bg-gray-200 px-1 rounded">break</code> statement immediately exits the loop,
      regardless of the loop condition.
    </p>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`// Exit loop when i equals 5
for (int i = 1; i <= 10; i++) {
    if (i == 5) {
        break;  // Exit the loop
    }
    System.out.print(i + " ");
}
// Output: 1 2 3 4

// Search for element in array
int[] numbers = {10, 20, 30, 40, 50};
int target = 30;
boolean found = false;

for (int num : numbers) {
    if (num == target) {
        found = true;
        break;  // No need to continue searching
    }
}
System.out.println("Found: " + found);  // true`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">The continue Statement</h2>
    <p className="leading-relaxed mt-3">
      The <code className="bg-gray-200 px-1 rounded">continue</code> statement skips the rest of the
      current iteration and jumps to the next iteration.
    </p>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`// Skip number 5
for (int i = 1; i <= 10; i++) {
    if (i == 5) {
        continue;  // Skip this iteration
    }
    System.out.print(i + " ");
}
// Output: 1 2 3 4 6 7 8 9 10

// Print only even numbers
for (int i = 1; i <= 10; i++) {
    if (i % 2 != 0) {
        continue;  // Skip odd numbers
    }
    System.out.print(i + " ");
}
// Output: 2 4 6 8 10`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Break vs Continue</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`System.out.println("With break:");
for (int i = 1; i <= 5; i++) {
    if (i == 3) break;
    System.out.print(i + " ");
}
// Output: 1 2

System.out.println("\\nWith continue:");
for (int i = 1; i <= 5; i++) {
    if (i == 3) continue;
    System.out.print(i + " ");
}
// Output: 1 2 4 5`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Break in Nested Loops</h2>
    <p className="leading-relaxed mt-3">
      By default, break only exits the innermost loop.
    </p>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`// Break only exits inner loop
for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= 3; j++) {
        if (j == 2) {
            break;  // Only exits inner loop
        }
        System.out.println("i=" + i + ", j=" + j);
    }
}
// Output:
// i=1, j=1
// i=2, j=1
// i=3, j=1`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Labeled Break Statement</h2>
    <p className="leading-relaxed mt-3">
      Use labeled break to exit outer loops from within nested loops.
    </p>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`// Labeled break exits the labeled loop
outerLoop:
for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= 3; j++) {
        if (i == 2 && j == 2) {
            break outerLoop;  // Exits both loops
        }
        System.out.println("i=" + i + ", j=" + j);
    }
}
// Output:
// i=1, j=1
// i=1, j=2
// i=1, j=3
// i=2, j=1`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Labeled Continue Statement</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`// Labeled continue skips to next iteration of labeled loop
outerLoop:
for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= 3; j++) {
        if (j == 2) {
            continue outerLoop;  // Skip to next i
        }
        System.out.println("i=" + i + ", j=" + j);
    }
}
// Output:
// i=1, j=1
// i=2, j=1
// i=3, j=1`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Break in while and do-while</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`// Break in while loop
int i = 0;
while (true) {  // Infinite loop
    i++;
    if (i > 5) {
        break;  // Exit when i exceeds 5
    }
    System.out.print(i + " ");
}
// Output: 1 2 3 4 5

// Continue in while loop
i = 0;
while (i < 10) {
    i++;
    if (i % 2 == 0) {
        continue;  // Skip even numbers
    }
    System.out.print(i + " ");
}
// Output: 1 3 5 7 9`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Practical Examples</h2>

    <h3 className="text-xl font-semibold mt-4">Find First Match</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`String[] names = {"Alice", "Bob", "Charlie", "David"};
String searchName = "Charlie";
int index = -1;

for (int i = 0; i < names.length; i++) {
    if (names[i].equals(searchName)) {
        index = i;
        break;  // Found, no need to continue
    }
}

if (index != -1) {
    System.out.println(searchName + " found at index " + index);
} else {
    System.out.println(searchName + " not found");
}`}
      </pre>
    </div>

    <h3 className="text-xl font-semibold mt-4">Skip Invalid Data</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`int[] data = {10, -5, 20, 0, 30, -15, 40};
int sum = 0;

for (int value : data) {
    if (value <= 0) {
        continue;  // Skip non-positive values
    }
    sum += value;
}

System.out.println("Sum of positive values: " + sum);  // 100`}
      </pre>
    </div>

    <h3 className="text-xl font-semibold mt-4">Process Until Condition</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`import java.util.Scanner;

Scanner scanner = new Scanner(System.in);
double total = 0;

while (true) {
    System.out.print("Enter price (0 to finish): $");
    double price = scanner.nextDouble();

    if (price == 0) {
        break;  // Exit when 0 is entered
    }

    if (price < 0) {
        System.out.println("Invalid price, skipping...");
        continue;  // Skip negative prices
    }

    total += price;
}

System.out.printf("Total: $%.2f%n", total);
scanner.close();`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Comparison Summary</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Statement</th>
            <th className="border p-2">Effect</th>
            <th className="border p-2">Use Case</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border p-2">break</td><td className="border p-2">Exits the loop completely</td><td className="border p-2">Stop when condition met</td></tr>
          <tr><td className="border p-2">continue</td><td className="border p-2">Skips current iteration</td><td className="border p-2">Skip certain values</td></tr>
          <tr><td className="border p-2">break label</td><td className="border p-2">Exits labeled outer loop</td><td className="border p-2">Exit nested loops</td></tr>
          <tr><td className="border p-2">continue label</td><td className="border p-2">Continues labeled outer loop</td><td className="border p-2">Skip in nested loops</td></tr>
        </tbody>
      </table>
    </div>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="font-semibold">Best Practices</p>
      <ul className="list-disc pl-6 mt-2 space-y-1">
        <li>Use break/continue sparingly to maintain readability</li>
        <li>Prefer loop conditions over break when possible</li>
        <li>Labeled statements should be rare; consider refactoring</li>
        <li>Document why break/continue is necessary</li>
        <li>Avoid deeply nested loops that require labeled breaks</li>
      </ul>
    </div>
  </div>
);

export default BreakContinue;
