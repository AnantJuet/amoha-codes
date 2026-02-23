import React from "react";

const DartHome: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold border-b-2 pb-2 mt-17">
      Learn Dart
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      <b>Dart</b> is a client-optimized programming language for developing fast apps on any platform. It's developed by Google and is the language behind Flutter, the popular cross-platform UI toolkit.
    </p>

    <p className="leading-relaxed mt-3">
      Dart is designed for a technical envelope that is particularly suited to client development, prioritizing both development (hot reload) and production (performance).
    </p>

    <h2 className="text-2xl font-bold mt-6">Why Learn Dart?</h2>

    <ul className="list-disc ml-6 mt-3 space-y-2">
      <li><b>Flutter:</b> Build beautiful, natively compiled apps from a single codebase</li>
      <li><b>Null Safety:</b> Sound null safety helps catch errors at compile time</li>
      <li><b>Fast Development:</b> Hot reload for instant changes during development</li>
      <li><b>Cross-Platform:</b> One codebase for iOS, Android, web, and desktop</li>
      <li><b>Type Safety:</b> Strong typing with type inference</li>
      <li><b>Modern Syntax:</b> Easy to learn, especially for JavaScript/Java developers</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Example</h2>

    <p className="leading-relaxed mt-3">
      Here's a simple Dart program that prints "Hello, World!":
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`void main() {
  print('Hello, World!');
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Example Explained</h2>

    <ul className="list-disc ml-6 mt-3 space-y-2">
      <li><b>void main():</b> The entry point of every Dart program</li>
      <li><b>print():</b> Built-in function to output text to the console</li>
      <li><b>Semicolons:</b> Every statement ends with a semicolon</li>
      <li><b>Single or double quotes:</b> Both work for strings</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">More Examples</h2>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`void main() {
  // Variables
  var name = 'Dart';
  int version = 3;

  // String interpolation
  print('Welcome to $name $version!');

  // Lists
  var languages = ['Dart', 'Flutter', 'Firebase'];
  for (var lang in languages) {
    print(lang);
  }

  // Functions
  String greet(String name) {
    return 'Hello, $name!';
  }

  print(greet('Developer'));
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Dart is Used For</h2>

    <ul className="list-disc ml-6 mt-3 space-y-2">
      <li>Mobile App Development (Flutter)</li>
      <li>Web Applications (Dart for Web)</li>
      <li>Desktop Applications (Flutter Desktop)</li>
      <li>Server-Side Development</li>
      <li>Command-Line Tools</li>
      <li>IoT Applications</li>
    </ul>
  </>
);

export default DartHome;
