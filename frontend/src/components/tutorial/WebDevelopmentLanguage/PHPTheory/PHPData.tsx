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
  { label: "PHP HOME", href: "php_home" },
  { label: "PHP Intro", href: "php_intro" },
  { label: "PHP Install", href: "php_install" },
  { label: "PHP Syntax", href: "php_syntax" },
  { label: "PHP Comments", href: "php_comments" },
  { label: "PHP Variables", href: "php_variables" },
  { label: "PHP Echo / Print", href: "php_echo_print" },
  { label: "PHP Data Types", href: "php_data_types" },
  { label: "PHP Strings", href: "php_strings" },
  { label: "PHP Numbers", href: "php_numbers" },
  { label: "PHP Casting", href: "php_casting" },
  { label: "PHP Math", href: "php_math" },
  { label: "PHP Constants", href: "php_constants" },
  { label: "PHP Magic Constants", href: "php_magic_constants" },
  { label: "PHP Operators", href: "php_operators" },
  { label: "PHP If...Else...Elseif", href: "php_if_else" },
  { label: "PHP Switch", href: "php_switch" },
  {
    label: "PHP Loops",
    href: "php_loops",
    isHeader: true,
    children: [
      { label: "Loops Overview", href: "php_loops" },
      { label: "While Loop", href: "php_while_loop" },
      { label: "Do While Loop", href: "php_do_while" },
      { label: "For Loop", href: "php_for_loop" },
      { label: "Foreach Loop", href: "php_foreach" },
      { label: "Break", href: "php_break" },
      { label: "Continue", href: "php_continue" },
    ]
  },
  { label: "PHP Functions", href: "php_functions" },
  {
    label: "PHP Arrays",
    href: "php_arrays",
    isHeader: true,
    children: [
      { label: "Arrays Overview", href: "php_arrays" },
      { label: "Indexed Arrays", href: "php_indexed_arrays" },
      { label: "Associative Arrays", href: "php_associative_arrays" },
      { label: "Create Arrays", href: "php_create_arrays" },
      { label: "Access Arrays", href: "php_access_arrays" },
      { label: "Update Arrays", href: "php_update_arrays" },
      { label: "Add Array Items", href: "php_add_array_items" },
      { label: "Remove Array Items", href: "php_remove_array_items" },
      { label: "Sorting Arrays", href: "php_sorting_arrays" },
      { label: "Multidimensional Arrays", href: "php_multidimensional_arrays" },
      { label: "Array Functions", href: "php_array_functions" },
    ]
  },
  {
    label: "PHP Superglobals",
    href: "php_superglobals",
    isHeader: true,
    children: [
      { label: "Superglobals Overview", href: "php_superglobals" },
      { label: "$GLOBALS", href: "php_globals" },
      { label: "$_SERVER", href: "php_server" },
      { label: "$_REQUEST", href: "php_request" },
      { label: "$_POST", href: "php_post" },
      { label: "$_GET", href: "php_get" },
    ]
  },
  { label: "PHP RegEx", href: "php_regex" },
  {
    label: "PHP Forms",
    href: "php_forms",
    isHeader: true,
    children: [
      { label: "Form Handling", href: "php_forms" },
      { label: "Form Validation", href: "php_form_validation" },
      { label: "Form Required", href: "php_form_required" },
      { label: "Form URL/E-mail", href: "php_form_url_email" },
      { label: "Form Complete", href: "php_form_complete" },
    ]
  },
  { label: "PHP Date and Time", href: "php_date_time" },
  { label: "PHP Include Files", href: "php_include" },
  {
    label: "PHP File Handling",
    href: "php_file_handling",
    isHeader: true,
    children: [
      { label: "File Handling Overview", href: "php_file_handling" },
      { label: "File Open/Read", href: "php_file_open_read" },
      { label: "File Create/Write", href: "php_file_create_write" },
      { label: "File Upload", href: "php_file_upload" },
    ]
  },
  { label: "PHP Cookies", href: "php_cookies" },
  { label: "PHP Sessions", href: "php_sessions" },
  { label: "PHP Filters", href: "php_filters" },
  { label: "PHP Filters Advanced", href: "php_filters_advanced" },
  { label: "PHP Callback Functions", href: "php_callback_functions" },
  { label: "PHP JSON", href: "php_json" },
  { label: "PHP Exceptions", href: "php_exceptions" },
  {
    label: "PHP OOP",
    href: "php_oop",
    isHeader: true,
    children: [
      { label: "OOP Overview", href: "php_oop" },
      { label: "Classes/Objects", href: "php_classes_objects" },
      { label: "Constructor", href: "php_constructor" },
      { label: "Destructor", href: "php_destructor" },
      { label: "Access Modifiers", href: "php_access_modifiers" },
      { label: "Inheritance", href: "php_inheritance" },
      { label: "Constants", href: "php_oop_constants" },
      { label: "Abstract Classes", href: "php_abstract_classes" },
      { label: "Interfaces", href: "php_interfaces" },
      { label: "Traits", href: "php_traits" },
      { label: "Static Methods", href: "php_static_methods" },
      { label: "Static Properties", href: "php_static_properties" },
    ]
  },
  {
    label: "PHP MySQL Database",
    href: "php_mysql_intro",
    isHeader: true,
    children: [
      { label: "MySQL Database", href: "php_mysql_intro" },
      { label: "MySQL Connect", href: "php_mysql_connect" },
      { label: "MySQL Create DB", href: "php_mysql_create_db" },
      { label: "MySQL Create Table", href: "php_mysql_create_table" },
      { label: "MySQL Insert Data", href: "php_mysql_insert" },
      { label: "MySQL Insert Multiple", href: "php_mysql_insert_multiple" },
      { label: "MySQL Prepared", href: "php_mysql_prepared" },
      { label: "MySQL Select Data", href: "php_mysql_select" },
      { label: "MySQL Where", href: "php_mysql_where" },
      { label: "MySQL Order By", href: "php_mysql_order_by" },
      { label: "MySQL Delete Data", href: "php_mysql_delete" },
      { label: "MySQL Update Data", href: "php_mysql_update" },
      { label: "MySQL Limit Data", href: "php_mysql_limit" },
    ]
  },
];

