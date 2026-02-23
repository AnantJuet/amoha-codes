import React from "react";

const CIntro: React.FC = () => (
  <div className="mt-17 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">C Introduction</h1>

    <h2 className="text-2xl font-bold mt-6">What is C?</h2>
    <p>
      C is a general-purpose programming language created by Dennis Ritchie at the Bell Laboratories in 1972.
    </p>
    <p className="mt-3">
      It is a very popular language, despite being old. The main reason for its popularity is because it is a fundamental language in the field of computer science.
    </p>
    <p className="mt-3">
      C is strongly associated with UNIX, as it was developed to write the UNIX operating system.
    </p>

    <h2 className="text-2xl font-bold mt-6">Why Learn C?</h2>
    <ul className="list-disc ml-6 mt-3 space-y-2">
      <li>It is one of the most popular programming languages in the world</li>
      <li>If you know C, you will have no problem learning other popular programming languages such as Java, Python, C++, C#, etc., as the syntax is similar</li>
      <li>C is very fast, compared to other programming languages, like Java and Python</li>
      <li>C is very versatile; it can be used in both applications and technologies</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Difference between C and C++</h2>
    <p>
      C++ was developed as an extension of C, and both languages have almost the same syntax.
    </p>
    <p className="mt-3">
      The main difference between C and C++ is that C++ supports classes and objects, while C does not.
    </p>

    <h2 className="text-2xl font-bold mt-6">C is Used For</h2>
    <ul className="list-disc ml-6 mt-3 space-y-2">
      <li>Operating Systems (Windows, Linux, macOS)</li>
      <li>Embedded Systems (microcontrollers, IoT devices)</li>
      <li>Databases (MySQL, PostgreSQL)</li>
      <li>Compilers and Interpreters</li>
      <li>Network Drivers</li>
      <li>Game Engines</li>
      <li>System Software</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">History of C</h2>
    <table className="w-full mt-3 border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 px-4 py-2 text-left">Year</th>
          <th className="border border-gray-300 px-4 py-2 text-left">Event</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2">1972</td>
          <td className="border border-gray-300 px-4 py-2">C was invented by Dennis Ritchie</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">1978</td>
          <td className="border border-gray-300 px-4 py-2">The first book "The C Programming Language" was published</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">1989</td>
          <td className="border border-gray-300 px-4 py-2">ANSI C (C89) was standardized</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">1999</td>
          <td className="border border-gray-300 px-4 py-2">C99 standard was released</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">2011</td>
          <td className="border border-gray-300 px-4 py-2">C11 standard was released</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">2018</td>
          <td className="border border-gray-300 px-4 py-2">C17 standard was released</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default CIntro;
