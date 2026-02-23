import React from "react";

const DartDataTypes: React.FC = () => (
  <div className="mt-17 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Dart Data Types</h1>

    <h2 className="text-2xl font-bold mt-6">Numbers</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`// int - whole numbers
int age = 25;
int hex = 0xDEADBEEF;

// double - floating point
double price = 19.99;
double scientific = 1.5e10;

// num - either int or double
num value = 42;
value = 3.14;

// Operations
10 ~/ 3   // 3 (integer division)
10 % 3    // 1 (modulo)
2.pow(3)  // 8 (not available directly, use math)

// Methods
42.isEven       // true
42.isOdd        // false
(-5).abs()      // 5
3.14.round()    // 3
3.14.ceil()     // 4
3.14.floor()    // 3
3.14159.toStringAsFixed(2)  // "3.14"

// Parsing
int.parse('42')       // 42
double.parse('3.14')  // 3.14
int.tryParse('abc')   // null (safe parsing)`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Strings</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`// String literals
String single = 'Single quotes';
String double = "Double quotes";

// String interpolation
var name = 'Alice';
print('Hello, $name!');
print('2 + 2 = \${2 + 2}');

// Multi-line strings
var multiLine = '''
This is a
multi-line string
''';

var rawString = r'No escape: \\n stays as \\n';

// String methods
'hello'.toUpperCase()     // 'HELLO'
'HELLO'.toLowerCase()     // 'hello'
'  hello  '.trim()        // 'hello'
'hello'.length            // 5
'hello'.contains('ell')   // true
'hello'.startsWith('he')  // true
'hello'.substring(1, 4)   // 'ell'
'a,b,c'.split(',')        // ['a', 'b', 'c']
['a', 'b'].join('-')      // 'a-b'
'hello'.replaceAll('l', 'L')  // 'heLLo'`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Booleans</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`bool isActive = true;
bool isComplete = false;

// Only true and false are boolean
// Unlike JavaScript, no truthy/falsy values
// if ('hello') {}  // Error!
// if (1) {}        // Error!

// Must use explicit conditions
if (name.isNotEmpty) { }
if (count > 0) { }`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Lists (Arrays)</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`// Creating lists
List<int> numbers = [1, 2, 3];
var names = ['Alice', 'Bob'];
var empty = <String>[];

// Accessing elements
numbers[0]       // 1
numbers.first    // 1
numbers.last     // 3

// Modifying
numbers.add(4);
numbers.addAll([5, 6]);
numbers.insert(0, 0);
numbers.remove(3);
numbers.removeAt(0);

// Properties
numbers.length
numbers.isEmpty
numbers.isNotEmpty

// Iteration
for (var n in numbers) { print(n); }
numbers.forEach((n) => print(n));

// Transformations
numbers.map((n) => n * 2).toList()
numbers.where((n) => n > 2).toList()
numbers.reduce((a, b) => a + b)

// Spread operator
var combined = [...numbers, ...names];

// Collection if/for
var filtered = [
  for (var n in numbers)
    if (n > 2) n * 2
];`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Maps</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`// Creating maps
Map<String, int> ages = {'Alice': 30, 'Bob': 25};
var person = {
  'name': 'Alice',
  'age': 30,
};

// Accessing
ages['Alice']      // 30
ages['Unknown']    // null

// Modifying
ages['Carol'] = 35;
ages.remove('Bob');

// Properties
ages.keys      // Iterable of keys
ages.values    // Iterable of values
ages.length
ages.isEmpty

// Checking
ages.containsKey('Alice')   // true
ages.containsValue(30)      // true

// Iteration
ages.forEach((key, value) {
  print('$key: $value');
});

for (var entry in ages.entries) {
  print('\${entry.key}: \${entry.value}');
}

// Spread
var extended = {...ages, 'Dave': 40};`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Sets</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`// Creating sets
Set<int> numbers = {1, 2, 3};
var names = <String>{'Alice', 'Bob'};

// No duplicates
numbers.add(1);  // No change, 1 already exists

// Operations
numbers.add(4);
numbers.remove(1);
numbers.contains(2);  // true

// Set operations
var a = {1, 2, 3};
var b = {2, 3, 4};
a.union(b)         // {1, 2, 3, 4}
a.intersection(b)  // {2, 3}
a.difference(b)    // {1}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Runes and Symbols</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`// Runes - Unicode code points
var heart = '\\u2764';
var emoji = '\\u{1F600}';

String.fromCharCode(0x1F600)  // 😀

// Symbols - identifiers
Symbol sym = #mySymbol;
print(sym);  // Symbol("mySymbol")`}
    </pre>
  </div>
);

export default DartDataTypes;
