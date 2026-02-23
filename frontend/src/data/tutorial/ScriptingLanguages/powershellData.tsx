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
  { label: "PowerShell HOME", href: "ps_home" },
  { label: "PowerShell Intro", href: "ps_intro" },
  { label: "PowerShell Setup", href: "ps_setup" },
  {
    label: "Cmdlets",
    href: "ps_cmdlets",
    isHeader: true,
    children: [
      { label: "Cmdlet Basics", href: "ps_cmdlets" },
      { label: "Common Cmdlets", href: "ps_common_cmdlets" },
      { label: "Getting Help", href: "ps_help" },
    ]
  },
  {
    label: "Variables",
    href: "ps_variables",
    isHeader: true,
    children: [
      { label: "Variables", href: "ps_variables" },
      { label: "Automatic Variables", href: "ps_auto_variables" },
      { label: "Environment Variables", href: "ps_env_variables" },
    ]
  },
  {
    label: "Data Types",
    href: "ps_data_types",
    isHeader: true,
    children: [
      { label: "Data Types", href: "ps_data_types" },
      { label: "Strings", href: "ps_strings" },
      { label: "Arrays", href: "ps_arrays" },
      { label: "Hash Tables", href: "ps_hashtables" },
    ]
  },
  {
    label: "Operators",
    href: "ps_operators",
    isHeader: true,
    children: [
      { label: "Arithmetic", href: "ps_operators" },
      { label: "Comparison", href: "ps_comparison" },
      { label: "Logical", href: "ps_logical" },
    ]
  },
  {
    label: "Pipelines",
    href: "ps_pipelines",
    isHeader: true,
    children: [
      { label: "Pipeline Basics", href: "ps_pipelines" },
      { label: "Pipeline Objects", href: "ps_pipeline_objects" },
      { label: "Filtering", href: "ps_filtering" },
    ]
  },
  {
    label: "Conditionals",
    href: "ps_conditionals",
    isHeader: true,
    children: [
      { label: "If Statement", href: "ps_conditionals" },
      { label: "Switch Statement", href: "ps_switch" },
    ]
  },
  {
    label: "Loops",
    href: "ps_loops",
    isHeader: true,
    children: [
      { label: "For Loop", href: "ps_loops" },
      { label: "ForEach Loop", href: "ps_foreach" },
      { label: "While Loop", href: "ps_while" },
      { label: "Do-While/Until", href: "ps_do_while" },
    ]
  },
  {
    label: "Functions",
    href: "ps_functions",
    isHeader: true,
    children: [
      { label: "Functions", href: "ps_functions" },
      { label: "Parameters", href: "ps_parameters" },
      { label: "Advanced Functions", href: "ps_advanced_functions" },
    ]
  },
  {
    label: "Modules",
    href: "ps_modules",
    isHeader: true,
    children: [
      { label: "Module Basics", href: "ps_modules" },
      { label: "Creating Modules", href: "ps_create_modules" },
    ]
  },
  {
    label: "File System",
    href: "ps_filesystem",
    isHeader: true,
    children: [
      { label: "File Operations", href: "ps_filesystem" },
      { label: "Working with Files", href: "ps_files" },
      { label: "Working with Folders", href: "ps_folders" },
    ]
  },
  { label: "Registry", href: "ps_registry" },
  {
    label: "Remote Management",
    href: "ps_remote",
    isHeader: true,
    children: [
      { label: "Remoting Basics", href: "ps_remote" },
      { label: "Invoke-Command", href: "ps_invoke_command" },
      { label: "Sessions", href: "ps_sessions" },
    ]
  },
  { label: "Active Directory", href: "ps_active_directory" },
  {
    label: "Error Handling",
    href: "ps_error_handling",
    isHeader: true,
    children: [
      { label: "Try-Catch-Finally", href: "ps_error_handling" },
      { label: "Error Types", href: "ps_error_types" },
    ]
  },
];

