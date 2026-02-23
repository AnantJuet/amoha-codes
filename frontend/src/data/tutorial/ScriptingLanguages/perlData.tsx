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
  { label: "Perl HOME", href: "perl_home" },
  { label: "Perl Intro", href: "perl_intro" },
  { label: "Perl Setup", href: "perl_setup" },
  {
    label: "Scalars",
    href: "perl_scalars",
    isHeader: true,
    children: [
      { label: "Scalar Variables", href: "perl_scalars" },
      { label: "Numbers", href: "perl_numbers" },
      { label: "Strings", href: "perl_strings" },
    ]
  },
  {
    label: "Arrays",
    href: "perl_arrays",
    isHeader: true,
    children: [
      { label: "Array Basics", href: "perl_arrays" },
      { label: "Array Operations", href: "perl_array_ops" },
      { label: "Array Functions", href: "perl_array_functions" },
    ]
  },
  {
    label: "Hashes",
    href: "perl_hashes",
    isHeader: true,
    children: [
      { label: "Hash Basics", href: "perl_hashes" },
      { label: "Hash Operations", href: "perl_hash_ops" },
      { label: "Hash Functions", href: "perl_hash_functions" },
    ]
  },
  {
    label: "Operators",
    href: "perl_operators",
    isHeader: true,
    children: [
      { label: "Arithmetic", href: "perl_operators" },
      { label: "Comparison", href: "perl_comparison" },
      { label: "Logical", href: "perl_logical" },
      { label: "String Operators", href: "perl_string_ops" },
    ]
  },
  {
    label: "Control Structures",
    href: "perl_control",
    isHeader: true,
    children: [
      { label: "If-Else", href: "perl_control" },
      { label: "Unless", href: "perl_unless" },
      { label: "Given-When", href: "perl_given_when" },
      { label: "Loops", href: "perl_loops" },
      { label: "Loop Control", href: "perl_loop_control" },
    ]
  },
  {
    label: "Subroutines",
    href: "perl_subroutines",
    isHeader: true,
    children: [
      { label: "Subroutine Basics", href: "perl_subroutines" },
      { label: "Arguments", href: "perl_sub_args" },
      { label: "Return Values", href: "perl_sub_return" },
    ]
  },
  {
    label: "Packages",
    href: "perl_packages",
    isHeader: true,
    children: [
      { label: "Package Basics", href: "perl_packages" },
      { label: "Namespaces", href: "perl_namespaces" },
    ]
  },
  {
    label: "Regular Expressions",
    href: "perl_regex",
    isHeader: true,
    children: [
      { label: "Regex Basics", href: "perl_regex" },
      { label: "Pattern Matching", href: "perl_pattern" },
      { label: "Substitution", href: "perl_substitution" },
      { label: "Modifiers", href: "perl_modifiers" },
    ]
  },
  {
    label: "File I/O",
    href: "perl_file_io",
    isHeader: true,
    children: [
      { label: "File Handling", href: "perl_file_io" },
      { label: "Reading Files", href: "perl_read_files" },
      { label: "Writing Files", href: "perl_write_files" },
    ]
  },
  {
    label: "Directory Operations",
    href: "perl_directories",
    isHeader: true,
    children: [
      { label: "Directory Handling", href: "perl_directories" },
      { label: "File Tests", href: "perl_file_tests" },
    ]
  },
  {
    label: "Modules",
    href: "perl_modules",
    isHeader: true,
    children: [
      { label: "Using Modules", href: "perl_modules" },
      { label: "Creating Modules", href: "perl_create_modules" },
    ]
  },
  { label: "CPAN", href: "perl_cpan" },
  {
    label: "Object-Oriented Perl",
    href: "perl_oop",
    isHeader: true,
    children: [
      { label: "OOP Basics", href: "perl_oop" },
      { label: "Classes", href: "perl_classes" },
      { label: "Inheritance", href: "perl_inheritance" },
    ]
  },
];

