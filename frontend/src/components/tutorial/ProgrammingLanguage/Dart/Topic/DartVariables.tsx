import React from "react";

const DartVariables: React.FC = () => (
  <div className="mt-17 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Dart Variables</h1>

    <h2 className="text-2xl font-bold mt-6">Declaring Variables</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`// With type annotation
String name = 'Alice';
int age = 30;
double height = 5.6;
bool isActive = true;

// Type inference with var
var message = 'Hello';  // Inferred as String
var count = 42;         // Inferred as int`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">var, final, and const</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`// var - can be reassigned
var name = 'Alice';
name = 'Bob';  // OK

// final - can only be set once (runtime constant)
final city = 'New York';
// city = 'LA';  // Error!

// const - compile-time constant
const pi = 3.14159;
// const now = DateTime.now();  // Error! Not compile-time

// final vs const
final currentTime = DateTime.now();  // OK - computed at runtime
const fixedValue = 100;               // Must be known at compile time

// const collections are deeply immutable
const list = [1, 2, 3];
// list.add(4);  // Error! Cannot modify`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">late Variables</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`// late - initialize later (but before use)
late String description;

void initialize() {
  description = 'Initialized later';
}

// Lazy initialization
late String expensiveValue = computeExpensiveValue();
// computeExpensiveValue() only called when expensiveValue is first accessed

class User {
  late final String name;  // Set once, later

  void setName(String n) {
    name = n;  // Can only be called once
  }
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Null Safety</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`// Non-nullable (default)
String name = 'Alice';  // Cannot be null
// name = null;  // Error!

// Nullable (add ?)
String? nickname;       // Can be null
nickname = null;        // OK
nickname = 'Ali';       // OK

// Null assertion (!)
String? maybeNull = getName();
String definitelyNotNull = maybeNull!;  // Throws if null

// Null-aware access (?.)
print(nickname?.length);  // null if nickname is null

// Null coalescing (??)
String displayName = nickname ?? 'Anonymous';

// Null-aware assignment (??=)
nickname ??= 'Default';  // Assign only if null`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Type Inference</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`// Dart infers types when possible
var name = 'Alice';     // String
var age = 30;           // int
var prices = [1.5, 2.0]; // List<double>
var map = {'key': 'value'}; // Map<String, String>

// dynamic - any type, checked at runtime
dynamic value = 'Hello';
value = 42;     // OK
value = true;   // OK
value.foo();    // Compiles, but may fail at runtime

// Object - any type, but type-safe
Object obj = 'Hello';
// obj.length;  // Error! Object doesn't have length`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Default Values</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`// Nullable variables default to null
int? nullableInt;
print(nullableInt);  // null

// Non-nullable must be initialized
int count = 0;  // Must provide initial value

// late variables don't need immediate initialization
late int lateValue;
// But must be set before use

// Class fields
class Example {
  int count = 0;       // Default value
  late int lateProp;   // Set later
  int? nullable;       // Defaults to null
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Constants in Classes</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`class Config {
  // Instance constant
  final String apiUrl;

  // Static constant
  static const int maxRetries = 3;

  // Static final (computed once)
  static final DateTime startTime = DateTime.now();

  Config(this.apiUrl);
}

// Constant constructors
class Point {
  final int x;
  final int y;

  const Point(this.x, this.y);
}

const origin = Point(0, 0);  // Compile-time constant`}
    </pre>
  </div>
);

export default DartVariables;
