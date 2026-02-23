import React from "react";

const DartSyntax: React.FC = () => (
  <div className="mt-17 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Dart Syntax</h1>

    <h2 className="text-2xl font-bold mt-6">Basic Syntax</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`void main() {
  print('Hello, Dart!');
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Variables</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`// Type inference with var
var name = 'Dart';

// Explicit type
String language = 'Dart';
int version = 3;
double pi = 3.14;
bool isAwesome = true;

// Constants
const maxSize = 100;      // Compile-time constant
final currentTime = DateTime.now();  // Runtime constant`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">String Interpolation</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`var name = 'Dart';
var version = 3;

print('Welcome to $name $version!');
print('2 + 2 = \${2 + 2}');  // For expressions`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Comments</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`// Single-line comment

/*
 Multi-line
 comment
*/

/// Documentation comment
/// This is used for generating docs`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Functions</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`// Regular function
String greet(String name) {
  return 'Hello, $name!';
}

// Arrow function (single expression)
String greet(String name) => 'Hello, $name!';

// Optional parameters
void sayHello([String name = 'World']) {
  print('Hello, $name!');
}

// Named parameters
void createUser({required String name, int age = 0}) {
  print('$name is $age years old');
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Collections</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`// Lists
var numbers = [1, 2, 3];
var names = <String>['Alice', 'Bob'];

// Sets
var uniqueNumbers = {1, 2, 3};

// Maps
var user = {
  'name': 'John',
  'age': 30,
};
var scores = <String, int>{'math': 90, 'science': 85};`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Null Safety</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`// Non-nullable (default)
String name = 'Dart';

// Nullable
String? nullableName;

// Null-aware operators
print(nullableName?.length);    // Safe access
print(nullableName ?? 'default'); // Default value
nullableName ??= 'assigned';    // Assign if null`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Control Flow</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`// if-else
if (score >= 90) {
  print('A');
} else if (score >= 80) {
  print('B');
} else {
  print('C');
}

// Ternary
var result = score >= 60 ? 'Pass' : 'Fail';

// Switch
switch (day) {
  case 'Monday':
    print('Start of week');
    break;
  default:
    print('Another day');
}`}
    </pre>
  </div>
);

export default DartSyntax;
