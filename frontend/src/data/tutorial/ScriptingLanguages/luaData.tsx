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
  { label: "Lua HOME", href: "lua_home" },
  { label: "Lua Intro", href: "lua_intro" },
  { label: "Lua Setup", href: "lua_setup" },
  {
    label: "Variables",
    href: "lua_variables",
    isHeader: true,
    children: [
      { label: "Variables", href: "lua_variables" },
      { label: "Variable Scope", href: "lua_scope" },
    ]
  },
  {
    label: "Data Types",
    href: "lua_data_types",
    isHeader: true,
    children: [
      { label: "Data Types", href: "lua_data_types" },
      { label: "Strings", href: "lua_strings" },
      { label: "Numbers", href: "lua_numbers" },
      { label: "Booleans", href: "lua_booleans" },
    ]
  },
  {
    label: "Operators",
    href: "lua_operators",
    isHeader: true,
    children: [
      { label: "Arithmetic", href: "lua_operators" },
      { label: "Relational", href: "lua_relational" },
      { label: "Logical", href: "lua_logical" },
    ]
  },
  {
    label: "Control Structures",
    href: "lua_control",
    isHeader: true,
    children: [
      { label: "If Statement", href: "lua_control" },
      { label: "While Loop", href: "lua_while" },
      { label: "For Loop", href: "lua_for" },
      { label: "Repeat Until", href: "lua_repeat" },
    ]
  },
  {
    label: "Functions",
    href: "lua_functions",
    isHeader: true,
    children: [
      { label: "Functions", href: "lua_functions" },
      { label: "Parameters", href: "lua_parameters" },
      { label: "Closures", href: "lua_closures" },
    ]
  },
  {
    label: "Tables",
    href: "lua_tables",
    isHeader: true,
    children: [
      { label: "Table Basics", href: "lua_tables" },
      { label: "Table Operations", href: "lua_table_ops" },
      { label: "Arrays", href: "lua_arrays" },
    ]
  },
  {
    label: "Metatables",
    href: "lua_metatables",
    isHeader: true,
    children: [
      { label: "Metatables", href: "lua_metatables" },
      { label: "Metamethods", href: "lua_metamethods" },
      { label: "OOP with Metatables", href: "lua_oop" },
    ]
  },
  {
    label: "Coroutines",
    href: "lua_coroutines",
    isHeader: true,
    children: [
      { label: "Coroutine Basics", href: "lua_coroutines" },
      { label: "Coroutine Functions", href: "lua_coroutine_funcs" },
    ]
  },
  {
    label: "Modules",
    href: "lua_modules",
    isHeader: true,
    children: [
      { label: "Module Basics", href: "lua_modules" },
      { label: "Creating Modules", href: "lua_create_modules" },
    ]
  },
  {
    label: "File I/O",
    href: "lua_file_io",
    isHeader: true,
    children: [
      { label: "File Operations", href: "lua_file_io" },
      { label: "Reading Files", href: "lua_read_files" },
      { label: "Writing Files", href: "lua_write_files" },
    ]
  },
  {
    label: "Error Handling",
    href: "lua_errors",
    isHeader: true,
    children: [
      { label: "Error Handling", href: "lua_errors" },
      { label: "pcall and xpcall", href: "lua_pcall" },
    ]
  },
  { label: "C API Basics", href: "lua_c_api" },
];

