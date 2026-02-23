import React from "react";

const ArrayList: React.FC = () => (
  <div className="mt-15">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Java ArrayList
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      <b>ArrayList</b> is a resizable array implementation of the List interface in Java.
      Unlike regular arrays, ArrayList can grow and shrink dynamically. It is part of the
      <code className="bg-gray-200 px-1 rounded">java.util</code> package.
    </p>

    <h2 className="text-2xl font-bold mt-6">Creating an ArrayList</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`import java.util.ArrayList;

// Create ArrayList of Strings
ArrayList<String> names = new ArrayList<String>();

// With diamond operator (Java 7+)
ArrayList<String> cities = new ArrayList<>();

// With initial capacity
ArrayList<Integer> numbers = new ArrayList<>(100);

// Create from existing collection
ArrayList<String> copy = new ArrayList<>(names);`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Adding Elements</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`ArrayList<String> fruits = new ArrayList<>();

// Add to end
fruits.add("Apple");
fruits.add("Banana");
fruits.add("Cherry");
// [Apple, Banana, Cherry]

// Add at specific index
fruits.add(1, "Orange");
// [Apple, Orange, Banana, Cherry]

// Add multiple elements
ArrayList<String> moreFruits = new ArrayList<>();
moreFruits.add("Mango");
moreFruits.add("Grape");
fruits.addAll(moreFruits);
// [Apple, Orange, Banana, Cherry, Mango, Grape]

// Add at index
fruits.addAll(2, moreFruits);
// Inserts Mango, Grape at index 2`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Accessing Elements</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`ArrayList<String> colors = new ArrayList<>();
colors.add("Red");
colors.add("Green");
colors.add("Blue");

// Get element by index
String first = colors.get(0);  // "Red"
String last = colors.get(colors.size() - 1);  // "Blue"

// Get size
int size = colors.size();  // 3

// Check if empty
boolean isEmpty = colors.isEmpty();  // false

// Check if contains element
boolean hasRed = colors.contains("Red");  // true

// Get index of element
int index = colors.indexOf("Green");  // 1
int lastIndex = colors.lastIndexOf("Green");  // 1`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Modifying Elements</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`ArrayList<String> items = new ArrayList<>();
items.add("One");
items.add("Two");
items.add("Three");

// Replace element at index
items.set(1, "TWO");
// [One, TWO, Three]

// Replace all (Java 8+)
items.replaceAll(s -> s.toLowerCase());
// [one, two, three]`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Removing Elements</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`ArrayList<String> list = new ArrayList<>();
list.add("A");
list.add("B");
list.add("C");
list.add("B");
list.add("D");

// Remove by index
list.remove(0);  // Removes "A"

// Remove by value (first occurrence)
list.remove("B");  // Removes first "B"

// Remove all occurrences of a value
list.removeAll(Collections.singleton("B"));

// Remove with condition (Java 8+)
list.removeIf(s -> s.equals("C"));

// Clear all elements
list.clear();`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Iterating ArrayList</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`ArrayList<String> names = new ArrayList<>();
names.add("Alice");
names.add("Bob");
names.add("Charlie");

// 1. For loop
for (int i = 0; i < names.size(); i++) {
    System.out.println(names.get(i));
}

// 2. Enhanced for loop
for (String name : names) {
    System.out.println(name);
}

// 3. Iterator
Iterator<String> iterator = names.iterator();
while (iterator.hasNext()) {
    System.out.println(iterator.next());
}

// 4. forEach with lambda (Java 8+)
names.forEach(name -> System.out.println(name));

// 5. Method reference
names.forEach(System.out::println);`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">ArrayList with Primitives</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`// ArrayList cannot hold primitives directly
// Use wrapper classes instead

ArrayList<Integer> numbers = new ArrayList<>();
numbers.add(10);      // Autoboxing: int -> Integer
numbers.add(20);
numbers.add(30);

int num = numbers.get(0);  // Auto-unboxing: Integer -> int

// Other wrapper classes
ArrayList<Double> decimals = new ArrayList<>();
ArrayList<Boolean> flags = new ArrayList<>();
ArrayList<Character> chars = new ArrayList<>();`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Sorting ArrayList</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`import java.util.Collections;

ArrayList<Integer> numbers = new ArrayList<>();
numbers.add(5);
numbers.add(2);
numbers.add(8);
numbers.add(1);

// Sort ascending
Collections.sort(numbers);  // [1, 2, 5, 8]

// Sort descending
Collections.sort(numbers, Collections.reverseOrder());  // [8, 5, 2, 1]

// Sort strings
ArrayList<String> names = new ArrayList<>();
names.add("Charlie");
names.add("Alice");
names.add("Bob");

Collections.sort(names);  // [Alice, Bob, Charlie]

// Custom sorting (Java 8+)
names.sort((a, b) -> a.length() - b.length());  // By length`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Converting ArrayList</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`ArrayList<String> list = new ArrayList<>();
list.add("A");
list.add("B");
list.add("C");

// To array
String[] array = list.toArray(new String[0]);
// or
Object[] objArray = list.toArray();

// From array to ArrayList
String[] arr = {"X", "Y", "Z"};
ArrayList<String> newList = new ArrayList<>(Arrays.asList(arr));

// To other collections
HashSet<String> set = new HashSet<>(list);
LinkedList<String> linked = new LinkedList<>(list);`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Common Methods Summary</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Method</th>
            <th className="border p-2">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border p-2">add(element)</td><td className="border p-2">Add to end</td></tr>
          <tr><td className="border p-2">add(index, element)</td><td className="border p-2">Add at index</td></tr>
          <tr><td className="border p-2">get(index)</td><td className="border p-2">Get element at index</td></tr>
          <tr><td className="border p-2">set(index, element)</td><td className="border p-2">Replace element</td></tr>
          <tr><td className="border p-2">remove(index)</td><td className="border p-2">Remove by index</td></tr>
          <tr><td className="border p-2">remove(object)</td><td className="border p-2">Remove first occurrence</td></tr>
          <tr><td className="border p-2">size()</td><td className="border p-2">Get number of elements</td></tr>
          <tr><td className="border p-2">isEmpty()</td><td className="border p-2">Check if empty</td></tr>
          <tr><td className="border p-2">contains(object)</td><td className="border p-2">Check if contains</td></tr>
          <tr><td className="border p-2">clear()</td><td className="border p-2">Remove all elements</td></tr>
        </tbody>
      </table>
    </div>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="font-semibold">ArrayList vs Array</p>
      <ul className="list-disc pl-6 mt-2 space-y-1">
        <li>ArrayList is dynamic, arrays are fixed size</li>
        <li>ArrayList uses generics, arrays use direct types</li>
        <li>ArrayList has many utility methods built-in</li>
        <li>Arrays are faster for primitive types</li>
        <li>Use ArrayList when size changes frequently</li>
      </ul>
    </div>
  </div>
);

export default ArrayList;
