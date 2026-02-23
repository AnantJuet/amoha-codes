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
  { label: "Ada HOME", href: "ada_home" },
  { label: "Ada Intro", href: "ada_intro" },
  { label: "Ada Environment", href: "ada_environment" },
  {
    label: "Types",
    href: "ada_types",
    isHeader: true,
    children: [
      { label: "Type System", href: "ada_types" },
      { label: "Scalar Types", href: "ada_scalar_types" },
      { label: "Enumeration Types", href: "ada_enum_types" },
      { label: "Subtypes", href: "ada_subtypes" },
    ]
  },
  {
    label: "Variables & Constants",
    href: "ada_variables",
    isHeader: true,
    children: [
      { label: "Variables", href: "ada_variables" },
      { label: "Constants", href: "ada_constants" },
      { label: "Attributes", href: "ada_attributes" },
    ]
  },
  {
    label: "Operators",
    href: "ada_operators",
    isHeader: true,
    children: [
      { label: "Operators Overview", href: "ada_operators" },
      { label: "Arithmetic Operators", href: "ada_arithmetic" },
      { label: "Logical Operators", href: "ada_logical" },
      { label: "Relational Operators", href: "ada_relational" },
    ]
  },
  {
    label: "Control Structures",
    href: "ada_control",
    isHeader: true,
    children: [
      { label: "Control Overview", href: "ada_control" },
      { label: "If Statements", href: "ada_if" },
      { label: "Case Statements", href: "ada_case" },
      { label: "Loops", href: "ada_loops" },
    ]
  },
  {
    label: "Arrays",
    href: "ada_arrays",
    isHeader: true,
    children: [
      { label: "Array Basics", href: "ada_arrays" },
      { label: "Array Operations", href: "ada_array_ops" },
      { label: "Multidimensional", href: "ada_multidim" },
    ]
  },
  {
    label: "Records",
    href: "ada_records",
    isHeader: true,
    children: [
      { label: "Record Basics", href: "ada_records" },
      { label: "Discriminated Records", href: "ada_discriminated" },
      { label: "Variant Records", href: "ada_variant" },
    ]
  },
  {
    label: "Packages",
    href: "ada_packages",
    isHeader: true,
    children: [
      { label: "Package Basics", href: "ada_packages" },
      { label: "Package Specs", href: "ada_package_specs" },
      { label: "Package Bodies", href: "ada_package_bodies" },
      { label: "Child Packages", href: "ada_child_packages" },
    ]
  },
  {
    label: "Tasks",
    href: "ada_tasks",
    isHeader: true,
    children: [
      { label: "Task Basics", href: "ada_tasks" },
      { label: "Task Types", href: "ada_task_types" },
      { label: "Rendezvous", href: "ada_rendezvous" },
    ]
  },
  {
    label: "Protected Objects",
    href: "ada_protected",
    isHeader: true,
    children: [
      { label: "Protected Types", href: "ada_protected" },
      { label: "Entries", href: "ada_entries" },
      { label: "Barriers", href: "ada_barriers" },
    ]
  },
  {
    label: "Exceptions",
    href: "ada_exceptions",
    isHeader: true,
    children: [
      { label: "Exception Basics", href: "ada_exceptions" },
      { label: "Raising Exceptions", href: "ada_raising" },
      { label: "Handling Exceptions", href: "ada_handling" },
    ]
  },
  {
    label: "Generics",
    href: "ada_generics",
    isHeader: true,
    children: [
      { label: "Generic Basics", href: "ada_generics" },
      { label: "Generic Subprograms", href: "ada_generic_subprograms" },
      { label: "Generic Packages", href: "ada_generic_packages" },
    ]
  },
  {
    label: "Contracts",
    href: "ada_contracts",
    isHeader: true,
    children: [
      { label: "Contract Overview", href: "ada_contracts" },
      { label: "Preconditions", href: "ada_preconditions" },
      { label: "Postconditions", href: "ada_postconditions" },
      { label: "Type Invariants", href: "ada_invariants" },
    ]
  },
];

