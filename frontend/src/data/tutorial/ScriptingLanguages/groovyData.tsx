import React from "react";

export interface SidebarItem {
  label: string;
  href: string;
  isHeader?: boolean;
  children?: SidebarItem[];
}

export interface TopicContent {
  title: string;
  subtitle?: string;
  content: React.ReactNode;
}

export const tutorialData: SidebarItem[] = [
  { label: "Groovy HOME", href: "groovy_home" },
  { label: "Groovy Intro", href: "groovy_intro" },
  { label: "Groovy Setup", href: "groovy_setup" },
  {
    label: "Groovy Syntax",
    href: "groovy_syntax",
    isHeader: true,
    children: [
      { label: "Basic Syntax", href: "groovy_syntax" },
      { label: "Comments", href: "groovy_comments" },
      { label: "Semicolons", href: "groovy_semicolons" },
    ]
  },
  {
    label: "Variables",
    href: "groovy_variables",
    isHeader: true,
    children: [
      { label: "Variables", href: "groovy_variables" },
      { label: "def Keyword", href: "groovy_def" },
      { label: "Type Inference", href: "groovy_type_inference" },
    ]
  },
  {
    label: "Data Types",
    href: "groovy_data_types",
    isHeader: true,
    children: [
      { label: "Data Types", href: "groovy_data_types" },
      { label: "Strings", href: "groovy_strings" },
      { label: "Numbers", href: "groovy_numbers" },
      { label: "Booleans", href: "groovy_booleans" },
    ]
  },
  {
    label: "Operators",
    href: "groovy_operators",
    isHeader: true,
    children: [
      { label: "Arithmetic", href: "groovy_operators" },
      { label: "Comparison", href: "groovy_comparison" },
      { label: "Logical", href: "groovy_logical" },
      { label: "Elvis & Safe Navigation", href: "groovy_elvis" },
    ]
  },
  {
    label: "Control Structures",
    href: "groovy_control",
    isHeader: true,
    children: [
      { label: "If-Else", href: "groovy_control" },
      { label: "Switch", href: "groovy_switch" },
      { label: "For Loops", href: "groovy_for" },
      { label: "While Loops", href: "groovy_while" },
    ]
  },
  {
    label: "Closures",
    href: "groovy_closures",
    isHeader: true,
    children: [
      { label: "Closures Basics", href: "groovy_closures" },
      { label: "Closure Parameters", href: "groovy_closure_params" },
      { label: "Closure Scope", href: "groovy_closure_scope" },
    ]
  },
  {
    label: "Collections",
    href: "groovy_collections",
    isHeader: true,
    children: [
      { label: "Lists", href: "groovy_collections" },
      { label: "Maps", href: "groovy_maps" },
      { label: "Ranges", href: "groovy_ranges" },
      { label: "Collection Methods", href: "groovy_collection_methods" },
    ]
  },
  {
    label: "OOP Features",
    href: "groovy_oop",
    isHeader: true,
    children: [
      { label: "Classes", href: "groovy_oop" },
      { label: "Inheritance", href: "groovy_inheritance" },
      { label: "Interfaces", href: "groovy_interfaces" },
      { label: "Traits", href: "groovy_traits" },
    ]
  },
  {
    label: "XML/JSON",
    href: "groovy_xml",
    isHeader: true,
    children: [
      { label: "XML Parsing", href: "groovy_xml" },
      { label: "XML Building", href: "groovy_xml_build" },
      { label: "JSON Parsing", href: "groovy_json" },
      { label: "JSON Building", href: "groovy_json_build" },
    ]
  },
  {
    label: "Gradle Basics",
    href: "groovy_gradle",
    isHeader: true,
    children: [
      { label: "Gradle Intro", href: "groovy_gradle" },
      { label: "Build Scripts", href: "groovy_gradle_build" },
      { label: "Dependencies", href: "groovy_gradle_deps" },
      { label: "Tasks", href: "groovy_gradle_tasks" },
    ]
  },
  {
    label: "Jenkins Pipelines",
    href: "groovy_jenkins",
    isHeader: true,
    children: [
      { label: "Pipeline Basics", href: "groovy_jenkins" },
      { label: "Declarative Pipeline", href: "groovy_jenkins_declarative" },
      { label: "Scripted Pipeline", href: "groovy_jenkins_scripted" },
      { label: "Shared Libraries", href: "groovy_jenkins_shared" },
    ]
  },
];