export const tutorialContent: Record<string, TopicContent> = {
  "ps_home": {
    title: "PowerShell Tutorial",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          PowerShell Tutorial
        </h2>
        <p className="leading-relaxed mb-4">
          <strong>PowerShell</strong> is a powerful task automation and configuration management framework from Microsoft, consisting of a command-line shell and scripting language.
        </p>
        <h3 className="text-xl font-medium mb-3">Example: Hello World</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# PowerShell Hello World
Write-Host "Hello, World!"

# Using Write-Output
Write-Output "Hello from PowerShell!"`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">What You Will Learn</h3>
        <ul className="list-disc ml-6 mb-4 leading-relaxed">
          <li>Cmdlets and the pipeline</li>
          <li>Variables, data types, and operators</li>
          <li>Control flow and functions</li>
          <li>File system and registry management</li>
          <li>Remote management and Active Directory</li>
          <li>Error handling and debugging</li>
        </ul>
      </>
    ),
  },
  "ps_intro": {
    title: "Introduction to PowerShell",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          What is PowerShell?
        </h2>
        <p className="leading-relaxed mb-4">
          PowerShell is built on .NET and provides full access to COM and WMI, enabling administrators to perform administrative tasks on both local and remote Windows systems.
        </p>
        <h3 className="text-xl font-medium mb-3">Key Features</h3>
        <ul className="list-disc ml-6 mb-4 leading-relaxed">
          <li><strong>Object-based:</strong> Works with objects, not just text</li>
          <li><strong>Cmdlets:</strong> Built-in commands following Verb-Noun naming</li>
          <li><strong>Pipeline:</strong> Pass objects between commands</li>
          <li><strong>Cross-platform:</strong> PowerShell Core runs on Windows, macOS, Linux</li>
          <li><strong>Extensible:</strong> Import modules for additional functionality</li>
        </ul>
        <h3 className="text-xl font-medium mb-3">PowerShell vs Command Prompt</h3>
        <ul className="list-disc ml-6 mb-4 leading-relaxed">
          <li>PowerShell uses objects; CMD uses text</li>
          <li>PowerShell has rich scripting capabilities</li>
          <li>PowerShell integrates with .NET Framework</li>
          <li>PowerShell supports remote management</li>
        </ul>
      </>
    ),
  },
  "ps_setup": {
    title: "PowerShell Setup",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Setting Up PowerShell
        </h2>
        <h3 className="text-xl font-medium mb-3">Windows</h3>
        <p className="leading-relaxed mb-4">
          PowerShell comes pre-installed on Windows. Search for "PowerShell" in the Start menu.
        </p>
        <h3 className="text-xl font-medium mb-3">Install PowerShell 7 (Cross-platform)</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Windows (using winget)
winget install Microsoft.PowerShell

# macOS (using Homebrew)
brew install powershell/tap/powershell

# Linux (Ubuntu/Debian)
sudo apt-get update
sudo apt-get install -y powershell`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">Check Version</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`$PSVersionTable.PSVersion`}
          </pre>
        </div>
      </>
    ),
  },
  "ps_cmdlets": {
    title: "PowerShell Cmdlets",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Cmdlets (Command-lets)
        </h2>
        <p className="leading-relaxed mb-4">
          Cmdlets are lightweight commands used in the PowerShell environment. They follow a Verb-Noun naming convention.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Basic cmdlet examples
Get-Process          # Get running processes
Get-Service          # Get services
Get-ChildItem        # List files (like ls/dir)
Set-Location         # Change directory (like cd)
Get-Content          # Read file content (like cat)

# Cmdlet with parameters
Get-Process -Name "notepad"
Get-ChildItem -Path "C:\\Users" -Recurse

# Using aliases
ls                   # Alias for Get-ChildItem
cd                   # Alias for Set-Location
cat                  # Alias for Get-Content`}
          </pre>
        </div>
      </>
    ),
  },
  "ps_common_cmdlets": {
    title: "Common Cmdlets",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Common PowerShell Cmdlets
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Navigation
Get-Location              # Current directory
Set-Location C:\\          # Change directory
Push-Location             # Save current location
Pop-Location              # Return to saved location

# File Operations
Get-ChildItem             # List items
New-Item                  # Create file/folder
Copy-Item                 # Copy
Move-Item                 # Move
Remove-Item               # Delete
Rename-Item               # Rename

# Process Management
Get-Process               # List processes
Start-Process             # Start a process
Stop-Process              # Stop a process

# Service Management
Get-Service               # List services
Start-Service             # Start service
Stop-Service              # Stop service
Restart-Service           # Restart service

# Information
Get-Date                  # Current date/time
Get-ComputerInfo          # System information
Get-History               # Command history`}
          </pre>
        </div>
      </>
    ),
  },
  "ps_help": {
    title: "Getting Help",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Getting Help in PowerShell
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Update help files
Update-Help

# Get help for a cmdlet
Get-Help Get-Process
Get-Help Get-Process -Full
Get-Help Get-Process -Examples
Get-Help Get-Process -Online

# Find cmdlets
Get-Command                        # All commands
Get-Command -Verb Get              # Commands starting with Get
Get-Command -Noun Process          # Commands with Process
Get-Command *service*              # Wildcard search

# Get cmdlet syntax
Get-Command Get-Process -Syntax

# List aliases
Get-Alias
Get-Alias ls                       # What does 'ls' mean?

# Discover object members
Get-Process | Get-Member
"Hello" | Get-Member`}
          </pre>
        </div>
      </>
    ),
  },
  "ps_variables": {
    title: "PowerShell Variables",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Variables in PowerShell
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Variable declaration ($ prefix)
$name = "John"
$age = 30
$isActive = $true

# Display variables
Write-Host "Name: $name"
Write-Host "Age: $age"

# Variable types are inferred
$number = 42           # Integer
$decimal = 3.14        # Double
$text = "Hello"        # String
$flag = $true          # Boolean

# Explicitly typed
[int]$count = 10
[string]$message = "Hello"
[datetime]$date = Get-Date

# Get variable info
Get-Variable name
$name.GetType()

# Clear variable
Clear-Variable name
Remove-Variable age`}
          </pre>
        </div>
      </>
    ),
  },
  "ps_auto_variables": {
    title: "Automatic Variables",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Automatic Variables
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Common automatic variables
$_              # Current object in pipeline
$PSItem         # Same as $_
$null           # Null value
$true           # Boolean true
$false          # Boolean false
$HOME           # User's home directory
$PWD            # Current directory
$Host           # Host application info
$PID            # Process ID
$PSVersionTable # PowerShell version info
$Error          # Array of errors
$LastExitCode   # Last program exit code
$?              # Success status of last command

# Examples
Get-Process | Where-Object { $_.CPU -gt 10 }

if ($?) {
    Write-Host "Last command succeeded"
}

Write-Host "Home: $HOME"
Write-Host "Current: $PWD"`}
          </pre>
        </div>
      </>
    ),
  },
  "ps_env_variables": {
    title: "Environment Variables",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Environment Variables
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Access environment variables
$env:PATH
$env:USERNAME
$env:COMPUTERNAME
$env:USERPROFILE

# List all environment variables
Get-ChildItem env:
dir env:

# Set environment variable (session only)
$env:MY_VAR = "Hello"

# Set persistent environment variable
[Environment]::SetEnvironmentVariable("MY_VAR", "Hello", "User")
[Environment]::SetEnvironmentVariable("MY_VAR", "Hello", "Machine")

# Get specific variable
[Environment]::GetEnvironmentVariable("PATH", "Machine")

# Remove environment variable
Remove-Item env:MY_VAR
[Environment]::SetEnvironmentVariable("MY_VAR", $null, "User")`}
          </pre>
        </div>
      </>
    ),
  },
  "ps_data_types": {
    title: "PowerShell Data Types",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Data Types in PowerShell
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Common data types
[int]$integer = 42
[long]$bigInt = 9999999999
[double]$decimal = 3.14159
[string]$text = "Hello"
[bool]$flag = $true
[datetime]$date = Get-Date
[array]$arr = @(1, 2, 3)
[hashtable]$hash = @{key = "value"}

# Check type
$integer.GetType().Name    # Int32
$text.GetType().FullName   # System.String

# Type conversion
[int]"42"                  # String to int
[string]42                 # Int to string
[datetime]"2024-01-15"     # String to datetime

# Type checking
$value = "Hello"
$value -is [string]        # True
$value -is [int]           # False

# Null handling
$nullable = $null
if ($null -eq $nullable) {
    Write-Host "Variable is null"
}`}
          </pre>
        </div>
      </>
    ),
  },
  "ps_strings": {
    title: "PowerShell Strings",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Working with Strings
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# String types
$double = "Hello $name"    # Variables expanded
$single = 'Hello $name'    # Literal string
$here = @"
Multi-line
string here
"@

# String operations
$str = "Hello, World!"
$str.Length                # 13
$str.ToUpper()            # HELLO, WORLD!
$str.ToLower()            # hello, world!
$str.Substring(0, 5)      # Hello
$str.Replace("World", "PowerShell")
$str.Split(",")           # Array: "Hello", " World!"
$str.Trim()               # Remove whitespace
$str.Contains("World")    # True
$str.StartsWith("Hello")  # True
$str.EndsWith("!")        # True

# String formatting
$name = "John"
$age = 30
"Name: {0}, Age: {1}" -f $name, $age
"Name: $name, Age: $age"

# Join strings
$arr = @("a", "b", "c")
$arr -join ", "           # "a, b, c"`}
          </pre>
        </div>
      </>
    ),
  },
  "ps_arrays": {
    title: "PowerShell Arrays",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Arrays in PowerShell
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Create arrays
$arr = @(1, 2, 3, 4, 5)
$arr = 1, 2, 3, 4, 5
$empty = @()
$range = 1..10

# Access elements
$arr[0]                    # First element
$arr[-1]                   # Last element
$arr[0..2]                 # Slice (first 3)
$arr[2..$arr.Length]       # From index 2 to end

# Array properties
$arr.Length                # Count of elements
$arr.Count                 # Same as Length

# Add elements (creates new array)
$arr += 6
$arr = $arr + @(7, 8)

# Array operations
$arr -contains 3           # True
$arr | Where-Object { $_ -gt 3 }
$arr | ForEach-Object { $_ * 2 }
$arr | Sort-Object
$arr | Measure-Object -Sum

# Strongly typed array
[int[]]$numbers = @(1, 2, 3)
[string[]]$names = @("John", "Jane")`}
          </pre>
        </div>
      </>
    ),
  },
  "ps_hashtables": {
    title: "Hash Tables",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Hash Tables in PowerShell
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Create hash table
$person = @{
    Name = "John"
    Age = 30
    City = "New York"
}

# Access values
$person["Name"]           # John
$person.Name              # John
$person.Age               # 30

# Add/modify
$person["Email"] = "john@example.com"
$person.Phone = "555-1234"

# Remove key
$person.Remove("Phone")

# Check key exists
$person.ContainsKey("Name")    # True
$person.ContainsValue("John")  # True

# Get keys and values
$person.Keys
$person.Values

# Iterate
foreach ($key in $person.Keys) {
    Write-Host "$key : $($person[$key])"
}

# Ordered hash table
$ordered = [ordered]@{
    First = 1
    Second = 2
    Third = 3
}`}
          </pre>
        </div>
      </>
    ),
  },
  "ps_operators": {
    title: "Arithmetic Operators",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Arithmetic Operators
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Basic arithmetic
$a = 10
$b = 3

$a + $b    # Addition: 13
$a - $b    # Subtraction: 7
$a * $b    # Multiplication: 30
$a / $b    # Division: 3.333...
$a % $b    # Modulus: 1

# Assignment operators
$x = 10
$x += 5    # $x = $x + 5 (15)
$x -= 3    # $x = $x - 3 (12)
$x *= 2    # $x = $x * 2 (24)
$x /= 4    # $x = $x / 4 (6)
$x %= 4    # $x = $x % 4 (2)

# Increment/Decrement
$i = 0
$i++       # Post-increment
++$i       # Pre-increment
$i--       # Post-decrement
--$i       # Pre-decrement

# Math class
[Math]::Pow(2, 3)      # 8
[Math]::Sqrt(16)       # 4
[Math]::Round(3.7)     # 4
[Math]::Floor(3.7)     # 3
[Math]::Ceiling(3.2)   # 4`}
          </pre>
        </div>
      </>
    ),
  },
  "ps_comparison": {
    title: "Comparison Operators",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Comparison Operators
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Equality operators
5 -eq 5         # Equal: True
5 -ne 3         # Not equal: True
5 -gt 3         # Greater than: True
5 -ge 5         # Greater or equal: True
5 -lt 10        # Less than: True
5 -le 5         # Less or equal: True

# String comparison (case-insensitive by default)
"hello" -eq "HELLO"     # True
"hello" -ceq "HELLO"    # False (case-sensitive)
"hello" -ieq "HELLO"    # True (explicitly case-insensitive)

# Pattern matching
"Hello" -like "H*"      # True (wildcard)
"Hello" -notlike "H*"   # False
"Hello" -match "^H"     # True (regex)
"Hello" -notmatch "^H"  # False

# Contains operators
@(1,2,3) -contains 2    # True
2 -in @(1,2,3)          # True
@(1,2,3) -notcontains 4 # True

# Type operators
"Hello" -is [string]    # True
"Hello" -isnot [int]    # True`}
          </pre>
        </div>
      </>
    ),
  },
  "ps_logical": {
    title: "Logical Operators",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Logical Operators
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Logical operators
$true -and $true     # True
$true -and $false    # False
$true -or $false     # True
$false -or $false    # False
-not $false          # True
!$false              # True (alias for -not)

# Practical examples
$age = 25
$hasLicense = $true

if ($age -ge 18 -and $hasLicense) {
    Write-Host "Can drive"
}

$isWeekend = $false
$isHoliday = $true

if ($isWeekend -or $isHoliday) {
    Write-Host "Day off!"
}

# Combining conditions
$score = 85
if ($score -ge 90) {
    Write-Host "A"
} elseif ($score -ge 80 -and $score -lt 90) {
    Write-Host "B"
} else {
    Write-Host "Below B"
}`}
          </pre>
        </div>
      </>
    ),
  },
  "ps_pipelines": {
    title: "Pipeline Basics",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          The PowerShell Pipeline
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Basic pipeline
Get-Process | Sort-Object CPU -Descending

# Chain multiple cmdlets
Get-Process |
    Where-Object { $_.CPU -gt 10 } |
    Sort-Object CPU -Descending |
    Select-Object -First 5

# Pipeline to file
Get-Process | Out-File processes.txt
Get-Process | Export-Csv processes.csv

# Pipeline with ForEach-Object
1..10 | ForEach-Object { $_ * 2 }

# Using $_  (current pipeline object)
Get-Service | Where-Object { $_.Status -eq "Running" }

# Selecting properties
Get-Process | Select-Object Name, CPU, Memory`}
          </pre>
        </div>
      </>
    ),
  },
  "ps_pipeline_objects": {
    title: "Pipeline Objects",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Working with Pipeline Objects
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# PowerShell passes objects, not text
$processes = Get-Process

# Access object properties
$processes[0].Name
$processes[0].CPU
$processes[0].Id

# Discover object members
Get-Process | Get-Member
Get-Process | Get-Member -MemberType Property

# Select specific properties
Get-Process | Select-Object Name, Id, CPU

# Create calculated properties
Get-Process | Select-Object Name, @{
    Name = "MemoryMB"
    Expression = { [math]::Round($_.WorkingSet / 1MB, 2) }
}

# Expand nested properties
Get-Process | Select-Object -ExpandProperty Modules

# Group objects
Get-Service | Group-Object Status

# Measure objects
Get-Process | Measure-Object CPU -Sum -Average -Maximum`}
          </pre>
        </div>
      </>
    ),
  },
  "ps_filtering": {
    title: "Filtering Data",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Filtering in PowerShell
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Where-Object filtering
Get-Process | Where-Object { $_.CPU -gt 10 }
Get-Process | Where-Object CPU -gt 10  # Simplified syntax
Get-Process | ? { $_.Name -like "*chrome*" }

# Multiple conditions
Get-Service | Where-Object {
    $_.Status -eq "Running" -and
    $_.StartType -eq "Automatic"
}

# Select-Object
Get-Process | Select-Object -First 5
Get-Process | Select-Object -Last 5
Get-Process | Select-Object -Skip 10 -First 5
Get-Process | Select-Object Name, CPU -Unique

# Sort-Object
Get-Process | Sort-Object CPU -Descending
Get-Process | Sort-Object CPU, Memory
Get-Process | Sort-Object { $_.CPU + $_.Memory }

# Format output
Get-Process | Format-Table Name, CPU, Memory -AutoSize
Get-Process | Format-List *
Get-Process | Format-Wide Name -Column 4`}
          </pre>
        </div>
      </>
    ),
  },
  "ps_conditionals": {
    title: "If Statement",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          If Statement
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Basic if
$age = 20
if ($age -ge 18) {
    Write-Host "Adult"
}

# If-else
if ($age -ge 18) {
    Write-Host "Adult"
} else {
    Write-Host "Minor"
}

# If-elseif-else
$score = 85
if ($score -ge 90) {
    Write-Host "Grade: A"
} elseif ($score -ge 80) {
    Write-Host "Grade: B"
} elseif ($score -ge 70) {
    Write-Host "Grade: C"
} else {
    Write-Host "Grade: F"
}

# Ternary-like expression (PowerShell 7+)
$result = $age -ge 18 ? "Adult" : "Minor"

# Null coalescing (PowerShell 7+)
$value = $null
$result = $value ?? "Default"`}
          </pre>
        </div>
      </>
    ),
  },
  "ps_switch": {
    title: "Switch Statement",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Switch Statement
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Basic switch
$day = "Monday"
switch ($day) {
    "Monday"    { Write-Host "Start of week" }
    "Friday"    { Write-Host "End of week" }
    "Saturday"  { Write-Host "Weekend!" }
    "Sunday"    { Write-Host "Weekend!" }
    default     { Write-Host "Regular day" }
}

# Switch with wildcard
switch -Wildcard ($filename) {
    "*.txt"  { Write-Host "Text file" }
    "*.ps1"  { Write-Host "PowerShell script" }
    "*.exe"  { Write-Host "Executable" }
    default  { Write-Host "Unknown type" }
}

# Switch with regex
switch -Regex ($email) {
    "^admin@"     { Write-Host "Admin email" }
    "@gmail\\.com$" { Write-Host "Gmail address" }
    default       { Write-Host "Other email" }
}

# Switch with multiple matches
$value = 5
switch ($value) {
    {$_ -gt 0}  { Write-Host "Positive" }
    {$_ -lt 10} { Write-Host "Less than 10" }
    5           { Write-Host "Exactly 5" }
}`}
          </pre>
        </div>
      </>
    ),
  },
  "ps_loops": {
    title: "For Loop",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          For Loop
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Basic for loop
for ($i = 0; $i -lt 5; $i++) {
    Write-Host "Iteration: $i"
}

# Counting down
for ($i = 10; $i -gt 0; $i--) {
    Write-Host $i
}

# Step by 2
for ($i = 0; $i -le 10; $i += 2) {
    Write-Host "Even: $i"
}

# Loop through array by index
$fruits = @("Apple", "Banana", "Cherry")
for ($i = 0; $i -lt $fruits.Length; $i++) {
    Write-Host "Index $i : $($fruits[$i])"
}

# Nested for loops
for ($i = 1; $i -le 3; $i++) {
    for ($j = 1; $j -le 3; $j++) {
        Write-Host "i=$i, j=$j"
    }
}`}
          </pre>
        </div>
      </>
    ),
  },
  "ps_foreach": {
    title: "ForEach Loop",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          ForEach Loop
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# foreach statement
$fruits = @("Apple", "Banana", "Cherry")
foreach ($fruit in $fruits) {
    Write-Host "Fruit: $fruit"
}

# ForEach-Object cmdlet (in pipeline)
$fruits | ForEach-Object { Write-Host "Fruit: $_" }
$fruits | % { Write-Host "Fruit: $_" }  # Alias

# With index
$i = 0
foreach ($fruit in $fruits) {
    Write-Host "Index $i : $fruit"
    $i++
}

# Process files
Get-ChildItem *.txt | ForEach-Object {
    Write-Host "Processing: $($_.Name)"
    # Process file here
}

# Parallel processing (PowerShell 7+)
1..10 | ForEach-Object -Parallel {
    Write-Host "Processing $_"
    Start-Sleep -Seconds 1
} -ThrottleLimit 5`}
          </pre>
        </div>
      </>
    ),
  },
  "ps_while": {
    title: "While Loop",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          While Loop
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Basic while loop
$count = 0
while ($count -lt 5) {
    Write-Host "Count: $count"
    $count++
}

# Wait for condition
while (-not (Test-Path "C:\\ready.txt")) {
    Write-Host "Waiting for file..."
    Start-Sleep -Seconds 5
}

# Infinite loop with break
while ($true) {
    $input = Read-Host "Enter 'quit' to exit"
    if ($input -eq "quit") {
        break
    }
    Write-Host "You entered: $input"
}

# While with multiple conditions
$attempts = 0
$maxAttempts = 3
$success = $false

while ($attempts -lt $maxAttempts -and -not $success) {
    $attempts++
    Write-Host "Attempt $attempts"
    # Try something...
}`}
          </pre>
        </div>
      </>
    ),
  },
  "ps_do_while": {
    title: "Do-While/Until Loops",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Do-While and Do-Until Loops
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Do-While: executes at least once, continues while true
$count = 0
do {
    Write-Host "Count: $count"
    $count++
} while ($count -lt 5)

# Do-Until: executes at least once, continues until true
$count = 0
do {
    Write-Host "Count: $count"
    $count++
} until ($count -ge 5)

# Menu example
do {
    Write-Host "\`n=== Menu ==="
    Write-Host "1. Option One"
    Write-Host "2. Option Two"
    Write-Host "3. Exit"
    $choice = Read-Host "Select option"

    switch ($choice) {
        "1" { Write-Host "Running Option One" }
        "2" { Write-Host "Running Option Two" }
        "3" { Write-Host "Goodbye!" }
        default { Write-Host "Invalid choice" }
    }
} until ($choice -eq "3")`}
          </pre>
        </div>
      </>
    ),
  },
  "ps_functions": {
    title: "PowerShell Functions",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Functions in PowerShell
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Basic function
function Say-Hello {
    Write-Host "Hello, World!"
}
Say-Hello

# Function with parameters
function Greet-User {
    param($Name)
    Write-Host "Hello, $Name!"
}
Greet-User -Name "John"

# Function with return value
function Add-Numbers {
    param($a, $b)
    return $a + $b
}
$result = Add-Numbers -a 5 -b 3

# Function with default values
function Greet {
    param(
        $Name = "Guest",
        $Greeting = "Hello"
    )
    Write-Host "$Greeting, $Name!"
}
Greet
Greet -Name "John" -Greeting "Hi"`}
          </pre>
        </div>
      </>
    ),
  },
  "ps_parameters": {
    title: "Function Parameters",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Function Parameters
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Typed parameters
function Add-Numbers {
    param(
        [int]$First,
        [int]$Second
    )
    return $First + $Second
}

# Mandatory parameters
function Get-UserInfo {
    param(
        [Parameter(Mandatory=$true)]
        [string]$Username
    )
    Write-Host "User: $Username"
}

# Parameter validation
function Set-Age {
    param(
        [ValidateRange(0, 150)]
        [int]$Age
    )
    Write-Host "Age set to $Age"
}

# Parameter sets
function Get-Data {
    param(
        [Parameter(ParameterSetName="ByName")]
        [string]$Name,

        [Parameter(ParameterSetName="ById")]
        [int]$Id
    )
    if ($Name) { Write-Host "By name: $Name" }
    if ($Id) { Write-Host "By ID: $Id" }
}`}
          </pre>
        </div>
      </>
    ),
  },
  "ps_advanced_functions": {
    title: "Advanced Functions",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Advanced Functions
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`function Get-SystemInfo {
    [CmdletBinding()]
    param(
        [Parameter(Mandatory=$true, ValueFromPipeline=$true)]
        [string[]]$ComputerName,

        [Parameter()]
        [switch]$Detailed
    )

    begin {
        Write-Verbose "Starting system info collection"
    }

    process {
        foreach ($computer in $ComputerName) {
            Write-Verbose "Processing $computer"

            $info = [PSCustomObject]@{
                ComputerName = $computer
                Date = Get-Date
            }

            if ($Detailed) {
                $info | Add-Member -NotePropertyName "OS" -NotePropertyValue "Windows"
            }

            Write-Output $info
        }
    }

    end {
        Write-Verbose "Finished collection"
    }
}

# Usage
Get-SystemInfo -ComputerName "PC1", "PC2" -Verbose
"PC1", "PC2" | Get-SystemInfo -Detailed`}
          </pre>
        </div>
      </>
    ),
  },
  "ps_modules": {
    title: "PowerShell Modules",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Working with Modules
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# List available modules
Get-Module -ListAvailable

# List loaded modules
Get-Module

# Import module
Import-Module ActiveDirectory
Import-Module -Name "C:\\MyModule\\MyModule.psm1"

# Find modules in gallery
Find-Module -Name "*Azure*"

# Install module from gallery
Install-Module -Name Az -Scope CurrentUser

# Update module
Update-Module -Name Az

# Remove module
Remove-Module ActiveDirectory

# Get commands from module
Get-Command -Module ActiveDirectory

# Module paths
$env:PSModulePath -split ";"

# Auto-load module (if in module path)
# Just use any command from the module`}
          </pre>
        </div>
      </>
    ),
  },
  "ps_create_modules": {
    title: "Creating Modules",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Creating PowerShell Modules
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# MyModule.psm1
function Get-Greeting {
    param([string]$Name = "World")
    return "Hello, $Name!"
}

function Get-Farewell {
    param([string]$Name = "World")
    return "Goodbye, $Name!"
}

Export-ModuleMember -Function Get-Greeting, Get-Farewell

# MyModule.psd1 (Module Manifest)
@{
    ModuleVersion = '1.0.0'
    GUID = 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'
    Author = 'Your Name'
    Description = 'My custom module'
    RootModule = 'MyModule.psm1'
    FunctionsToExport = @('Get-Greeting', 'Get-Farewell')
}

# Create manifest
New-ModuleManifest -Path "MyModule.psd1" \`
    -RootModule "MyModule.psm1" \`
    -ModuleVersion "1.0.0" \`
    -Author "Your Name"`}
          </pre>
        </div>
      </>
    ),
  },
  "ps_filesystem": {
    title: "File System Operations",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          File System Operations
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Navigation
Get-Location                  # Current directory
Set-Location C:\\Users         # Change directory
Push-Location C:\\Temp         # Save and change
Pop-Location                  # Return to saved

# List items
Get-ChildItem                 # List current dir
Get-ChildItem -Path C:\\       # List specific path
Get-ChildItem -Recurse        # Recursive
Get-ChildItem -Filter *.txt   # Filter by extension
Get-ChildItem -Hidden         # Include hidden

# Test paths
Test-Path "C:\\file.txt"
Test-Path "C:\\folder" -PathType Container
Test-Path "C:\\file.txt" -PathType Leaf

# Path manipulation
Split-Path "C:\\folder\\file.txt" -Parent    # C:\\folder
Split-Path "C:\\folder\\file.txt" -Leaf      # file.txt
Join-Path "C:\\folder" "file.txt"            # C:\\folder\\file.txt
Resolve-Path ".\\relative"                   # Full path`}
          </pre>
        </div>
      </>
    ),
  },
  "ps_files": {
    title: "Working with Files",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Working with Files
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Create file
New-Item -Path "file.txt" -ItemType File
New-Item -Path "file.txt" -Value "Content"

# Read file
Get-Content file.txt
Get-Content file.txt -First 10      # First 10 lines
Get-Content file.txt -Tail 10       # Last 10 lines
Get-Content file.txt -Raw           # As single string

# Write file
Set-Content -Path "file.txt" -Value "New content"
Add-Content -Path "file.txt" -Value "Appended"
"Content" | Out-File file.txt
"More" | Out-File file.txt -Append

# Copy file
Copy-Item "source.txt" "dest.txt"
Copy-Item "source.txt" "C:\\backup\\" -Force

# Move/Rename file
Move-Item "old.txt" "new.txt"
Rename-Item "file.txt" "renamed.txt"

# Delete file
Remove-Item "file.txt"
Remove-Item "*.tmp" -Force`}
          </pre>
        </div>
      </>
    ),
  },
  "ps_folders": {
    title: "Working with Folders",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Working with Folders
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Create folder
New-Item -Path "NewFolder" -ItemType Directory
mkdir "AnotherFolder"

# Create nested folders
New-Item -Path "Parent\\Child\\GrandChild" -ItemType Directory -Force

# Copy folder
Copy-Item "Source" "Destination" -Recurse

# Move folder
Move-Item "OldFolder" "NewLocation"

# Delete folder
Remove-Item "Folder" -Recurse -Force

# Get folder size
(Get-ChildItem "Folder" -Recurse | Measure-Object -Property Length -Sum).Sum / 1MB

# Find large files
Get-ChildItem -Recurse |
    Where-Object { $_.Length -gt 100MB } |
    Sort-Object Length -Descending

# Find old files
Get-ChildItem -Recurse |
    Where-Object { $_.LastWriteTime -lt (Get-Date).AddDays(-30) }`}
          </pre>
        </div>
      </>
    ),
  },
  "ps_registry": {
    title: "Registry Operations",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Working with the Registry
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Registry drives
Get-PSDrive -PSProvider Registry
# HKLM: = HKEY_LOCAL_MACHINE
# HKCU: = HKEY_CURRENT_USER

# Navigate registry
Set-Location HKCU:\\Software
Get-ChildItem HKLM:\\SOFTWARE\\Microsoft

# Read registry value
Get-ItemProperty -Path "HKCU:\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer"
(Get-ItemProperty -Path "HKLM:\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion").ProductName

# Create registry key
New-Item -Path "HKCU:\\Software\\MyApp"

# Set registry value
Set-ItemProperty -Path "HKCU:\\Software\\MyApp" -Name "Setting1" -Value "Value1"
New-ItemProperty -Path "HKCU:\\Software\\MyApp" -Name "Setting2" -Value 42 -PropertyType DWord

# Delete registry key/value
Remove-ItemProperty -Path "HKCU:\\Software\\MyApp" -Name "Setting1"
Remove-Item -Path "HKCU:\\Software\\MyApp" -Recurse`}
          </pre>
        </div>
      </>
    ),
  },
  "ps_remote": {
    title: "PowerShell Remoting",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          PowerShell Remoting
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Enable remoting (run as admin)
Enable-PSRemoting -Force

# Test connection
Test-WSMan -ComputerName Server01

# Enter interactive session
Enter-PSSession -ComputerName Server01
# Run commands interactively...
Exit-PSSession

# Run single command remotely
Invoke-Command -ComputerName Server01 -ScriptBlock {
    Get-Process
}

# Run on multiple computers
Invoke-Command -ComputerName Server01, Server02 -ScriptBlock {
    Get-Service
}

# With credentials
$cred = Get-Credential
Invoke-Command -ComputerName Server01 -Credential $cred -ScriptBlock {
    Get-EventLog -LogName System -Newest 10
}`}
          </pre>
        </div>
      </>
    ),
  },
  "ps_invoke_command": {
    title: "Invoke-Command",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Invoke-Command in Depth
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Basic remote execution
Invoke-Command -ComputerName Server01 -ScriptBlock {
    Get-Process | Where-Object CPU -gt 10
}

# Pass arguments
$serviceName = "Spooler"
Invoke-Command -ComputerName Server01 -ScriptBlock {
    param($name)
    Get-Service -Name $name
} -ArgumentList $serviceName

# Using $using: scope modifier
Invoke-Command -ComputerName Server01 -ScriptBlock {
    Get-Service -Name $using:serviceName
}

# Run local script remotely
Invoke-Command -ComputerName Server01 -FilePath "C:\\Scripts\\MyScript.ps1"

# Parallel execution
$computers = "Server01", "Server02", "Server03"
Invoke-Command -ComputerName $computers -ScriptBlock {
    Get-ComputerInfo | Select-Object CsName, OsName
} -ThrottleLimit 10`}
          </pre>
        </div>
      </>
    ),
  },
  "ps_sessions": {
    title: "PowerShell Sessions",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          PowerShell Sessions
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Create persistent session
$session = New-PSSession -ComputerName Server01

# Use session
Invoke-Command -Session $session -ScriptBlock {
    $script:data = Get-Process
}

# Variables persist in session
Invoke-Command -Session $session -ScriptBlock {
    $script:data | Where-Object CPU -gt 10
}

# Multiple sessions
$sessions = New-PSSession -ComputerName Server01, Server02

Invoke-Command -Session $sessions -ScriptBlock {
    Get-Service
}

# Copy files via session
Copy-Item -Path "C:\\local\\file.txt" -Destination "C:\\remote\\" -ToSession $session
Copy-Item -Path "C:\\remote\\file.txt" -Destination "C:\\local\\" -FromSession $session

# Close sessions
Remove-PSSession $session
Get-PSSession | Remove-PSSession`}
          </pre>
        </div>
      </>
    ),
  },
  "ps_active_directory": {
    title: "Active Directory",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Active Directory Management
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Import AD module
Import-Module ActiveDirectory

# Get users
Get-ADUser -Filter *
Get-ADUser -Identity "jdoe"
Get-ADUser -Filter {Department -eq "IT"}
Get-ADUser -Filter * -Properties *

# Create user
New-ADUser -Name "John Doe" -SamAccountName "jdoe" \`
    -UserPrincipalName "jdoe@domain.com" \`
    -Path "OU=Users,DC=domain,DC=com" \`
    -AccountPassword (ConvertTo-SecureString "P@ssw0rd" -AsPlainText -Force) \`
    -Enabled $true

# Modify user
Set-ADUser -Identity "jdoe" -Department "IT" -Title "Developer"

# Get groups
Get-ADGroup -Filter *
Get-ADGroupMember -Identity "Domain Admins"

# Add to group
Add-ADGroupMember -Identity "IT-Staff" -Members "jdoe"

# Get computers
Get-ADComputer -Filter *
Get-ADComputer -Filter {OperatingSystem -like "*Server*"}`}
          </pre>
        </div>
      </>
    ),
  },
  "ps_error_handling": {
    title: "Try-Catch-Finally",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Error Handling with Try-Catch-Finally
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Basic try-catch
try {
    $result = 1 / 0
}
catch {
    Write-Host "Error: $_"
}

# Try-catch-finally
try {
    $file = Get-Content "nonexistent.txt" -ErrorAction Stop
}
catch {
    Write-Host "File not found: $($_.Exception.Message)"
}
finally {
    Write-Host "Cleanup code runs always"
}

# Catch specific exceptions
try {
    $connection = New-Object System.Net.Sockets.TcpClient("badhost", 80)
}
catch [System.Net.Sockets.SocketException] {
    Write-Host "Network error"
}
catch [System.Exception] {
    Write-Host "General error: $_"
}

# Re-throw error
try {
    # Some code
}
catch {
    Write-Host "Logging error..."
    throw  # Re-throw original error
}`}
          </pre>
        </div>
      </>
    ),
  },
  "ps_error_types": {
    title: "Error Types",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Error Types and Handling
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Terminating vs Non-Terminating Errors

# Non-terminating (default) - continues execution
Get-ChildItem "C:\\nonexistent", "C:\\Windows"

# Make non-terminating become terminating
Get-ChildItem "C:\\nonexistent" -ErrorAction Stop

# ErrorAction values
# Continue - Display error, continue (default)
# Stop - Terminate
# SilentlyContinue - Suppress error, continue
# Ignore - Suppress completely

# Set default action
$ErrorActionPreference = "Stop"

# Access error details
try {
    Get-Content "missing.txt" -ErrorAction Stop
}
catch {
    Write-Host "Message: $($_.Exception.Message)"
    Write-Host "Type: $($_.Exception.GetType().Name)"
    Write-Host "Line: $($_.InvocationInfo.ScriptLineNumber)"
}

# Error variable
Get-Content "missing.txt" -ErrorVariable myError -ErrorAction SilentlyContinue
if ($myError) {
    Write-Host "Error occurred: $myError"
}`}
          </pre>
        </div>
      </>
    ),
  },
};
