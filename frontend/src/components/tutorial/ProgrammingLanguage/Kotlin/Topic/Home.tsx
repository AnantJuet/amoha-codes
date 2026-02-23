import React from "react";

const KotlinHome: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Kotlin Tutorial
    </h1>

    <h2 className="text-2xl font-bold mt-4">Learn Kotlin</h2>
    <p className="text-lg leading-relaxed mt-3">
      Kotlin is a modern, trending programming language developed by JetBrains and officially
      supported by Google for Android development since 2017.
    </p>

    <p className="text-lg leading-relaxed mt-2">
      Kotlin is easy to learn, especially if you already know Java (it is 100% compatible with Java).
      It combines object-oriented and functional programming features in a single language.
    </p>

    <p className="text-lg leading-relaxed mt-2">
      Kotlin is used to develop Android apps, server-side apps, desktop applications, and much more.
    </p>

    <h2 className="text-2xl font-bold mt-8">Why Learn Kotlin?</h2>
    <ul className="list-disc ml-6 mt-3 space-y-2">
      <li><strong>Concise:</strong> Drastically reduce boilerplate code compared to Java</li>
      <li><strong>Safe:</strong> Avoid null pointer exceptions with built-in null safety</li>
      <li><strong>Interoperable:</strong> 100% compatible with Java libraries and frameworks</li>
      <li><strong>Modern:</strong> Supports functional programming, coroutines, and more</li>
      <li><strong>Official Android Language:</strong> Preferred by Google for Android development</li>
    </ul>

    <h2 className="text-2xl font-bold mt-8">Kotlin vs Java Comparison</h2>
    <table className="min-w-full border border-gray-300 mt-4">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 px-4 py-2">Feature</th>
          <th className="border border-gray-300 px-4 py-2">Kotlin</th>
          <th className="border border-gray-300 px-4 py-2">Java</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Null Safety</td>
          <td className="border border-gray-300 px-4 py-2">Built-in</td>
          <td className="border border-gray-300 px-4 py-2">Optional annotations</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Data Classes</td>
          <td className="border border-gray-300 px-4 py-2">One line</td>
          <td className="border border-gray-300 px-4 py-2">Many lines of boilerplate</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Extension Functions</td>
          <td className="border border-gray-300 px-4 py-2">Supported</td>
          <td className="border border-gray-300 px-4 py-2">Not supported</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Coroutines</td>
          <td className="border border-gray-300 px-4 py-2">Native support</td>
          <td className="border border-gray-300 px-4 py-2">Requires libraries</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Smart Casts</td>
          <td className="border border-gray-300 px-4 py-2">Automatic</td>
          <td className="border border-gray-300 px-4 py-2">Manual casting needed</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Examples in Each Chapter</h2>
    <p className="text-lg leading-relaxed mt-2">
      Our <strong>"Try it Yourself"</strong> editor makes it easy to learn Kotlin. You can edit the code and view the result in your browser:
    </p>

    <h3 className="text-xl font-semibold mt-4">Hello World Example</h3>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`fun main() {
    println("Hello World")
}

// Output: Hello World`}
    </pre>

    <h3 className="text-xl font-semibold mt-4">Variables Example</h3>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`fun main() {
    val name = "Kotlin"     // Immutable (read-only)
    var version = 1.9       // Mutable (can change)

    println("$name version $version")
}

// Output: Kotlin version 1.9`}
    </pre>

    <h3 className="text-xl font-semibold mt-4">Data Class Example</h3>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`// One line creates equals(), hashCode(), toString(), copy()
data class User(val name: String, val age: Int)

fun main() {
    val user = User("Alice", 25)
    println(user)  // User(name=Alice, age=25)
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-8">Where is Kotlin Used?</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
        <h3 className="font-semibold text-blue-800">Android Development</h3>
        <p className="text-sm mt-1">Official language for Android apps. Used by Netflix, Pinterest, Uber, and more.</p>
      </div>
      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
        <h3 className="font-semibold text-green-800">Server-Side</h3>
        <p className="text-sm mt-1">Build backend with Spring Boot, Ktor, or any Java framework.</p>
      </div>
      <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
        <h3 className="font-semibold text-purple-800">Multiplatform</h3>
        <p className="text-sm mt-1">Share code between Android, iOS, web, and desktop with Kotlin Multiplatform.</p>
      </div>
      <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
        <h3 className="font-semibold text-orange-800">Data Science</h3>
        <p className="text-sm mt-1">Use Kotlin for data analysis with libraries like Kotlin DataFrame.</p>
      </div>
    </div>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="text-yellow-700">
        <strong>💡 Tip:</strong> Kotlin is designed to be pragmatic. It doesn't force you to learn
        everything at once. Start with the basics and gradually explore advanced features as you need them.
      </p>
    </div>
  </div>
);

export default KotlinHome;