export const tutorialContent: Record<string, TopicContent> = {
  "php_home": {
    title: "PHP Tutorial",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Learn PHP
        </h2>
        <p className="leading-relaxed mb-4">
          <strong>PHP</strong> is a server scripting language, and a powerful tool for making dynamic and interactive Web pages.
        </p>
        <p className="leading-relaxed mb-4">
          PHP is a widely-used, free, and efficient alternative to competitors such as Microsoft's ASP.
        </p>
        <h3 className="text-xl font-medium mb-3">Example: Simple PHP Script</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<!DOCTYPE html>
<html>
<body>

<?php
echo "Hello World!";
?>

</body>
</html>`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">What You Will Learn</h3>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>PHP Syntax and Variables</li>
          <li>PHP Data Types and Operators</li>
          <li>PHP Control Structures (If/Else, Switch, Loops)</li>
          <li>PHP Functions and Arrays</li>
          <li>PHP Forms and User Input</li>
          <li>PHP File Handling</li>
          <li>PHP Object-Oriented Programming</li>
          <li>PHP MySQL Database Integration</li>
        </ul>
      </>
    ),
  },
  "php_intro": {
    title: "PHP Introduction",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          What is PHP?
        </h2>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
          <li>PHP is an acronym for "PHP: Hypertext Preprocessor"</li>
          <li>PHP is a widely-used, open source scripting language</li>
          <li>PHP scripts are executed on the server</li>
          <li>PHP is free to download and use</li>
        </ul>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200">
          What is a PHP File?
        </h2>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
          <li>PHP files can contain text, HTML, CSS, JavaScript, and PHP code</li>
          <li>PHP code is executed on the server, and the result is returned to the browser as plain HTML</li>
          <li>PHP files have extension ".php"</li>
        </ul>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200">
          What Can PHP Do?
        </h2>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>PHP can generate dynamic page content</li>
          <li>PHP can create, open, read, write, delete, and close files on the server</li>
          <li>PHP can collect form data</li>
          <li>PHP can send and receive cookies</li>
          <li>PHP can add, delete, modify data in your database</li>
          <li>PHP can be used to control user-access</li>
          <li>PHP can encrypt data</li>
        </ul>
      </>
    ),
  },
  "php_install": {
    title: "PHP Installation",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          What Do I Need?
        </h2>
        <p className="leading-relaxed mb-4">
          To start using PHP, you can:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
          <li>Find a web host with PHP and MySQL support</li>
          <li>Install a web server on your own PC, and then install PHP and MySQL</li>
        </ul>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200">
          Use a Web Host With PHP Support
        </h2>
        <p className="leading-relaxed mb-4">
          If your server has activated support for PHP you do not need to do anything. Just create some .php files, place them in your web directory and the server will automatically parse them for you.
        </p>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200">
          Set Up PHP on Your Own PC
        </h2>
        <p className="leading-relaxed mb-4">
          However, if your server does not support PHP, you must install a web server with PHP support. Here are some free options:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><strong>XAMPP</strong> - Apache + MariaDB + PHP + Perl (Windows, Linux, macOS)</li>
          <li><strong>WAMP</strong> - Windows, Apache, MySQL, PHP</li>
          <li><strong>MAMP</strong> - macOS, Apache, MySQL, PHP</li>
          <li><strong>LAMP</strong> - Linux, Apache, MySQL, PHP</li>
        </ul>
      </>
    ),
  },
  "php_syntax": {
    title: "PHP Syntax",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Basic PHP Syntax
        </h2>
        <p className="leading-relaxed mb-4">
          A PHP script can be placed anywhere in the document. A PHP script starts with <code>&lt;?php</code> and ends with <code>?&gt;</code>:
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<?php
// PHP code goes here
?>`}
          </pre>
        </div>
        <p className="leading-relaxed mb-4">
          The default file extension for PHP files is ".php". A PHP file normally contains HTML tags, and some PHP scripting code.
        </p>
        <h3 className="text-xl font-medium mb-3">Example</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<!DOCTYPE html>
<html>
<body>

<h1>My first PHP page</h1>

<?php
echo "Hello World!";
?>

</body>
</html>`}
          </pre>
        </div>
        <p className="leading-relaxed mb-4">
          <strong>Note:</strong> PHP statements end with a semicolon (;).
        </p>
      </>
    ),
  },
  "php_comments": {
    title: "PHP Comments",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Comments in PHP
        </h2>
        <p className="leading-relaxed mb-4">
          A comment in PHP code is a line that is not executed as a part of the program. Its only purpose is to be read by someone who is looking at the code.
        </p>
        <h3 className="text-xl font-medium mb-3">Single-line Comments</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<?php
// This is a single-line comment

# This is also a single-line comment
?>`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">Multi-line Comments</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<?php
/*
This is a multi-line comment block
that spans over multiple
lines
*/
?>`}
          </pre>
        </div>
      </>
    ),
  },
  "php_variables": {
    title: "PHP Variables",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Creating (Declaring) PHP Variables
        </h2>
        <p className="leading-relaxed mb-4">
          In PHP, a variable starts with the $ sign, followed by the name of the variable:
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<?php
$txt = "Hello World!";
$x = 5;
$y = 10.5;
?>`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">Rules for PHP Variables</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
          <li>A variable starts with the $ sign, followed by the name of the variable</li>
          <li>A variable name must start with a letter or the underscore character</li>
          <li>A variable name cannot start with a number</li>
          <li>A variable name can only contain alpha-numeric characters and underscores (A-z, 0-9, and _)</li>
          <li>Variable names are case-sensitive ($age and $AGE are two different variables)</li>
        </ul>
      </>
    ),
  },
  "php_echo_print": {
    title: "PHP Echo / Print",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          PHP echo and print Statements
        </h2>
        <p className="leading-relaxed mb-4">
          In PHP there are two basic ways to get output: <code>echo</code> and <code>print</code>.
        </p>
        <h3 className="text-xl font-medium mb-3">The echo Statement</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<?php
echo "Hello World!";
echo "This ", "string ", "was ", "made ", "with multiple parameters.";
?>`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">The print Statement</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<?php
print "Hello World!";
print "I love PHP!";
?>`}
          </pre>
        </div>
        <p className="leading-relaxed mb-4">
          <strong>Tip:</strong> echo is marginally faster than print as it doesn't return any value.
        </p>
      </>
    ),
  },
  "php_data_types": {
    title: "PHP Data Types",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          PHP Data Types
        </h2>
        <p className="leading-relaxed mb-4">
          Variables can store data of different types, and different data types can do different things. PHP supports the following data types:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
          <li><strong>String</strong> - A sequence of characters</li>
          <li><strong>Integer</strong> - A non-decimal number</li>
          <li><strong>Float</strong> - A number with a decimal point</li>
          <li><strong>Boolean</strong> - TRUE or FALSE</li>
          <li><strong>Array</strong> - Stores multiple values in one variable</li>
          <li><strong>Object</strong> - Stores data and information on how to process that data</li>
          <li><strong>NULL</strong> - Special type with only one value: NULL</li>
          <li><strong>Resource</strong> - Special variable holding a reference to an external resource</li>
        </ul>
        <h3 className="text-xl font-medium mb-3">Example</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<?php
$txt = "Hello";        // String
$x = 5;                // Integer
$y = 10.5;             // Float
$z = true;             // Boolean
$cars = array("Volvo", "BMW", "Toyota");  // Array
$a = null;             // NULL
?>`}
          </pre>
        </div>
      </>
    ),
  },
  "php_strings": {
    title: "PHP Strings",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          PHP Strings
        </h2>
        <p className="leading-relaxed mb-4">
          A string is a sequence of characters, like "Hello world!".
        </p>
        <h3 className="text-xl font-medium mb-3">String Functions</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<?php
$txt = "Hello World!";

echo strlen($txt);       // Returns 12 (length)
echo str_word_count($txt); // Returns 2 (word count)
echo strrev($txt);       // Returns "!dlroW olleH" (reversed)
echo strpos($txt, "World"); // Returns 6 (position)
echo str_replace("World", "PHP", $txt); // Returns "Hello PHP!"
?>`}
          </pre>
        </div>
      </>
    ),
  },
  "php_numbers": {
    title: "PHP Numbers",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          PHP Numbers
        </h2>
        <p className="leading-relaxed mb-4">
          PHP has two main types of numbers: integers and floats.
        </p>
        <h3 className="text-xl font-medium mb-3">PHP Integers</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<?php
$x = 5985;
var_dump(is_int($x));  // bool(true)

$y = -125;
var_dump(is_int($y));  // bool(true)
?>`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">PHP Floats</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<?php
$x = 10.365;
var_dump(is_float($x));  // bool(true)
?>`}
          </pre>
        </div>
      </>
    ),
  },
  "php_casting": {
    title: "PHP Casting",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          PHP Type Casting
        </h2>
        <p className="leading-relaxed mb-4">
          Sometimes you need to change a variable from one data type into another.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<?php
$a = 5;       // Integer
$b = 5.34;    // Float
$c = "hello"; // String

// Cast to string
$a = (string) $a;

// Cast to integer
$b = (int) $b;

// Cast to float
$d = (float) "3.14";

var_dump($a);  // string(1) "5"
var_dump($b);  // int(5)
var_dump($d);  // float(3.14)
?>`}
          </pre>
        </div>
      </>
    ),
  },
  "php_math": {
    title: "PHP Math",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          PHP Math Functions
        </h2>
        <p className="leading-relaxed mb-4">
          PHP has a set of math functions that allows you to perform mathematical tasks on numbers.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<?php
echo pi();           // 3.1415926535898
echo min(0, 150, 30, 20, -8);  // -8
echo max(0, 150, 30, 20, -8);  // 150
echo abs(-6.7);      // 6.7
echo sqrt(64);       // 8
echo round(0.60);    // 1
echo round(0.49);    // 0
echo rand();         // Random number
echo rand(10, 100);  // Random number between 10 and 100
?>`}
          </pre>
        </div>
      </>
    ),
  },
  "php_constants": {
    title: "PHP Constants",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          PHP Constants
        </h2>
        <p className="leading-relaxed mb-4">
          A constant is an identifier for a simple value. The value cannot be changed during the script.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<?php
define("GREETING", "Welcome to PHP!");
echo GREETING;

// PHP 7 - define() can create array constant
define("CARS", ["BMW", "Toyota", "Volvo"]);
echo CARS[0];
?>`}
          </pre>
        </div>
      </>
    ),
  },
  "php_magic_constants": {
    title: "PHP Magic Constants",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          PHP Magic Constants
        </h2>
        <p className="leading-relaxed mb-4">
          PHP has nine predefined constants that change value depending on where they are used.
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
          <li><code>__LINE__</code> - The current line number of the file</li>
          <li><code>__FILE__</code> - The full path and filename of the file</li>
          <li><code>__DIR__</code> - The directory of the file</li>
          <li><code>__FUNCTION__</code> - The function name</li>
          <li><code>__CLASS__</code> - The class name</li>
          <li><code>__TRAIT__</code> - The trait name</li>
          <li><code>__METHOD__</code> - The class method name</li>
          <li><code>__NAMESPACE__</code> - The name of the current namespace</li>
        </ul>
      </>
    ),
  },
  "php_operators": {
    title: "PHP Operators",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          PHP Operators
        </h2>
        <p className="leading-relaxed mb-4">
          Operators are used to perform operations on variables and values.
        </p>
        <h3 className="text-xl font-medium mb-3">Arithmetic Operators</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<?php
$x = 10;
$y = 3;

echo $x + $y;  // Addition: 13
echo $x - $y;  // Subtraction: 7
echo $x * $y;  // Multiplication: 30
echo $x / $y;  // Division: 3.333...
echo $x % $y;  // Modulus: 1
echo $x ** $y; // Exponentiation: 1000
?>`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">Comparison Operators</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<?php
$x = 100;
$y = "100";

var_dump($x == $y);   // true (equal)
var_dump($x === $y);  // false (identical - same type)
var_dump($x != $y);   // false (not equal)
var_dump($x !== $y);  // true (not identical)
?>`}
          </pre>
        </div>
      </>
    ),
  },
  "php_if_else": {
    title: "PHP If...Else...Elseif",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          PHP Conditional Statements
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<?php
$t = date("H");

if ($t < "10") {
  echo "Good morning!";
} elseif ($t < "20") {
  echo "Good day!";
} else {
  echo "Good night!";
}
?>`}
          </pre>
        </div>
      </>
    ),
  },
  "php_switch": {
    title: "PHP Switch",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          PHP Switch Statement
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<?php
$favcolor = "red";

switch ($favcolor) {
  case "red":
    echo "Your favorite color is red!";
    break;
  case "blue":
    echo "Your favorite color is blue!";
    break;
  case "green":
    echo "Your favorite color is green!";
    break;
  default:
    echo "Your favorite color is neither red, blue, nor green!";
}
?>`}
          </pre>
        </div>
      </>
    ),
  },
  "php_loops": {
    title: "PHP Loops",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          PHP Loops
        </h2>
        <p className="leading-relaxed mb-4">
          PHP has the following loop types:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
          <li><strong>while</strong> - loops through a block of code as long as the specified condition is true</li>
          <li><strong>do...while</strong> - loops through a block of code once, then repeats as long as the specified condition is true</li>
          <li><strong>for</strong> - loops through a block of code a specified number of times</li>
          <li><strong>foreach</strong> - loops through a block of code for each element in an array</li>
        </ul>
      </>
    ),
  },
  "php_while_loop": {
    title: "PHP While Loop",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          PHP While Loop
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<?php
$x = 1;

while($x <= 5) {
  echo "The number is: $x <br>";
  $x++;
}
?>`}
          </pre>
        </div>
      </>
    ),
  },
  "php_do_while": {
    title: "PHP Do While Loop",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          PHP Do While Loop
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<?php
$x = 1;

do {
  echo "The number is: $x <br>";
  $x++;
} while ($x <= 5);
?>`}
          </pre>
        </div>
      </>
    ),
  },
  "php_for_loop": {
    title: "PHP For Loop",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          PHP For Loop
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<?php
for ($x = 0; $x <= 10; $x++) {
  echo "The number is: $x <br>";
}
?>`}
          </pre>
        </div>
      </>
    ),
  },
  "php_foreach": {
    title: "PHP Foreach Loop",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          PHP Foreach Loop
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<?php
$colors = array("red", "green", "blue", "yellow");

foreach ($colors as $value) {
  echo "$value <br>";
}

// With keys
$age = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");

foreach($age as $x => $val) {
  echo "$x = $val<br>";
}
?>`}
          </pre>
        </div>
      </>
    ),
  },
  "php_break": {
    title: "PHP Break",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          PHP Break Statement
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<?php
for ($x = 0; $x < 10; $x++) {
  if ($x == 4) {
    break;
  }
  echo "The number is: $x <br>";
}
// Output: 0, 1, 2, 3
?>`}
          </pre>
        </div>
      </>
    ),
  },
  "php_continue": {
    title: "PHP Continue",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          PHP Continue Statement
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<?php
for ($x = 0; $x < 10; $x++) {
  if ($x == 4) {
    continue;
  }
  echo "The number is: $x <br>";
}
// Output: 0, 1, 2, 3, 5, 6, 7, 8, 9 (skips 4)
?>`}
          </pre>
        </div>
      </>
    ),
  },
  "php_functions": {
    title: "PHP Functions",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          PHP Functions
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<?php
function writeMsg() {
  echo "Hello world!";
}

writeMsg(); // Call the function

// Function with arguments
function familyName($fname, $year) {
  echo "$fname was born in $year <br>";
}

familyName("John", 1995);
familyName("Jane", 1998);

// Function with return value
function sum($x, $y) {
  return $x + $y;
}

echo sum(5, 10);
?>`}
          </pre>
        </div>
      </>
    ),
  },
  "php_arrays": {
    title: "PHP Arrays",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          PHP Arrays
        </h2>
        <p className="leading-relaxed mb-4">
          An array stores multiple values in one single variable:
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<?php
$cars = array("Volvo", "BMW", "Toyota");
echo "I like " . $cars[0] . ", " . $cars[1] . " and " . $cars[2] . ".";
?>`}
          </pre>
        </div>
      </>
    ),
  },
  "php_indexed_arrays": {
    title: "PHP Indexed Arrays",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          PHP Indexed Arrays
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<?php
$cars = array("Volvo", "BMW", "Toyota");
// or
$cars = ["Volvo", "BMW", "Toyota"];

echo $cars[0]; // Volvo
echo count($cars); // 3
?>`}
          </pre>
        </div>
      </>
    ),
  },
  "php_associative_arrays": {
    title: "PHP Associative Arrays",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          PHP Associative Arrays
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<?php
$age = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");
// or
$age = ["Peter"=>"35", "Ben"=>"37", "Joe"=>"43"];

echo "Peter is " . $age['Peter'] . " years old.";
?>`}
          </pre>
        </div>
      </>
    ),
  },
  "php_create_arrays": {
    title: "PHP Create Arrays",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Creating Arrays in PHP
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<?php
// Method 1: Using array()
$fruits = array("Apple", "Banana", "Orange");

// Method 2: Using short syntax []
$cars = ["Volvo", "BMW", "Toyota"];

// Method 3: Adding elements one by one
$colors = [];
$colors[] = "Red";
$colors[] = "Green";
$colors[] = "Blue";
?>`}
          </pre>
        </div>
      </>
    ),
  },
  "php_access_arrays": {
    title: "PHP Access Array Items",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Access Array Items
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<?php
$cars = ["Volvo", "BMW", "Toyota"];
echo $cars[0]; // Volvo

$age = ["Peter"=>"35", "Ben"=>"37"];
echo $age["Peter"]; // 35
?>`}
          </pre>
        </div>
      </>
    ),
  },
  "php_update_arrays": {
    title: "PHP Update Array Items",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Update Array Items
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<?php
$cars = ["Volvo", "BMW", "Toyota"];
$cars[1] = "Ford";
print_r($cars); // ["Volvo", "Ford", "Toyota"]
?>`}
          </pre>
        </div>
      </>
    ),
  },
  "php_add_array_items": {
    title: "PHP Add Array Items",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Add Array Items
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<?php
$fruits = ["Apple", "Banana"];

// Add to end
$fruits[] = "Orange";
array_push($fruits, "Mango");

// Add to beginning
array_unshift($fruits, "Lemon");
?>`}
          </pre>
        </div>
      </>
    ),
  },
  "php_remove_array_items": {
    title: "PHP Remove Array Items",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Remove Array Items
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<?php
$cars = ["Volvo", "BMW", "Toyota"];

// Remove last element
array_pop($cars);

// Remove first element
array_shift($cars);

// Remove specific element
unset($cars[1]);
?>`}
          </pre>
        </div>
      </>
    ),
  },
  "php_sorting_arrays": {
    title: "PHP Sorting Arrays",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          PHP Sorting Arrays
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<?php
$cars = ["Volvo", "BMW", "Toyota"];

sort($cars);    // Sort ascending
rsort($cars);   // Sort descending

// Associative arrays
$age = ["Peter"=>"35", "Ben"=>"37", "Joe"=>"43"];
asort($age);    // Sort by value ascending
ksort($age);    // Sort by key ascending
arsort($age);   // Sort by value descending
krsort($age);   // Sort by key descending
?>`}
          </pre>
        </div>
      </>
    ),
  },
  "php_multidimensional_arrays": {
    title: "PHP Multidimensional Arrays",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          PHP Multidimensional Arrays
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<?php
$cars = array(
  array("Volvo", 22, 18),
  array("BMW", 15, 13),
  array("Toyota", 5, 2)
);

echo $cars[0][0]; // Volvo
echo $cars[1][1]; // 15
?>`}
          </pre>
        </div>
      </>
    ),
  },
  "php_array_functions": {
    title: "PHP Array Functions",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          PHP Array Functions
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<?php
$a = [1, 2, 3];
$b = [4, 5, 6];

// Merge arrays
$c = array_merge($a, $b);

// Check if value exists
in_array(2, $a); // true

// Get keys
array_keys($a);

// Get values
array_values($a);

// Filter array
$filtered = array_filter($a, fn($x) => $x > 1);

// Map array
$mapped = array_map(fn($x) => $x * 2, $a);
?>`}
          </pre>
        </div>
      </>
    ),
  },
  "php_superglobals": {
    title: "PHP Superglobals",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          PHP Superglobals
        </h2>
        <p className="leading-relaxed mb-4">
          Superglobals are built-in variables that are always available in all scopes.
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><code>$GLOBALS</code></li>
          <li><code>$_SERVER</code></li>
          <li><code>$_REQUEST</code></li>
          <li><code>$_POST</code></li>
          <li><code>$_GET</code></li>
          <li><code>$_FILES</code></li>
          <li><code>$_ENV</code></li>
          <li><code>$_COOKIE</code></li>
          <li><code>$_SESSION</code></li>
        </ul>
      </>
    ),
  },
  "php_globals": {
    title: "PHP $GLOBALS",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          PHP $GLOBALS
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<?php
$x = 75;
$y = 25;

function addition() {
  $GLOBALS['z'] = $GLOBALS['x'] + $GLOBALS['y'];
}

addition();
echo $z; // 100
?>`}
          </pre>
        </div>
      </>
    ),
  },
  "php_server": {
    title: "PHP $_SERVER",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          PHP $_SERVER
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<?php
echo $_SERVER['PHP_SELF'];
echo $_SERVER['SERVER_NAME'];
echo $_SERVER['HTTP_HOST'];
echo $_SERVER['HTTP_USER_AGENT'];
echo $_SERVER['SCRIPT_NAME'];
?>`}
          </pre>
        </div>
      </>
    ),
  },
  "php_request": {
    title: "PHP $_REQUEST",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          PHP $_REQUEST
        </h2>
        <p className="leading-relaxed mb-4">
          $_REQUEST is used to collect data after submitting an HTML form.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<form method="post" action="<?php echo $_SERVER['PHP_SELF'];?>">
  Name: <input type="text" name="fname">
  <input type="submit">
</form>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_REQUEST['fname'];
  echo $name;
}
?>`}
          </pre>
        </div>
      </>
    ),
  },
  "php_post": {
    title: "PHP $_POST",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          PHP $_POST
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<form method="post" action="welcome.php">
  Name: <input type="text" name="name">
  E-mail: <input type="text" name="email">
  <input type="submit">
</form>

<?php
// welcome.php
echo "Welcome " . $_POST["name"];
echo "Your email is: " . $_POST["email"];
?>`}
          </pre>
        </div>
      </>
    ),
  },
  "php_get": {
    title: "PHP $_GET",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          PHP $_GET
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<!-- Link with query string -->
<a href="test.php?name=John&age=25">Test $GET</a>

<?php
// test.php
echo "Name: " . $_GET['name'];
echo "Age: " . $_GET['age'];
?>`}
          </pre>
        </div>
      </>
    ),
  },
  "php_regex": {
    title: "PHP Regular Expressions",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          PHP Regular Expressions
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<?php
$str = "Visit PHP Tutorial";

// preg_match() - returns 1 if match found
echo preg_match("/php/i", $str); // 1 (case-insensitive)

// preg_match_all() - returns number of matches
echo preg_match_all("/i/", $str); // 3

// preg_replace() - replace matches
echo preg_replace("/php/i", "Python", $str); // Visit Python Tutorial
?>`}
          </pre>
        </div>
      </>
    ),
  },
  "php_forms": {
    title: "PHP Form Handling",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          PHP Form Handling
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<form action="welcome.php" method="post">
  Name: <input type="text" name="name"><br>
  E-mail: <input type="text" name="email"><br>
  <input type="submit">
</form>

<?php
// welcome.php
echo "Welcome " . htmlspecialchars($_POST["name"]) . "<br>";
echo "Your email: " . htmlspecialchars($_POST["email"]);
?>`}
          </pre>
        </div>
      </>
    ),
  },
  "php_form_validation": {
    title: "PHP Form Validation",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          PHP Form Validation
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<?php
$name = $email = "";
$nameErr = $emailErr = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if (empty($_POST["name"])) {
    $nameErr = "Name is required";
  } else {
    $name = test_input($_POST["name"]);
  }

  if (empty($_POST["email"])) {
    $emailErr = "Email is required";
  } else {
    $email = test_input($_POST["email"]);
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      $emailErr = "Invalid email format";
    }
  }
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
?>`}
          </pre>
        </div>
      </>
    ),
  },
  "php_form_required": {
    title: "PHP Form Required Fields",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Required Fields
        </h2>
        <p className="leading-relaxed mb-4">
          Use PHP to check if required fields are filled before processing the form.
        </p>
      </>
    ),
  },
  "php_form_url_email": {
    title: "PHP Form URL/Email Validation",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Validate E-mail and URL
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<?php
// Validate email
$email = "test@example.com";
if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
  echo "Valid email";
}

// Validate URL
$url = "https://www.example.com";
if (filter_var($url, FILTER_VALIDATE_URL)) {
  echo "Valid URL";
}
?>`}
          </pre>
        </div>
      </>
    ),
  },
  "php_form_complete": {
    title: "PHP Complete Form",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Complete Form Example
        </h2>
        <p className="leading-relaxed mb-4">
          A complete form example with validation for name, email, website, and comment fields.
        </p>
      </>
    ),
  },
  "php_date_time": {
    title: "PHP Date and Time",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          PHP Date and Time
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<?php
echo date("Y/m/d");       // 2024/01/15
echo date("Y.m.d");       // 2024.01.15
echo date("Y-m-d");       // 2024-01-15
echo date("l");           // Monday

echo date("h:i:sa");      // 10:45:32am
echo date("H:i:s");       // 10:45:32

// Set timezone
date_default_timezone_set("America/New_York");
?>`}
          </pre>
        </div>
      </>
    ),
  },
  "php_include": {
    title: "PHP Include Files",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          PHP Include Files
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<?php
// include - continues if file not found
include 'header.php';

// require - stops if file not found
require 'config.php';

// include_once / require_once
include_once 'functions.php';
require_once 'database.php';
?>`}
          </pre>
        </div>
      </>
    ),
  },
  "php_file_handling": {
    title: "PHP File Handling",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          PHP File Handling
        </h2>
        <p className="leading-relaxed mb-4">
          PHP has several functions for creating, reading, uploading, and editing files.
        </p>
      </>
    ),
  },
  "php_file_open_read": {
    title: "PHP File Open/Read",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          PHP File Open/Read
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<?php
// Read entire file
echo readfile("demo.txt");

// Open and read
$myfile = fopen("demo.txt", "r");
echo fread($myfile, filesize("demo.txt"));
fclose($myfile);

// Read line by line
$myfile = fopen("demo.txt", "r");
while(!feof($myfile)) {
  echo fgets($myfile) . "<br>";
}
fclose($myfile);
?>`}
          </pre>
        </div>
      </>
    ),
  },
  "php_file_create_write": {
    title: "PHP File Create/Write",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          PHP File Create/Write
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<?php
// Create and write
$myfile = fopen("newfile.txt", "w");
fwrite($myfile, "Hello World!");
fclose($myfile);

// Append
$myfile = fopen("newfile.txt", "a");
fwrite($myfile, "\\nNew line");
fclose($myfile);
?>`}
          </pre>
        </div>
      </>
    ),
  },
  "php_file_upload": {
    title: "PHP File Upload",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          PHP File Upload
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<form action="upload.php" method="post" enctype="multipart/form-data">
  Select file: <input type="file" name="fileToUpload">
  <input type="submit" value="Upload">
</form>

<?php
$target_dir = "uploads/";
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);

