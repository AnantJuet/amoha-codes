import React from "react";

const CStructures: React.FC = () => (
  <div className="mt-17 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">C Structures</h1>

    <h2 className="text-2xl font-bold mt-6">C Structures (structs)</h2>
    <p>
      Structures (also called structs) are a way to group several related variables into one place. Each variable in the structure is known as a <b>member</b> of the structure.
    </p>

    <p className="mt-3">
      Unlike an array, a structure can contain many different data types (int, float, char, etc.).
    </p>

    <h2 className="text-2xl font-bold mt-6">Create a Structure</h2>
    <p>
      You can create a structure by using the <code>struct</code> keyword and declare each of its members inside curly braces:
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`struct MyStructure {   // Structure declaration
    int myNum;          // Member (int variable)
    char myLetter;      // Member (char variable)
};                      // End the structure with a semicolon`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Create Structure Variables</h2>
    <p>
      To access the structure, you must create a variable of it.
    </p>

    <p className="mt-3">
      Use the <code>struct</code> keyword inside the <code>main()</code> method, followed by the name of the structure and then the name of the structure variable:
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`struct MyStructure {
    int myNum;
    char myLetter;
};

int main() {
    struct MyStructure s1;
    return 0;
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Access Structure Members</h2>
    <p>
      To access members of a structure, use the dot syntax (<code>.</code>):
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`#include <stdio.h>

// Create a structure called myStructure
struct MyStructure {
    int myNum;
    char myLetter;
};

int main() {
    // Create a structure variable of myStructure called s1
    struct MyStructure s1;

    // Assign values to members of s1
    s1.myNum = 13;
    s1.myLetter = 'B';

    // Print values
    printf("My number: %d\\n", s1.myNum);
    printf("My letter: %c\\n", s1.myLetter);

    return 0;
}`}
    </pre>

    <h3 className="text-lg font-semibold mt-3">Result:</h3>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`My number: 13
My letter: B`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Assign Values to Structure Members</h2>
    <p>
      You can also assign values to members of a structure variable at declaration time, in a single line.
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`// Create a structure variable and assign values to it
struct MyStructure s1 = {13, 'B'};

// Create multiple structure variables
struct MyStructure s2 = {20, 'C'};`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Copy Structures</h2>
    <p>
      You can also assign one structure to another:
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`struct MyStructure s1 = {13, 'B'};
struct MyStructure s2;

s2 = s1;  // Copy s1 to s2

printf("%d\\n", s2.myNum);     // Outputs 13
printf("%c\\n", s2.myLetter);  // Outputs B`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Real Life Example</h2>
    <p>
      Use a structure to store different information about Cars:
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`struct Car {
    char brand[50];
    char model[50];
    int year;
};

int main() {
    struct Car car1 = {"BMW", "X5", 1999};
    struct Car car2 = {"Ford", "Mustang", 1969};
    struct Car car3 = {"Toyota", "Corolla", 2011};

    printf("%s %s %d\\n", car1.brand, car1.model, car1.year);
    printf("%s %s %d\\n", car2.brand, car2.model, car2.year);
    printf("%s %s %d\\n", car3.brand, car3.model, car3.year);

    return 0;
}`}
    </pre>

    <h3 className="text-lg font-semibold mt-3">Result:</h3>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`BMW X5 1999
Ford Mustang 1969
Toyota Corolla 2011`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Structures and Pointers</h2>
    <p>
      You can also use pointers to access structure members. Use the arrow operator (<code>-&gt;</code>) instead of the dot operator:
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`struct MyStructure {
    int myNum;
    char myLetter;
};

int main() {
    struct MyStructure s1 = {13, 'B'};
    struct MyStructure *ptr = &s1;

    // Access members using pointer
    printf("%d\\n", ptr->myNum);     // Outputs 13
    printf("%c\\n", ptr->myLetter);  // Outputs B

    return 0;
}`}
    </pre>
  </div>
);

export default CStructures;
