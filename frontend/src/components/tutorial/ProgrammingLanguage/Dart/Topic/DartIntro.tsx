import React from "react";

const DartIntro: React.FC = () => (
  <div className="mt-17 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Dart Introduction</h1>

    <h2 className="text-2xl font-bold mt-6">What is Dart?</h2>
    <p>
      Dart is a programming language designed by Google and was first unveiled in 2011. It is optimized for building user interfaces with features like hot reload for iterative changes.
    </p>

    <h2 className="text-2xl font-bold mt-6">Key Features</h2>

    <h3 className="text-xl font-semibold mt-4">Sound Null Safety</h3>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`// Non-nullable by default
String name = 'Dart';

// Nullable with ?
String? nullableName;

// Null-aware operators
print(nullableName?.length ?? 0);`}
    </pre>

    <h3 className="text-xl font-semibold mt-4">Async/Await</h3>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`Future<String> fetchData() async {
  await Future.delayed(Duration(seconds: 1));
  return 'Data loaded!';
}`}
    </pre>

    <h3 className="text-xl font-semibold mt-4">Type Inference</h3>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`var name = 'Dart';    // String inferred
var numbers = [1, 2]; // List<int> inferred`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Dart Platforms</h2>
    <table className="w-full mt-3 border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 px-4 py-2 text-left">Platform</th>
          <th className="border border-gray-300 px-4 py-2 text-left">Use Case</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Flutter</td>
          <td className="border border-gray-300 px-4 py-2">Mobile, web, desktop apps</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Dart Web</td>
          <td className="border border-gray-300 px-4 py-2">Compile to JavaScript</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Dart Native</td>
          <td className="border border-gray-300 px-4 py-2">CLI tools, servers</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-6">History of Dart</h2>
    <table className="w-full mt-3 border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 px-4 py-2 text-left">Year</th>
          <th className="border border-gray-300 px-4 py-2 text-left">Event</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2">2011</td>
          <td className="border border-gray-300 px-4 py-2">Dart unveiled by Google</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">2017</td>
          <td className="border border-gray-300 px-4 py-2">Flutter released with Dart</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">2020</td>
          <td className="border border-gray-300 px-4 py-2">Dart 2.12 with null safety</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">2023</td>
          <td className="border border-gray-300 px-4 py-2">Dart 3.0 with records and patterns</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default DartIntro;