if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
  echo "File uploaded successfully.";
} else {
  echo "Error uploading file.";
}
?>`}
          </pre>
        </div>
      </>
    ),
  },
  "php_cookies": {
    title: "PHP Cookies",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          PHP Cookies
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<?php
// Set a cookie (expires in 30 days)
setcookie("user", "John Doe", time() + (86400 * 30), "/");

// Get a cookie
if(isset($_COOKIE["user"])) {
  echo "Welcome " . $_COOKIE["user"];
}

// Delete a cookie
setcookie("user", "", time() - 3600);
?>`}
          </pre>
        </div>
      </>
    ),
  },
  "php_sessions": {
    title: "PHP Sessions",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          PHP Sessions
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<?php
// Start session
session_start();

// Set session variables
$_SESSION["username"] = "JohnDoe";
$_SESSION["email"] = "john@example.com";

// Get session variables
echo $_SESSION["username"];

// Destroy session
session_unset();
session_destroy();
?>`}
          </pre>
        </div>
      </>
    ),
  },
  "php_filters": {
    title: "PHP Filters",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          PHP Filters
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<?php
// Sanitize a string
$str = "<h1>Hello World!</h1>";
$newstr = filter_var($str, FILTER_SANITIZE_STRING);

// Validate an integer
$int = 100;
if (filter_var($int, FILTER_VALIDATE_INT)) {
  echo "Valid integer";
}

// Validate an email
$email = "john@example.com";
if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
  echo "Valid email";
}
?>`}
          </pre>
        </div>
      </>
    ),
  },
  "php_filters_advanced": {
    title: "PHP Filters Advanced",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          PHP Advanced Filters
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<?php
// Validate integer within range
$int = 122;
$options = array(
  "options" => array(
    "min_range" => 0,
    "max_range" => 256
  )
);

if (filter_var($int, FILTER_VALIDATE_INT, $options)) {
  echo "Valid integer within range";
}
?>`}
          </pre>
        </div>
      </>
    ),
  },
  "php_callback_functions": {
    title: "PHP Callback Functions",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          PHP Callback Functions
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<?php
function my_callback($item) {
  return strlen($item);
}

$strings = ["apple", "orange", "banana", "coconut"];
$lengths = array_map("my_callback", $strings);
print_r($lengths);

// Arrow function
$lengths = array_map(fn($item) => strlen($item), $strings);
?>`}
          </pre>
        </div>
      </>
    ),
  },
  "php_json": {
    title: "PHP JSON",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          PHP JSON
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<?php
// Encode PHP array to JSON
$age = array("Peter"=>35, "Ben"=>37, "Joe"=>43);
echo json_encode($age);
// {"Peter":35,"Ben":37,"Joe":43}

// Decode JSON to PHP
$json = '{"Peter":35,"Ben":37,"Joe":43}';
$obj = json_decode($json);
echo $obj->Peter; // 35

// Decode to array
$arr = json_decode($json, true);
echo $arr["Peter"]; // 35
?>`}
          </pre>
        </div>
      </>
    ),
  },
  "php_exceptions": {
    title: "PHP Exceptions",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          PHP Exceptions
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<?php
function divide($dividend, $divisor) {
  if($divisor == 0) {
    throw new Exception("Division by zero");
  }
  return $dividend / $divisor;
}

try {
  echo divide(5, 0);
} catch(Exception $e) {
  echo "Error: " . $e->getMessage();
} finally {
  echo "Process complete.";
}
?>`}
          </pre>
        </div>
      </>
    ),
  },
  "php_oop": {
    title: "PHP OOP",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          PHP Object-Oriented Programming
        </h2>
        <p className="leading-relaxed mb-4">
          PHP supports OOP with classes, objects, inheritance, and more.
        </p>
      </>
    ),
  },
  "php_classes_objects": {
    title: "PHP Classes/Objects",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          PHP Classes and Objects
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<?php
class Car {
  public $color;
  public $model;

  public function message() {
    return "My car is a " . $this->color . " " . $this->model . "!";
  }
}

$myCar = new Car();
$myCar->color = "black";
$myCar->model = "Volvo";
echo $myCar->message();
?>`}
          </pre>
        </div>
      </>
    ),
  },
  "php_constructor": {
    title: "PHP Constructor",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          PHP Constructor
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<?php
class Car {
  public $color;
  public $model;

  public function __construct($color, $model) {
    $this->color = $color;
    $this->model = $model;
  }
}

$myCar = new Car("red", "Toyota");
echo $myCar->color; // red
?>`}
          </pre>
        </div>
      </>
    ),
  },
  "php_destructor": {
    title: "PHP Destructor",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          PHP Destructor
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<?php
class Car {
  public $color;

  public function __construct($color) {
    $this->color = $color;
  }

  public function __destruct() {
    echo "The car is {$this->color}.";
  }
}

$myCar = new Car("red");
// Destructor is called automatically at end of script
?>`}
          </pre>
        </div>
      </>
    ),
  },
  "php_access_modifiers": {
    title: "PHP Access Modifiers",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          PHP Access Modifiers
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<?php
class Car {
  public $name;      // Accessible from everywhere
  protected $color;  // Accessible within class and subclasses
  private $model;    // Accessible only within the class

  public function setModel($model) {
    $this->model = $model;
  }

  public function getModel() {
    return $this->model;
  }
}
?>`}
          </pre>
        </div>
      </>
    ),
  },
  "php_inheritance": {
    title: "PHP Inheritance",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          PHP Inheritance
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<?php
class Vehicle {
  public $brand;

  public function __construct($brand) {
    $this->brand = $brand;
  }

  public function honk() {
    return "Honk! Honk!";
  }
}

class Car extends Vehicle {
  public $model;

  public function __construct($brand, $model) {
    parent::__construct($brand);
    $this->model = $model;
  }
}

$myCar = new Car("Toyota", "Camry");
echo $myCar->brand;  // Toyota
echo $myCar->honk(); // Honk! Honk!
?>`}
          </pre>
        </div>
      </>
    ),
  },
  "php_oop_constants": {
    title: "PHP OOP Constants",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          PHP Class Constants
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<?php
class Car {
  const WHEELS = 4;
}

echo Car::WHEELS; // 4
?>`}
          </pre>
        </div>
      </>
    ),
  },
  "php_abstract_classes": {
    title: "PHP Abstract Classes",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          PHP Abstract Classes
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<?php
abstract class Car {
  public $name;

  public function __construct($name) {
    $this->name = $name;
  }

  abstract public function intro(): string;
}

class Audi extends Car {
  public function intro(): string {
    return "Choose German quality! I'm an $this->name!";
  }
}

$audi = new Audi("Audi");
echo $audi->intro();
?>`}
          </pre>
        </div>
      </>
    ),
  },
  "php_interfaces": {
    title: "PHP Interfaces",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          PHP Interfaces
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<?php
interface Animal {
  public function makeSound();
}

class Cat implements Animal {
  public function makeSound() {
    echo "Meow";
  }
}

class Dog implements Animal {
  public function makeSound() {
    echo "Bark";
  }
}

$cat = new Cat();
$cat->makeSound(); // Meow
?>`}
          </pre>
        </div>
      </>
    ),
  },
  "php_traits": {
    title: "PHP Traits",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          PHP Traits
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<?php
trait Message1 {
  public function msg1() {
    echo "OOP is fun!";
  }
}

trait Message2 {
  public function msg2() {
    echo "PHP is cool!";
  }
}

class Welcome {
  use Message1, Message2;
}

$obj = new Welcome();
$obj->msg1();
$obj->msg2();
?>`}
          </pre>
        </div>
      </>
    ),
  },
  "php_static_methods": {
    title: "PHP Static Methods",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          PHP Static Methods
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<?php
class Greeting {
  public static function welcome() {
    echo "Hello World!";
  }
}

// Call static method
Greeting::welcome();
?>`}
          </pre>
        </div>
      </>
    ),
  },
  "php_static_properties": {
    title: "PHP Static Properties",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          PHP Static Properties
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<?php
class Pi {
  public static $value = 3.14159;
}

echo Pi::$value;
?>`}
          </pre>
        </div>
      </>
    ),
  },
  "php_mysql_intro": {
    title: "PHP MySQL Database",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          PHP MySQL Database
        </h2>
        <p className="leading-relaxed mb-4">
          PHP can connect to and manipulate databases. MySQL is the most popular database system used with PHP.
        </p>
      </>
    ),
  },
  "php_mysql_connect": {
    title: "PHP MySQL Connect",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Connect to MySQL
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<?php
$servername = "localhost";
$username = "root";
$password = "";

// Using MySQLi
$conn = new mysqli($servername, $username, $password);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";

// Using PDO
try {
  $conn = new PDO("mysql:host=$servername", $username, $password);
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  echo "Connected successfully";
} catch(PDOException $e) {
  echo "Connection failed: " . $e->getMessage();
}
?>`}
          </pre>
        </div>
      </>
    ),
  },
  "php_mysql_create_db": {
    title: "PHP MySQL Create DB",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Create MySQL Database
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<?php
$sql = "CREATE DATABASE myDB";

if ($conn->query($sql) === TRUE) {
  echo "Database created successfully";
} else {
  echo "Error creating database: " . $conn->error;
}
?>`}
          </pre>
        </div>
      </>
    ),
  },
  "php_mysql_create_table": {
    title: "PHP MySQL Create Table",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Create MySQL Table
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<?php
$sql = "CREATE TABLE users (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  firstname VARCHAR(30) NOT NULL,
  lastname VARCHAR(30) NOT NULL,
  email VARCHAR(50),
  reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)";

if ($conn->query($sql) === TRUE) {
  echo "Table users created successfully";
}
?>`}
          </pre>
        </div>
      </>
    ),
  },
  "php_mysql_insert": {
    title: "PHP MySQL Insert Data",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Insert Data Into MySQL
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<?php
$sql = "INSERT INTO users (firstname, lastname, email)
VALUES ('John', 'Doe', 'john@example.com')";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}
?>`}
          </pre>
        </div>
      </>
    ),
  },
  "php_mysql_insert_multiple": {
    title: "PHP MySQL Insert Multiple",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Insert Multiple Records
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<?php
$sql = "INSERT INTO users (firstname, lastname, email) VALUES
('John', 'Doe', 'john@example.com'),
('Mary', 'Moe', 'mary@example.com'),
('Julie', 'Dooley', 'julie@example.com')";

if ($conn->query($sql) === TRUE) {
  echo "Records inserted successfully";
}
?>`}
          </pre>
        </div>
      </>
    ),
  },
  "php_mysql_prepared": {
    title: "PHP MySQL Prepared Statements",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Prepared Statements
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<?php
$stmt = $conn->prepare("INSERT INTO users (firstname, lastname, email) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $firstname, $lastname, $email);

$firstname = "John";
$lastname = "Doe";
$email = "john@example.com";
$stmt->execute();

echo "Records inserted successfully";
$stmt->close();
?>`}
          </pre>
        </div>
      </>
    ),
  },
  "php_mysql_select": {
    title: "PHP MySQL Select Data",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Select Data From MySQL
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<?php
$sql = "SELECT id, firstname, lastname FROM users";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {
    echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. "<br>";
  }
} else {
  echo "0 results";
}
?>`}
          </pre>
        </div>
      </>
    ),
  },
  "php_mysql_where": {
    title: "PHP MySQL Where",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          PHP MySQL WHERE Clause
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<?php
$sql = "SELECT * FROM users WHERE lastname='Doe'";
$result = $conn->query($sql);
?>`}
          </pre>
        </div>
      </>
    ),
  },
  "php_mysql_order_by": {
    title: "PHP MySQL Order By",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          PHP MySQL ORDER BY
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<?php
$sql = "SELECT * FROM users ORDER BY lastname ASC";
$result = $conn->query($sql);
?>`}
          </pre>
        </div>
      </>
    ),
  },
  "php_mysql_delete": {
    title: "PHP MySQL Delete Data",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Delete Data From MySQL
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<?php
$sql = "DELETE FROM users WHERE id=3";

if ($conn->query($sql) === TRUE) {
  echo "Record deleted successfully";
}
?>`}
          </pre>
        </div>
      </>
    ),
  },
  "php_mysql_update": {
    title: "PHP MySQL Update Data",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Update Data in MySQL
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<?php
$sql = "UPDATE users SET lastname='Smith' WHERE id=2";

if ($conn->query($sql) === TRUE) {
  echo "Record updated successfully";
}
?>`}
          </pre>
        </div>
      </>
    ),
  },
  "php_mysql_limit": {
    title: "PHP MySQL Limit Data",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Limit Data Selections
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<?php
$sql = "SELECT * FROM users LIMIT 10";
$result = $conn->query($sql);

// With offset
$sql = "SELECT * FROM users LIMIT 5, 10";
// Returns 10 records, starting from record 6
?>`}
          </pre>
        </div>
      </>
    ),
  },
};