export const tutorialContent: Record<string, TopicContent> = {
  "ada_home": {
    title: "Ada Programming Tutorial",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Ada Programming Tutorial
        </h2>
        <p className="leading-relaxed mb-4">
          <strong>Ada</strong> is a high-level programming language designed for reliability, safety, and maintainability. Originally developed for the U.S. Department of Defense, it remains widely used in safety-critical systems.
        </p>
        <p className="leading-relaxed mb-4">
          Ada is known for its strong typing, built-in concurrency support, and contract-based programming features that help catch errors at compile time.
        </p>

        <h3 className="text-xl font-medium mb-3">Example: Hello World</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`with Ada.Text_IO;

procedure Hello is
begin
   Ada.Text_IO.Put_Line("Hello, World!");
end Hello;`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Why Learn Ada?</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
          <li>Designed for safety-critical and mission-critical systems</li>
          <li>Strong static typing catches errors at compile time</li>
          <li>Built-in support for concurrent programming</li>
          <li>Contract-based programming for reliable software</li>
          <li>Used in aerospace, defense, transportation, and medical systems</li>
        </ul>
      </>
    ),
  },

  "ada_intro": {
    title: "Introduction to Ada",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          What is Ada?
        </h2>
        <p className="leading-relaxed mb-4">
          Ada is a structured, statically typed, imperative, and object-oriented programming language. It was designed by Jean Ichbiah and his team at CII Honeywell Bull in the late 1970s.
        </p>

        <h3 className="text-xl font-medium mb-3">Key Features</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
          <li><strong>Strong Typing:</strong> Strict type checking prevents many common errors</li>
          <li><strong>Modularity:</strong> Packages organize code into logical units</li>
          <li><strong>Concurrency:</strong> Tasks and protected objects for parallel programming</li>
          <li><strong>Exceptions:</strong> Robust error handling mechanism</li>
          <li><strong>Generics:</strong> Reusable code templates</li>
          <li><strong>Contracts:</strong> Pre/postconditions and invariants</li>
        </ul>

        <h3 className="text-xl font-medium mb-3">Ada Standards</h3>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><strong>Ada 83:</strong> Original standard (ANSI/MIL-STD-1815A)</li>
          <li><strong>Ada 95:</strong> Added OOP and improved libraries</li>
          <li><strong>Ada 2005:</strong> Enhanced OOP and real-time support</li>
          <li><strong>Ada 2012:</strong> Contract-based programming</li>
          <li><strong>Ada 2022:</strong> Latest standard with modern features</li>
        </ul>
      </>
    ),
  },

  "ada_environment": {
    title: "Ada Environment Setup",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Setting Up Your Ada Environment
        </h2>
        <p className="leading-relaxed mb-4">
          GNAT is the most widely used Ada compiler, available as part of the GNU Compiler Collection.
        </p>

        <h3 className="text-xl font-medium mb-3">Installing GNAT</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Ubuntu/Debian
sudo apt-get install gnat

# macOS with Homebrew
brew install gnat

# Windows: Download GNAT Community Edition from AdaCore
# https://www.adacore.com/download`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Compiling and Running</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Create hello.adb
with Ada.Text_IO;
procedure Hello is
begin
   Ada.Text_IO.Put_Line("Hello, Ada!");
end Hello;

# Compile
gnatmake hello.adb

# Run
./hello`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">File Naming Conventions</h3>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><code>.adb</code> - Ada body files (implementation)</li>
          <li><code>.ads</code> - Ada specification files (interface)</li>
          <li>File names typically match the unit name (e.g., <code>my_package.ads</code>)</li>
        </ul>
      </>
    ),
  },

  "ada_types": {
    title: "Ada Type System",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Ada Type System
        </h2>
        <p className="leading-relaxed mb-4">
          Ada has a strong, static type system. Every object has a specific type, and type compatibility is strictly checked at compile time.
        </p>

        <h3 className="text-xl font-medium mb-3">Basic Types</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- Integer types
type My_Integer is range -1000 .. 1000;
type Positive_Int is range 1 .. Integer'Last;

-- Floating point types
type Temperature is digits 6 range -273.15 .. 1000.0;
type Probability is digits 4 range 0.0 .. 1.0;

-- Fixed point types
type Money is delta 0.01 digits 10;

-- Boolean
Is_Valid : Boolean := True;

-- Character and String
Initial : Character := 'A';
Name : String(1..20) := (others => ' ');`}
          </pre>
        </div>
      </>
    ),
  },

  "ada_scalar_types": {
    title: "Scalar Types",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Scalar Types
        </h2>
        <p className="leading-relaxed mb-4">
          Scalar types represent single values: integers, floating-point numbers, fixed-point numbers, and enumerations.
        </p>

        <h3 className="text-xl font-medium mb-3">Integer Types</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- Predefined integer types
X : Integer := 42;
N : Natural := 0;    -- 0 .. Integer'Last
P : Positive := 1;   -- 1 .. Integer'Last

-- Custom range types
type Day_Number is range 1 .. 31;
type Year is range 1900 .. 2100;
type Percentage is range 0 .. 100;

Today : Day_Number := 15;
Birth_Year : Year := 1990;`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Floating-Point Types</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- Predefined
F : Float := 3.14159;
D : Long_Float := 3.14159265358979;

-- Custom with precision
type Coordinate is digits 8;
type Scientific is digits 15 range -1.0E308 .. 1.0E308;

X_Pos : Coordinate := 123.456789;`}
          </pre>
        </div>
      </>
    ),
  },

  "ada_enum_types": {
    title: "Enumeration Types",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Enumeration Types
        </h2>
        <p className="leading-relaxed mb-4">
          Enumeration types define a set of named values.
        </p>

        <h3 className="text-xl font-medium mb-3">Defining Enumerations</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- Simple enumeration
type Day is (Monday, Tuesday, Wednesday, Thursday,
             Friday, Saturday, Sunday);

type Color is (Red, Green, Blue, Yellow, White, Black);

type Traffic_Light is (Red, Amber, Green);

-- Using enumerations
Today : Day := Monday;
Favorite : Color := Blue;

-- Enumeration attributes
First_Day : Day := Day'First;      -- Monday
Last_Day : Day := Day'Last;        -- Sunday
Next_Day : Day := Day'Succ(Today); -- Tuesday
Day_Pos : Integer := Day'Pos(Wednesday); -- 2`}
          </pre>
        </div>
      </>
    ),
  },

  "ada_subtypes": {
    title: "Subtypes",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Subtypes
        </h2>
        <p className="leading-relaxed mb-4">
          Subtypes constrain existing types without creating a new type. Values of a subtype are compatible with the parent type.
        </p>

        <h3 className="text-xl font-medium mb-3">Subtype Examples</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- Constrained subtypes
subtype Small_Int is Integer range -100 .. 100;
subtype Weekday is Day range Monday .. Friday;
subtype Upper_Case is Character range 'A' .. 'Z';

-- Using subtypes
X : Small_Int := 50;
Y : Integer := X;    -- OK: subtype compatible with parent
-- X := 200;         -- Error: constraint violation

-- Natural and Positive are predefined subtypes
subtype Natural is Integer range 0 .. Integer'Last;
subtype Positive is Integer range 1 .. Integer'Last;`}
          </pre>
        </div>
      </>
    ),
  },

  "ada_variables": {
    title: "Variables",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Variables in Ada
        </h2>
        <p className="leading-relaxed mb-4">
          Variables must be declared with a type before use. Ada requires explicit initialization for many contexts.
        </p>

        <h3 className="text-xl font-medium mb-3">Variable Declarations</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`procedure Variables_Demo is
   -- Simple declarations
   Count : Integer;
   Name : String(1..50);

   -- With initialization
   Total : Integer := 0;
   Rate : Float := 0.05;
   Active : Boolean := True;

   -- Multiple variables of same type
   X, Y, Z : Float := 0.0;

   -- Derived from expression
   Double : Integer := Count * 2;
begin
   Count := 10;
   Total := Total + Count;
end Variables_Demo;`}
          </pre>
        </div>
      </>
    ),
  },

  "ada_constants": {
    title: "Constants",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Constants in Ada
        </h2>
        <p className="leading-relaxed mb-4">
          Constants are declared with the <code>constant</code> keyword and must be initialized.
        </p>

        <h3 className="text-xl font-medium mb-3">Constant Declarations</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`procedure Constants_Demo is
   -- Named number (compile-time constant)
   Pi : constant := 3.14159265358979;
   E : constant := 2.71828182845905;

   -- Typed constants
   Max_Size : constant Integer := 1000;
   Tax_Rate : constant Float := 0.08;
   Company_Name : constant String := "Acme Corp";

   -- Deferred constant (in package spec)
   -- Max_Value : constant Integer;  -- completed in body
begin
   -- Pi := 3.0;  -- Error: cannot modify constant
   null;
end Constants_Demo;`}
          </pre>
        </div>
      </>
    ),
  },

  "ada_attributes": {
    title: "Attributes",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Attributes
        </h2>
        <p className="leading-relaxed mb-4">
          Attributes provide information about types and objects using the <code>'</code> notation.
        </p>

        <h3 className="text-xl font-medium mb-3">Common Attributes</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`type Score is range 0 .. 100;
type Day is (Mon, Tue, Wed, Thu, Fri, Sat, Sun);

-- Scalar attributes
First_Score : Score := Score'First;   -- 0
Last_Score : Score := Score'Last;     -- 100
Score_Min : Integer := Score'Min(50, 75); -- 50
Score_Max : Integer := Score'Max(50, 75); -- 75

-- Enumeration attributes
Today : Day := Wed;
Tomorrow : Day := Day'Succ(Today);    -- Thu
Yesterday : Day := Day'Pred(Today);   -- Tue
Day_Pos : Integer := Day'Pos(Wed);    -- 2
Day_Val : Day := Day'Val(4);          -- Fri

-- Array attributes
Arr : array(1..10) of Integer;
Len : Integer := Arr'Length;          -- 10
Low : Integer := Arr'First;           -- 1
High : Integer := Arr'Last;           -- 10
Rng : range := Arr'Range;             -- 1..10`}
          </pre>
        </div>
      </>
    ),
  },

  "ada_operators": {
    title: "Operators Overview",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Operators in Ada
        </h2>
        <p className="leading-relaxed mb-4">
          Ada provides a rich set of operators for arithmetic, logic, and comparison operations.
        </p>

        <h3 className="text-xl font-medium mb-3">Operator Categories</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
          <li><strong>Arithmetic:</strong> +, -, *, /, mod, rem, **, abs</li>
          <li><strong>Relational:</strong> =, /=, &lt;, &gt;, &lt;=, &gt;=</li>
          <li><strong>Logical:</strong> and, or, xor, not</li>
          <li><strong>Short-circuit:</strong> and then, or else</li>
          <li><strong>Concatenation:</strong> &amp;</li>
          <li><strong>Membership:</strong> in, not in</li>
        </ul>
      </>
    ),
  },

  "ada_arithmetic": {
    title: "Arithmetic Operators",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Arithmetic Operators
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`procedure Arithmetic_Demo is
   A : Integer := 17;
   B : Integer := 5;
   F : Float := 10.0;
begin
   -- Basic arithmetic
   Put_Line("A + B = " & Integer'Image(A + B));   -- 22
   Put_Line("A - B = " & Integer'Image(A - B));   -- 12
   Put_Line("A * B = " & Integer'Image(A * B));   -- 85
   Put_Line("A / B = " & Integer'Image(A / B));   -- 3

   -- Modulo and remainder
   Put_Line("A mod B = " & Integer'Image(A mod B)); -- 2
   Put_Line("A rem B = " & Integer'Image(A rem B)); -- 2
   -- mod vs rem differ for negative numbers

   -- Exponentiation
   Put_Line("A ** 2 = " & Integer'Image(A ** 2));  -- 289

   -- Absolute value
   Put_Line("abs(-5) = " & Integer'Image(abs(-5))); -- 5
end Arithmetic_Demo;`}
          </pre>
        </div>
      </>
    ),
  },

  "ada_logical": {
    title: "Logical Operators",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Logical Operators
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`procedure Logical_Demo is
   A : Boolean := True;
   B : Boolean := False;
begin
   -- Basic logical operators
   Put_Line("A and B = " & Boolean'Image(A and B)); -- FALSE
   Put_Line("A or B = " & Boolean'Image(A or B));   -- TRUE
   Put_Line("A xor B = " & Boolean'Image(A xor B)); -- TRUE
   Put_Line("not A = " & Boolean'Image(not A));     -- FALSE

   -- Short-circuit evaluation
   -- "and then" stops if first is False
   -- "or else" stops if first is True
   if X /= 0 and then Y / X > 10 then
      -- Safe: division only if X /= 0
      null;
   end if;

   if Ptr = null or else Ptr.Value > 0 then
      -- Safe: dereference only if not null
      null;
   end if;
end Logical_Demo;`}
          </pre>
        </div>
      </>
    ),
  },

  "ada_relational": {
    title: "Relational Operators",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Relational Operators
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`procedure Relational_Demo is
   A : Integer := 10;
   B : Integer := 20;
   type Day is (Mon, Tue, Wed, Thu, Fri);
   Today : Day := Wed;
begin
   -- Comparison operators
   if A = B then ...    -- Equal
   if A /= B then ...   -- Not equal
   if A < B then ...    -- Less than
   if A > B then ...    -- Greater than
   if A <= B then ...   -- Less or equal
   if A >= B then ...   -- Greater or equal

   -- Works with enumerations too
   if Today > Tue then
      Put_Line("Past Tuesday");
   end if;

   -- Membership test
   if A in 1 .. 100 then
      Put_Line("A is in range");
   end if;

   if Today in Mon .. Fri then
      Put_Line("It's a weekday");
   end if;
end Relational_Demo;`}
          </pre>
        </div>
      </>
    ),
  },

  "ada_control": {
    title: "Control Structures",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Control Structures Overview
        </h2>
        <p className="leading-relaxed mb-4">
          Ada provides structured control flow with if statements, case statements, and various loop constructs.
        </p>

        <h3 className="text-xl font-medium mb-3">Control Structure Types</h3>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><strong>Conditional:</strong> if-then-else, case</li>
          <li><strong>Iteration:</strong> loop, while, for</li>
          <li><strong>Transfer:</strong> exit, return, goto</li>
        </ul>
      </>
    ),
  },

  "ada_if": {
    title: "If Statements",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          If Statements
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`procedure If_Demo is
   Score : Integer := 85;
   Grade : Character;
begin
   -- Simple if
   if Score >= 60 then
      Put_Line("Passed!");
   end if;

   -- If-else
   if Score >= 60 then
      Put_Line("Passed!");
   else
      Put_Line("Failed!");
   end if;

   -- If-elsif-else chain
   if Score >= 90 then
      Grade := 'A';
   elsif Score >= 80 then
      Grade := 'B';
   elsif Score >= 70 then
      Grade := 'C';
   elsif Score >= 60 then
      Grade := 'D';
   else
      Grade := 'F';
   end if;

   Put_Line("Grade: " & Grade);
end If_Demo;`}
          </pre>
        </div>
      </>
    ),
  },

  "ada_case": {
    title: "Case Statements",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Case Statements
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`procedure Case_Demo is
   type Day is (Mon, Tue, Wed, Thu, Fri, Sat, Sun);
   Today : Day := Wed;
   Grade : Character := 'B';
begin
   -- Case with enumeration
   case Today is
      when Mon =>
         Put_Line("Start of week");
      when Fri =>
         Put_Line("TGIF!");
      when Sat | Sun =>
         Put_Line("Weekend!");
      when others =>
         Put_Line("Midweek");
   end case;

   -- Case with ranges
   case Grade is
      when 'A' =>
         Put_Line("Excellent!");
      when 'B' .. 'C' =>
         Put_Line("Good");
      when 'D' =>
         Put_Line("Needs improvement");
      when others =>
         Put_Line("Please see instructor");
   end case;
end Case_Demo;`}
          </pre>
        </div>
      </>
    ),
  },

  "ada_loops": {
    title: "Loops",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Loop Constructs
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`procedure Loops_Demo is
begin
   -- Simple loop (infinite without exit)
   loop
      -- do something
      exit when Condition;
   end loop;

   -- While loop
   Count := 0;
   while Count < 10 loop
      Put_Line(Integer'Image(Count));
      Count := Count + 1;
   end loop;

   -- For loop (ascending)
   for I in 1 .. 10 loop
      Put_Line(Integer'Image(I));
   end loop;

   -- For loop (descending)
   for I in reverse 1 .. 10 loop
      Put_Line(Integer'Image(I));
   end loop;

   -- For loop over array
   for I in My_Array'Range loop
      Put_Line(Integer'Image(My_Array(I)));
   end loop;

   -- Named loop with exit
   Outer: for I in 1 .. 10 loop
      for J in 1 .. 10 loop
         exit Outer when I * J > 50;
      end loop;
   end loop Outer;
end Loops_Demo;`}
          </pre>
        </div>
      </>
    ),
  },

  "ada_arrays": {
    title: "Array Basics",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Arrays in Ada
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`procedure Array_Demo is
   -- Constrained array type
   type Int_Array is array (1 .. 10) of Integer;
   type Day_Names is array (Day) of String(1..9);

   -- Unconstrained array type
   type Vector is array (Positive range <>) of Float;

   -- Array declarations
   Numbers : Int_Array;
   Scores : array (1 .. 5) of Integer := (90, 85, 78, 92, 88);
   Names : Day_Names := (Mon => "Monday   ",
                         Tue => "Tuesday  ",
                         Wed => "Wednesday",
                         others => "         ");

   -- Unconstrained with bounds at declaration
   Data : Vector(1 .. 100);
begin
   -- Access elements
   Numbers(1) := 42;
   Put_Line(Integer'Image(Scores(3)));  -- 78

   -- Array slices
   Scores(2 .. 4) := (80, 75, 95);
end Array_Demo;`}
          </pre>
        </div>
      </>
    ),
  },

  "ada_array_ops": {
    title: "Array Operations",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Array Operations
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`procedure Array_Ops_Demo is
   type Vector is array (Positive range <>) of Integer;
   A : Vector(1..5) := (1, 2, 3, 4, 5);
   B : Vector(1..5) := (5, 4, 3, 2, 1);
   C : Vector(1..5);
begin
   -- Array assignment
   C := A;

   -- Array comparison (element by element)
   if A = B then ...
   if A /= B then ...

   -- Concatenation
   declare
      Combined : Vector(1..10) := A & B;
   begin
      null;
   end;

   -- Aggregates
   C := (1, 2, 3, 4, 5);           -- Positional
   C := (1 => 10, 2 => 20, others => 0);  -- Named
   C := (others => 0);              -- All zeros

   -- Array attributes
   Put_Line("First: " & Integer'Image(A'First));
   Put_Line("Last: " & Integer'Image(A'Last));
   Put_Line("Length: " & Integer'Image(A'Length));
end Array_Ops_Demo;`}
          </pre>
        </div>
      </>
    ),
  },

  "ada_multidim": {
    title: "Multidimensional Arrays",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Multidimensional Arrays
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`procedure Multidim_Demo is
   -- 2D array type
   type Matrix is array (1 .. 3, 1 .. 3) of Integer;

   -- Declaration with initialization
   Identity : Matrix := ((1, 0, 0),
                         (0, 1, 0),
                         (0, 0, 1));

   M : Matrix := (others => (others => 0));
begin
   -- Access elements
   M(1, 1) := 10;
   M(2, 3) := 25;

   -- Iterate over 2D array
   for I in M'Range(1) loop
      for J in M'Range(2) loop
         Put(Integer'Image(M(I, J)));
      end loop;
      New_Line;
   end loop;
end Multidim_Demo;`}
          </pre>
        </div>
      </>
    ),
  },

  "ada_records": {
    title: "Record Basics",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Records in Ada
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`procedure Record_Demo is
   -- Record type definition
   type Date is record
      Day   : Integer range 1 .. 31;
      Month : Integer range 1 .. 12;
      Year  : Integer range 1900 .. 2100;
   end record;

   type Person is record
      Name      : String(1..50);
      Birth     : Date;
      Age       : Natural;
      Is_Active : Boolean := True;  -- Default value
   end record;

   -- Declarations
   Today : Date;
   Employee : Person;
begin
   -- Field access
   Today.Day := 15;
   Today.Month := 6;
   Today.Year := 2024;

   -- Aggregate initialization
   Today := (Day => 15, Month => 6, Year => 2024);
   Today := (15, 6, 2024);  -- Positional

   Employee := (Name => "John Doe" & (9..50 => ' '),
                Birth => (1, 1, 1990),
                Age => 34,
                Is_Active => True);
end Record_Demo;`}
          </pre>
        </div>
      </>
    ),
  },

  "ada_discriminated": {
    title: "Discriminated Records",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Discriminated Records
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`procedure Discriminated_Demo is
   -- Record with discriminant
   type Bounded_String(Max_Length : Positive) is record
      Length : Natural := 0;
      Data   : String(1 .. Max_Length);
   end record;

   type Vector(Size : Positive) is record
      Elements : array(1 .. Size) of Float;
   end record;

   -- Declarations with discriminant values
   Name : Bounded_String(50);
   Small_Vec : Vector(10);
   Large_Vec : Vector(1000);
begin
   Name.Length := 4;
   Name.Data(1..4) := "John";

   Small_Vec.Elements(1) := 3.14;
end Discriminated_Demo;`}
          </pre>
        </div>
      </>
    ),
  },

  "ada_variant": {
    title: "Variant Records",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Variant Records
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`procedure Variant_Demo is
   type Shape_Kind is (Circle, Rectangle, Triangle);

   type Shape(Kind : Shape_Kind) is record
      X, Y : Float;  -- Common fields
      case Kind is
         when Circle =>
            Radius : Float;
         when Rectangle =>
            Width, Height : Float;
         when Triangle =>
            Side1, Side2, Side3 : Float;
      end case;
   end record;

   C : Shape(Circle);
   R : Shape(Rectangle);
begin
   C := (Kind => Circle, X => 0.0, Y => 0.0, Radius => 5.0);
   R := (Rectangle, 10.0, 20.0, 30.0, 40.0);

   -- Access varies by discriminant
   Put_Line("Circle radius: " & Float'Image(C.Radius));
   Put_Line("Rectangle width: " & Float'Image(R.Width));
end Variant_Demo;`}
          </pre>
        </div>
      </>
    ),
  },

  "ada_packages": {
    title: "Package Basics",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Packages in Ada
        </h2>
        <p className="leading-relaxed mb-4">
          Packages are Ada's primary mechanism for modularity and encapsulation. They separate interface (specification) from implementation (body).
        </p>

        <h3 className="text-xl font-medium mb-3">Package Structure</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- Package specification (math_utils.ads)
package Math_Utils is
   -- Public declarations
   Pi : constant := 3.14159265358979;

   function Square(X : Float) return Float;
   function Cube(X : Float) return Float;

   type Point is record
      X, Y : Float;
   end record;

   function Distance(P1, P2 : Point) return Float;

private
   -- Private declarations (hidden from clients)
   Internal_Constant : constant := 42;
end Math_Utils;`}
          </pre>
        </div>
      </>
    ),
  },

  "ada_package_specs": {
    title: "Package Specifications",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Package Specifications
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- stack.ads
package Stack is
   type Stack_Type(Max_Size : Positive) is private;

   Stack_Empty : exception;
   Stack_Full  : exception;

   procedure Push(S : in out Stack_Type; Item : Integer);
   procedure Pop(S : in out Stack_Type; Item : out Integer);
   function Top(S : Stack_Type) return Integer;
   function Is_Empty(S : Stack_Type) return Boolean;
   function Is_Full(S : Stack_Type) return Boolean;

private
   type Stack_Array is array(Positive range <>) of Integer;

   type Stack_Type(Max_Size : Positive) is record
      Data : Stack_Array(1 .. Max_Size);
      Top_Index : Natural := 0;
   end record;
end Stack;`}
          </pre>
        </div>
      </>
    ),
  },

  "ada_package_bodies": {
    title: "Package Bodies",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Package Bodies
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- stack.adb
package body Stack is
   procedure Push(S : in out Stack_Type; Item : Integer) is
   begin
      if Is_Full(S) then
         raise Stack_Full;
      end if;
      S.Top_Index := S.Top_Index + 1;
      S.Data(S.Top_Index) := Item;
   end Push;

   procedure Pop(S : in Out Stack_Type; Item : out Integer) is
   begin
      if Is_Empty(S) then
         raise Stack_Empty;
      end if;
      Item := S.Data(S.Top_Index);
      S.Top_Index := S.Top_Index - 1;
   end Pop;

   function Top(S : Stack_Type) return Integer is
   begin
      if Is_Empty(S) then
         raise Stack_Empty;
      end if;
      return S.Data(S.Top_Index);
   end Top;

   function Is_Empty(S : Stack_Type) return Boolean is
   begin
      return S.Top_Index = 0;
   end Is_Empty;

   function Is_Full(S : Stack_Type) return Boolean is
   begin
      return S.Top_Index = S.Max_Size;
   end Is_Full;
end Stack;`}
          </pre>
        </div>
      </>
    ),
  },

  "ada_child_packages": {
    title: "Child Packages",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Child Packages
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- Parent package (math.ads)
package Math is
   Pi : constant := 3.14159;
end Math;

-- Child package (math-trig.ads)
package Math.Trig is
   function Sin(X : Float) return Float;
   function Cos(X : Float) return Float;
   function Tan(X : Float) return Float;
end Math.Trig;

-- Another child (math-complex.ads)
package Math.Complex is
   type Complex_Number is record
      Real, Imag : Float;
   end record;

   function "+"(A, B : Complex_Number) return Complex_Number;
   function "*"(A, B : Complex_Number) return Complex_Number;
end Math.Complex;

-- Using child packages
with Math.Trig;
with Math.Complex;
procedure Use_Math is
   use Math.Trig;
   use Math.Complex;
begin
   Result := Sin(Math.Pi / 2.0);
end Use_Math;`}
          </pre>
        </div>
      </>
    ),
  },

  "ada_tasks": {
    title: "Task Basics",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Tasks in Ada
        </h2>
        <p className="leading-relaxed mb-4">
          Tasks are Ada's built-in concurrency mechanism. They represent independent threads of execution.
        </p>

        <h3 className="text-xl font-medium mb-3">Simple Task</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`procedure Task_Demo is
   -- Task declaration
   task Background_Worker;

   -- Task body
   task body Background_Worker is
   begin
      for I in 1 .. 5 loop
         Put_Line("Worker: " & Integer'Image(I));
         delay 1.0;  -- Wait 1 second
      end loop;
   end Background_Worker;

begin
   -- Main task runs concurrently with Background_Worker
   for I in 1 .. 5 loop
      Put_Line("Main: " & Integer'Image(I));
      delay 0.5;
   end loop;
   -- Waits for Background_Worker to complete
end Task_Demo;`}
          </pre>
        </div>
      </>
    ),
  },

  "ada_task_types": {
    title: "Task Types",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Task Types
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`procedure Task_Types_Demo is
   -- Task type with entry (communication point)
   task type Worker(ID : Positive) is
      entry Start(Job : String);
      entry Get_Result(Result : out Integer);
   end Worker;

   task body Worker is
      My_Result : Integer := 0;
      Job_Name : String(1..20);
   begin
      accept Start(Job : String) do
         Job_Name(1..Job'Length) := Job;
      end Start;

      -- Do work
      My_Result := ID * 100;

      accept Get_Result(Result : out Integer) do
         Result := My_Result;
      end Get_Result;
   end Worker;

   W1 : Worker(1);
   W2 : Worker(2);
   R1, R2 : Integer;
begin
   W1.Start("Task A");
   W2.Start("Task B");
   W1.Get_Result(R1);
   W2.Get_Result(R2);
end Task_Types_Demo;`}
          </pre>
        </div>
      </>
    ),
  },

  "ada_rendezvous": {
    title: "Rendezvous",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Task Rendezvous
        </h2>
        <p className="leading-relaxed mb-4">
          Rendezvous is Ada's synchronization mechanism where tasks meet to exchange data.
        </p>

        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`task Server is
   entry Request(Data : in Integer; Response : out Integer);
end Server;

task body Server is
begin
   loop
      select
         accept Request(Data : in Integer; Response : out Integer) do
            Response := Data * 2;
         end Request;
      or
         delay 10.0;
         exit;  -- Timeout after 10 seconds
      end select;
   end loop;
end Server;

-- Client calls
Result : Integer;
Server.Request(42, Result);  -- Blocks until accepted`}
          </pre>
        </div>
      </>
    ),
  },

  "ada_protected": {
    title: "Protected Types",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Protected Objects
        </h2>
        <p className="leading-relaxed mb-4">
          Protected objects provide mutual exclusion and condition synchronization.
        </p>

        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`protected type Counter is
   procedure Increment;
   procedure Decrement;
   function Get return Integer;
private
   Value : Integer := 0;
end Counter;

protected body Counter is
   procedure Increment is
   begin
      Value := Value + 1;
   end Increment;

   procedure Decrement is
   begin
      Value := Value - 1;
   end Decrement;

   function Get return Integer is
   begin
      return Value;
   end Get;
end Counter;

-- Usage
My_Counter : Counter;
My_Counter.Increment;  -- Thread-safe`}
          </pre>
        </div>
      </>
    ),
  },

  "ada_entries": {
    title: "Protected Entries",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Protected Entries
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`protected type Bounded_Buffer(Size : Positive) is
   entry Put(Item : Integer);
   entry Get(Item : out Integer);
private
   Buffer : array(1 .. Size) of Integer;
   Count : Natural := 0;
   In_Index, Out_Index : Positive := 1;
end Bounded_Buffer;

protected body Bounded_Buffer is
   entry Put(Item : Integer) when Count < Size is
   begin
      Buffer(In_Index) := Item;
      In_Index := (In_Index mod Size) + 1;
      Count := Count + 1;
   end Put;

   entry Get(Item : out Integer) when Count > 0 is
   begin
      Item := Buffer(Out_Index);
      Out_Index := (Out_Index mod Size) + 1;
      Count := Count - 1;
   end Get;
end Bounded_Buffer;`}
          </pre>
        </div>
      </>
    ),
  },

  "ada_barriers": {
    title: "Barriers",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Entry Barriers
        </h2>
        <p className="leading-relaxed mb-4">
          Barriers are boolean conditions that control when entries can be executed.
        </p>

        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`protected Semaphore is
   entry Wait;       -- Block if count = 0
   procedure Signal; -- Increment count
private
   Count : Natural := 1;
end Semaphore;

protected body Semaphore is
   entry Wait when Count > 0 is  -- Barrier condition
   begin
      Count := Count - 1;
   end Wait;

   procedure Signal is
   begin
      Count := Count + 1;
   end Signal;
end Semaphore;

-- Multiple waiters can queue on Wait
-- They're released one at a time when Count > 0`}
          </pre>
        </div>
      </>
    ),
  },

  "ada_exceptions": {
    title: "Exception Basics",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Exceptions in Ada
        </h2>
        <p className="leading-relaxed mb-4">
          Ada has a robust exception handling mechanism for dealing with runtime errors.
        </p>

        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- Predefined exceptions
-- Constraint_Error: range/index violation
-- Program_Error: logic error
-- Storage_Error: out of memory
-- Tasking_Error: concurrency issue

-- Custom exceptions
My_Error : exception;
Invalid_Input : exception;

procedure Process(X : Integer) is
begin
   if X < 0 then
      raise Invalid_Input;
   end if;
   -- Process X
exception
   when Invalid_Input =>
      Put_Line("Error: Negative input");
   when Constraint_Error =>
      Put_Line("Error: Constraint violation");
   when others =>
      Put_Line("Error: Unknown exception");
end Process;`}
          </pre>
        </div>
      </>
    ),
  },

  "ada_raising": {
    title: "Raising Exceptions",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Raising Exceptions
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`Invalid_Age : exception;

procedure Set_Age(Age : Integer) is
begin
   if Age < 0 or Age > 150 then
      raise Invalid_Age;
   end if;
   -- Set the age
end Set_Age;

-- With message (Ada 2005+)
procedure Validate(X : Integer) is
begin
   if X < 0 then
      raise Constraint_Error with "Value must be non-negative";
   end if;
end Validate;

-- Re-raise current exception
begin
   Risky_Operation;
exception
   when E : others =>
      Log_Error(Exception_Information(E));
      raise;  -- Re-raise the same exception
end;`}
          </pre>
        </div>
      </>
    ),
  },

  "ada_handling": {
    title: "Handling Exceptions",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Handling Exceptions
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`with Ada.Exceptions; use Ada.Exceptions;

procedure Exception_Demo is
begin
   -- Try block equivalent
   declare
      Result : Integer;
   begin
      Result := Risky_Calculation;
      Put_Line("Result: " & Integer'Image(Result));
   exception
      when E : Constraint_Error =>
         Put_Line("Caught: " & Exception_Name(E));
         Put_Line("Message: " & Exception_Message(E));

      when Storage_Error =>
         Put_Line("Out of memory!");

      when Error : others =>
         Put_Line("Unknown error: " & Exception_Information(Error));
   end;

   Put_Line("Continuing after exception handler");
end Exception_Demo;`}
          </pre>
        </div>
      </>
    ),
  },

  "ada_generics": {
    title: "Generic Basics",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Generics in Ada
        </h2>
        <p className="leading-relaxed mb-4">
          Generics allow you to write parameterized code that works with multiple types.
        </p>

        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- Generic function
generic
   type Element_Type is private;
function Generic_Max(A, B : Element_Type) return Element_Type;

function Generic_Max(A, B : Element_Type) return Element_Type is
begin
   if A > B then
      return A;
   else
      return B;
   end if;
end Generic_Max;

-- Instantiation
function Int_Max is new Generic_Max(Integer);
function Float_Max is new Generic_Max(Float);

-- Usage
X : Integer := Int_Max(10, 20);  -- 20
Y : Float := Float_Max(3.14, 2.71);  -- 3.14`}
          </pre>
        </div>
      </>
    ),
  },

  "ada_generic_subprograms": {
    title: "Generic Subprograms",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Generic Subprograms
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- Generic with formal parameters
generic
   type Item_Type is private;
   with function "<"(A, B : Item_Type) return Boolean is <>;
procedure Generic_Sort(Arr : in out Array_Of_Items);

-- Generic swap
generic
   type T is private;
procedure Generic_Swap(A, B : in out T);

procedure Generic_Swap(A, B : in out T) is
   Temp : T := A;
begin
   A := B;
   B := Temp;
end Generic_Swap;

-- Instantiate for different types
procedure Swap_Int is new Generic_Swap(Integer);
procedure Swap_Float is new Generic_Swap(Float);
procedure Swap_String is new Generic_Swap(String);`}
          </pre>
        </div>
      </>
    ),
  },

  "ada_generic_packages": {
    title: "Generic Packages",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Generic Packages
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- Generic stack package
generic
   type Element_Type is private;
   Max_Size : Positive;
package Generic_Stack is
   procedure Push(Item : Element_Type);
   procedure Pop(Item : out Element_Type);
   function Top return Element_Type;
   function Is_Empty return Boolean;
   function Is_Full return Boolean;
   Stack_Error : exception;
end Generic_Stack;

package body Generic_Stack is
   Data : array(1 .. Max_Size) of Element_Type;
   Index : Natural := 0;

   procedure Push(Item : Element_Type) is
   begin
      if Is_Full then raise Stack_Error; end if;
      Index := Index + 1;
      Data(Index) := Item;
   end Push;
   -- ... other implementations
end Generic_Stack;

-- Instantiate for integers
package Int_Stack is new Generic_Stack(Integer, 100);`}
          </pre>
        </div>
      </>
    ),
  },

  "ada_contracts": {
    title: "Contract-Based Programming",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Contract-Based Programming
        </h2>
        <p className="leading-relaxed mb-4">
          Ada 2012 introduced contracts: preconditions, postconditions, and type invariants that enable design-by-contract programming.
        </p>

        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- Enable contract checking
pragma Assertion_Policy(Check);

function Sqrt(X : Float) return Float
   with Pre  => X >= 0.0,
        Post => Sqrt'Result >= 0.0 and
                abs(Sqrt'Result ** 2 - X) < 0.0001;`}
          </pre>
        </div>
      </>
    ),
  },

  "ada_preconditions": {
    title: "Preconditions",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Preconditions
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- Preconditions specify what must be true before calling
procedure Divide(A, B : Integer; Result : out Integer)
   with Pre => B /= 0;

procedure Push(S : in out Stack; Item : Integer)
   with Pre => not Is_Full(S);

function Get_Element(Arr : Int_Array; Index : Positive) return Integer
   with Pre => Index in Arr'Range;

-- Multiple conditions
procedure Transfer(From, To : in out Account; Amount : Positive)
   with Pre => Amount <= From.Balance and
               To.Balance + Amount <= Max_Balance;`}
          </pre>
        </div>
      </>
    ),
  },

  "ada_postconditions": {
    title: "Postconditions",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Postconditions
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- Postconditions specify what must be true after execution
function Abs_Value(X : Integer) return Integer
   with Post => Abs_Value'Result >= 0;

procedure Increment(X : in out Integer)
   with Post => X = X'Old + 1;

procedure Pop(S : in out Stack; Item : out Integer)
   with Pre  => not Is_Empty(S),
        Post => Size(S) = Size(S)'Old - 1;

-- Using 'Old for previous values
procedure Sort(Arr : in out Int_Array)
   with Post => (for all I in Arr'First .. Arr'Last - 1 =>
                    Arr(I) <= Arr(I + 1));`}
          </pre>
        </div>
      </>
    ),
  },

  "ada_invariants": {
    title: "Type Invariants",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Type Invariants
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- Type invariants must hold for all values of the type
package Accounts is
   type Account is private
      with Type_Invariant => Is_Valid(Account);

   function Is_Valid(A : Account) return Boolean;
   procedure Deposit(A : in out Account; Amount : Positive);
   procedure Withdraw(A : in out Account; Amount : Positive);

private
   type Account is record
      Balance : Natural := 0;
      Owner : String(1..50);
      Active : Boolean := True;
   end record;

   function Is_Valid(A : Account) return Boolean is
      (A.Active and A.Balance >= 0);
end Accounts;

-- Invariant checked after every public operation`}
          </pre>
        </div>
      </>
    ),
  },
};