export const tutorialContent: Record<string, TopicContent> = {
  "perl_home": {
    title: "Perl Tutorial",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Perl Tutorial
        </h2>
        <p className="leading-relaxed mb-4">
          <strong>Perl</strong> is a highly capable, feature-rich programming language with over 30 years of development. It excels at text processing and is widely used for system administration, web development, and network programming.
        </p>
        <h3 className="text-xl font-medium mb-3">Example: Hello World</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`#!/usr/bin/perl
use strict;
use warnings;

print "Hello, World!\\n";`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">What You Will Learn</h3>
        <ul className="list-disc ml-6 mb-4 leading-relaxed">
          <li>Scalars, arrays, and hashes</li>
          <li>Regular expressions (Perl's superpower)</li>
          <li>Subroutines and packages</li>
          <li>File and directory operations</li>
          <li>Modules and CPAN</li>
          <li>Object-oriented programming</li>
        </ul>
      </>
    ),
  },
  "perl_intro": {
    title: "Introduction to Perl",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          What is Perl?
        </h2>
        <p className="leading-relaxed mb-4">
          Perl (Practical Extraction and Reporting Language) was created by Larry Wall in 1987. It combines features from C, shell scripting, and awk.
        </p>
        <h3 className="text-xl font-medium mb-3">Key Features</h3>
        <ul className="list-disc ml-6 mb-4 leading-relaxed">
          <li><strong>Text Processing:</strong> Powerful regular expressions built-in</li>
          <li><strong>CPAN:</strong> Comprehensive Perl Archive Network with thousands of modules</li>
          <li><strong>Cross-Platform:</strong> Runs on virtually any operating system</li>
          <li><strong>Flexible:</strong> "There's more than one way to do it" (TIMTOWTDI)</li>
          <li><strong>Mature:</strong> Well-tested with extensive documentation</li>
        </ul>
        <h3 className="text-xl font-medium mb-3">Common Uses</h3>
        <ul className="list-disc ml-6 mb-4 leading-relaxed">
          <li>System administration scripts</li>
          <li>Web development (CGI, frameworks like Catalyst, Dancer)</li>
          <li>Network programming</li>
          <li>Bioinformatics</li>
          <li>Log parsing and text manipulation</li>
        </ul>
      </>
    ),
  },
  "perl_setup": {
    title: "Perl Setup",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Installing Perl
        </h2>
        <h3 className="text-xl font-medium mb-3">Linux/macOS</h3>
        <p className="leading-relaxed mb-4">Perl is usually pre-installed. Check version:</p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`perl -v`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">Windows</h3>
        <p className="leading-relaxed mb-4">Install Strawberry Perl or ActivePerl:</p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Download from https://strawberryperl.com/`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">Running Perl Scripts</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Create hello.pl
#!/usr/bin/perl
use strict;
use warnings;

print "Hello, World!\\n";

# Run it
perl hello.pl

# Or make executable (Unix)
chmod +x hello.pl
./hello.pl`}
          </pre>
        </div>
      </>
    ),
  },
  "perl_scalars": {
    title: "Perl Scalars",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Scalar Variables
        </h2>
        <p className="leading-relaxed mb-4">
          Scalars hold single values (numbers, strings, references). They are prefixed with <code>$</code>.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`#!/usr/bin/perl
use strict;
use warnings;

# Scalar declaration
my $name = "John";
my $age = 30;
my $price = 19.99;
my $is_active = 1;  # Boolean (true)

# Print scalars
print "Name: $name\\n";
print "Age: $age\\n";
print "Price: $price\\n";

# Undefined value
my $undefined;
print defined($undefined) ? "Defined" : "Undefined";

# String interpolation
print "Hello, $name! You are $age years old.\\n";

# No interpolation with single quotes
print 'Hello, $name!\\n';  # Prints literally`}
          </pre>
        </div>
      </>
    ),
  },
  "perl_numbers": {
    title: "Perl Numbers",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Working with Numbers
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`#!/usr/bin/perl
use strict;
use warnings;

# Integer
my $int = 42;

# Float
my $float = 3.14159;

# Scientific notation
my $sci = 6.022e23;

# Hexadecimal
my $hex = 0xFF;    # 255

# Octal
my $oct = 0755;    # 493

# Binary
my $bin = 0b1010;  # 10

# Arithmetic
my $a = 10;
my $b = 3;

print "Add: " . ($a + $b) . "\\n";      # 13
print "Subtract: " . ($a - $b) . "\\n"; # 7
print "Multiply: " . ($a * $b) . "\\n"; # 30
print "Divide: " . ($a / $b) . "\\n";   # 3.333...
print "Modulo: " . ($a % $b) . "\\n";   # 1
print "Power: " . ($a ** 2) . "\\n";    # 100

# Increment/Decrement
$a++;  # 11
$b--;  # 2`}
          </pre>
        </div>
      </>
    ),
  },
  "perl_strings": {
    title: "Perl Strings",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Working with Strings
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`#!/usr/bin/perl
use strict;
use warnings;

# String types
my $double = "Hello\\nWorld";  # Interpolated
my $single = 'Hello\\nWorld';  # Literal

# Concatenation
my $first = "Hello";
my $second = "World";
my $combined = $first . ", " . $second . "!";
print "$combined\\n";  # Hello, World!

# Repetition
my $repeat = "Ha" x 3;  # HaHaHa

# String length
my $str = "Hello";
print "Length: " . length($str) . "\\n";  # 5

# Substring
my $text = "Hello, World!";
print substr($text, 0, 5) . "\\n";   # Hello
print substr($text, 7) . "\\n";       # World!
print substr($text, -6, 5) . "\\n";  # World

# Index
print index($text, "World") . "\\n";  # 7

# Case conversion
print uc($text) . "\\n";     # HELLO, WORLD!
print lc($text) . "\\n";     # hello, world!
print ucfirst($text) . "\\n"; # Hello, World!`}
          </pre>
        </div>
      </>
    ),
  },
  "perl_arrays": {
    title: "Perl Arrays",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Arrays in Perl
        </h2>
        <p className="leading-relaxed mb-4">
          Arrays are ordered lists of scalars. They are prefixed with <code>@</code>.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`#!/usr/bin/perl
use strict;
use warnings;

# Array declaration
my @fruits = ("apple", "banana", "cherry");
my @numbers = (1, 2, 3, 4, 5);
my @mixed = ("string", 42, 3.14);

# qw() - quote words
my @colors = qw(red green blue);

# Access elements (use $ for scalar)
print $fruits[0] . "\\n";   # apple
print $fruits[-1] . "\\n";  # cherry (last element)

# Array length
print "Length: " . scalar(@fruits) . "\\n";  # 3
print "Last index: $#fruits\\n";              # 2

# Modify elements
$fruits[1] = "blueberry";

# Add elements
push(@fruits, "orange");      # Add to end
unshift(@fruits, "apricot");  # Add to beginning

# Remove elements
my $last = pop(@fruits);      # Remove from end
my $first = shift(@fruits);   # Remove from beginning

# Print entire array
print "@fruits\\n";  # apple blueberry cherry`}
          </pre>
        </div>
      </>
    ),
  },
  "perl_array_ops": {
    title: "Array Operations",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Array Operations
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`#!/usr/bin/perl
use strict;
use warnings;

my @arr = (1, 2, 3, 4, 5);

# Slice
my @slice = @arr[1..3];  # (2, 3, 4)

# Splice - remove/replace
my @removed = splice(@arr, 1, 2);  # Remove 2 elements at index 1
# @arr is now (1, 4, 5)

# Splice - insert
splice(@arr, 1, 0, "a", "b");  # Insert at index 1
# @arr is now (1, "a", "b", 4, 5)

# Reverse
my @reversed = reverse(@arr);

# Sort
my @words = qw(banana apple cherry);
my @sorted = sort @words;  # Alphabetical

my @nums = (10, 2, 33, 4);
my @sorted_nums = sort { $a <=> $b } @nums;  # Numeric

# Join array to string
my @parts = qw(one two three);
my $joined = join(", ", @parts);  # "one, two, three"

# Split string to array
my $str = "a,b,c,d";
my @split = split(/,/, $str);  # ("a", "b", "c", "d")`}
          </pre>
        </div>
      </>
    ),
  },
  "perl_array_functions": {
    title: "Array Functions",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Array Functions
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`#!/usr/bin/perl
use strict;
use warnings;

my @numbers = (1, 2, 3, 4, 5);

# grep - filter elements
my @even = grep { $_ % 2 == 0 } @numbers;  # (2, 4)

# map - transform elements
my @doubled = map { $_ * 2 } @numbers;  # (2, 4, 6, 8, 10)

# Check if element exists
my $found = grep { $_ == 3 } @numbers;  # Returns count

# Iterate with foreach
foreach my $num (@numbers) {
    print "$num ";
}
print "\\n";

# Iterate with for and index
for my $i (0 .. $#numbers) {
    print "Index $i: $numbers[$i]\\n";
}

# Get unique elements
my @duplicates = (1, 2, 2, 3, 3, 3);
my %seen;
my @unique = grep { !$seen{$_}++ } @duplicates;  # (1, 2, 3)`}
          </pre>
        </div>
      </>
    ),
  },
  "perl_hashes": {
    title: "Perl Hashes",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Hashes in Perl
        </h2>
        <p className="leading-relaxed mb-4">
          Hashes are unordered collections of key-value pairs. They are prefixed with <code>%</code>.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`#!/usr/bin/perl
use strict;
use warnings;

# Hash declaration
my %person = (
    name => "John",
    age  => 30,
    city => "New York"
);

# Alternative syntax
my %data = ("key1", "value1", "key2", "value2");

# Access values (use $ for scalar)
print $person{name} . "\\n";  # John
print $person{age} . "\\n";   # 30

# Modify values
$person{age} = 31;

# Add new key-value
$person{email} = "john@example.com";

# Delete key
delete $person{city};

# Check if key exists
if (exists $person{name}) {
    print "Name exists\\n";
}

# Check if value is defined
if (defined $person{name}) {
    print "Name is defined\\n";
}`}
          </pre>
        </div>
      </>
    ),
  },
  "perl_hash_ops": {
    title: "Hash Operations",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Hash Operations
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`#!/usr/bin/perl
use strict;
use warnings;

my %hash = (a => 1, b => 2, c => 3);

# Get all keys
my @keys = keys %hash;

# Get all values
my @values = values %hash;

# Get key-value pairs
while (my ($key, $value) = each %hash) {
    print "$key => $value\\n";
}

# Iterate over keys
foreach my $key (sort keys %hash) {
    print "$key: $hash{$key}\\n";
}

# Hash slice
my @subset = @hash{qw(a b)};  # (1, 2)

# Merge hashes
my %hash1 = (a => 1, b => 2);
my %hash2 = (c => 3, d => 4);
my %merged = (%hash1, %hash2);

# Number of keys
my $count = scalar keys %hash;
print "Count: $count\\n";`}
          </pre>
        </div>
      </>
    ),
  },
  "perl_hash_functions": {
    title: "Hash Functions",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Hash Functions
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`#!/usr/bin/perl
use strict;
use warnings;

my %scores = (
    alice => 95,
    bob   => 87,
    carol => 92
);

# Sort by keys
foreach my $name (sort keys %scores) {
    print "$name: $scores{$name}\\n";
}

# Sort by values
foreach my $name (sort { $scores{$b} <=> $scores{$a} } keys %scores) {
    print "$name: $scores{$name}\\n";
}

# Reverse hash (value => key)
my %reverse = reverse %scores;

# Hash of arrays
my %hobbies = (
    john => ["reading", "gaming"],
    jane => ["hiking", "cooking"]
);

foreach my $person (keys %hobbies) {
    print "$person: @{$hobbies{$person}}\\n";
}

# Count occurrences
my @words = qw(apple banana apple cherry banana apple);
my %count;
$count{$_}++ foreach @words;

foreach my $word (sort keys %count) {
    print "$word: $count{$word}\\n";
}`}
          </pre>
        </div>
      </>
    ),
  },
  "perl_operators": {
    title: "Arithmetic Operators",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Arithmetic Operators
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`#!/usr/bin/perl
use strict;
use warnings;

my $a = 10;
my $b = 3;

print "Add: " . ($a + $b) . "\\n";       # 13
print "Subtract: " . ($a - $b) . "\\n";  # 7
print "Multiply: " . ($a * $b) . "\\n";  # 30
print "Divide: " . ($a / $b) . "\\n";    # 3.333...
print "Modulo: " . ($a % $b) . "\\n";    # 1
print "Power: " . ($a ** $b) . "\\n";    # 1000

# Assignment operators
my $x = 10;
$x += 5;   # $x = $x + 5
$x -= 3;   # $x = $x - 3
$x *= 2;   # $x = $x * 2
$x /= 4;   # $x = $x / 4
$x %= 3;   # $x = $x % 3
$x **= 2;  # $x = $x ** 2

# Increment/Decrement
my $i = 5;
print ++$i . "\\n";  # 6 (pre-increment)
print $i++ . "\\n";  # 6 (post-increment, then 7)
print --$i . "\\n";  # 6 (pre-decrement)
print $i-- . "\\n";  # 6 (post-decrement, then 5)`}
          </pre>
        </div>
      </>
    ),
  },
  "perl_comparison": {
    title: "Comparison Operators",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Comparison Operators
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`#!/usr/bin/perl
use strict;
use warnings;

# Numeric comparison
my $a = 10;
my $b = 20;

print "a == b: " . ($a == $b) . "\\n";   # Equal
print "a != b: " . ($a != $b) . "\\n";   # Not equal
print "a < b: " . ($a < $b) . "\\n";     # Less than
print "a > b: " . ($a > $b) . "\\n";     # Greater than
print "a <= b: " . ($a <= $b) . "\\n";   # Less or equal
print "a >= b: " . ($a >= $b) . "\\n";   # Greater or equal
print "a <=> b: " . ($a <=> $b) . "\\n"; # Spaceship (-1, 0, 1)

# String comparison
my $s1 = "apple";
my $s2 = "banana";

print "s1 eq s2: " . ($s1 eq $s2) . "\\n";   # Equal
print "s1 ne s2: " . ($s1 ne $s2) . "\\n";   # Not equal
print "s1 lt s2: " . ($s1 lt $s2) . "\\n";   # Less than
print "s1 gt s2: " . ($s1 gt $s2) . "\\n";   # Greater than
print "s1 le s2: " . ($s1 le $s2) . "\\n";   # Less or equal
print "s1 ge s2: " . ($s1 ge $s2) . "\\n";   # Greater or equal
print "s1 cmp s2: " . ($s1 cmp $s2) . "\\n"; # String spaceship`}
          </pre>
        </div>
      </>
    ),
  },
  "perl_logical": {
    title: "Logical Operators",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Logical Operators
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`#!/usr/bin/perl
use strict;
use warnings;

my $a = 1;  # True
my $b = 0;  # False

# AND operators
print "a && b: " . ($a && $b) . "\\n";
print "a and b: " . ($a and $b) . "\\n";

# OR operators
print "a || b: " . ($a || $b) . "\\n";
print "a or b: " . ($a or $b) . "\\n";

# NOT operators
print "!a: " . (!$a) . "\\n";
print "not a: " . (not $a) . "\\n";

# Default value pattern
my $name = undef;
my $display = $name || "Anonymous";
print "Display: $display\\n";  # Anonymous

# Defined-or operator
my $value = 0;
my $result = $value // "default";  # 0 (because 0 is defined)
print "Result: $result\\n";

# Ternary operator
my $age = 20;
my $status = ($age >= 18) ? "Adult" : "Minor";
print "Status: $status\\n";`}
          </pre>
        </div>
      </>
    ),
  },
  "perl_string_ops": {
    title: "String Operators",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          String Operators
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`#!/usr/bin/perl
use strict;
use warnings;

# Concatenation
my $str1 = "Hello";
my $str2 = "World";
my $combined = $str1 . ", " . $str2 . "!";
print "$combined\\n";

# Concatenation assignment
my $text = "Hello";
$text .= " World";
print "$text\\n";

# Repetition
my $repeat = "Ha" x 3;
print "$repeat\\n";  # HaHaHa

# Repetition assignment
my $laugh = "Ha";
$laugh x= 3;
print "$laugh\\n";  # HaHaHa

# String binding (match)
my $str = "Hello World";
if ($str =~ /World/) {
    print "Match found\\n";
}

# String binding (not match)
if ($str !~ /Perl/) {
    print "No match\\n";
}

# Range operator
my @letters = ('a' .. 'z');
my @nums = (1 .. 10);
print "@letters[0..4]\\n";  # a b c d e`}
          </pre>
        </div>
      </>
    ),
  },
  "perl_control": {
    title: "If-Else Statement",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          If-Else Statement
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`#!/usr/bin/perl
use strict;
use warnings;

my $age = 20;

# Basic if
if ($age >= 18) {
    print "Adult\\n";
}

# If-else
if ($age >= 18) {
    print "Adult\\n";
} else {
    print "Minor\\n";
}

# If-elsif-else
my $score = 85;

if ($score >= 90) {
    print "Grade: A\\n";
} elsif ($score >= 80) {
    print "Grade: B\\n";
} elsif ($score >= 70) {
    print "Grade: C\\n";
} else {
    print "Grade: F\\n";
}

# Statement modifier (postfix if)
print "Adult\\n" if $age >= 18;

# Ternary operator
my $status = ($age >= 18) ? "Adult" : "Minor";
print "Status: $status\\n";`}
          </pre>
        </div>
      </>
    ),
  },
  "perl_unless": {
    title: "Unless Statement",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Unless Statement
        </h2>
        <p className="leading-relaxed mb-4">
          <code>unless</code> is the opposite of <code>if</code> - it executes when the condition is false.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`#!/usr/bin/perl
use strict;
use warnings;

my $logged_in = 0;

# Unless (if not)
unless ($logged_in) {
    print "Please log in\\n";
}

# Equivalent to
if (!$logged_in) {
    print "Please log in\\n";
}

# Unless-else
unless ($logged_in) {
    print "Not logged in\\n";
} else {
    print "Welcome!\\n";
}

# Statement modifier
print "Please log in\\n" unless $logged_in;

# Check for empty array
my @items = ();
unless (@items) {
    print "Array is empty\\n";
}`}
          </pre>
        </div>
      </>
    ),
  },
  "perl_given_when": {
    title: "Given-When (Switch)",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Given-When Statement
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`#!/usr/bin/perl
use strict;
use warnings;
use feature 'switch';
no warnings 'experimental::smartmatch';

my $day = "Monday";

given ($day) {
    when ("Monday")    { print "Start of week\\n"; }
    when ("Friday")    { print "End of work week\\n"; }
    when ("Saturday")  { print "Weekend!\\n"; }
    when ("Sunday")    { print "Weekend!\\n"; }
    default            { print "Regular day\\n"; }
}

# With arrays
my $fruit = "apple";
given ($fruit) {
    when ([qw(apple pear)]) { print "Pome fruit\\n"; }
    when ([qw(orange lemon)]) { print "Citrus\\n"; }
    default { print "Other fruit\\n"; }
}

# With conditions
my $num = 15;
given ($num) {
    when ($_ < 10)  { print "Small\\n"; }
    when ($_ < 100) { print "Medium\\n"; }
    default         { print "Large\\n"; }
}`}
          </pre>
        </div>
      </>
    ),
  },
  "perl_loops": {
    title: "Perl Loops",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Loops in Perl
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`#!/usr/bin/perl
use strict;
use warnings;

# for loop (C-style)
for (my $i = 0; $i < 5; $i++) {
    print "$i ";
}
print "\\n";

# foreach loop
my @fruits = qw(apple banana cherry);
foreach my $fruit (@fruits) {
    print "$fruit\\n";
}

# foreach with $_
foreach (@fruits) {
    print "$_\\n";
}

# for with range
for my $i (1..5) {
    print "$i ";
}
print "\\n";

# while loop
my $count = 0;
while ($count < 5) {
    print "$count ";
    $count++;
}
print "\\n";

# until loop (opposite of while)
$count = 0;
until ($count >= 5) {
    print "$count ";
    $count++;
}
print "\\n";

# do-while
$count = 0;
do {
    print "$count ";
    $count++;
} while ($count < 5);`}
          </pre>
        </div>
      </>
    ),
  },
  "perl_loop_control": {
    title: "Loop Control",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Loop Control Statements
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`#!/usr/bin/perl
use strict;
use warnings;

# last - exit loop (like break)
for my $i (1..10) {
    last if $i == 5;
    print "$i ";
}
print "\\n";  # 1 2 3 4

# next - skip iteration (like continue)
for my $i (1..5) {
    next if $i == 3;
    print "$i ";
}
print "\\n";  # 1 2 4 5

# redo - restart iteration
my $count = 0;
LOOP: while ($count < 3) {
    $count++;
    print "Count: $count\\n";
    if ($count == 2) {
        $count++;
        redo LOOP;
    }
}

# Loop labels
OUTER: for my $i (1..3) {
    INNER: for my $j (1..3) {
        if ($j == 2) {
            next OUTER;  # Skip to next outer iteration
        }
        print "i=$i, j=$j\\n";
    }
}`}
          </pre>
        </div>
      </>
    ),
  },
  "perl_subroutines": {
    title: "Perl Subroutines",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Subroutines in Perl
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`#!/usr/bin/perl
use strict;
use warnings;

# Basic subroutine
sub say_hello {
    print "Hello, World!\\n";
}

say_hello();

# With return value
sub get_greeting {
    return "Hello, World!";
}

my $greeting = get_greeting();
print "$greeting\\n";

# Subroutine reference
my $func_ref = \\&say_hello;
$func_ref->();

# Anonymous subroutine
my $anon = sub {
    print "Anonymous sub\\n";
};
$anon->();

# Prototype (optional)
sub add($$) {
    my ($a, $b) = @_;
    return $a + $b;
}

print add(5, 3) . "\\n";`}
          </pre>
        </div>
      </>
    ),
  },
  "perl_sub_args": {
    title: "Subroutine Arguments",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Subroutine Arguments
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`#!/usr/bin/perl
use strict;
use warnings;

# Arguments are in @_
sub greet {
    my ($name) = @_;
    print "Hello, $name!\\n";
}

greet("John");

# Multiple arguments
sub add {
    my ($a, $b) = @_;
    return $a + $b;
}

print add(5, 3) . "\\n";

# Default values
sub greet_with_default {
    my $name = shift || "Guest";
    print "Hello, $name!\\n";
}

greet_with_default();
greet_with_default("John");

# Named parameters (hash)
sub create_user {
    my %params = @_;
    my $name = $params{name} || "Unknown";
    my $age = $params{age} || 0;
    print "User: $name, Age: $age\\n";
}

create_user(name => "John", age => 30);

# Variable arguments
sub sum {
    my $total = 0;
    $total += $_ foreach @_;
    return $total;
}

print sum(1, 2, 3, 4, 5) . "\\n";`}
          </pre>
        </div>
      </>
    ),
  },
  "perl_sub_return": {
    title: "Return Values",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Return Values from Subroutines
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`#!/usr/bin/perl
use strict;
use warnings;

# Return scalar
sub square {
    my ($n) = @_;
    return $n * $n;
}

print square(5) . "\\n";  # 25

# Return array
sub get_range {
    my ($start, $end) = @_;
    return ($start .. $end);
}

my @nums = get_range(1, 5);
print "@nums\\n";  # 1 2 3 4 5

# Return hash
sub get_person {
    return (
        name => "John",
        age  => 30
    );
}

my %person = get_person();
print "$person{name}\\n";

# Return reference
sub get_array_ref {
    my @arr = (1, 2, 3);
    return \\@arr;
}

my $ref = get_array_ref();
print "@{$ref}\\n";

# Wantarray context
sub context_aware {
    return wantarray ? (1, 2, 3) : "single";
}

my @list = context_aware();  # (1, 2, 3)
my $scalar = context_aware(); # "single"`}
          </pre>
        </div>
      </>
    ),
  },
  "perl_packages": {
    title: "Perl Packages",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Packages in Perl
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`#!/usr/bin/perl
use strict;
use warnings;

# Default package is main
package main;

my $var = "In main";
print "$var\\n";

# Define a package
package MyPackage;

sub hello {
    print "Hello from MyPackage\\n";
}

our $package_var = "Package variable";

# Back to main
package main;

# Call package subroutine
MyPackage::hello();

# Access package variable
print "$MyPackage::package_var\\n";

# Multiple packages in one file
package Animal;

sub speak {
    print "Some sound\\n";
}

package Dog;

sub speak {
    print "Woof!\\n";
}

package main;

Animal::speak();
Dog::speak();`}
          </pre>
        </div>
      </>
    ),
  },
  "perl_namespaces": {
    title: "Namespaces",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Namespaces in Perl
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`#!/usr/bin/perl
use strict;
use warnings;

# Package creates namespace
package Utils::Math;

sub add {
    my ($a, $b) = @_;
    return $a + $b;
}

sub multiply {
    my ($a, $b) = @_;
    return $a * $b;
}

package Utils::String;

sub uppercase {
    my ($str) = @_;
    return uc($str);
}

package main;

# Fully qualified names
print Utils::Math::add(5, 3) . "\\n";
print Utils::Math::multiply(5, 3) . "\\n";
print Utils::String::uppercase("hello") . "\\n";

# Export functions
package MyExporter;
use Exporter 'import';
our @EXPORT_OK = qw(greet);

sub greet {
    my ($name) = @_;
    print "Hello, $name!\\n";
}

package main;
MyExporter->import('greet');
greet("World");`}
          </pre>
        </div>
      </>
    ),
  },
  "perl_regex": {
    title: "Regular Expressions",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Regular Expressions in Perl
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`#!/usr/bin/perl
use strict;
use warnings;

my $text = "Hello World 123";

# Basic match
if ($text =~ /World/) {
    print "Match found\\n";
}

# Case insensitive
if ($text =~ /world/i) {
    print "Case-insensitive match\\n";
}

# Not match
if ($text !~ /Perl/) {
    print "No match\\n";
}

# Capture groups
if ($text =~ /(\\w+) (\\w+)/) {
    print "First word: $1\\n";   # Hello
    print "Second word: $2\\n";  # World
}

# Character classes
if ($text =~ /[0-9]+/) {
    print "Contains numbers\\n";
}

# Metacharacters
# .   Any character
# \\d  Digit [0-9]
# \\w  Word character [a-zA-Z0-9_]
# \\s  Whitespace
# \\D  Non-digit
# \\W  Non-word
# \\S  Non-whitespace`}
          </pre>
        </div>
      </>
    ),
  },
  "perl_pattern": {
    title: "Pattern Matching",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Pattern Matching
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`#!/usr/bin/perl
use strict;
use warnings;

my $text = "The quick brown fox jumps";

# Anchors
$text =~ /^The/;     # Start of string
$text =~ /jumps$/;   # End of string
$text =~ /\\bquick\\b/; # Word boundary

# Quantifiers
# *   0 or more
# +   1 or more
# ?   0 or 1
# {n}   Exactly n
# {n,}  n or more
# {n,m} Between n and m

$text =~ /o+/;      # One or more 'o'
$text =~ /\\w{5}/;   # Exactly 5 word chars

# Alternation
$text =~ /cat|dog|fox/;

# Groups and backreferences
$text =~ /(\\w+) \\1/;  # Repeated word

# Non-capturing group
$text =~ /(?:the|a) (\\w+)/i;

# Lookahead
$text =~ /quick(?= brown)/;  # Positive lookahead
$text =~ /quick(?! red)/;    # Negative lookahead

# Global match
my @words = $text =~ /(\\w+)/g;
print "@words\\n";`}
          </pre>
        </div>
      </>
    ),
  },
  "perl_substitution": {
    title: "Substitution",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Substitution with Regex
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`#!/usr/bin/perl
use strict;
use warnings;

my $text = "Hello World World";

# Basic substitution
$text =~ s/World/Perl/;
print "$text\\n";  # Hello Perl World

# Global substitution
$text = "Hello World World";
$text =~ s/World/Perl/g;
print "$text\\n";  # Hello Perl Perl

# Case insensitive
$text =~ s/perl/Python/gi;

# Using captured groups
my $name = "John Smith";
$name =~ s/(\\w+) (\\w+)/$2, $1/;
print "$name\\n";  # Smith, John

# Transliteration (tr///)
my $str = "hello";
$str =~ tr/a-z/A-Z/;  # Uppercase
print "$str\\n";  # HELLO

# Delete characters
$str = "hello123";
$str =~ tr/0-9//d;  # Delete digits
print "$str\\n";  # hello

# Return substitution without modifying
my $original = "Hello World";
my $modified = $original =~ s/World/Perl/r;
print "Original: $original\\n";
print "Modified: $modified\\n";`}
          </pre>
        </div>
      </>
    ),
  },
  "perl_modifiers": {
    title: "Regex Modifiers",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Regular Expression Modifiers
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`#!/usr/bin/perl
use strict;
use warnings;

# i - Case insensitive
"HELLO" =~ /hello/i;

# g - Global (all matches)
my @matches = "a1b2c3" =~ /(\\d)/g;

# m - Multiline (^ and $ match line boundaries)
my $text = "line1\\nline2";
$text =~ /^line2$/m;

# s - Single line (. matches newline)
$text =~ /line1.line2/s;

# x - Extended (allow whitespace and comments)
$text =~ /
    line1   # First line
    \\s+     # Whitespace
    line2   # Second line
/x;

# Combining modifiers
$text =~ /pattern/gims;

# e - Evaluate replacement
my $str = "hello world";
$str =~ s/(\\w+)/ucfirst($1)/ge;
print "$str\\n";  # Hello World

# r - Non-destructive (return result)
my $original = "hello";
my $result = $original =~ s/hello/world/r;
# $original unchanged`}
          </pre>
        </div>
      </>
    ),
  },
  "perl_file_io": {
    title: "File Handling",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          File Handling in Perl
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`#!/usr/bin/perl
use strict;
use warnings;

# Open file for reading
open(my $fh, '<', 'file.txt') or die "Cannot open: $!";

# Read and close
while (my $line = <$fh>) {
    print $line;
}
close($fh);

# Open for writing
open($fh, '>', 'output.txt') or die "Cannot open: $!";
print $fh "Hello, World!\\n";
close($fh);

# Open for appending
open($fh, '>>', 'output.txt') or die "Cannot open: $!";
print $fh "Appended line\\n";
close($fh);

# Three-argument open modes
# '<'   Read
# '>'   Write (truncate)
# '>>'  Append
# '+<'  Read/write
# '+>'  Read/write (truncate)

# Using autodie
use autodie;
open(my $file, '<', 'data.txt');  # Dies automatically on error`}
          </pre>
        </div>
      </>
    ),
  },
  "perl_read_files": {
    title: "Reading Files",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Reading Files
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`#!/usr/bin/perl
use strict;
use warnings;

# Read line by line
open(my $fh, '<', 'file.txt') or die "Cannot open: $!";
while (my $line = <$fh>) {
    chomp($line);  # Remove newline
    print "$line\\n";
}
close($fh);

# Read entire file into array
open($fh, '<', 'file.txt') or die "Cannot open: $!";
my @lines = <$fh>;
close($fh);

# Read entire file into scalar
open($fh, '<', 'file.txt') or die "Cannot open: $!";
my $content = do { local $/; <$fh> };
close($fh);

# Read with line numbers
open($fh, '<', 'file.txt') or die "Cannot open: $!";
while (<$fh>) {
    print "$.: $_";  # $. is line number
}
close($fh);

# Read binary file
open($fh, '<:raw', 'file.bin') or die "Cannot open: $!";
my $buffer;
read($fh, $buffer, 1024);  # Read 1024 bytes
close($fh);`}
          </pre>
        </div>
      </>
    ),
  },
  "perl_write_files": {
    title: "Writing Files",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Writing Files
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`#!/usr/bin/perl
use strict;
use warnings;

# Write to file
open(my $fh, '>', 'output.txt') or die "Cannot open: $!";
print $fh "Line 1\\n";
print $fh "Line 2\\n";
close($fh);

# Append to file
open($fh, '>>', 'output.txt') or die "Cannot open: $!";
print $fh "Appended line\\n";
close($fh);

# Write array
my @lines = ("Line 1\\n", "Line 2\\n", "Line 3\\n");
open($fh, '>', 'output.txt') or die "Cannot open: $!";
print $fh @lines;
close($fh);

# printf for formatted output
open($fh, '>', 'output.txt') or die "Cannot open: $!";
printf $fh "Name: %s, Age: %d\\n", "John", 30;
printf $fh "Price: %.2f\\n", 19.99;
close($fh);

# say (includes newline)
use feature 'say';
open($fh, '>', 'output.txt') or die "Cannot open: $!";
say $fh "Line with automatic newline";
close($fh);`}
          </pre>
        </div>
      </>
    ),
  },
  "perl_directories": {
    title: "Directory Operations",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Directory Operations
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`#!/usr/bin/perl
use strict;
use warnings;
use File::Spec;
use Cwd;

# Get current directory
my $cwd = getcwd();
print "Current: $cwd\\n";

# Change directory
chdir('/tmp') or die "Cannot chdir: $!";

# Create directory
mkdir('newdir') or die "Cannot mkdir: $!";
mkdir('parent/child', 0755);

# Remove directory
rmdir('newdir') or die "Cannot rmdir: $!";

# Read directory
opendir(my $dh, '.') or die "Cannot opendir: $!";
my @files = readdir($dh);
closedir($dh);

# Filter files
my @txt_files = grep { /\\.txt$/ } @files;

# Glob pattern
my @all_txt = glob("*.txt");

# File::Spec for portable paths
my $path = File::Spec->catfile('dir', 'subdir', 'file.txt');
print "$path\\n";`}
          </pre>
        </div>
      </>
    ),
  },
  "perl_file_tests": {
    title: "File Tests",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          File Test Operators
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`#!/usr/bin/perl
use strict;
use warnings;

my $file = 'test.txt';

# Existence and type
-e $file;   # Exists
-f $file;   # Regular file
-d $file;   # Directory
-l $file;   # Symbolic link

# Permissions
-r $file;   # Readable
-w $file;   # Writable
-x $file;   # Executable
-o $file;   # Owned by effective uid

# Size
-z $file;   # Zero size
-s $file;   # Non-zero (returns size)

# Age (in days)
-M $file;   # Modification age
-A $file;   # Access age
-C $file;   # Inode change age

# Example usage
if (-e $file && -f $file) {
    print "$file exists and is a regular file\\n";
    print "Size: " . (-s $file) . " bytes\\n";
}

# Stacked tests
if (-f $file && -r _ && -w _) {
    print "File is readable and writable\\n";
}

# stat for detailed info
my @stat = stat($file);
print "Size: $stat[7], Modified: $stat[9]\\n";`}
          </pre>
        </div>
      </>
    ),
  },
  "perl_modules": {
    title: "Using Modules",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Using Perl Modules
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`#!/usr/bin/perl
use strict;
use warnings;

# Load module
use File::Basename;
use Data::Dumper;
use JSON;
use LWP::Simple;

# Import specific functions
use File::Copy qw(copy move);
use List::Util qw(sum max min);

# File::Basename example
my $path = '/home/user/file.txt';
my $filename = basename($path);
my $dirname = dirname($path);

# Data::Dumper for debugging
my %hash = (a => 1, b => 2);
print Dumper(\\%hash);

# List::Util example
my @numbers = (1, 2, 3, 4, 5);
print "Sum: " . sum(@numbers) . "\\n";
print "Max: " . max(@numbers) . "\\n";

# JSON example
my $json_str = '{"name":"John","age":30}';
my $data = decode_json($json_str);
print $data->{name} . "\\n";

# require vs use
require Module::Name;  # Runtime loading
use Module::Name;      # Compile-time loading`}
          </pre>
        </div>
      </>
    ),
  },
  "perl_create_modules": {
    title: "Creating Modules",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Creating Perl Modules
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# MyModule.pm
package MyModule;
use strict;
use warnings;
use Exporter 'import';

our @EXPORT_OK = qw(greet add);
our %EXPORT_TAGS = (all => [@EXPORT_OK]);

sub greet {
    my ($name) = @_;
    return "Hello, $name!";
}

sub add {
    my ($a, $b) = @_;
    return $a + $b;
}

1;  # Module must return true

__END__

=head1 NAME

MyModule - A sample Perl module

=head1 SYNOPSIS

    use MyModule qw(greet add);
    print greet("World");
    print add(2, 3);

=cut

# Using the module (main.pl)
#!/usr/bin/perl
use strict;
use warnings;
use lib '.';  # Add current dir to @INC
use MyModule qw(greet add);

print greet("Perl") . "\\n";
print add(5, 3) . "\\n";`}
          </pre>
        </div>
      </>
    ),
  },
  "perl_cpan": {
    title: "CPAN",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          CPAN - Comprehensive Perl Archive Network
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Using cpan command
cpan Module::Name
cpan -i Module::Name    # Install
cpan -u Module::Name    # Upgrade

# Using cpanm (recommended)
# Install cpanm first
cpan App::cpanminus

# Then use cpanm
cpanm Module::Name
cpanm --sudo Module::Name
cpanm -n Module::Name   # Skip tests

# Search CPAN
# Visit https://metacpan.org/

# Common useful modules
cpanm JSON
cpanm LWP::UserAgent
cpanm DBI
cpanm Moose
cpanm DateTime
cpanm Try::Tiny
cpanm File::Slurp

# Local installation
cpanm -l ~/perl5 Module::Name

# From a requirements file
# cpanfile
requires 'JSON';
requires 'DBI', '>= 1.6';

# Install from cpanfile
cpanm --installdeps .`}
          </pre>
        </div>
      </>
    ),
  },
  "perl_oop": {
    title: "Object-Oriented Perl",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          OOP Basics in Perl
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`#!/usr/bin/perl
use strict;
use warnings;

package Person;

# Constructor
sub new {
    my ($class, %args) = @_;
    my $self = {
        name => $args{name} || "Unknown",
        age  => $args{age}  || 0,
    };
    bless $self, $class;
    return $self;
}

# Getter
sub name {
    my ($self) = @_;
    return $self->{name};
}

# Setter
sub set_name {
    my ($self, $name) = @_;
    $self->{name} = $name;
}

# Method
sub greet {
    my ($self) = @_;
    print "Hello, I'm " . $self->{name} . "\\n";
}

package main;

# Create object
my $person = Person->new(name => "John", age => 30);
$person->greet();
print "Name: " . $person->name() . "\\n";
$person->set_name("Jane");
$person->greet();`}
          </pre>
        </div>
      </>
    ),
  },
  "perl_classes": {
    title: "Perl Classes",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Creating Classes
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`#!/usr/bin/perl
use strict;
use warnings;

package BankAccount;

sub new {
    my ($class, %args) = @_;
    my $self = {
        owner   => $args{owner} || "Unknown",
        balance => $args{balance} || 0,
    };
    bless $self, $class;
    return $self;
}

sub deposit {
    my ($self, $amount) = @_;
    $self->{balance} += $amount if $amount > 0;
    return $self->{balance};
}

sub withdraw {
    my ($self, $amount) = @_;
    if ($amount > 0 && $amount <= $self->{balance}) {
        $self->{balance} -= $amount;
        return $amount;
    }
    return 0;
}

sub balance {
    my ($self) = @_;
    return $self->{balance};
}

sub to_string {
    my ($self) = @_;
    return "Owner: $self->{owner}, Balance: $self->{balance}";
}

package main;

my $account = BankAccount->new(owner => "John", balance => 1000);
print $account->to_string() . "\\n";
$account->deposit(500);
$account->withdraw(200);
print "Balance: " . $account->balance() . "\\n";`}
          </pre>
        </div>
      </>
    ),
  },
  "perl_inheritance": {
    title: "Inheritance",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Inheritance in Perl
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`#!/usr/bin/perl
use strict;
use warnings;

# Parent class
package Animal;

sub new {
    my ($class, %args) = @_;
    my $self = {
        name => $args{name} || "Unknown",
    };
    bless $self, $class;
    return $self;
}

sub speak {
    my ($self) = @_;
    print "Some generic sound\\n";
}

sub name {
    my ($self) = @_;
    return $self->{name};
}

# Child class
package Dog;
use parent 'Animal';  # or: our @ISA = ('Animal');

sub new {
    my ($class, %args) = @_;
    my $self = $class->SUPER::new(%args);
    $self->{breed} = $args{breed} || "Mixed";
    return $self;
}

sub speak {
    my ($self) = @_;
    print $self->{name} . " says: Woof!\\n";
}

package Cat;
use parent 'Animal';

sub speak {
    my ($self) = @_;
    print $self->{name} . " says: Meow!\\n";
}

package main;

my $dog = Dog->new(name => "Rex", breed => "German Shepherd");
my $cat = Cat->new(name => "Whiskers");

$dog->speak();  # Rex says: Woof!
$cat->speak();  # Whiskers says: Meow!`}
          </pre>
        </div>
      </>
    ),
  },
};
