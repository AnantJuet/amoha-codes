import React from "react";

const JavaIntro: React.FC = () => (
  <div className="mt-15">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Introduction to Java
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      <b>Java</b> is a high-level, class-based, object-oriented programming language designed to have
      as few implementation dependencies as possible. It was developed by <b>James Gosling</b> at
      Sun Microsystems and released in 1995.
    </p>

    <h2 className="text-2xl font-bold mt-6">History of Java</h2>
    <p className="leading-relaxed mt-3">
      Java was originally developed as part of a project called "Green" at Sun Microsystems,
      initially named "Oak" after an oak tree outside James Gosling's office. It was later renamed
      to Java, inspired by Java coffee from Indonesia.
    </p>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Year</th>
            <th className="border p-2">Version</th>
            <th className="border p-2">Key Features</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border p-2">1996</td><td className="border p-2">Java 1.0</td><td className="border p-2">Initial release with basic features</td></tr>
          <tr><td className="border p-2">2004</td><td className="border p-2">Java 5</td><td className="border p-2">Generics, Annotations, Enums, Autoboxing</td></tr>
          <tr><td className="border p-2">2014</td><td className="border p-2">Java 8</td><td className="border p-2">Lambda expressions, Stream API, Default methods</td></tr>
          <tr><td className="border p-2">2017</td><td className="border p-2">Java 9</td><td className="border p-2">Module system, JShell</td></tr>
          <tr><td className="border p-2">2021</td><td className="border p-2">Java 17</td><td className="border p-2">Sealed classes, Pattern matching (LTS)</td></tr>
          <tr><td className="border p-2">2023</td><td className="border p-2">Java 21</td><td className="border p-2">Virtual threads, Pattern matching for switch (LTS)</td></tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Key Features of Java</h2>

    <h3 className="text-xl font-semibold mt-4">1. Platform Independent</h3>
    <p className="leading-relaxed mt-2">
      Java code is compiled into bytecode that can run on any platform with a JVM, regardless of
      the underlying operating system or hardware architecture.
    </p>

    <h3 className="text-xl font-semibold mt-4">2. Object-Oriented</h3>
    <p className="leading-relaxed mt-2">
      Everything in Java is an object (except primitive types). Java supports all OOP concepts:
      encapsulation, inheritance, polymorphism, and abstraction.
    </p>

    <h3 className="text-xl font-semibold mt-4">3. Simple and Familiar</h3>
    <p className="leading-relaxed mt-2">
      Java syntax is based on C++ but removes complex features like pointers, operator overloading,
      and multiple inheritance to make it easier to learn.
    </p>

    <h3 className="text-xl font-semibold mt-4">4. Robust and Secure</h3>
    <p className="leading-relaxed mt-2">
      Java provides strong memory management, automatic garbage collection, exception handling,
      and type checking to prevent errors and security vulnerabilities.
    </p>

    <h3 className="text-xl font-semibold mt-4">5. Multithreaded</h3>
    <p className="leading-relaxed mt-2">
      Java has built-in support for concurrent programming with its multithreading capabilities,
      allowing efficient utilization of CPU resources.
    </p>

    <h2 className="text-2xl font-bold mt-6">How Java Works</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`Source Code (.java)
        |
        v
   Java Compiler (javac)
        |
        v
   Bytecode (.class)
        |
        v
   Java Virtual Machine (JVM)
        |
        v
   Machine Code (Platform Specific)`}
      </pre>
    </div>

    <p className="leading-relaxed mt-4">
      The Java compiler (<code className="bg-gray-200 px-1 rounded">javac</code>) converts source code into bytecode,
      which is then executed by the JVM. This two-step process enables platform independence.
    </p>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Java Editions</h2>
    <ul className="list-disc pl-6 mt-3 space-y-2">
      <li><b>Java SE (Standard Edition):</b> Core Java platform for desktop and server applications</li>
      <li><b>Java EE (Enterprise Edition):</b> For large-scale enterprise and web applications</li>
      <li><b>Java ME (Micro Edition):</b> For mobile and embedded devices</li>
      <li><b>JavaFX:</b> For creating rich desktop applications with modern UI</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Where Java is Used</h2>
    <ul className="list-disc pl-6 mt-3 space-y-2">
      <li><b>Android Development:</b> Primary language for Android apps (with Kotlin)</li>
      <li><b>Enterprise Applications:</b> Banking, insurance, and e-commerce systems</li>
      <li><b>Web Applications:</b> Spring Boot, Jakarta EE frameworks</li>
      <li><b>Big Data:</b> Apache Hadoop, Apache Spark</li>
      <li><b>Cloud Computing:</b> Microservices and serverless applications</li>
      <li><b>Scientific Applications:</b> MATLAB alternatives, research tools</li>
    </ul>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="font-semibold">Did You Know?</p>
      <p className="mt-2">
        According to various surveys, Java consistently ranks among the top 3 most popular
        programming languages and has over 9 million developers worldwide.
      </p>
    </div>
  </div>
);

export default JavaIntro;
