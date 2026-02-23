import React from "react";

const JavaHome: React.FC = () => (
  <div className="mt-15">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Learn Java Programming
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      <b>Java</b> is one of the most popular, versatile, and powerful programming languages in the world.
      Developed by Sun Microsystems in 1995 (now owned by Oracle), Java is designed to be
      <b> platform-independent</b>, meaning code written in Java can run on any device that has the
      Java Virtual Machine (JVM).
    </p>

    <p className="leading-relaxed mt-3">
      Java follows the principle of <b>"Write Once, Run Anywhere" (WORA)</b>, making it an excellent
      choice for cross-platform development. It is used extensively in enterprise applications,
      Android app development, web applications, cloud computing, big data, and much more.
    </p>

    <h2 className="text-2xl font-bold mt-6">Why Learn Java?</h2>
    <ul className="list-disc pl-6 mt-3 space-y-2">
      <li><b>Platform Independent:</b> Java code runs on any platform with JVM</li>
      <li><b>Object-Oriented:</b> Everything in Java is based on objects and classes</li>
      <li><b>Robust and Secure:</b> Strong memory management and built-in security features</li>
      <li><b>Large Community:</b> Vast ecosystem of libraries, frameworks, and resources</li>
      <li><b>Career Opportunities:</b> High demand for Java developers worldwide</li>
      <li><b>Versatile:</b> Used in web, mobile, desktop, and enterprise applications</li>
    </ul>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Your First Java Program</h2>

    <p className="leading-relaxed mt-3">
      Here is a simple Java program that prints <b>"Hello, World!"</b> to the console:
    </p>

    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`}
      </pre>
    </div>

    <p className="leading-relaxed mt-4">
      This program demonstrates the basic structure of a Java application with a class definition
      and the <code className="bg-gray-200 px-1 rounded">main</code> method, which is the entry point of every Java program.
    </p>

    <h2 className="text-2xl font-bold mt-6">What You Will Learn</h2>
    <p className="leading-relaxed mt-3">
      This tutorial covers everything from Java basics to advanced topics:
    </p>
    <ul className="list-disc pl-6 mt-3 space-y-2">
      <li>Java syntax, variables, and data types</li>
      <li>Operators and control flow statements</li>
      <li>Object-Oriented Programming (OOP) concepts</li>
      <li>Collections Framework and Generics</li>
      <li>Exception handling and File I/O</li>
      <li>Multithreading and concurrency</li>
      <li>Lambda expressions and Stream API</li>
    </ul>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="font-semibold">Ready to Start?</p>
      <p className="mt-2">
        Navigate through the sidebar to explore different Java topics. Each section includes
        clear explanations, syntax examples, and practical code snippets to help you master Java programming.
      </p>
    </div>
  </div>
);

export default JavaHome;