export const tutorialContent: Record<string, TopicContent> = {
  "groovy_home": {
    title: "Groovy Programming Tutorial",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Groovy Programming Tutorial
        </h2>
        <p className="leading-relaxed mb-4">
          <strong>Groovy</strong> is a powerful, optionally typed and dynamic language for the Java platform. It integrates smoothly with any Java program and delivers powerful features like closures and dynamic typing.
        </p>
        <p className="leading-relaxed mb-4">
          This tutorial covers Groovy from basics to advanced topics including Gradle build automation and Jenkins pipeline scripts.
        </p>
        <h3 className="text-xl font-medium mb-3">Example: Hello World</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Groovy Hello World
println "Hello, World!"

// With a variable
def name = "Groovy"
println "Welcome to $name!"`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">What You Will Learn</h3>
        <ul className="list-disc ml-6 mb-4 leading-relaxed">
          <li>Groovy syntax and basics</li>
          <li>Variables, data types, and operators</li>
          <li>Closures and collections</li>
          <li>Object-oriented programming</li>
          <li>Working with XML and JSON</li>
          <li>Gradle build automation</li>
          <li>Jenkins pipeline scripts</li>
        </ul>
      </>
    ),
  },
  "groovy_intro": {
    title: "Introduction to Groovy",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          What is Groovy?
        </h2>
        <p className="leading-relaxed mb-4">
          Groovy is an agile and dynamic language for the Java Virtual Machine. It builds upon Java strengths while adding features inspired by Python, Ruby, and Smalltalk.
        </p>
        <h3 className="text-xl font-medium mb-3">Key Features</h3>
        <ul className="list-disc ml-6 mb-4 leading-relaxed">
          <li><strong>Java Compatibility:</strong> Seamlessly integrates with Java code and libraries</li>
          <li><strong>Dynamic Typing:</strong> Optional typing with def keyword</li>
          <li><strong>Closures:</strong> First-class support for closures</li>
          <li><strong>GStrings:</strong> String interpolation with variables</li>
          <li><strong>Native Collections:</strong> Built-in support for lists, maps, and ranges</li>
          <li><strong>Metaprogramming:</strong> Runtime and compile-time metaprogramming</li>
        </ul>
        <h3 className="text-xl font-medium mb-3">Why Learn Groovy?</h3>
        <ul className="list-disc ml-6 mb-4 leading-relaxed">
          <li>Write Gradle build scripts</li>
          <li>Create Jenkins pipelines</li>
          <li>Rapid prototyping for Java applications</li>
          <li>Scripting and automation tasks</li>
          <li>Testing with Spock framework</li>
        </ul>
      </>
    ),
  },
  "groovy_setup": {
    title: "Groovy Setup",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Setting Up Groovy
        </h2>
        <h3 className="text-xl font-medium mb-3">Prerequisites</h3>
        <p className="leading-relaxed mb-4">
          Groovy requires Java JDK 8 or higher installed on your system.
        </p>
        <h3 className="text-xl font-medium mb-3">Installation Methods</h3>
        <h4 className="text-lg font-medium mb-2">Using SDKMAN (Recommended)</h4>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Install SDKMAN
curl -s "https://get.sdkman.io" | bash

# Install Groovy
sdk install groovy

# Verify installation
groovy --version`}
          </pre>
        </div>
        <h4 className="text-lg font-medium mb-2">Windows Installation</h4>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Using Chocolatey
choco install groovy

# Or download from https://groovy.apache.org/download.html
# Set GROOVY_HOME and add to PATH`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">Running Groovy Scripts</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Save as hello.groovy
println "Hello from Groovy!"

// Run from command line
// groovy hello.groovy

// Or use Groovy Console
// groovyConsole`}
          </pre>
        </div>
      </>
    ),
  },
  "groovy_syntax": {
    title: "Groovy Basic Syntax",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Basic Syntax
        </h2>
        <p className="leading-relaxed mb-4">
          Groovy syntax is similar to Java but more concise and flexible.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Print statement
println "Hello, Groovy!"

// Variables
def name = "John"
String greeting = "Hello"

// Methods
def sayHello(name) {
    println "Hello, $name!"
}
sayHello("World")

// Classes
class Person {
    String name
    int age
}

def person = new Person(name: "Alice", age: 30)
println person.name`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">Key Differences from Java</h3>
        <ul className="list-disc ml-6 mb-4 leading-relaxed">
          <li>Semicolons are optional</li>
          <li>Parentheses are optional in some cases</li>
          <li>Return keyword is optional (last expression is returned)</li>
          <li>Public is the default access modifier</li>
          <li>Getters and setters are auto-generated</li>
        </ul>
      </>
    ),
  },
  "groovy_comments": {
    title: "Groovy Comments",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Comments in Groovy
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Single-line comment

/* Multi-line
   comment */

/**
 * Groovydoc comment
 * Used for documentation
 * @param name The name parameter
 * @return A greeting string
 */
def greet(String name) {
    return "Hello, $name"
}

// Shebang for scripts (Unix)
#!/usr/bin/env groovy
println "Script started"`}
          </pre>
        </div>
      </>
    ),
  },
  "groovy_semicolons": {
    title: "Semicolons in Groovy",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Semicolons
        </h2>
        <p className="leading-relaxed mb-4">
          In Groovy, semicolons are optional at the end of statements.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Without semicolons (preferred)
def name = "Groovy"
println name

// With semicolons (also valid)
def age = 25;
println age;

// Multiple statements on one line need semicolons
def a = 1; def b = 2; println a + b

// Method calls without parentheses
println "Hello"    // Same as: println("Hello")
assert true        // Same as: assert(true)`}
          </pre>
        </div>
      </>
    ),
  },
  "groovy_variables": {
    title: "Groovy Variables",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Variables in Groovy
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Dynamic typing with def
def name = "John"
def age = 30
def price = 19.99

// Static typing (Java style)
String city = "New York"
int count = 10
double amount = 99.99

// Multiple assignment
def (x, y, z) = [1, 2, 3]
println "$x, $y, $z"  // 1, 2, 3

// Variable reassignment
def value = "Hello"
value = 42  // Works with def (dynamic)

// Final variables
final PI = 3.14159
// PI = 3.14  // Error: cannot modify final`}
          </pre>
        </div>
      </>
    ),
  },
  "groovy_def": {
    title: "The def Keyword",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          The def Keyword
        </h2>
        <p className="leading-relaxed mb-4">
          The <code>def</code> keyword declares a variable without specifying its type.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// def for variables
def message = "Hello"
def number = 42
def decimal = 3.14

// def for methods
def greet(name) {
    "Hello, $name!"  // Return is implicit
}

// def for method parameters
def add(def a, def b) {
    a + b
}

// Combining def with type
def String getName() {
    return "Groovy"
}

// When to use def vs explicit type
// Use def: scripts, prototyping, when type is obvious
// Use explicit: APIs, documentation, type safety needed`}
          </pre>
        </div>
      </>
    ),
  },
  "groovy_type_inference": {
    title: "Type Inference",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Type Inference in Groovy
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Groovy infers types at runtime
def str = "Hello"
println str.class  // class java.lang.String

def num = 42
println num.class  // class java.lang.Integer

def list = [1, 2, 3]
println list.class  // class java.util.ArrayList

// @TypeChecked for compile-time checking
import groovy.transform.TypeChecked

@TypeChecked
def typeSafeMethod() {
    String name = "Groovy"
    // int x = name  // Compile error!
    return name.toUpperCase()
}

// @CompileStatic for static compilation
import groovy.transform.CompileStatic

@CompileStatic
class FastClass {
    int add(int a, int b) {
        return a + b
    }
}`}
          </pre>
        </div>
      </>
    ),
  },
  "groovy_data_types": {
    title: "Groovy Data Types",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Data Types in Groovy
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Primitive wrapper types (auto-boxed)
byte b = 1
short s = 10
int i = 100
long l = 1000L
float f = 1.5f
double d = 1.5
char c = 'A'
boolean bool = true

// BigInteger and BigDecimal
def bigInt = 123456789012345678901234567890
def bigDec = 123.456789012345678901234567890

// Check types
println 42.class        // java.lang.Integer
println 42L.class       // java.lang.Long
println 3.14.class      // java.math.BigDecimal
println 3.14f.class     // java.lang.Float
println 3.14d.class     // java.lang.Double`}
          </pre>
        </div>
      </>
    ),
  },
  "groovy_strings": {
    title: "Groovy Strings",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Strings in Groovy
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Single-quoted string (plain java.lang.String)
def str1 = 'Hello World'

// Double-quoted string (GString - supports interpolation)
def name = "Groovy"
def str2 = "Hello, $name!"
def str3 = "2 + 2 = \${2 + 2}"

// Triple-quoted strings (multiline)
def multiline = """
    This is a
    multiline string
    in Groovy
"""

// Triple single-quoted (no interpolation)
def rawMulti = '''
    No $interpolation here
'''

// Slashy strings (for regex)
def regex = /\d+\.\d+/

// Dollar slashy strings
def path = $/C:\Users\name/$

// String methods
println "hello".capitalize()  // Hello
println "HELLO".toLowerCase() // hello
println "hello".reverse()     // olleh
println "hello" * 3           // hellohellohello`}
          </pre>
        </div>
      </>
    ),
  },
  "groovy_numbers": {
    title: "Groovy Numbers",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Numbers in Groovy
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Integer literals
def decimal = 42
def hex = 0xFF
def octal = 077
def binary = 0b1010

// Floating point
def floatNum = 3.14f
def doubleNum = 3.14d
def bigDecimal = 3.14  // Default for decimals

// Underscores in numbers (readability)
def million = 1_000_000
def creditCard = 1234_5678_9012_3456L

// Math operations
println 10 / 3      // 3.3333... (BigDecimal)
println 10.intdiv(3) // 3 (integer division)
println 10 % 3      // 1 (modulo)
println 2 ** 10     // 1024 (power)

// Number methods
println 5.times { print it }  // 01234
println (-5).abs()            // 5
println 3.14.round()          // 3
println 3.14.trunc()          // 3`}
          </pre>
        </div>
      </>
    ),
  },
  "groovy_booleans": {
    title: "Groovy Booleans",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Booleans in Groovy
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Boolean literals
def yes = true
def no = false

// Groovy Truth (truthy/falsy values)
// Falsy values:
assert !null
assert !0
assert !""
assert ![]
assert ![:]

// Truthy values:
assert "non-empty"
assert 1
assert [1, 2, 3]
assert [key: "value"]

// Boolean in conditions
def list = [1, 2, 3]
if (list) {
    println "List is not empty"
}

def str = ""
if (!str) {
    println "String is empty"
}

// Boolean coercion
println (5 as Boolean)      // true
println (0 as Boolean)      // false
println ("" as Boolean)     // false
println ("hi" as Boolean)   // true`}
          </pre>
        </div>
      </>
    ),
  },
  "groovy_operators": {
    title: "Arithmetic Operators",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Arithmetic Operators
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`def a = 20
def b = 5

// Basic arithmetic
println a + b    // 25 (addition)
println a - b    // 15 (subtraction)
println a * b    // 100 (multiplication)
println a / b    // 4 (division)
println a % b    // 0 (modulo)
println a ** 2   // 400 (power)

// Integer division
println 17.intdiv(5)  // 3

// Increment/Decrement
def x = 10
println x++  // 10 (post-increment)
println ++x  // 12 (pre-increment)
println x--  // 12 (post-decrement)
println --x  // 10 (pre-decrement)

// Compound assignment
def n = 10
n += 5   // n = 15
n -= 3   // n = 12
n *= 2   // n = 24
n /= 4   // n = 6`}
          </pre>
        </div>
      </>
    ),
  },
  "groovy_comparison": {
    title: "Comparison Operators",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Comparison Operators
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`def a = 10
def b = 20

// Equality
println a == b    // false (equals)
println a != b    // true (not equals)

// Relational
println a < b     // true
println a > b     // false
println a <= b    // true
println a >= b    // false

// Identity (same object)
def s1 = "hello"
def s2 = "hello"
def s3 = new String("hello")

println s1 == s2      // true (equals)
println s1.is(s2)     // true (same object - interned)
println s1.is(s3)     // false (different objects)

// Spaceship operator (compareTo)
println 5 <=> 10   // -1
println 10 <=> 10  // 0
println 15 <=> 10  // 1

// Useful for sorting
def list = [3, 1, 4, 1, 5]
println list.sort { a, b -> a <=> b }  // [1, 1, 3, 4, 5]`}
          </pre>
        </div>
      </>
    ),
  },
  "groovy_logical": {
    title: "Logical Operators",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Logical Operators
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`def a = true
def b = false

// Logical AND
println a && b    // false
println a & b     // false (bitwise, evaluates both)

// Logical OR
println a || b    // true
println a | b     // true (bitwise, evaluates both)

// Logical NOT
println !a        // false
println !b        // true

// Short-circuit evaluation
def check() { println "checked"; return true }
println false && check()  // false (check not called)
println true || check()   // true (check not called)

// XOR
println a ^ b     // true
println a ^ a     // false

// Practical example
def age = 25
def hasLicense = true

if (age >= 18 && hasLicense) {
    println "Can drive"
}`}
          </pre>
        </div>
      </>
    ),
  },
  "groovy_elvis": {
    title: "Elvis & Safe Navigation",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Elvis and Safe Navigation Operators
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Elvis operator (?:) - null coalescing
def name = null
def displayName = name ?: "Guest"
println displayName  // Guest

def actualName = "John"
println actualName ?: "Guest"  // John

// Safe navigation operator (?.)
class Person {
    String name
    Address address
}
class Address {
    String city
}

def person = new Person()
// Without safe navigation: person.address.city throws NPE
// With safe navigation:
println person?.address?.city  // null (no exception)

// Combining with Elvis
println person?.address?.city ?: "Unknown"  // Unknown

// Safe method calls
def str = null
println str?.toUpperCase()  // null (no NPE)

// Safe index access
def list = null
println list?[0]  // null

def map = null
println map?["key"]  // null

// Elvis assignment
def value = null
value ?= "default"
println value  // default`}
          </pre>
        </div>
      </>
    ),
  },
  "groovy_control": {
    title: "If-Else Statements",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          If-Else Statements
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Basic if
def age = 20
if (age >= 18) {
    println "Adult"
}

// If-else
if (age >= 18) {
    println "Adult"
} else {
    println "Minor"
}

// If-else if-else
def score = 85
if (score >= 90) {
    println "Grade: A"
} else if (score >= 80) {
    println "Grade: B"
} else if (score >= 70) {
    println "Grade: C"
} else {
    println "Grade: F"
}

// Ternary operator
def result = age >= 18 ? "Adult" : "Minor"

// Groovy truth in conditions
def list = [1, 2, 3]
if (list) {
    println "List has items"
}

def str = ""
if (!str) {
    println "String is empty"
}`}
          </pre>
        </div>
      </>
    ),
  },
  "groovy_switch": {
    title: "Switch Statement",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Switch Statement
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Basic switch
def day = "Monday"
switch (day) {
    case "Monday":
        println "Start of work week"
        break
    case "Friday":
        println "TGIF!"
        break
    case ["Saturday", "Sunday"]:  // Multiple values
        println "Weekend!"
        break
    default:
        println "Midweek"
}

// Switch with ranges
def score = 85
switch (score) {
    case 90..100:
        println "A"
        break
    case 80..<90:
        println "B"
        break
    case 70..<80:
        println "C"
        break
    default:
        println "F"
}

// Switch with regex
def input = "test123"
switch (input) {
    case ~/.*\d+.*/:
        println "Contains numbers"
        break
    case ~/[a-z]+/:
        println "Only letters"
        break
}

// Switch with closure
def x = 15
switch (x) {
    case { it > 10 }:
        println "Greater than 10"
        break
}`}
          </pre>
        </div>
      </>
    ),
  },
  "groovy_for": {
    title: "For Loops",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          For Loops
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Classic for loop
for (int i = 0; i < 5; i++) {
    println i
}

// For-in with range
for (i in 0..4) {
    println i
}

// For-in with list
def fruits = ["apple", "banana", "cherry"]
for (fruit in fruits) {
    println fruit
}

// For-in with map
def map = [a: 1, b: 2, c: 3]
for (entry in map) {
    println "\${entry.key}: \${entry.value}"
}

// Using each (more Groovy-like)
(0..4).each { println it }

fruits.each { println it }

map.each { k, v -> println "$k: $v" }

// eachWithIndex
fruits.eachWithIndex { fruit, idx ->
    println "$idx: $fruit"
}

// times
5.times { println "Hello" }
5.times { i -> println "Iteration $i" }`}
          </pre>
        </div>
      </>
    ),
  },
  "groovy_while": {
    title: "While Loops",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          While Loops
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Basic while loop
def count = 0
while (count < 5) {
    println count
    count++
}

// Do-while equivalent
count = 0
while (true) {
    println count
    count++
    if (count >= 5) break
}

// Break and continue
def i = 0
while (i < 10) {
    i++
    if (i == 3) continue  // Skip 3
    if (i == 7) break     // Stop at 7
    println i
}

// While with Groovy truth
def list = [1, 2, 3, 4, 5]
while (list) {
    println list.pop()
}

// Infinite loop with condition
def attempts = 0
while (true) {
    attempts++
    if (attempts >= 3) {
        println "Max attempts reached"
        break
    }
    println "Attempt $attempts"
}`}
          </pre>
        </div>
      </>
    ),
  },
  "groovy_closures": {
    title: "Closures Basics",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Closures in Groovy
        </h2>
        <p className="leading-relaxed mb-4">
          Closures are anonymous blocks of code that can take arguments, return values, and be assigned to variables.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Basic closure
def greet = { println "Hello!" }
greet()  // Hello!

// Closure with parameter
def greetName = { name -> println "Hello, $name!" }
greetName("Groovy")  // Hello, Groovy!

// Implicit parameter 'it'
def square = { it * it }
println square(5)  // 25

// Closure with return
def add = { a, b -> return a + b }
println add(3, 4)  // 7

// Last expression is returned
def multiply = { a, b -> a * b }
println multiply(3, 4)  // 12

// Closure as method parameter
def numbers = [1, 2, 3, 4, 5]
numbers.each { println it }

def doubled = numbers.collect { it * 2 }
println doubled  // [2, 4, 6, 8, 10]

def evens = numbers.findAll { it % 2 == 0 }
println evens  // [2, 4]`}
          </pre>
        </div>
      </>
    ),
  },
  "groovy_closure_params": {
    title: "Closure Parameters",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Closure Parameters
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// No parameters
def sayHi = { -> println "Hi!" }
sayHi()

// Single parameter (implicit it)
def double_ = { it * 2 }

// Multiple parameters
def sum = { a, b, c -> a + b + c }
println sum(1, 2, 3)  // 6

// Typed parameters
def concat = { String a, String b -> a + b }
println concat("Hello", " World")

// Default parameter values
def greet = { name, greeting = "Hello" ->
    "$greeting, $name!"
}
println greet("John")           // Hello, John!
println greet("John", "Hi")     // Hi, John!

// Variable arguments
def sumAll = { Object... args ->
    args.sum()
}
println sumAll(1, 2, 3, 4, 5)  // 15

// Closure parameters in methods
def process(Closure action) {
    action()
}
process { println "Processing..." }`}
          </pre>
        </div>
      </>
    ),
  },
  "groovy_closure_scope": {
    title: "Closure Scope",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Closure Scope and this/owner/delegate
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Closures capture surrounding variables
def multiplier = 3
def multiply = { num -> num * multiplier }
println multiply(5)  // 15

// this, owner, and delegate
class Example {
    def outerClosure = {
        println "this: " + this.class.name
        println "owner: " + owner.class.name
        println "delegate: " + delegate.class.name

        def innerClosure = {
            println "inner this: " + this.class.name
            println "inner owner: " + owner.class.name
        }
        innerClosure()
    }
}

new Example().outerClosure()

// Changing delegate
class Person {
    String name
}

def configure = {
    name = "John"
}
def person = new Person()
configure.delegate = person
configure.resolveStrategy = Closure.DELEGATE_FIRST
configure()
println person.name  // John

// Common pattern in DSLs
def html = {
    head { title "My Page" }
    body { p "Hello" }
}`}
          </pre>
        </div>
      </>
    ),
  },
  "groovy_collections": {
    title: "Lists",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Lists in Groovy
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Creating lists
def list = [1, 2, 3, 4, 5]
def empty = []
def mixed = [1, "two", 3.0, true]

// Accessing elements
println list[0]      // 1
println list[-1]     // 5 (last element)
println list[1..3]   // [2, 3, 4]

// Modifying lists
list << 6            // Add element
list += [7, 8]       // Concatenate
list -= [1, 2]       // Remove elements
list[0] = 10         // Update element

// List operations
println list.size()       // Length
println list.contains(3)  // Check membership
println list.indexOf(4)   // Find index
println list.reverse()    // Reverse
println list.sort()       // Sort
println list.unique()     // Remove duplicates

// Spread operator
def nums = [1, 2, 3]
def more = [*nums, 4, 5]
println more  // [1, 2, 3, 4, 5]

// List as stack/queue
list.push(1)    // Add to end
list.pop()      // Remove from end
list.add(0, 1)  // Add at index`}
          </pre>
        </div>
      </>
    ),
  },
  "groovy_maps": {
    title: "Maps",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Maps in Groovy
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Creating maps
def map = [name: "John", age: 30, city: "NYC"]
def empty = [:]

// Keys with special characters
def special = ["first-name": "John", "last.name": "Doe"]

// Variable keys
def key = "dynamic"
def dynMap = [(key): "value"]

// Accessing values
println map["name"]    // John
println map.name       // John (property access)
println map.get("age") // 30

// Modifying maps
map["country"] = "USA"
map.state = "NY"
map.put("zip", "10001")

// Map operations
println map.size()           // Number of entries
println map.containsKey("name")
println map.containsValue(30)
println map.keySet()         // All keys
println map.values()         // All values

// Iterating
map.each { key, value ->
    println "$key: $value"
}

map.each { entry ->
    println "\${entry.key}: \${entry.value}"
}

// Submap and filtering
def subset = map.subMap(["name", "age"])
def filtered = map.findAll { k, v -> v instanceof String }`}
          </pre>
        </div>
      </>
    ),
  },
  "groovy_ranges": {
    title: "Ranges",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Ranges in Groovy
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Inclusive range
def inclusive = 1..5
println inclusive.toList()  // [1, 2, 3, 4, 5]

// Exclusive range
def exclusive = 1..<5
println exclusive.toList()  // [1, 2, 3, 4]

// Reverse range
def reverse = 5..1
println reverse.toList()  // [5, 4, 3, 2, 1]

// Character ranges
def letters = 'a'..'e'
println letters.toList()  // [a, b, c, d, e]

// Range properties
def range = 1..10
println range.from    // 1
println range.to      // 10
println range.size()  // 10

// Range operations
println range.contains(5)   // true
println 5 in range          // true
println range.step(2).toList()  // [1, 3, 5, 7, 9]

// Using ranges
for (i in 1..5) {
    println i
}

(1..5).each { println it }

// Range in switch
def score = 85
switch (score) {
    case 90..100: println "A"; break
    case 80..<90: println "B"; break
    default: println "C"
}`}
          </pre>
        </div>
      </>
    ),
  },
  "groovy_collection_methods": {
    title: "Collection Methods",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Collection Methods
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`def numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Transform
def doubled = numbers.collect { it * 2 }
println doubled  // [2, 4, 6, ...]

// Filter
def evens = numbers.findAll { it % 2 == 0 }
println evens  // [2, 4, 6, 8, 10]

// Find first
def firstEven = numbers.find { it % 2 == 0 }
println firstEven  // 2

// Check conditions
println numbers.every { it > 0 }  // true
println numbers.any { it > 5 }    // true

// Reduce
def sum = numbers.inject(0) { acc, n -> acc + n }
println sum  // 55

def product = numbers.inject(1) { acc, n -> acc * n }
println product  // 3628800

// Grouping
def grouped = numbers.groupBy { it % 2 == 0 ? 'even' : 'odd' }
println grouped  // [odd:[1,3,5,7,9], even:[2,4,6,8,10]]

// Sorting
def words = ["banana", "apple", "cherry"]
println words.sort()                    // [apple, banana, cherry]
println words.sort { it.length() }      // [apple, banana, cherry]
println words.sort { a, b -> b <=> a }  // [cherry, banana, apple]

// Flatten
def nested = [[1, 2], [3, [4, 5]]]
println nested.flatten()  // [1, 2, 3, 4, 5]`}
          </pre>
        </div>
      </>
    ),
  },
  "groovy_oop": {
    title: "Classes",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Classes in Groovy
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Basic class
class Person {
    String name
    int age

    String greet() {
        "Hello, I'm $name"
    }
}

// Creating instances
def p1 = new Person()
p1.name = "John"
p1.age = 30

// Named argument constructor (auto-generated)
def p2 = new Person(name: "Jane", age: 25)

// Property access (getters/setters auto-generated)
println p2.name      // Calls getName()
p2.age = 26          // Calls setAge()

// Constructor
class Book {
    String title
    String author

    Book(String title, String author) {
        this.title = title
        this.author = author
    }

    String toString() {
        "$title by $author"
    }
}

def book = new Book("Groovy Guide", "Author")
println book

// Static members
class Counter {
    static int count = 0
    static void increment() { count++ }
}
Counter.increment()
println Counter.count`}
          </pre>
        </div>
      </>
    ),
  },
  "groovy_inheritance": {
    title: "Inheritance",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Inheritance in Groovy
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Base class
class Animal {
    String name

    void speak() {
        println "Some sound"
    }

    void eat() {
        println "$name is eating"
    }
}

// Subclass
class Dog extends Animal {
    String breed

    @Override
    void speak() {
        println "$name says Woof!"
    }

    void fetch() {
        println "$name is fetching"
    }
}

def dog = new Dog(name: "Buddy", breed: "Labrador")
dog.speak()  // Buddy says Woof!
dog.eat()    // Buddy is eating
dog.fetch()  // Buddy is fetching

// Super keyword
class Cat extends Animal {
    @Override
    void speak() {
        super.speak()  // Call parent method
        println "Meow!"
    }
}

// Abstract classes
abstract class Shape {
    abstract double area()

    void describe() {
        println "This shape has area: \${area()}"
    }
}

class Circle extends Shape {
    double radius

    double area() {
        Math.PI * radius * radius
    }
}`}
          </pre>
        </div>
      </>
    ),
  },
  "groovy_interfaces": {
    title: "Interfaces",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Interfaces in Groovy
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Interface definition
interface Drawable {
    void draw()
}

interface Resizable {
    void resize(int factor)
}

// Implementing interfaces
class Rectangle implements Drawable, Resizable {
    int width, height

    void draw() {
        println "Drawing rectangle \${width}x\${height}"
    }

    void resize(int factor) {
        width *= factor
        height *= factor
    }
}

def rect = new Rectangle(width: 10, height: 5)
rect.draw()
rect.resize(2)
rect.draw()

// Interface with default methods (Groovy 2.5+)
interface Greeting {
    void greet()

    default void sayBye() {
        println "Goodbye!"
    }
}

// Closure as interface implementation
interface Action {
    void execute()
}

def action = { println "Executing!" } as Action
action.execute()

// Map as interface implementation
def comparable = [compareTo: { other -> 0 }] as Comparable`}
          </pre>
        </div>
      </>
    ),
  },
  "groovy_traits": {
    title: "Traits",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Traits in Groovy
        </h2>
        <p className="leading-relaxed mb-4">
          Traits are reusable components that can be composed into classes.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Trait definition
trait Flyable {
    void fly() {
        println "\${this.class.simpleName} is flying"
    }
}

trait Swimmable {
    void swim() {
        println "\${this.class.simpleName} is swimming"
    }
}

// Using traits
class Duck implements Flyable, Swimmable {
    String name
}

def duck = new Duck(name: "Donald")
duck.fly()   // Duck is flying
duck.swim()  // Duck is swimming

// Traits with state
trait Named {
    String name

    String introduce() {
        "Hi, I'm $name"
    }
}

// Traits with abstract methods
trait Identifiable {
    abstract String getId()

    String getFullId() {
        "ID: \${getId()}"
    }
}

class User implements Named, Identifiable {
    String id

    String getId() { id }
}

// Runtime trait application
class Bird {}
def flyingBird = new Bird().withTraits(Flyable)
flyingBird.fly()`}
          </pre>
        </div>
      </>
    ),
  },
  "groovy_xml": {
    title: "XML Parsing",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          XML Parsing in Groovy
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`def xml = """
<books>
    <book id="1">
        <title>Groovy in Action</title>
        <author>Dierk Konig</author>
        <price>49.99</price>
    </book>
    <book id="2">
        <title>Making Java Groovy</title>
        <author>Ken Kousen</author>
        <price>44.99</price>
    </book>
</books>
"""

// XmlSlurper (lazy parsing)
def books = new XmlSlurper().parseText(xml)

// Access elements
println books.book[0].title.text()  // Groovy in Action
println books.book[1].author.text() // Ken Kousen

// Access attributes
println books.book[0].@id  // 1

// Iterate
books.book.each { book ->
    println "\${book.title} by \${book.author}"
}

// Find
def cheap = books.book.find { it.price.toFloat() < 45 }
println cheap.title  // Making Java Groovy

// XmlParser (DOM-like)
def parser = new XmlParser().parseText(xml)
parser.book.each { book ->
    println book.title.text()
}

// GPath expressions
def titles = books.'**'.findAll { it.name() == 'title' }
titles.each { println it.text() }`}
          </pre>
        </div>
      </>
    ),
  },
  "groovy_xml_build": {
    title: "XML Building",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Building XML in Groovy
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`import groovy.xml.MarkupBuilder

// Using MarkupBuilder
def writer = new StringWriter()
def xml = new MarkupBuilder(writer)

xml.books {
    book(id: 1) {
        title("Groovy Guide")
        author("John Doe")
        price(29.99)
    }
    book(id: 2) {
        title("Gradle Basics")
        author("Jane Doe")
        price(34.99)
    }
}

println writer.toString()

// Dynamic building
def bookList = [
    [id: 1, title: "Book 1", author: "Author 1"],
    [id: 2, title: "Book 2", author: "Author 2"]
]

writer = new StringWriter()
xml = new MarkupBuilder(writer)

xml.library {
    bookList.each { b ->
        book(id: b.id) {
            title(b.title)
            author(b.author)
        }
    }
}

// StreamingMarkupBuilder for large documents
import groovy.xml.StreamingMarkupBuilder

def builder = new StreamingMarkupBuilder()
def markup = builder.bind {
    books {
        book(id: 1) {
            title("Streaming XML")
        }
    }
}
println markup`}
          </pre>
        </div>
      </>
    ),
  },
  "groovy_json": {
    title: "JSON Parsing",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          JSON Parsing in Groovy
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`import groovy.json.JsonSlurper

def json = """
{
    "name": "John Doe",
    "age": 30,
    "email": "john@example.com",
    "address": {
        "city": "New York",
        "zip": "10001"
    },
    "phones": ["123-456", "789-012"],
    "active": true
}
"""

// Parse JSON
def slurper = new JsonSlurper()
def data = slurper.parseText(json)

// Access data
println data.name           // John Doe
println data.age            // 30
println data.address.city   // New York
println data.phones[0]      // 123-456
println data.active         // true

// Parse from URL
// def result = slurper.parse(new URL("https://api.example.com/data"))

// Parse from file
// def fileData = slurper.parse(new File("data.json"))

// JSON array
def jsonArray = """
[
    {"id": 1, "name": "Item 1"},
    {"id": 2, "name": "Item 2"}
]
"""

def items = slurper.parseText(jsonArray)
items.each { item ->
    println "\${item.id}: \${item.name}"
}`}
          </pre>
        </div>
      </>
    ),
  },
  "groovy_json_build": {
    title: "JSON Building",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Building JSON in Groovy
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`import groovy.json.JsonBuilder
import groovy.json.JsonOutput

// Using JsonBuilder
def builder = new JsonBuilder()

builder {
    name "John Doe"
    age 30
    email "john@example.com"
    address {
        city "New York"
        zip "10001"
    }
    phones "123-456", "789-012"
    active true
}

println builder.toPrettyString()

// Building from data
def person = [
    name: "Jane Doe",
    age: 25,
    skills: ["Java", "Groovy", "Python"]
]

builder = new JsonBuilder(person)
println builder.toString()

// Using JsonOutput
def data = [
    id: 1,
    name: "Product",
    price: 29.99,
    tags: ["sale", "new"]
]

def jsonString = JsonOutput.toJson(data)
println jsonString

// Pretty print
println JsonOutput.prettyPrint(jsonString)

// Convert object to JSON
class User {
    String name
    int age
}

def user = new User(name: "Bob", age: 35)
println JsonOutput.toJson(user)`}
          </pre>
        </div>
      </>
    ),
  },
  "groovy_gradle": {
    title: "Gradle Introduction",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Introduction to Gradle
        </h2>
        <p className="leading-relaxed mb-4">
          Gradle is a powerful build automation tool that uses Groovy-based DSL (or Kotlin) for build scripts.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// build.gradle - Basic structure

// Apply plugins
plugins {
    id 'java'
    id 'application'
}

// Project settings
group = 'com.example'
version = '1.0.0'

// Repository configuration
repositories {
    mavenCentral()
    google()
}

// Dependencies
dependencies {
    implementation 'org.codehaus.groovy:groovy-all:3.0.9'
    testImplementation 'junit:junit:4.13.2'
}

// Java configuration
java {
    sourceCompatibility = JavaVersion.VERSION_11
    targetCompatibility = JavaVersion.VERSION_11
}

// Application configuration
application {
    mainClass = 'com.example.Main'
}

// Run with: gradle build
// Or: gradle run`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">Common Gradle Commands</h3>
        <ul className="list-disc ml-6 mb-4 leading-relaxed">
          <li><code>gradle build</code> - Compile and test</li>
          <li><code>gradle clean</code> - Delete build directory</li>
          <li><code>gradle test</code> - Run tests</li>
          <li><code>gradle tasks</code> - List available tasks</li>
        </ul>
      </>
    ),
  },
  "groovy_gradle_build": {
    title: "Gradle Build Scripts",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Gradle Build Scripts
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// build.gradle

plugins {
    id 'java'
}

// Properties
ext {
    springVersion = '5.3.9'
    junitVersion = '5.7.2'
}

// Configurations
configurations {
    compileOnly
    testCompileOnly.extendsFrom compileOnly
}

repositories {
    mavenCentral()
    maven {
        url 'https://repo.example.com/maven'
    }
}

dependencies {
    implementation "org.springframework:spring-core:\${springVersion}"
    implementation "org.springframework:spring-context:\${springVersion}"

    compileOnly 'org.projectlombok:lombok:1.18.20'
    annotationProcessor 'org.projectlombok:lombok:1.18.20'

    testImplementation "org.junit.jupiter:junit-jupiter:\${junitVersion}"
}

// Source sets
sourceSets {
    main {
        java {
            srcDirs = ['src/main/java']
        }
        resources {
            srcDirs = ['src/main/resources']
        }
    }
}

// Test configuration
test {
    useJUnitPlatform()
    testLogging {
        events "passed", "skipped", "failed"
    }
}`}
          </pre>
        </div>
      </>
    ),
  },
  "groovy_gradle_deps": {
    title: "Gradle Dependencies",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Managing Dependencies in Gradle
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Dependency configurations
dependencies {
    // Compile-time and runtime
    implementation 'com.google.guava:guava:30.1-jre'

    // Compile-time only
    compileOnly 'org.projectlombok:lombok:1.18.20'

    // Runtime only
    runtimeOnly 'mysql:mysql-connector-java:8.0.25'

    // Test dependencies
    testImplementation 'org.junit.jupiter:junit-jupiter:5.7.2'
    testRuntimeOnly 'org.junit.platform:junit-platform-launcher'

    // API (exposed to consumers)
    api 'org.apache.commons:commons-lang3:3.12.0'
}

// Dependency with exclusions
dependencies {
    implementation('org.hibernate:hibernate-core:5.5.0') {
        exclude group: 'javax.xml.bind', module: 'jaxb-api'
    }
}

// Force specific version
configurations.all {
    resolutionStrategy {
        force 'com.google.guava:guava:30.1-jre'
    }
}

// Dependency from local file
dependencies {
    implementation files('libs/custom.jar')
    implementation fileTree(dir: 'libs', include: '*.jar')
}

// Project dependency (multi-module)
dependencies {
    implementation project(':common')
    implementation project(':utils')
}`}
          </pre>
        </div>
      </>
    ),
  },
  "groovy_gradle_tasks": {
    title: "Gradle Tasks",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Custom Gradle Tasks
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Simple task
task hello {
    doLast {
        println 'Hello, Gradle!'
    }
}

// Task with description
task greet {
    description = 'Prints a greeting'
    group = 'Custom'

    doFirst {
        println 'Starting...'
    }
    doLast {
        println 'Hello from Gradle!'
    }
}

// Task dependencies
task compile {
    doLast { println 'Compiling...' }
}

task test(dependsOn: compile) {
    doLast { println 'Testing...' }
}

task package(dependsOn: [compile, test]) {
    doLast { println 'Packaging...' }
}

// Task with inputs/outputs
task processFiles {
    inputs.dir 'src/data'
    outputs.dir 'build/processed'

    doLast {
        // Processing logic
    }
}

// Copy task
task copyDocs(type: Copy) {
    from 'docs'
    into 'build/docs'
    include '*.md'
}

// Exec task
task runScript(type: Exec) {
    commandLine 'bash', '-c', 'echo Hello'
}

// Task ordering
task taskA { doLast { println 'A' } }
task taskB { doLast { println 'B' } }
taskB.mustRunAfter taskA`}
          </pre>
        </div>
      </>
    ),
  },
  "groovy_jenkins": {
    title: "Jenkins Pipeline Basics",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Jenkins Pipeline Basics
        </h2>
        <p className="leading-relaxed mb-4">
          Jenkins Pipeline is a suite of plugins that supports implementing continuous delivery pipelines using Groovy-based DSL.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Jenkinsfile - Basic Pipeline

pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                sh 'mvn clean compile'
            }
        }

        stage('Test') {
            steps {
                echo 'Testing...'
                sh 'mvn test'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying...'
                sh './deploy.sh'
            }
        }
    }

    post {
        success {
            echo 'Pipeline succeeded!'
        }
        failure {
            echo 'Pipeline failed!'
        }
        always {
            echo 'Cleaning up...'
            cleanWs()
        }
    }
}`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">Key Concepts</h3>
        <ul className="list-disc ml-6 mb-4 leading-relaxed">
          <li><strong>pipeline:</strong> Top-level block for the entire pipeline</li>
          <li><strong>agent:</strong> Where the pipeline runs</li>
          <li><strong>stages:</strong> Collection of stages</li>
          <li><strong>stage:</strong> Named phase of the pipeline</li>
          <li><strong>steps:</strong> Actual work performed</li>
          <li><strong>post:</strong> Actions after pipeline completion</li>
        </ul>
      </>
    ),
  },
  "groovy_jenkins_declarative": {
    title: "Declarative Pipeline",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Declarative Pipeline
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`pipeline {
    agent {
        docker {
            image 'maven:3.8.1-jdk-11'
            args '-v /root/.m2:/root/.m2'
        }
    }

    environment {
        APP_NAME = 'my-app'
        VERSION = '1.0.0'
        DEPLOY_ENV = 'staging'
    }

    options {
        timeout(time: 1, unit: 'HOURS')
        disableConcurrentBuilds()
        buildDiscarder(logRotator(numToKeepStr: '10'))
    }

    parameters {
        string(name: 'BRANCH', defaultValue: 'main')
        booleanParam(name: 'DEPLOY', defaultValue: false)
        choice(name: 'ENV', choices: ['dev', 'staging', 'prod'])
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: "\${params.BRANCH}",
                    url: 'https://github.com/org/repo.git'
            }
        }

        stage('Build') {
            steps {
                sh 'mvn clean package -DskipTests'
            }
        }

        stage('Test') {
            parallel {
                stage('Unit Tests') {
                    steps {
                        sh 'mvn test'
                    }
                }
                stage('Integration Tests') {
                    steps {
                        sh 'mvn verify -Pintegration'
                    }
                }
            }
        }

        stage('Deploy') {
            when {
                expression { params.DEPLOY == true }
            }
            steps {
                sh "./deploy.sh \${params.ENV}"
            }
        }
    }
}`}
          </pre>
        </div>
      </>
    ),
  },
  "groovy_jenkins_scripted": {
    title: "Scripted Pipeline",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Scripted Pipeline
        </h2>
        <p className="leading-relaxed mb-4">
          Scripted pipelines offer more flexibility using full Groovy syntax.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Scripted Pipeline
node('linux') {
    def appName = 'my-app'
    def version = '1.0.0'

    try {
        stage('Checkout') {
            checkout scm
        }

        stage('Build') {
            sh 'mvn clean compile'
        }

        stage('Test') {
            sh 'mvn test'
            junit '**/target/surefire-reports/*.xml'
        }

        stage('Package') {
            sh 'mvn package -DskipTests'
            archiveArtifacts artifacts: '**/target/*.jar'
        }

        stage('Deploy') {
            if (env.BRANCH_NAME == 'main') {
                deploy()
            } else {
                echo "Skipping deploy for branch: \${env.BRANCH_NAME}"
            }
        }

    } catch (Exception e) {
        currentBuild.result = 'FAILURE'
        throw e

    } finally {
        cleanWs()
        notifyBuild()
    }
}

def deploy() {
    withCredentials([
        usernamePassword(
            credentialsId: 'deploy-creds',
            usernameVariable: 'USER',
            passwordVariable: 'PASS'
        )
    ]) {
        sh "./deploy.sh \${USER} \${PASS}"
    }
}

def notifyBuild() {
    def status = currentBuild.result ?: 'SUCCESS'
    echo "Build status: \${status}"
}`}
          </pre>
        </div>
      </>
    ),
  },
  "groovy_jenkins_shared": {
    title: "Shared Libraries",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Jenkins Shared Libraries
        </h2>
        <p className="leading-relaxed mb-4">
          Shared libraries allow you to share common pipeline code across projects.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Directory structure:
// shared-library/
//   vars/
//     buildJava.groovy
//     deployApp.groovy
//   src/
//     org/example/Utils.groovy
//   resources/
//     scripts/deploy.sh

// vars/buildJava.groovy
def call(Map config = [:]) {
    def javaVersion = config.javaVersion ?: '11'
    def skipTests = config.skipTests ?: false

    pipeline {
        agent any

        stages {
            stage('Build') {
                steps {
                    sh "mvn clean compile"
                }
            }
            stage('Test') {
                when { expression { !skipTests } }
                steps {
                    sh "mvn test"
                }
            }
            stage('Package') {
                steps {
                    sh "mvn package -DskipTests"
                }
            }
        }
    }
}

// vars/deployApp.groovy
def call(String env, String version) {
    echo "Deploying version \${version} to \${env}"
    sh "./deploy.sh \${env} \${version}"
}

// src/org/example/Utils.groovy
package org.example

class Utils {
    static String getVersion(script) {
        return script.sh(
            script: 'cat version.txt',
            returnStdout: true
        ).trim()
    }
}

// Using in Jenkinsfile
@Library('my-shared-library') _

buildJava(javaVersion: '17', skipTests: false)

// Or custom usage
@Library('my-shared-library') _
import org.example.Utils

pipeline {
    agent any
    stages {
        stage('Deploy') {
            steps {
                script {
                    def version = Utils.getVersion(this)
                    deployApp('staging', version)
                }
            }
        }
    }
}`}
          </pre>
        </div>
      </>
    ),
  },
};
