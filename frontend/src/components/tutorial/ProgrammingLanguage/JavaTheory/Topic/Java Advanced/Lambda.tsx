import React from "react";

const Lambda: React.FC = () => (
  <div className="mt-15">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Java Lambda Expressions
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      <b>Lambda expressions</b>, introduced in Java 8, provide a clear and concise way to represent
      functional interfaces using an expression. They enable functional programming features and
      make code more readable and maintainable.
    </p>

    <h2 className="text-2xl font-bold mt-6">Lambda Syntax</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`// Basic syntax
(parameters) -> expression

// Or with block body
(parameters) -> {
    // statements
    return result;
}

// Examples
() -> 42                        // No parameters
x -> x * 2                      // Single parameter (parentheses optional)
(x, y) -> x + y                 // Multiple parameters
(String s) -> s.length()        // With type declaration
(int x, int y) -> { return x + y; }  // With block body`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Functional Interfaces</h2>
    <p className="leading-relaxed mt-3">
      Lambda expressions work with <b>functional interfaces</b> - interfaces with exactly one
      abstract method. Java provides many built-in functional interfaces.
    </p>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`// Custom functional interface
@FunctionalInterface
interface Calculator {
    int calculate(int a, int b);
}

// Using lambda
Calculator add = (a, b) -> a + b;
Calculator multiply = (a, b) -> a * b;

System.out.println(add.calculate(5, 3));       // 8
System.out.println(multiply.calculate(5, 3));  // 15`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Common Functional Interfaces</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Interface</th>
            <th className="border p-2">Method</th>
            <th className="border p-2">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border p-2">Predicate&lt;T&gt;</td><td className="border p-2">boolean test(T t)</td><td className="border p-2">Returns boolean</td></tr>
          <tr><td className="border p-2">Function&lt;T,R&gt;</td><td className="border p-2">R apply(T t)</td><td className="border p-2">Takes T, returns R</td></tr>
          <tr><td className="border p-2">Consumer&lt;T&gt;</td><td className="border p-2">void accept(T t)</td><td className="border p-2">Takes T, returns nothing</td></tr>
          <tr><td className="border p-2">Supplier&lt;T&gt;</td><td className="border p-2">T get()</td><td className="border p-2">Takes nothing, returns T</td></tr>
          <tr><td className="border p-2">Runnable</td><td className="border p-2">void run()</td><td className="border p-2">No params, no return</td></tr>
        </tbody>
      </table>
    </div>

    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`import java.util.function.*;

// Predicate - test condition
Predicate<Integer> isEven = n -> n % 2 == 0;
System.out.println(isEven.test(4));  // true

// Function - transform input
Function<String, Integer> length = s -> s.length();
System.out.println(length.apply("Hello"));  // 5

// Consumer - perform action
Consumer<String> print = s -> System.out.println(s);
print.accept("Hello Lambda!");

// Supplier - provide value
Supplier<Double> random = () -> Math.random();
System.out.println(random.get());

// BiFunction - two inputs
BiFunction<Integer, Integer, Integer> sum = (a, b) -> a + b;
System.out.println(sum.apply(3, 4));  // 7`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Lambda with Collections</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`List<String> names = Arrays.asList("Alice", "Bob", "Charlie", "David");

// forEach
names.forEach(name -> System.out.println(name));

// Sort
names.sort((a, b) -> a.compareTo(b));
// or
names.sort(Comparator.naturalOrder());

// removeIf
List<Integer> numbers = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5));
numbers.removeIf(n -> n % 2 == 0);  // [1, 3, 5]

// replaceAll
numbers.replaceAll(n -> n * 2);  // [2, 6, 10]`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Method References</h2>
    <p className="leading-relaxed mt-3">
      Method references provide a shorthand for lambdas that call existing methods.
    </p>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`// Types of method references

// 1. Static method reference
// ClassName::staticMethod
Function<String, Integer> parseInt = Integer::parseInt;
int num = parseInt.apply("123");  // 123

// 2. Instance method of a particular object
// object::instanceMethod
String prefix = "Hello, ";
Function<String, String> greeter = prefix::concat;
System.out.println(greeter.apply("World"));  // "Hello, World"

// 3. Instance method of an arbitrary object
// ClassName::instanceMethod
Function<String, Integer> length = String::length;
System.out.println(length.apply("Java"));  // 4

// 4. Constructor reference
// ClassName::new
Supplier<ArrayList<String>> listFactory = ArrayList::new;
ArrayList<String> list = listFactory.get();

// Comparison
List<String> names = Arrays.asList("Alice", "Bob");

// Lambda
names.forEach(name -> System.out.println(name));

// Method reference (equivalent)
names.forEach(System.out::println);`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Lambda with Streams</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// Filter even numbers and double them
List<Integer> result = numbers.stream()
    .filter(n -> n % 2 == 0)        // Keep even
    .map(n -> n * 2)                 // Double each
    .collect(Collectors.toList());   // [4, 8, 12, 16, 20]

// Find sum
int sum = numbers.stream()
    .filter(n -> n > 5)
    .mapToInt(Integer::intValue)
    .sum();  // 40

// String processing
List<String> words = Arrays.asList("java", "lambda", "stream");
String result2 = words.stream()
    .map(String::toUpperCase)
    .collect(Collectors.joining(", "));  // "JAVA, LAMBDA, STREAM"`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Effectively Final Variables</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`// Lambdas can access local variables if they're effectively final
int factor = 2;  // Effectively final (never modified)

Function<Integer, Integer> multiply = n -> n * factor;
System.out.println(multiply.apply(5));  // 10

// This won't compile:
// int count = 0;
// list.forEach(item -> count++);  // Error: count must be final

// Workaround using array or AtomicInteger
int[] count = {0};
list.forEach(item -> count[0]++);

// Or
AtomicInteger atomicCount = new AtomicInteger(0);
list.forEach(item -> atomicCount.incrementAndGet());`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Practical Examples</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`// Sorting objects by different criteria
class Person {
    String name;
    int age;
    Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
}

List<Person> people = Arrays.asList(
    new Person("Alice", 30),
    new Person("Bob", 25),
    new Person("Charlie", 35)
);

// Sort by age
people.sort((p1, p2) -> p1.age - p2.age);

// Sort by name
people.sort((p1, p2) -> p1.name.compareTo(p2.name));

// Using Comparator
people.sort(Comparator.comparing(p -> p.name));
people.sort(Comparator.comparingInt(p -> p.age));

// Event handling (GUI)
button.addActionListener(e -> System.out.println("Clicked!"));

// Thread creation
Thread thread = new Thread(() -> {
    System.out.println("Running in thread");
});
thread.start();`}
      </pre>
    </div>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="font-semibold">Best Practices</p>
      <ul className="list-disc pl-6 mt-2 space-y-1">
        <li>Keep lambdas short and focused (one expression)</li>
        <li>Use method references when they improve readability</li>
        <li>Avoid side effects in lambda expressions</li>
        <li>Use standard functional interfaces when possible</li>
        <li>Consider extracting complex lambdas into named methods</li>
      </ul>
    </div>
  </div>
);

export default Lambda;
