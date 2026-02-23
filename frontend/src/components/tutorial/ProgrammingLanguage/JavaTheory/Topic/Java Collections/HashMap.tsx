import React from "react";

const HashMap: React.FC = () => (
  <div className="mt-15">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Java HashMap
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      <b>HashMap</b> is a part of Java's Collections framework that stores data in key-value pairs.
      It provides constant-time performance for basic operations (get and put) and allows one null
      key and multiple null values. HashMap is not synchronized and maintains no order.
    </p>

    <h2 className="text-2xl font-bold mt-6">Creating a HashMap</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`import java.util.HashMap;

// Create HashMap with String keys and Integer values
HashMap<String, Integer> ages = new HashMap<>();

// With initial capacity
HashMap<String, String> map = new HashMap<>(100);

// With initial capacity and load factor
HashMap<String, Double> prices = new HashMap<>(100, 0.75f);`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Adding Elements</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`HashMap<String, Integer> scores = new HashMap<>();

// Add key-value pairs
scores.put("Alice", 95);
scores.put("Bob", 87);
scores.put("Charlie", 92);

// put() returns previous value (or null if new key)
Integer oldValue = scores.put("Alice", 98);  // Returns 95

// putIfAbsent() - only adds if key doesn't exist
scores.putIfAbsent("David", 88);  // Adds David
scores.putIfAbsent("Alice", 100); // Doesn't change Alice (already exists)

// Add all from another map
HashMap<String, Integer> moreScores = new HashMap<>();
moreScores.put("Eve", 90);
moreScores.put("Frank", 85);
scores.putAll(moreScores);`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Accessing Elements</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`HashMap<String, Integer> map = new HashMap<>();
map.put("Apple", 10);
map.put("Banana", 20);
map.put("Cherry", 30);

// Get value by key
Integer appleCount = map.get("Apple");  // 10
Integer grapeCount = map.get("Grape");  // null (key not found)

// Get with default value
Integer count = map.getOrDefault("Grape", 0);  // 0

// Check if key exists
boolean hasApple = map.containsKey("Apple");  // true

// Check if value exists
boolean has20 = map.containsValue(20);  // true

// Get size
int size = map.size();  // 3

// Check if empty
boolean isEmpty = map.isEmpty();  // false`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Modifying Elements</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`HashMap<String, Integer> inventory = new HashMap<>();
inventory.put("Laptop", 10);
inventory.put("Mouse", 50);

// Replace value
inventory.put("Laptop", 15);  // Replaces 10 with 15

// Replace only if key exists
inventory.replace("Laptop", 20);  // Changes to 20

// Replace only if current value matches
inventory.replace("Mouse", 50, 45);  // Changes 50 to 45

// Compute new value
inventory.compute("Laptop", (key, value) -> value + 5);  // 25

// Compute if absent
inventory.computeIfAbsent("Keyboard", key -> 30);  // Adds Keyboard: 30

// Compute if present
inventory.computeIfPresent("Mouse", (key, value) -> value * 2);  // 90

// Merge
inventory.merge("Monitor", 5, Integer::sum);  // Adds Monitor: 5
inventory.merge("Laptop", 5, Integer::sum);   // Laptop becomes 30`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Removing Elements</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`HashMap<String, Integer> map = new HashMap<>();
map.put("A", 1);
map.put("B", 2);
map.put("C", 3);

// Remove by key
Integer removed = map.remove("A");  // Returns 1

// Remove only if value matches
boolean removed2 = map.remove("B", 2);  // Returns true, removes B

// Remove conditionally (Java 8+)
map.entrySet().removeIf(entry -> entry.getValue() < 5);

// Clear all
map.clear();`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Iterating HashMap</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`HashMap<String, Integer> map = new HashMap<>();
map.put("Java", 1);
map.put("Python", 2);
map.put("JavaScript", 3);

// 1. Iterate over keys
for (String key : map.keySet()) {
    System.out.println(key + " = " + map.get(key));
}

// 2. Iterate over values
for (Integer value : map.values()) {
    System.out.println(value);
}

// 3. Iterate over entries (most efficient)
for (Map.Entry<String, Integer> entry : map.entrySet()) {
    System.out.println(entry.getKey() + " = " + entry.getValue());
}

// 4. forEach with lambda (Java 8+)
map.forEach((key, value) -> {
    System.out.println(key + " = " + value);
});`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">HashMap vs Other Maps</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Feature</th>
            <th className="border p-2">HashMap</th>
            <th className="border p-2">LinkedHashMap</th>
            <th className="border p-2">TreeMap</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border p-2">Order</td><td className="border p-2">No order</td><td className="border p-2">Insertion order</td><td className="border p-2">Sorted order</td></tr>
          <tr><td className="border p-2">Null keys</td><td className="border p-2">One allowed</td><td className="border p-2">One allowed</td><td className="border p-2">Not allowed</td></tr>
          <tr><td className="border p-2">Performance</td><td className="border p-2">O(1)</td><td className="border p-2">O(1)</td><td className="border p-2">O(log n)</td></tr>
          <tr><td className="border p-2">Thread-safe</td><td className="border p-2">No</td><td className="border p-2">No</td><td className="border p-2">No</td></tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Practical Examples</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`// Word frequency counter
String text = "java is great java is powerful java";
HashMap<String, Integer> wordCount = new HashMap<>();

for (String word : text.split(" ")) {
    wordCount.merge(word, 1, Integer::sum);
}
System.out.println(wordCount);  // {java=3, is=2, great=1, powerful=1}

// Student grades
HashMap<String, ArrayList<Integer>> studentGrades = new HashMap<>();
studentGrades.put("Alice", new ArrayList<>(Arrays.asList(90, 85, 92)));
studentGrades.put("Bob", new ArrayList<>(Arrays.asList(78, 82, 88)));

// Calculate averages
studentGrades.forEach((name, grades) -> {
    double avg = grades.stream()
        .mapToInt(Integer::intValue)
        .average()
        .orElse(0);
    System.out.printf("%s: %.1f%n", name, avg);
});

// Phone book
HashMap<String, String> phoneBook = new HashMap<>();
phoneBook.put("John", "555-1234");
phoneBook.put("Jane", "555-5678");

String number = phoneBook.getOrDefault("Bob", "Not found");`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Common Methods</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Method</th>
            <th className="border p-2">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border p-2">put(key, value)</td><td className="border p-2">Add or update entry</td></tr>
          <tr><td className="border p-2">get(key)</td><td className="border p-2">Get value by key</td></tr>
          <tr><td className="border p-2">remove(key)</td><td className="border p-2">Remove by key</td></tr>
          <tr><td className="border p-2">containsKey(key)</td><td className="border p-2">Check if key exists</td></tr>
          <tr><td className="border p-2">containsValue(value)</td><td className="border p-2">Check if value exists</td></tr>
          <tr><td className="border p-2">keySet()</td><td className="border p-2">Get all keys</td></tr>
          <tr><td className="border p-2">values()</td><td className="border p-2">Get all values</td></tr>
          <tr><td className="border p-2">entrySet()</td><td className="border p-2">Get all entries</td></tr>
        </tbody>
      </table>
    </div>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="font-semibold">Best Practices</p>
      <ul className="list-disc pl-6 mt-2 space-y-1">
        <li>Use immutable objects as keys (String, Integer, etc.)</li>
        <li>Override hashCode() and equals() for custom key classes</li>
        <li>Use getOrDefault() to handle missing keys</li>
        <li>Use entrySet() for efficient iteration</li>
        <li>Consider ConcurrentHashMap for thread-safe operations</li>
      </ul>
    </div>
  </div>
);

export default HashMap;