export const tutorialContent: Record<string, TopicContent> = {
  "lua_home": {
    title: "Lua Programming Tutorial",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Lua Programming Tutorial
        </h2>
        <p className="leading-relaxed mb-4">
          <strong>Lua</strong> is a powerful, efficient, lightweight, embeddable scripting language. It is designed for extending applications and is widely used in game development, embedded systems, and scripting.
        </p>
        <p className="leading-relaxed mb-4">
          This tutorial covers Lua from basics to advanced concepts including metatables, coroutines, and the C API.
        </p>
        <h3 className="text-xl font-medium mb-3">Example: Hello World</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- My first Lua program
print("Hello, World!")`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">What You Will Learn</h3>
        <ul className="list-disc ml-6 mb-4 leading-relaxed">
          <li>Variables, data types, and operators</li>
          <li>Control structures and functions</li>
          <li>Tables and metatables</li>
          <li>Coroutines for cooperative multitasking</li>
          <li>Modules and packages</li>
          <li>File I/O and error handling</li>
          <li>C API basics for embedding Lua</li>
        </ul>
      </>
    ),
  },
  "lua_intro": {
    title: "Introduction to Lua",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          What is Lua?
        </h2>
        <p className="leading-relaxed mb-4">
          Lua (meaning "Moon" in Portuguese) was created in 1993 at PUC-Rio in Brazil. It is designed to be embedded into other applications, providing scripting capabilities.
        </p>
        <h3 className="text-xl font-medium mb-3">Key Features</h3>
        <ul className="list-disc ml-6 mb-4 leading-relaxed">
          <li><strong>Lightweight:</strong> Small footprint, fast execution</li>
          <li><strong>Embeddable:</strong> Easy to integrate with C/C++</li>
          <li><strong>Portable:</strong> Runs on many platforms</li>
          <li><strong>Simple Syntax:</strong> Easy to learn and use</li>
          <li><strong>Powerful:</strong> Supports metatables and coroutines</li>
        </ul>
        <h3 className="text-xl font-medium mb-3">Common Uses</h3>
        <ul className="list-disc ml-6 mb-4 leading-relaxed">
          <li>Game development (World of Warcraft, Roblox)</li>
          <li>Embedded systems and IoT</li>
          <li>Configuration files</li>
          <li>Web applications (OpenResty/Nginx)</li>
          <li>Scripting in applications</li>
        </ul>
      </>
    ),
  },
  "lua_setup": {
    title: "Lua Setup",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Setting Up Lua
        </h2>
        <h3 className="text-xl font-medium mb-3">Windows</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Using Chocolatey
choco install lua

# Or download from lua.org and add to PATH`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">macOS</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Using Homebrew
brew install lua`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">Linux</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Ubuntu/Debian
sudo apt-get install lua5.4

# Fedora
sudo dnf install lua`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">Running Lua</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- Save as hello.lua
print("Hello, Lua!")

-- Run from terminal:
-- lua hello.lua

-- Or use interactive mode:
-- lua
-- > print("Hello!")
-- Hello!`}
          </pre>
        </div>
      </>
    ),
  },
  "lua_variables": {
    title: "Lua Variables",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Variables in Lua
        </h2>
        <p className="leading-relaxed mb-4">
          Lua is dynamically typed. Variables do not have types; only values do. Variables are global by default.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- Global variables (default)
name = "John"
age = 25
isActive = true

-- Local variables (recommended)
local city = "New York"
local count = 10

-- Multiple assignment
local a, b, c = 1, 2, 3
local x, y = 10, 20

-- Swap values
x, y = y, x
print(x, y)  -- 20, 10

-- Nil (undefined)
local uninit
print(uninit)  -- nil

-- Variable naming rules
local myVar = 1      -- camelCase (common)
local my_var = 2     -- snake_case
local _private = 3   -- underscore prefix
local MAX_SIZE = 100 -- UPPERCASE for constants`}
          </pre>
        </div>
      </>
    ),
  },
  "lua_scope": {
    title: "Variable Scope",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Variable Scope in Lua
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- Global scope (avoid when possible)
globalVar = "I'm global"

-- Local scope (block-level)
do
    local blockVar = "I'm local to this block"
    print(blockVar)  -- Works
end
-- print(blockVar)  -- Error: nil

-- Function scope
local function myFunc()
    local funcVar = "I'm local to function"
    print(funcVar)
end

-- Nested scope
local outer = "outer"
do
    local inner = "inner"
    print(outer)  -- Accessible
    print(inner)  -- Accessible
end
print(outer)  -- Accessible
-- print(inner)  -- nil (out of scope)

-- Shadowing
local x = 10
do
    local x = 20  -- Shadows outer x
    print(x)      -- 20
end
print(x)          -- 10 (original)`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">Best Practices</h3>
        <ul className="list-disc ml-6 mb-4 leading-relaxed">
          <li>Always use <code>local</code> for variables</li>
          <li>Global variables pollute the environment</li>
          <li>Local variables are faster to access</li>
        </ul>
      </>
    ),
  },
  "lua_data_types": {
    title: "Lua Data Types",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Data Types in Lua
        </h2>
        <p className="leading-relaxed mb-4">
          Lua has eight basic types: nil, boolean, number, string, function, userdata, thread, and table.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- nil: represents absence of value
local nothing = nil
print(type(nothing))  -- nil

-- boolean: true or false
local isActive = true
local isDone = false
print(type(isActive))  -- boolean

-- number: double-precision floating point
local integer = 42
local decimal = 3.14
local scientific = 1.5e10
local hex = 0xFF
print(type(integer))  -- number

-- string: immutable sequence of characters
local str = "Hello"
local str2 = 'World'
local multiline = [[
    Multi-line
    string here
]]
print(type(str))  -- string

-- function: first-class values
local function greet() print("Hi") end
print(type(greet))  -- function

-- table: associative array
local tbl = {1, 2, 3}
print(type(tbl))  -- table

-- Check types
print(type(nil))       -- nil
print(type(true))      -- boolean
print(type(42))        -- number
print(type("hello"))   -- string`}
          </pre>
        </div>
      </>
    ),
  },
  "lua_strings": {
    title: "Lua Strings",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Working with Strings
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- String creation
local s1 = "double quotes"
local s2 = 'single quotes'
local s3 = [[long bracket
multi-line string]]

-- Escape sequences
local escaped = "Tab:\\tNewline:\\n"

-- String concatenation
local first = "Hello"
local second = "World"
local combined = first .. " " .. second
print(combined)  -- Hello World

-- String length
print(#"Hello")           -- 5
print(string.len("Hello")) -- 5

-- String functions
local str = "Hello, World!"
print(string.upper(str))      -- HELLO, WORLD!
print(string.lower(str))      -- hello, world!
print(string.sub(str, 1, 5))  -- Hello
print(string.reverse(str))    -- !dlroW ,olleH
print(string.rep("ab", 3))    -- ababab

-- Find and replace
print(string.find(str, "World"))  -- 8, 12
print(string.gsub(str, "World", "Lua"))  -- Hello, Lua!

-- Format strings
local name = "John"
local age = 25
print(string.format("Name: %s, Age: %d", name, age))

-- Convert to/from numbers
print(tonumber("42"))     -- 42
print(tostring(42))       -- "42"`}
          </pre>
        </div>
      </>
    ),
  },
  "lua_numbers": {
    title: "Lua Numbers",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Working with Numbers
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- Number types (Lua 5.3+ has integers)
local int = 42
local float = 3.14
local scientific = 1.5e10
local hex = 0xFF          -- 255
local binary = 0b1010     -- 10 (Lua 5.4)

-- Arithmetic operations
local a, b = 10, 3
print(a + b)   -- 13 (addition)
print(a - b)   -- 7 (subtraction)
print(a * b)   -- 30 (multiplication)
print(a / b)   -- 3.333... (float division)
print(a // b)  -- 3 (integer division, Lua 5.3+)
print(a % b)   -- 1 (modulo)
print(a ^ b)   -- 1000 (exponentiation)
print(-a)      -- -10 (negation)

-- Math library
print(math.abs(-5))       -- 5
print(math.ceil(3.2))     -- 4
print(math.floor(3.8))    -- 3
print(math.max(1, 5, 3))  -- 5
print(math.min(1, 5, 3))  -- 1
print(math.sqrt(16))      -- 4
print(math.sin(math.pi))  -- ~0
print(math.random())      -- 0-1 random
print(math.random(1, 10)) -- 1-10 random

-- Type checking
print(math.type(3))       -- integer
print(math.type(3.0))     -- float

-- Constants
print(math.pi)            -- 3.14159...
print(math.huge)          -- infinity
print(math.mininteger)    -- minimum integer
print(math.maxinteger)    -- maximum integer`}
          </pre>
        </div>
      </>
    ),
  },
  "lua_booleans": {
    title: "Lua Booleans",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Booleans in Lua
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- Boolean values
local t = true
local f = false

-- Truthiness in Lua
-- Only false and nil are falsy
-- Everything else is truthy (including 0 and "")

if 0 then print("0 is truthy") end        -- prints
if "" then print("empty string truthy") end  -- prints
if {} then print("empty table truthy") end   -- prints

-- nil and false are falsy
if nil then print("nil") else print("nil is falsy") end
if false then print("false") else print("false is falsy") end

-- Boolean operations
local a, b = true, false
print(a and b)  -- false
print(a or b)   -- true
print(not a)    -- false

-- Short-circuit evaluation
-- 'and' returns first falsy or last value
print(nil and "hello")    -- nil
print("hello" and "world") -- world

-- 'or' returns first truthy or last value
print(nil or "default")   -- default
print("value" or "other") -- value

-- Common idiom: default values
local name = nil
local displayName = name or "Guest"
print(displayName)  -- Guest

-- Ternary-like pattern
local age = 20
local status = age >= 18 and "adult" or "minor"
print(status)  -- adult`}
          </pre>
        </div>
      </>
    ),
  },
  "lua_operators": {
    title: "Arithmetic Operators",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Arithmetic Operators
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`local a, b = 10, 3

-- Basic arithmetic
print(a + b)   -- 13 (addition)
print(a - b)   -- 7 (subtraction)
print(a * b)   -- 30 (multiplication)
print(a / b)   -- 3.333... (division)
print(a % b)   -- 1 (modulo)
print(a ^ b)   -- 1000 (power)
print(-a)      -- -10 (unary minus)

-- Integer division (Lua 5.3+)
print(a // b)  -- 3

-- Operator precedence (highest to lowest)
-- ^
-- unary - not #
-- * / // %
-- + -
-- ..
-- < > <= >= ~= ==
-- and
-- or

-- Examples
print(2 + 3 * 4)      -- 14 (not 20)
print((2 + 3) * 4)    -- 20
print(2 ^ 3 ^ 2)      -- 512 (right associative)
print(-2 ^ 2)         -- -4 (unary minus after ^)

-- String concatenation operator
local str = "Hello" .. " " .. "World"
print(str)  -- Hello World

-- Length operator
print(#"Hello")       -- 5
print(#{1, 2, 3})     -- 3`}
          </pre>
        </div>
      </>
    ),
  },
  "lua_relational": {
    title: "Relational Operators",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Relational Operators
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`local a, b = 10, 20

-- Comparison operators
print(a == b)   -- false (equal)
print(a ~= b)   -- true (not equal)
print(a < b)    -- true (less than)
print(a > b)    -- false (greater than)
print(a <= b)   -- true (less or equal)
print(a >= b)   -- false (greater or equal)

-- String comparison (lexicographic)
print("apple" < "banana")  -- true
print("Apple" < "apple")   -- true (uppercase < lowercase)
print("10" < "9")          -- true (string comparison!)

-- Type comparison
-- == and ~= work on any types
print(1 == "1")       -- false (different types)
print(nil == false)   -- false

-- Tables compare by reference
local t1 = {1, 2, 3}
local t2 = {1, 2, 3}
local t3 = t1
print(t1 == t2)  -- false (different tables)
print(t1 == t3)  -- true (same reference)

-- Chaining comparisons (not automatic)
local x = 5
-- Wrong: print(1 < x < 10)
-- Correct:
print(1 < x and x < 10)  -- true`}
          </pre>
        </div>
      </>
    ),
  },
  "lua_logical": {
    title: "Logical Operators",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Logical Operators
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- Logical operators: and, or, not

-- 'and' - returns first falsy value or last value
print(true and false)     -- false
print(true and true)      -- true
print(false and true)     -- false
print(nil and "hello")    -- nil
print("a" and "b")        -- b

-- 'or' - returns first truthy value or last value
print(true or false)      -- true
print(false or true)      -- true
print(false or false)     -- false
print(nil or "default")   -- default
print("a" or "b")         -- a

-- 'not' - returns boolean opposite
print(not true)           -- false
print(not false)          -- true
print(not nil)            -- true
print(not "hello")        -- false

-- Short-circuit evaluation
local function sideEffect()
    print("Called!")
    return true
end

-- Second operand not evaluated if result known
print(false and sideEffect())  -- false (no "Called!")
print(true or sideEffect())    -- true (no "Called!")

-- Common patterns
-- Default values
local name = nil
local displayName = name or "Guest"

-- Conditional assignment
local debug = true
local log = debug and print or function() end

-- Ternary emulation
local age = 20
local category = (age >= 18) and "adult" or "minor"
print(category)  -- adult`}
          </pre>
        </div>
      </>
    ),
  },
  "lua_control": {
    title: "If Statement",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          If Statement
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- Basic if
local age = 20
if age >= 18 then
    print("Adult")
end

-- If-else
if age >= 18 then
    print("Adult")
else
    print("Minor")
end

-- If-elseif-else
local score = 85
if score >= 90 then
    print("Grade: A")
elseif score >= 80 then
    print("Grade: B")
elseif score >= 70 then
    print("Grade: C")
elseif score >= 60 then
    print("Grade: D")
else
    print("Grade: F")
end

-- Nested if
local num = 15
if num > 0 then
    if num % 2 == 0 then
        print("Positive even")
    else
        print("Positive odd")
    end
elseif num < 0 then
    print("Negative")
else
    print("Zero")
end

-- Multiple conditions
local x, y = 5, 10
if x > 0 and y > 0 then
    print("Both positive")
end

if x == 5 or y == 5 then
    print("At least one is 5")
end`}
          </pre>
        </div>
      </>
    ),
  },
  "lua_while": {
    title: "While Loop",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          While Loop
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- Basic while loop
local count = 1
while count <= 5 do
    print("Count: " .. count)
    count = count + 1
end

-- While with break
local i = 1
while true do
    print(i)
    i = i + 1
    if i > 5 then
        break  -- Exit the loop
    end
end

-- Process until condition
local sum = 0
local num = 1
while sum < 100 do
    sum = sum + num
    num = num + 1
end
print("Sum: " .. sum)

-- Read input until done
--[[
while true do
    local input = io.read()
    if input == "quit" then
        break
    end
    print("You entered: " .. input)
end
]]

-- Nested while loops
local row = 1
while row <= 3 do
    local col = 1
    while col <= 3 do
        io.write(row * col .. " ")
        col = col + 1
    end
    print()
    row = row + 1
end`}
          </pre>
        </div>
      </>
    ),
  },
  "lua_for": {
    title: "For Loop",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          For Loop
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- Numeric for loop
-- for var = start, end, step do ... end
for i = 1, 5 do
    print(i)  -- 1, 2, 3, 4, 5
end

-- With step
for i = 0, 10, 2 do
    print(i)  -- 0, 2, 4, 6, 8, 10
end

-- Counting down
for i = 5, 1, -1 do
    print(i)  -- 5, 4, 3, 2, 1
end

-- Generic for loop (iterators)
local fruits = {"apple", "banana", "cherry"}

-- ipairs: iterate array part (1, 2, 3...)
for index, value in ipairs(fruits) do
    print(index, value)
end

-- pairs: iterate all key-value pairs
local person = {name = "John", age = 30, city = "NYC"}
for key, value in pairs(person) do
    print(key .. ": " .. tostring(value))
end

-- Loop control
for i = 1, 10 do
    if i == 3 then
        goto continue  -- Skip to next iteration
    end
    if i == 7 then
        break          -- Exit loop
    end
    print(i)
    ::continue::
end

-- Note: loop variable is local to loop
for i = 1, 3 do
    -- i is local here
end
-- i is nil here`}
          </pre>
        </div>
      </>
    ),
  },
  "lua_repeat": {
    title: "Repeat Until Loop",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Repeat Until Loop
        </h2>
        <p className="leading-relaxed mb-4">
          The repeat-until loop executes at least once, then continues until the condition becomes true.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- Basic repeat-until
local count = 1
repeat
    print("Count: " .. count)
    count = count + 1
until count > 5

-- Always executes at least once
local x = 10
repeat
    print("Executed once: " .. x)
until true  -- Condition true immediately

-- Input validation pattern
--[[
local input
repeat
    io.write("Enter a number > 0: ")
    input = tonumber(io.read())
until input and input > 0
print("You entered: " .. input)
]]

-- Variables in repeat are visible in until
repeat
    local answer = "yes"
until answer == "yes"  -- 'answer' is visible here!

-- Compare to while
-- While: checks condition first
local i = 10
while i < 5 do
    print("while: " .. i)  -- Never runs
end

-- Repeat: executes first, then checks
local j = 10
repeat
    print("repeat: " .. j)  -- Runs once
until j >= 5`}
          </pre>
        </div>
      </>
    ),
  },
  "lua_functions": {
    title: "Lua Functions",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Functions in Lua
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- Function declaration
local function greet()
    print("Hello!")
end
greet()

-- Alternative syntax
local greet2 = function()
    print("Hello again!")
end
greet2()

-- Function with return value
local function add(a, b)
    return a + b
end
local sum = add(3, 5)
print(sum)  -- 8

-- Multiple return values
local function getMinMax(a, b)
    if a < b then
        return a, b
    else
        return b, a
    end
end
local min, max = getMinMax(10, 5)
print(min, max)  -- 5, 10

-- Ignore return values
local first, _ = getMinMax(3, 7)

-- Functions are first-class values
local operations = {
    add = function(a, b) return a + b end,
    sub = function(a, b) return a - b end,
}
print(operations.add(5, 3))  -- 8
print(operations.sub(5, 3))  -- 2

-- Recursive functions
local function factorial(n)
    if n <= 1 then
        return 1
    end
    return n * factorial(n - 1)
end
print(factorial(5))  -- 120`}
          </pre>
        </div>
      </>
    ),
  },
  "lua_parameters": {
    title: "Function Parameters",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Function Parameters
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- Basic parameters
local function greet(name)
    print("Hello, " .. name)
end
greet("John")

-- Default values using 'or'
local function greet2(name)
    name = name or "Guest"
    print("Hello, " .. name)
end
greet2()        -- Hello, Guest
greet2("Jane")  -- Hello, Jane

-- Variable arguments (vararg)
local function sum(...)
    local args = {...}  -- Pack into table
    local total = 0
    for _, v in ipairs(args) do
        total = total + v
    end
    return total
end
print(sum(1, 2, 3, 4, 5))  -- 15

-- select() with vararg
local function info(...)
    print("Count:", select("#", ...))
    print("Third:", select(3, ...))
end
info("a", "b", "c", "d")

-- table.unpack (unpack in Lua 5.1)
local function printThree(a, b, c)
    print(a, b, c)
end
local args = {1, 2, 3}
printThree(table.unpack(args))  -- 1, 2, 3

-- Named parameters via table
local function createPerson(opts)
    return {
        name = opts.name or "Unknown",
        age = opts.age or 0,
        city = opts.city or "Unknown"
    }
end
local person = createPerson{name = "John", age = 30}
print(person.name, person.age)  -- John, 30`}
          </pre>
        </div>
      </>
    ),
  },
  "lua_closures": {
    title: "Closures",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Closures in Lua
        </h2>
        <p className="leading-relaxed mb-4">
          A closure is a function that captures variables from its enclosing scope.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- Basic closure
local function makeCounter()
    local count = 0  -- Captured variable
    return function()
        count = count + 1
        return count
    end
end

local counter = makeCounter()
print(counter())  -- 1
print(counter())  -- 2
print(counter())  -- 3

-- Each call creates new closure
local counter2 = makeCounter()
print(counter2())  -- 1 (independent)

-- Closure factory
local function makeMultiplier(factor)
    return function(x)
        return x * factor
    end
end

local double = makeMultiplier(2)
local triple = makeMultiplier(3)
print(double(5))  -- 10
print(triple(5))  -- 15

-- Private state pattern
local function createAccount(initial)
    local balance = initial
    return {
        deposit = function(amount)
            balance = balance + amount
        end,
        withdraw = function(amount)
            if amount <= balance then
                balance = balance - amount
                return true
            end
            return false
        end,
        getBalance = function()
            return balance
        end
    }
end

local account = createAccount(100)
account.deposit(50)
print(account.getBalance())  -- 150
account.withdraw(30)
print(account.getBalance())  -- 120`}
          </pre>
        </div>
      </>
    ),
  },
  "lua_tables": {
    title: "Lua Tables",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Tables in Lua
        </h2>
        <p className="leading-relaxed mb-4">
          Tables are the only data structuring mechanism in Lua. They implement arrays, dictionaries, objects, and more.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- Table creation
local empty = {}
local array = {1, 2, 3, 4, 5}
local dict = {name = "John", age = 30}

-- Mixed table
local mixed = {
    "first",              -- [1] = "first"
    "second",             -- [2] = "second"
    key = "value",        -- key = "value"
    [10] = "ten",         -- [10] = "ten"
    ["odd key"] = true    -- ["odd key"] = true
}

-- Accessing elements
print(array[1])       -- 1 (Lua arrays start at 1!)
print(dict.name)      -- John
print(dict["name"])   -- John
print(mixed[10])      -- ten
print(mixed["odd key"]) -- true

-- Modifying tables
dict.city = "NYC"           -- Add new key
dict["country"] = "USA"     -- Alternative syntax
dict.age = 31               -- Modify existing
dict.name = nil             -- Remove key

-- Table length (array part only)
print(#array)  -- 5
print(#{1, 2, nil, 4})  -- Undefined with holes!

-- Nested tables
local person = {
    name = "John",
    address = {
        city = "NYC",
        zip = "10001"
    }
}
print(person.address.city)  -- NYC`}
          </pre>
        </div>
      </>
    ),
  },
  "lua_table_ops": {
    title: "Table Operations",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Table Operations
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- table library functions
local t = {3, 1, 4, 1, 5, 9}

-- Insert element
table.insert(t, 2)           -- Append: {3,1,4,1,5,9,2}
table.insert(t, 1, 0)        -- At index 1: {0,3,1,4,1,5,9,2}

-- Remove element
local removed = table.remove(t)      -- Remove last
local removed2 = table.remove(t, 1)  -- Remove first

-- Sort (in-place)
local nums = {5, 2, 8, 1, 9}
table.sort(nums)
-- nums is now {1, 2, 5, 8, 9}

-- Custom sort
local people = {
    {name = "Bob", age = 30},
    {name = "Alice", age = 25},
    {name = "Charlie", age = 35}
}
table.sort(people, function(a, b)
    return a.age < b.age
end)

-- Concatenate array elements
local words = {"Hello", "World"}
print(table.concat(words, " "))  -- Hello World
print(table.concat(words, ", ")) -- Hello, World

-- Copy table (shallow)
local function shallowCopy(t)
    local copy = {}
    for k, v in pairs(t) do
        copy[k] = v
    end
    return copy
end

-- Deep copy
local function deepCopy(t)
    if type(t) ~= "table" then return t end
    local copy = {}
    for k, v in pairs(t) do
        copy[deepCopy(k)] = deepCopy(v)
    end
    return copy
end`}
          </pre>
        </div>
      </>
    ),
  },
  "lua_arrays": {
    title: "Arrays in Lua",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Arrays in Lua
        </h2>
        <p className="leading-relaxed mb-4">
          Lua arrays are tables with integer keys starting from 1.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- Array creation
local arr = {10, 20, 30, 40, 50}

-- Note: Lua arrays start at index 1!
print(arr[1])  -- 10 (first element)
print(arr[5])  -- 50 (last element)
print(arr[0])  -- nil (no element at 0)

-- Array length
print(#arr)  -- 5

-- Iterate with ipairs (array order)
for i, v in ipairs(arr) do
    print(i, v)
end

-- Iterate with numeric for
for i = 1, #arr do
    print(i, arr[i])
end

-- Add elements
arr[#arr + 1] = 60        -- Append
table.insert(arr, 70)     -- Append
table.insert(arr, 1, 0)   -- Prepend

-- Remove elements
table.remove(arr)         -- Remove last
table.remove(arr, 1)      -- Remove first

-- Array slicing (manual)
local function slice(arr, first, last)
    local result = {}
    for i = first, last do
        result[#result + 1] = arr[i]
    end
    return result
end

-- Check if value exists
local function contains(arr, value)
    for _, v in ipairs(arr) do
        if v == value then return true end
    end
    return false
end

-- Find index
local function indexOf(arr, value)
    for i, v in ipairs(arr) do
        if v == value then return i end
    end
    return nil
end`}
          </pre>
        </div>
      </>
    ),
  },
  "lua_metatables": {
    title: "Metatables",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Metatables in Lua
        </h2>
        <p className="leading-relaxed mb-4">
          Metatables allow you to change the behavior of tables by defining special metamethods.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- Basic metatable
local t = {1, 2, 3}
local mt = {}

-- Set metatable
setmetatable(t, mt)

-- Get metatable
print(getmetatable(t) == mt)  -- true

-- __index: called when key not found
local defaults = {x = 0, y = 0, z = 0}
local point = {x = 10}
setmetatable(point, {__index = defaults})

print(point.x)  -- 10 (from point)
print(point.y)  -- 0 (from defaults)
print(point.z)  -- 0 (from defaults)

-- __index as function
local mt2 = {
    __index = function(table, key)
        return "default_" .. key
    end
}
local t2 = setmetatable({}, mt2)
print(t2.anything)  -- default_anything

-- __newindex: called when setting new key
local protected = {}
local protectedMt = {
    __newindex = function(t, k, v)
        error("Cannot modify this table!")
    end
}
setmetatable(protected, protectedMt)
-- protected.x = 1  -- Error!

-- rawget/rawset bypass metatables
rawset(protected, "x", 10)
print(rawget(protected, "x"))  -- 10`}
          </pre>
        </div>
      </>
    ),
  },
  "lua_metamethods": {
    title: "Metamethods",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Metamethods
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- Arithmetic metamethods
local Vector = {}
Vector.__index = Vector

function Vector.new(x, y)
    return setmetatable({x = x, y = y}, Vector)
end

-- __add: v1 + v2
function Vector.__add(a, b)
    return Vector.new(a.x + b.x, a.y + b.y)
end

-- __sub: v1 - v2
function Vector.__sub(a, b)
    return Vector.new(a.x - b.x, a.y - b.y)
end

-- __mul: v * scalar
function Vector.__mul(a, b)
    if type(a) == "number" then
        return Vector.new(a * b.x, a * b.y)
    else
        return Vector.new(a.x * b, a.y * b)
    end
end

-- __tostring: tostring(v)
function Vector.__tostring(v)
    return string.format("Vector(%g, %g)", v.x, v.y)
end

-- __eq: v1 == v2
function Vector.__eq(a, b)
    return a.x == b.x and a.y == b.y
end

-- __len: #v
function Vector.__len(v)
    return math.sqrt(v.x^2 + v.y^2)
end

-- Usage
local v1 = Vector.new(3, 4)
local v2 = Vector.new(1, 2)
print(v1 + v2)      -- Vector(4, 6)
print(v1 - v2)      -- Vector(2, 2)
print(v1 * 2)       -- Vector(6, 8)
print(tostring(v1)) -- Vector(3, 4)
print(#v1)          -- 5`}
          </pre>
        </div>
      </>
    ),
  },
  "lua_oop": {
    title: "OOP with Metatables",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Object-Oriented Programming
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- Class pattern
local Animal = {}
Animal.__index = Animal

function Animal.new(name)
    local self = setmetatable({}, Animal)
    self.name = name
    return self
end

function Animal:speak()
    print(self.name .. " makes a sound")
end

-- Inheritance
local Dog = setmetatable({}, {__index = Animal})
Dog.__index = Dog

function Dog.new(name, breed)
    local self = Animal.new(name)
    setmetatable(self, Dog)
    self.breed = breed
    return self
end

function Dog:speak()
    print(self.name .. " barks!")
end

function Dog:fetch()
    print(self.name .. " fetches the ball")
end

-- Usage
local animal = Animal.new("Generic")
animal:speak()  -- Generic makes a sound

local dog = Dog.new("Buddy", "Labrador")
dog:speak()     -- Buddy barks!
dog:fetch()     -- Buddy fetches the ball

-- Check inheritance
print(getmetatable(dog).__index == Dog)  -- true

-- Simple class helper
local function class(base)
    local cls = {}
    cls.__index = cls
    if base then
        setmetatable(cls, {__index = base})
    end
    cls.new = function(...)
        local obj = setmetatable({}, cls)
        if obj.init then obj:init(...) end
        return obj
    end
    return cls
end`}
          </pre>
        </div>
      </>
    ),
  },
  "lua_coroutines": {
    title: "Coroutines",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Coroutines in Lua
        </h2>
        <p className="leading-relaxed mb-4">
          Coroutines enable cooperative multitasking. They can suspend and resume execution.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- Create a coroutine
local co = coroutine.create(function()
    print("Coroutine started")
    coroutine.yield()
    print("Coroutine resumed")
    coroutine.yield()
    print("Coroutine finished")
end)

-- Check status
print(coroutine.status(co))  -- suspended

-- Resume coroutine
coroutine.resume(co)  -- Coroutine started
print(coroutine.status(co))  -- suspended

coroutine.resume(co)  -- Coroutine resumed
coroutine.resume(co)  -- Coroutine finished
print(coroutine.status(co))  -- dead

-- Passing values
local co2 = coroutine.create(function(a, b)
    print("Received:", a, b)
    local c = coroutine.yield(a + b)
    print("After yield:", c)
    return "done"
end)

local ok, result = coroutine.resume(co2, 10, 20)
print(result)  -- 30

ok, result = coroutine.resume(co2, "hello")
-- After yield: hello
print(result)  -- done`}
          </pre>
        </div>
      </>
    ),
  },
  "lua_coroutine_funcs": {
    title: "Coroutine Functions",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Coroutine Functions
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- coroutine.wrap: returns function wrapper
local counter = coroutine.wrap(function()
    local i = 0
    while true do
        i = i + 1
        coroutine.yield(i)
    end
end)

print(counter())  -- 1
print(counter())  -- 2
print(counter())  -- 3

-- Iterator using coroutines
local function range(from, to, step)
    step = step or 1
    return coroutine.wrap(function()
        for i = from, to, step do
            coroutine.yield(i)
        end
    end)
end

for n in range(1, 5) do
    print(n)  -- 1, 2, 3, 4, 5
end

-- Producer-consumer pattern
local function producer()
    return coroutine.create(function()
        for i = 1, 5 do
            print("Producing:", i)
            coroutine.yield(i)
        end
    end)
end

local function consumer(prod)
    while true do
        local ok, value = coroutine.resume(prod)
        if not ok or value == nil then break end
        print("Consuming:", value)
    end
end

consumer(producer())

-- coroutine.running()
local co = coroutine.create(function()
    print(coroutine.running())  -- thread, false
end)
coroutine.resume(co)
print(coroutine.running())  -- thread, true (main)`}
          </pre>
        </div>
      </>
    ),
  },
  "lua_modules": {
    title: "Lua Modules",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Modules in Lua
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- Loading modules with require
local math = require("math")
local string = require("string")

-- require caches modules
local mymod1 = require("mymodule")
local mymod2 = require("mymodule")
print(mymod1 == mymod2)  -- true (same table)

-- Force reload
package.loaded["mymodule"] = nil
local mymod3 = require("mymodule")

-- Module search paths
print(package.path)   -- Lua files
print(package.cpath)  -- C libraries

-- Add to search path
package.path = package.path .. ";./lib/?.lua"

-- package.loaded contains loaded modules
for name, _ in pairs(package.loaded) do
    print(name)
end

-- package.preload for lazy loading
package.preload["lazymod"] = function()
    return {version = "1.0"}
end
-- Module not loaded yet
local lazy = require("lazymod")  -- Now loaded

-- Standard modules
local io = require("io")
local os = require("os")
local table = require("table")
local string = require("string")
local math = require("math")
local coroutine = require("coroutine")
local debug = require("debug")`}
          </pre>
        </div>
      </>
    ),
  },
  "lua_create_modules": {
    title: "Creating Modules",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Creating Lua Modules
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- mymodule.lua - Table-based module
local M = {}

M.version = "1.0.0"

function M.greet(name)
    return "Hello, " .. (name or "World")
end

function M.add(a, b)
    return a + b
end

-- Private function (not in M)
local function privateHelper()
    return "I'm private"
end

function M.usePrivate()
    return privateHelper()
end

return M

-- Usage:
-- local mymod = require("mymodule")
-- print(mymod.greet("Lua"))
-- print(mymod.add(2, 3))

-----------------------------------
-- Alternative: Function closure module
-----------------------------------
-- config.lua
return function(options)
    local config = {
        debug = options.debug or false,
        maxItems = options.maxItems or 100
    }

    function config.get(key)
        return config[key]
    end

    return config
end

-- Usage:
-- local makeConfig = require("config")
-- local cfg = makeConfig{debug = true}
-- print(cfg.get("debug"))

-----------------------------------
-- Class-like module
-----------------------------------
-- person.lua
local Person = {}
Person.__index = Person

function Person.new(name, age)
    local self = setmetatable({}, Person)
    self.name = name
    self.age = age
    return self
end

function Person:greet()
    return "Hi, I'm " .. self.name
end

return Person`}
          </pre>
        </div>
      </>
    ),
  },
  "lua_file_io": {
    title: "File I/O",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          File Operations in Lua
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- Open modes:
-- "r"  - read (default)
-- "w"  - write (overwrite)
-- "a"  - append
-- "r+" - read/write
-- "w+" - read/write (overwrite)
-- "a+" - read/append
-- "b"  - binary mode (e.g., "rb", "wb")

-- Simple file operations (uses default handles)
-- io.input("filename")  -- set default input
-- io.output("filename") -- set default output

-- Read entire file
local content = io.open("file.txt", "r")
if content then
    local data = content:read("*a")  -- "*a" = all
    print(data)
    content:close()
end

-- io.lines iterator
for line in io.lines("file.txt") do
    print(line)
end

-- Check if file exists
local function fileExists(name)
    local f = io.open(name, "r")
    if f then
        f:close()
        return true
    end
    return false
end

-- File handle methods
local f = io.open("test.txt", "r")
if f then
    f:read("*l")    -- read line
    f:read("*n")    -- read number
    f:read("*a")    -- read all
    f:read(10)      -- read 10 bytes
    f:seek("set")   -- go to beginning
    f:seek("cur", 5) -- move 5 from current
    f:seek("end")   -- go to end
    f:close()
end`}
          </pre>
        </div>
      </>
    ),
  },
  "lua_read_files": {
    title: "Reading Files",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Reading Files
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- Read entire file
local function readAll(filename)
    local f = io.open(filename, "r")
    if not f then return nil, "Cannot open file" end
    local content = f:read("*a")
    f:close()
    return content
end

-- Read file line by line
local function readLines(filename)
    local lines = {}
    for line in io.lines(filename) do
        lines[#lines + 1] = line
    end
    return lines
end

-- Read with error handling
local function safeRead(filename)
    local f, err = io.open(filename, "r")
    if not f then
        return nil, err
    end

    local ok, content = pcall(function()
        return f:read("*a")
    end)

    f:close()

    if ok then
        return content
    else
        return nil, content
    end
end

-- Read specific number of bytes
local function readBytes(filename, n)
    local f = io.open(filename, "rb")
    if not f then return nil end
    local data = f:read(n)
    f:close()
    return data
end

-- Read binary file
local function readBinary(filename)
    local f = io.open(filename, "rb")
    if not f then return nil end
    local data = f:read("*a")
    f:close()
    return data
end

-- Usage
local content = readAll("example.txt")
if content then
    print(content)
end`}
          </pre>
        </div>
      </>
    ),
  },
  "lua_write_files": {
    title: "Writing Files",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Writing Files
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- Write to file (overwrite)
local function writeFile(filename, content)
    local f = io.open(filename, "w")
    if not f then return false, "Cannot open file" end
    f:write(content)
    f:close()
    return true
end

-- Append to file
local function appendFile(filename, content)
    local f = io.open(filename, "a")
    if not f then return false, "Cannot open file" end
    f:write(content)
    f:close()
    return true
end

-- Write multiple lines
local function writeLines(filename, lines)
    local f = io.open(filename, "w")
    if not f then return false end
    for _, line in ipairs(lines) do
        f:write(line, "\\n")
    end
    f:close()
    return true
end

-- Formatted writing
local function writeFormatted(filename)
    local f = io.open(filename, "w")
    if not f then return false end

    f:write(string.format("Name: %s\\n", "John"))
    f:write(string.format("Age: %d\\n", 30))
    f:write(string.format("Score: %.2f\\n", 95.5))

    f:close()
    return true
end

-- Safe write with error handling
local function safeWrite(filename, content)
    local f, err = io.open(filename, "w")
    if not f then return nil, err end

    local ok, writeErr = pcall(function()
        f:write(content)
    end)

    f:close()
    return ok, writeErr
end

-- Copy file
local function copyFile(src, dest)
    local input = io.open(src, "rb")
    if not input then return false end

    local output = io.open(dest, "wb")
    if not output then
        input:close()
        return false
    end

    output:write(input:read("*a"))
    input:close()
    output:close()
    return true
end`}
          </pre>
        </div>
      </>
    ),
  },
  "lua_errors": {
    title: "Error Handling",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Error Handling in Lua
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- Raising errors
local function divide(a, b)
    if b == 0 then
        error("Division by zero!")
    end
    return a / b
end

-- error() with level
local function validateAge(age)
    if age < 0 then
        error("Age cannot be negative", 2)  -- blame caller
    end
end

-- assert: check and raise error
local function openFile(filename)
    local f = assert(io.open(filename, "r"),
                     "Cannot open: " .. filename)
    return f
end

-- assert with expression
local age = 25
assert(age >= 0, "Invalid age")
assert(type(age) == "number", "Age must be number")

-- Return nil, error pattern
local function safeDivide(a, b)
    if b == 0 then
        return nil, "Division by zero"
    end
    return a / b
end

local result, err = safeDivide(10, 0)
if not result then
    print("Error: " .. err)
end

-- Error messages
-- error("message")           -- simple string
-- error("message", 1)        -- level 1 (current)
-- error("message", 2)        -- level 2 (caller)
-- error({code=404, msg="Not found"})  -- error object`}
          </pre>
        </div>
      </>
    ),
  },
  "lua_pcall": {
    title: "pcall and xpcall",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Protected Calls
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- pcall: protected call
local function riskyOperation()
    error("Something went wrong!")
end

local ok, err = pcall(riskyOperation)
if ok then
    print("Success!")
else
    print("Error: " .. tostring(err))
end

-- pcall with arguments
local function divide(a, b)
    if b == 0 then error("Division by zero") end
    return a / b
end

local ok, result = pcall(divide, 10, 2)
if ok then
    print("Result: " .. result)  -- Result: 5
end

ok, result = pcall(divide, 10, 0)
if not ok then
    print("Error: " .. result)
end

-- xpcall: with error handler
local function errorHandler(err)
    print("Error occurred!")
    print(debug.traceback(err, 2))
    return "handled: " .. tostring(err)
end

local ok, result = xpcall(riskyOperation, errorHandler)

-- Try-catch pattern
local function try(f)
    return function(handlers)
        local ok, err = pcall(f)
        if ok then
            if handlers.success then
                handlers.success()
            end
        else
            if handlers.catch then
                handlers.catch(err)
            end
        end
        if handlers.finally then
            handlers.finally()
        end
    end
end

-- Usage
try(function()
    error("test error")
end){
    catch = function(e) print("Caught: " .. e) end,
    finally = function() print("Cleanup") end
}`}
          </pre>
        </div>
      </>
    ),
  },
  "lua_c_api": {
    title: "C API Basics",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Lua C API Basics
        </h2>
        <p className="leading-relaxed mb-4">
          Lua can be embedded in C/C++ applications. The C API provides functions to interact with Lua from C.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`/* Basic C program embedding Lua */
#include <lua.h>
#include <lauxlib.h>
#include <lualib.h>

int main(void) {
    // Create Lua state
    lua_State *L = luaL_newstate();
    luaL_openlibs(L);  // Open standard libs

    // Execute Lua code
    luaL_dostring(L, "print('Hello from Lua!')");

    // Load and run file
    luaL_dofile(L, "script.lua");

    // Push and get values
    lua_pushnumber(L, 42);
    lua_setglobal(L, "myNumber");

    lua_getglobal(L, "myNumber");
    double num = lua_tonumber(L, -1);
    lua_pop(L, 1);

    // Call Lua function from C
    lua_getglobal(L, "myFunc");
    lua_pushnumber(L, 10);
    lua_pushnumber(L, 20);
    lua_call(L, 2, 1);  // 2 args, 1 result
    double result = lua_tonumber(L, -1);
    lua_pop(L, 1);

    // Close state
    lua_close(L);
    return 0;
}

/* Creating C function callable from Lua */
static int l_add(lua_State *L) {
    double a = luaL_checknumber(L, 1);
    double b = luaL_checknumber(L, 2);
    lua_pushnumber(L, a + b);
    return 1;  // number of results
}

/* Register function */
lua_pushcfunction(L, l_add);
lua_setglobal(L, "add");
// Now Lua can call: add(1, 2)`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">Key Concepts</h3>
        <ul className="list-disc ml-6 mb-4 leading-relaxed">
          <li><strong>Stack-based:</strong> All operations use a virtual stack</li>
          <li><strong>lua_State:</strong> Represents Lua execution state</li>
          <li><strong>Push/Pop:</strong> Values are pushed to and popped from stack</li>
          <li><strong>Type checking:</strong> luaL_check* functions validate types</li>
        </ul>
      </>
    ),
  },
};
