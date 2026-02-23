import React from "react";

const CUserInput: React.FC = () => (
  <div className="mt-17 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">C User Input</h1>

    <h2 className="text-2xl font-bold mt-6">Getting User Input</h2>
    <p>
      In C, we use the <code>scanf()</code> function to get input from the user.
      It reads formatted input from the standard input (keyboard).
    </p>

    <h2 className="text-2xl font-bold mt-6">Basic scanf() Usage</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`#include <stdio.h>

int main() {
    int num;

    printf("Enter a number: ");
    scanf("%d", &num);  // Note the & (address-of operator)

    printf("You entered: %d\\n", num);

    return 0;
}`}
    </pre>
    <p className="mt-2 text-gray-600">
      <strong>Important:</strong> The <code>&</code> operator is required to pass the variable's address to scanf.
    </p>

    <h2 className="text-2xl font-bold mt-6">Format Specifiers for Input</h2>
    <table className="w-full border-collapse border border-gray-300 mt-4">
      <thead className="bg-gray-100">
        <tr>
          <th className="border border-gray-300 p-2">Format</th>
          <th className="border border-gray-300 p-2">Data Type</th>
          <th className="border border-gray-300 p-2">Example</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="border border-gray-300 p-2">%d</td><td className="border border-gray-300 p-2">int</td><td className="border border-gray-300 p-2">scanf("%d", &num);</td></tr>
        <tr><td className="border border-gray-300 p-2">%f</td><td className="border border-gray-300 p-2">float</td><td className="border border-gray-300 p-2">scanf("%f", &decimal);</td></tr>
        <tr><td className="border border-gray-300 p-2">%lf</td><td className="border border-gray-300 p-2">double</td><td className="border border-gray-300 p-2">scanf("%lf", &bigDecimal);</td></tr>
        <tr><td className="border border-gray-300 p-2">%c</td><td className="border border-gray-300 p-2">char</td><td className="border border-gray-300 p-2">scanf("%c", &letter);</td></tr>
        <tr><td className="border border-gray-300 p-2">%s</td><td className="border border-gray-300 p-2">string</td><td className="border border-gray-300 p-2">scanf("%s", name);</td></tr>
        <tr><td className="border border-gray-300 p-2">%ld</td><td className="border border-gray-300 p-2">long</td><td className="border border-gray-300 p-2">scanf("%ld", &bigNum);</td></tr>
        <tr><td className="border border-gray-300 p-2">%u</td><td className="border border-gray-300 p-2">unsigned int</td><td className="border border-gray-300 p-2">scanf("%u", &positive);</td></tr>
        <tr><td className="border border-gray-300 p-2">%x</td><td className="border border-gray-300 p-2">hexadecimal</td><td className="border border-gray-300 p-2">scanf("%x", &hex);</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-6">Reading Different Data Types</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`#include <stdio.h>

int main() {
    int age;
    float height;
    char grade;
    char name[50];

    // Integer input
    printf("Enter your age: ");
    scanf("%d", &age);

    // Float input
    printf("Enter your height: ");
    scanf("%f", &height);

    // Character input
    printf("Enter your grade: ");
    scanf(" %c", &grade);  // Note the space before %c

    // String input (no & needed for arrays)
    printf("Enter your name: ");
    scanf("%s", name);

    printf("\\nYour info:\\n");
    printf("Name: %s\\n", name);
    printf("Age: %d\\n", age);
    printf("Height: %.2f\\n", height);
    printf("Grade: %c\\n", grade);

    return 0;
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Reading Multiple Values</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`#include <stdio.h>

int main() {
    int x, y, z;

    // Read multiple integers at once
    printf("Enter three numbers separated by spaces: ");
    scanf("%d %d %d", &x, &y, &z);

    printf("Sum: %d\\n", x + y + z);

    return 0;
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Reading Strings with Spaces - fgets()</h2>
    <p>
      <code>scanf("%s")</code> stops at whitespace. Use <code>fgets()</code> for strings with spaces.
    </p>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`#include <stdio.h>
#include <string.h>

int main() {
    char fullName[100];

    printf("Enter your full name: ");
    fgets(fullName, sizeof(fullName), stdin);

    // Remove newline character if present
    fullName[strcspn(fullName, "\\n")] = '\\0';

    printf("Hello, %s!\\n", fullName);

    return 0;
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">getchar() - Single Character</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`#include <stdio.h>

int main() {
    char ch;

    printf("Press any key: ");
    ch = getchar();

    printf("You pressed: %c\\n", ch);

    return 0;
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Input Validation</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`#include <stdio.h>

int main() {
    int num;
    int result;

    printf("Enter a number: ");
    result = scanf("%d", &num);

    if (result == 1) {
        printf("Valid input: %d\\n", num);
    } else {
        printf("Invalid input! Please enter a number.\\n");
    }

    return 0;
}

// Loop until valid input
int getValidNumber() {
    int num;

    while (1) {
        printf("Enter a positive number: ");
        if (scanf("%d", &num) == 1 && num > 0) {
            return num;
        }
        printf("Invalid! Try again.\\n");
        while (getchar() != '\\n');  // Clear input buffer
    }
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Common Issues and Solutions</h2>

    <h3 className="text-xl font-semibold mt-4">1. Buffer Issues with scanf</h3>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`// Problem: scanf leaves newline in buffer
char ch;
int num;

scanf("%d", &num);
scanf("%c", &ch);  // Will read the leftover newline!

// Solution: Add space before %c
scanf("%d", &num);
scanf(" %c", &ch);  // Space consumes whitespace`}
    </pre>

    <h3 className="text-xl font-semibold mt-4">2. Clearing Input Buffer</h3>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`// Clear input buffer
while (getchar() != '\\n');

// Or use this after failed scanf
int c;
while ((c = getchar()) != '\\n' && c != EOF);`}
    </pre>

    <h3 className="text-xl font-semibold mt-4">3. Safe String Input</h3>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`char buffer[50];

// Unsafe - buffer overflow risk
scanf("%s", buffer);

// Safer - limit input length
scanf("%49s", buffer);  // One less than buffer size

// Safest - use fgets
fgets(buffer, sizeof(buffer), stdin);`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Complete Example</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`#include <stdio.h>
#include <string.h>

int main() {
    char name[50];
    int age;
    float gpa;

    // Get name (with spaces)
    printf("Enter your full name: ");
    fgets(name, sizeof(name), stdin);
    name[strcspn(name, "\\n")] = '\\0';

    // Get age
    printf("Enter your age: ");
    scanf("%d", &age);

    // Get GPA
    printf("Enter your GPA: ");
    scanf("%f", &gpa);

    // Display results
    printf("\\n--- Student Info ---\\n");
    printf("Name: %s\\n", name);
    printf("Age: %d years\\n", age);
    printf("GPA: %.2f\\n", gpa);

    return 0;
}`}
    </pre>
  </div>
);

export default CUserInput;
